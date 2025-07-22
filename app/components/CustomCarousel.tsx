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
  const slideCount = projects.length;

  const nextSlide = () => {
    setCurrent((current + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrent((current - 1) % slideCount);
  };

  /* 
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);

    return () => clearInterval(interval);
  }, [slideCount]);
  */

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="block md:hidden">
          <ProjectCard project={projects[0]} />
        </div>

        <div className="hidden md:flex xl:hidden gap-6">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="hidden xl:flex gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="sm:w-[402px] sm:h-[618px] xs:w-[340px] xs:h-[600px] md:w-[340px] lg:w-[402px]
                 bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)] 
                 rounded-2xl flex flex-col px-[22px] py-9 border border-indigo-500 
                 shadow-[0_4px_20px_#959595] transition-all duration-300 
                 hover:shadow-[0_4px_20px_#9C4500] hover:rotate-[-1deg] hover:scale-105"
    >
      <div className="md:w-[300px] lg:w-[358px] sm:w-[358px] xs:h-[296px] xs:w-[300px] bg-blck rounded-xl flex items-center justify-center mb-4">
        <Image src={project.image} alt="project image" />
      </div>
      <p className="font-bold text-primarytext text-[16px]">{project.title}</p>
      <p className="text-[16px] text-secondarytext">{project.desc}</p>
      <div className="flex mt-5 justify-between items-center">
        <ul className="flex flex-row gap-4">
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
          className="flex items-center"
        >
          <p className="text-primarytext text-[16px] mr-2">GitHub</p>
          <Image src={Arrow} alt="arrow" width={12} height={12} />
        </a>
      </div>
    </div>
  );
};
export default CustomCarousel;
