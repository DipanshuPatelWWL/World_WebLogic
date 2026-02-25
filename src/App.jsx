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
import SmallBusinessSeo from "./pages/services/LocalSeoServices/SmallBusinesSeo";
import DigitalMarketingStrategy from "./pages/services/digitalMarketing/DigitalMarketingStrategy";
import DigitalMarketingAudit from "./pages/services/digitalMarketing/DigitalMarketingAudit";
import ContentMarketing from "./pages/services/digitalMarketing/ContentMarketing";
import EmailMarketing from "./pages/services/digitalMarketing/EmailMarketing";
import ReputationManagement from "./pages/services/digitalMarketing/ReputationManagement";
import FranchiseDigitalMarketing from "./pages/services/digitalMarketing/FranchiseDigitalMarketing";
import GbpOptimization from "./pages/services/LocalSeoServices/GbpOptimization";
import EcommerceSeoServices from "./pages/services/seo/EcommerceSeoServices";
import LinkBuildingServices from "./pages/services/seo/LinkBuildingServices";
import TechnicalSeoServices from "./pages/services/seo/TechnicalSeoServices";
import FranchisSeoServices from "./pages/services/seo/FranchiseSeoServices";
import VoiceSearchOptimization from "./pages/services/seo/VoiceSearchOptimization";
import AppStoreOptimization from "./pages/services/seo/AppStoreOptimization";
import WhiteLabelSeo from "./pages/services/seo/WhiteLabelSeo";
import Geo from "./pages/services/seo/Geo";
import Aeo from "./pages/services/seo/Aeo";
import YouTubeSeo from "./pages/services/videoSeo/YouTubeSeo";
import SocialMediaOptimization from "./pages/services/socialMediaMarketing/SocialMediaOptimization";
import SocialMediaManagement from "./pages/services/socialMediaMarketing/SocialMediaManagement";
import SocialMediaAdvertise from "./pages/services/socialMediaMarketing/SocialMediaAdvertise";
import ShopifyWebDev from "./pages/services/ecommerceDevelopment/ShopifyWebDev";
import WoocommerceDev from "./pages/services/ecommerceDevelopment/WoocommerceDev";
import PaymentGateway from "./pages/services/ecommerceDevelopment/PaymentGateway";
import PPCServices from "./pages/services/digitalAdvertising/PPCServices";
import FacebookAdvertising from "./pages/services/digitalAdvertising/FacebookAdvertising";
import InstagramAdvertising from "./pages/services/digitalAdvertising/InstagramAdvertising";
import XMarketing from "./pages/services/digitalAdvertising/XMarketing";
import LinkedInMarketing from "./pages/services/digitalAdvertising/LinkedInMarketing";
import PinterestMarketing from "./pages/services/digitalAdvertising/PinterestMarketing";
import CRO from "./pages/services/digitalAdvertising/CRO/CRO";
import AmazonPPC from "./pages/services/digitalAdvertising/AmazonPPCService/AmazonPPC";
import TestimonialVideo from "./pages/services/videoSeo/TestimonialVideo";
import VlogVideoProduction from "./pages/services/videoSeo/VlogVideoProduction";
import WordPressDevelopment from "./pages/services/WebDesign&Development/WordPressDevelopment";
import CustomWebsiteDesign from "./pages/services/WebDesign&Development/CustomWebsiteDesign";
import WebsiteRedesign from "./pages/services/WebDesign&Development/WebsiteRedesign";
import MagentoDevelopment from "./pages/services/WebDesign&Development/MagentoDevelopment";
import MobileAppDevelopment from "./pages/services/WebDesign&Development/MobileAppDevelopment";
import JoomlaDev from "./pages/services/WebDesign&Development/JoomlaDev";
import WebsiteHosting from "./pages/services/WebDesign&Development/WebsiteHosting";
import AutomotiveSeo from "./pages/market/popular-market/AutomotiveSeo";


