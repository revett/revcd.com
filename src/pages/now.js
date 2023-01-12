import NowMDX from "./content/now.mdx";
import React, { useEffect } from "react";

const Now = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • Now";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("now-favicon");
    favicon.href = replacement.src;
  }, []);

  return <NowMDX />;
};

export default Now;
