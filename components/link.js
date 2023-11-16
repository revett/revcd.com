import PropTypes from "prop-types";

const Link = ({ href, text }) => {
  return (
    <a className="text-neutral-200 border-b-2 border-neutral-300" href={href}>
      {text}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
