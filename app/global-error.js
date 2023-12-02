"use client";

import "./globals.css";
import { ErrorPage, ErrorType } from "../components/errorPage";

const GlobalError = () => {
  return (
    <html lang="en">
      <body>
        <ErrorPage errorType={ErrorType.Error} />
      </body>
    </html>
  );
};

export default GlobalError;