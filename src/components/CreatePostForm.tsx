import { createPost } from "@/actions/action";
import React from "react";

const CreatePostForm = () => {
  return (
    <form
      action={createPost}
      className="max-w-[400px] mx-auto gap-2 my-10 flex flex-col"
    >
      <input
        type="text"
        name="title"
        required
        className="border rounded px-3 h-10 py-2"
        placeholder="Post Title"
      />
      <textarea
        name="body"
        className="border rounded px-3 h-full py-2"
        placeholder="Post Body"
        required
        rows={6}
        cols={10}
      />
      <button className="h-full px-3 py-2 rounded bg-zinc-900 text-white cursor-pointer hover:bg-zinc-700 outline-none">
        Submit
      </button>
    </form>
  );
};

export default CreatePostForm;
