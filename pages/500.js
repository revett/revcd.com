import React from 'react';
import { ErrorPage, ErrorType } from '../components/errorPage';

const Custom500 = () => {
  return <ErrorPage errorType={ErrorType.Error} />;
};

export default Custom500;
