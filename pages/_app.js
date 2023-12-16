import React from 'react';
import PropTypes from 'prop-types';
import Container from '../components/container';
import './globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
};

export const metadata = {
  title: 'Charlie Revett (@revcd) • Software Engineer',
  description: 'Software engineer based in London.',
};

export default MyApp;
