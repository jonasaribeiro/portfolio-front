import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export interface SocialLink {
  id: string;
  nameKey: string;
  url: string;
  icon: React.ElementType;
}

const phoneNumber = "5532984881601";
const whatsappMessage = "Olá! Vi seu portfólio e gostaria de entrar em contato.";
const encodedMessage = encodeURIComponent(whatsappMessage);

export const socialLinksData: SocialLink[] = [
  {
    id: "whatsapp",
    nameKey: "socials.whatsapp",
    url: `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    icon: FaWhatsapp,
  },
  {
    id: "linkedin",
    nameKey: "socials.linkedin",
    url: "https://www.linkedin.com/in/jonas-afonso-ribeiro/",
    icon: FaLinkedin,
  },
  {
    id: "github",
    nameKey: "socials.github",
    url: "https://github.com/jonasaribeiro/",
    icon: FaGithub,
  },
];