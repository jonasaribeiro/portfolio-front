import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { academicData } from "../data/academic";
import styles from "../styles/components/Academic.module.css";
import { FaChevronDown } from "react-icons/fa";

const Academic: React.FC = () => {
  const { t } = useTranslation("academic");

  const [openItemId, setOpenItemId] = useState<string | null>(
    academicData[0].id,
  );

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="academic" className={styles.academic}>
      <h2>{t("title")}</h2>
      <div className={styles.accordion}>
        {academicData.map((item) => {
          const Icon = item.icon;
          const isOpen = openItemId === item.id;
          const itemsList = t(item.itemsKey, {
            returnObjects: true,
          }) as string[];

          return (
            <div key={item.id} className={styles.accordionItem}>
              <button
                className={styles.accordionButton}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
              >
                <div className={styles.accordionTitle}>
                  <Icon />
                  <span>{t(item.categoryKey)}</span>
                </div>
                <FaChevronDown
                  className={`${styles.accordionChevron} ${isOpen ? styles.open : ""}`}
                />
              </button>
              <div
                className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
              >
                <ul className={styles.accordionList}>
                  {Array.isArray(itemsList) &&
                    itemsList.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Academic;
