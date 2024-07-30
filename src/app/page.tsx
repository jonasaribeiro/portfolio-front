"use client";

import Modal from "@/components/smallComponents/modal";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import { StyledMain } from "@/styles/components/Page.styled";
import {
  StyledBookmark,
  StyledSectionBase,
  StyledVisualBar1,
} from "@/styles/components/utils.styled";
import { Suspense, lazy, useRef, useState } from "react";

const StartPage = lazy(() => import("../components/StartPage"));
const ContactPage = lazy(() => import("../components/ContactPage"));
const TecDeckPage = lazy(() => import("../components/TecDeckPage"));
const ProjectsPage = lazy(() => import("../components/ProjectsPage"));

const LoadingPlaceholder = () => (
  <StyledSectionBase>
    <StyledVisualBar1 />
    Carregando...
  </StyledSectionBase>
);

const HomePage = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const [isStartPageVisible, startPageRef] = useLazyLoad();
  const [isContactPageVisible, contactPageRef] = useLazyLoad();
  const [isTecDeckPageVisible, tecDeckPageRef] = useLazyLoad();
  const [isProjectsPageVisible, projectsPageRef] = useLazyLoad();

  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Modal isVisible={isModalVisible} onClose={closeModal} />
      <StyledMain>
        <div ref={startPageRef}>
          <Suspense fallback={<LoadingPlaceholder />}>
            {isStartPageVisible && <StartPage />}
          </Suspense>
        </div>
        <StyledBookmark id="contact" />

        <div ref={contactPageRef}>
          <Suspense fallback={<LoadingPlaceholder />}>
            {isContactPageVisible && <ContactPage />}
          </Suspense>
        </div>

        <StyledBookmark id="tecDeck" />

        <div ref={tecDeckPageRef}>
          <Suspense fallback={<LoadingPlaceholder />}>
            {isTecDeckPageVisible && <TecDeckPage />}
          </Suspense>
        </div>

        <StyledBookmark id="projects" />

        <div ref={projectsPageRef}>
          <Suspense fallback={<LoadingPlaceholder />}>
            {isProjectsPageVisible && <ProjectsPage />}
          </Suspense>
        </div>
      </StyledMain>
    </>
  );
};

export default HomePage;
