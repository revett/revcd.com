import { BrowserTracing } from "@sentry/browser"
import * as Sentry from "@sentry/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./index.css"

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
