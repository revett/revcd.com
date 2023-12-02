import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Paragraph = ({ center, children, className }) => {
  const styles = cx(className, 'leading-7 mt-6 text-neutral-400 w-11/12', {
    'text-center': center,
  });
  return <p className={styles}>{children}</p>;
};

Paragraph.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
