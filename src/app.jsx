import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./layout";
import About from "./pages/about";
import CV from "./pages/cv";
import Now from "./pages/now";
import Projects from "./pages/projects";
import RSSExplore from "./pages/projects/rssExplore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Base routes */}
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<CV />} />
          <Route path="now" element={<Now />} />

          {/* Projects */}
          <Route path="projects/rss-explore" element={<RSSExplore />} />

          {/* 404 redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
