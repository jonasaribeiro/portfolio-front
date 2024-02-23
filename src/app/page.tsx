import ContactPage from "@/components/ContactPage";
import HeaderComponent from "@/components/Header";
import StartPage from "@/components/StartPage";
import { StyledMain } from "@/styles/components/Page.styled";

const HomePage = () => {
  setTimeout(() => true, 50000);
  return (
    <>
      <HeaderComponent />
      <StyledMain>
        <StartPage />
        <ContactPage />
      </StyledMain>
    </>
  );
};

export default HomePage;
