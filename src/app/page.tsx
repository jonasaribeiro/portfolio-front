import ContactPage from "@/components/ContactPage";
import HeaderComponent from "@/components/Header";
import ProjectsPage from "@/components/ProjectsPage";
import StartPage from "@/components/StartPage";
import TecDeckPage from "@/components/TecDeckPage";
import { StyledMain } from "@/styles/components/Page.styled";
import { StyledBookmark } from "@/styles/components/utils.styled";

const HomePage = () => {
  setTimeout(() => true, 50000);
  return (
    <>
      <HeaderComponent />
      <StyledMain>
        <StartPage />
        <StyledBookmark id="contact" />
        <ContactPage />
        <StyledBookmark id="tecDeck" />
        <TecDeckPage />
        <StyledBookmark id="projects" />
        <ProjectsPage />
      </StyledMain>
    </>
  );
};

export default HomePage;
