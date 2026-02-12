import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhoWeAre from "./pages/about/whoWeAre";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Project";
import TopInfoBar from "./components/TopInfoBar";
import Seo from "./pages/services/Seo";
import SEO_Packages from "./pages/plans-pricinng/SEO_Packages";
import SEO_Starter_Pack from "./pages/plans-pricinng/SEO_Starter_Pack";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import OnlineReputationManagement from "./pages/services/OnlineReputationManagement";
import SmoPackages from "./pages/plans-pricinng/SmoPackages";
import PpcPackages from "./pages/plans-pricinng/PpcPackages";
import WebDesigningPackages from "./pages/plans-pricinng/WebDesigningPackages";
import WhyUs from "./pages/about/WhyUs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopInfoBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/why-choose-us" element={<WhyUs />} />
        {/* <Route path="/market/cannabis-seo-services" element={<CannabisSeoServices />} />
        <Route path="/market/seo-for-furniture-stores" element={<SeoFurnitureStores />} /> */}
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route
          path="/services/mobile-application-development"
          element={<AppDevelopment />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/services/online-reputation-management"
          element={<OnlineReputationManagement />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/pricing/seo-packages" element={<SEO_Packages />} />
        <Route
          path="/pricing/seo-starter-pack"
          element={<SEO_Starter_Pack />}
        />
        <Route path="/pricing/smo-packages" element={<SmoPackages />} />
        <Route path="/pricing/ppc-packages" element={<PpcPackages />} />
        <Route
          path="/pricing/web-design-packages"
          element={<WebDesigningPackages />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
