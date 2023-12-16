import { Link } from "react-router-dom"
import Container from "../components/container"

const Now = () => {
  return (
    <Container>
      <p>
        <Link to="/">home</Link> / now
      </p>
      <div>Now</div>
    </Container>
  )
}

export default Now
