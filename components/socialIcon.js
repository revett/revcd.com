import PropTypes from "prop-types";

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="p-3 rounded-xl hover:bg-neutral-900 border-none text-neutral-200"
    >
      {icon}
    </a>
  );
};

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialIcon;
