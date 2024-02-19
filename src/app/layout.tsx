import StyledComponentsRegistry from "@/lib/registry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Portifólio - Jonas A. Ribeiro",
    default: "Portifólio - Jonas A. Ribeiro",
    absolute: "Home | Portifólio - Jonas A. Ribeiro",
  },
  description:
    "Portfólio de Jonas Afonso Ribeiro, desenvolvedor especializado em desenvolvimento web. Confira meus projetos e habilidades.",
};

const RootLayout = (props: React.PropsWithChildren) => {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
