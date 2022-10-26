import About from "./pages/about";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CV from "./pages/cv";
import Layout from "./pages/layout";
import Projects from "./pages/projects";
import Now from "./pages/now";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<CV />} />
          <Route path="now" element={<Now />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
