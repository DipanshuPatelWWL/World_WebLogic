import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiSmartphone, FiTablet } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GiHiveMind } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../../assets/services/mobile-app-banner.jpg";
import Intro from "../../../assets/about/about2.jpg";
import SEO from "../../../assets/seo/SEO.webp";
import LocalSEO from "../../../assets/seo/localseo.avif";
import ContentMarketing from "../../../assets/services/content-marketing.avif";
import LinkBuilding from "../../../assets/services/link-build.avif";
import SMO from "../../../assets/services/smo.avif";
import SMM from "../../../assets/services/SMM.jpg";

import Fb from "../../../assets/services/fb.avif";
import Insta from "../../../assets/services/insta.avif";
import X from "../../../assets/services/x.avif";
import Yt from "../../../assets/services/yt.avif";
import Linkdin from "../../../assets/services/linkdin.avif";
import Pinterest from "../../../assets/services/pinterest.avif";
import Ppc from "../../../assets/services/ppc.avif";
import Web from "../../../assets/services/web-d-d.avif";
import Email from "../../../assets/services/email.avif";
import Cro from "../../../assets/services/cro.avif";


gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingStrategy = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];
  const [activeFaq, setActiveFaq] = useState(null);
  const faqRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      // ALL SECTIONS
      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: 60,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

