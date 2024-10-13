export default interface Post {
  id: number;
  title: string;
  body?: string;
}

export default interface PostResponse {
  posts: Post[];
}

export default interface PostProps {
  params: { id: string };
}

export default interface Params {
  params: { id: string };
}
