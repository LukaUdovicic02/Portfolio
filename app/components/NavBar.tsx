"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Open = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex sm:justify-center z-1 sm:h-[90px] xs:w-[384px] sm:w-full xs:h-[60px] relative  ">
      <div
        onClick={Open}
        className={`bg-[url(/images/navbarIcon.png)] w-10 h-7 duration-500 ease-in-out transition-all bg-no-repeat relative xs:block sm:hidden xs:cursor-pointer ${
          isOpen ? "rotate-90 duration-500 ease-in-out transition-all " : ""
        }`}
      ></div>
      <ul
        className={`${
          isOpen ? "xs:flex" : "xs:hidden"
        } sm:shadow-[0_4px_20px_#9C4500] sm:w-[580px] sm:h-[66px] sm:transition-all sm:hover:w-[700px] sm:hover:h-[90px] sm:hover:border-1 sm:rounded-2xl sm:border-solid sm:duration-300 sm:items-center sm:border-1 sm:px-20 sm:py-4 sm:flex sm:flex-row sm:justify-between sm:text-2xl sm:font-bold sm:text-secondarytext md:hover:px-28 md:px-22
        text-secondarytext xs:h-35 xs:w-18 xs:gap-2 xs:flex-col xs:backdrop-blur-2xl xs:rounded-lg xs:absolute  sm:top-0 xs:top-10`}
      >
        <li className="hover:text-primarytext transition duration-300 xs:text-lg sm:text-2xl ">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-primarytext transition duration-300 xs:text-lg sm:text-2xl">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-primarytext transition duration-300 xs:text-lg sm:text-2xl">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-primarytext transition duration-300 xs:text-lg sm:text-2xl">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
