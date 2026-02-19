import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FcNegativeDynamic } from "react-icons/fc";
import { FaSearchengin } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { HiLinkSlash } from "react-icons/hi2";
import { GiSpeedBoat } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";
import { RiSeoFill } from "react-icons/ri";
import { IoIosCodeWorking } from "react-icons/io";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

import Banner from "../../../assets/seo/banner.jpg";
import Img from "../../../assets/services/seo.avif";

gsap.registerPlugin(ScrollTrigger);

const TechnicalSeoServices = () => {
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
      question: "How can I check if my website is properly indexed?",
      answer:
        "You can review your indexing status in Google Search Console under the Pages or Coverage report. It highlights indexed pages, crawl errors, and exclusions. If issues appear, a technical SEO audit can identify and fix the root causes.",
    },
    {
      question: "Why is crawl budget optimization important?",
      answer:
        "Crawl budget optimization ensures search engines focus on your most valuable pages instead of wasting resources on low-priority URLs. This improves indexing efficiency and strengthens your overall search visibility.",
    },
    {
      question: "How do canonical tags solve duplicate content problems?",
      answer:
        "Canonical tags signal the preferred version of a page to search engines. This prevents duplicate pages from competing with each other and consolidates ranking signals into one primary URL.",
    },
    {
      question: "Why is server log analysis important in technical SEO?",
      answer:
        "Server log analysis shows how search engine bots interact with your site. It helps identify crawl inefficiencies, detect indexing issues, and ensure bots prioritize your most important pages.",
    },
    {
      question: "How can Core Web Vitals be improved?",
      answer:
        "Core Web Vitals improve by optimizing page speed, reducing heavy scripts, and preventing layout shifts. Enhancing loading speed, interactivity, and visual stability leads to better rankings and user experience.",
    },
    {
      question: "How does JavaScript affect SEO performance?",
      answer:
        "Heavy JavaScript can limit crawlability and indexing. Implementing proper rendering techniques like server-side or dynamic rendering ensures search engines can access and understand your content correctly.",
    },
    {
      question:
        "What is the difference between a technical SEO expert and a regular SEO specialist?",
      answer:
        "A technical SEO expert focuses on backend improvements like site structure, speed, and indexing, while a regular SEO specialist concentrates on content, keywords, and link building. Both are essential for strong search performance.",
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
          <p className="mt-6 text-lg text-gray-300">Technical SEO Services</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What Are Technical
            <span className="text-[#25baff]"> SEO Services?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Technical SEO services focus on optimizing the backend structure of
            your website so search engines can efficiently crawl, index, and
            understand your content. It includes improving site speed, fixing
            crawl errors, enhancing mobile responsiveness, optimizing code, and
            strengthening overall website architecture to ensure your site
            performs smoothly for both users and search engines.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Why Does Technical SEO Matter? Even the best content cannot rank
            well if a website has technical issues. A strong technical
            foundation improves search visibility, enhances user experience,
            boosts website performance, and ultimately drives more traffic,
            leads, and conversions by ensuring your site meets search engine
            standards.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Technical SEO keeps your website fast, accessible, and optimized for
            better rankings and growth
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Why Your Website Needs Technical
            <span className="text-[#25baff]"> SEO Services</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearchengin,
                head: "Better Crawling & Indexing",
                text: "If search engines can’t properly access your website, your pages won’t appear in search results. Our technical SEO process improves your site structure and removes barriers, ensuring search engines can easily crawl, understand, and index your content.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Fix Duplicate Content & URL Issues",
                text: "Duplicate pages and messy URLs can confuse search engines and weaken your rankings. We resolve duplication problems, streamline URL structures, and apply proper technical signals to ensure search engines clearly understand which pages should rank.",
              },
              {
                icon: HiLinkSlash,
                head: "Remove Crawl Errors & Broken Links",
                text: "Crawl errors and broken links can disrupt your website’s performance and hurt rankings. Our technical SEO service identifies and fixes these issues, ensuring your site runs smoothly for both users and search engines.",
              },
              {
                icon: MdSecurity,
                head: "Enhanced Website Security",
                text: "Website security plays a vital role in both trust and search rankings. Our technical SEO team strengthens your site with HTTPS encryption and secure configurations, protecting user data while improving your credibility and performance in search results.",
              },
              {
                icon: FcNegativeDynamic,
                head: "Lower Bounce Rates",
                text: "When a website is slow or difficult to navigate, visitors leave quickly. Technical SEO improves site speed, usability, and overall performance, creating a seamless experience across all devices. A smoother journey keeps users engaged longer and increases the chances of conversions.",
              },
              {
                icon: MdOnlinePrediction,
                head: "Improved Speed & Higher Conversions",
                text: "Website speed directly impacts rankings and user behavior. A slow-loading site can cost you valuable visitors. We enhance performance by optimizing server response, reducing heavy code, and implementing performance best practices so your pages load quickly and convert better.",
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
            Let’s Fix Your Website’s Technical SEO
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
            How Our Technical SEO
            <span className="text-[#25baff]"> Process Works</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            We follow a simple, step-by-step approach to fix technical issues,
            improve performance, and strengthen your website for better rankings
            and conversions.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Domain Setup & URL Optimization",
                text: "We optimize your domain and URL structure to ensure clear navigation and easy crawling. By creating clean, consistent, and SEO-friendly URLs, we help search engines understand your pages better and improve overall visibility and performance.",
              },
              {
                head: "HTTPS & SSL Implementation",
                text: "We secure your website with proper HTTPS and SSL configuration to protect user data and build trust. A secure site not only prevents browser warnings but also strengthens your credibility and supports better search rankings.",
              },
              {
                head: "Website Crawl & Error Diagnosis",
                text: "We perform a detailed website audit to uncover technical issues such as broken links, duplicate pages, and faulty redirects. By resolving these problems, we ensure search engines can properly crawl, index, and understand your site for improved visibility.",
              },
              {
                head: "Google Indexing & Site Search",
                text: "If your pages aren’t indexed, they can’t appear in search results. We identify indexing issues such as no-index tags, crawl restrictions, and server errors, then resolve them to ensure your pages are properly indexed and visible in search.",
              },
              {
                head: "Robots.txt & XML Sitemap Optimization",
                text: "We optimize your robots.txt file to control how search engines access your site and prevent unnecessary crawling. We also refine your XML sitemap to help search engines quickly discover, index, and prioritize your most important pages.",
              },
              {
                head: "Schema Markup Implementation",
                text: "We implement structured data to help search engines better understand your content and enhance how it appears in search results. Each schema is carefully added, tested, and validated to improve visibility, click-through rates, and overall indexing performance.",
              },
              {
                head: "Duplicate Content Resolution",
                text: "Duplicate content can dilute rankings and confuse search engines. We detect overlapping pages and resolve them using proper canonical tags, redirects, and content optimization to ensure the correct version ranks and your SEO performance remains strong.",
              },
              {
                head: "Metadata Enhancement",
                text: "Title tags and meta descriptions shape how your pages appear in search results. We optimize them with relevant keywords and compelling messaging to improve click-through rates, increase organic traffic, and strengthen overall search performance.",
              },
              {
                head: "Broken Link & Redirect Management",
                text: "Broken links and improper redirects can harm both user experience and SEO performance. We fix faulty internal and external links, implement proper 301 redirects, and eliminate redirect loops to maintain authority and ensure smooth indexing.",
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
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Technical SEO keeps your website fast, accessible, and optimized for
            better rankings and growth
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Technical SEO
            <span className="text-[#25baff]"> Services</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearchengin,
                head: "SEO Auditing & Log File Analysis",
                text: "We conduct in-depth SEO audits to evaluate crawlability, indexability, and on-page performance. Our log file analysis tracks how search engine bots interact with your site, while Core Web Vitals assessments ensure optimal speed, stability, and overall user experience.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Crawlability & Indexability Optimization",
                text: "We enhance your website’s crawlability and indexability by optimizing XML sitemaps, configuring and validating robots.txt files, implementing proper canonicalization, resolving duplicate content issues, and improving pagination and faceted navigation for seamless search engine access.",
              },
              {
                icon: GiSpeedBoat,
                head: "Site Speed & Performance Tuning",
                text: "We improve your website’s speed and performance by compressing images and converting them to modern formats, minimizing CSS, JavaScript, and HTML files, reducing server response time, integrating CDN and browser caching, and implementing lazy loading for faster, smoother page experiences.",
              },
              {
                icon: FaMobileAlt,
                head: "Mobile-First Indexing & AMP Implementation",
                text: "We optimize your website for mobile-first indexing by improving mobile usability, refining viewport settings, and enhancing responsive design. Our team also implements and validates AMP where needed to deliver faster, seamless experiences across all devices.",
              },
              {
                icon: FaDatabase,
                head: "Structured Data & Semantic Markup",
                text: "We implement and validate structured data using formats like JSON-LD, Microdata, or RDFa to help search engines better understand your content. By enhancing schema markup, we improve rich snippet visibility and strengthen your presence in search results.",
              },
              {
                icon: SiSecurityscorecard,
                head: "HTTPS, SSL & Website Security Enhancements",
                text: "We strengthen your website’s security by properly configuring SSL/TLS certificates and enforcing HTTPS across all pages. Our team fixes mixed content issues, removes insecure resources, and performs malware checks with advanced security hardening to protect your site and maintain search trust.",
              },
              {
                icon: HiLinkSlash,
                head: "Internal Linking Optimization",
                text: "We improve your internal linking structure to enhance link equity flow and reduce crawl depth. Our team implements breadcrumb schema for better navigation and identifies orphaned pages to ensure every important page is properly connected and indexed.",
              },
              {
                icon: IoIosCodeWorking,
                head: "HTTP Status Code & Redirect Management",
                text: "We monitor and resolve HTTP errors to maintain a healthy website structure. Our team fixes 404 issues, manages 301 and 302 redirects properly, eliminates redirect chains, and optimizes JavaScript rendering to ensure dynamic content is accurately crawled and indexed.",
              },
              {
                icon: RiSeoFill,
                head: "International & Multilingual SEO",
                text: "We optimize your website for global audiences by implementing accurate hreflang tags for proper geo-targeting. Our team refines your international structure using the right ccTLD, subdirectory, or subdomain strategy, ensuring search engines serve the correct version of your site to the right users worldwide.",
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

      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              How We Solve
              <span className="text-[#25baff]"> Technical SEO Issues</span>
            </h2>

            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-5">
              Technical SEO problems don’t just affect rankings — they impact
              user experience, conversions, and long-term growth. Here’s how we
              fix them the right way.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                issue: "Slow Website Performance",
                impact: [
                  "High bounce rates",
                  "Lower search rankings",
                  "Reduced conversions",
                ],
                solution: [
                  "Advanced image optimization",
                  "Code minification & cleanup",
                  "Server & caching improvements",
                ],
                result: [
                  "Faster load times",
                  "Improved rankings",
                  "Higher engagement",
                ],
              },
              {
                issue: "Broken or Dead Links",
                impact: [
                  "Poor user experience",
                  "Loss of trust",
                  "Crawl inefficiencies",
                ],
                solution: [
                  "Fix & redirect broken URLs",
                  "Implement proper 301 redirects",
                ],
                result: ["Smooth navigation", "Stronger SEO health"],
              },
              {
                issue: "Duplicate Content",
                impact: ["Confused search engines", "Keyword cannibalization"],
                solution: [
                  "Canonical tag setup",
                  "Content consolidation strategy",
                ],
                result: ["Clear ranking signals", "Improved visibility"],
              },
              {
                issue: "Mobile Optimization Gaps",
                impact: ["Poor mobile experience", "Lower mobile rankings"],
                solution: [
                  "Responsive design fixes",
                  "Core Web Vitals optimization",
                ],
                result: ["Better mobile UX", "Higher mobile traffic"],
              },
              {
                issue: "Improper Indexing Setup",
                impact: [
                  "Important pages not indexed",
                  "Reduced search presence",
                ],
                solution: [
                  "Robots.txt optimization",
                  "XML sitemap creation & submission",
                ],
                result: ["Better crawl efficiency", "Improved index coverage"],
              },
              {
                issue: "Unoptimized Media Files",
                impact: ["Slow page loading", "High abandonment rate"],
                solution: [
                  "Modern image formats (WebP)",
                  "Compression without quality loss",
                ],
                result: ["Faster performance", "Lower bounce rate"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-blue-100 
          shadow-sm transition-all duration-300 
          hover:-translate-y-2 
          hover:shadow-[0_20px_40px_rgba(56,189,248,0.25)]
          hover:border-sky-400"
              >
                <h3 className="text-lg font-semibold text-black mb-6 group-hover:text-sky-600 transition">
                  {item.issue}
                </h3>

                <div className="space-y-5 text-sm">
                  {/* Impact */}
                  <div>
                    <p className="font-medium text-gray-700 mb-2">
                      Negative Impact
                    </p>
                    {item.impact.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <FaTimesCircle className="text-red-400 mt-1" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="font-medium text-gray-700 mb-2">What We Do</p>
                    {item.solution.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <FaCheckCircle className="text-sky-500 mt-1" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Results</p>
                    {item.result.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <FaCheckCircle className="text-green-500 mt-1" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
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

export default TechnicalSeoServices;
