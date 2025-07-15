import Image from "next/image";
import background from "@/public/background.png";
import slika from "@/public/Luka_Slika.png";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="h-screen p-10">
      <Image className="-z-1 " src={background} alt="background image" fill />

      <div className="flex flex-col h-full">
        
        <NavBar />

        <div className="flex items-center justify-between flex-grow ">
          <div className=""></div>

          <div>
            <Image
              src={slika}
              alt="profile picture"
              width={1350}
              className="z-10"
            />
          </div>
        </div>

        <div className="bg-blue-500 w-full h-[10%]"></div>
      </div>
    </div>
  );
}
