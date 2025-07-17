import Link from "next/link";
import React from "react";
import EmailIcon from "@/public/images/icon-email.png";
import LinkedInIcon from "@/public/images/icon-linkedin.png";
import GithubIcon from "@/public/images/icon-github.png";
import PhoneIcon from "@/public/images/icon-phone.png";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-[1440px] h-[426px] p-14 flex flex-col gap-10 items-center relative  ">
      <div
        className="bg-[url(/images/backgroundHomePage.png)] bg-no-repeat
       bg-[position:440px] bg-[length:40%] -z-1 opacity-100 absolute inset-0"
      ></div>
      <p
        className=" text-3xl font-bold  
      justify-center items-center text-header mt-5"
      >
        Luka Udovicic
      </p>
      <ul className="flex flex-row justify-around w-[444px]">
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300 ">
          <Link href="#">Home</Link>
        </li>
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300 ">
          <Link href="#">Projects</Link>
        </li>
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300">
          <Link href="#">About</Link>
        </li>
        <li className="hover:text-primarytext text-xl text-secondarytext transition duration-300">
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-8 ">
        <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300">
          <Link href="#">
            <Image className="w-6 h-6" src={EmailIcon} alt="icon" />
          </Link>
        </li>
        <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300">
          <Link href="#">
            <Image className="w-6 h-6" src={LinkedInIcon} alt="icon" />
          </Link>
        </li>
        <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300 ">
          <Link href="#">
            <Image className="w-6 h-6" src={GithubIcon} alt="icon" />
          </Link>
        </li>
      </ul>
      <div className="flex gap-15">
        <div className="flex flex-row gap-2 justify-center items-center">
          <Image className="w-6 h-6" src={EmailIcon} alt="icon" />
          <p className="text-xl text-secondarytext">lukaudovicic10@gmail.com</p>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Image className="w-6 h-6" src={PhoneIcon} alt="icon" />
          <p className="text-xl text-secondarytext">+45 50 31 64 14</p>
        </div>
      </div>
      <span className="w-[593px] bottom-14 absolute h-1 bg-secondarytext "></span>
    </div>
  );
};

export default Footer;
