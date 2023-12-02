import PropTypes from "prop-types";

const SocialIcon = ({ href, icon }) => {
  const IconComponent = icon.type;

  return (
    <a
      href={href}
      className="p-3 rounded-lg hover:bg-neutral-900 border-none text-neutral-200"
    >
      {/* {icon} */}
      <IconComponent className={"h-6 w-6 text-current"} />
    </a>
  );
};

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialIcon;
