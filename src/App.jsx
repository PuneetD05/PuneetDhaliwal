import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { profile } from "./data";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
        </p>
      </footer>
    </HashRouter>
  );
}
