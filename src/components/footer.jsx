import PropTypes from "prop-types"
import { RiGithubLine, RiTwitterXLine, RiLinkedinFill } from "react-icons/ri"
import { Button } from "./button"
import ButtonGroup from "./buttonGroup"

const buttons = [
  {
    href: "https://twitter.com/revcd",
    icon: <RiTwitterXLine />,
  },

  {
    href: "https://linkedin.com/in/cdrev",
    icon: <RiLinkedinFill />,
  },

  {
    href: "https://github.com/revett",
    icon: <RiGithubLine />,
  },
]

const Footer = ({ includeSocialLinks }) => {
  const startingYear = 2022
  const currentYear = new Date().getFullYear()

  return (
    <section className="flex flex-col items-center justify-center">
      {includeSocialLinks && (
        <ButtonGroup className="flex justify-center">
          {buttons.map((button, i) => {
            return <Button key={i} href={button.href} icon={button.icon} />
          })}
        </ButtonGroup>
      )}
      <p className="text-center text-sm">
        &copy; Charlie Revett ({startingYear} - {currentYear})
      </p>
    </section>
  )
}

Footer.propTypes = {
  includeSocialLinks: PropTypes.bool,
}

Footer.defaultProps = {
  includeSocialLinks: false,
}

export default Footer
