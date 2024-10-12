export default interface Post {
  id: number;
  title: string;
  body?: string
}

export default interface PostResponse {
  posts: Post[];
}
