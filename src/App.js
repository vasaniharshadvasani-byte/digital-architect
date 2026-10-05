import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import Nav from "./component/nav";
import Footer from "./component/footer";
import ScrollToTop from "./component/ScrollToTop";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Wrok from "./pages/work";
import Resume from "./pages/resume";
import Contact from "./pages/contact";


function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Wrok />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* Default fallback route to always open Home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
