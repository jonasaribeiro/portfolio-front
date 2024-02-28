import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import HeaderComponent from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Portifólio - Jonas A. Ribeiro",
    absolute: "Home | Portifólio - Jonas A. Ribeiro",
  },
  description:
    "Portfólio de Jonas Afonso Ribeiro, desenvolvedor especializado em desenvolvimento web. Confira meus projetos e habilidades.",
};

const RootLayout = (props: React.PropsWithChildren) => {
  return (
    <html lang="PT-BR">
      <body>
        <StyledComponentsRegistry>
          <HeaderComponent />
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
