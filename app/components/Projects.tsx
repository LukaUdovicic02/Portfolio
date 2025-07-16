import React from "react";
import Arrow from "@/public/images/Arrow.png";

import Image from "next/image";
import Link from "next/link";

import ReactIcon from "@/public/images/icon-react.png";
import TailwindIcon from "@/public/images/icon-tailwind.png";
import NetIcon from "@/public/images/icon-net.png";
import TsIcon from "@/public/images/icon-ts.png";
import AzureIcon from "@/public/images/icon-azure.png";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className=" relative w-[1440px] h-[1024px] p-14 flex justify-center items-center flex-col">
      <div className="absolute inset-0 bg-[url(/images/backgroundHomePage.png)] bg-[position:350px_-40px] -z-1 opacity-50 bg-no-repeat"></div>
      <p
        className=" flex flex-1/4 uppercase text-3xl font-bold tracking-[0.45em] 
      justify-center items-center text-transparent bg-clip-text bg-linear-to-r
       from-orange-950  via-yellow-600 to-orange-950"
      >
        notable projects
      </p>
      <div className="flex flex-3/4">
        <ul className="flex flex-row gap-6 perspective-dramatic">
          <li
            className="w-[402px] h-[618px] bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)] 
                     rounded-2xl flex flex-col px-[22px] py-9 border-1 border-indigo-500 shadow-[0_4px_20px_#959595]
                     transition-all duration-200  hover:shadow-[0_4px_20px_#9C4500]
                     hover:translate-z-1 hover:rotate-x-1
                       
                     "
          >
            <div className="flex flex-2/3">
              <div className="h-[296px] w-[358px] bg-blck rounded-xl"></div>
            </div>

            <div className="flex-1/3">
              <p className="font-bold text-primarytext text-[16px]">
                DineEase - Bachelor Project
              </p>
              <p className="text-[16px] text-secondarytext">
                Simplify restaurant reservations with ease. Designed to help
                both managers and customers streamline the booking process for a
                smoother dining experience.
              </p>
              <div className="flex mt-5">
                <ul className="flex-3/4 flex flex-row justify-start gap-6">
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={NetIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={TailwindIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={TsIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={ReactIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={AzureIcon} alt="icon" />
                  </li>
                </ul>

                <Link href="#">
                  <div className="flex-1/4 flex flex-row items-center">
                    <p className="text-primarytext text-[16px] mr-2">GitHub</p>
                    <Image src={Arrow} alt="arrow" width={12} height={12} />
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li
            className="w-[402px] h-[618px] bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)]
                     rounded-2xl flex flex-col px-[22px] py-9 border-1 border-indigo-500 shadow-[0_4px_20px_#959595]
                      transition-all duration-200  hover:shadow-[0_4px_20px_#9C4500]
                     hover:translate-z-1 hover:rotate-x-1"
          >
            <div className="flex flex-2/3">
              <div className="h-[296px] w-[358px] bg-blck rounded-xl"></div>
            </div>

            <div className="flex-1/3">
              <p className="font-bold text-primarytext text-[16px]">
                DineEase - Bachelor Project
              </p>
              <p className="text-[16px] text-secondarytext">
                Simplify restaurant reservations with ease. Designed to help
                both managers and customers streamline the booking process for a
                smoother dining experience.
              </p>
              <div className="flex mt-5">
                <ul className="flex-3/4 flex flex-row justify-start gap-6">
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={NetIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={TailwindIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={TsIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={ReactIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={AzureIcon} alt="icon" />
                  </li>
                </ul>

                <Link href="#">
                  <div className="flex-1/4 flex flex-row items-center">
                    <p className="text-primarytext text-[16px] mr-2">GitHub</p>
                    <Image src={Arrow} alt="arrow" width={12} height={12} />
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li
            className="w-[402px] h-[618px] bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)]
                     rounded-2xl flex flex-col px-[22px] py-9 border-1 border-indigo-500 shadow-[0_4px_20px_#959595]
                     transition-all duration-200  hover:shadow-[0_4px_20px_#9C4500]
                     hover:translate-z-1 hover:rotate-x-1 "
          >
            <div className="flex flex-2/3">
              <div className="h-[296px] w-[358px] bg-blck rounded-xl"></div>
            </div>

            <div className="flex-1/3">
              <p className="font-bold text-primarytext text-[16px]">
                DineEase - Bachelor Project
              </p>
              <p className="text-[16px] text-secondarytext">
                Simplify restaurant reservations with ease. Designed to help
                both managers and customers streamline the booking process for a
                smoother dining experience.
              </p>
              <div className="flex mt-5">
                <ul className="flex-3/4 flex flex-row justify-start gap-6">
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={NetIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={TailwindIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={TsIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={ReactIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={AzureIcon} alt="icon" />
                  </li>
                </ul>

                <Link href="#">
                  <div className="flex-1/4 flex flex-row items-center">
                    <p className="text-primarytext text-[16px] mr-2">GitHub</p>
                    <Image src={Arrow} alt="arrow" width={12} height={12} />
                  </div>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
