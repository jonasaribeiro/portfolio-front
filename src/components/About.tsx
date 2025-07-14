import { useTranslation } from "next-i18next";
import React, { useCallback, useRef } from "react";

import { skillsData, Skill } from "../data/skills";
import { techLogosData, TechLogo } from "../data/techLogos";
import SkillCard from "./skills/SkillCard";
import styles from "../styles/components/About.module.css";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleScroll = useCallback((direction: 'prev' | 'next') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'prev' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <section id="about" className={styles.about__intro_section}>
        <div className={styles.about__text_wrapper}>
          <h2>{t("aboutMe.title")}</h2>
          <p>{t("aboutMe.description")}</p>
        </div>
      </section>
      <section className={styles.about__skills_section}>
        <div className={styles.about__skills__header}>
          <h3>{t("skills.title")}</h3>
          <div className={styles.about__skills__navigation_wrapper}>
            <button
              onClick={() => handleScroll('prev')}
              className={styles.about__skills__navigation_button}
              aria-label="Habilidade anterior"
            >
              &lt;
            </button>
            <button
              onClick={() => handleScroll('next')}
              className={styles.about__skills__navigation_button}
              aria-label="Próxima habilidade"
            >
              &gt;
            </button>
          </div>
        </div>
        
        <div className={styles.about__skills__carousel}>
          <ul className={styles.about__skills__list} ref={carouselRef}>
            {skillsData.map((skill: Skill) => (
              <SkillCard
                key={skill.id}
                title={t(skill.translationKey)}
                technologies={skill.technologies}
                icon={skill.icon}
              />
            ))}
          </ul>
        </div>
      
        <div className={styles.about__techs}>
          <div className={styles.about__techs__carousel}>
            <div className={styles.about__techs__list}>
              {[...techLogosData, ...techLogosData].map((logo: TechLogo, index) => {
                const IconComponent = logo.icon;
                return (
                  <div key={`${logo.id}-${index}`} className={styles.about__techs__logo_wrapper} title={logo.name}>
                    <IconComponent className={styles.about__techs__logo} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;