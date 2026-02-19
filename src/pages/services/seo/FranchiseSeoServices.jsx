import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaSearchengin } from "react-icons/fa6";
import { HiLinkSlash } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";
import { RiSeoFill } from "react-icons/ri";
import { IoIosCodeWorking } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { FaMapLocation } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import { BiBookContent } from "react-icons/bi";
import { CiShop } from "react-icons/ci";

import Banner from "../../../assets/seo/banner.jpg";
import Img1 from "../../../assets/services/franchiseSeo/img1.avif";
import Img2 from "../../../assets/services/franchiseSeo/img2.avif";
import Img3 from "../../../assets/services/franchiseSeo/img3.avif";
import Img4 from "../../../assets/services/franchiseSeo/img4.avif";
import Img5 from "../../../assets/services/franchiseSeo/img5.avif";
import Img6 from "../../../assets/services/franchiseSeo/img6.avif";
import Img7 from "../../../assets/services/franchiseSeo/img7.avif";

gsap.registerPlugin(ScrollTrigger);

const FranchisSeoServices = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);
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
      question:
        "What is the best SEO structure for a multi-location franchise website?",
      answer:
        "A subfolder structure (e.g., /city-name/) with dedicated, location-specific landing pages is generally the most SEO-friendly approach, as it consolidates domain authority while allowing strong local optimization.",
    },
    {
      question: "Should franchise locations have separate schema markup?",
      answer:
        "Yes, each franchise location should have its own LocalBusiness schema markup to help search engines clearly understand location details and improve local search visibility.",
    },
    {
      question:
        "What is the right method to manage crawl budgets for large franchise websites?",
      answer:
        "Optimizing internal linking, removing duplicate pages, fixing redirects, and maintaining a clean XML sitemap helps search engines crawl your most important pages efficiently.",
    },
    {
      question:
        "How can I handle franchise location redirects without harming SEO?",
      answer:
        "Use 301 redirects strategically when moving or consolidating pages to preserve link equity and ensure users and search engines are directed to the correct location pages.",
    },
    {
      question:
        "How can I prevent spammy links from hurting my multi-location SEO efforts?",
      answer:
        "Regular backlink audits, monitoring referring domains, and disavowing harmful or irrelevant links help protect your franchise website from negative SEO impact.",
    },
    {
      question: "What type of content works best for franchise SEO?",
      answer:
        "High-quality location landing pages, service-specific content, local blogs, FAQs, and customer success stories perform best for rankings and engagement.",
    },
    {
      question: "Should each franchise location have its own blog?",
      answer:
        "Not necessarily. A centralized blog with well-structured categories and internal links to location pages can be more efficient while still supporting local SEO efforts.",
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
          <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-6 text-lg text-gray-300">Franchise SEO Services</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            How Franchise
            <span className="text-[#25baff]"> SEO Helps</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Franchise SEO strengthens your brand’s visibility across multiple
            locations while maintaining consistent messaging. Managing SEO for
            different branches can be complex, but a structured strategy ensures
            each location is optimized for local search, improved rankings, and
            stronger community presence. With the majority of searches having
            local intent, a targeted franchise SEO approach helps your business
            capture nearby customers and stand out in competitive markets.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our franchise SEO services enhance local listings, optimize map
            visibility, eliminate duplicate or thin content, and improve the
            technical structure of your CMS. By refining each location’s online
            presence, we help your brand gain authority, attract qualified
            traffic, and grow consistently in every market you serve.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img1}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Franchise SEO <span className="text-sky-500">vs General SEO</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              If you operate in multiple locations, the right SEO strategy makes
              all the difference. Compare how both approaches work and choose
              what aligns with your growth goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Franchise SEO Card */}
            <div
              className="group relative bg-gradient-to-br from-[#25baff] to-[#45c2fc] text-white 
        p-10 rounded-3xl shadow-lg transition-all duration-300 
        hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(37,99,235,0.35)]"
            >
              <h3 className="text-2xl font-semibold mb-8">Franchise SEO</h3>

              <div className="space-y-5 text-sm">
                {[
                  "Targets multiple business locations across different regions",
                  "Focuses on location-specific keywords & search intent",
                  "Requires unique localized content for each branch",
                  "Manages multiple business listings (GMB) per location",
                  "Builds local authority while maintaining brand consistency",
                  "Tracks performance separately for each franchise location",
                  "Prioritizes map pack visibility & local citations",
                  "Balances corporate branding with local customization",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-blue-200 group-hover:scale-110 transition" />
                    <p className="opacity-95">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* General SEO Card */}
            <div
              className="group bg-white p-10 rounded-3xl border border-blue-100 
        shadow-sm transition-all duration-300 
        hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(56,189,248,0.25)] 
        hover:border-sky-400"
            >
              <h3 className="text-2xl font-semibold text-black mb-8 group-hover:text-sky-600 transition">
                General SEO
              </h3>

              <div className="space-y-5 text-sm text-gray-700">
                {[
                  "Optimizes a single-location or centralized business website",
                  "Targets broader industry or national keywords",
                  "Creates uniform content for a general audience",
                  "Manages one main business listing",
                  "Builds domain-wide authority & backlink strength",
                  "Tracks overall website performance as one entity",
                  "Focuses on broader regional or national rankings",
                  "Maintains consistent messaging across the entire brand",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-sky-500 group-hover:scale-110 transition" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Our franchise SEO strategies are built around smart location-based
            targeting, ensuring every branch ranks in its local market
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Proven Franchise
            <span className="text-[#25baff]"> SEO Strategies</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearchengin,
                head: "Consistent NAP & Local Citations",
                text: "Franchise SEO starts with keeping your NAP (Name, Address, Phone Number) details accurate and consistent across your website, Google Business Profiles, and trusted directories, helping strengthen local search authority, build credibility, and improve visibility for every franchise location.",
              },
              {
                icon: RiProfileLine,
                head: "Optimized Google Business Profiles",
                text: "Each franchise location should have its own fully optimized Google Business Profile (GBP), complete with targeted keywords, accurate business details, and high-quality images to enhance local visibility, strengthen brand presence, and attract more nearby customers.",
              },
              {
                icon: FaMapLocation,
                head: "Strategic Local SEO for Each Location",
                text: "Our franchise local SEO strategy focuses on boosting visibility for every individual location, not just overall brand growth, by creating dedicated localized landing pages with unique content and location-specific details that attract and convert local search traffic.",
              },
              {
                icon: BiBookContent,
                head: "Localized & Global Content Marketing",
                text: "Strong content marketing is essential for franchise SEO, ensuring each location captures valuable search traffic; we create engaging blogs around local and global news, industry trends, and community events, while highlighting customer success stories from every franchise location to build trust and brand authority.",
              },
              {
                icon: IoMdStarHalf,
                head: "Reputation & Review Management",
                text: "With nearly half of consumers relying on online reviews before making a purchase, maintaining a strong online reputation is crucial; by actively managing reviews and responding professionally to both positive and negative feedback, we help build trust, credibility, and stronger customer relationships at every franchise location.",
              },
              {
                icon: MdOnlinePrediction,
                head: "Paid Advertising for Better Visibility",
                text: "Our targeted PPC advertising strategies enhance multi-location SEO by driving focused traffic and increasing brand visibility; through location-specific campaigns using local and broader keywords across Google, Facebook, and other platforms, we help boost foot traffic and attract high-intent customers to each franchise location.",
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
            Unlock Local Growth — Get Your Free Franchise SEO Consultation
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Key Challenges in Franchise
            <span className="text-[#25baff]"> SEO Success</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Inconsistent Business Listings",
                text: "Inaccurate or mismatched NAP (Name, Address, Phone Number) details across directories can create inconsistent business listings, reducing local search visibility and weakening trust with both search engines and potential customers.",
              },
              {
                head: "Multiple GBPs Management",
                text: "Managing multiple Google Business Profiles can be challenging, and without proper oversight, it often leads to outdated information, inconsistent updates, and missed opportunities to engage local customers.",
              },
              {
                head: "Lack of Geo-Targeting",
                text: "Without location-specific content and geo-targeted optimization, your franchise may struggle to connect with local audiences, making it harder to build relevance, trust, and strong visibility in your target areas.",
              },
              {
                head: "No Local Visibility",
                text: "When your SEO strategy lacks proper local optimization, your franchise can struggle to appear in local search results, limiting visibility, reducing qualified traffic, and missing valuable opportunities to attract nearby customers.",
              },
              {
                head: "Duplicate Content Issues",
                text: "When content is identical or overly similar across multiple franchise locations, it can create duplicate content issues that confuse search engines, weaken local relevance, and ultimately lower your search rankings.",
              },
              {
                head: "Limited Multilingual Presence",
                text: "Without multilingual content and culturally relevant messaging, your franchise may struggle to connect with diverse audiences, limiting market reach, reducing engagement, and missing opportunities to serve customers from different language and cultural backgrounds.",
              },
              {
                head: "Poor Reputation Management",
                text: "Struggling to manage reviews across multiple franchise locations can harm your brand’s credibility, as inconsistent responses and unresolved feedback weaken customer trust and negatively impact local search performance.",
              },
              {
                head: "Ineffective Paid Traffic",
                text: "When paid advertising campaigns lack proper targeting, strategy, and optimization, they fail to generate quality leads or meaningful conversions, resulting in wasted budget and limited return on investment.",
              },
              {
                head: "Declining Organic Reach",
                text: "A drop in organic traffic often signals unresolved SEO issues, weakening your search visibility and directly impacting overall business growth, lead generation, and long-term performance.",
              },
            ].map((item, index) => {
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

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#a8d97c] py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              What Our Clients
              <span className="text-[#25baff]"> Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "Professional execution and outstanding results. Our digital growth has significantly improved.",
                name: "Kashvi Kahal",
                role: "Marketing Director",
              },
              {
                text: "Their branding and online strategy completely transformed our visibility.",
                name: "Yumlembam Sanajaoba Meitei",
                role: "Founder",
              },
              {
                text: "Reliable team with consistent performance delivery. Highly recommended.",
                name: "Paul Casper",
                role: "Operations Manager",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                shadow-lg shadow-[#25baff]/10
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
              >
                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                  <RiDoubleQuotesL />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>

                <h4 className="font-bold text-lg text-[#020202]">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Our specialized SEO services help each franchise grow locally while
            maintaining consistent brand strength across your network
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Advanced Franchise SEO Solutions for
            <span className="text-[#25baff]"> Scalable Growth</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaMapLocation,
                head: "Local SEO for Each Location",
                text: "Our franchise local SEO strategy goes beyond basic optimization by targeting the right local keywords, managing accurate business listings, and developing location-specific landing pages that increase visibility, attract nearby customers, and drive more foot traffic.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Geo-Targeted Keyword Strategy",
                text: "Our franchise SEO experts optimize each location’s web page with geo-targeted keywords, refining title tags, meta descriptions, headers, and on-page content to improve local rankings and drive more qualified search traffic.",
              },
              {
                icon: CiShop,
                head: "Technical SEO for Franchises",
                text: "We build a strong technical foundation for your franchise website with optimized site architecture, improved speed, enhanced security, and comprehensive audits to ensure search engines can easily crawl, index, and rank your pages.",
              },
              {
                icon: FaMobileAlt,
                head: "GBP Setup & Optimization",
                text: "We create and optimize a unique Google Business Profile for each franchise location, ensuring accurate NAP details, consistent updates, and timely responses to reviews and customer queries to strengthen trust, visibility, and local engagement.",
              },
              {
                icon: RiProfileLine,
                head: "Localized Content Marketing",
                text: "We create unique, location-specific content tailored to local interests and search intent, using relevant keywords and clear CTAs to drive engagement; our social media promotion further amplifies reach, boosting organic traffic and strengthening brand awareness for each franchise location.",
              },
              {
                icon: HiLinkSlash,
                head: "Location-Based Link Building",
                text: "We strengthen your franchise’s online authority with strategic, keyword-focused link building and high-quality backlinks, earning placements from local businesses, community websites, and relevant industry directories to improve domain authority and boost search rankings for each location.",
              },
              {
                icon: SiSecurityscorecard,
                head: "Online Reputation & Review Management",
                text: "With most customers checking online reviews before choosing a local business, we actively monitor and manage both positive and negative feedback to strengthen your brand image, build trust, and maintain a strong reputation across every franchise location.",
              },
              {
                icon: IoIosCodeWorking,
                head: "Local Citation Building & Management",
                text: "We list each franchise location in trusted local directories with accurate and consistent NAP details, strengthening local SEO, improving online visibility, and helping your business rank higher in map listings and local search results.",
              },
              {
                icon: RiSeoFill,
                head: "Franchise SEO Audits & Performance Reports",
                text: "Franchise SEO requires continuous tracking and optimization, so we conduct regular audits and detailed performance reports to monitor key metrics, identify gaps, and refine strategies for sustained growth across all locations.",
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

      <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              A scalable, location-driven SEO system designed to strengthen
              local rankings, protect brand consistency, and drive measurable
              growth across every franchise branch
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Our Proven Franchise
              <span className="text-[#25baff]"> SEO Framework</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Strategic Discovery & Planning",
                desc: "We evaluate your franchise structure, competitors, and local markets to create a unified yet location-specific SEO roadmap.",
                img: Img2,
              },
              {
                title: "Optimized Location Pages",
                desc: "Each franchise page is enhanced with geo-targeted keywords, structured data, and conversion-focused content.",
                img: Img3,
              },
              {
                title: "Geo-Focused Keyword Targeting",
                desc: "We identify high-intent, location-based keywords to capture qualified local traffic for every branch.",
                img: Img4,
              },
              {
                title: "Local Listings & Map Pack Growth",
                desc: "We optimize Google Business Profiles and citations to dominate local map results and improve visibility.",
                img: Img5,
              },
              {
                title: "Localized Content Strategy",
                desc: "Custom content for each franchise location that builds local authority and improves engagement.",
                img: Img6,
              },
              {
                title: "Authoritative Local Link Building",
                desc: "We earn quality local backlinks that strengthen domain authority and support long-term rankings.",
                img: Img7,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden  border border-blue-100
          transition-all duration-500 
          hover:-translate-y-3 
          hover:shadow-[0_25px_50px_rgba(37,99,235,0.30)] 
          hover:border-[#25baff]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-[#25baff] transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
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

export default FranchisSeoServices;
