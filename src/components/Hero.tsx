import React from "react";

import Image from "next/image";
import Link from "next/link";

import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
    return (
        <>
            <div className="bg-indigo-500/20 rounded-xl p-10 h-76 flex justify-center h-60">
                <div className="w-full flex flex-row gap-10 justify-center items-center">
                    <Image className="glow-indigo-300 rounded-full" src={'/MetalOoze05.png'} width={100} height={100} alt="metalooze" />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-indigo-200 text-glow-indigo-300">ayan parkar</h1>
                        <h1 className="text-indigo-200 text-glow-indigo-300">17 year old programming enthusiast</h1>
                        <Link 
                            href={'https://ayanprkr.vercel.app/'} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="underline text-xs flex flex-row items-center gap-2 text-indigo-200 text-glow-indigo-300"
                        >
                            old website 
                            <BsArrowUpRight fill="#c7d2fe" size={12} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;