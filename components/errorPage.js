import PropTypes from "prop-types";
import { TbFaceIdError, TbHomeMove } from "react-icons/tb";

import { Button, ButtonTheme } from "../components/button";
import ButtonGroup from "../components/buttonGroup";
import Container from "../components/container";
import Footer from "../components/footer";
import Heading from "../components/heading";
import { Icon, IconTheme } from "../components/icon";
import Section from "../components/section";

const ErrorPage = ({ errorType }) => {
  let copy = "";
  if (errorType === ErrorType.Error) {
    copy = "Oops! Something went wrong when trying to load the page.";
  }
  if (errorType === ErrorType.NotFound) {
    copy = "Oops! The page you were looking for could not be found.";
  }

  return (
    <Container>
      <Section>
        <Icon id={<TbFaceIdError />} theme={IconTheme.PageTitle} />

        <Heading level={1} isForSection={false}>
          {copy}
        </Heading>

        <ButtonGroup>
          <Button
            href="/"
            icon={<TbHomeMove />}
            text="Go home"
            theme={ButtonTheme.Secondary}
          />
        </ButtonGroup>
      </Section>

      <Footer />
    </Container>
  );
};

const ErrorType = Object.freeze({
  Error: "error",
  NotFound: "notFound",
});

ErrorPage.propTypes = {
  errorType: PropTypes.oneOf([ErrorType.Error, ErrorType.NotFound]).isRequired,
};

export { ErrorPage, ErrorType };