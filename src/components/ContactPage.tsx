import {
  ContactPageContainer,
  ContactPageInfoContainer1,
  ContactPageInfoContainer2,
  ContactPageOutContainer,
  ContactPageSection,
} from "@/styles/components/ContactPage.styled";
import { StyledVisualBar1 } from "@/styles/components/utils.styled";
import Image from "next/image";

const ContactPage = () => {
  return (
    <ContactPageSection>
      <StyledVisualBar1 />
      <ContactPageOutContainer>
        <h2>Contato</h2>
        <a
          href="/CV_Jonas_Ribeiro_DevFullStack.pdf"
          download="CV_Jonas_Ribeiro_DevFullStack"
        >
          <button>Baixar Currículo</button>
        </a>
      </ContactPageOutContainer>
      <ContactPageContainer>
        <ContactPageInfoContainer2>
          <a href="https://github.com/jonasaribeiro" target="_blank">
            <Image
              src="/imgs/github_icon.svg"
              alt="Github"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonas-afonso-ribeiro/"
            target="_blank"
          >
            <Image
              src="/imgs/linkedin_logo_icon.svg"
              alt="Linkedin"
              width={50}
              height={50}
            />
          </a>
          <a href="mailto:jonasafribeiro@gmail.com">
            <Image
              src="/imgs/gmail_icon.svg"
              alt="Email"
              width={50}
              height={50}
            />
          </a>
          <a href="https://wa.me/5532984881601" target="_blank">
            <Image
              src="/imgs/whatsapp_icon.svg"
              alt="Whatsapp"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.instagram.com/jonasribeiro01/" target="_blank">
            <Image
              src="/imgs/instagram_logo_icon.svg"
              alt="Instagram"
              width={50}
              height={50}
            />
          </a>
          <a href="https://discord.com/users/jonasribeiro" target="_blank">
            <Image
              src="/imgs/discord_logo_icon.svg"
              alt="Discord"
              width={50}
              height={50}
            />
          </a>
        </ContactPageInfoContainer2>
        <ContactPageInfoContainer1>
          <p>Tel: +55 (32) 98488-1601</p>
          <p>Email: jonasafribeiro@gmail.com</p>
        </ContactPageInfoContainer1>
      </ContactPageContainer>
    </ContactPageSection>
  );
};

export default ContactPage;
