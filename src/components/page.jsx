import React from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import Emoji from "./emoji";
import NavItem from "./navItem";
import banner from "../assets/banner.webp";
import profile from "../assets/profile.webp";

const Page = ({ bannerImgSrc, children, enableGithubStyling }) => {
  if (!bannerImgSrc) {
    bannerImgSrc = banner;
  }

  const bannerElement = (
    <img
      src={bannerImgSrc}
      className="drop-shadow-md rounded-lg w-full"
      alt="Generated by Midjourney"
    />
  );

  return (
    <div>
      <header>
        {isOnPage("/") ? bannerElement : <Link to="/">{bannerElement}</Link>}

        <div className="flex items-center justify-center pb-10 pt-12">
          <Link to="/">
            <img
              src={profile}
              className="drop-shadow-md h-22 lg:h-28 rounded-full"
              alt="Profile photo"
            />
          </Link>

          <p className="flex-1 lg:text-lg pb-0 pl-4 lg:pl-6">
            Hey, I'm <span className="text-burnt-sienna">Charlie Revett</span>.
            I'm a software engineer living in London, on the engineering team at{" "}
            <a
              href="https://incident.io"
              className="border-b-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white"
            >
              incident.io
            </a>{" "}
            <Emoji emoji="🔥" />
          </p>
        </div>
      </header>

      <nav className="pb-4 px-2">
        <NavItem
          emoji="👋"
          isFirst
          onPage={isOnPage("/")}
          path="/"
          text="About"
        />
        <NavItem
          emoji="🏗"
          onPage={isOnPage("/projects")}
          path="/projects"
          text="Projects"
        />
        <NavItem emoji="📇" onPage={isOnPage("/cv")} path="/cv" text="CV" />
        <NavItem emoji="🍕" onPage={isOnPage("/now")} path="/now" text="Now" />
      </nav>

      <div className={cx("px-2", { "markdown-body": enableGithubStyling })}>
        {children}
      </div>
    </div>
  );
};

const isOnPage = (path) => {
  const location = useLocation();
  return location.pathname === path;
};

export default Page;