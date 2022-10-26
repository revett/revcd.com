import Anchor from "../components/anchor";
import Emoji from "../components/emoji";
import React, { useEffect } from "react";
import Title from "../components/title";

const About = () => {
  useEffect(() => {
    document.title = "Charlie Revett (@revcd) • About";
    const favicon = document.getElementById("favicon");
    const replacement = document.getElementById("about-favicon");
    favicon.href = replacement.src;
  }, []);

  return (
    <div>
      <Title />

      <ul className="list-dash ml-3">
        <li className="pb-2">
          <h2>
            Product engineer at
            <Anchor href="https://incident.io" text="incident.io" />
            <Emoji emoji="🔥" /> in London, previously
            <Anchor href="https://www.bbc.co.uk/news" text="BBC News" />
            and
            <Anchor href="https://vidsy.co" padAfter={false} text="Vidsy" />
          </h2>
        </li>
        <li className="pb-2">
          <Anchor
            href="https://github.com/revett"
            padBefore={false}
            text="Projects"
          />
          on GitHub (@revett)
        </li>
        <li className="pb-2">
          Recent
          <Anchor href="https://instagram.com/cdrev" text="adventures" />
          on Instagram (@cdrev)
        </li>
        <li className="pb-2">
          B&W
          <Anchor href="https://instagram.com/chadexbw" text="photos" />
          I've recently taken (@chadexbw)
        </li>
        <li className="pb-2">
          Sport climbing and bouldering
          <Anchor
            href="https://www.8a.nu/user/charlie-revett/bouldering"
            text="logbook"
          />
          (8a.nu)
        </li>
        <li className="pb-2">
          <Anchor
            href="https://twitter.com/revcd"
            padBefore={false}
            text="Twitter"
          />
          (@revcd); not used a lot
        </li>
        <li className="pb-2">
          Natural language processing
          <Anchor
            href="https://github.com/revett/academic-papers"
            padAfter={false}
            text="academic papers"
          />
        </li>
        <li className="pb-2">
          <Anchor
            href="https://www.linkedin.com/in/cdrev"
            padBefore={false}
            text="LinkedIn"
          />
          (@cdrev)
        </li>
        <li className="pb-2">
          Coding
          <Anchor href="https://www.codewars.com/users/revett" text="katas" />
          (@revett)
        </li>
      </ul>

      <p className="pt-2">
        Feel free to email me using{" "}
        <Anchor text="revcd at revdex.fastmail.com" padAfter={false} />
        ; this site is on
        <Anchor
          href="https://github.com/revett/revcd.com"
          padAfter={false}
          text="GitHub"
        />
      </p>
    </div>
  );
};

export default About;
