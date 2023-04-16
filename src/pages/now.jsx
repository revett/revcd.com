import React, { useEffect } from "react";
import Page from "../components/page";
import NowMDX from "./content/now.mdx";
import NowHistoricalMDX from "./content/nowHistorical.mdx";

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
      <section>
        <div className="now-page">
          <NowMDX />
        </div>
      </section>

      <p className="border-slate-500 border-t-2 font-medium mb-2 mt-2 pt-4">
        Previous Updates
      </p>
      <section>
        <div className="now-page">
          <NowHistoricalMDX />
        </div>
      </section>
    </Page>
  );
};

export default Now;
