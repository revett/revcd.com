import NowMDX from "./content/now.mdx";
import React, { useEffect } from "react";

const Now = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • Now";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("now-favicon");
    favicon.href = replacement.src;
  }, []);

  return (
    <div>
      <p className="border-l-4 border-slate-300 italic mb-4 pl-2 py-1.5 text-slate-300">
        Covering Summer / Autumn 2022
      </p>
      <NowMDX />
    </div>
  );
};

export default Now;
