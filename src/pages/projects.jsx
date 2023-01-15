import React, { useEffect } from "react";
import Page from "../components/page";
import ProjectsMDX from "./content/projects.mdx";

const Projects = () => {
  useEffect(() => {
    // Update title.
    document.title = "Charlie Revett (@revcd) • Projects";

    // Update favicon.
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById(
      "building-construction-favicon"
    );
    favicon.href = replacement.src;

    // Update GitHub corner link.
    const githubCorner = document.getElementById("github-corner");
    githubCorner.href = "https://github.com/revett/revcd.com";
  }, []);

  return (
    <Page>
      <ProjectsMDX />
    </Page>
  );
};

export default Projects;
