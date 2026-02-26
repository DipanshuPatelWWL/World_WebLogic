import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import {
  FaSearch,
  FaBuilding,
  FaUserTie,
  FaDesktop,
  FaStar,
  FaChartLine,
  FaMapMarkedAlt,
  FaBullseye,
  FaDollarSign,
  FaLaptopCode,
  FaShieldAlt,
  FaFileAlt,
  FaMapMarkerAlt,
  FaCogs,
  FaLink,
  FaChartBar,
  FaSitemap,
  FaPenNib,
} from "react-icons/fa";

import Banner from "../../../assets/market/insuranceseo/banner.avif";
import Img from "../../../assets/market/insuranceseo/img.avif";
import Card1 from "../../../assets/market/insuranceseo/card1.avif";
import Card2 from "../../../assets/market/insuranceseo/card2.avif";
import Card3 from "../../../assets/market/insuranceseo/card3.avif";
import Card4 from "../../../assets/market/insuranceseo/card4.avif";
import Card5 from "../../../assets/market/insuranceseo/card5.avif";
import Card6 from "../../../assets/market/insuranceseo/card6.avif";

gsap.registerPlugin(ScrollTrigger);

const InsuranceSeo = () => {
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
      question: "Why isn’t my insurance website getting visitors?",
      answer:
        "It’s likely not ranking on Google! Poor SEO, slow speed, or missing local keywords can make your site invisible.",
    },
    {
      question:
        "Is “insurance” really one of the most expensive Google Ads keywords?",
      answer:
        "Yes — with average CPC around $55, organic SEO delivers far more sustainable traffic and lower cost per lead.",
    },
    {
      question: "Can SEO bring me real customers, not just freebie seekers?",
      answer:
        "Absolutely. High-intent keywords like 'auto insurance quote [city]' attract people ready to buy policies.",
    },
    {
      question: "What’s scarier—Google updates or insurance paperwork?",
      answer:
        "Google updates can hurt rankings temporarily, but a strong, E-E-A-T compliant site recovers faster and ranks longer.",
    },
    {
      question: "How can I beat big insurance companies in Google search?",
      answer:
        "Focus on local SEO, long-tail keywords, GBP optimization, and niche content — smaller agencies often win locally.",
    },
    {
      question: "Will blogging help me get more clients?",
      answer:
        "Yes — educational content builds trust, ranks for informational queries, and positions you as an expert (YMYL compliant).",
    },
    {
      question: "Is SEO better than paid ads for insurance agencies?",
      answer:
        "Long-term yes — SEO compounds over time with near-zero marginal cost, unlike PPC which stops when budget ends.",
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
          <p className="mt-6 text-lg text-gray-300">Insurance SEO</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section ref={whoRef} className="bg-[#f8fafc] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#020202] mb-5">
              What is
              <span className="text-[#25baff]"> Insurance SEO?</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base mb-4">
              Insurance SEO is a strategic digital marketing approach that helps
              insurance agencies improve their search engine visibility and
              attract high-intent clients actively looking for coverage
              solutions.
            </p>

            {/* Small Icon List */}
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <FiCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-gray-600 text-sm">
                  Targeted keyword optimization for insurance services
                </p>
              </li>

              <li className="flex items-start gap-2">
                <FiCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-gray-600 text-sm">
                  Website & on-page SEO improvements
                </p>
              </li>

              <li className="flex items-start gap-2">
                <FiCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-gray-600 text-sm">
                  Google Business Profile optimization
                </p>
              </li>

              <li className="flex items-start gap-2">
                <FiCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-gray-600 text-sm">
                  Authority link building strategy
                </p>
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed text-sm">
              A well-structured Insurance SEO strategy increases brand
              visibility, reduces acquisition costs, and drives consistent
              policy inquiries — helping your agency grow sustainably.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src={Img}
              alt="Insurance SEO Services"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
      {/* ================= CHALLENGES ================= */}
      <section className="bg-[#0f172a] py-28">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Key Challenges of
            <span className="text-[#25baff]">
              {" "}
              SEO in the Insurance Industry
            </span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-400 mb-3">
            Growth barriers insurance agencies face online:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearch,
                head: "Outranked by Competitors",
                text: "The insurance market is highly competitive. Big national brands dominate search results, making it difficult for smaller agencies and local brokers to gain visibility. Strategic insurance SEO helps you appear for high-intent local searches like 'best home insurance near me'.",
              },
              {
                icon: FaBuilding,
                head: "Low Website Traffic & Conversions",
                text: "Traffic alone isn’t enough — if your site lacks trust signals, clear CTAs, or fast load times, visitors leave without requesting quotes. Optimized UX and conversion-focused pages turn clicks into leads.",
              },
              {
                icon: FaUserTie,
                head: "Lower SERP Rankings",
                text: "Many insurance websites struggle to reach page one. With targeted keyword strategies, technical fixes, and E-E-A-T content, we help you climb rankings and capture more qualified clicks.",
              },
              {
                icon: FaDesktop,
                head: "Online Reputation Management",
                text: "Trust is everything in insurance. Positive Google reviews, professional responses to feedback, and authoritative content build credibility and improve local pack visibility.",
              },
              {
                icon: FaStar,
                head: "Expensive Paid Ads",
                text: "'Insurance' remains one of Google Ads’ most expensive keywords (CPC ~$50–$60+). SEO delivers long-term organic traffic at a fraction of the ongoing cost.",
              },
              {
                icon: FaChartLine,
                head: "Google Algorithm Changes",
                text: "Frequent updates can impact rankings — especially in YMYL (Your Money or Your Life) categories like insurance. Staying compliant with E-E-A-T and core web vitals keeps your site resilient.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#1e293b] border border-[#1e293b] rounded-2xl p-10 text-center backdrop-blur-lg shadow-lg shadow-black/30 transition-all duration-500 hover:-translate-y-4 hover:border-[#25baff] hover:shadow-[0_0_30px_rgba(37,186,255,0.4)]"
                >
                  <Icon className="text-4xl text-[#25baff] mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  <h3 className="font-extrabold text-xl mb-3 text-white transition-colors duration-300">
                    {item.head}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY ESSENTIAL ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Why is Insurance SEO Essential for Your
            <span className="text-[#25baff]"> Agency?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            In one of the most expensive PPC categories, strong organic
            visibility is the key to sustainable leads, lower acquisition costs,
            and long-term growth.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                head: "Higher Search Rankings",
                text: "Get on page one for policy, quote, and local agent searches — before competitors take the traffic.",
              },
              {
                icon: FaMapMarkedAlt,
                head: "Targeted Website Traffic",
                text: "Attract users actively searching for auto, home, life, health, or commercial coverage in your area.",
              },
              {
                icon: FaBullseye,
                head: "Stand Out in Competition",
                text: "Beat national carriers locally with geo-targeted SEO, strong GBP, and niche authority.",
              },
              {
                icon: FaDollarSign,
                head: "Build Trust and Credibility",
                text: "High rankings + expert content = perceived expertise in a highly trust-sensitive industry.",
              },
              {
                icon: FaLaptopCode,
                head: "Better Insurance Leads",
                text: "Convert visitors with optimized quote forms, fast UX, and YMYL-compliant educational content.",
              },
              {
                icon: FaShieldAlt,
                head: "Long-Term SEO Growth",
                text: "Organic traffic compounds over time — no recurring ad spend required once rankings are established.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon className="text-4xl text-[#25baff] mb-6 mx-auto group-hover:text-white transition-colors duration-300" />
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

      {/* ================= CONTACT CTA ================= */}
      <section
        ref={addSectionRef}
        className="relative py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#25baff] rounded-full opacity-40 animate-float"
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
            Talk To Our Insurance SEO Experts Now
          </h2>

          <NavLink to="/contact">
            <button className="bg-[#25baff] text-[#020202] px-8 py-4 rounded-full font-semibold hover:bg-[#a8d97c] transition shadow-lg">
              Contact Us
            </button>
          </NavLink>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#25baff]">
              Our Insurance SEO Services
            </h2>
            <p className="text-gray-500 mt-4 text-sm tracking-wide">
              Audit • Research • Optimize • Rank • Convert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: FaSearch,
                title: "SEO Audit",
                text: "Identify technical issues, content gaps, keyword opportunities, and compliance problems — just like reviewing a policy for missing coverage.",
              },
              {
                icon: FaFileAlt,
                title: "Insurance Keyword Research",
                text: "Target high-intent phrases like 'auto insurance quote near me', 'best life insurance [city]', and long-tail policy searches.",
              },
              {
                icon: FaCogs,
                title: "On-Page & Technical SEO",
                text: "Optimize titles, meta, headings, schema (reviews/policies), speed, mobile UX, and crawlability for better rankings.",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Local SEO & GBP Optimization",
                text: "Strengthen Google Business Profile, citations, and location pages to dominate 'near me' and map pack results.",
              },
              {
                icon: FaPenNib,
                title: "Content Marketing",
                text: "Create YMYL-compliant blogs, guides, comparison pages, and FAQs that educate prospects and build topical authority.",
              },
              {
                icon: FaLink,
                title: "Thematic Backlinks",
                text: "Secure high-authority links from finance blogs, insurance directories, and trusted industry sites to boost domain strength.",
              },
              {
                icon: FaShieldAlt,
                title: "Online Reputation Management",
                text: "Generate positive reviews, respond professionally, and manage feedback to enhance trust and local rankings.",
              },
              {
                icon: FaChartBar,
                title: "Voice Search & Performance Tracking",
                text: "Optimize for conversational queries and monitor rankings, traffic, leads, and ROI with transparent monthly reporting.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative border border-gray-200 rounded-2xl p-8 bg-white transition-all duration-500 shadow-md shadow-[#25baff]/10 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[#25baff]/20 -z-10"></div>
                  <div className="mb-6">
                    <Icon className="text-[#25baff] text-4xl transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#020202] mb-3 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INSURANCE TYPES ================= */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Built for Every Type of Insurance
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Tailored SEO strategies designed to protect and grow your
              insurance business in competitive digital markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-14">
            {[
              {
                title: "Auto Insurance",
                img: Card2,
                desc: "Capture drivers searching for quotes, coverage comparisons, and local agents.",
              },
              {
                title: "Home Insurance",
                img: Card4,
                desc: "Rank for homeowners, renters, and real estate-related insurance queries.",
              },
              {
                title: "Life Insurance",
                img: Card1,
                desc: "Build trust with educational content for term, whole, and universal life seekers.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl">
                  <div className="overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 gap-10 max-w-4xl">
              {[
                {
                  title: "Health Insurance",
                  img: Card3,
                  desc: "Target individuals, families, and small businesses during enrollment periods.",
                },
                {
                  title: "Commercial Insurance",
                  img: Card5,
                  desc: "Attract businesses looking for liability, property, workers' comp, and specialty coverage.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl">
                    <div className="overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMON CONCERNS ================= */}
      <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute top-20 left-[-150px] w-[450px] h-[450px] bg-[#25baff]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-[-150px] w-[450px] h-[450px] bg-[#25baff]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-black">Common Concerns About</span>{" "}
              <span className="text-[#25baff]">Insurance SEO</span>
            </h2>
            <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
              We understand the hesitation. Here’s how we address the most
              common questions insurance agencies have about SEO.
            </p>
            <div className="w-24 h-[3px] bg-[#25baff] mx-auto mt-6 rounded-full shadow-[0_0_20px_#25baff]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {[
              {
                title:
                  "We already get leads from paid ads — why invest in SEO?",
                desc: "Paid ads stop when the budget ends. SEO builds evergreen visibility and lowers your long-term cost per lead.",
              },
              {
                title: "SEO takes too long to show meaningful impact",
                desc: "While SEO builds gradually, most clients see ranking and traffic improvements within 3–6 months with consistent effort.",
              },
              {
                title: "We tried SEO before and it didn’t deliver",
                desc: "Generic SEO fails in YMYL industries. Our insurance-specific strategy follows E-E-A-T and targets real buyer intent.",
              },
              {
                title: "SEO is too expensive — will I see ROI?",
                desc: "Compared to $50–$60+ CPC ads, SEO delivers significantly better long-term ROI with transparent monthly reporting.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_15px_50px_rgba(37,186,255,0.15)] hover:border-[#25baff]/40"
              >
                <div className="w-3 h-3 bg-[#25baff] rounded-full mb-5 shadow-[0_0_15px_#25baff]"></div>
                <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-[#25baff] transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6 h-[2px] w-0 bg-[#25baff] transition-all duration-500 group-hover:w-20 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="group relative max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_15px_50px_rgba(37,186,255,0.2)] hover:border-[#25baff]/50">
              <div className="w-3 h-3 bg-[#25baff] rounded-full mb-5 shadow-[0_0_15px_#25baff]"></div>
              <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-[#25baff] transition duration-300">
                Our competitors are huge national brands — how can we compete?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Local + niche SEO lets smaller agencies dominate regional
                searches and specific policy types — even against national
                carriers.
              </p>
              <div className="mt-6 h-[2px] w-0 bg-[#25baff] transition-all duration-500 group-hover:w-24 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section className="relative py-16 px-4 sm:px-6 bg-gray-950 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#25baff]/20 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Insurance SEO</span>{" "}
              <span className="text-[#25baff]">Success Story</span>
            </h2>
            <div className="w-16 h-1 bg-[#25baff] mx-auto mt-4 rounded-full shadow-[0_0_20px_#25baff]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.5)]">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Client Overview
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Small independent insurance agency (5 agents) struggling
                  against larger carriers in a competitive local market.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Very low organic visibility</li>
                  <li>• Weak local SEO & GBP presence</li>
                  <li>• Outdated website with poor UX</li>
                  <li>• Minimal backlinks & authority</li>
                  <li>• Low organic lead generation</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-[#25baff]/30 blur-3xl rounded-2xl group-hover:blur-[80px] transition duration-500"></div>
              <img
                src={Card6}
                alt="Success handshake"
                className="relative rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.5)]">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Strategy Implemented
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Comprehensive technical & on-page SEO</li>
                  <li>• Local SEO + Google Business Profile optimization</li>
                  <li>• Review generation & reputation management</li>
                  <li>• YMYL-compliant content + backlink outreach</li>
                  <li>• Mobile-first redesign & speed optimization</li>
                </ul>
              </div>
            </div>

            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition duration-500 group-hover:shadow-[0_0_50px_rgba(37,186,255,0.6)]">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Results Achieved (6 months)
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• +215% increase in organic traffic</li>
                  <li>• 25 high-value keywords on page 1</li>
                  <li>• +180% GBP profile views</li>
                  <li>• +75% organic lead form submissions</li>
                  <li>• 40% reduction in cost per lead vs. paid ads</li>
                  <li>• 65% faster mobile page load speed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-20 left-[-150px] w-96 h-96 bg-[#25baff]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-[-150px] w-96 h-96 bg-[#25baff]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-black">Why Choose Us for Your</span>{" "}
              <span className="text-[#25baff]">Insurance SEO?</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Just as your clients rely on you to protect their future, your
              agency deserves a partner that protects and grows your online
              presence.
            </p>
            <div className="w-24 h-1 bg-[#25baff] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Insurance Industry Expertise",
                desc: "Deep understanding of YMYL requirements, local competition, policy-specific search behavior, and regulatory nuances.",
              },
              {
                title: "High-Intent Lead Focus",
                desc: "We target users who are actively shopping for quotes — not casual researchers.",
              },
              {
                title: "Affordable & Transparent Pricing",
                desc: "Custom plans with clear ROI tracking — no hidden fees or long lock-ins.",
              },
              {
                title: "Always Current & Compliant",
                desc: "We stay ahead of Google algorithm updates and E-E-A-T guidelines so your site remains strong.",
              },
              {
                title: "Long-Term Sustainable Growth",
                desc: "SEO that compounds — delivering consistent leads year after year without constant ad spend.",
              },
              {
                title: "Proven Results for Agencies",
                desc: "Real independent agencies see 100–300%+ organic traffic and lead growth within 6–12 months.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-[1.5px] bg-gradient-to-r from-transparent via-[#25baff]/30 to-transparent transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03]"
              >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-lg transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.35)] group-hover:border-[#25baff]/40">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25baff]/10 text-[#25baff] mb-6 transition-all duration-500 group-hover:bg-[#25baff] group-hover:text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-[#25baff] transition duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-6 h-[2px] w-0 bg-[#25baff] transition-all duration-500 group-hover:w-16 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
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
                className="gsap-item bg-white border border-gray-200 rounded-2xl shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300"
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

export default InsuranceSeo;
