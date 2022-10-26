import Anchor from "../components/anchor";
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

      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-400 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <Anchor
          href="https://drive.google.com/file/d/14kR0MHd1RpKq0HFIcf64Nw2-e2msRCHK/view"
          padAfter={false}
          text="Last Updated: May 2022"
        />
      </p>
    </div>
  );
};

export default CV;
