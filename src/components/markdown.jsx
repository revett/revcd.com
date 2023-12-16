import PropTypes from "prop-types"
import React from "react"
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import { unified } from "unified"
import Container from "./container"

const Markdown = ({ markdown }) => {
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
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
}

export default Markdown
