import ProjectsMDX from "./content/projects.mdx";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • Projects";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("projects-favicon");
    favicon.href = replacement.src;
  }, []);

  return <ProjectsMDX />;
};

export default Projects;
