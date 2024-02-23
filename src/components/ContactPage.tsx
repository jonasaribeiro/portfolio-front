import {
  ContactPageContainer,
  ContactPageInfoContainer1,
  ContactPageInfoContainer2,
  ContactPageInnerContainer1,
  ContactPageInnerContainer2,
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
        <button>Baixar Currículo</button>
      </ContactPageOutContainer>
      <ContactPageContainer>
        <ContactPageInnerContainer1>
          <ContactPageInfoContainer2>
            <Image
              src="/imgs/github_icon.svg"
              alt="Github"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/linkedin_logo_icon.svg"
              alt="Linkedin"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/gmail_icon.svg"
              alt="Email"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/whatsapp_icon.svg"
              alt="Whatsapp"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/instagram_logo_icon.svg"
              alt="Instagram"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/discord_logo_icon.svg"
              alt="Discord"
              width={50}
              height={50}
            />
          </ContactPageInfoContainer2>
          <ContactPageInfoContainer1>
            <h4>Tel: +55 (32) 98488-1601</h4>
            <h4>Email: jonasafribeiro@gmail.com</h4>
          </ContactPageInfoContainer1>
        </ContactPageInnerContainer1>
        <ContactPageInnerContainer2>
          <h3>Deixe uma mensagem</h3>
          <form action="">
            <input type="text" name="" id="" placeholder="Assunto*" />
            <input type="email" name="" id="" placeholder="Seu email*" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Sua mensagem*"
            ></textarea>
          </form>
        </ContactPageInnerContainer2>
      </ContactPageContainer>
    </ContactPageSection>
  );
};

export default ContactPage;
