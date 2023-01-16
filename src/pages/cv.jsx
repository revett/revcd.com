import React, { useEffect } from "react";
import Page from "../components/page";
import CVMDX from "./content/cv.mdx";

const CV = () => {
  useEffect(() => {
    // Update title.
    document.title = "Charlie Revett (@revcd) • CV";

    // Update favicon.
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("card-index-favicon");
    favicon.href = replacement.src;

    // Update GitHub corner link.
    const githubCorner = document.getElementById("github-corner");
    githubCorner.href = "https://github.com/revett/revcd.com";
  }, []);

  return (
    <Page>
      <section>
        <CVMDX />
      </section>
    </Page>
  );
};

export default CV;
