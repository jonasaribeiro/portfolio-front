import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export interface SocialLink {
  id: string;
  nameKey: string;
  url: string;
  icon: React.ElementType;
}

const phoneNumber = "5511999998888";
const whatsappMessage = "Olá! Vi seu portfólio e gostaria de entrar em contato.";
const encodedMessage = encodeURIComponent(whatsappMessage);

export const socialLinksData: SocialLink[] = [
  {
    id: "whatsapp",
    // CORRIGIDO: O prefixo "contact." foi removido
    nameKey: "socials.whatsapp",
    url: `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    icon: FaWhatsapp,
  },
  {
    id: "linkedin",
    // CORRIGIDO: O prefixo "contact." foi removido
    nameKey: "socials.linkedin",
    url: "https://www.linkedin.com/in/seu-usuario/",
    icon: FaLinkedin,
  },
  {
    id: "github",
    // CORRIGIDO: O prefixo "contact." foi removido
    nameKey: "socials.github",
    url: "https://github.com/seu-usuario/",
    icon: FaGithub,
  },
];