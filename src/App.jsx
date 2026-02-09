import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhoWeAre from "./pages/about/whoWeAre";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import SearchEngineOptimization from "./pages/services/Seo";
import WhyWwl from "./pages/about/WhyWwl";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Project";
import CannabisSeoServices from "./pages/market/CannabisSeoServices";
import TopInfoBar from "./components/TopInfoBar";
import SeoFurnitureStores from "./pages/market/SeoFurnitureStores";
import Seo from "./pages/services/Seo";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopInfoBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/services/seo" element={<SearchEngineOptimization />} />
        <Route path="/about/why-choose-us" element={<WhyWwl />} />
        <Route path="/market/cannabis-seo-services" element={<CannabisSeoServices />} />
        <Route path="/market/seo-for-furniture-stores" element={<SeoFurnitureStores />} />
        <Route path="//services/seo" element={<Seo />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;