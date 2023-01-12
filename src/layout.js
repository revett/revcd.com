import banner from "../assets/banner.png?as=webp";
import profile from "../assets/profile.jpg?as=webp";
import { Link, Outlet } from "react-router-dom";
import NavItem from "./components/nav_item";
import React from "react";
import { useLocation } from "react-router-dom";
import Emoji from "./components/emoji";

const Layout = () => {
  const img = (
    <img
      src={banner}
      className="drop-shadow-md rounded-lg w-full"
      alt="Hall generated by Midjourney"
    />
  );

  return (
    <main className="container font-roboto-slab leading-6 max-w-3xl mx-auto px-6 pt-12 pb-16 text-white w-full">
      <header>
        {isOnPage("/") ? img : <Link to="/">{img}</Link>}

        <div className="flex items-center justify-center pt-8">
          <Link to="/">
            <img
              src={profile}
              className="drop-shadow-md h-28 rounded-full"
              alt="Profile photo"
            />
          </Link>
          <p className="flex-1 text-lg pb-0 pl-6">
            Hey, I'm <span className="text-burnt-sienna">Charlie Revett</span>.
            I'm a software engineer living in London, on the engineering team at{" "}
            <a href="https://incident.io">incident.io</a> <Emoji emoji="🔥" />
          </p>
        </div>
      </header>

      <nav className="px-4 pt-6 pb-6">
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

      <section className="px-4">
        <Outlet />
      </section>
    </main>
  );
};

const isOnPage = (path) => {
  const location = useLocation();
  return location.pathname === path;
};

export default Layout;
