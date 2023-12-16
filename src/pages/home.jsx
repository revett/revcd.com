import { GiMountaintop } from "react-icons/gi"
import { RiGithubLine, RiInstagramLine, RiLinkedinFill, RiTwitterXLine } from "react-icons/ri"
import { TbNotebook } from "react-icons/tb"
import { Link } from "react-router-dom"
import imgRSSExplore from "../assets/projects/rss-explore-icon.png"
import { Button, ButtonTheme } from "../components/button"
import ButtonGroup from "../components/buttonGroup"
import Card from "../components/card"
import Container from "../components/container"
import { Icon, IconTheme } from "../components/icon"

const buttons = [
  {
    href: "https://twitter.com/revcd",
    text: "Follow @revcd",
    icon: <RiTwitterXLine />,
    theme: ButtonTheme.Secondary,
  },
  {
    href: "https://github.com/revett",
    icon: <RiGithubLine />,
  },
  {
    href: "https://instagram.com/cdrev",
    icon: <RiInstagramLine />,
  },
  {
    href: "https://linkedin.com/in/cdrev",
    icon: <RiLinkedinFill />,
  },
  {
    href: "https://www.ukclimbing.com/logbook/showlog.php?id=216572&sort=g&country=&crag=&gradetype=&partners=0&year=&season=&nresults=100&pg=1",
    icon: <TbNotebook />,
  },
]

const projects = [
  {
    imageUrl: imgRSSExplore,
    href: "https://github.com/revett/rss-explore",
    title: "RSS Explore",
    subtitle: "Tools to help you easily find and manage RSS feeds.",
  },
]

const Home = () => {
  return (
    <Container>
      <section>
        <Icon id={<GiMountaintop />} theme={IconTheme.PageTitle} />

        <h1>
          <span className="font-semibold">Charlie Revett</span> is a software engineer, living in
          London.
        </h1>

        <p>
          I work as a product engineer at <a href="https://incident.io">incident.io</a>, where I
          chat to customers about how they manage their incidents and build product features that
          streamline their workflows.
        </p>

        <p>
          Previously, I led the technical vision at <a href="https://vidsy.co">vidsy.co</a> as CTO
          and helped shape the digital experience of{" "}
          <a href="https://bbc.co.uk/news">bbc.com/news</a> as a senior software engineer.
        </p>

        <p>
          I enjoy creating products that not only solve problems but also spark joy. When not
          working, you&apos;ll find me exploring the great outdoors or building apps at{" "}
          <a href="https://8thpark.com">8thpark.com</a>.
        </p>

        <p>
          Say <a href="mailto:hi@revdex.fastmail.com">hi@revdex.fastmail.com</a>, or read about what
          I&apos;m <Link to="/now">up to now</Link>.
        </p>
      </section>

      <section>
        <ButtonGroup>
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                href={button.href}
                text={button.text}
                icon={button.icon}
                theme={button.theme}
              />
            )
          })}
        </ButtonGroup>
      </section>

      <section>
        <h2>Projects</h2>

        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              imageUrl={project.imageUrl}
              href={project.href}
              title={project.title}
              subtitle={project.subtitle}
              isLast={i === projects.length - 1}
            />
          )
        })}
      </section>
    </Container>
  )
}

export default Home
