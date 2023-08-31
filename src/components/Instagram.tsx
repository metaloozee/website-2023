import React from "react";

import Link from "next/link";

import { BsInstagram } from "react-icons/bs";

const Instagram = () => {
  return (
    <>
      <Link
        suppressHydrationWarning
        href="https://instagram.com/ayannparkar"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex justify-end rounded-xl bg-fuchsia-500 p-8"
      >
        <BsInstagram className="text-xl transition duration-500 group-hover:rotate-12 group-hover:scale-125" />
      </Link>
    </>
  );
};

export default Instagram;
