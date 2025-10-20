import { useTranslation } from "next-i18next";
import React, { useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { skillsData, Skill } from "../data/skills";
import { techLogosData } from "../data/techLogos";
import SkillCard from "./skills/SkillCard";
import styles from "../styles/components/About.module.css";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  const [skillsEmblaRef, skillsEmblaApi] = useEmblaCarousel({
    align: "start",
  });

  const handleSkillsPrev = useCallback(() => {
    if (skillsEmblaApi) skillsEmblaApi.scrollPrev();
  }, [skillsEmblaApi]);

  const handleSkillsNext = useCallback(() => {
    if (skillsEmblaApi) skillsEmblaApi.scrollNext();
  }, [skillsEmblaApi]);

  const skillPairs = useMemo(() => {
    const pairs: Skill[][] = [];
    for (let i = 0; i < skillsData.length; i += 2) {
      pairs.push(skillsData.slice(i, i + 2));
    }
    return pairs;
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
              onClick={handleSkillsPrev}
              className={styles.about__skills__navigation_button}
              aria-label="Habilidade anterior"
            >
              &lt;
            </button>
            <button
              onClick={handleSkillsNext}
              className={styles.about__skills__navigation_button}
              aria-label="Próxima habilidade"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className={styles.skills_carousel_viewport} ref={skillsEmblaRef}>
          <div className={styles.skills_carousel_container}>
            {skillPairs.map((pair, index) => (
              <div className={styles.skills_carousel_slide} key={index}>
                {pair.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    title={t(skill.translationKey)}
                    technologies={skill.technologies}
                    icon={skill.icon}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.techs_container}>
          <div className={styles.techs_viewport}>
            <div className={styles.techs_list}>
              {[...techLogosData, ...techLogosData].map((logo, index) => {
                const IconComponent = logo.icon;
                return (
                  <div
                    key={`${logo.id}-${index}`}
                    className={styles.tech_logo_wrapper}
                    title={logo.name}
                  >
                    <IconComponent className={styles.tech_logo} />
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
