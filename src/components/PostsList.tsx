import Link from "next/link";
import React from "react";
import prisma from "@/lib/db";

const PostsList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // const response = await fetch("https://dummyjson.com/posts?limit=10");
  // const data: PostResponse = await response.json();
  // console.log(data);
  const posts = await prisma.post.findMany();
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`} className="text-2xl">
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsList;
