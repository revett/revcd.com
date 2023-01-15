import CVMDX from "./content/cv.mdx";
import React, { useEffect } from "react";

const CV = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • CV";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("cv-favicon");
    favicon.href = replacement.src;
  }, []);

  return <CVMDX />;
};

export default CV;
