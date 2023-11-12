import Link from "../components/link";
import Paragraph from "../components/paragraph";

export default function Page() {
  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col">
        <h1 className="mt-2 text-lg">
          <span className="font-semibold">Charlie Revett</span> is a software
          engineer, living in London.
        </h1>

        <Paragraph>
          As a senior product engineer at{" "}
          <Link href="https://incident.io" text="incident.io" />, my days are
          filled with engaging customer conversations and crafting impactful
          product features that streamline incident management for our users.
        </Paragraph>

        <Paragraph>
          Previously, I led the technical vision at{" "}
          <Link href="https://vidsy.co" text="vidsy.co" /> as CTO and played a
          key role in shaping the digital experience of{" "}
          <Link href="https://bbc.co.uk/news" text="bbc.com/news" /> as a senior
          software engineer.
        </Paragraph>

        <Paragraph>
          I thrive on creating features that not only solve problems but also
          bring delight. When I'm not working, you'll find me exploring the
          great outdoors or tinkering on passion projects at{" "}
          <Link href="https://wildgrovelabs.com" text="wildgrovelabs.com" />.
        </Paragraph>
      </div>
    </div>
  );
}
