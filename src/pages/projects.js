import Anchor from "../components/anchor";
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

      <p>
        See
        <Anchor href="https://github.com/revett" text="projects" />
        on GitHub (@revett)
      </p>
    </div>
  );
};

export default Projects;
