"use client";

import { useTranslation } from "next-i18next";

import React, { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import styles from "../styles/components/ScrollToTopButton.module.css";

const ScrollToTopButton: React.FC = () => {
  const { t } = useTranslation("scrollToTopButton");
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo("#home", { duration: 1.5 });
    }
  };

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label={t("scrollToTopAriaLabel")}
      title={t("scrollToTopAriaLabel")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M11.9999 10.8284L7.05016 15.7782L5.63595 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
