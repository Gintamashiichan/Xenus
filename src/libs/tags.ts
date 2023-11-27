import axios from "axios";
import { getSortedPostsData } from "./posts";

import matter from "gray-matter";
import { Tag } from "../types/Tags";
import type { Post } from "../types/Posts";

export async function getTagList(): Promise<Tag[]> {
  // Get file names under /posts
  const tags: Tag[] = [];
  // const proceedPosts = new Array<Post>();
  // proceedPosts.push(...(await getSortedPostsData()));
  // proceedPosts.forEach((post) => {
  //   for (const tag in post.tags) {
  //     tags.push(tag as Tag);
  //   }
  // });
  const files = import.meta.glob("../../public/posts/*.md");

  for (const key in files) {
    const filename = key.match(/\/([^/]+)\.[a-z]+$/);
    if (filename !== null) {
      const res = await axios.get(`/posts/${filename[1]}.md`);
      const matterResult = matter(res.data);
      for (const tag of matterResult.data.tags) {
        tags.push(tag);
      }
    }
  }
  return Array.from(new Set(tags));
}

export async function getPostsByTag(tag: string): Promise<string[]> {
  const posts: string[] = [];
  const proceedPosts = new Array<Post>();
  proceedPosts.push(...(await getSortedPostsData()));
  proceedPosts.forEach((post) => {
    if (post.tags !== null) {
      post.tags.forEach((t) => {
        t.includes(tag) ? posts.push(post.id) : null;
      });
    }
  });
  return posts;
}
