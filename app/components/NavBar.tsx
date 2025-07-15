import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex justify-center z-1 w-full  ">
      <div className=" w-[600px] rounded-2xl border-secondarytext border-solid border-1 px-20 py-4">
        <ul className="flex flex-row justify-between items-center text-2xl font-bold text-secondarytext ">
          <li className="hover:text-primarytext transition duration-300 ">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:text-primarytext transition duration-300 ">
            <Link href="#">Projects</Link>
          </li>
          <li className="hover:text-primarytext transition duration-300">
            <Link href="#">About</Link>
          </li>
          <li className="hover:text-primarytext transition duration-300">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
