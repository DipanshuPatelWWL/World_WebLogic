import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ========= GLOBAL COMPONENTS ========= */
import Header from "./components/Header";
import Footer from "./components/Footer";


/* ========= PAGES ========= */
import Home from "./pages/Home";
import WhoWeAre from "./pages/about/whoWeAre";

/* ========= SERVICES ========= */
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Project";
import TopInfoBar from "./components/TopInfoBar";



import Seo from "./pages/services/Seo";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import OnlineReputationManagement from "./pages/services/OnlineReputationManagement";

/* ========= PRICING ========= */
import SEO_Packages from "./pages/plans-pricinng/SEO_Packages";
import SEO_Starter_Pack from "./pages/plans-pricinng/SEO_Starter_Pack";
import SmoPackages from "./pages/plans-pricinng/SmoPackages";
import PpcPackages from "./pages/plans-pricinng/PpcPackages";
import WebDesigningPackages from "./pages/plans-pricinng/WebDesigningPackages";
import WhyUs from "./pages/about/WhyUs";

/* ========= VIDEO ========= */
import heroVideo from "./assets/video/heroVideo.mp4";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SplashCursor />
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* ================= SITE CONTENT ================= */}
      <div className="relative z-10">
        <TopInfoBar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/why-choose-us" element={<WhyUs />} />

          {/* SERVICES */}
          <Route path="/services/seo" element={<Seo />} />
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

          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />

          {/* PRICING */}
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

          {/* CONTACT */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
