import React from "react";
import { useTranslation } from "next-i18next";
import { projectsData } from "../data/projects";
import ProjectCard from "./projects/ProjectCard";
import styles from "../styles/components/Projects.module.css";

// Versão muito mais simples, sem lógica de estado para os botões.
const Projects: React.FC = () => {
  const { t } = useTranslation("projects");

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__header}>
        {/* Removemos o container dos botões daqui */}
        <h2>{t("title")}</h2>
      </div>
      <div className={styles.projects__carousel}>
        {/* O ref foi removido da lista, pois não é mais necessário */}
        <ul className={styles.projects__list}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              links={project.links.map(link => ({
                ...link,
                labelKey: t(link.labelKey)
              }))}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;