import PropTypes from "prop-types";

const ButtonGroup = ({ children }) => {
  return <div className="flex mt-4 items-center gap-2">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
