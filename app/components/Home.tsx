import Image from "next/image";
import slika from "@/public/images/Luka_Slika.png";
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

const Home = () => {
  return (
    <div
      id="home"
      className="max-w-[1350px] mx-auto sm:w-full 2xs:w-full h-screen 2xs:p-8 sm:p-12 md:p-14"
    >
      <div className="flex flex-col h-full z-10 relative">
        <NavBar />

        <div
          className="
          bg-no-repeat bg-[url(/images/backgroundHomePage.png)] flex flex-grow 
          2xs:bg-[length:110%_40%] 2xs:bg-[position:-10px_-30px]
          
          2xs:juftify-center 2xs:flex-col lg:flex-row
          md:items-center md:justify-between 
          lg:bg-[position:-60px_200px]
          lg:bg-[length:60%_40%]"
        >
          <div className="xl:w-[674px] xl:h-[527px] 2xs:flex 2xs:flex-col lg:items-start 2xs:items-center">
            <div className="2xs:flex 2xs:flex-col 2xs:items-center lg:block">
              <h1 className="text-2xl text-secondarytext mb-2 sm:mt-2">
                Tino reko
              </h1>
              <h1 className="text-3xl text-secondarytext mb-8">
                da igrate it takes two
              </h1>
            </div>
            <div>
              <h1 className="xl:text-7xl lg:text-4xl md:text-5xl sm:text-4xl 2xs:text-xl xs:text-3xl  text-header font-bold 2xs:w-full xl:w-[700px]">
                Darko preso{" "}
                <span
                  className="blinking-letter bg-linear-to-r text-transparent bg-clip-text
                           from-orange-900  via-yellow-600 to-orange-900"
                >
                  na
                </span>
              </h1>
              <h1 className="xl:text-7xl lg:text-4xl md:text-5xl sm:text-4xl 2xs:text-xl xs:text-3xl text-header font-bold 2xs:w-full xl:w-[700px]">
                linux
              </h1>
            </div>
            <div>
              <ul className="sm:flex sm:flex-row sm:mt-12 2xs:mt-10 2xs:gap-4 xs:gap-8 mb-10 2xs:items-center 2xs:flex 2xs:justify-center 2xs:relative ">
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
            <div className="flex flex-row xs:gap-8 2xs:gap-2">
              <a
                target="blank"
                href="https://github.com/LukaUdovicic02"
                className="font-bold rounded-md sm:py-2 sm:px-8 2xs:py-2 2xs:px-4 2xs:text-[15px] bg-header border-1 border-header transition ease-in-out duration-500 text-primarytext cursor-pointer hover:bg-transparent  hover:border-secondarytext hover:text-secondarytext hover:border-1"
              >
                Ubi se
              </a>
              <a
                href="/api/blob"
                className="transition ease-in-out duration-500 hover:border-header font-bold rounded-md py-2 2xs:text-[15px] 2xs:px-1 xs:px-9 sm:px-12 border-1 border-secondarytext text-secondarytext cursor-pointer hover:bg-header hover:text-primarytext "
              >
                kata + danko
              </a>
            </div>
          </div>

          <div className="bg-[url(/images/backgroundHomePage.png)] 2xs:mx-auto bg-no-repeat bg-[length:60%_60%] bg-[position:50px] relative">
            <div className="absolute z-2 bottom-0  2xs:w-full 2xs:h-full bg-gradient-to-bl from-blck/0 to-blck"></div>
            <div className="absolute bottom-0 md:w-[544px] 2xs:w-full 2xs:h-full z-2 sm:h-[593px] bg-gradient-to-t from-blck/30 to-blck/0"></div>

            <Image
              src={slika}
              alt="profile picture"
              className="object-contain z-1 aboslute lg:w-[400px] lg:h-[500px] 
              xs:w-[270px] sm:w-full xs:h-full sm:max-w-[550px] sm:max-h-[700px] xl:w-[600px] 2xs:h-[200px] 2xs:w-[200px] "
            />
          </div>
        </div>

        <div className="2xs:hidden sm:bg-[#212121] lg:flex lg:justify-center lg:w-full lg:h-[126px] lg:rounded-md lg:mx-auto">
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
