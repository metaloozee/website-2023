import React from "react";

import Link from "next/link";

import { BsTwitter } from "react-icons/bs";

const Twitter = () => {
  return (
    <>
      <Link
        suppressHydrationWarning
        href="https://twitter.com/metaloozee"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex justify-start rounded-xl bg-sky-500 p-8"
      >
        <BsTwitter className="text-xl transition duration-500 group-hover:-rotate-12 group-hover:scale-125" />
      </Link>
    </>
  );
};

export default Twitter;
