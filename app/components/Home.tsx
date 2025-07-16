import Image from "next/image";
import slika from "@/public/images/Luka_Slika.png";
import Link from "next/link";
import EmailIcon from "@/public/images/icon-email.png";
import LinkedInIcon from "@/public/images/icon-linkedin.png";
import GithubIcon from "@/public/images/icon-github.png";
import AzureIcon from "@/public/images/icon-azure.png";
import NetIcon from "@/public/images/icon-net.png";
import JavaIcon from "@/public/images/icon-java.png";
import ReactIcon from "@/public/images/icon-react.png";
import TsIcon from "@/public/images/icon-ts.png";
import TailwindIcon from "@/public/images/icon-tailwind.png";
import GitIcon from "@/public/images/icon-git.png";
import DockerIcon from "@/public/images/icon-docker.png";
import NavBar from "./NavBar";


type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-[1440px] h-[1024px] p-14 ">
    

      <div className="flex flex-col h-full z-10">
        <NavBar />

        <div className="flex items-center justify-between flex-grow bg-[url(/images/backgroundHomePage.png)] bg-no-repeat">
          <div className="w-[674px] h-[527px] ">
            <div>
              <h1 className="text-2xl text-secondarytext mb-2 ">Hi I am</h1>
              <h1 className="text-3xl text-secondarytext mb-8">
                Luka Udovicic
              </h1>
              <h1 className="text-7xl text-header font-bold w-[700px]">
                Full-Stack Software Engineer
              </h1>
            </div>
            <div>
              <ul className="flex flex-row mt-12 gap-8 mb-8">
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
            </div>
            <div className="flex flex-row gap-8">
              <button className="font-bold rounded-md py-2 px-8 bg-header text-primarytext cursor-pointer hover:bg-transparent transition duration-300 hover:border-secondarytext hover:text-secondarytext hover:border-1">
                GitHub
              </button>
              <button className="font-bold rounded-md py-2 px-12 border-1 border-secondarytext text-secondarytext cursor-pointer hover:bg-header hover:text-primarytext transition duration-300">
                Download CV
              </button>
            </div>
          </div>

          <div className="bg-[url(/images/backgroundHomePage.png)] bg-no-repeat bg-[length:60%_60%] bg-[position:100px] relative">
            <Image
              src={slika}
              alt="profile picture"
              className="object-contain"
              width={543}
              height={592}
            />
          </div>
        </div>

        <div className="bg-[#212121] flex justify-center w-[1337px]  h-[126px] rounded-md mx-auto">
          <ul className="flex flex-row justify-center items-center gap-24">
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={NetIcon} alt="icon" />
              <p className="text-primarytext font-bold">.NET C#</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={ReactIcon} alt="icon" />
              <p className="text-primarytext font-bold">REACT.JS</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={TsIcon} alt="icon" />
              <p className="text-primarytext font-bold">TYPESCRIPT</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={JavaIcon} alt="icon" />
              <p className="text-primarytext font-bold">JAVA</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={GitIcon} alt="icon" />
              <p className="text-primarytext font-bold">GIT</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={DockerIcon} alt="icon" />
              <p className="text-primarytext font-bold">DOCKER</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={AzureIcon} alt="icon" />
              <p className="text-primarytext font-bold">AZURE</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className="w-9 h-9" src={TailwindIcon} alt="icon" />
              <p className="text-primarytext font-bold">TAILWINCSS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
