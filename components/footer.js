import React from 'react';
import PropTypes from 'prop-types';
import { RiGithubLine, RiTwitterXLine, RiLinkedinFill } from 'react-icons/ri';

import ButtonGroup from './buttonGroup';
import { Button } from './button';
import Section from './section';
import Paragraph from './paragraph';

const Footer = ({ includeSocialLinks }) => {
  const startingYear = 2022;
  const currentYear = new Date().getFullYear();

  return (
    <Section className="flex flex-col items-center justify-center text-sm">
      {includeSocialLinks && (
        <ButtonGroup className="flex justify-center">
          <Button href="https://twitter.com/revcd" icon={<RiTwitterXLine />} />
          <Button href="https://linkedin.com/in/cdrev" icon={<RiLinkedinFill />} />
          <Button href="https://github.com/revett" icon={<RiGithubLine />} />
        </ButtonGroup>
      )}
      <Paragraph center>
        &copy; Charlie Revett {startingYear} - {currentYear}
      </Paragraph>
    </Section>
  );
};

Footer.propTypes = {
  includeSocialLinks: PropTypes.bool,
};

Footer.defaultProps = {
  includeSocialLinks: false,
};

export default Footer;
