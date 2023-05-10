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
                className="bg-sky-500 rounded-xl p-8 flex justify-start group"
            >
                <BsTwitter className="text-xl group-hover:-rotate-12 group-hover:scale-125 transition duration-500" />
            </Link>
        </>
    )
}

export default Twitter;