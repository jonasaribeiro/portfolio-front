"use client";

import {
  ImageContainer,
  ProjectName,
} from "@/styles/components/ProjectsPage.styled";
import Image from "next/image";
import { useEffect, useState } from "react";

const Project = ({
  name,
  imgs,
  link,
}: {
  name: string;
  imgs: string[];
  link: string;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <li>
      <a href={link} target="_blank">
        <ImageContainer>
          <Image
            src={"/imgs/projects/" + imgs[currentImage]}
            alt="Imagem do Projeto"
            width={800}
            height={400}
          />
          <div>
            <ProjectName>{name}</ProjectName>
          </div>
        </ImageContainer>
      </a>
    </li>
  );
};

export default Project;
