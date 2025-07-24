import Image from "next/image";
import background from "@/public/images/background.png";
import GridPattern from "@/public/images/grid-pattern.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4 w-full mx-auto h-screen flex items-center justify-center text-primarytext relative">
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
      <div className="bg-[url(/images/backgroundHomePage.png)] 2xs:lg:bg-[length:30%_30%] lg:bg-[length:50%_50%] bg-[position:50%] bg-no-repeat -z-1 opacity-60 absolute inset-0"></div>

      <div className="flex flex-col gap-8 items-center relative">
        <h1 className="2xs:text-lg xs:text-xl md:text-2x xl:text-3xl">
          Sorry... That page doesn&apos;t exist
        </h1>
        <Link
          href={"/"}
          className="transition ease-in-out duration-500 hover:border-header 
          font-bold rounded-md py-2  
          border-1 border-secondarytext text-secondarytext cursor-pointer
        hover:bg-header hover:text-primarytext text-center w-[230px]"
        >
          Go to the main page
        </Link>
      </div>
    </div>
  );
}