const faqs = [
  {
    question: "Can I select specific services based on my business needs?",
    answer:
      "Absolutely. We offer complete flexibility in our approach. Whether you require a comprehensive digital marketing strategy or support with a specific service like SEO, PPC, or social media, we create a customized plan aligned with your goals.",
  },
  {
    question: "How do I track the progress of my campaigns?",
    answer:
      "We provide detailed monthly performance reports covering key metrics such as traffic, rankings, conversions, and ROI. Regular strategy reviews ensure you stay informed and aligned with campaign progress.",
  },
  {
    question: "Do you offer multi-channel marketing solutions?",
    answer:
      "Yes. As a full-service digital marketing partner, we build integrated strategies that connect SEO, PPC, email marketing, social media, and more—ensuring all channels work together to maximize visibility and impact.",
  },
  {
    question: "How soon can I expect to see results?",
    answer:
      "Timelines depend on your goals and chosen services. Paid campaigns like PPC can generate faster results, while SEO and content marketing build sustainable long-term growth. We set clear expectations and track measurable progress from the start.",
  },
  {
    question: "Can you work with small businesses and limited budgets?",
    answer:
      "Definitely. Our strategies are scalable and designed to deliver maximum ROI, even with limited budgets. We focus on high-impact channels to ensure sustainable growth for businesses of all sizes.",
  },
];


  return (
    <div ref={rootRef} className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/80" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-6 text-lg text-gray-300">
            Digital Marketing Strategy
          </p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Lead with a Powerful
            <span className="text-[#25baff]"> Digital Strategy</span>
          </h2>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Intro}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item">
          {/* Heading */}
          <h3 className="text-3xl font-extrabold mb-8 text-[#020202] relative inline-block">
            Build a Results-Driven
            <span className="text-[#25baff]"> Digital Marketing Strategy</span>
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
          </h3>

          <p className="text-gray-700 mb-6">
            Businesses with a clearly defined digital marketing strategy are
            313% more likely to achieve measurable marketing success, according
            to CoSchedule. Yet nearly half of companies still operate without a
            structured plan—wasting valuable time, budget, and growth
            opportunities.
          </p>

          <p className="text-gray-700 mb-6">
            A Digital Marketing Strategy is more than a document—it’s a complete
            growth framework. It aligns your business objectives with the right
            audience, channels, content, paid campaigns, SEO initiatives, and
            performance analytics. When every marketing effort works together
            under one strategic direction, you create consistent visibility,
            stronger engagement, and sustainable business growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#25baff] mb-6">
              Why is a Digital Marketing Strategy Important?
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A structured digital marketing strategy keeps your campaigns
              focused, measurable, and aligned with your business goals. Without
              a clear roadmap, businesses often waste budget, target the wrong
              audience, and struggle to achieve consistent growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Without Planning Card */}
            <div className="rounded-3xl shadow-xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-orange-600 text-white text-center py-8 px-6">
                <h3 className="text-2xl font-bold">
                  Digital Marketing <span className="italic">Without</span>{" "}
                  Planning
                </h3>
                <p className="mt-3 text-sm">
                  When strategy is missing, results become unpredictable and
                  costly.
                </p>
              </div>

              {/* Card Body */}
              <div className="bg-white p-8 space-y-5">
                <div className="flex items-start gap-3">
                  <FaTimesCircle className="text-orange-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Budget is spent without clear direction or measurable goals.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaTimesCircle className="text-orange-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Campaigns fail to reach the ideal target audience.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaTimesCircle className="text-orange-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Low conversion rates and disappointing ROI.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaTimesCircle className="text-orange-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Competitors gain visibility while your brand falls behind.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaTimesCircle className="text-orange-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Missed opportunities for growth and brand authority.
                  </p>
                </div>
              </div>
            </div>

            {/* With Planning Card */}
            <div className="rounded-3xl shadow-xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-green-700 text-white text-center py-8 px-6">
                <h3 className="text-2xl font-bold">
                  Digital Marketing <span className="italic">With</span>{" "}
                  Planning
                </h3>
                <p className="mt-3 text-sm">
                  A strategic approach transforms marketing into measurable
                  growth.
                </p>
              </div>

              {/* Card Body */}
              <div className="bg-white p-8 space-y-5">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Target the right audience with precision strategies.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Run optimized campaigns that deliver measurable ROI.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Convert website traffic into loyal customers.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Stay ahead with data-driven decisions and analytics.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" size={18} />
                  <p className="text-gray-700">
                    Build consistent brand visibility and long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-gray-700">
              Success doesn’t happen by chance. A well-planned digital marketing
              strategy ensures every campaign works together to maximize impact,
              optimize spending, and accelerate business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={SEO}
                alt="SEO Services"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                SEO <span className="text-[#25baff]">Services</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Stand ahead of your competitors on Google and other search
                engines with a results-driven SEO strategy...
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Optimizes your website using high-value, business-focused keywords.",
                  "Creates E-E-A-T-driven, authoritative, and engaging content.",
                  "Enhances website speed, usability, and overall content relevance.",
                  "Builds strong backlinks from reputable, high-domain-authority websites.",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View SEO Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Local <span className="text-[#25baff]">SEO Services</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Increase your visibility where it matters most — in your local
                market. Our targeted Local SEO strategies help your business
                appear prominently in local search results, Google Maps, and
                nearby customer queries, driving more foot traffic and service
                inquiries.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Fully optimized Google Business Profile for maximum local visibility",
                  "Strategic use of geo-targeted, location-specific keywords",
                  "Accurate and consistent NAP (Name, Address, Phone) citations across directories",
                  "Reputation management to build trust through positive customer reviews",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Local SEO Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={LocalSEO}
                alt="SEO Services"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={ContentMarketing}
                alt="ContentMarketing"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Content <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Content is the foundation of every successful digital strategy.
                Our content marketing services are designed to strengthen your
                brand authority, improve search visibility, and attract
                high-quality organic traffic that converts into leads and
                customers.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "SEO-optimized content crafted for both search engines and real users",
                  "Engaging blogs, infographics, and video content that capture attention",
                  "E-E-A-T-driven content focused on credibility and lead generation",
                  "High-authority thought leadership content that positions your brand as an industry expert",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Content marketing Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Link <span className="text-[#25baff]">Building</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                High-quality backlinks are essential for strengthening your
                website’s authority and improving search engine rankings. Our
                strategic, Google-compliant link-building approach focuses on
                earning credible links that enhance trust, visibility, and
                long-term SEO performance.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Industry-relevant, niche-specific backlinks",
                  "Content-led link acquisition strategies",
                  "High-quality guest posting placements on authoritative websites",
                  "Competitor-based backlink analysis and strategic outreach",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Link Building Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={LinkBuilding}
                alt="LinkBuilding"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={SMO}
                alt="SMO"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Social{" "}
                <span className="text-[#25baff]">Media Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Social media success goes beyond regular posting — it requires
                strategy, consistency, and optimization. We enhance your social
                media presence to boost visibility, strengthen audience
                engagement, and build lasting brand credibility across
                platforms. Our approach includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Complete profile optimization, including bios, keywords, and branding elements",
                  "Strategic hashtag and keyword research to improve reach and discoverability",
                  "Smart content planning, scheduling, and automation for consistent interaction",
                  "Performance tracking and analytics-driven improvements using platform insights",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View SMO Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Social <span className="text-[#25baff]">Media Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Social media plays a vital role in modern digital marketing. We
                help brands strengthen their online presence, build meaningful
                connections, and turn engagement into measurable business growth
                across all major platforms. Our social media strategy includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Customized, goal-oriented social media planning",
                  "Creative and engaging content designed to capture attention",
                  "Performance-driven paid campaigns to generate leads and increase brand loyalty",
                  "Active community management to nurture relationships and build trust",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Social Media Marketing Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={SMM}
                alt="SMM Services"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Fb}
                alt="facebook Services"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Facebook <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                With billions of active users worldwide, Facebook remains one of
                the most powerful platforms for brand expansion and customer
                acquisition. We develop performance-focused strategies that help
                your business build awareness, engage the right audience, and
                drive meaningful conversions. Our Facebook marketing services
                include:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Complete optimization of business pages and groups to strengthen credibility and reach",
                  "Advanced audience targeting based on demographics, interests, and online behavior",
                  "Lookalike audience creation and strategic retargeting to capture high-intent prospects",
                  "Continuous A/B testing and performance optimization to maximize ROI",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Facebook Marketing Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Instagram <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Instagram is where powerful visuals turn into meaningful
                engagement. We help your brand stand out through strategic
                storytelling, creative content, and performance-driven campaigns
                that connect with your ideal audience. Our Instagram marketing
                services include:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Eye-catching Reels, Stories, and Carousel content designed to boost engagement",
                  "Strategic hashtag planning and geo-targeting to increase discoverability",
                  "Influencer partnerships and user-generated content (UGC) campaigns to build trust",
                  "Shoppable posts and optimized Instagram Ads to drive traffic and conversions",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Instagram Marketing Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Insta}
                alt="Instagram"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={X}
                alt="X"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                X <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                X is built for real-time conversations, trends, and thought
                leadership. We help your brand stay relevant, spark meaningful
                discussions, and build authority through strategic content and
                performance-driven campaigns. Our X marketing services include:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Trend-focused hashtag strategies to increase visibility and engagement",
                  "High-performing X Ads, including Promoted Posts, Follower Campaigns, and Engagement Ads",
                  "Strategic thread creation and smart scheduling for consistent audience interaction",
                  "Social listening and sentiment analysis to monitor brand perception and optimize messaging",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View X Marketing Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                LinkedIn <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                LinkedIn is the premier platform for professional networking,
                executive branding, and B2B growth. We help position your brand
                as a trusted industry authority while generating high-quality
                leads through strategic content and targeted campaigns. Our
                LinkedIn marketing services include:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Complete optimization of personal profiles and company pages for search visibility and credibility",
                  "Thought leadership content such as articles, case studies, and whitepapers to establish expertise",
                  "Personalized outreach strategies and InMail campaigns to nurture and convert prospects",
                  "Performance-driven LinkedIn Ads, including Sponsored Content, Lead Generation Forms, and Message Ads",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View LinkedIn Marketing Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Linkdin}
                alt="Linkdin"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Yt}
                alt="Youtube"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                YouTube <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                As one of the world’s largest video platforms, YouTube offers
                unmatched opportunities for brand visibility and audience
                engagement. We help you leverage video marketing to tell
                compelling stories, build trust, and drive measurable business
                results. Our YouTube marketing strategy includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "SEO-optimized video titles, descriptions, tags, and structured timestamps for higher visibility",
                  "Strategic content planning, including tutorials, product showcases, educational content, and brand storytelling",
                  "High-impact YouTube Ads (TrueView, Bumper, In-Stream, and Display Ads) to expand reach and attract qualified viewers",
                  "Smart use of end screens, cards, and playlists to improve watch time, retention, and conversions",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View YouTube Marketing Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Pinterest <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Pinterest is more than a social network — it’s a powerful visual
                discovery platform where users actively search for inspiration
                and products. We help your brand tap into this intent-driven
                audience to increase visibility, drive traffic, and generate
                qualified leads. Our Pinterest marketing strategy includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Creation and optimization of Rich Pins and Idea Pins to enhance engagement",
                  "Pinterest SEO with keyword-optimized titles, descriptions, and board strategies",
                  "Smart pin scheduling and automation for consistent visibility",
                  "High-converting Pinterest Ads, including Promoted Pins, Shopping Ads, and Carousel formats",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Pinterest Marketing Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Pinterest}
                alt="pinterest"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Ppc}
                alt="ppc Services"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                PPC <span className="text-[#25baff]">Services</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Drive immediate traffic and high-converting leads with our
                performance-focused PPC campaigns. Our paid advertising
                specialists define clear objectives, analyze competitor
                strategies, and craft data-driven campaigns designed to maximize
                your return on ad spend and accelerate revenue growth. Our PPC
                strategy includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Strategic keyword research and competitive bidding for maximum visibility",
                  "High-impact ad creatives with compelling, conversion-focused copy",
                  "Advanced audience targeting based on behavior, demographics, and intent",
                  "Continuous optimization to improve click-through rates (CTR) and conversion performance",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View PPC Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Web Design{" "}
                <span className="text-[#25baff]">& Development </span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Your website is your digital storefront — and first impressions
                matter. We design and develop high-performing websites that not
                only look impressive but also engage visitors, build trust, and
                convert them into loyal customers. From visual appeal to
                seamless functionality, our approach ensures your website
                becomes a powerful business asset. Our websites are:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "SEO-optimized for maximum search visibility",
                  "Mobile-first and fully responsive across all devices",
                  "Conversion-focused with strategic layout and user journey planning",
                  "Brand-driven with modern, professional design aesthetics",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Web Development Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Web}
                alt="web"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Email}
                alt="email marketing"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Email <span className="text-[#25baff]">Marketing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Email marketing remains one of the most powerful and
                cost-effective channels for nurturing leads, increasing customer
                retention, and driving repeat sales. We create strategic,
                personalized email campaigns designed to engage your audience
                and deliver measurable results. Our email marketing strategy
                includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "Advanced audience segmentation based on user behavior and engagement patterns",
                  "Automated workflows triggered by actions such as sign-ups, abandoned carts, and purchases",
                  "Compelling, value-driven content crafted to encourage clicks and conversions",
                  "Continuous A/B testing of subject lines, CTAs, layouts, and messaging to optimize performance",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View Email Marketing Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                CRO <span className="text-[#25baff]">Services</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Conversion Rate Optimization (CRO) focuses on turning more of
                your existing traffic into customers. Instead of increasing ad
                spend, we optimize your website experience to maximize
                conversions, revenue, and overall marketing performance. Our CRO
                strategy includes:
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                {[
                  "In-depth A/B testing of headlines, visuals, CTAs, and layouts to identify what drives the highest conversions",
                  "Data-driven insights through heatmaps, session recordings, and user behavior analysis",
                  "Design and optimization of high-converting landing pages",
                  "Simplifying forms, checkout flows, and user journeys to eliminate friction and boost completion rates",
                ].map((text, index) => (
                  <div key={index} className="gsap-item flex items-start gap-3">
                    <FaCheckCircle className="text-[#a8d97c] mt-1" size={18} />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <button className="gsap-item bg-[#25baff] hover:bg-[#3db9f3] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                View CRO Services
              </button>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Cro}
                alt="SRO Services"
                 className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= raodmap ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-4">
              Your Roadmap to Smarter
              <span className="text-[#25baff]"> Digital Growth</span>
            </h2>
            <p className=" tracking-widest text-sm font-semibold text-gray-500 mb-3">
              WAt Digital Guider, we follow a streamlined six-step digital
              marketing process designed to deliver measurable results. Our
              data-driven and collaborative approach ensures every strategy we
              build increases visibility, strengthens engagement, and drives
              sustainable revenue growth. Here’s how we turn strategy into
              success:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Define Clear Objectives",
              "Build a Strategic Plan",
              "Optimize for Performance",
              "Select the Right Channels",
              "Monitor & Measure Results",
              "Scale for Sustainable Growth",
            ].map((text, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                shadow-lg shadow-[#25baff]/10
                transition-all duration-500
                hover:bg-[#25baff]
                hover:border-[#25baff]
                hover:shadow-2xl hover:shadow-[#25baff]/40
                hover:-translate-y-2"
              >
                <FaCheckCircle
                  className="text-[#25baff] text-2xl mt-1
                  group-hover:text-white transition-colors duration-300"
                />

                <p
                  className="text-[#020202] text-lg leading-relaxed
                group-hover:text-white transition-colors duration-300"
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =================  CTA ================= */}

      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-4">
              Why Choose Us as Your Digital
              <span className="text-[#25baff]"> Marketing Partner?</span>
            </h2>
            <p className=" tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Choosing the right digital marketing agency is key to driving
              business growth. We help you stand out, attract the right
              audience, and turn visitors into loyal customers—making your
              investment count.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
            >
              <MdOutlineSettingsSuggest className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Custom Strategies
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every business is different — and your marketing strategy should
                reflect that. We take the time to understand your goals,
                challenges, and target audience before crafting a personalized
                digital marketing plan built for measurable success. No generic
                templates — just data-driven strategies tailored to deliver real
                results for your brand.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
            >
              <GiHiveMind className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Data + Creativity
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We blend data-driven strategy with creative thinking to deliver
                powerful marketing results. By continuously optimizing
                performance and adding fresh, compelling ideas, we create
                campaigns that stand out and drive real conversions.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
            >
              <RiUserCommunityFill className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Transparent Communication
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Clear communication is at the core of everything we do. We
                provide honest updates, detailed performance reports, and
                actionable insights so you always understand how your marketing
                efforts are performing. With our collaborative approach, you
                stay informed, confident, and in control of your business
                growth.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
            >
              <GrServices className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Full-Service Digital Expertise
              </h3>

              <p className="text-gray-600 leading-relaxed">
                From SEO and PPC to social media and content marketing, we offer
                complete digital solutions under one roof. As a full-service
                marketing partner, we build integrated strategies that align
                every channel seamlessly. This unified approach expands your
                brand reach and ensures all platforms work together to deliver
                measurable growth and consistent results.
              </p>
            </div>
            {/* Card 5 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
            >
              <IoSettingsOutline className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Continuous Adaptation
              </h3>

              <p className="text-gray-600 leading-relaxed">
                The digital landscape evolves quickly — and so do we. Our work
                doesn’t stop after launching your strategy. We continuously
                monitor performance, analyze trends, and refine campaigns to
                seize new opportunities. This proactive optimization keeps your
                business ahead of the competition and ensures every marketing
                dollar delivers maximum impact.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
            >
              <BsGraphUpArrow className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Long-Term Growth
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We don’t just deliver services — we build lasting partnerships.
                Every strategy we create is designed with sustainable growth in
                mind. By staying proactive and continuously identifying new
                opportunities to scale, we help your business grow stronger
                today and remain competitive tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================  CTA ================= */}
      <section
        ref={addSectionRef}
        className="relative overflow-hidden py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
        {/* Animated Gradient Glow */}
        <div
          className="absolute inset-0 
   bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),
radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)]

    animate-pulseSlow"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#25baff]
 rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-3xl font-extrabold leading-tight max-w-4xl">
            Schedule Your Free Digital Strategy Session
          </h2>

          {/* BUTTON */}
          <button
            className="
    bg-[#25baff] text-[#020202]
hover:bg-[#a8d97c]

    px-6 py-3
    text-sm md:text-base
    font-semibold
    rounded-full
    shadow-md
    hover: cursor-pointer
    hover:shadow-lg
    transition-all duration-300
    whitespace-nowrap"
          >
            Contact Now
          </button>
        </div>
      </section>
      <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
            Frequently Asked
            <span className="text-[#25baff]"> Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="gsap-item bg-white border border-gray-200 rounded-2xl
          shadow-lg shadow-[#25baff]/20
          hover:shadow-2xl hover:shadow-[#25baff]/40
          hover:border-[#25baff]
          transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.35,
                        ease: "power2.inOut",
                      });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prevEl = faqRefs.current[activeFaq];
                        const prevContent =
                          prevEl.querySelector(".faq-content");

                        gsap.to(prevContent, {
                          height: 0,
                          opacity: 0,
                          duration: 0.35,
                          ease: "power2.inOut",
                        });
                      }

                      gsap.to(content, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                      });

                      setActiveFaq(index);
                    }
                  }}
                  className="w-full flex items-center justify-between
            px-6 py-5 text-left font-semibold text-[#020202]"
                >
                  <span
                    className={`${
                      activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
                    } transition-colors duration-300`}
                  >
                    {faq.question}
                  </span>

                  {activeFaq === index ? (
                    <FiMinus className="text-[#25baff] text-xl" />
                  ) : (
                    <FiPlus className="text-gray-600 text-xl" />
                  )}
                </button>

                {/* Answer */}
                <div className="faq-content px-6 overflow-hidden h-0 opacity-0">
                  <p className="pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingStrategy;
