import React from "react";

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import CreatePostForm from "@/components/CreatePostForm";

const CreatePost = async () => {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  return (
    <main className="pt-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <CreatePostForm />
      <LogoutLink className="border px-3 py-2 rounded  hover:bg-zinc-400 outline-none">
        Logout
      </LogoutLink>
    </main>
  );
};

export default CreatePost;
