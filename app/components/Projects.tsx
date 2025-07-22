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
import CustomCarousel from "./CustomCarousel";
import { projectData } from "../data/projectData";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative xs:w-full mx-auto max-w-[1440px] h-screen xs:p-8 sm:p-14 flex justify-center items-center flex-col"
    >
      <div
        className="absolute inset-0 bg-[url(/images/backgroundHomePage.png)] 
                   xs:bg-[position:30px_230px] sm:bg-[position:30px_160px] xs:bg-[length:80%] sm:bg-[length:100%] md:bg-[position:30px_-40px]
                  -z-1 opacity-50 bg-no-repeat"
      ></div>
      <p
        className="flex flex-1/4 uppercase xs:text-xl xs:tracking-[0.35em] 
        sm:text-3xl font-bold sm:tracking-[0.45em] 
                   justify-center items-center text-transparent bg-clip-text bg-linear-to-r
                 from-orange-950  via-yellow-600 to-orange-950 animated-gradient"
      >
        notable projects
      </p>
      <CustomCarousel projects={projectData()} />
    </div>
  );
};

export default Projects;

