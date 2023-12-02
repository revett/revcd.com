"use client";

import { TbFaceIdError, TbHomeMove } from "react-icons/tb";

import { Button, ButtonTheme } from "../components/button";
import ButtonGroup from "../components/buttonGroup";
import Container from "../components/container";
import Footer from "../components/footer";
import Heading from "../components/heading";
import { Icon, IconTheme } from "../components/icon";
import Section from "../components/section";

import "./globals.css";

export const GlobalError = ({ error, reset }) => {
  return (
    <html lang="en">
      <body>
        <Container>
          <Section>
            <Icon id={<TbFaceIdError />} theme={IconTheme.PageTitle} />
            <Heading level={1} isForSection={false}>
              Oops! Something went wrong when trying to load the page.
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
      </body>
    </html>
  );
};

export default GlobalError;
