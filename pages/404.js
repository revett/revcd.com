import React from 'react';
import { ErrorPage, ErrorType } from '../components/errorPage';

const Custom404 = () => {
  return <ErrorPage errorType={ErrorType.NotFound} />;
};

export default Custom404;
