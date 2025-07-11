import React from "react";
import styles from "../../styles/components/About.module.css"; // Usaremos o CSS do About

interface SkillCardProps {
  title: string;
  technologies: string[];
  icon: React.ElementType; // Recebe o componente do ícone como uma prop
}

const SkillCard: React.FC<SkillCardProps> = ({ title, technologies, icon: IconComponent }) => {
  return (
    <li className={styles.about__skills__card}>
      <div className={styles.about__skills__card__icon}>
        <IconComponent />
      </div>
      <h4>{title}</h4>
      <p>{technologies.join(", ")}</p>
    </li>
  );
};

export default SkillCard;