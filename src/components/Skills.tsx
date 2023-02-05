import React from "react";

import { 
    SiJavascript, 
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
    SiCockroachlabs
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    return (
        <>
            <div className="bg-yellow-500/90 rounded-xl p-10 flex justify-center h-60">
                <div className="grid grid-cols-4 gap-3">
                    <SiHtml5 size={30} />
                    <SiTypescript size={30} />
                    <TbBrandNextjs size={30} />
                    <SiReact size={30} />
                    <SiVercel size={30} />
                    <SiDocker size={30} />
                    <SiNodedotjs size={30} />
                    <SiPython size={30} />
                    <SiGit size={30} />
                    <SiPrisma size={30} />
                    <SiPostgresql size={30} />
                    <SiMongodb size={30} />
                    <SiTailwindcss size={30} />
                    <SiVuedotjs size={30} />
                    <SiNuxtdotjs size={30} />
                    <SiCockroachlabs size={30} />
                </div>
            </div>
        </>
    )
}

export default Skills;