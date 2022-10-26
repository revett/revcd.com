import Anchor from "../components/anchor";
import Emoji from "../components/emoji";
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

      <p className="pb-4">
        &gt; <span className="italic">Covering Summer / Autumn 2022</span>
      </p>

      <ul className="list-dash ml-3 pb-4">
        <li className="pb-2">
          Completing the renovation of my apartment in Bermondsey
        </li>
        <li className="pb-2">
          Catching up on travelling: Brooklyn <Emoji emoji="🇺🇸" />, Barcelona{" "}
          <Emoji emoji="🇪🇸" />, Lyon <Emoji emoji="🇫🇷" />, Saalbach{" "}
          <Emoji emoji="🇦🇹" />, and Lisbon <Emoji emoji="🇵🇹" />
        </li>
        <li className="pb-2">
          Leaving
          <Anchor href="https://vidsy.co" text="Vidsy" />
          after 6 years, and joining
          <Anchor href="https://incident.io" text="Incident.io" />
          <Emoji emoji="🔥" />
        </li>
        <li className="pb-2">Turning 30</li>
        <li className="pb-2">
          Continuing work on
          <Anchor
            href="https://github.com/revett/sepia"
            padAfter={false}
            text="revett/sepia"
          />
        </li>
        <li className="pb-2">
          Attending a handful of festivals: Oldfields, Forwards, All Points
          East, and Notting Hill
        </li>
        <li className="pb-0">
          Recovering from an A2 pulley injury, resulting in not much climbing of
          interest
        </li>
      </ul>

      <p>
        Inspired by Derek Siver's
        <Anchor href="https://nownownow.com/about" text="/now" />
        page
      </p>
    </div>
  );
};

export default Now;
