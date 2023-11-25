import axios from "axios";

import matter from "gray-matter";
import { marked, MarkedExtension } from "marked";

// Extentions
import markedKatex from "marked-katex-extension";
import { markedEmoji } from "marked-emoji";
import markedAdmonition from "marked-admonition-extension";

import { Octokit } from "@octokit/rest";

import "marked-admonition-extension/dist/index.css";

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
  const octokit = new Octokit();
  // Get all the emojis available to use on GitHub.
  const resOctokit = await octokit.rest.emojis.get();
  const emojis = resOctokit.data;

  const octokitOptions = {
    emojis,
    unicode: false,
  };
  marked
    .use(markedEmoji(octokitOptions))
    .use(markedKatex())
    .use(markedAdmonition as MarkedExtension);

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