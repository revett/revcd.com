import AboutMDX from "./about.mdx";
import React, { useEffect } from "react";
import Title from "../components/title";

const About = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • About";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("about-favicon");
    favicon.href = replacement.src;
  }, []);

  return (
    <div>
      <Title />
      <AboutMDX />
    </div>
  );
};

export default About;
