import Container from "../components/container"

const Home = () => {
  return (
    <Container>
      <h1>
        <span className="font-semibold">Charlie Revett</span> is a software engineer, living in
        London.
      </h1>

      <p>
        At <a href="https://incident.io">incident.io</a>, my days are filled with customer
        conversations and building product features that streamline incident management for our
        users.
      </p>

      <p>
        Previously, I led the technical vision at <a href="https://vidsy.co">vidsy.co</a> as CTO and
        helped shape the digital experience of <a href="https://bbc.co.uk/news">bbc.com/news</a> as
        a senior software engineer.
      </p>

      <p>
        I enjoy creating products that not only solve problems but also spark joy. When not working,
        you&apos;ll find me exploring the great outdoors or building apps at{" "}
        <a href="https://8thpark.com">8thpark.com</a>.
      </p>

      <p>
        Say <a href="mailto:hi@revdex.fastmail.com">hi@revdex.fastmail.com</a>
      </p>
    </Container>
  )
}

export default Home
