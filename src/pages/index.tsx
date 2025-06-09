import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { appWithTranslation, i18n } from "next-i18next";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default appWithTranslation(Home);
