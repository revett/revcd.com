import PropTypes from "prop-types";

const Section = ({ children }) => {
  return <section className="mt-8 first:mt-0">{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
