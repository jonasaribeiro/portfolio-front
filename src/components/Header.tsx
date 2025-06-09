// components/Header.tsx
import React from "react";
import styles from "../styles/components/Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.header__topbar}>
      <div className={styles.header__logo}>Jonas Ribeiro</div>
      <nav className={styles.header__nav}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className={styles.header__language}>
        <a onClick={() => console.log("Not yet implemented")}>PT</a>
        <a onClick={() => console.log("Not yet implemented")}>EN</a>
      </div>
    </div>

    <div className={styles.header__hero}>
      <h1 className={styles.header__title}>
        Código inteligente,
        <br /> impacto real
      </h1>
      <p className={styles.header__subtitle}>
        Olá! Sou Jonas Ribeiro, transformo ideias em realidade digital. Explore
        meus projetos e habilidades técnicas.
      </p>
      <div className={styles.header__cta}>
        <button>Ver Projetos</button>
        <button>Entrar em Contato</button>
      </div>
    </div>
  </header>
);

export default Header;
