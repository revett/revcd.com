import { Button, ButtonTheme } from "../components/button";
import Card from "../components/card";
import Link from "../components/link";
import Paragraph from "../components/paragraph";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { GiMountaintop } from "react-icons/gi";
import { TbNotebook } from "react-icons/tb";

const Page = () => {
  return (
    <main className="text-lg">
      {/* Introduction & Links */}
      <section className="flex gap-x-4">
        <div className="flex flex-col">
          {/* Introduction */}
          <GiMountaintop className="w-9 h-9 mb-8 mt-10" />

          <h1 className="mt-2">
            <span className="font-semibold">Charlie Revett</span> is a software
            engineer, living in London.
          </h1>

          <Paragraph>
            At <Link href="https://incident.io" text="incident.io" />, my days
            are filled with engaging customer conversations and crafting
            impactful product features that streamline incident management for
            our users.
          </Paragraph>

          <Paragraph>
            Previously, I led the technical vision at{" "}
            <Link href="https://vidsy.co" text="vidsy.co" /> as CTO and played a
            key role in shaping the digital experience of{" "}
            <Link href="https://bbc.co.uk/news" text="bbc.com/news" /> as a
            senior software engineer.
          </Paragraph>

          <Paragraph>
            I thrive on creating features that not only solve problems but also
            spark joy. When I'm not working, you'll find me exploring the great
            outdoors or tinkering on side projects at{" "}
            <Link href="https://8thpark.com" text="8thpark.com" />.
          </Paragraph>

          {/* Links */}
          {/* TODO - Twitter button */}
          <div className="flex -ml-2 mt-6 items-center">
            <Button
              href="https://twitter.com/revcd"
              text="Follow @revcd"
              icon={<RiTwitterXLine />}
            />
            <Button href="https://github.com/revett" icon={<RiGithubLine />} />
            <Button
              href="https://instagram.com/cdrev"
              icon={<RiInstagramLine />}
            />
            <Button
              href="https://linkedin.com/in/cdrev"
              icon={<RiLinkedinFill />}
            />
            <Button
              href="https://www.ukclimbing.com/logbook/showlog.php?id=216572&sort=g&country=&crag=&gradetype=&partners=0&year=&season=&nresults=100&pg=1"
              icon={<TbNotebook />}
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section>
        <h3 className="mt-10 text-neutral-200 mb-2 font-semibold">Work</h3>

        <Card
          imageUrl="/incident-icon.png"
          href="https://incident.io"
          title="incident.io"
          subtitle="Senior Product Engineer"
          label="2022 - Now"
        />
        <Card
          imageUrl="/vidsy-icon.jpg"
          href="https://vidsy.co"
          title="Vidsy"
          subtitle="Chief Technology Officer"
          label="2016 - 2022"
        />
        <Card
          imageUrl="/bbc-news-icon.png"
          href="https://bbc.co.uk/news"
          title="BBC News"
          subtitle="Senior Software Engineer"
          label="2014 - 2016"
          isLast={true}
        />
      </section>

      {/* Projects */}
      <section>
        <h3 className="mt-10 text-neutral-200 mb-2 font-semibold">Projects</h3>

        <Card
          imageUrl="/rss-explore-icon.png"
          href="https://github.com/revett/rss-explore"
          title="RSS Explore"
          subtitle="Tools to help you easily find and manage RSS feeds"
          isLast={true}
        />
      </section>
    </main>
  );
};

export default Page;
