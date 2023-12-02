import cx from "classnames";
import PropTypes from "prop-types";

const Heading = ({ children, isForSection, level }) => {
  const Tag = `h${level}`;

  const styles = cx("mt-2", {
    "mb-2 font-semibold": isForSection,
  });

  return <Tag className={styles}>{children}</Tag>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  isForSection: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3]).isRequired,
};

Heading.defaultProps = {
  isForSection: true,
};

export default Heading;
