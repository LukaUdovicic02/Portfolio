"use client";

import React from "react";
import CustomCarousel from "./CustomCarousel";
import { projectData } from "../data/projectData";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative 2xs:w-full mx-auto max-w-[1440px] min-h-screen 2xs:p-8 sm:p-14 flex 
      justify-center items-center flex-col"
    >
      <div
        className="absolute inset-0 bg-[url(/images/backgroundHomePage.png)] 
                   2xs:bg-[position:30px_230px] sm:bg-[position:30px_160px] 2xs:bg-[length:80%] 
                   sm:bg-[length:100%] md:bg-[position:30px_-40px]
                  -z-1 opacity-50 bg-no-repeat"
      ></div>
      <p
        className="flex flex-1/5 uppercase 2xs:text-lg xs:text-xl 2xs:tracking-[0.05em] xs:tracking-[0.35em] 
        sm:text-3xl font-bold sm:tracking-[0.45em] 
                   justify-center items-center text-transparent bg-clip-text bg-linear-to-r
                 from-orange-950  via-yellow-600 to-orange-950 animated-gradient"
      >
        notable projects
      </p>
      <CustomCarousel projects={projectData()} />
    </div>
  );
};

export default Projects;
