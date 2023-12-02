import cx from "classnames";
import PropTypes from "prop-types";

const Section = ({ children, className }) => {
  const styles = cx(className, "mt-8 first:mt-0");
  return <section className={styles}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
