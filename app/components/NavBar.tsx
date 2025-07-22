import Link from "next/link";
import React from "react";
import navbarIcon from "@/public/images/navbarIcon.png";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex sm:justify-center z-1 sm:h-[90px] xs:w-[384px] sm:w-full xs:h-[60px] relative ">
      <div className="bg-[url(/images/navbarIcon.png)] w-30 h-30 bg-no-repeat relative xs:block sm:hidden"></div>
      <ul
        className="
          xs:hidden xs:w-[300px] 

          sm:shadow-[0_4px_20px_#9C4500] sm:w-[580px] sm:h-[66px] sm:transition-all  
          sm:hover:w-[700px] sm:hover:h-[90px] hover:border-1  
          sm:rounded-2xl sm:border-solid sm:duration-300 sm:items-center
          sm:border-1 sm:px-20 sm:py-4 sm:flex sm:flex-row sm:justify-between  
          sm:text-2xl sm:font-bold sm:text-secondarytext
          
          md:hover:px-28 md:px-22
          "
      >
        <li className="hover:text-primarytext transition duration-300 ">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-primarytext transition duration-300 ">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-primarytext transition duration-300">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-primarytext transition duration-300">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
