import React, { useEffect } from "react";
import Page from "../components/page";
import NowMDX from "./content/now.mdx";

const Now = () => {
  useEffect(() => {
    // Update title.
    document.title = "Charlie Revett (@revcd) • Now";

    // Update favicon.
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("pizza-favicon");
    favicon.href = replacement.src;

    // Update GitHub corner link.
    const githubCorner = document.getElementById("github-corner");
    githubCorner.href = "https://github.com/revett/revcd.com";
  }, []);

  return (
    <Page>
      <p className="border-l-4 border-slate-300 italic mb-4 pl-2 py-1.5 text-slate-300">
        Covering Summer / Autumn 2022
      </p>
      <section>
        <div className="now-page">
          <NowMDX />
        </div>
      </section>
    </Page>
  );
};

export default Now;
