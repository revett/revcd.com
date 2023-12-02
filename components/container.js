import cx from "classnames";
import { Nunito } from "next/font/google";
import PropTypes from "prop-types";

const font = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

const Container = ({ children }) => {
  const styles = cx(font.variable, "flex font-serif text-neutral-200");

  return (
    <main className={styles}>
      <div className="mx-auto w-full md:max-w-[640px]">
        <div className="mx-8 my-12 md:mx-20 md:my-32">{children}</div>
      </div>
    </main>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
