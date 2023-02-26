import React from "react";

const About = () => {
    return (
        <>
            <div className="bg-blue-500 rounded-xl p-10 h-76 flex justify-center">
                <div className="w-full flex flex-col gap-2 justify-center items-start">
                    <h1 className="font-semibold text-blue-200">about me</h1>
                    <h1 className="max-w-xl text-xs text-blue-200">I am a designer and developer based in India, currently pursuing a degree in computer science. I have a passion for automation and am interested in full stack development. My journey in design and programming began with creating Twitter headers and discovering bots on Discord, and has since evolved into building full stack applications using Next.js.</h1>
                </div>
            </div>
        </>
    )
}

export default About;