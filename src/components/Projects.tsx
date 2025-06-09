import { useTranslation } from "next-i18next";
import React from "react";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { t } = useTranslation("projects");

  return (
    <section>
      <h2>{t("")}</h2>
      <p>{t("")}</p>
    </section>
  );
};

export default Projects;
