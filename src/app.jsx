import About from "./pages/about";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CV from "./pages/cv";
import Layout from "./layout";
import Projects from "./pages/projects";
import Now from "./pages/now";

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
