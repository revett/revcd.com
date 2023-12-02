import React from 'react';
import PropTypes from 'prop-types';
import './globals.css';

export const metadata = {
  title: 'Charlie Revett (@revcd) • Software Engineer',
  description: 'Software engineer based in London.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
