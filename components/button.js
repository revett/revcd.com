import cx from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import { Icon, IconTheme } from "./icon";

const Button = ({ href, icon, text, theme }) => {
  const styles = cx(
    "p-3 rounded-xl text-neutral-200 duration-200 shadow-2xl transition-colors border-2 flex items-center hover:border-neutral-500",
    {
      "hover:bg-neutral-900 border-transparent": theme === ButtonTheme.Primary,
    },
    {
      "bg-neutral-900 border-neutral-700": theme === ButtonTheme.Secondary,
    }
  );

  return (
    <Link href={href} className={styles}>
      <Icon id={icon} theme={IconTheme.Button} />
      {text && <span className="pl-2">{text}</span>}
    </Link>
  );
};

const ButtonTheme = Object.freeze({
  Primary: "primary",
  Secondary: "secondary",
});

Button.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
  theme: PropTypes.oneOf([ButtonTheme.Primary, ButtonTheme.Secondary]),
};

Button.defaultProps = {
  theme: ButtonTheme.Primary,
};

export { Button, ButtonTheme };
