import AboutMDX from "./content/about.mdx";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • About";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("about-favicon");
    favicon.href = replacement.src;
  }, []);

  return <AboutMDX />;
};

export default About;
