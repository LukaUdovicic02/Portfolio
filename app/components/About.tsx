import React from "react";
import { aboutData } from "../data/aboutData";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div
      id="about"
      className=" 2xs:w-full mx-auto max-w-[1440px] h-screen 2xs:p-8 sm:p-14 flex flex-col 
      items-center relative"
    >
      <div
        className="absolute inset-0 bg-[url(/images/backgroundHomePage.png)] 
                   sm:bg-[position:-50px_680px] 2xs:bg-[position:-100px_420px] xs:bg-[position:-90px_200px] -z-1 opacity-70 
                   sm:bg-[length:140%_40%] md:bg-[length:120%_50%]
                   2xs:bg-[length:140%_60%] bg-no-repeat"
      ></div>

      <div className="flex flex-col items-center justify-start gap-15">
        <p
          className=" uppercase sm:text-3xl font-bold sm:tracking-[0.45em] 2xs:text-xl 2xs:tracking-[0.35em] 
      justify-center items-center text-transparent bg-clip-text bg-linear-to-r
       from-orange-900  via-yellow-600 to-orange-900  sm:mt-10 animated-gradient"
        >
          ABOUT ME
        </p>
        <p
          className="text-secondarytext sm:text-xl sm:tracking-[0.2em] align-top xs:text-[14px] 2xs:text-[13px]
        2xs:w-full md:w-[764px] sm:h-[246px] text-center xs:mb-5  sm:mb-20 "
        >
          Software Engineering graduate and solution-oriented developer with
          hands-on experience across different areas of the software development
          lifecycle. I&apos;m driven by the challenge of building clean,
          effective solutions and take pride in translating complex problems
          into simple, scalable systems. My passion for software development
          comes from the satisfaction of solving meaningful problems and the
          belief that code can genuinely improve lives.
        </p>
      </div>

      <div className="flex ">
        <AboutCard About={aboutData()} />
      </div>
    </div>
  );
};

export default About;
