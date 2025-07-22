import React from "react";
import ArchIcon from "@/public/images/icon-Architecture.png";
import MaintenenaceIcon from "@/public/images/icon-maintenance.png";
import DevelopmentIcon from "@/public/images/icon-development.png";
import TestingIcon from "@/public/images/icon-testing.png";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className=" xs:w-full h-screen xs:p-8 sm:p-14 flex flex-col justify-center items-center relative"
    >
      <div
        className="absolute inset-0 bg-[url(/images/backgroundHomePage.png)] 
                   sm:bg-[position:-50px_600px] xs:bg-[position:-100px_420px] -z-1 opacity-70 
                   sm:bg-[length:120%_30%] md:bg-[length:120%_50%]
                   xs:bg-[length:140%_60%] bg-no-repeat"
      ></div>

      <div className="flex flex-1/2 flex-col items-center justify-start gap-15">
        <p
          className=" uppercase sm:text-3xl font-bold sm:tracking-[0.45em] xs:text-xl xs:tracking-[0.35em] 
      justify-center items-center text-transparent bg-clip-text bg-linear-to-r
       from-orange-900  via-yellow-600 to-orange-900 mt-10 animated-gradient"
        >
          ABOUT ME
        </p>
        <p className="text-secondarytext sm:text-xl sm:tracking-[0.2em] align-top xs:w-full md:w-[764px] sm:h-[246px] text-center mb-16 ">
          Software Engineering graduate and solution-oriented developer with
          hands-on experience across different areas of the software development
          lifecycle. I'm driven by the challenge of building clean, effective
          solutions and take pride in translating complex problems into simple,
          scalable systems. My passion for software development comes from the
          satisfaction of solving meaningful problems and the belief that code
          can genuinely improve lives.
        </p>
      </div>

      <div className="flex flex-1/2 ">
        <ul className="md:grid md:grid-flow-col md:grid-rows-2 md:gap-10 ">
          <li className=" group text-secondarytext hover:translate-2 hover:duration-1000 relative">
            <div className="flex md:flex-row xs:inline">
              <div className="mr-2">
                <Image src={ArchIcon} alt="architecture Icon" />
              </div>
              <div>
                <p className="text-[22px] align-top uppercase font-bold text-header tracking-[0.2em] mb-5">
                  architecture
                </p>
                <p className="text-secondarytext xs:w-full sm:w-[431px] text-[16px]">
                  I can help plan and build the architecture of your application
                  based on your specific goals and requirements. Whether you
                  have a clear structure in mind or need guidance from the
                  ground up, I'll make sure the foundation is scalable, clean,
                  and easy to maintain.
                </p>
              </div>
              <span className="absolute xs:mt-7 xs:botton-0  left-1/2 h-0.5 xs:w-3/4 sm:w-1/5 bg-secondarytext transition-all duration-500 origin-center transform -translate-x-1/2 group-hover:w-full"></span>
            </div>
          </li>
          <li className="xs:hidden md:block group text-secondarytext hover:translate-2 hover:duration-1000 relative">
            <div className="flex md:flex-row xs:inline">
              <div className="mr-2">
                <Image src={MaintenenaceIcon} alt="maintenance Icon" />
              </div>
              <div>
                <p className="text-[22px] align-top uppercase font-bold text-header tracking-[0.2em] mb-5">
                  maintenance
                </p>
                <p className="text-secondarytext xs:w-full sm:w-[431px] text-[16px]">
                  I can support you after launch by keeping your application up
                  to date, fixing bugs, and making improvements over time.
                  Whether it's small tweaks or ongoing updates, I'm here to help
                  your project stay healthy and running smoothly.
                </p>
              </div>
            </div>
            <span className="absolute xs:mt-7 xs:botton-0  left-1/2 h-0.5 xs:w-3/4 sm:w-1/5 bg-secondarytext transition-all duration-500 origin-center transform -translate-x-1/2 group-hover:w-full"></span>
          </li>
          <li className=" xs:hidden lg:block group text-secondarytext hover:translate-2 hover:duration-1000 relative">
            <div className="flex md:flex-row xs:inline">
              <div className="mr-2">
                <Image src={DevelopmentIcon} alt="architecture Icon" />
              </div>
              <div>
                <p className="text-[22px] align-top uppercase font-bold text-header tracking-[0.2em] mb-5">
                  development
                </p>
                <p className="text-secondarytext xs:w-full sm:w-[431px] text-[16px]">
                  I can develop your application based on your ideas and
                  functional needs. Whether it's building from scratch or
                  expanding on an existing codebase, I focus on writing clean,
                  maintainable code and keeping you involved throughout the
                  process.
                </p>
              </div>
            </div>
            <span className="absolute xs:mt-7 xs:botton-0  left-1/2 h-0.5 xs:w-3/4 sm:w-1/5 bg-secondarytext transition-all duration-500 origin-center transform -translate-x-1/2 group-hover:w-full"></span>
          </li>
          <li className=" xs:hidden lg:block group text-secondarytext hover:translate-2 hover:duration-1000 relative">
            <div className="flex md:flex-row xs:inline">
              <div className="mr-2">
                <Image src={TestingIcon} alt="architecture Icon" />
              </div>
              <div>
                <p className="text-[22px] align-top uppercase font-bold text-header tracking-[0.2em] mb-5">
                  testing
                </p>
                <p className="text-secondarytext xs:w-full sm:w-[431px] text-[16px]">
                  I can help ensure your application works as expected by
                  writing meaningful tests and checking for bugs. I focus on
                  catching issues early and making sure your system stays
                  reliable and stable.
                </p>
              </div>
            </div>
            <span className="absolute xs:mt-7 xs:botton-0  left-1/2 h-0.5 xs:w-3/4 sm:w-1/5 bg-secondarytext transition-all duration-500 origin-center transform -translate-x-1/2 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
