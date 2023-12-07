import axios from "axios";

import matter from "gray-matter";
import { marked } from "marked";

import { getEmojis, getMarkedAdmonition, getMarkedKatex } from './extentions'

export async function getSortedPostsData() {
  // Get file names under /posts
  const allPostsData = [];
  const files = import.meta.glob("../../public/posts/*.md");

  for (const key in files) {
    const filename = key.match(/\/([^/]+)\.[a-z]+$/);
    if (filename !== null) {
      const res = await axios.get(`/posts/${filename[1]}.md`);
      const matterResult = matter(res.data);
      const postData = {
        id: filename[1],
        ...(matterResult.data as {
          date: string;
          title: string;
          description: string | null;
          tags: string[] | null;
          thumbnail: string | null;
        }),
      };
      allPostsData.push(postData);
    }
  }
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const files = import.meta.glob("../../public/posts/*.md");

  for (const key in files) {
    const filename = key.match(/\/([^/]+)\.[a-z]+$/);
    if (filename !== null) {
      return {
        params: {
          id: filename[1],
        },
      };
    }
  }
}

export async function getPostData(id: string) {
  const res = await axios.get(`/posts/${id}.md`);
  const matterResult = matter(res.data);

  marked
    .use(await getEmojis())
    .use(getMarkedKatex())
    .use(getMarkedAdmonition());

  const contentHtml = await marked(matterResult.content, {
    async: true,
  });
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      description: string | null;
      tags: string[] | null;
      thumbnail: string | null;
    }),
  };
}
