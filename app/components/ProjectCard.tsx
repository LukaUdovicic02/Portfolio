import Arrow from "@/public/images/Arrow.png";
import Image from "next/image";
import { Project } from "../globalTypes";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      <div
        className="sm:w-[402px] sm:h-[618px] 2xs:w-[250px] xs:w-[340px] 2xs:h-[550px] md:w-[340px] lg:w-[402px]
                 bg-[linear-gradient(33deg,_#121212_22%,_orange_68%,#9C4500_95%)] 
                 rounded-2xl flex flex-col px-[22px] py-9 border border-indigo-500 
                 shadow-[0_4px_20px_#959595] transition-all duration-300 
                 hover:shadow-[0_4px_20px_#9C4500] hover:rotate-[-1deg] hover:scale-105 relative group"
      >
        <div
          className="xl:hidden group-hover:flex bg-blck/50 absolute w-full text-lg font-bold mx-auto h-1/3 text-primarytext 
                        z-0 left-0 top-0 rounded-2xl backdrop-blur-sm shadow-2xl 
                        flex justify-center items-center flex-row gap-2"
        >
          <Link href={"/"} className="flex items-center gap-2">
            <p>More Details</p>
            <Image src={Arrow} alt="arrow" width={12} height={12} />
          </Link>
        </div>

        <div className="md:w-[300px] lg:w-[358px] sm:w-[358px] 2xs:w-auto 2xs:h-[250px] xs:h-[296px] xs:w-[300px] bg-blck rounded-xl flex items-center justify-center mb-4">
          <Image src={project.image} alt="project image" />
        </div>

        <p className="font-bold text-primarytext xs:text-[16px]">
          {project.title}
        </p>
        <p className="xs:text-[16px] 2xs:text-[15px] text-secondarytext">
          {project.desc}
        </p>
        <div className="flex mt-5 justify-between items-center">
          <ul className="flex flex-row xs:gap-4 2xs:gap-1">
            {project.icons.map((icon, i) => (
              <li key={i}>
                <Image className="w-7 h-7" src={icon} alt="tech icon" />
              </li>
            ))}
          </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center 2xs:ml-2 xs:ml-0"
          >
            <p className="text-primarytext xs:text-[16px] 2xs:text-[12px] mr-2">
              GitHub
            </p>
            <Image src={Arrow} alt="arrow" width={12} height={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
