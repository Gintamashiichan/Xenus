import axios from "axios";

import matter from "gray-matter";
import { marked } from "marked";

import { getEmojis, getMarkedKatex } from "./extentions";

export async function getSortedPostsData() {
  // Get file names under /posts
  const allPostsData = [];
  const files = import.meta.glob("../../public/posts/*.md");

  for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) { //不知道为什么这里用Obj
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

  for (const key in Object.keys(files)) {
    const filename = key.match(/\/([^/]+)\.[a-z]+$/);
    if (filename !== null) {
      return {
        params: {
          id: filename[1],
        },
      };
    }
    return null;
  }
}

export async function getPostData(id: string) {
  const res = await axios.get(`/posts/${id}.md`);
  const matterResult = matter(res.data);

  marked
    .use(await getEmojis())
    .use({
      extensions: [
        {
          name: "emoji",
          renderer(token) {
            return `<img class="marked-emoji" alt="${token.name}" src="${token.emoji}" height="32" width="32" style="display:inline;">`;
          },
        },
      ],
    })
    .use(getMarkedKatex());

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