function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <SplashCursor /> */}
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
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/mobile-application-development"
            element={<AppDevelopment />}
          />
          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketing />}
          />

          <Route
            path="/services/digitalMarketing/digital-marketing-strategy"
            element={<DigitalMarketingStrategy />}
          />

          {/* LOCAL SEO SERVICES */}
          <Route
            path="/services/small-business-seo"
            element={<SmallBusinessSeo />}
          />
          <Route
            path="/services/gbp-optimization"
            element={<GbpOptimization />}
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
          <Route
            path="/services/digitalMarketing/digital-marketing-audit"
            element={<DigitalMarketingAudit />}
          />
          <Route
            path="/services/digitalMarketing/content-marketing"
            element={<ContentMarketing />}
          />
          <Route
            path="/services/digitalMarketing/email-marketing"
            element={<EmailMarketing />}
          />
          <Route
            path="/services/digitalMarketing/reputation-management"
            element={<ReputationManagement />}
          />
          <Route
            path="/services/digitalMarketing/franchise-digital-marketing"
            element={<FranchiseDigitalMarketing />}
          />
          <Route
            path="/services/seo/ecommerce-seo-services"
            element={<EcommerceSeoServices />}
          />
          <Route
            path="/services/seo/link-building-services"
            element={<LinkBuildingServices />}
          />
          <Route
            path="/services/seo/technical-seo-services"
            element={<TechnicalSeoServices />}
          />
          <Route
            path="/services/seo/franchise-seo-services"
            element={<FranchisSeoServices />}
          />
          <Route
            path="/services/seo/voice-search-optimization"
            element={<VoiceSearchOptimization />}
          />
          <Route
            path="/services/seo/app-store-optimization"
            element={<AppStoreOptimization />}
          />
          <Route
            path="/services/seo/white-label-seo"
            element={<WhiteLabelSeo />}
          />
          <Route
            path="/services/seo/generative-engine-optimization"
            element={<Geo />}
          />
          <Route
            path="/services/seo/answer-engine-optimization"
            element={<Aeo />}
          />
          <Route
            path="/services/youtube-optimization"
            element={<YouTubeSeo />}
          />

          <Route
            path="/services/smo/social-media-optimization"
            element={<SocialMediaOptimization />}
          />
          <Route
            path="/services/smo/social-media-management"
            element={<SocialMediaManagement />}
          />
          <Route
            path="/services/smo/social-media-advertise"
            element={<SocialMediaAdvertise />}
          />
          <Route
            path="/services/shopify-web-development"
            element={<ShopifyWebDev />}
          />
          <Route
            path="/services/woocommerce-web-development"
            element={<WoocommerceDev />}
          />
          <Route
            path="/services/payment-gateway-integration"
            element={<PaymentGateway />}
          />


          {/* Digital Advertising */}
          <Route
            path="/services/pay-per-click"
            element={<PPCServices />}
          />
          <Route
            path="/services/facebook-advertising"
            element={<FacebookAdvertising />}
          />
          <Route
            path="/services/instagram-advertising"
            element={<InstagramAdvertising />}
          />
          <Route
            path="/services/x-marketing"
            element={<XMarketing />}
          />
          <Route
            path="/services/linkedin-marketing"
            element={<LinkedInMarketing />}
          />
          <Route
            path="/services/pinterest-marketing"
            element={<PinterestMarketing />}
          />
          <Route
            path="/services/conversion-rate-optimization"
            element={<CRO />}
          />
          <Route
            path="/services/amazon-ppc-services"
            element={<AmazonPPC />}
          />
          <Route
            path="/services/customer-testimonial-videos"
            element={<TestimonialVideo />}
          />
          <Route
            path="/services/vlog-video-production"
            element={<VlogVideoProduction />}
          />
          <Route
            path="/services/wordpress-development"
            element={<WordPressDevelopment />}
          />
          <Route
            path="/services/custom-website-design"
            element={<CustomWebsiteDesign />}
          />
          <Route
            path="/services/website-redesign"
            element={<WebsiteRedesign />}
          />
          <Route
            path="/services/magento-development"
            element={<MagentoDevelopment />}
          />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/services/joomla-development"
            element={<JoomlaDev />}
          />
          <Route
            path="/services/website-hosting"
            element={<WebsiteHosting />}
          />
          <Route
            path="/market/automotive-seo"
            element={<AutomotiveSeo />}
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
