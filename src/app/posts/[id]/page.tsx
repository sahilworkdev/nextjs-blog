import React from "react";
import PostResponse from "@/interfaces/interface";

const page = async ({ params }: { params: { id: string } }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post: PostResponse = await response.json();
  // console.log(post);

  return (
    <main className="text-center px-7 pt-24">
      <h1 className="mb-7 hover:bg-zinc-200 text-5xl font-semibold">
        {post.title}
      </h1>
      <p className="mx-auto max-w-[700px] text-lg">{post.body}</p>
    </main>
  );
};

export default page;
