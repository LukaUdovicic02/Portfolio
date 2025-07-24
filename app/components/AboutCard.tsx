"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { About } from "../globalTypes";

type Props = {
  About: About[];
};

function AboutCard({ About }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let visibleCount = 1;
  if (windowWidth >= 640) visibleCount = 2; // sm
  if (windowWidth >= 1024) visibleCount = 4; // lg

  // Auto-rotate only if less than lg
  useEffect(() => {
    if (windowWidth >= 1024) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + visibleCount) % About.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCount, windowWidth, About.length]);

  const visibleItems = About.slice(
    currentIndex,
    currentIndex + visibleCount
  ).concat(
    currentIndex + visibleCount > About.length
      ? About.slice(0, (currentIndex + visibleCount) % About.length)
      : []
  );

  return (
    <ul className="animate-blink grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-25 xs:mb-10 sm:mt-6 md:mt-0">
      {visibleItems.map((item, index) => (
        <li
          key={index}
          className=" group text-secondarytext hover:translate-2 hover:duration-1000 relative 2xs:w-[220px]  xs:w-[300px]"
        >
          <div className="flex md:flex-row 2xs:inline">
            <div className="mr-2 2xs:w-12 xs:w-full">
              <Image src={item.icon} alt={`${item.title} Icon`} />
            </div>
            <div>
              <p className="xs:text-[22px] 2xs:text-[18px] align-top uppercase font-bold text-header tracking-[0.2em] mb-5">
                {item.title}
              </p>
              <p className="text-secondarytext 2xs:w-full sm:w-[400px]  lg:w-[350px] xs:text-[16px] 2xs:text-[12px]">
                {item.desc}
              </p>
            </div>
            <span className="absolute 2xs:mt-7 left-1/2 h-0.5 2xs:w-3/4 sm:w-1/5 bg-secondarytext transition-all duration-500 origin-center transform -translate-x-1/2 group-hover:w-full"></span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AboutCard;
