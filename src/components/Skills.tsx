import React from "react";

import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiVercel,
  SiDocker,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiCockroachlabs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <div className="group flex h-full w-full flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl bg-yellow-500 text-white">
        <div className="flex flex-col gap-5 p-6">
          <div className="flex flex-row gap-7">
            <SiHtml5 size={30} />
            <SiTypescript size={30} />
            <TbBrandNextjs size={30} />
            <SiReact size={30} />
          </div>
          <div className="flex flex-row gap-7">
            <SiVercel size={30} />
            <SiDocker size={30} />
            <SiNodedotjs size={30} />
            <SiPython size={30} />
          </div>
          <div className="flex flex-row gap-7">
            <SiGit size={30} />
            <SiPrisma size={30} />
            <SiPostgresql size={30} />
            <SiMongodb size={30} />
          </div>
          <div className="flex flex-row gap-7">
            <SiTailwindcss size={30} />
            <SiVuedotjs size={30} />
            <SiNuxtdotjs size={30} />
            <SiCockroachlabs size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
