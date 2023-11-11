export interface Post {
  date: string;
  title: string;
  id: string;
}

export interface PostData extends Post {
  contentHtml: string;
}
