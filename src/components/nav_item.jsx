import Emoji from "./emoji";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

class NavItem extends React.Component {
  render() {
    let content = (
      <span>
        <Emoji emoji={this.props.emoji} />{" "}
        <span className={this.props.onPage ? "font-medium" : null}>
          {this.props.text}
        </span>
      </span>
    );

    return (
      <span>
        {this.props.isFirst ? null : <span className="px-2">•</span>}
        {this.props.onPage ? (
          content
        ) : (
          <Link to={this.props.path}>{content}</Link>
        )}
      </span>
    );
  }
}

NavItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  onPage: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  isFirst: false,
};

export default NavItem;
