import React, { useEffect } from "react";
import Page from "../components/page";
import AboutMDX from "./content/about.mdx";

const About = () => {
  useEffect(() => {
    // Update title.
    document.title = "Charlie Revett (@revcd) • About";

    // Update favicon.
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("waving-hand-favicon");
    favicon.href = replacement.src;

    // Update GitHub corner link.
    const githubCorner = document.getElementById("github-corner");
    githubCorner.href = "https://github.com/revett/revcd.com";
  }, []);

  return (
    <Page>
      <section>
        <div className="about-page">
          <AboutMDX />
        </div>
      </section>
    </Page>
  );
};

export default About;
