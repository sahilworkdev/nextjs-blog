import React from "react";
import PostResponse from "@/interfaces/interface";
import PostProps from "@/interfaces/interface";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const Post = async ({ params }: { params: { id: string } }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const post: PostResponse = await response.json();
  // console.log(post);
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if(!post){
    notFound()
  }
  return (
    <div>
      <h1 className="mb-7 text-5xl font-semibold">{post.title}</h1>
      <p className="mx-auto max-w-[700px] text-lg">{post.body}</p>
    </div>
  );
};

export default Post;
