import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  skills?: string[];
  technologies?: string[];
  desc: string;
  image: StaticImageData | string;
  icons: (StaticImageData | string)[];
  github: string;
  details?: ProjectDetailSection[];
};

type ProjectDetailSection = {
  title: string;
  content: string;
  images?: (StaticImageData | string)[];
  subsections?: ProjectDetailSection[];
};

export type About = {
  title: string;
  desc: string;
  icon: StaticImageData | string;
};
