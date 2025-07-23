import ArchIcon from "@/public/images/icon-Architecture.png";
import MaintenenaceIcon from "@/public/images/icon-maintenance.png";
import DevelopmentIcon from "@/public/images/icon-development.png";
import TestingIcon from "@/public/images/icon-testing.png";

export const aboutData = () => [
  {
    icon: ArchIcon,
    title: "architecture",
    desc: "I can help plan and build the architecture of your application based on your specific goals and requirements. Whether you have a clear structure in mind or need guidance from the ground up, I’ll make sure the foundation is scalable, clean, and easy to maintain.",
  },
  {
    icon: MaintenenaceIcon,
    title: "maintenance",
    desc: "I can support you after launch by keeping your application up to date, fixing bugs, and making improvements over time. Whether it's small tweaks or ongoing updates, I'm here to help your project stay healthy and running smoothly.",
  },
  {
    icon: DevelopmentIcon,
    title: "development",
    desc: "I can develop your application based on your ideas and functional needs. Whether it’s building from scratch or expanding an existing codebase, I focus on writing clean, maintainable code and keeping you involved throughout the process.",
  },
  {
    icon: TestingIcon,
    title: "testing",
    desc: "I can help ensure your application works as expected by writing meaningful tests and checking for bugs. I focus on catching issues early and making sure your system stays reliable and stable as it grows.",
  },
];
