import { ErrorBoundary } from "@sentry/react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Markdown from "./components/markdown"
import CV from "./pages/cv"
import Home from "./pages/home"
import NotFound from "./pages/notFound"
import Now from "./pages/now"
import postGitHubTheme from "./posts/applying-github-dark-theme-miniflux-gpt.md"
import postMonzo from "./posts/automating-simple-personal-finance-system-with-monzo.md"
import postHiking from "./posts/hiking-bobotov-kuk-sedlo-zabljak-gpx.md"
import postNowSummer2022 from "./posts/now/summer-autumn-2022.md"

const posts = [
  {
    path: "/hiking-bobotov-kuk-sedlo-zabljak-gpx",
    content: postHiking,
  },
  {
    path: "/automating-simple-personal-finance-system-with-monzo",
    content: postMonzo,
  },
  {
    path: "/applying-github-dark-theme-miniflux-gpt",
    content: postGitHubTheme,
  },
  { path: "/now/summer-autumn-2022", content: postNowSummer2022 },
]

// TODO: Add a proper error component.
const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/now">Now</Link>
      </nav>

      <ErrorBoundary fallback={<p>An error has occurred</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/now" element={<Now />} />

          {posts.map(({ path, content }) => {
            return <Route key={path} path={path} element={<Markdown markdown={content} />} />
          })}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
