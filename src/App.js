import { BrowserRouter, Route, Routes } from "react-router-dom";

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

      <BrowserRouter>
        <ScrollToTop />
        <Nav />
      

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/work" element={<Wrok />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>

        <Footer />


      </BrowserRouter>

    </>
  );
}

export default App;
