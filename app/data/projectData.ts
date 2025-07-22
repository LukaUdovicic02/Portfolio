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

export const projectData = () => [
  {
    title: "DineEase - Bachelor Project",
    desc: "Simplify restaurant reservations with ease. Designed to help both managers and customers streamline the booking process for a smoother dining experience.",
    image: DineEaseBG,
    icons: [NetIcon, TailwindIcon, TsIcon, ReactIcon, AzureIcon],
    github: "https://github.com/LukaUdovicic02/BPR2",
  },
  {
    title: "CS 1.6 VR - VR School Project",
    desc: " CS 1.6 in VR with Dust2, an AK-47, and core movement. Features original sounds, full map access, and a detachable magazine.",
    image: VRCS,
    icons: [UnityIcon, NetIcon, GitHubIcon],
    github: "https://github.com/XRD-Group-11/VR-CS-1.6",
  },
  {
    title: "Smart Gym - IOT School Project",
    desc: " Smart gym system that monitors air quality and adjusts temperature. Enhances workouts using CO2, humidity, and temperature sensors.",
    image: SmartGym,
    icons: [JavaIcon, AwsIcon, GitHubIcon, AndroidIcon, DbIcon],
    github: "https://github.com/IanaPostolachi/SEP4-v2",
  },
];
