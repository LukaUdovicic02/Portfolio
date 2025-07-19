import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex justify-center z-1 h-[90px]">
      <ul
        className="  shadow-[0_4px_20px_#9C4500] w-[580px] h-[66px] transition-all duration-300
         hover:w-[700px] hover:h-[90px] hover:border-1 hover:px-32
         rounded-2xl border-solid
         border-1 px-22 py-4 flex flex-row justify-between items-center 
        text-2xl font-bold text-secondarytext "
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
