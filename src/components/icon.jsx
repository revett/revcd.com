import PropTypes from "prop-types"

const Icon = ({ id, theme }) => {
  const IconComponent = id.type

  if (theme === IconTheme.Button) {
    return <IconComponent className="h-5 w-5 inline-block" />
  }

  if (theme === IconTheme.PageTitle) {
    return (
      <div className="mb-2">
        <IconComponent className="w-6 h-6" />
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
