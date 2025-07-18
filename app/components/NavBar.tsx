import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex justify-center z-1 w-full  ">
      <div className=" w-[580px] h-[66px] rounded-2xl border-secondarytext border-solid border-1 px-22 py-4">
        <ul className="flex flex-row justify-between items-center text-2xl font-bold text-secondarytext ">
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
    </div>
  );
};

export default NavBar;
