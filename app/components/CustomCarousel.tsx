"use client";

import React, { useEffect, useState } from "react";
import { Project } from "../globalTypes";
import { ProjectCard } from "./ProjectCard";


type Props = {
  projects: Project[];
};

function CustomCarousel({ projects }: Props) {
  const [current, setCurrent] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    if (windowWidth >= 1280) return 3; // xl
    if (windowWidth >= 1024) return 2; // lg
    if (windowWidth >= 768) return 2; // md
    return 1;
  };

  const visible = getVisibleCards();
  const maxIndex = projects.length - visible;

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleProjects = projects.slice(current, current + visible);

  return (
    <div className="w-full flex flex-col items-center relative sm:mt-15 ">
      <div className="xl:hidden">
        <button
          onClick={prevSlide}
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 
          flex justify-center items-center border-1 border-header text-white text-lg font-bold 
         cursor-pointer hover:text-2xl hover:text-header rounded-full backdrop-blur-sm z-1"
        >
          <span className="-mt-[2px]">←</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 
         flex justify-center items-center border-1 border-header text-white text-lg font-bold 
         cursor-pointer hover:text-2xl hover:text-header rounded-full backdrop-blur-sm z-1"
        >
          <span className="-mt-[2px]">→</span>
        </button>
      </div>

      <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap transition-transform duration-500 ease-in-out">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}



export default CustomCarousel;
