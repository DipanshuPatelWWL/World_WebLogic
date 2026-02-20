import { useLayoutEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { LuGoal } from "react-icons/lu";
import { TbSchema } from "react-icons/tb";
import { TbSettingsSearch } from "react-icons/tb";
import { MdSettingsVoice } from "react-icons/md";
import { motion } from "framer-motion";
import { FaSearch, FaCogs, FaComments } from "react-icons/fa";
import { FaRobot, FaCrown } from "react-icons/fa";

import Banner from "../../../assets/services/aeo/banner.avif";
import Img from "../../../assets/services/aeo/img.jpg";
import Card1 from "../../../assets/services/aeo/card1.avif";
import Card2 from "../../../assets/services/aeo/card2.avif";
import Card3 from "../../../assets/services/aeo/card3.avif";
import Card4 from "../../../assets/services/aeo/card4.JPG";
import Card5 from "../../../assets/services/aeo/card5.avif";
import Card6 from "../../../assets/services/aeo/card6.avif";

gsap.registerPlugin(ScrollTrigger);

const Aeo = () => {
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
      question: "I already have SEO. Do I really need AEO as well?",
      answer:
        "Yes. Traditional SEO helps you rank in search results, but AEO ensures your brand is selected and delivered in AI-generated answers. As search evolves toward conversational and zero-click experiences, AEO positions your business as the trusted response—not just another link.",
    },
    {
      question: "How soon can I expect to see results?",
      answer:
        "Most businesses begin noticing measurable visibility improvements within 30–60 days. However, the timeline depends on your industry, competition, and the current structure of your website.",
    },
    {
      question: "I run a small or local business. Is AEO still worth it?",
      answer:
        "Absolutely. Local and niche businesses benefit significantly from AEO, especially for voice searches and location-based AI queries. It helps you appear when customers ask for services, recommendations, or solutions in your area.",
    },
    {
      question: "Does AEO improve voice search visibility?",
      answer:
        "Yes. AEO optimizes your content for conversational queries and structured answers, increasing the likelihood that voice assistants and AI platforms select and deliver your business as the top response.",
    },
    {
      question: "What kind of changes will be made to my website?",
      answer:
        "We implement structured data, schema markup, entity optimization, and AI-friendly content enhancements. These improvements strengthen machine readability and authority without disrupting your existing design or functionality.",
    },
    {
      question: "How do I measure AEO performance?",
      answer:
        "We track AI visibility indicators, featured snippet presence, conversational query performance, and structured data impact—providing clear insights into how and where your brand is being surfaced.",
    },
    {
      question: "Is AEO a one-time implementation?",
      answer:
        "No. AEO is an ongoing process. As AI systems evolve, continuous optimization, monitoring, and refinement are essential to maintain visibility and authority in AI-driven search environments.",
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
          <p className="mt-6 text-lg text-gray-300">
            Answer Engine Optimization
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            AEO: Your Shortcut to AI-First
            <span className="text-[#25baff]"> Visibility</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Search has fundamentally evolved. Today’s users don’t type
            keywords—they ask direct questions and expect instant, accurate
            answers. In an AI-driven landscape, visibility depends on relevance,
            clarity, and authority. If your brand isn’t optimized to respond
            intelligently, it risks being overlooked in the moments that matter
            most.
          </p>

          <p className="text-gray-700 leading-relaxed">
            That’s where Answer Engine Optimization (AEO) makes the difference.
            Instead of competing for traditional rankings, AEO positions your
            brand as the selected answer across AI-powered platforms and voice
            assistants your customers trust. With structured content,
            entity-driven strategy, and authority-focused optimization, we turn
            your website into an AI-ready answer hub—because in the AI-first
            era, showing up isn’t enough. You need to be the answer.
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

      <section className="relative bg-black text-white py-24 overflow-hidden">
        {/* Banner Content */}
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Traditional SEO Isn’t Enough —
            <span className="text-cyan-400">
              {" "}
              Answer Engine Optimization Is the Future
            </span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-4">
            Search has evolved beyond keywords. Today’s users rely on AI tools,
            voice assistants, and intelligent search systems to receive direct,
            conversational responses instantly.
          </p>

          <p className="text-gray-400 max-w-3xl mx-auto">
            If your content isn’t structured for AI-driven answers, you're not
            just missing rankings — you're missing visibility, trust, and
            growth.
          </p>
        </div>

        {/* Hanging Cards Container */}
        <div className="relative mt-24 flex flex-col md:flex-row justify-center items-end gap-16 px-6">
          {/* CARD 1 */}
          <div className="relative group">
            {/* Hanging Tail */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1 h-20 bg-white/40"></div>

            <motion.div
              whileHover={{ rotate: -12, y: -15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-80 bg-pink-100 text-gray-800 rounded-3xl p-8 shadow-2xl 
            rotate-[-6deg] transform transition-all duration-500
            group-hover:shadow-pink-300/50"
            >
              <div className="bg-pink-500 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <FaSearch size={22} />
              </div>

              <h3 className="text-xl font-bold mb-3">01 — Research Deeply</h3>
              <p className="text-sm leading-relaxed">
                Understand how your audience truly searches — analyze intent,
                conversational patterns, AI prompts, and voice behavior before
                creating content.
              </p>
            </motion.div>
          </div>

          {/* CARD 2 */}
          <div className="relative group">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1 h-20 bg-white/40"></div>

            <motion.div
              whileHover={{ rotate: 12, y: -20 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-80 bg-blue-100 text-gray-800 rounded-3xl p-8 shadow-2xl 
            rotate-[6deg] transform transition-all duration-500
            group-hover:shadow-blue-300/50"
            >
              <div className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <FaCogs size={22} />
              </div>

              <h3 className="text-xl font-bold mb-3">02 — Structure Smartly</h3>
              <p className="text-sm leading-relaxed">
                Build content with schema, semantic structure, and AI-friendly
                formatting so machines can interpret and surface your answers
                correctly.
              </p>
            </motion.div>
          </div>

          {/* CARD 3 */}
          <div className="relative group">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1 h-20 bg-white/40"></div>

            <motion.div
              whileHover={{ rotate: -14, y: -18 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-80 bg-green-100 text-gray-800 rounded-3xl p-8 shadow-2xl 
            rotate-[-4deg] transform transition-all duration-500
            group-hover:shadow-green-300/50"
            >
              <div className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <FaComments size={22} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                03 — Deliver Clear Answers
              </h3>
              <p className="text-sm leading-relaxed">
                Create authoritative, concise responses that AI systems can
                quote directly — positioning your brand as the trusted answer
                source.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Strategic AEO Solutions for AI-First
            <span className="text-[#25baff]"> Visibility</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-5">
            We don’t just optimize pages—we build answer-focused content
            strategies designed to increase visibility and authority across
            AI-driven platforms.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: RiUserSearchFill,
                head: "AI Visibility Audit",
                text: "Can AI systems truly discover and understand your content? Our Answer Engine Optimization services evaluate how effectively your website is indexed, structured, and interpreted by AI-driven search and large language models—identifying gaps in clarity, authority, and entity signals so your content isn’t just found, but selected and referenced in AI-generated answers.",
              },
              {
                icon: FaSearchengin,
                head: "Prompt Research & Intent Mapping",
                text: "Understand what users truly ask AI. We analyze natural language prompts, semantic patterns, and question structures to align your content precisely with real user intent—ensuring it matches what your audience is asking and what AI systems are programmed to deliver.",
              },
              {
                icon: LuGoal,
                head: "Answer-Focused Content Strategy",
                text: "Become the answer AI selects. Our AEO content strategy delivers clear, structured, and authority-driven content designed for zero-click visibility, featured snippets, and AI-generated summaries—ensuring your brand is surfaced, trusted, and prioritized across modern search experiences.",
              },
              {
                icon: TbSchema,
                head: "Entity & Schema Structuring",
                text: "Is your content truly machine-readable and semantically clear? We implement entity-based optimization, schema markup, and structured data frameworks to strengthen how AI systems interpret your business, services, and authority—ensuring your brand is accurately understood and confidently surfaced in AI-driven results.",
              },
              {
                icon: TbSettingsSearch,
                head: "Generative Engine Optimization (GEO)",
                text: "Stand out in AI-generated responses. We optimize your content using entity alignment, strategic prompt triggers, authoritative citations, and vector-based relevance signals—ensuring generative AI tools recognize, reference, and prioritize your brand in conversational answers and AI-driven summaries.",
              },
              {
                icon: MdSettingsVoice,
                head: "Voice Assistant SEO",
                text: "Get selected by voice-first platforms. We optimize your content for natural language queries using conversational structuring, strategic Q&A formatting, and enhanced local schema—ensuring your brand is clearly understood and confidently delivered across voice-enabled search experiences.",
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

      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b3253] mb-6 leading-tight"></h2>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#020202] mb-10">
            Why Answer Engine Optimization Is the Intelligent
            <span className="text-[#25baff]"> Evolution of SEO</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-4">
            In today’s AI-driven ecosystem, visibility alone isn’t enough. You
            must become the answer selected by AI systems, voice assistants, and
            smart search engines.
          </p>

          <p className="text-gray-500 font-medium">
            SEO Helps You Appear. AEO Helps You Get Chosen.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-stretch">
          {/* Traditional SEO */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 
          rounded-3xl p-8 shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center mb-6">
              <FaSearch className="text-gray-600" />
            </div>

            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Traditional SEO
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>Targets keyword-based rankings</li>
              <li>Focuses on blue-link visibility</li>
              <li>Optimizes titles, meta, backlinks</li>
              <li>Measures success through SERP position</li>
              <li>Requires ongoing manual adjustments</li>
            </ul>
          </motion.div>

          {/* AEO Highlight Card */}
          <motion.div
            whileHover={{ y: -15, scale: 1.03 }}
            className="relative bg-gradient-to-br from-blue-600 to-cyan-500 
          text-white rounded-3xl p-10 shadow-2xl 
          transform md:scale-110 z-10"
          >
            <div className="absolute -top-5 right-6 bg-white text-blue-600 text-xs font-bold px-4 py-1 rounded-full shadow">
              SMARTER STRATEGY
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <FaRobot />
            </div>

            <h3 className="text-xl font-bold mb-6">
              AEO (Answer Engine Optimization)
            </h3>

            <ul className="space-y-4 text-sm leading-relaxed text-blue-100">
              <li>Optimizes for intent & conversational queries</li>
              <li>Designed for AI & voice answer inclusion</li>
              <li>Uses schema & structured intelligence</li>
              <li>Builds entity authority & AI trust</li>
              <li>Optimizes for zero-click & AI-first discovery</li>
              <li>Adapts dynamically to AI evolution</li>
            </ul>
          </motion.div>

          {/* Smart Advantage */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 
          rounded-3xl p-8 shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
              <FaCrown className="text-yellow-500" />
            </div>

            <h3 className="text-xl font-bold mb-6 text-gray-800">
              The Competitive Edge
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>Aligns naturally with real user intent</li>
              <li>Positions your brand as the selected answer</li>
              <li>Enhances eligibility for snippets & voice search</li>
              <li>Builds credibility with AI systems like LLMs</li>
              <li>Captures visibility beyond traditional clicks</li>
              <li>Future-proofs your digital presence</li>
            </ul>
          </motion.div>
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
            Start your AEO journey now.
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Our Proven AEO Framework That Gets You
              <span className="text-[#25baff]"> Selected by AI</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Strategic Discovery & AI Visibility Assessment",
              "Intent-Driven AI Query & Prompt Research",
              "Customized Answer Engine Optimization Roadmap",
              "AI-Ready Technical & Structural Implementation",
              "Conversational, Answer-Focused Content Development",
              "Ongoing AI Performance Monitoring & Refinement",
              "Transparent, Data-Backed Growth Reporting",
              "Entity & Authority Signal Strengthening",
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

      {/* ================= Franchise Results Section ================= */}
      <section className="bg-[#a8d97c] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            If your audience is turning to AI for answers, your brand should be
            the one delivered in response.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Who Is Answer Engine Optimization
            <span className="text-[#25baff]"> Designed For?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card1 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card1}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Local & Service-Based Businesses
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Show up when customers ask AI assistants for trusted local
                recommendations. Our AEO services optimize your business for
                conversational queries like “best dentist near me” or “top-rated
                salon in my area,” ensuring you’re the answer delivered across
                voice search and AI-powered results.
              </p>
            </div>
          </div>

          {/* Card2 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card2}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Online Retail & eCommerce Brands
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When buyers ask AI for product recommendations—like “What’s the
                best smartwatch under $300?”—your brand should be the one
                suggested. Our AEO strategies optimize product content,
                structured data, and intent signals so AI platforms confidently
                surface your offerings in conversational and generative search
                results.
              </p>
            </div>
          </div>

          {/* Card3 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card3}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Professional & Knowledge-Based Services
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lead the conversation when users ask AI complex, research-driven
                questions like “how to choose CRM software” or “best advisor for
                tax planning.” Our AEO approach positions your expertise as the
                trusted source—ensuring AI platforms recognize, reference, and
                recommend your services in high-intent decision-making queries.
              </p>
            </div>
          </div>
          {/* Card4 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card4}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Health, Wellness & Education
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Be the trusted voice when people turn to AI for guidance on
                symptoms, preventive care, mental wellness, or career pathways.
                Our AEO strategies strengthen authority signals, structured
                content, and credibility factors—so AI platforms confidently
                surface your institution or practice when accuracy and trust
                matter most.
              </p>
            </div>
          </div>
          {/* Card5 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card5}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Real Estate, Travel & Experience Providers
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI platforms prioritize credible, location-rich content when
                users ask about “best neighborhoods” or “things to do in Paris.”
                We optimize your digital presence with structured local signals,
                authority content, and contextual relevance—ensuring your brand
                is cited and recommended in AI-driven travel and property
                queries.
              </p>
            </div>
          </div>
          {/* Card6 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card6}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Enterprises Already Investing in SEO
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enhance your existing SEO strategy with AI-ready enhancements.
                We layer structured data, entity optimization, and
                prompt-aligned content frameworks onto your current
                efforts—transforming traditional rankings into AI-selected
                visibility across conversational and generative search
                platforms.
              </p>
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

export default Aeo;
