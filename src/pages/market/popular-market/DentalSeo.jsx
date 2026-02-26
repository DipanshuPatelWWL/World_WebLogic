import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTooth, FaSearch, FaMapMarkerAlt, FaChartLine, FaMobileAlt, FaStar,
  FaShieldAlt, FaGoogle, FaUsers, FaTrophy, FaCheckCircle, FaComments,
  FaClipboardList,  FaVideo, FaHandshake, FaQuoteLeft,
 FaClock, FaAward,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Banner from "../../../assets/market/dentalSeo/banner.avif";
import Img from "../../../assets/market/dentalSeo/img.avif";

gsap.registerPlugin(ScrollTrigger);

export default function DentalSeo() {
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
    { q: "How long until I see results from Dental SEO?", a: "Most practices see noticeable traffic & lead growth in 3–6 months. Highly competitive areas or new sites may take 6–12 months for top rankings." },
    { q: "Is Dental SEO better than Google Ads for dentists?", a: "Yes for long-term — SEO delivers compounding, low-cost traffic. Ads give instant results but stop when budget stops. We often recommend both." },
    { q: "Can you get me in the Google Local 3-Pack / Map Pack?", a: "Yes — that's our primary focus for most clients. GBP optimization + reviews + local content + citations drive Map Pack success." },
    { q: "What keywords do you target for dental practices?", a: "High-intent local + service: 'emergency dentist [city]', 'Invisalign [city]', 'dental implants near me', 'cosmetic dentist [area]', etc." },
    { q: "How much do reviews really matter in 2025?", a: "Very — star rating, review volume, and recency are huge local ranking & trust factors, especially with AI Overviews pulling reviews." },
    { q: "Do you work with multi-location dental groups / DSOs?", a: "Yes — separate GBP per location, unique city/service pages, no cannibalization, centralized authority building." },
    { q: "What role does Google Business Profile play?", a: "It's often 40–60% of local success. We handle full optimization: posts, Q&A, services, photos, messaging, review responses." },
    { q: "How are you preparing for AI search (SGE / AI Overviews)?", a: "Answer Engine Optimization: direct answers, structured FAQs, schema (FAQ, HowTo, Service), E-E-A-T signals via doctor bios & citations." },
    { q: "Do you build backlinks for dental sites?", a: "Yes — ethical, relevant links from health directories, local sponsorships, guest posts on dental blogs, PR mentions." },
    { q: "What if my website is old / not mobile-friendly?", a: "We audit & recommend/fix Core Web Vitals, mobile UX, speed — often a prerequisite before full SEO campaign." },
  ];

  const processSteps = [
    { num: "01", title: "Deep Technical Audit & Core Web Vitals Fix", icon: <FaShieldAlt />, desc: "Speed, mobile, schema, crawl errors, security." },
    { num: "02", title: "Keyword & Competitor Gap Research", icon: <FaSearch />, desc: "High-intent local + service keywords vs competitors." },
    { num: "03", title: "Google Business Profile Domination", icon: <FaGoogle />, desc: "Full optimization + weekly posts + review system." },
    { num: "04", title: "On-Page, Schema & E-E-A-T Optimization", icon: <FaClipboardList />, desc: "Dentist schema, doctor bios, service markup." },
    { num: "05", title: "Local Citations & Directory Cleanup", icon: <FaMapMarkerAlt />, desc: "Consistent NAP across 60+ platforms." },
    { num: "06", title: "Content Strategy & Service Pages", icon: <FaTooth />, desc: "Treatment guides, FAQs, before/afters." },
    { num: "07", title: "Link Building & Authority Growth", icon: <FaChartLine />, desc: "Niche-relevant, white-hat links." },
    { num: "08", title: "Tracking, Reporting & Iteration", icon: <FaChartLine />, desc: "Google Analytics, Search Console, call tracking." },
  ];

  return (
    <div ref={rootRef} className="w-full overflow-hidden bg-[#020202] text-white">

      {/* HERO - kept original smaller size as per your snippet */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/80" />
        <div ref={heroRef} className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Market</h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">Dental SEO</p>
        </div>
      </section>

      {/* WHAT IS DENTAL SEO */}

<section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Content */}
    <div className="gsap-item">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        What is <span className="text-[#25baff]">Dental SEO?</span>
      </h2>

      <p className="text-base leading-relaxed mb-5 text-gray-700">
        Dental SEO is the strategic optimization of your website, Google Business Profile, 
        and digital presence to rank higher for high-intent searches like 
        “dentist near me”, “Invisalign [city]”, or “emergency tooth extraction”.
      </p>

      <p className="text-base leading-relaxed mb-6 text-gray-700">
        In 2026, with AI Overviews, voice search, and zero-click results shaping search behavior, 
        ranking requires more than keywords. We focus on E-E-A-T, structured schema, 
        local signals, and answer-focused content that positions your clinic 
        as the trusted authority in your area.
      </p>

      {/* Feature List */}
      <ul className="space-y-4">
        {[
          "Google Map Pack & Local SEO domination",
          "Structured data for AI & featured snippets",
          "Mobile-first speed & Core Web Vitals optimization",
          "High-converting service pages"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 group">
            <FaCheckCircle className="text-[#25baff] mt-1 text-lg group-hover:scale-110 transition" />
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-base leading-relaxed mt-6 font-medium text-gray-900">
        Result: predictable, sustainable patient growth without relying heavily on paid ads.
      </p>
    </div>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="overflow-hidden rounded-3xl shadow-2xl group"
    >
      <img
        src={Img}
        alt="Modern dental practice"
        className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)]"
      />
    </motion.div>

  </div>
</section>
      {/* BENEFITS */}
    <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="gsap-item text-3xl md:text-4xl font-bold">
      Why Dental Practices Choose{" "}
      <span className="text-[#a8d97c]">SEO</span> in 2026
    </h2>
  </div>

  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {[
      { icon: <FaChartLine />, title: "Explosive Organic Growth", desc: "Compound monthly patient leads without ad fatigue." },
      { icon: <FaUsers />, title: "High-Intent Patients", desc: "People ready to book, not just browsing." },
      { icon: <FaGoogle />, title: "Local Pack Domination", desc: "#1–3 in maps = massive foot traffic." },
      { icon: <FaStar />, title: "Trust & Authority", desc: "E-E-A-T + reviews = AI & human preference." },
      { icon: <FaMobileAlt />, title: "Mobile-First Speed", desc: "Core Web Vitals optimized for retention." },
      { icon: <FaShieldAlt />, title: "Sustainable Edge", desc: "Outrank ad-reliant competitors long-term." },
      { icon: <FaVideo />, title: "Voice & AI Ready", desc: "Optimized for Siri, Google Assistant, AI Overviews." },
      { icon: <FaTrophy />, title: "Measurable ROI", desc: "Call tracking, form submissions, booking attribution." },
    ].map((item, i) => (
      <div
        key={i}
        className="gsap-item relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center 
        transition-all duration-500 ease-out 
        hover:-translate-y-3 
        hover:border-[#25baff]/70 
        hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)] 
        group"
      >
        {/* Soft Glow Overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#25baff]/10 via-transparent to-[#25baff]/5"></div>

        <div className="relative z-10">
          <div className="text-4xl md:text-5xl text-[#25baff] mb-4 transition duration-300 group-hover:scale-110">
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

      {/* LOCAL SEO MASTERY */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Own Your City with <span className="text-[#25baff]">Local Dental SEO</span>
          </h2>
          <p className="gsap-item mt-4 text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
            70–80% of new patients start with "near me" or city-specific searches. We make you unmissable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { icon: <FaGoogle />, title: "Google Business Profile Mastery", desc: "Photos, services, posts, Q&A, messaging, review automation." },
            { icon: <FaMapMarkerAlt />, title: "Citations & NAP Consistency", desc: "60+ directories cleaned & optimized." },
            { icon: <FaStar />, title: "Review Generation Engine", desc: "Automated requests + professional responses." },
            { icon: <FaSearch />, title: "Voice & Long-Tail Queries", desc: "'open now dentist [city]', 'best Invisalign near me'." },
            { icon: <FaClipboardList />, title: "LocalBusiness + Service Schema", desc: "Rich results, enhanced listings." },
            { icon: <FaChartLine />, title: "Geo-Targeted Landing Pages", desc: "[Service] in [City] pages that rank independently." },
          ].map((item, i) => (
            <div key={i} className="gsap-item bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl md:text-5xl text-[#25baff] mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Our 8-Step <span className="text-[#25baff]">Proven Dental SEO Process</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, i) => (
            <div key={i} className="gsap-item relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#25baff]/60 transition group">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#25baff] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {step.num}
              </div>
              <div className="text-4xl md:text-5xl text-[#25baff] mt-10 mb-4 group-hover:scale-110 transition">{step.icon}</div>
              <h4 className="text-base md:text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-xs md:text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES WE OPTIMIZE */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Dental Services We <span className="text-[#25baff]">Rank & Dominate</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            "Dental Implants", "Invisalign & Clear Aligners", "Cosmetic Dentistry", "Teeth Whitening",
            "Emergency Dentistry", "Root Canal Therapy", "Pediatric Dentistry", "Dental Crowns & Bridges",
            "Veneers", "Periodontal Treatment", "Wisdom Teeth Removal", "Full Mouth Reconstruction",
          ].map((service, i) => (
            <div key={i} className="gsap-item bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
              <FaTooth className="text-4xl md:text-5xl text-[#25baff] mx-auto mb-4" />
              <h3 className="text-base md:text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Real <span className="text-[#25baff]">Dental SEO Results</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { metric: "+420%", desc: "Organic traffic (6–9 months) – Multi-location group" },
            { metric: "1st Page", desc: "42 high-intent keywords in competitive city" },
            { metric: "+58%", desc: "New patient bookings from organic search" },
          ].map((item, i) => (
            <div key={i} className="gsap-item bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10">
              <div className="text-xl md:text-3xl font-extrabold text-[#25baff] mb-4">{item.metric}</div>
              <p className="text-base md:text-lg text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            Why Dentists Choose <span className="text-[#25baff]">Us</span> for SEO
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { icon: <FaAward />, title: "Dental Niche Specialists", desc: "100% focused on dentists — we speak your language." },
            { icon: <FaHandshake />, title: "Transparent & Ethical", desc: "No black-hat tricks. White-hat + long-term focus." },
            { icon: <FaClock />, title: "Monthly Reporting & Calls", desc: "Clear KPIs, rankings, traffic, leads — no surprises." },
          ].map((item, i) => (
            <div key={i} className="gsap-item text-center">
              <div className="text-5xl md:text-6xl text-[#25baff] mb-6">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-3xl md:text-4xl font-bold">
            What Our <span className="text-[#25baff]">Dental Clients</span> Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { quote: "Doubled new patients in 8 months. Map Pack #1 for 6 months straight.", name: "Dr. Priya Sharma, Delhi" },
            { quote: "Best investment we made. Organic leads now exceed paid ads.", name: "Dr. Rajesh Kumar, Mumbai" },
            { quote: "Professional, transparent, and results-driven. Highly recommend.", name: "Dr. Anjali Mehta, Bangalore" },
          ].map((t, i) => (
            <div key={i} className="gsap-item bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <FaQuoteLeft className="text-4xl md:text-5xl text-[#25baff] mb-4 opacity-50" />
              <p className="text-base md:text-lg italic mb-4">"{t.quote}"</p>
              <p className="font-semibold text-sm md:text-base">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA MID-PAGE */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Fill Your Schedule with <span className="text-[#a8d97c]">Qualified Patients</span>?
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-4xl mx-auto">
          Claim your FREE comprehensive Dental SEO Audit + competitor gap report today.
        </p>
        <NavLink to="/contact">
          <button className="px-10 py-4 md:px-12 md:py-5 rounded-full bg-[#25baff] text-black font-semibold text-base md:text-lg shadow-xl hover:shadow-[#25baff]/70 transition transform hover:-translate-y-1">
            Contact Us
          </button>
        </NavLink>
      </section>

      {/* FAQ */}
      <section ref={addSectionRef} className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="gsap-item text-3xl md:text-4xl font-extrabold text-[#020202] mb-12 text-center">
            Frequently Asked <span className="text-[#25baff]">Questions</span>
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
                      gsap.to(content, { height: 0, opacity: 0, duration: 0.4 });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prev = faqRefs.current[activeFaq]?.querySelector(".faq-content");
                        gsap.to(prev, { height: 0, opacity: 0, duration: 0.4 });
                      }
                      gsap.set(content, { height: "auto" });
                      gsap.fromTo(content, { height: 0, opacity: 0 }, { height: content.offsetHeight, opacity: 1, duration: 0.5 });
                      setActiveFaq(i);
                    }
                  }}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-base md:text-lg text-[#020202] hover:bg-gray-50 transition"
                >
                  <span className={activeFaq === i ? "text-[#25baff]" : ""}>{faq.q}</span>
                  {activeFaq === i ? <FiMinus className="text-[#25baff] text-xl" /> : <FiPlus className="text-gray-600 text-xl" />}
                </button>
                <div className="faq-content overflow-hidden h-0 opacity-0 px-6">
                  <p className="py-6 text-sm md:text-base text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center bg-[#020202] border-t border-[#25baff]/30">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Let's Grow Your Practice <span className="text-[#a8d97c]">Together</span>
        </h2>
        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-5xl mx-auto">
          Stop wasting budget on ads that disappear. Build an asset that brings patients month after month.
        </p>
        <p className="mt-8 text-sm text-gray-500">Limited audit slots available this month — claim yours before they're gone.</p>
      </section>

    </div>
  );
}