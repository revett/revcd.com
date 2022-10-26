import PropTypes from "prop-types";
import React from "react";

class Anchor extends React.Component {
  render() {
    return (
      <span>
        {this.props.padBefore ? " " : null}
        <span className="border-b-2 border-indigo-400 text-indigo-400">
          {this.props.href === undefined ? (
            this.props.text
          ) : (
            <a href={this.props.href}>{this.props.text}</a>
          )}
        </span>
        {this.props.padAfter ? " " : null}
      </span>
    );
  }
}

Anchor.propTypes = {
  href: PropTypes.string,
  padAfter: PropTypes.bool,
  padBefore: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Anchor.defaultProps = {
  padAfter: true,
  padBefore: true,
};

export default Anchor;
