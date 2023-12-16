import PropTypes from "prop-types"
import Icon from "./icon"

const Container = ({ children }) => {
  return (
    <main className="flex">
      <div className="mx-auto w-full md:max-w-[800px]">
        <div className="mx-8 my-12 md:mx-20 md:my-32">
          <Icon />

          {children}
        </div>
      </div>
    </main>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
