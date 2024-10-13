"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const NotFound = () => {
  const params = useParams();

  return (
    <main className="text-center px-7 pt-24">
      <h1 className="mb-7 text-5xl font-semibold">
        Post {params.id} Not Found
      </h1>
      <Link href="/posts">Back</Link>
    </main>
  );
};

export default NotFound;
