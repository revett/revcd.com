import { ErrorBoundary } from "@sentry/react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import CV from "./pages/cv"
import Home from "./pages/home"
import Now from "./pages/now"

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
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
