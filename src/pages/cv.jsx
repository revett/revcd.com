import { Link } from "react-router-dom"
import Container from "../components/container"

const CV = () => {
  return (
    <Container>
      <p>
        <Link to="/">charlie revett</Link> / cv
      </p>

      <h1>CV / Resume</h1>

      <p>
        Hey, I&apos;m Charlie Revett. I&apos;m a software engineer living in London, on the
        incident.io 👨‍🚒 team as a Senior Product Engineer. Check out what I&apos;m up to now or drop
        me an email.
      </p>

      <p>Previously I have worked as:</p>
      <ul>
        <li>Staff Software Engineer at Vidsy</li>
        <li>Chief Technology Officer (CTO) at Vidsy</li>
        <li>Senior Software Engineer at BBC News</li>
      </ul>
    </Container>
  )
}

export default CV
