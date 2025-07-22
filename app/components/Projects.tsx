"use client";

import React from "react";
import Arrow from "@/public/images/Arrow.png";

import Image from "next/image";
import Link from "next/link";

import ReactIcon from "@/public/images/icon-react.png";
import TailwindIcon from "@/public/images/icon-tailwind.png";
import NetIcon from "@/public/images/icon-net.png";
import TsIcon from "@/public/images/icon-ts.png";
import AzureIcon from "@/public/images/icon-azure.png";
import JavaIcon from "@/public/images/icon-java.png";
import GitIcon from "@/public/images/icon-git.png";
import GitHubIcon from "@/public/images/icon-github.png";
import UnityIcon from "@/public/images/icon-unity.png";
import AwsIcon from "@/public/images/icon-aws.png";
import AndroidIcon from "@/public/images/icon-android.png";
import DbIcon from "@/public/images/icon-db.png";
import DineEaseBG from "@/public/images/DineEaseBG.png";
import VRCS from "@/public/images/VRCS.png";
import SmartGym from "@/public/images/smartGym.png";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div
      id="projects"
      className="max-w-[1350px] mx-auto relative xs:w-full h-screen xs:p-8 sm:p-14 flex justify-center items-center flex-col"
    >
      <div
        className="absolute inset-0 bg-[url(/images/backgroundHomePage.png)] xs:bg-[position:30px_30px] xs:bg-[length:80%] sm:bg-[length:100%] 
      md:bg-[position:350px_-40px] lg:bg-[position:30px_-40px] -z-1 opacity-50 bg-no-repeat"
      ></div>
      <p
        className="flex flex-1/4 uppercase xs:text-xl xs:tracking-[0.35em] sm:text-3xl font-bold sm:tracking-[0.45em] 
      justify-center items-center text-transparent bg-clip-text bg-linear-to-r
       from-orange-950  via-yellow-600 to-orange-950 animated-gradient"
      >
        notable projects
      </p>
      <div className="flex flex-3/4">
        <ul className="flex flex-row gap-6 perspective-dramatic">
          <li
            className="sm:w-[402px] sm:h-[618px] xs:w-[340px] xs:h-[600px] bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)] 
                     rounded-2xl flex flex-col px-[22px] py-9 border-1 border-indigo-500 shadow-[0_4px_20px_#959595]
                     transition-all duration-200  hover:shadow-[0_4px_20px_#9C4500]
                     hover:translate-z-1 hover:rotate-x-1 md:w-[340px] lg:w-[402px]"
          >
            <div className="flex flex-2/3">
              <div className="h-[296px] w-[358px] bg-blck rounded-xl flex items-center">
                <Image
                  className="ml-1 "
                  src={DineEaseBG}
                  alt="dine ease background"
                />
              </div>
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
                <ul className="flex-3/4 flex flex-row justify-start sm:gap-6 xs:gap-4">
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

                <a target="blank" href="https://github.com/LukaUdovicic02/BPR2">
                  <div className="flex-1/4 flex flex-row items-center">
                    <p className="text-primarytext text-[16px] mr-2">GitHub</p>
                    <Image src={Arrow} alt="arrow" width={12} height={12} />
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li
            className="xs:hidden w-[402px] h-[618px] bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)]
                     rounded-2xl md:flex flex-col px-[22px] py-9 border-1 border-indigo-500 shadow-[0_4px_20px_#959595]
                     transition-all duration-200  hover:shadow-[0_4px_20px_#9C4500]
                     hover:translate-z-1 hover:rotate-x-1 md:w-[340px] lg:w-[402px]"
          >
            <div className="flex flex-2/3">
              <div className="h-[296px] w-[358px] bg-blck rounded-xl">
                <Image
                  className="ml-3 md:ml-0 mt-2"
                  src={VRCS}
                  alt="vr cs background"
                />
              </div>
            </div>

            <div className="flex-1/3">
              <p className="font-bold text-primarytext text-[16px]">
                CS 1.6 VR - VR School Project
              </p>
              <p className="text-[16px] text-secondarytext mb-11">
                CS 1.6 in VR with Dust2, an AK-47, and core movement. Features
                original sounds, full map access, and a detachable magazine.
              </p>
              <div className="flex mt-5">
                <ul className="flex-3/4 flex flex-row justify-start gap-6">
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={UnityIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={NetIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={GitHubIcon} alt="icon" />
                  </li>
                </ul>

                <a
                  target="blank"
                  href="https://github.com/XRD-Group-11/VR-CS-1.6"
                >
                  <div className="flex-1/4 flex flex-row items-center">
                    <p className="text-primarytext text-[16px] mr-2">GitHub</p>
                    <Image src={Arrow} alt="arrow" width={12} height={12} />
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li
            className="xs:hidden w-[402px] h-[618px] bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)]
                     rounded-2xl xl:flex flex-col px-[22px] py-9 border-1 border-indigo-500 shadow-[0_4px_20px_#959595]
                     transition-all duration-200  hover:shadow-[0_4px_20px_#9C4500]
                     hover:translate-z-1 hover:rotate-x-1"
          >
            <div className="flex flex-2/3">
              <div className="h-[296px] w-[358px] bg-blck rounded-xl">
                <Image
                  className="ml-3 mt-2"
                  src={SmartGym}
                  alt="smart gym background"
                />
              </div>
            </div>

            <div className="flex-1/3">
              <p className="font-bold text-primarytext text-[16px]">
                Smart Gym - IOT School Project
              </p>
              <p className="text-[16px] text-secondarytext mb-11">
                Smart gym system that monitors air quality and adjusts
                temperature. Enhances workouts using CO2, humidity, and
                temperature sensors.
              </p>
              <div className="flex mt-5">
                <ul className="flex-3/4 flex flex-row justify-start gap-6">
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={JavaIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={AwsIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={GitHubIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={AndroidIcon} alt="icon" />
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image className="w-7 h-7" src={DbIcon} alt="icon" />
                  </li>
                </ul>

                <a
                  target="blank"
                  href="https://github.com/IanaPostolachi/SEP4-v2"
                >
                  <div className="flex-1/4 flex flex-row items-center">
                    <p className="text-primarytext text-[16px] mr-2">GitHub</p>
                    <Image src={Arrow} alt="arrow" width={12} height={12} />
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
