import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import { unified } from "unified"
import Container from "./container"
import Footer from "./footer"

const Markdown = ({ id, markdown, title, date }) => {
  const [content, setContent] = React.useState("")

  React.useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(markdown)
      .then((vfile) => {
        setContent(String(vfile))
      })
      .catch((error) => {
        console.error("Error processing markdown:", error)
      })
  }, [markdown])

  return (
    <Container>
      <p>
        <Link to="/">Home</Link> {"/"} Posts {"/"} {title}
      </p>
      <img src={`/posts/${id}.jpg`} />
      <h1>{title}</h1>
      <h2 className="text-lg mt-0 font-normal">
        By Charlie Revett (<a href="https://twitter.com/revcd">@revcd</a>) on {date}.
      </h2>

      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Footer includeSocialLinks />
    </Container>
  )
}

Markdown.propTypes = {
  id: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Markdown
