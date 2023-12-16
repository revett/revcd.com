import PropTypes from "prop-types"

const ButtonGroup = ({ children }) => {
  return <div className="flex mb-4 items-center gap-1">{children}</div>
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonGroup
