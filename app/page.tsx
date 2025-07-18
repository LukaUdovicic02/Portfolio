import Image from "next/image";

import Home from "./components/Home";
import Projects from "./components/Projects";
import background from "@/public/images/background.png";
import GridPattern from "@/public/images/grid-pattern.png";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// TODO: dodaj animaciju na skills
// TODO: sliku popravi jebiga shader





export default function Page() {
  return (
    <div className="relative  w-full min-h-screen overflow-x-hidden">
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

      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
