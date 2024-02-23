import ContactPage from "@/components/ContactPage";
import HeaderComponent from "@/components/Header";
import StartPage from "@/components/StartPage";
import TecDeckPage from "@/components/TecDeckPage";
import { StyledMain } from "@/styles/components/Page.styled";

const HomePage = () => {
  setTimeout(() => true, 50000);
  return (
    <>
      <div id="start" />
      <HeaderComponent />
      <StyledMain>
        <StartPage />
        <div id="contact" />
        <ContactPage />
        <div id="tecDeck" />
        <TecDeckPage />
        <div id="projects" />
      </StyledMain>
    </>
  );
};

export default HomePage;
