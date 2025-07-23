
import React from "react";
import EmailIcon from "@/public/images/icon-email.png";
import LinkedInIcon from "@/public/images/icon-linkedin.png";
import GithubIcon from "@/public/images/icon-github.png";
import PhoneIcon from "@/public/images/icon-phone.png";

import Image from "next/image";



const Footer = () => {
  return (
    <div className="max-w-[1350px] mx-auto xs:w-full h-[426px] xs:p-8 sm:p-14 flex flex-col gap-10 items-center relative  ">
      <div
        className="bg-[url(/images/backgroundHomePage.png)] bg-no-repeat xs:bg-[position:0px] xs:bg-[length:100%_80%]
       md:bg-[position:250px] lg:bg-[position:280px]  md:bg-[length:50%] -z-1 opacity-100 absolute inset-0"
      ></div>
      <p
        className=" text-3xl font-bold  
      justify-center items-center  mt-5 bg-linear-to-r text-transparent bg-clip-text
       from-orange-900  via-yellow-600 to-orange-900  animated-gradient"
      >
        Luka Udovicic
      </p>
      <ul className="flex flex-row justify-around sm:w-[444px] xs:w-full">
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300 ">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300 ">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="flex flex-row gap-8 ">
        <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300">
          <a target="blank" href="mailto:lukaudovicic10@gmail.com">
            <Image className="w-6 h-6" src={EmailIcon} alt="icon" />
          </a>
        </li>
        <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300">
          <a target="blank" href="https://www.linkedin.com/in/lukaudovicic/">
            <Image className="w-6 h-6" src={LinkedInIcon} alt="icon" />
          </a>
        </li>
        <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300 ">
          <a target="blank" href="https://github.com/LukaUdovicic02">
            <Image className="w-6 h-6" src={GithubIcon} alt="icon" />
          </a>
        </li>
      </ul>
      <div className="flex xs:flex-col xs:gap-4 md:gap-3">
        <div className="flex flex-row gap-2 justify-center items-center">
          <Image className="w-6 h-6" src={EmailIcon} alt="icon" />
          <p className="text-xl text-secondarytext">lukaudovicic10@gmail.com</p>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Image className="w-6 h-6" src={PhoneIcon} alt="icon" />
          <p className="text-xl text-secondarytext">+45 50 31 64 14</p>
        </div>
      </div>
      <span className="md:w-[593px] xs:w-3/4 xs:bottom-14 sm:bottom-8 absolute h-1 bg-secondarytext "></span>
    </div>
  );
};

export default Footer;
