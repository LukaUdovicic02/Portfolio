import { projectData } from "@/app/data/projectData";
import { notFound } from "next/navigation";

import background from "@/public/images/background.png";
import GridPattern from "@/public/images/grid-pattern.png";
import Image from "next/image";
import React from "react";

type Props = {
  params: { id: string };
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectData().find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden 2xs:p-2 xs:p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex justify-center items-center">
        <h1
          className="bg-clip-text bg-linear-to-r text-transparent mb-4 from-orange-900  via-yellow-600 to-orange-900 
              animated-gradient 2xs:text-lg sm:text-2xl lg:text-3xl 2xs:tracking-[0.25em] md:tracking-[0.45em] font-bold uppercase "
        >
          {project.title}
        </h1>
      </div>

      <div className="flex 2xs:flex-col sm:flex-row 2xs:items-center sm:justify-between px-10 2xs:mb-5 md:mb-10 xl:mb-15  max-w-[1350px] mx-auto">
        <div>
          <p
            className="text-transparent bg-linear-to-r from-orange-900  via-yellow-600 to-orange-900 
              animated-gradient bg-clip-text font-bold uppercase"
          >
            SKILLS
          </p>

          <div className="flex flex-row flex-wrap 2xs:w-40 sm:w-60 md:w-70 lg:w-90  gap-2">
            {project.skills?.map((skill, index) => {
              return (
                <button
                  key={index}
                  className="font-bold rounded-md mt-2 mb-2 2xs:py-1 2xs:px-3 2xs:text-[12px]
             bg-header border-1 border-header transition ease-in-out duration-500 text-primarytext 
              hover:border-secondarytext hover:text-secondarytext hover:border-1 hover:bg-transparent"
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <p
            className="text-transparent bg-linear-to-r from-orange-900  via-yellow-600 to-orange-900 
              animated-gradient bg-clip-text font-bold uppercase"
          >
            TECHNOLOGIES
          </p>
          <div className="flex flex-row flex-wrap 2xs:w-40 sm:w-50 md:w-60 gap-2">
            {project.technologies?.map((technology, index) => {
              return (
                <button
                  key={index}
                  className="transition ease-in-out duration-500 mt-2 hover:border-header font-bold rounded-md py-2 2xs:py-1 2xs:px-3 2xs:text-[12px] border-1
             border-secondarytext text-secondarytext hover:bg-header hover:text-primarytext"
                >
                  {technology}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Image
        src={background}
        alt="background"
        fill
        className="absolute -z-20 object-cover"
      />
      <Image
        src={GridPattern}
        alt="grid"
        fill
        className="absolute -z-10 object-cover"
      />

      <div className="max-w-[1350px] mx-auto">
        {project.details?.map((item, Idx) => {
          return (
            <div key={Idx} className="flex flex-col gap-5 items-center">
              <h1
                className="bg-clip-text bg-linear-to-r text-transparent mb-4 from-orange-900  via-yellow-600 to-orange-900 
              animated-gradient 2xs:text-xl sm:text-2xl lg:text-3xl 2xs:tracking-[0.35em] md:tracking-[0.45em] font-bold uppercase "
              >
                {item.title}
              </h1>
              {item.images &&
                item.images.map((image, i) => {
                  return (
                    <div key={i} className="mb-2">
                      <Image src={image} alt="architecture image" />
                    </div>
                  );
                })}

              <div className="2xs:text-[13px] sm:text-[14px] lg:text-[16px] text-secondarytext ">
                {item.content.split("\n\n").map((para, idx) => {
                  const parts = para.split(/["“”]/);
                  return (
                    <p key={idx} className="mb-4">
                      {parts.map((part, i) =>
                        i % 2 === 1 ? (
                          <span key={i} className="italic">
                            “{part}”
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
