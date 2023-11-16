import PropTypes from "prop-types";

const Button = ({ href, icon, text }) => {
  const IconComponent = icon.type;
  return (
    <a
      href={href}
      className="p-3 rounded-xl hover:bg-neutral-900 border-none text-neutral-200"
    >
      <IconComponent className={"h-6 w-6 text-current inline"} />
      {text && <span className="pl-2">{text}</span>}
    </a>
  );
};

// TODO: Implement themes as props and styling.

Button.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
};

const ButtonTheme = Object.freeze({
  Primary: "primary",
  Invisible: "invisible",
});

export { Button, ButtonTheme };
