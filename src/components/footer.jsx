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
  const currentYear = new Date().getFullYear()

  return (
    <section className="flex flex-col items-center justify-center mt-12">
      {includeSocialLinks && (
        <ButtonGroup className="flex justify-center">
          {buttons.map((button, i) => {
            return <Button key={i} href={button.href} icon={button.icon} />
          })}
        </ButtonGroup>
      )}
      <p className="text-center text-base">&copy; {currentYear} Charlie Revett</p>
    </section>
  )
}

Footer.propTypes = {
  includeSocialLinks: PropTypes.bool,
}

export default Footer
