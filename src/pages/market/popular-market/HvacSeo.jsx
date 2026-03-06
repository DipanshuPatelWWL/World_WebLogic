import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTools,
  FaSearch,
  FaMapMarkerAlt,
  FaChartLine,
  FaMobileAlt,
  FaStar,
  FaShieldAlt,
  FaGoogle,
  FaUsers,
  FaTrophy,
  FaCheckCircle,
  FaSnowflake,
  FaWind,
  FaHandshake,
  FaQuoteLeft,
  FaClock,
  FaAward,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Banner from "../../../assets/market/hvacseo/banner.avif";
import HvacImg from "../../../assets/market/hvacseo/img.avif";
import ServiceImg from "../../../assets/market/hvacseo/img2.avif";
gsap.registerPlugin(ScrollTrigger);

export default function HvacSeo() {
  const [activeFaq, setActiveFaq] = useState(null);

  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const faqRefs = useRef([]);
  const sectionRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.4,
        ease: "power4.out",
      });

      sectionRefs.current.forEach((section) => {
        gsap.utils.toArray(".gsap-item", section).forEach((item, i) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            opacity: 0,
            y: 70,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
          });
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: "What is HVAC SEO?",
      a: "HVAC SEO is the optimization of your website, Google Business Profile, and online presence to rank higher for searches like 'AC repair near me', 'furnace installation [city]', or 'HVAC contractor near me'.",
    },
    {
      q: "Why is SEO important for HVAC businesses?",
      a: "80% of customers search online before calling. Ranking high drives consistent leads without ongoing ad spend, especially in competitive local markets.",
    },
    {
      q: "What are the critical elements of HVAC SEO?",
      a: "Local keyword targeting, Google Business Profile optimization, citations, mobile-friendly site, quality content, reviews, and technical fixes.",
    },
    {
      q: "What keywords will you target for my website?",
      a: "'AC repair [city]', 'furnace repair near me', 'HVAC services [location]', 'emergency HVAC [city]', 'air conditioning installation', etc.",
    },
    {
      q: "Is social media important for HVAC SEO?",
      a: "Indirectly yes — it boosts brand visibility, shares content, and can drive traffic/signals that support SEO.",
    },
    {
      q: "Do I need to hire an HVAC digital marketing agency for SEO?",
      a: "Yes, especially if you're not technical. Specialists handle local SEO nuances, schema, and avoid penalties.",
    },
    {
      q: "How can I track the success of my HVAC SEO?",
      a: "Google Analytics, Search Console, call tracking, form submissions, ranking tools, and lead attribution.",
    },
    {
      q: "How long does it take to see results from HVAC SEO?",
      a: "Typically 3–6 months for noticeable traffic/leads; competitive areas may take 6–12 months.",
    },
    {
      q: "Are there any free tools available to help with HVAC SEO?",
      a: "Google Business Profile, Google Search Console, Google Analytics, keyword planners like Google Keyword Planner.",
    },
    {
      q: "Are there any common SEO mistakes HVAC contractors should avoid?",
      a: "Inconsistent NAP, ignoring mobile optimization, keyword stuffing, neglecting reviews, duplicate content, slow site.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Targeted Local Keyword Optimization",
      icon: <FaSearch />,
      desc: "Research high-intent local terms like 'AC repair near me' and integrate naturally.",
    },
    {
      num: "02",
      title: "Online Directory Listings & Citations",
      icon: <FaMapMarkerAlt />,
      desc: "Consistent NAP in HVAClocal.com, HomeAdvisor, Yelp, etc.",
    },
    {
      num: "03",
      title: "Mobile-Friendly Website Optimization",
      icon: <FaMobileAlt />,
      desc: "Responsive design + fast loading for better UX and rankings.",
    },
    {
      num: "04",
      title: "Content Marketing & Blogging",
      icon: <FaWind />,
      desc: "Tips, maintenance guides, energy-saving advice to build authority.",
    },
    {
      num: "05",
      title: "Online Reputation Management",
      icon: <FaStar />,
      desc: "Review generation + professional responses on Google, Yelp.",
    },
    {
      num: "06",
      title: "Google Business Profile & Local Pack Focus",
      icon: <FaGoogle />,
      desc: "Posts, photos, Q&A, services for Map Pack domination.",
    },
    {
      num: "07",
      title: "Regular Audits & Technical Optimization",
      icon: <FaTools />,
      desc: "Core Web Vitals, schema (LocalBusiness, Service), speed fixes.",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="w-full overflow-hidden bg-[#020202] text-white"
    >
      {/* HERO */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/75" />
        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">HVAC SEO </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Dominate Local Searches & Get Non-Stop Service Calls
          </p>
        </div>
      </section>

      {/* WHAT IS HVAC SEO */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="gsap-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-[#0ea5e9]">HVAC SEO</span>?
            </h2>
            <p className="text-base leading-relaxed mb-5 text-gray-700">
              HVAC SEO optimizes your website, Google Business Profile, and
              digital presence to rank higher for high-intent local searches
              like “AC repair near me”, “furnace installation [city]”, or “HVAC
              contractor near me”.
            </p>
            <p className="text-base leading-relaxed mb-6 text-gray-700">
              In today's market, with voice search and mobile-first users, we
              focus on local signals, E-E-A-T, schema markup, review velocity,
              and content that answers customer questions instantly.
            </p>
            <ul className="space-y-4">
              {[
                "Google Local 3-Pack domination",
                "Mobile-first + fast-loading site",
                "Review & reputation systems",
                "Targeted service pages that convert",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <FaCheckCircle className="text-[#0ea5e9] mt-1 text-lg group-hover:scale-110 transition" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed mt-6 font-medium text-gray-900">
              Result: Consistent leads and booked appointments without ad
              dependency.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={HvacImg}
              alt="HVAC technician repairing air conditioner"
              className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(14,165,233,0.35)]"
            />
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Why HVAC Companies Choose{" "}
            <span className="text-[#0ea5e9]">SEO</span> in 2026
          </h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaChartLine />,
              title: "Non-Stop Organic Leads",
              desc: "Predictable calls & bookings without ad burnout.",
            },
            {
              icon: <FaUsers />,
              title: "Ready-to-Book Customers",
              desc: "High-intent searchers needing urgent service.",
            },
            {
              icon: <FaGoogle />,
              title: "Local 3-Pack Domination",
              desc: "Top map spots = more jobs.",
            },
            {
              icon: <FaStar />,
              title: "Trust & Reviews Power",
              desc: "Star ratings + volume win customers.",
            },
            {
              icon: <FaMobileAlt />,
              title: "Mobile-First Experience",
              desc: "Fast site = better rankings & conversions.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Long-Term Asset",
              desc: "Outlast competitors who rely only on ads.",
            },
            {
              icon: <FaSnowflake />,
              title: "Voice & AI Optimized",
              desc: "Ready for 'Hey Google, find AC repair near me'.",
            },
            {
              icon: <FaTrophy />,
              title: "Clear ROI Tracking",
              desc: "Calls, forms, bookings — all measured.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="gsap-item relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-3 hover:border-[#0ea5e9]/70 hover:shadow-[0_20px_60px_rgba(14,165,233,0.35)] group transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl text-[#0ea5e9] mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES WE OPTIMIZE */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            HVAC Services We{" "}
            <span className="text-[#0ea5e9]">Rank & Dominate</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            "AC Repair",
            "Furnace Installation",
            "Air Conditioning Installation",
            "Heating Repair",
            "Emergency HVAC Service",
            "Duct Cleaning",
            "Heat Pump Services",
            "Thermostat Installation",
            "Commercial HVAC",
            "Indoor Air Quality",
            "Boiler Repair",
            "HVAC Maintenance Plans",
          ].map((service, i) => (
            <div
              key={i}
              className="gsap-item bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
            >
              <FaSnowflake className="text-4xl md:text-5xl text-[#0ea5e9] mx-auto mb-4" />
              <h3 className="text-base md:text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>

        {/* Extra image for visual appeal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={ServiceImg}
            alt="Modern HVAC system installation"
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* OUR PROCESS (condensed from strategies) */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Our Proven <span className="text-[#0ea5e9]">HVAC SEO Process</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto place-items-center">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="gsap-item relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center 
        transition-all duration-500 ease-out group
        hover:-translate-y-3 
        hover:border-[#0ea5e9] 
        hover:shadow-[0_20px_50px_rgba(14,165,233,0.35)]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#0ea5e9]/0 group-hover:bg-[#0ea5e9]/10 blur-2xl transition-all duration-500 -z-10"></div>

              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0ea5e9] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-4xl md:text-5xl text-[#0ea5e9] mt-10 mb-4 transition-all duration-500 group-hover:scale-115 group-hover:drop-shadow-[0_0_15px_rgba(14,165,233,0.9)]">
                {step.icon}
              </div>

              {/* Title */}
              <h4 className="text-base md:text-lg font-semibold mb-2">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Why HVAC Companies Choose <span className="text-[#0ea5e9]">Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaAward />,
              title: "HVAC Niche Experts",
              desc: "Deep focus on contractors — we understand your market.",
            },
            {
              icon: <FaHandshake />,
              title: "Ethical & Transparent",
              desc: "White-hat only. No shortcuts.",
            },
            {
              icon: <FaClock />,
              title: "Clear Monthly Reporting",
              desc: "Rankings, traffic, calls — full visibility.",
            },
          ].map((item, i) => (
            <div key={i} className="gsap-item text-center">
              <div className="text-5xl md:text-6xl text-[#0ea5e9] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Real <span className="text-[#0ea5e9]">HVAC SEO Results</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { metric: "+350%", desc: "Organic traffic growth (6–12 months)" },
            {
              metric: "Top 3",
              desc: "Local Pack rankings in competitive markets",
            },
            { metric: "+65%", desc: "Service calls from organic search" },
          ].map((item, i) => (
            <div
              key={i}
              className="gsap-item bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10"
            >
              <div className="text-xl md:text-3xl font-extrabold text-[#0ea5e9] mb-4">
                {item.metric}
              </div>
              <p className="text-base md:text-lg text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA MID-PAGE */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#0ea5e9]/20 to-[#60a5fa]/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for More <span className="text-[#0ea5e9]">Service Calls</span> &
          Bookings?
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-4xl mx-auto">
          Get your FREE HVAC SEO Audit + competitor analysis today.
        </p>
        <NavLink to="/contact">
          <button className="px-10 py-4 md:px-12 md:py-5 cursor-pointer rounded-full bg-[#0ea5e9] text-black font-semibold text-base md:text-lg shadow-xl hover:shadow-[#0ea5e9]/70 transition transform hover:-translate-y-1">
            Contact Us
          </button>
        </NavLink>
      </section>

      {/* TESTIMONIALS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            What Our <span className="text-[#0ea5e9]">HVAC Clients</span> Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              quote:
                "Tripled our service calls in under a year. Local pack #1 consistently.",
              name: "Mike R., HVAC Owner, Delhi",
            },
            {
              quote: "Organic leads now beat paid ads by 2x. Great team!",
              name: "Rahul S., Mumbai",
            },
            {
              quote: "Professional, results-focused, and always transparent.",
              name: "Neha P., Bangalore",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="gsap-item bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <FaQuoteLeft className="text-4xl md:text-5xl text-[#0ea5e9] mb-4 opacity-50" />
              <p className="text-base md:text-lg italic mb-4">"{t.quote}"</p>
              <p className="font-semibold text-sm md:text-base">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section ref={addSectionRef} className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="gsap-item text-3xl md:text-4xl font-extrabold text-[#020202] mb-12 text-center">
            Frequently Asked <span className="text-[#0ea5e9]">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                ref={(el) => (faqRefs.current[i] = el)}
                className="gsap-item bg-white rounded-xl shadow-lg overflow-hidden border"
              >
                <button
                  onClick={() => {
                    const el = faqRefs.current[i];
                    const content = el.querySelector(".faq-content");
                    if (activeFaq === i) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.4,
                      });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prev =
                          faqRefs.current[activeFaq]?.querySelector(
                            ".faq-content",
                          );
                        gsap.to(prev, { height: 0, opacity: 0, duration: 0.4 });
                      }
                      gsap.set(content, { height: "auto" });
                      gsap.fromTo(
                        content,
                        { height: 0, opacity: 0 },
                        {
                          height: content.offsetHeight,
                          opacity: 1,
                          duration: 0.5,
                        },
                      );
                      setActiveFaq(i);
                    }
                  }}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-base md:text-lg text-[#020202] hover:bg-gray-50 transition"
                >
                  <span className={activeFaq === i ? "text-[#0ea5e9]" : ""}>
                    {faq.q}
                  </span>
                  {activeFaq === i ? (
                    <FiMinus className="text-[#0ea5e9] text-xl" />
                  ) : (
                    <FiPlus className="text-gray-600 text-xl" />
                  )}
                </button>
                <div className="faq-content overflow-hidden h-0 opacity-0 px-6">
                  <p className="py-6 text-sm md:text-base text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center bg-[#020202] border-t border-[#0ea5e9]/30">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Grow Your HVAC Business{" "}
          <span className="text-[#0ea5e9]">With Us</span>
        </h2>
        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-5xl mx-auto">
          Stop losing jobs to competitors. Build a steady stream of organic
          leads.
        </p>
        <p className="mt-8 text-sm text-gray-500">
          Limited audit slots — contact us now!
        </p>
      </section>
    </div>
  );
}
