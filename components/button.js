import cx from "classnames";
import PropTypes from "prop-types";
import { Icon, IconTheme } from "./icon";

const Button = ({ href, icon, text, theme }) => {
  const IconComponent = icon.type;

  const styles = cx(
    "p-3 rounded-xl text-neutral-200 duration-200 shadow-2xl transition-colors border-2 flex items-center hover:border-neutral-400",
    {
      "hover:bg-neutral-800 border-transparent": theme === ButtonTheme.Primary,
    },
    {
      "bg-neutral-800 border-neutral-600": theme === ButtonTheme.Secondary,
    }
  );

  return (
    <a href={href} className={styles}>
      <Icon id={icon} theme={IconTheme.Button} />
      {text && <span className="pl-2">{text}</span>}
    </a>
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
