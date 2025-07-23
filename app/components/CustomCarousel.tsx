"use client";

import React, { useEffect, useState } from "react";
import Arrow from "@/public/images/Arrow.png";
import Image from "next/image";
import { Project } from "../globalTypes";

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
    <div className="w-full flex flex-col items-center relative ">
      <div className="flex justify-between w-full px-4 mb-4 xl:hidden">
        <button
          onClick={prevSlide}
          className="2xs:backdrop-blur-sm 2xs:absolute 2xs:left-0 
          2xs:bottom-2 sm:left-0 sm:bottom-[45%] w-12 h-12 flex justify-center border-1
           border-header cursor-pointer hover:text-2xl hover:text-header 
           items-center rounded-full text-white text-lg font-bold"
        >
          <span className="-mt-[2px]">←</span>
        </button>

        <button
          onClick={nextSlide}
          className="2xs:backdrop-blur-sm 2xs:absolute 2xs:right-0 2xs:bottom-2
           sm:right-0 sm:bottom-[45%] w-12 h-12 flex border-1 border-header 
           justify-center cursor-pointer hover:text-2xl 
           hover:text-header items-center rounded-full text-white text-lg font-bold"
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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="sm:w-[402px] sm:h-[618px] 2xs:w-[250px] xs:w-[340px] 2xs:h-[600px] md:w-[340px] lg:w-[402px]
                 bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)] 
                 rounded-2xl flex flex-col px-[22px] py-9 border border-indigo-500 
                 shadow-[0_4px_20px_#959595] transition-all duration-300 
                 hover:shadow-[0_4px_20px_#9C4500] hover:rotate-[-1deg] hover:scale-105"
    >
      <div className="md:w-[300px] lg:w-[358px] sm:w-[358px] 2xs:w-auto 2xs:h-[250px] xs:h-[296px] xs:w-[300px] bg-blck rounded-xl flex items-center justify-center mb-4">
        <Image src={project.image} alt="project image" />
      </div>
      <p className="font-bold text-primarytext xs:text-[16px]">
        {project.title}
      </p>
      <p className="xs:text-[16px] 2xs:text-[15px] text-secondarytext">
        {project.desc}
      </p>
      <div className="flex mt-5 justify-between items-center">
        <ul className="flex flex-row xs:gap-4 2xs:gap-1">
          {project.icons.map((icon, i) => (
            <li key={i}>
              <Image className="w-7 h-7" src={icon} alt="tech icon" />
            </li>
          ))}
        </ul>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center 2xs:ml-2 xs:ml-0"
        >
          <p className="text-primarytext xs:text-[16px] 2xs:text-[12px] mr-2">
            GitHub
          </p>
          <Image src={Arrow} alt="arrow" width={12} height={12} />
        </a>
      </div>
    </div>
  );
};

export default CustomCarousel;
