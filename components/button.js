import PropTypes from "prop-types";
import cx from "classnames";

const Button = ({ href, icon, text, theme }) => {
  const IconComponent = icon.type;

  const styles = cx(
    "p-3 rounded-lg text-neutral-200 duration-200 shadow-2xl transition-colors border-2 border-transparent hover:border-neutral-100 flex items-center",
    {
      "hover:bg-neutral-800": theme === ButtonTheme.Primary,
    },
    {
      "bg-neutral-800": theme === ButtonTheme.Secondary,
    }
  );

  return (
    <a href={href} className={styles}>
      <IconComponent className="h-6 w-6 text-current inline-block" />
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
