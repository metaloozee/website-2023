import React from "react";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi"

import matrix from "../../public/github-wallpaper.gif";

const Github = () => {
    return (
        <>
            <Link
					suppressHydrationWarning
					href="https://github.com/metaloozee"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'group relative flex h-full w-full flex-col gap-10 justify-between overflow-hidden rounded-2xl text-white',
					)}
				>
					<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						<Image
							src={matrix}
							alt="The Matrix scrolling characters effect"
							fill
							style={{objectFit: 'cover'}}
							className="brightness-[0.7] transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
						/>
						<span className="absolute inset-0 bg-neutral-900/50" />
					</span>

					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<BsGithub className="text-3xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
						<span className="block font-mono font-bold">github</span>

						<span className="block font-mono text-xs">my open source work &amp; contributions</span>
					</span>
				</Link>
        </>
    )
}

export default Github;