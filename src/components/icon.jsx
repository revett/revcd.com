import PropTypes from "prop-types"

const Icon = ({ id, theme }) => {
  const IconComponent = id.type

  if (theme === IconTheme.Button) {
    return <IconComponent className="h-5 w-5 text-current inline-block" />
  }

  if (theme === IconTheme.PageTitle) {
    return (
      <div className="mb-4">
        <IconComponent className="w-12 h-12 text-zinc-200" />
      </div>
    )
  }

  return null
}

const IconTheme = Object.freeze({
  Button: "button",
  PageTitle: "pageTitle",
})

Icon.propTypes = {
  id: PropTypes.element.isRequired,
  theme: PropTypes.oneOf(Object.values(IconTheme)).isRequired,
}

export { Icon, IconTheme }
