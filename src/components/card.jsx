import PropTypes from "prop-types"

const Card = ({ imageUrl, href, title, subtitle, label, isLast }) => {
  return (
    <a
      className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-xl border-none hover:bg-zinc-900  group"
      href={href}
    >
      <div className="w-9 h-9 mt-0.5 rounded-xl flex-shrink-0 shadow-shorter overflow-hidden">
        <div className="text-zinc-400 font-semibold flex justify-center items-center h-full">
          <img className="w-9 h-9" src={imageUrl} />
        </div>
      </div>
      <div
        className={`flex flex-col flex-auto pb-4 group-hover:border-transparent text-zinc-300 ${
          isLast ? "" : "border-b border-zinc-800"
        }`}
      >
        <div>{title}</div>
        <div className="text-zinc-500 flex justify-between gap-x-2 items-center">
          <div className="text-sm">{subtitle}</div>
          {label && <div className="text-zinc-500 text-sm">{label}</div>}
        </div>
      </div>
    </a>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  label: PropTypes.string,
  isLast: PropTypes.bool,
}

export default Card
