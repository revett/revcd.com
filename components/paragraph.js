import PropTypes from "prop-types";

const Paragraph = ({ children }) => {
  return (
    <p className="leading-[1.9rem] mt-8 text-neutral-400 w-11/12">{children}</p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
