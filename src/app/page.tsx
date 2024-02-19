import AboutMeComponent from "@/components/AboutMe";
import CodeAreaComponent from "@/components/CodeArea";
import HeaderComponent from "@/components/Header";
import ProjectsComponent from "@/components/Projects";
import TecListComponent from "@/components/TecList";
import WelcomeComponent from "@/components/Welcome";
import Image from "next/image";

const HomePage = () => {
  setTimeout(() => true, 50000);
  return (
    <>
      <HeaderComponent />
      <main>
        <WelcomeComponent />
        <AboutMeComponent />
        <ProjectsComponent />
        <TecListComponent />
        <CodeAreaComponent />
      </main>
    </>
  );
};

export default HomePage;
