import React, { useEffect, useState } from "react";
import axios from "axios";
import cx from "classnames";
import Page from "../../components/page";

const resultEnumError = "error";
const resultEnumPending = "pending";
const resultEnumSuccess = "success";

const RSSExplore = () => {
  useEffect(() => {
    // Update title.
    document.title =
      "RSS Explore • Tools to help you easily find and manage RSS feeds";

    // Update favicon.
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("link-favicon");
    favicon.href = replacement.src;

    // Update GitHub corner link.
    const githubCorner = document.getElementById("github-corner");
    githubCorner.href = "https://github.com/revett/rss-explore";
  }, []);

  const initialResult = {
    type: null,
    value: null,
  };

  const [url, setURL] = useState("");
  const [result, setResult] = useState(initialResult);

  const handleChange = (e) => {
    setURL(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendRequest();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    sendRequest();
  };

  const sendRequest = () => {
    setResult({
      type: resultEnumPending,
      value: null,
    });

    axios
      .post(
        "https://rss-explore.revcd.com/youtube/convert",
        {
          url: url,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setResult({
          type: resultEnumSuccess,
          value: response.data.url,
        });
      })
      .catch((error) => {
        console.log(error);
        setResult({
          type: resultEnumError,
          value: `Error: ${error.message} (${error.code})`,
        });
      });
  };

  return (
    <Page enableGithubStyling isProjectPage>
      <div className="mb-6">
        <h1 className="font-medium mb-3 text-2xl">RSS Explore</h1>
        <p className="pb-0">
          Tools to help you easily find and manage RSS feeds.
        </p>
      </div>

      <div className="border-2 border-slate-700 pb-5 pt-4 px-4 rounded-lg">
        <h2 className="font-medium mb-3 text-lg">
          YouTube URL to Channel RSS Feed
        </h2>

        <div>
          <p className="mb-2 pb-0">
            Generate the YouTube channel RSS feed from a YouTube video URL.
          </p>

          <div
            className={cx("flex", {
              "mb-2": result.type && result.type !== resultEnumPending,
            })}
          >
            <input
              type="url"
              placeholder="e.g. https://youtube.com/watch?v=7LICrnxWd38"
              autoFocus
              required
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="bg-white flex-1 outline-none px-3 py-3 rounded-lg text-black w-full"
            />
            <button
              className="bg-slate-700 ml-2 px-3 py-3 rounded-lg text-white"
              onClick={handleClick}
              disabled={result.type === resultEnumPending}
            >
              Generate
            </button>
          </div>

          {result.type && result.type !== resultEnumPending && (
            <div
              className={cx(
                "flex",
                "items-center",
                "font-mono",
                "h-12",
                "overflow-x-auto",
                "px-3",
                "rounded-lg",
                "text-sm",
                "text-white",
                "w-full",
                "whitespace-nowrap",
                {
                  "bg-green-700": result.type === resultEnumSuccess,
                  "bg-burnt-sienna": result.type === resultEnumError,
                }
              )}
            >
              {result.value}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};

export default RSSExplore;
