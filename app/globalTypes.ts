import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  desc: string;
  image: StaticImageData | string;
  icons: (StaticImageData | string)[];
  github: string;
};

export type About = {
  title: string;
  desc: string;
  icon: StaticImageData | string;
};
