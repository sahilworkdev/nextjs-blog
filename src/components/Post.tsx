import React from "react";
import PostResponse from "@/interfaces/interface";
import PostProps from "@/interfaces/interface";

const Post = async ({ params }: { params: PostProps }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post: PostResponse = await response.json();
  // console.log(post);
  return (
    <div>
      <h1 className="mb-7 text-5xl font-semibold">{post.title}</h1>
      <p className="mx-auto max-w-[700px] text-lg">{post.body}</p>
    </div>
  );
};

export default Post;
