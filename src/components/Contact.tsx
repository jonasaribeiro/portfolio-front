import { useTranslation } from "next-i18next";
import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { t } = useTranslation("contact");

  return (
    <section>
      <h2>{t("")}</h2>
      <p>{t("")}</p>
    </section>
  );
};

export default Contact;
