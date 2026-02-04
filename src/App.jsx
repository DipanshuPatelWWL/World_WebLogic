import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhoWeAre from "./pages/about/whoWeAre";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import WhyWwl from "./pages/about/WhyWwl";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/why-choose-us" element={<WhyWwl />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;