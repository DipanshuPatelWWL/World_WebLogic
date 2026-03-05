import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";

import { FaSitemap, FaPenNib, FaLink, FaChartBar } from "react-icons/fa";

import {
  FaSearch,
  FaBuilding,
  FaUserTie,
  FaDesktop,
  FaStar,
} from "react-icons/fa";

import { FaFileAlt } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";

import {
  FaChartLine,
  FaMapMarkedAlt,
  FaBullseye,
  FaDollarSign,
  FaLaptopCode,
} from "react-icons/fa";

import { FaCogs, FaShieldAlt } from "react-icons/fa";

import Banner from "../../../assets/market/constructionSeo/banner.avif";
import Img from "../../../assets/market/constructionSeo/img.jpg";
import Card1 from "../../../assets/market/constructionSeo/card1.avif";
import Card2 from "../../../assets/market/constructionSeo/card2.jpg";
import Card3 from "../../../assets/market/constructionSeo/card3.avif";
import Card4 from "../../../assets/market/constructionSeo/card4.jpg";
import Card5 from "../../../assets/market/constructionSeo/card5.avif";
import Card6 from "../../../assets/market/constructionSeo/card6.jpg";

import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const ConstructionSeo = () => {
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
      question: "How long does it take to see results from construction SEO?",
      answer:
        "Construction SEO is a long-term growth strategy. While minor ranking improvements can appear within the first few months, consistent increases in organic traffic, leads, and visibility typically develop over time with ongoing optimization and content refinement.",
    },
    {
      question:
        "Can SEO help my local construction company attract more clients?",
      answer:
        "Absolutely. Local SEO helps your construction business appear in location-based searches, including Google Maps and nearby service queries. This increases visibility among homeowners and commercial clients actively looking for construction services in your area.",
    },
    {
      question:
        "What is the difference between paid advertising and organic SEO for construction businesses?",
      answer:
        "Paid ads generate immediate traffic but stop delivering results once your budget runs out. Organic SEO focuses on improving your website’s natural search rankings, creating long-term visibility and sustainable lead generation without ongoing ad spend.",
    },
    {
      question:
        "How often should I update my construction website for better SEO performance?",
      answer:
        "Regular updates are essential. Publishing project case studies, adding service pages, updating completed projects, and posting informative blog content keeps your website relevant and helps search engines recognize your authority in the construction industry.",
    },
    {
      question: "Can SEO help generate commercial construction leads?",
      answer:
        "Yes. By targeting high-intent commercial keywords and optimizing for industry-specific searches, SEO can position your company in front of decision-makers looking for contractors for large-scale or specialized projects.",
    },
    {
      question: "Why is mobile optimization important for construction SEO?",
      answer:
        "Many potential clients search for contractors using mobile devices. A fast, responsive, and mobile-friendly website improves user experience, reduces bounce rates, and supports higher rankings in search results.",
    },
    {
      question: "How do customer reviews impact construction SEO?",
      answer:
        "Customer reviews build credibility and improve local search visibility. Positive reviews on platforms like Google enhance trust, influence buyer decisions, and help your company rank higher in local search results.",
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
          <p className="mt-6 text-lg text-gray-300">Construction SEO</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section ref={whoRef} className="bg-[#f5f5f5] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <div className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src={Img}
              alt="Construction SEO"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6 leading-snug">
              Understanding
              <span className="text-[#25baff]"> Construction SEO</span>
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Construction SEO is a strategic approach to improving your
              construction company’s visibility in search engines. It focuses on
              optimizing both on-site elements and off-site factors such as
              website structure, relevant content, multimedia, Google Business
              Profile listings, customer feedback, and high-quality backlinks
              from trusted sources.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Our specialized Construction SEO services are designed to position
              your business as a reliable and authoritative name in the
              industry. Whether you operate as a local contractor, remodeling
              expert, residential builder, or large-scale commercial
              construction company, our customized strategies help you achieve
              higher rankings and generate consistent, high-quality leads within
              your target market.
            </p>
          </div>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-[#0f172a] py-28">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Key Challenges of
            <span className="text-[#25baff]">
              {" "}
              SEO in the Construction Industry
            </span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-400 mb-3">
            Growth barriers construction companies face online:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearch,
                head: "Contractors’ Visibility on SERPs",
                text: "Most construction companies rely heavily on word-of-mouth referrals. Without an effective SEO strategy, their websites struggle to appear on search engine results pages. Strategic optimization improves rankings, making it easier for potential clients to discover and choose your services over competitors.",
              },
              {
                icon: FaBuilding,
                head: "Competing Against Large Builders",
                text: "Established construction firms often dominate search rankings with strong authority and bigger marketing budgets. By focusing on geo-targeted and long-tail keywords, smaller contractors can attract highly relevant leads and compete more effectively.",
              },
              {
                icon: FaUserTie,
                head: "Consistent Lead Generation Issues",
                text: "Having a website alone does not guarantee steady inquiries. Weak local SEO, missing service pages, and lack of optimized project showcases can limit lead flow. A structured SEO plan increases visibility and drives continuous business growth.",
              },
              {
                icon: FaDesktop,
                head: "Slow or Non-Optimized Website",
                text: "A sluggish, outdated, or non-responsive website damages user experience and trust. Poor technical performance discourages visitors, reduces engagement, and makes it harder to convert traffic into qualified construction leads.",
              },
              {
                icon: FaStar,
                head: "Online Reputation Challenges",
                text: "A contractor’s reputation significantly influences hiring decisions. Limited positive reviews or unmanaged negative feedback can reduce credibility. Strong reputation management helps build trust and position your brand as an industry leader.",
              },
              {
                icon: FaChartLine,
                head: "Strategic SEO Gaps in Construction",
                text: "Many contractors hesitate to invest in digital marketing due to limited knowledge or unclear ROI expectations. This creates missed opportunities, allowing competitors to gain stronger visibility, attract more leads, and dominate local search rankings.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-[#1e293b] border border-[#1e293b] rounded-2xl p-10 text-center
            backdrop-blur-lg
            shadow-lg shadow-black/30
            transition-all duration-500
            hover:-translate-y-4
            hover:border-[#25baff]
            hover:shadow-[0_0_30px_rgba(37,186,255,0.4)]"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto
              transition-all duration-300
              group-hover:scale-110 group-hover:text-white"
                  />

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

      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Why is Construction SEO Essential for Your
            <span className="text-[#25baff]"> Company?</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Construction businesses need strong online visibility to attract
            high-value projects. Strategic SEO helps contractors rank locally,
            generate qualified leads, and build long-term brand credibility.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                head: "Enhancing Online Visibility",
                text: "Higher search rankings increase organic traffic and ensure your construction company appears for high-intent keywords like 'construction services', 'home renovation', and 'commercial builders', helping you attract serious project inquiries.",
              },
              {
                icon: FaMapMarkedAlt,
                head: "Higher Local 3-Pack Ranking",
                text: "Optimizing your Google Business Profile and location-based keywords helps your company appear in the local 3-pack results when customers search for 'contractors near me' or specific construction services in your area.",
              },
              {
                icon: FaBullseye,
                head: "Converting Construction Inquiries",
                text: "SEO attracts potential clients actively searching for construction solutions. With optimized landing pages and strong calls-to-action, inquiries turn into qualified leads and profitable projects.",
              },
              {
                icon: FaDollarSign,
                head: "Cost-Effective SEO for Builders",
                text: "Unlike paid ads, SEO provides long-term results. A well-optimized construction website continuously generates organic leads without ongoing high advertising costs.",
              },
              {
                icon: FaLaptopCode,
                head: "Optimized UX for Builders",
                text: "A fast, mobile-friendly, and easy-to-navigate website improves user experience. SEO ensures your construction website loads quickly, showcases projects clearly, and encourages client engagement.",
              },
              {
                icon: FaShieldAlt,
                head: "Building Contractors Credibility",
                text: "Ranking on the first page builds authority and trust. SEO strengthens your online reputation through reviews, quality content, and strong local signals that position your company as an industry leader.",
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
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#25baff]">
              Our Construction SEO Services
            </h2>
            <p className="text-gray-500 mt-4 text-sm tracking-wide">
              Plan • Build • Optimize • Grow
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: FaSearch,
                title: "Keyword Research",
                text: "We identify high-intent construction keywords through advanced data analysis, search trends, and competitor insights to ensure your business ranks for terms that drive qualified leads.",
              },
              {
                icon: FaFileAlt,
                title: "On-Page SEO",
                text: "Our experts optimize titles, meta descriptions, headings, internal links, and content structure to align with search algorithms and enhance user engagement.",
              },
              {
                icon: FaCogs,
                title: "Technical SEO",
                text: "We improve your website’s technical foundation by optimizing site speed, fixing crawl issues, enhancing mobile responsiveness, and implementing structured data.",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Local SEO",
                text: "From Google Business Profile optimization to geo-targeted keywords and NAP consistency, we strengthen your local visibility and map rankings.",
              },
              {
                icon: FaSitemap,
                title: "Franchise SEO",
                text: "We implement multi-location SEO strategies, optimizing individual landing pages and local signals to help each branch rank independently and generate local leads.",
              },
              {
                icon: FaPenNib,
                title: "Content Marketing",
                text: "We create optimized blogs, service pages, guides, and industry resources that educate prospects, increase authority, and drive organic traffic growth.",
              },
              {
                icon: FaLink,
                title: "Link Building",
                text: "Through strategic outreach and industry partnerships, we secure high-quality backlinks that strengthen domain authority and improve search rankings.",
              },
              {
                icon: FaChartBar,
                title: "Analysis & Performance Tracking",
                text: "We track keyword rankings, traffic metrics, and conversions to refine strategies continuously and ensure measurable ROI growth.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative border border-gray-200 rounded-2xl p-8 bg-white
            transition-all duration-500
            shadow-md shadow-[#25baff]/10
            hover:bg-[#25baff]
            hover:-translate-y-3
            hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  {/* Extra glow layer */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-[#25baff]/20 -z-10"></div>

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

      {/* Construction SEO Section */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Soft Glow Background Orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Built for Every Sector in Construction
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Precision-driven SEO strategies engineered to elevate construction
              brands in competitive digital markets.
            </p>
          </div>

          {/* Top 3 Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            {[
              {
                title: "General Contracting Firms",
                img: Card1,
                desc: "Strengthen your digital presence and secure consistent, high-value project leads.",
              },
              {
                title: "Residential Builders",
                img: Card2,
                desc: "Capture homebuyer search traffic and grow local market authority.",
              },
              {
                title: "Renovation Specialists",
                img: Card3,
                desc: "Turn remodeling searches into steady streams of inbound inquiries.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden
          transition-all duration-500 hover:-translate-y-4 hover:scale-105"
              >
                {/* Glow Border */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 
          group-hover:opacity-100 blur-xl transition duration-500"
                ></div>

                {/* Glass Card */}
                <div
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl overflow-hidden shadow-xl"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
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

          {/* Bottom 2 Centered Cards */}
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 gap-10 max-w-4xl">
              {[
                {
                  title: "Commercial Construction Companies",
                  img: Card4,
                  desc: "Outperform competitors in large-scale B2B and industrial construction markets.",
                },
                {
                  title: "Specialty Trade Contractors",
                  img: Card5,
                  desc: "Dominate niche services with hyper-focused local SEO campaigns.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden
            transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                >
                  {/* Glow Border */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 
            group-hover:opacity-100 blur-xl transition duration-500"
                  ></div>

                  <div
                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl overflow-hidden shadow-xl"
                  >
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

      {/* Major Concerns Section - Aesthetic Upgrade */}
      <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-20 left-[-150px] w-[450px] h-[450px] bg-[#25baff]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-[-150px] w-[450px] h-[450px] bg-[#25baff]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-black">Common Concerns About</span>{" "}
              <span className="text-[#25baff]">Construction SEO</span>
            </h2>
            <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
              We understand the hesitation. Here’s how we address the most
              common questions construction businesses have about SEO.
            </p>
            <div className="w-24 h-[3px] bg-[#25baff] mx-auto mt-6 rounded-full shadow-[0_0_20px_#25baff]"></div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {[
              {
                title: "SEO feels too expensive for our construction business",
                desc: "Our approach focuses on long-term return on investment. Instead of short-term tactics, we build sustainable search visibility that consistently generates high-value leads.",
              },
              {
                title: "SEO takes too long to show meaningful impact",
                desc: "While SEO builds gradually, our structured strategy delivers steady ranking improvements and measurable traffic growth within the first few months.",
              },
              {
                title: "We tried SEO before and it didn’t deliver",
                desc: "Generic SEO fails in specialized industries. Our construction-focused optimization targets industry keywords, local markets, and high-intent project searches.",
              },
              {
                title: "We don’t have time to manage marketing",
                desc: "From audits and content creation to performance tracking, our team handles everything — so you can focus on running projects and managing operations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 
          border border-gray-200 shadow-sm
          transition-all duration-500
          hover:-translate-y-4 hover:shadow-[0_15px_50px_rgba(37,186,255,0.15)]
          hover:border-[#25baff]/40"
              >
                {/* Accent Dot */}
                <div className="w-3 h-3 bg-[#25baff] rounded-full mb-5 shadow-[0_0_15px_#25baff]"></div>

                <h3
                  className="text-lg font-semibold text-black mb-4 
          group-hover:text-[#25baff] transition duration-300"
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Glow Line */}
                <div
                  className="mt-6 h-[2px] w-0 bg-[#25baff] 
          transition-all duration-500 group-hover:w-20 rounded-full"
                ></div>
              </div>
            ))}
          </div>

          {/* Center Card */}
          <div className="flex justify-center">
            <div
              className="group relative max-w-2xl w-full bg-white/80 backdrop-blur-xl 
        rounded-3xl p-8 border border-gray-200 shadow-sm
        transition-all duration-500
        hover:-translate-y-4 hover:shadow-[0_15px_50px_rgba(37,186,255,0.2)]
        hover:border-[#25baff]/50"
            >
              <div className="w-3 h-3 bg-[#25baff] rounded-full mb-5 shadow-[0_0_15px_#25baff]"></div>

              <h3
                className="text-lg font-semibold text-black mb-4 
        group-hover:text-[#25baff] transition duration-300"
              >
                How can we be sure SEO will work for our company?
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                We rely on data-driven strategies and transparent reporting.
                You’ll receive detailed insights on rankings, traffic growth,
                and lead performance — giving you complete visibility into your
                ROI.
              </p>

              <div
                className="mt-6 h-[2px] w-0 bg-[#25baff] 
        transition-all duration-500 group-hover:w-24 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Glowy Case Study */}
      <section className="relative py-16 px-4 sm:px-6 bg-gray-950 overflow-hidden">
        {/* Animated Glow Background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#25baff]/20 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Construction SEO</span>{" "}
              <span className="text-[#25baff]">Success Story</span>
            </h2>
            <div className="w-16 h-1 bg-[#25baff] mx-auto mt-4 rounded-full shadow-[0_0_20px_#25baff]"></div>
          </div>

          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            {/* Overview Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
              <div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
        transition duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.5)]"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Client Overview
                </h3>

                <p className="text-sm text-gray-300 mb-4">
                  <strong className="text-[#25baff]">
                    Bright Foundation Builders
                  </strong>{" "}
                  – Texas-based residential & commercial construction company.
                </p>

                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Low organic visibility</li>
                  <li>• Weak local search presence</li>
                  <li>• Irregular project inquiries</li>
                  <li>• Outdated website performance</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#25baff]/30 blur-3xl rounded-2xl group-hover:blur-[80px] transition duration-500"></div>
              <img
                src={Card6}
                alt="Handshake"
                className="relative rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Strategy + Results Compact Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Strategy Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
              <div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
        transition duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.5)]"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Strategy Implemented
                </h3>

                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Technical SEO & speed optimization</li>
                  <li>• Geo-targeted keyword strategy</li>
                  <li>• Google Business Profile enhancement</li>
                  <li>• Content marketing & backlink outreach</li>
                  <li>• Conversion rate optimization (CRO)</li>
                </ul>
              </div>
            </div>

            {/* Results Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
              <div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
        transition duration-500 group-hover:shadow-[0_0_50px_rgba(37,186,255,0.6)]"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Results Achieved
                </h3>

                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• +68% increase in organic traffic</li>
                  <li>• +52% rise in qualified leads</li>
                  <li>• Top 3 rankings for high-intent keywords</li>
                  <li>• Reduced paid ad dependency by 40%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
        {/* Soft Glow Background */}
        <div className="absolute top-20 left-[-150px] w-96 h-96 bg-[#25baff]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-[-150px] w-96 h-96 bg-[#25baff]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-black">Why Choose Us for Your</span>{" "}
              <span className="text-[#25baff]">Construction SEO?</span>
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Boost your online reach, attract high-value projects, and turn
              visibility into measurable growth.
            </p>

            <div className="w-24 h-1 bg-[#25baff] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Strategic Client Approach",
                desc: "We analyze your construction niche, service zones, and competitors to build a fully customized SEO growth roadmap.",
              },
              {
                title: "Industry-Specific Optimization",
                desc: "Our SEO systems are designed exclusively for construction companies — ensuring better keyword targeting and qualified leads.",
              },
              {
                title: "Certified SEO Experts",
                desc: "A skilled team combining technical SEO, local search dominance, and conversion-focused content marketing.",
              },
              {
                title: "Transparent Reporting",
                desc: "Clear monthly reports, ranking improvements, traffic insights, and measurable ROI tracking.",
              },
              {
                title: "Local & Commercial Growth",
                desc: "Whether targeting residential clients or large-scale commercial bids, we build scalable search visibility.",
              },
              {
                title: "Performance-Driven Results",
                desc: "Data-backed strategies that increase traffic quality, boost inquiries, and strengthen brand credibility.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-[1.5px] 
          bg-gradient-to-r from-transparent via-[#25baff]/30 to-transparent
          transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03]"
              >
                {/* Card */}
                <div
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 
            border border-gray-200 shadow-lg
            transition-all duration-500
            group-hover:shadow-[0_0_40px_rgba(37,186,255,0.35)]
            group-hover:border-[#25baff]/40"
                >
                  {/* Icon Circle */}
                  <div
                    className="w-14 h-14 flex items-center justify-center 
            rounded-full bg-[#25baff]/10 text-[#25baff] mb-6
            transition-all duration-500
            group-hover:bg-[#25baff] group-hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v8m4-4H8" />
                    </svg>
                  </div>

                  <h3
                    className="text-xl font-semibold text-black mb-4 
            group-hover:text-[#25baff] transition duration-300"
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Glow Line */}
                  <div
                    className="mt-6 h-[2px] w-0 bg-[#25baff] 
            transition-all duration-500 group-hover:w-16 rounded-full"
                  ></div>
                </div>
              </div>
            ))}
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

export default ConstructionSeo;
