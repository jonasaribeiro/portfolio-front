"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLenis } from "lenis/react";

const navLinks = [
  { translationKey: "nav.home", href: "#home" },
  { translationKey: "nav.about", href: "#about" },
  { translationKey: "nav.academic", href: "#academic" },
  { translationKey: "nav.projects", href: "#projects" },
  { translationKey: "nav.contact", href: "#contact" },
];

const Header: React.FC = () => {
  const { t } = useTranslation("header");
  const router = useRouter();
  const lenis = useLenis();

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.5 });
    }
  };

  return (
    <header id="home" className={styles.header}>
      <div className={styles.header__topbar}>
        <div className={styles.header__logo}>Jonas Ribeiro</div>

        <nav className={styles.header__nav}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={styles.navLink}
              onClick={() => handleScrollTo(link.href)}
            >
              {t(link.translationKey)}
            </button>
          ))}
        </nav>

        <div className={styles.header__language}>
          <Link href={router.asPath} locale="en" legacyBehavior>
            <a className={router.locale === "en" ? styles.active : ""}>EN</a>
          </Link>

          <span>|</span>

          <Link href={router.asPath} locale="pt" legacyBehavior>
            <a className={router.locale === "pt" ? styles.active : ""}>PT</a>
          </Link>
        </div>
      </div>

      <div className={styles.header__hero}>
        <h1 className={styles.header__title}>
          {t("hero.title.line1")}
          <br />
          {t("hero.title.line2")}
        </h1>
        <p className={styles.header__subtitle}>{t("hero.subtitle")}</p>
        <div className={styles.header__cta}>
          <button onClick={() => handleScrollTo("#projects")}>
            {t("hero.cta.viewProjects")}
          </button>
          <button onClick={() => handleScrollTo("#contact")}>
            {t("hero.cta.contactMe")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
