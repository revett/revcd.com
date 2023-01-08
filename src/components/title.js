import PropTypes from "prop-types";
import React from "react";

class Title extends React.Component {
  render() {
    return (
      <h1 className="pb-4 text-xl">
        {this.props.text === undefined ? (
          <span className="font-medium">Charlie Revett</span>
        ) : (
          <span>
            <span className="font-medium">Charlie Revett</span> -{" "}
            {this.props.text}
          </span>
        )}
      </h1>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
