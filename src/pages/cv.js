import CVMDX from "./cv.mdx";
import React, { useEffect } from "react";
import Title from "../components/title";

const CV = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • CV";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("cv-favicon");
    favicon.href = replacement.src;
  }, []);

  return (
    <div>
      <Title text="CV" />
      <CVMDX />
    </div>
  );
};

export default CV;
