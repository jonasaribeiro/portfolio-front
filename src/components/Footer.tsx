import { useTranslation } from "next-i18next";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation("footer");

  return (
    <section>
      <h2>{t("")}</h2>
      <p>{t("")}</p>
    </section>
  );
};

export default Footer;
