import NextLink from "next/link";
import PropTypes from "prop-types";

const Link = ({ href, text }) => {
  return (
    <NextLink
      className="text-neutral-200 border-b-2 border-neutral-300"
      href={href}
    >
      {text}
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
