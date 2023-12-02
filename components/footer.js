import Section from "./section";

const Footer = () => {
  const startingYear = 2022;
  const currentYear = new Date().getFullYear();

  return (
    <Section className="text-neutral-500 text-sm">
      &copy; Charlie Revett {startingYear} - {currentYear}
    </Section>
  );
};

Footer.propTypes = {};

export default Footer;
