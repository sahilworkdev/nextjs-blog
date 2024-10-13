import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import Post from "@/components/Post";
// import Params from "@/interfaces/interface";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="text-center px-7 pt-24">
      <Suspense fallback={<Loading />}>
        <Post params={params} />
      </Suspense>
    </main>
  );
};

export default page;
