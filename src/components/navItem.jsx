import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import Emoji from "./emoji";

class NavItem extends React.Component {
  render() {
    let content = (
      <span>
        <Emoji emoji={this.props.emoji} />{" "}
        <span
          className={cx({
            "font-medium": this.props.onPage,
            "hover:text-indigo-400": !this.props.onPage,
          })}
        >
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
