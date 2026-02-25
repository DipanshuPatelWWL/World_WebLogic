import { useLayoutEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";

import {
  FaFileAlt,
  FaCode,
  FaBolt,
  FaPenNib,
  FaLink,
  FaChartBar,
} from "react-icons/fa";

import {
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
  FaStarHalfAlt,
  FaBullhorn,
} from "react-icons/fa";

import {
  FaBullseye,
  FaShoppingCart,
  FaUsers,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

import { FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

import { FaTachometerAlt, FaSyncAlt } from "react-icons/fa";

import Banner from "../../../assets/market/automotiveSeo/banner.avif";
import Img from "../../../assets/market/automotiveSeo/img.avif";
import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const AutomotiveSeo = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const faqRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      if (whoRef.current) {
        gsap.from(whoRef.current.children, {
          scrollTrigger: {
            trigger: whoRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 60,
          stagger: 0.25,
          duration: 1,
          ease: "power3.out",
        });
      }
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          scale: 0.92,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
        });
      });

      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        items.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "How long does it take to see results from automotive SEO?",
      answer:
        "Automotive SEO typically takes time to show noticeable results. In most cases, you may begin to see improvements in rankings and traffic within a few months. However, consistent growth in leads and visibility usually requires ongoing optimization and strategy refinement.",
    },
    {
      question: "Can automotive SEO help my local car dealership?",
      answer:
        "Yes, automotive SEO is especially beneficial for local dealerships. By optimizing your website and Google Business Profile for location-based searches, your dealership can appear in relevant local results and attract nearby customers actively searching for vehicles or services.",
    },
    {
      question:
        "What's the difference between paid ads and organic SEO for automotive businesses?",
      answer:
        "Paid ads provide immediate visibility but stop generating traffic once the campaign ends. Organic SEO focuses on improving your website’s natural search rankings, helping you gain long-term visibility and sustainable traffic without continuous ad spend.",
    },
    {
      question:
        "How often should I update my automotive website's content for SEO?",
      answer:
        "Updating your website regularly helps maintain strong search visibility. Adding fresh blog posts, updating service pages, and keeping inventory listings current ensures your content remains relevant and valuable to both users and search engines.",
    },
    {
      question: "Can automotive SEO help with selling car parts online?",
      answer:
        "Yes, SEO can improve the visibility of your product pages and category listings. By optimizing product descriptions, keywords, and site structure, automotive SEO helps drive targeted traffic to your online car parts store.",
    },
    {
      question: "How does mobile optimization affect my automotive SEO?",
      answer:
        "Mobile optimization plays a crucial role in SEO because many users search for automotive services on smartphones. A fast, responsive, and mobile-friendly website improves user experience and supports better search rankings.",
    },
    {
      question: "What role do customer reviews play in automotive SEO?",
      answer:
        "Customer reviews help build trust and influence local search visibility. Positive reviews can improve your rankings in local results and encourage more users to choose your business over competitors.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-black">
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
          <h1 className="text-5xl md:text-6xl font-extrabold">Market</h1>
          <p className="mt-6 text-lg text-gray-300">Automotive SEO</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section ref={whoRef} className="bg-[#f5f5f5] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE / VIDEO THUMB */}
          <div className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src={Img}
              alt="Automotive SEO Guide"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6 leading-snug">
              Drive More Leads with Powerful
              <span className="text-[#25baff]"> Automotive SEO Strategies</span>
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Automotive SEO helps car dealerships, repair shops, and auto parts
              businesses rank higher on search engines and attract high-intent
              customers. By optimizing your website for industry-specific
              keywords, local searches, and technical performance, you increase
              online visibility, build trust, and convert more visitors into
              qualified leads. A strong SEO strategy ensures your automotive
              business stays ahead of competitors and captures valuable traffic
              consistently.
            </p>
          </div>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Pain Points of
            <span className="text-[#25baff]"> Automotive Businesses</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Key challenges holding your growth back:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearch,
                head: "Low Visibility in Local Searches",
                text: "Many automotive businesses struggle to rank in local search results, making them invisible to nearby customers. Without proper local SEO, competitors capture high-intent traffic and valuable leads.",
              },
              {
                icon: FaBuilding,
                head: "Competition with Established Brands",
                text: "Large automotive brands dominate online space with bigger marketing budgets and strong SEO strategies. Smaller businesses often find it difficult to compete and gain consistent market share.",
              },
              {
                icon: FaMapMarkerAlt,
                head: "Difficulty Attracting Local Customers",
                text: "Without a focused local strategy, businesses fail to reach ready-to-buy customers nearby. Poor local presence directly impacts foot traffic, calls, and conversions.",
              },
              {
                icon: FaTachometerAlt,
                head: "Poor Website Performance",
                text: "Slow-loading, outdated, or non-mobile-friendly websites reduce engagement and trust. Weak performance negatively affects both user experience and SEO rankings.",
              },
              {
                icon: FaStarHalfAlt,
                head: "Inconsistent Customer Reviews",
                text: "A lack of positive reviews or unmanaged negative feedback harms credibility. Customers rely heavily on reviews, and poor reputation management drives them to competitors.",
              },
              {
                icon: FaBullhorn,
                head: "Limited Digital Advertising Knowledge",
                text: "Many automotive businesses waste budget on poorly managed Google or social ads. Without proper strategy and tracking, campaigns fail to deliver real ROI.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
            shadow-lg shadow-[#25baff]/10
            transition-all duration-500
            hover:bg-[#25baff]
            hover:-translate-y-3
            hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto
              group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* contact us  */}

      <section
        ref={addSectionRef}
        className="relative py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
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
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
            Talk To Our Experts Now
          </h2>

          <NavLink to="/contact">
            <button className="bg-[#25baff] cursor-pointer text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
              Contact Now
            </button>
          </NavLink>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Automotive SEO for Your
            <span className="text-[#25baff]"> Business</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether searching for a dealership, auto parts, or repair services,
            appearing prominently in search results is crucial for driving
            traffic, leads, and sales.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                head: "Increased Visibility",
                text: "SEO helps your automotive business rank higher for targeted keywords, ensuring customers find you before competitors in local and national searches.",
              },
              {
                icon: FaBullseye,
                head: "Attracting Qualified Leads",
                text: "By targeting high-intent keywords, automotive SEO brings visitors actively searching for your services—leading to better conversions.",
              },
              {
                icon: FaMapMarkerAlt,
                head: "Driving Local Customers",
                text: "Local SEO ensures your business appears in map listings and 'near me' searches, increasing calls, bookings, and showroom visits.",
              },
              {
                icon: FaShieldAlt,
                head: "Building Trust & Credibility",
                text: "Ranking on the first page builds authority. Strong reviews and optimized content strengthen your brand reputation.",
              },
              {
                icon: FaShoppingCart,
                head: "Supporting Online Car Sales",
                text: "SEO drives traffic to inventory pages and auto parts listings, improving online sales and eCommerce performance.",
              },
              {
                icon: FaUsers,
                head: "Customer Engagement & Retention",
                text: "Publishing valuable blogs, FAQs, and service guides keeps customers engaged and encourages repeat visits.",
              },
              {
                icon: FaDollarSign,
                head: "Measurable ROI",
                text: "Track traffic, leads, and conversions easily. SEO provides long-term measurable growth compared to traditional ads.",
              },
              {
                icon: FaSyncAlt,
                head: "Adapting to Consumer Trends",
                text: "Stay ahead of mobile-first browsing and voice search trends with optimized, future-ready SEO strategies.",
              },
              {
                icon: FaClock,
                head: "Long-Term Benefits",
                text: "SEO delivers sustainable results. Consistent optimization keeps your website ranking and generating leads for years.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
            shadow-lg shadow-[#25baff]/10
            transition-all duration-500
            hover:bg-[#25baff]
            hover:-translate-y-3
            hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto
              group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#0f172a] py-32 overflow-hidden">
        {/* Glow Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#25baff]/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Break Down of the Core
              <span className="text-[#25baff]">
                {" "}
                Automotive SEO Services Offered
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#25baff] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Automotive keyword research & strategy",
              "Targeting automotive-specific search terms",
              "Competitor analysis to identify gaps",
              "On-Page optimization",
              "Creating optimized automotive landing pages",
              "Technical SEO enhancements",
              "Blog creation on automotive trends",
              "Guides, whitepapers & videos for informational searches",
              "Optimizing for 'near me' searches",
              "Managing Google Business Profile",
              "Securing backlinks from automotive publications",
              "Analytics & Reporting",
              "Monthly performance tracking",
              "Real-time insights into traffic & ROI",
              "Car dealer SEO for local dealerships",
              "E-commerce SEO for car parts stores",
              "National SEO campaigns",
              "Mobile SEO optimization",
            ].map((item, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/5 border border-white/10
          rounded-2xl p-6 flex items-start gap-4
          transition-all duration-500
          hover:-translate-y-3
          hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)]
          hover:border-[#25baff]"
              >
                <FaCheckCircle className="text-[#25baff] mt-1 text-lg flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#25baff]">
              Our Approach to Automotive SEO
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: FaSearch,
                title: "Keyword Research",
                text: "We conduct in-depth research to identify high-intent automotive keywords aligned with customer searches, ensuring your business ranks for terms that convert.",
              },
              {
                icon: FaFileAlt,
                title: "On-Page Optimization",
                text: "We optimize meta tags, titles, headings, and content structure to ensure alignment with search algorithms and improved user engagement.",
              },
              {
                icon: FaCogs,
                title: "Technical SEO",
                text: "From improving site speed to fixing backend issues, we ensure your website is crawlable, mobile-friendly, and performance-optimized.",
              },
              {
                icon: FaCode,
                title: "Schema Markup",
                text: "We implement structured data to enhance SERP visibility, improve click-through rates, and help search engines understand your services better.",
              },
              {
                icon: FaBolt,
                title: "Fast Loading Pages",
                text: "Using caching, compression, and code optimization, we create a seamless user experience that reduces bounce rates and boosts rankings.",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Local SEO Focus",
                text: "We optimize your Google Business Profile, location pages, and local search visibility to drive more calls and foot traffic.",
              },
              {
                icon: FaPenNib,
                title: "Content Marketing",
                text: "We develop engaging blogs, service pages, and automotive guides to answer customer queries and strengthen topical authority.",
              },
              {
                icon: FaLink,
                title: "Link Building",
                text: "We secure high-quality backlinks from relevant automotive platforms and directories to increase domain authority.",
              },
              {
                icon: FaChartBar,
                title: "Analytics & Reporting",
                text: "We provide detailed performance tracking, including traffic insights, keyword rankings, and measurable ROI improvements.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group border border-gray-200 rounded-2xl p-8
            transition-all duration-500
            hover:bg-[#25baff]
            hover:-translate-y-2
            hover:shadow-xl hover:shadow-[#25baff]/40"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className="text-[#25baff] text-4xl transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#020202] mb-3 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-5 sm:py-10 lg:py-12 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl font-extrabold text-[#020202] mb-3 p-8">
              Affordable
              <span className="text-[#25baff]"> SEO Plans</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
            {/* BASIC */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#020202] mt-6">BASIC</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-gray-500 pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-green-600">500</span>
                  <p className="italic text-sm">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">30 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">40 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✕</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl px-8 hover:bg-[#25baff] hover:text-white transition">
                  START TODAY
                </button>
              </div>
            </div>

            {/* SILVER */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#020202] mt-6">SILVER</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-gray-500 pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-gray-700">700</span>
                  <p className="italic text-sm">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">40 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">60 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✕</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl px-8 hover:bg-[#25baff] hover:text-white transition">
                  START TODAY
                </button>
              </div>
            </div>

            {/* GOLD (POPULAR) */}
            <div className="border-4 border-[#25baff] rounded-xl relative">
              <div className="rounded-t-xl overflow-hidden">
                <div className="bg-[#25baff] py-4 text-center relative">
                  <h2 className="text-2xl font-bold text-white tracking-wide">
                    GOLD
                  </h2>

                  {/* POPULAR Ribbon */}
                  <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
                    <div className="absolute top-5 right-[-35px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-40 text-center shadow-md">
                      POPULAR
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-gray-500 pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-orange-500">
                    1000
                  </span>
                  <p className="italic text-sm">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">50 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">100 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg mt-8 mb-8 p-2 rounded-2xl px-8 bg-[#25baff] text-white hover:bg-white hover:text-black border border-[#25baff] transition">
                  START TODAY
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#020202] mt-6">
                PREMIUM
              </h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-gray-500 pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-indigo-500">
                    1800
                  </span>
                  <p className="italic text-sm">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">100 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">200 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl px-8 hover:bg-[#25baff] hover:text-white transition">
                  START TODAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
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
                          duration: 0.3,
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
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#020202]"
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
                    <FiPlus className="text-gray-500 text-xl" />
                  )}
                </button>

                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
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

export default AutomotiveSeo;
