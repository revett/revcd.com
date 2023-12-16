import PropTypes from "prop-types"
import React from "react"
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import { unified } from "unified"

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

  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
}

export default Markdown
