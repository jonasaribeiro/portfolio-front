import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/Projects.module.css";
import { ProjectLink } from "../../data/projects";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  links: ProjectLink[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, links }) => {
  return (
    <li className={styles.projectCard}>
      <div className={styles.projectCard__imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.projectCard__content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.projectCard__links}>
          {links.map((link) => (
            <Link href={link.url} key={link.url} target="_blank">
              {link.labelKey} 
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;