import ProjectsMDX from "./projects.mdx";
import React, { useEffect } from "react";
import Title from "../components/title";

const Projects = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • Projects";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("projects-favicon");
    favicon.href = replacement.src;
  }, []);

  return (
    <div>
      <Title text="Projects" />
      <ProjectsMDX />
    </div>
  );
};

export default Projects;
