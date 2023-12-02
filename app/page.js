import { GiMountaintop } from "react-icons/gi";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { TbNotebook } from "react-icons/tb";

import { Button, ButtonTheme } from "../components/button";
import ButtonGroup from "../components/buttonGroup";
import Card from "../components/card";
import Container from "../components/container";
import Link from "../components/link";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { Icon, IconTheme } from "../components/icon";
import Heading from "../components/heading";
import Footer from "../components/footer";

// TODO: Tooltips.
// TODO: Add posts.
// TODO: Add RSS.
// TODO: Add analytics
// TODO: 404 page
// TODO: https://nextjs.org/docs/app/building-your-application/optimizing

const Page = () => {
  return (
    <Container>
      {/* Introduction */}
      <Section>
        <Icon id={<GiMountaintop />} theme={IconTheme.PageTitle} />
        <Heading level={1} isForSection={false}>
          <span className="font-semibold">Charlie Revett</span> is a software
          engineer, living in London.
        </Heading>
        <Paragraph>
          At <Link href="https://incident.io" text="incident.io" />, my days are
          filled with customer conversations and crafting product features that
          streamline incident management for our users.
        </Paragraph>
        <Paragraph>
          Previously, I led the technical vision at{" "}
          <Link href="https://vidsy.co" text="vidsy.co" /> as CTO and played a
          key role in shaping the digital experience of{" "}
          <Link href="https://bbc.co.uk/news" text="bbc.com/news" /> as a senior
          software engineer.
        </Paragraph>
        <Paragraph>
          I enjoy on creating products that not only solve problems but also
          spark joy. When I'm not working, you'll find me exploring the great
          outdoors or building apps at{" "}
          <Link href="https://8thpark.com" text="8thpark" />.
        </Paragraph>
        <Paragraph>
          Say{" "}
          <Link
            href="mailto:hi@revdex.fastmail.com"
            text="hi@revdex.fastmail.com"
          />
        </Paragraph>
      </Section>
      {/* Links */}
      <Section>
        <ButtonGroup>
          <Button
            href="https://twitter.com/revcd"
            text="Follow @revcd"
            icon={<RiTwitterXLine />}
            theme={ButtonTheme.Secondary}
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
        </ButtonGroup>
      </Section>
      <Section>
        <Heading level={2}>Work</Heading>
        <Card
          imageUrl="/work-incident-icon.png"
          href="https://incident.io"
          title="incident.io"
          subtitle="Senior Product Engineer"
          label="2022 - Now"
        />
        <Card
          imageUrl="/work-vidsy-icon.jpg"
          href="https://vidsy.co"
          title="Vidsy"
          subtitle="Chief Technology Officer"
          label="2016 - 2022"
        />
        <Card
          imageUrl="/work-bbc-news-icon.png"
          href="https://bbc.co.uk/news"
          title="BBC News"
          subtitle="Senior Software Engineer"
          label="2014 - 2016"
          isLast={true}
        />
      </Section>
      <Section>
        <Heading level={2}>Projects</Heading>
        <Card
          imageUrl="/project-rss-explore-icon.png"
          href="https://github.com/revett/rss-explore"
          title="RSS Explore"
          subtitle="Tools to help you easily find and manage RSS feeds."
          isLast={true}
        />
      </Section>
      <Section>
        <Heading level={2}>Posts</Heading>
        {/* TODO: Use internal routing */}
        <Card
          imageUrl="/post-hiking-bobotov-kuk.png"
          href="/hiking-bobotov-kuk-sedlo-zabljak-gpx"
          title="Hiking Bobotov Kuk - Sedlo to Žabljak GPX Routes"
          subtitle="26th August 2023"
        />
        <Card
          imageUrl="/post-now-winter-spring.png"
          href="/now/winter-spring-2023"
          title="Now - Winter / Spring 2023"
          subtitle="21st June 2023"
        />
        <Card
          imageUrl="/post-automating-simple-personal-finance.png"
          href="/automating-simple-personal-finance-system-with-monzo"
          title="Automating a Simple Personal Finance System with Monzo"
          subtitle="16th May 2023"
        />
        <Card
          imageUrl="/post-applying-github-dark-theme.png"
          href="/applying-github-dark-theme-miniflux-gpt"
          title="Applying the GitHub Dark Theme to Miniflux with GPT"
          subtitle="6th May 2023"
        />
        <Card
          imageUrl="/post-now-summer-autumn.png"
          href="/now/summer-autumn-2022"
          title="Now - Summer / Autumn 2022"
          subtitle="30th November 2023"
          isLast={true}
        />
      </Section>
      <Footer />
    </Container>
  );
};

export default Page;
