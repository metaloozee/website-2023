import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex h-full w-full justify-center rounded-xl bg-indigo-500/20 p-10">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
          <Image
            className="rounded-full glow-indigo-300"
            src={"/MetalOoze05.png"}
            width={100}
            height={100}
            alt="metalooze"
          />
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <h1 className="font-semibold text-indigo-200 text-glow-indigo-300">
              ayan
            </h1>
            <h1 className="text-indigo-200 text-glow-indigo-300">
              17 year old programming enthusiast 🪄
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
