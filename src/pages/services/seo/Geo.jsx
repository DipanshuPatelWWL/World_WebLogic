import { useLayoutEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { TbDeviceIpadShare } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
import {
  FaRobot,
  FaBrain,
  FaSearch,
  FaDatabase,
  FaUserCheck,
  FaLink,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

import Banner from "../../../assets/services/geo/banner.avif";
import Img from "../../../assets/services/geo/img1.jpg";

gsap.registerPlugin(ScrollTrigger);

const FranchiseDigitalMarketing = () => {
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
      question:
        "How can businesses future-proof their GEO strategies as AI models continue to evolve?",
      answer:
        "Businesses can future-proof their Generative Engine Optimization (GEO) strategies by building adaptable content architectures, implementing advanced structured data, strengthening entity-based authority, and continuously monitoring AI search updates. Prioritizing intent-driven, conversational, and semantically rich content ensures long-term visibility across AI-powered search platforms.",
    },
    {
      question: "Does GEO require website modifications?",
      answer:
        "Yes, GEO may require strategic technical enhancements such as improving site speed, strengthening mobile responsiveness, implementing structured data markup, refining internal linking, and optimizing content for AI-driven indexing and generative search inclusion.",
    },
    {
      question:
        "How does GEO improve performance in voice search and AI assistants?",
      answer:
        "GEO enhances visibility in voice search and AI assistants by optimizing content for natural language queries, conversational phrasing, and intent-based responses. This increases the likelihood of your content being surfaced in AI-driven voice results and chat-based search experiences.",
    },
    {
      question: "Will GEO replace traditional SEO, or do they work together?",
      answer:
        "GEO does not replace traditional SEO—it complements and evolves alongside it. While traditional SEO focuses on keyword rankings and organic listings, GEO optimizes content for AI-generated answers and conversational search results, ensuring comprehensive visibility across both search ecosystems.",
    },
    {
      question: "Is GEO beneficial for all types of businesses?",
      answer:
        "Absolutely. E-commerce brands, SaaS companies, healthcare providers, financial services, local businesses, publishers, and enterprise organizations can all benefit from GEO. Any business that depends on organic visibility should optimize for AI-driven search environments.",
    },
    {
      question: "What types of content should be optimized for GEO?",
      answer:
        "Core website pages, landing pages, blog articles, product and service descriptions, FAQs, knowledge base content, video transcripts, case studies, whitepapers, reviews, testimonials, and even social microcontent should be strategically optimized to align with AI-driven search models.",
    },
    {
      question: "What are common mistakes when implementing GEO strategies?",
      answer:
        "Common GEO mistakes include overusing AI-generated content without human refinement, neglecting structured data, ignoring entity-based optimization, failing to optimize for conversational queries, and not aligning GEO efforts with traditional SEO strategies for balanced, long-term visibility.",
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
            Generative Engine Optimization
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
            Elevate Your Brand with Generative Engine
            <span className="text-[#25baff]"> Optimization (GEO)</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Search has entered a new era—one powered by artificial intelligence.
            Traditional SEO alone is no longer enough to secure visibility in a
            landscape where AI-driven systems interpret intent, generate
            summaries, and deliver instant answers. As search engines evolve to
            prioritize dynamic, context-aware results, brands must adapt to
            remain competitive. With a growing number of users relying on
            AI-generated search experiences—and adoption accelerating
            rapidly—optimizing for generative search is no longer optional. It’s
            a strategic necessity.
          </p>

          <p className="text-gray-700 leading-relaxed">
            That’s where Generative Engine Optimization (GEO) makes the
            difference. GEO is designed to align your content with AI-powered
            search models, ensuring your brand is not just indexed—but
            understood, trusted, and featured within AI-generated responses. By
            optimizing for semantic relevance, structured data, topical
            authority, and intent-driven queries, we position your business to
            stand out in this new search environment.
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

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Key Advantages of Generative Engine Optimization
            <span className="text-[#25baff]"> (GEO) Services</span>
          </h2>

          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Our franchise digital marketing services cover:
          </p> */}
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AiOutlineAudit,
                head: "Greater Visibility in AI-Driven Search Results",
                text: "Our Generative Engine Optimization (GEO) services help your business achieve stronger visibility, authority, and sustainable organic growth. By optimizing your content to appear in AI-generated responses across platforms like Google AI Overviews, ChatGPT, and Gemini.",
              },
              {
                icon: FaSearchengin,
                head: "Rank in Featured Snippets",
                text: "As user search behavior evolves with AI-powered experiences like Google’s Search Generative Experience (SGE) and ChatGPT, ranking in Featured Snippets and “People Also Ask” results has become more essential than ever. Our Generative Engine Optimization (GEO) services strategically refine your content structure, enhance semantic relevance, and implement advanced schema markup to increase your chances of appearing in featured answers and PAA boxes—while simultaneously strengthening your overall organic rankings.",
              },
              {
                icon: TbDeviceIpadShare,
                head: "AI-Driven Growth in Local Search Traffic",
                text: "Our Generative Engine Optimization (GEO) strategies enhance your local presence by optimizing your content, structured data, and location signals to improve visibility in Google’s Local Pack, Maps results, Knowledge Panels, and AI-driven regional searches—helping you capture more targeted local traffic and strengthen your community reach.",
              },
              {
                icon: FaSearchengin,
                head: "Entity-Based SEO",
                text: "Generative AI prioritizes well-structured, high-quality content that clearly defines topics, context, and relationships. Simply publishing content is no longer enough—search engines now evaluate how effectively your website establishes entities and authority. Our Generative Engine Optimization (GEO) approach aligns your web pages and blog content with entity-based SEO principles, strengthening semantic relevance and topical clarity. This increases your chances of appearing in AI-generated results, featured snippets, and authoritative search placements.",
              },
              {
                icon: GrValidate,
                head: "Stronger Brand Authority",
                text: "As more users rely on AI-driven tools like ChatGPT from OpenAI and Gemini by Google for instant answers, your brand’s visibility within these responses directly impacts credibility and trust. Our Generative Engine Optimization (GEO) strategies position your business to be recognized, referenced, and surfaced in AI-generated results—strengthening your brand authority while expanding your overall online presence.",
              },
              {
                icon: TbBrandAdobeIllustrator,
                head: "Future-Proof Your Strategy for AI Algorithms",
                text: "As AI-powered search continues to evolve, staying ahead of algorithmic shifts is no longer optional—it’s essential for sustained growth. Our Generative Engine Optimization (GEO) strategies help your business adapt proactively to emerging AI search models, ensuring consistent visibility, broader market reach, and a strong position as an industry leader in the era of AI-driven discovery.",
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
            Talk to Our AI SEO Experts Now
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Identify gaps, Improve strategies, & Increase your ROI
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How Does Generative Engine Optimization
            <span className="text-[#25baff]"> (GEO) Work?</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Natural Language Understanding (NLU)",
                text: "Modern AI-driven search engines interpret language much like humans do—they go beyond simple keyword matching to analyze context, meaning, and user intent. Instead of focusing only on a phrase like “best running shoes,” AI evaluates the searcher’s behavior, preferences, and past interactions to determine whether they’re looking for trail running shoes, road running shoes, or performance footwear.",
              },
              {
                head: "Search Generative Experience (SGE)",
                text: "Search has evolved beyond simply displaying a list of links. With Google’s AI-powered Search Generative Experience (SGE), users now receive instant, summarized answers directly within the search results. Instead of browsing multiple pages for “best shoes,” AI analyzes top models, compares features, highlights prices, and summarizes reviews—all in one concise, easy-to-digest overview. This shift emphasizes the need for content that is structured, authoritative, and optimized for AI-generated summaries.",
              },
              {
                head: "Machine Learning & Personalized Search",
                text: "When someone searches for “best shoes,” the results can vary significantly—a student may see affordable options, while a graphic designer might be shown premium, performance-focused models. This difference reflects how AI and machine learning tailor search results based on location, browsing history, preferences, and user behavior.",
              },
              {
                head: "Visual & Multimodal Search Optimization",
                text: "Search is no longer limited to text—users now discover products and services through images, voice commands, and video queries. Instead of typing “best shoes online,” they can use tools like Google Lens to upload a photo and instantly find similar options. Our Generative Engine Optimization (GEO) strategies ensure your content, images, and structured data are optimized for AI-driven multimodal search, increasing your visibility across image, voice, and video-based search experiences.",
              },
              {
                head: "Conversational & Voice Search Optimization",
                text: "Search behavior is becoming more conversational, with users speaking to search engines the way they would to a personal assistant. Instead of typing “best shoes in NY,” they might say, “Find me the best shoes in New York.” AI systems interpret natural speech patterns, context, and intent to deliver precise, spoken-friendly answers. Our Generative Engine Optimization (GEO) strategies refine your content for voice-first and conversational queries, helping your business appear prominently in AI-driven voice and chat-based search results.",
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

      <section className="relative py-20 px-6 bg-gradient-to-br from-[#eaf6ff] via-[#f4f9ff] to-[#e6f3ff] overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              How GEO Works Differently
              <span className="text-[#25baff]"> from SEO</span>
            </h2>

            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
              SEO improves rankings in traditional search engines. GEO is built
              for AI-powered generative search, focusing on entities, context,
              and AI answer visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* GEO CARD */}
            <div
              className="group relative bg-white/70 backdrop-blur-xl border border-blue-200 
                          rounded-3xl p-10 shadow-lg transition-all duration-500
                          hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(37,99,235,0.25)]
                          hover:border-blue-400"
            >
              <h3 className="text-2xl font-bold text-[#25baff] mb-8 flex items-center gap-3">
                <FaRobot className="text-3xl group-hover:scale-110 transition duration-300" />
                GEO (Generative Engine Optimization)
              </h3>

              <ul className="space-y-6 text-gray-700">
                <li className="flex gap-4">
                  <FaBrain className="text-[#25baff]text-xl mt-1 group-hover:text-cyan-500 transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      AI-Intent Focused
                    </span>
                    <p className="text-sm mt-1">
                      Optimizes content for conversational queries and AI-driven
                      intent understanding rather than just keyword matching.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaDatabase className="text-[#25baff]text-xl mt-1 group-hover:text-cyan-500 transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Entity & Structured Data
                    </span>
                    <p className="text-sm mt-1">
                      Uses schema, knowledge graphs, and entity signals to
                      improve AI trust and authority.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaSearch className="text-[#25baff]text-xl mt-1 group-hover:text-cyan-500 transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Optimized for AI Answers
                    </span>
                    <p className="text-sm mt-1">
                      Creates content designed to be quoted, summarized, and
                      surfaced inside AI-generated responses.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaUserCheck className="text-[#25baff]text-xl mt-1 group-hover:text-cyan-500 transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Personalized Search Experience
                    </span>
                    <p className="text-sm mt-1">
                      Adapts to user behavior and context for dynamic AI search
                      results.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* SEO CARD */}
            <div
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 
                          rounded-3xl p-10 shadow-lg transition-all duration-500
                          hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                          hover:border-gray-400"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <FaGlobe className="text-3xl group-hover:scale-110 transition duration-300" />
                SEO (Search Engine Optimization)
              </h3>

              <ul className="space-y-6 text-gray-700">
                <li className="flex gap-4">
                  <FaSearch className="text-gray-600 text-xl mt-1 group-hover:text-black transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Keyword-Centric Strategy
                    </span>
                    <p className="text-sm mt-1">
                      Focuses on keyword placement, meta tags, and density to
                      rank higher in traditional search engines.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaLink className="text-gray-600 text-xl mt-1 group-hover:text-black transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Backlink Building
                    </span>
                    <p className="text-sm mt-1">
                      Improves rankings through link authority and domain trust
                      signals.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaDatabase className="text-gray-600 text-xl mt-1 group-hover:text-black transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Crawler Optimization
                    </span>
                    <p className="text-sm mt-1">
                      Structured for search engine bots with sitemaps, indexing,
                      and technical SEO enhancements.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaChartLine className="text-gray-600 text-xl mt-1 group-hover:text-black transition" />
                  <div>
                    <span className="font-semibold text-[#0b3253]">
                      Ranking Metrics Driven
                    </span>
                    <p className="text-sm mt-1">
                      Focuses on CTR, bounce rate, page speed, and SERP position
                      tracking.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Identify gaps, Improve strategies, & Increase your ROI
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Generative Engine Optimization
            <span className="text-[#25baff]"> (GEO) Process</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Comprehensive GEO Audit & Analysis",
                text: "We begin by conducting an in-depth Generative Engine Optimization (GEO) audit to evaluate your current visibility across AI-driven search platforms. This includes assessing content relevance and semantic strength, identifying gaps in structured data and entity-based optimization, and reviewing technical performance to ensure your website is fully optimized for AI-powered crawling, indexing, and generative search inclusion.",
              },
              {
                head: "AI-Powered Keyword & Intent Analysis",
                text: "We leverage advanced AI-driven tools to analyze keyword clusters, search patterns, and user intent across evolving search environments. Our approach identifies high-impact phrases tailored for generative search and conversational queries, while optimizing your content for long-tail, intent-based, and multimodal search opportunities—ensuring stronger relevance and visibility in AI-powered results.",
              },
              {
                head: "AI-Focused Content Optimization",
                text: "We strategically refine your content to align with AI algorithms powering generative search experiences. This includes structuring pages for enhanced machine readability, strengthening entity recognition, and improving semantic clarity. Our optimization approach also targets featured snippets, AI overviews, and voice search results—ensuring your content is positioned for maximum visibility in AI-driven search environments.",
              },
              {
                head: "Conversational SEO Implementation",
                text: "We apply advanced conversational SEO techniques to ensure your content performs effectively in voice search and AI-powered chat-based queries. By developing structured FAQ-style content and refining language to reflect natural, human-like conversations, we increase your chances of being featured in AI-generated responses and spoken search results.",
              },
              {
                head: "Advanced Schema Markup Implementation",
                text: "We implement advanced structured data to enhance AI comprehension, contextual clarity, and search visibility. By optimizing schema markup for Knowledge Graph inclusion and rich snippet eligibility, we strengthen your content’s machine readability. Our approach ensures full compatibility with AI-driven search systems, increasing your chances of enhanced listings and generative result placements.",
              },
              {
                head: "NLP & Semantic Search Optimization",
                text: "We enhance your content with advanced Natural Language Processing (NLP) and semantic search strategies to align with how AI systems interpret context and intent. By implementing entity-based SEO, refining contextual relevance, and applying structured semantic markup, we improve AI comprehension—boosting your potential for higher rankings in generative and AI-driven search results.",
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

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            
            </p> */}

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Why Choose Digital
              <span className="text-[#25baff]"> WebGuider</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "GEO Experts",
              "Customized GEO Strategies",
              "Client-Focused Approach",
              "Proven Results",
              "Insightful Data Analysis",
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

export default FranchiseDigitalMarketing;
