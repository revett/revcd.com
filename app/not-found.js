import "./globals.css";
import { ErrorPage, ErrorType } from "../components/errorPage";

const NotFound = () => {
  return (
    <html lang="en">
      <body>
        <ErrorPage errorType={ErrorType.NotFound} />
      </body>
    </html>
  );
};

export default NotFound;
