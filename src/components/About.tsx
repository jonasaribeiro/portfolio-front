import { useTranslation } from "next-i18next";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation("about");

  return (
    <section>
      <h2>{t("")}</h2>
      <p>{t("")}</p>
    </section>
  );
};

export default About;
