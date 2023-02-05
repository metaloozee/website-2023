import React from "react";

import Link from "next/link";

import { BsInstagram } from "react-icons/bs";

const Instagram = () => {
    return (
        <>
            <Link
                suppressHydrationWarning
                href="https://instagram.com/ayanprkr"
                target="_blank"
				rel="noopener noreferrer"
                className="bg-fuchsia-500 rounded-xl p-8 flex justify-end group"
            >
                <BsInstagram className="text-xl group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
            </Link>
        </>
    )
}

export default Instagram;