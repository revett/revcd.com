import PropTypes from "prop-types";

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default function Paragraph({ children }) {
  return (
    <p className="text-lg  leading-[1.9rem] mt-8 text-neutral-400 w-11/12">
      {children}
    </p>
  );
}
