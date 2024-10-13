import React from "react";
import { createPost } from "@/actions/action";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const CreatePost = async () => {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  return (
    <main className="pt-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form action={createPost} className="h-10 space-x-2 my-10">
        <input
          type="text"
          name="title"
          required
          className="border rounded px-3 h-full py-2 outline-none"
          placeholder="Post Title"
        />
        <button className="h-full px-3 py-2 rounded bg-zinc-900 text-white cursor-pointer hover:bg-zinc-700 outline-none">
          Submit
        </button>
      </form>
      <LogoutLink className="border px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-white outline-none">
        Logout
      </LogoutLink>
    </main>
  );
};

export default CreatePost;
