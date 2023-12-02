import cx from "classnames";
import { Nunito } from "next/font/google";
import PropTypes from "prop-types";

const font = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

const Container = ({ children }) => {
  const styles = cx(
    font.variable,
    "flex bg-neutral-950 font-serif text-neutral-200 h-screen"
  );

  return (
    <main className={styles}>
      <div className="mx-auto">
        <div className="md:max-w-[640px] m-6 md:m-20">{children}</div>
      </div>
    </main>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
