import Link from "next/link";
import React from "react";
import PostResponse from "@/interfaces/interface";

const PostsList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data: PostResponse = await response.json();
  // console.log(data);
  return (
    <div>
      <ul>
        {data.posts.map((post) => {
          return (
            <li key={post.id} className="mb-3 hover:bg-zinc-200">
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
