import { useLayoutEffect, useRef, useState } from "react";
import { FiFileText } from "react-icons/fi";
import { FiLink, FiUserCheck, FiShield } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/seo/banner.jpg";
import Seo1 from "../../assets/seo/SEO.webp";

gsap.registerPlugin(ScrollTrigger);

const Seo = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

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

  const [active, setActive] = useState(null);

  const AccordionItem = ({ item }) => {
    const isOpen = active === item.id;

    return (
      <div
        className={`gsap-item group rounded-2xl border border-gray-200
      transition-all duration-500
      ${isOpen ? "border-[#25baff] shadow-[#25baff]/40 shadow-lg" : ""}
      hover:border-[#25baff] hover:shadow-[#25baff]/30`}
      >
        <div
          onClick={() => setActive(isOpen ? null : item.id)}
          className="cursor-pointer flex items-center justify-between
        px-8 py-6 font-bold text-lg text-[#0b3253]"
        >
          <span className="flex items-center gap-3">
            {item.icon}
            {item.title}
          </span>

          <span
            className={`text-gray-400 transition-transform duration-300
          ${isOpen ? "rotate-45" : ""}`}
          >
            +
          </span>
        </div>

        {isOpen && (
          <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4">
            {item.content}
          </div>
        )}
      </div>
    );
  };

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
            Search Engine Optimization
          </p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Want guaranteed growth? Our Search Engine
            <span className="text-[#25baff]">
              {" "}
              Optimization delivers exactly that!
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            You can create a visually stunning website, but how effective is it
            at encouraging visitors to take action? A performance-focused SEO
            strategy makes the difference, and we deliver every solution
            required to achieve measurable results.
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Seo1}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item ">
          <p className="text-gray-700 mb-4">
            We understand how to position your brand so it stands out on
            Google’s search results through smart digital marketing strategies
            and modern optimization techniques. Our specialists know exactly
            what your business requires to appear credible, professional, and
            attractive to potential customers visiting your website.
          </p>
          <p className="text-gray-700 mb-4">
            Whether it’s SEO services, brand promotion, or any other
            growth-focused strategy you need, we are here to support you. We
            recognize how essential elements like a well-structured website,
            targeted keywords, and strong SEO practices are for business
            expansion. 
          </p>
          <h3 className="text-2xl font-bold mb-5 text-[#a8d97c] ">
            Still have questions? Let’s answer them. Here’s what you should
            know:
          </h3>
          <p className="text-gray-700 mb-6 ml-5">
            <li>Stronger SEO strategies bring more qualified visitors.</li>
            <li>
              SEO is essential for building long-term customer relationships.
            </li>
            <li>Your brand gains greater visibility and recognition.</li>
            <li>Higher traffic leads to increased sales and revenue.</li>
            <li>
              SEO remains one of the most powerful ways to grow your website.
            </li>
          </p>
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
              className="absolute w-1.5 h-1.5 bg-[#25baff] rounded-full opacity-40 animate-float"
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
            Now that you understand why SEO deserves your attention, it’s time
            to focus on generating more leads for your website — and we’re here
            to help you achieve exactly that.
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

      {/* ================= WHY SEO SECTION ================= */}
      <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-[#a8d97c]  mb-3">
              Why Choose SEO?
            </p>

            <h2 className="gsap-item text-3xl md:text-4xl font-extrabold text-[#020202]">
              Here’s what you can achieve with our professional{" "}
              <span className="text-[#25baff]"> SEO solutions</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 
        shadow-lg shadow-[#25baff]/30
        border border-transparent
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3
        transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-[#25baff] group-hover:scale-110 transition-transform">
                <FiFileText />
              </div>
              <h3 className="text-xl font-bold text-[#020202] mb-4">
                On-Page SEO Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help you strategically use keywords, meta tags, and optimized
                content to improve your website’s search visibility and
                rankings.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 
        shadow-lg shadow-[#25baff]/30
        border border-transparent
        hover:border-[#25baff]
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3
        transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-[#25baff] group-hover:scale-110 transition-transform">
                <FiLink />
              </div>
              <h3 className="text-xl font-bold text-[#020202] mb-4">
                Off-Page SEO Strategy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In addition, we strengthen your online presence through quality
                blogs, articles, and backlink strategies that boost your brand
                authority.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 
        shadow-lg shadow-[#25baff]/30
        border border-transparent
        hover:border-[#25baff]
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3
        transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-[#25baff] group-hover:scale-110 transition-transform">
                <FiSettings />
              </div>
              <h3 className="text-xl font-bold text-[#020202] mb-4">
                Technical SEO Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We enhance your website’s speed, mobile responsiveness, indexing
                structure, and overall technical performance to ensure search
                engines crawl and rank your site efficiently.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 
        shadow-lg shadow-[#25baff]/30
        border border-transparent
        hover:border-[#25baff]
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3
        transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-[#25baff] group-hover:scale-110 transition-transform">
                <FiSearch />
              </div>
              <h3 className="text-xl font-bold text-[#020202] mb-4">
                Advanced Keyword Research
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We analyze search trends and user intent to target
                high-performing keywords that drive qualified traffic and
                improve your ranking opportunities.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 
        shadow-lg shadow-[#25baff]/30
        border border-transparent
        hover:border-[#25baff]
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3
        transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-[#25baff] group-hover:scale-110 transition-transform">
                <FiMapPin />
              </div>
              <h3 className="text-xl font-bold text-[#020202] mb-4">
                Local SEO Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We optimize your business for local searches and Google Business
                Profile to help nearby customers discover your services quickly
                and easily.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 
        shadow-lg shadow-[#25baff]/30
        border border-transparent
        hover:border-[#25baff]
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3
        transition-all duration-500"
            >
              <div className="text-4xl mb-6 text-[#25baff] group-hover:scale-110 transition-transform">
                <FiBarChart2 />
              </div>
              <h3 className="text-xl font-bold text-[#020202] mb-4">
                Performance Tracking & Reporting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide detailed reports and performance insights to monitor
                keyword rankings, traffic growth, and measurable ROI
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEO SERVICE ACCORDION ================= */}
      <section
        ref={addSectionRef}
        className="bg-gradient-to-b from-white to-gray-50 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          {[
            {
              id: 1,
              icon: <FiLink className="text-[#25baff] text-xl" />,
              title: "Link Building Services",
              content: (
                <>
                  <p>
                    Strong backlinks are essential for higher search rankings.
                    We build high-authority, relevant, and natural backlinks
                    that improve your website credibility and domain strength.
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>High-quality directory submissions</li>
                    <li>Guest blogging & article publishing</li>
                    <li>Authority backlink outreach</li>
                    <li>Social media link integration</li>
                    <li>Spam-free white-hat strategies</li>
                  </ul>
                  <p className="mt-4">
                    Our approach focuses on long-term ranking stability, not
                    short-term tricks.
                  </p>
                </>
              ),
            },
            {
              id: 2,
              icon: <FiUserCheck className="text-[#25baff] text-xl" />,
              title: "Hire Dedicated SEO Expert",
              content: (
                <>
                  <p>
                    Get a dedicated SEO professional who works exclusively on
                    your project with customized strategies and clear goals.
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Complete keyword & competitor analysis</li>
                    <li>On-page & technical SEO improvements</li>
                    <li>Content & PPC coordination</li>
                    <li>Monthly reporting & performance tracking</li>
                    <li>Secure & confidential project handling</li>
                  </ul>
                  <p className="mt-4">
                    We focus on measurable growth and sustainable traffic.
                  </p>
                </>
              ),
            },
            {
              id: 3,
              icon: <FiShield className="text-[#25baff] text-xl" />,
              title: "Performance-Based SEO Guarantee",
              content: (
                <>
                  <p>
                    We believe in transparent results and accountable SEO. Our
                    strategies are designed to deliver targeted traffic, higher
                    visibility, and improved conversions.
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Ethical white-hat optimization</li>
                    <li>Strict quality control processes</li>
                    <li>Transparent reporting system</li>
                    <li>Clear performance milestones</li>
                  </ul>
                  <p className="mt-4">
                    Your investment is protected with structured performance
                    commitments.
                  </p>
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.id}
              className="transform transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="bg-white rounded-2xl border border-gray-200
          shadow-lg shadow-[#25baff]/10
          hover:shadow-2xl hover:shadow-[#25baff]/30
          hover:border-[#25baff]
          transition-all duration-500 ease-in-out"
              >
                <AccordionItem item={item} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Seo;
