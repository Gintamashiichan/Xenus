import matter from "gray-matter";
// import fs from 'fs';
import { remark } from "remark";
import html from "remark-html";

import axios from "axios";

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

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
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

export async function getPostContent(id: string) {
  const postData = await getPostData(id);
  return postData.contentHtml as unknown as Document;
}
