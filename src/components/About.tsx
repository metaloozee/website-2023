import React from "react";

const About = () => {
  return (
    <>
      <div className="h-76 flex justify-center rounded-xl bg-blue-500 p-10">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <h1 className="font-semibold text-blue-200">about me</h1>
          <h1 className="max-w-xl text-xs text-blue-200">
            driven by a relentless curiosity and a passion for both web
            development and artificial intelligence, i am a 17-year-old student
            in india pursuing computer science. with over two years of
            experience as a full stack web developer, specializing in javascript
            (mainly typescript), i am also deeply interested in the
            transformative power of ai and its technologies, particularly
            machine learning & neural networks.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
