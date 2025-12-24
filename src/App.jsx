import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Layout Pages
import { Layout } from "./components/layouts/Layout";

// Import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />}  />
          <Route path="/projects/:id" element={<ProjectDetail />}  />
          <Route path="/contact" element={<ContactPage />}  />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;