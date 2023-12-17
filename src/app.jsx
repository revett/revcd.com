import { ErrorBoundary } from "@sentry/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Markdown from "./components/markdown"
import CV from "./pages/cv"
import Home from "./pages/home"
import NotFound from "./pages/notFound"
import Now from "./pages/now"
import posts from "./posts"

// TODO: Add a proper error component.
const App = () => {
  return (
    <Router>
      <ErrorBoundary fallback={<p>An error has occurred</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/now" element={<Now />} />

          {posts.map(({ path, content, title, date }) => {
            const id = path.split("/").pop()

            return (
              <Route
                key={path}
                path={path}
                element={<Markdown id={id} markdown={content} title={title} date={date} />}
              />
            )
          })}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
