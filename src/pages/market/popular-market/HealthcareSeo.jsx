import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaSearch,
  FaChartLine,
  FaGoogle,
  FaShieldAlt,
  FaCheckCircle,
  FaHeartbeat,
  FaAward,
  FaClipboardList,
  FaLink,
  FaHospital,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


import Banner from "../../../assets/market/healthseo/banner.avif";
import DoctorPatient from "../../../assets/market/healthseo/img1.avif";
import AnalyticsImg from "../../../assets/market/healthseo/img2.avif";
import GMBImg from "../../../assets/market/healthseo/img3.avif";
import TeamImg from "../../../assets/market/healthseo/img4.avif";

export default function HealthcareSeo() {
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
            scrollTrigger: { trigger: item, start: "top 85%" },
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
      q: "What is Healthcare SEO, and why is it essential for healthcare organizations?",
      a: "Healthcare SEO tailors search optimization for medical practices to improve visibility, attract relevant patients, and build trust while complying with regulations like HIPAA.",
    },
    {
      q: "How do SEO Services help in the Healthcare Industry?",
      a: "They drive qualified patient traffic, boost local rankings, enhance reputation through reviews, and increase bookings without heavy ad reliance.",
    },
    {
      q: "Is Healthcare SEO different from standard SEO practices?",
      a: "Yes — it emphasizes E-E-A-T, HIPAA compliance, medical schema, and sensitive content handling.",
    },
    {
      q: "How much does Healthcare Services SEO cost?",
      a: "Varies by scope; typically $1,500–$5,000/month for full-service, depending on competition and practice size. Contact for custom proposal.",
    },
    {
      q: "What are local SEO strategies for healthcare practices?",
      a: "Google Business Profile optimization, consistent NAP citations, review management, local keywords, and geo-targeted content.",
    },
    {
      q: "How long does it take to see results from Healthcare SEO efforts?",
      a: "3–6 months for noticeable improvements; 6–12 months for top competitive rankings.",
    },
    {
      q: "What is the impact of voice search on healthcare SEO?",
      a: "Voice queries favor local pack results and conversational long-tail keywords.",
    },
    {
      q: "Do Healthcare SEO services include content creation and marketing?",
      a: "Yes — educational blogs, service pages, FAQs, and patient-focused content to build authority.",
    },
    {
      q: "What is the importance of mobile optimization for healthcare SEO?",
      a: "Most patients search on mobile; fast, responsive sites improve rankings and experience.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Website Analysis & Technical Audit",
      icon: <FaChartLine />,
      desc: "Identify issues, optimize navigation, Core Web Vitals, and UX.",
    },
    {
      num: "02",
      title: "Healthcare Local SEO & Competitor Analysis",
      icon: <FaGoogle />,
      desc: "Outrank locals with targeted strategies and insights.",
    },
    {
      num: "03",
      title: "Keyword Research for Healthcare",
      icon: <FaSearch />,
      desc: "High-intent terms with user intent focus.",
    },
    {
      num: "04",
      title: "On-Page SEO Optimization",
      icon: <FaClipboardList />,
      desc: "Titles, meta, content, mobile UX, schema.",
    },
    {
      num: "05",
      title: "Google My Business Optimization",
      icon: <FaHospital />,
      desc: "Full setup, posts, reviews, NAP consistency.",
    },
    {
      num: "06",
      title: "High-Quality Link Building",
      icon: <FaLink />,
      desc: "Ethical backlinks from authoritative health sites.",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="w-full overflow-hidden bg-[#020202] text-white"
    >
      {/* HERO - Matched style: dark overlay, white text, accent button */}
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
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Healthcare SEO
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Boost Local Rankings • HIPAA-Compliant SEO • Patient-Centric
            Strategies • Maximize Online Visibility
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="gsap-item text-3xl md:text-5xl font-bold mb-6">
            75% of Patients Start with{" "}
            <span className="text-[#25baff]">Google</span>
          </h2>
          <p className="gsap-item text-lg md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Most don't go beyond top 3 results. Our strategies put your clinic
            first for high-intent searches like “urgent care near me”.
          </p>
        </div>
      </section>

      {/* WHAT IS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="gsap-item">
            <h2 className="text-4xl font-bold mb-6 text-white">
              What is{" "}
              <span className="text-[#25baff]">
                Healthcare Marketing Services?
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-6 text-gray-300">
              Educating, informing, and motivating with evidence-based health
              messages. Builds brand, streamlines acquisition, delivers timely
              local info, engages patients, generates leads.
            </p>
            <ul className="space-y-4">
              {[
                "Building trust & brand image",
                "Efficient patient acquisition",
                "Right info at right time",
                "Reputation via reviews",
                "Coordinated lead generation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <FaCheckCircle className="text-[#a8d97c] mt-1 text-lg group-hover:scale-110 transition" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={DoctorPatient}
              alt="Doctor consulting patient"
              className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)]"
            />
          </motion.div>
        </div>
      </section>

      {/* IMPORTANCE + LEVERAGE */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-full w-full overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={AnalyticsImg}
              alt="Healthcare analytics"
              className="w-full h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
          <div className="gsap-item">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Importance of{" "}
              <span className="text-[#25baff]">Google Ranking</span> for Your
              Clinic
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Top rankings = perceived quality. We help dominate searches and
              convert visibility to bookings.
            </p>
            <div className="grid gap-6">
              {[
                {
                  title: "Patients Research Online",
                  desc: "Visible contact & name on SERP for easy discovery.",
                },
                {
                  title: "Information Builds Trust",
                  desc: "Informative content establishes credibility.",
                },
                {
                  title: "More Recommendations",
                  desc: "Reviews & social proof attract new patients.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-[#25baff]/50 transition group"
                >
                  <h3 className="text-xl font-semibold text-[#a8d97c] mb-2 group-hover:text-[#25baff] transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="gsap-item text-4xl font-bold text-white">
            Proven Activities to{" "}
            <span className="text-[#a8d97c]">Boost Revenue</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="gsap-item relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#25baff]/70 hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)] transition-all duration-500 group hover:-translate-y-4"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#25baff] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition">
                {step.num}
              </div>
              <div className="text-5xl text-[#a8d97c] mt-10 mb-6 group-hover:scale-110 transition">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#25baff] transition">
                {step.title}
              </h4>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={GMBImg}
            alt="Modern healthcare facility"
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* WHY US */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-4xl font-bold text-black">
            Why Choose Us for{" "}
            <span className="text-[#25baff]">Healthcare SEO</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaShieldAlt />,
              title: "HIPAA-Compliant",
              desc: "Secure, ethical, regulation-focused.",
            },
            {
              icon: <FaHeartbeat />,
              title: "Patient-Centric",
              desc: "Trust & education first.",
            },
            {
              icon: <FaAward />,
              title: "Proven Growth",
              desc: "Rankings, leads, revenue results.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="gsap-item bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#25baff]/60 hover:-translate-y-4 transition group"
            >
              <div className="text-6xl text-[#a8d97c] mb-6 group-hover:scale-110 group-hover:text-[#25baff] transition">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#25baff] transition">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
        <motion.div className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          <img src={TeamImg} alt="Medical team" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Attract More <span className="text-[#25baff]">Patients</span>
          ?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto">
          Get your FREE Healthcare SEO Audit today.
        </p>
        <NavLink to="/contact">
          <button className="px-12 py-6 rounded-full cursor-pointer bg-[#25baff] text-black font-bold text-xl shadow-xl hover:shadow-[#25baff]/70 transition transform hover:-translate-y-2">
            Contact Us Now
          </button>
        </NavLink>
      </section>

      {/* FAQ */}
      <section
        ref={addSectionRef}
        className="py-28 px-6 bg-gradient-to-b from-white to-blue-50 text-black relative overflow-hidden"
      >
        {/* Background Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
  bg-[#25baff]/10 blur-[140px] rounded-full pointer-events-none"
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="gsap-item text-4xl font-bold text-center mb-16">
            Healthcare SEO <span className="text-[#25baff]">FAQs</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                ref={(el) => (faqRefs.current[i] = el)}
                className={`gsap-item rounded-2xl overflow-hidden border transition-all duration-300
          ${activeFaq === i
                    ? "border-[#25baff] shadow-[0_0_30px_rgba(37,186,255,0.35)]"
                    : "border-gray-200 hover:border-[#25baff]/60 hover:shadow-[0_0_25px_rgba(37,186,255,0.25)]"
                  } bg-white`}
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
                  className="w-full flex justify-between items-center px-8 py-6 text-left font-semibold text-lg transition"
                >
                  <span
                    className={`transition ${activeFaq === i ? "text-[#25baff]" : "text-black"
                      }`}
                  >
                    {faq.q}
                  </span>

                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-full transition
              ${activeFaq === i
                        ? "bg-[#25baff] text-white shadow-lg shadow-[#25baff]/40"
                        : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {activeFaq === i ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                <div className="faq-content overflow-hidden h-0 opacity-0 px-8">
                  <p className="py-6 text-base text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center bg-[#020202] border-t border-[#25baff]/30">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
          Grow Your Practice <span className="text-[#a8d97c]">Together</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-5xl mx-auto">
          Stop losing patients to competitors. Build lasting visibility.
        </p>
      </section>
    </div>
  );
}
