import NowMDX from "./now.mdx";
import React, { useEffect } from "react";
import Title from "../components/title";

const Now = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • Now";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("now-favicon");
    favicon.href = replacement.src;
  }, []);

  return (
    <div>
      <Title text="Now" />
      <NowMDX />
    </div>
  );
};

export default Now;
