export interface Post {
  date: string;
  title: string;
  id: string;
  description: string | null;
  tags: Array<string> | null;
  thumbnail: string | null;
}

export interface PostData extends Post {
  contentHtml: string;
}
