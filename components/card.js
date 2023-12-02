import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const Card = ({ imageUrl, href, title, subtitle, label, isLast }) => {
  return (
    <Link
      className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-xl border-none hover:bg-neutral-900 group"
      href={href}
    >
      <div className="bg-neutral-700 w-9 h-9 mt-0.5 rounded-xl flex-shrink-0 shadow-shorter overflow-hidden">
        <div className="text-neutral-400 font-semibold flex justify-center items-center h-full">
          <Image
            loading="lazy"
            width="36"
            height="36"
            decoding="async"
            className="w-9 h-9"
            src={imageUrl}
            alt="Incident.io Logo"
          />
        </div>
      </div>
      <div
        className={`flex flex-col flex-auto pb-4 group-hover:border-transparent text-neutral-300 ${
          isLast ? "" : "border-b border-neutral-900"
        }`}
      >
        <div>{title}</div>
        <div className="text-neutral-500 flex justify-between gap-x-2 items-center">
          <div className="text-sm">{subtitle}</div>
          {label && <div className="text-neutral-500 text-sm">{label}</div>}
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  label: PropTypes.string,
  isLast: PropTypes.bool,
};

export default Card;
