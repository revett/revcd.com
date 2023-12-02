import PropTypes from "prop-types";

const ButtonGroup = ({ children }) => {
  return <div className="flex -ml-2 mt-6 items-center gap-2">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
