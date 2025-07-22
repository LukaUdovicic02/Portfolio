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
    <div
      id="home"
      className="sm:w-full xs:w-full h-screen xs:p-8 sm:p-12 md:p-14"
    >
      <div className="flex flex-col h-full z-10 relative">
        <NavBar />

        <div
          className="
          bg-no-repeat bg-[url(/images/backgroundHomePage.png)] flex flex-grow 
          xs:bg-[length:110%_40%] xs:bg-[position:-10px_-30px]
          
          xs:juftify-center xs:flex-col lg:flex-row
          md:items-center md:justify-between 
          lg:bg-[position:-40px]
          lg:bg-[length:60%_40%]"
        >
          <div className="xl:w-[674px] xl:h-[527px] xs:flex xs:flex-col lg:items-start xs:items-center">
            <div className="xs:flex xs:flex-col  xs:items-center lg:block">
              <h1 className="text-2xl text-secondarytext mb-2 sm:mt-2">
                Hi I am
              </h1>
              <h1 className="text-3xl text-secondarytext mb-8">
                Luka Udovicic
              </h1>
            </div>
            <div>
              <h1 className="xl:text-7xl lg:text-4xl md:text-5xl sm:text-4xl xs:text-3xl  text-header font-bold xs:w-full xl:w-[700px]">
                Full-Stack{" "}
                <span
                  className="blinking-letter bg-linear-to-r text-transparent bg-clip-text
                           from-orange-900  via-yellow-600 to-orange-900"
                >
                  Software
                </span>
              </h1>
              <h1 className="xl:text-7xl lg:text-4xl md:text-5xl sm:text-4xl xs:text-3xl text-header font-bold xs:w-full xl:w-[700px]">
                Engineer
              </h1>
            </div>
            <div>
              <ul className="sm:flex sm:flex-row sm:mt-12 xs:mt-10 gap-8 mb-10 xs:items-center xs:flex xs:justify-center xs:relative ">
                <li className=" border-1 border-secondarytext  rounded-4xl p-2 hover:bg-secondarytext transition duration-300">
                  <a href="mailto:lukaudovicic10@gmail.com" target="blank">
                    <Image className="w-6 h-6 " src={EmailIcon} alt="icon" />
                  </a>
                </li>
                <li className="border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/lukaudovicic/"
                  >
                    <Image className="w-6 h-6" src={LinkedInIcon} alt="icon" />
                  </a>
                </li>
                <li className=" border-1 border-secondarytext rounded-4xl p-2 hover:bg-primarytext transition duration-300 ">
                  <a target="blank" href="https://github.com/LukaUdovicic02">
                    <Image className="w-6 h-6" src={GithubIcon} alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-8">
              <a
                target="blank"
                href="https://github.com/LukaUdovicic02"
                className="font-bold rounded-md sm:py-2 sm:px-8 xs:py-2 xs:px-4 bg-header border-1 border-header transition ease-in-out duration-500 text-primarytext cursor-pointer hover:bg-transparent  hover:border-secondarytext hover:text-secondarytext hover:border-1"
              >
                GitHub
              </a>
              <a
                href="/api/blob"
                className="transition ease-in-out duration-500 hover:border-header font-bold rounded-md py-2 xs:px-9 sm:px-12 border-1 border-secondarytext text-secondarytext cursor-pointer hover:bg-header hover:text-primarytext "
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="bg-[url(/images/backgroundHomePage.png)] bg-no-repeat bg-[length:60%_60%] bg-[position:100px] relative">
            <div className="absolute z-2 bottom-0 xs:w-full xs:h-full bg-gradient-to-bl from-blck/0 to-blck"></div>
            <div className="absolute bottom-0 md:w-[544px] xs:w-full xs:h-full z-2 sm:h-[593px] bg-gradient-to-t from-blck/30 to-blck/0"></div>

            <Image
              src={slika}
              alt="profile picture"
              className="object-contain z-1 aboslute lg:w-[400px] lg:h-[500px] xs:w-full xs:h-full sm:max-w-[550px] sm:max-h-[700px] "
            />
          </div>
        </div>

        <div className="xs:hidden sm:bg-[#212121] lg:flex lg:justify-center lg:w-full lg:h-[126px] lg:rounded-md lg:mx-auto">
          <ul className="flex flex-row justify-center items-center lg:gap-14 xl:gap-24">
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={NetIcon} alt="icon" />
              <p className="text-primarytext font-bold">.NET C#</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={ReactIcon} alt="icon" />
              <p className="text-primarytext font-bold">REACT.JS</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={TsIcon} alt="icon" />
              <p className="text-primarytext font-bold">TYPESCRIPT</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={JavaIcon} alt="icon" />
              <p className="text-primarytext font-bold">JAVA</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={GitIcon} alt="icon" />
              <p className="text-primarytext font-bold">GIT</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={DockerIcon} alt="icon" />
              <p className="text-primarytext font-bold">DOCKER</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
              <Image className="w-9 h-9" src={AzureIcon} alt="icon" />
              <p className="text-primarytext font-bold">AZURE</p>
            </li>
            <li className="flex flex-col justify-center items-center shake-on-hover">
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
