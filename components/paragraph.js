import PropTypes from "prop-types";

const Paragraph = ({ children }) => {
  return <p className="leading-7 mt-6 text-neutral-400 w-11/12">{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
