import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import Academic from "../components/Academic";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Academic />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt", [
      "common",
      "header",
      "about",
      "academic",
      "projects",
      "contact",
    ])),
  },
});

export default Home;
