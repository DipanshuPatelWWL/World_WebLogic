import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiRelationshipBounds } from "react-icons/gi";
import { RxComponent1 } from "react-icons/rx";
import { TbSeo } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";

import Banner from "../../../assets/services/voiceOptimization/banner.avif";
import Img1 from "../../../assets/services/voiceOptimization/img1.jpg";
import Img2 from "../../../assets/services/voiceOptimization/img2.avif";
import Img3 from "../../../assets/services/voiceOptimization/img3.avif";
import Img4 from "../../../assets/services/voiceOptimization/img4.avif";
import Img5 from "../../../assets/services/voiceOptimization/img5.avif";
import Img6 from "../../../assets/services/voiceOptimization/img6.jpg";
import Img7 from "../../../assets/services/voiceOptimization/img7.avif";
import Img8 from "../../../assets/services/voiceOptimization/img8.avif";


gsap.registerPlugin(ScrollTrigger);

const VoiceSearchOptimization = () => {
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
        "Is voice search optimization only important for local businesses?",
      answer:
        "No, voice search optimization benefits both local and online businesses. While it significantly improves visibility for location-based searches, eCommerce, SaaS, and service-based businesses can also capture high-intent traffic through conversational and question-based queries.",
    },
    {
      question: "How does voice search optimization improve user experience?",
      answer:
        "Voice SEO enhances website structure, readability, speed, and mobile responsiveness. By providing clear, concise, and well-structured answers, it makes it easier for users to quickly find the information they need — improving engagement and overall satisfaction.",
    },
    {
      question:
        "Does voice search optimization help with traditional SEO rankings?",
      answer:
        "Yes, many voice SEO strategies — such as creating high-quality content, optimizing for featured snippets, improving site speed, and implementing structured data — also strengthen traditional search engine rankings.",
    },
    {
      question: "Which industries benefit most from voice search optimization?",
      answer:
        "Industries like healthcare, hospitality, restaurants, real estate, eCommerce, and local services often see strong results from voice SEO. However, any business targeting users who seek quick, conversational answers can benefit from voice search optimization.",
    },
    {
      question: "Will voice search SEO increase visibility on smart devices?",
      answer:
        "Yes, optimizing for natural language queries, featured snippets, and structured data improves your chances of appearing on smartphones, smart speakers, and other voice-enabled devices powered by virtual assistants.",
    },
    {
      question: "Can voice search optimization help target long-tail keywords?",
      answer:
        "Absolutely. Voice searches are typically longer and more conversational, making them ideal for targeting long-tail keywords. This helps attract users with specific intent, leading to higher-quality traffic and better conversion rates.",
    },
    {
      question:
        "Does voice search optimization improve chances of getting featured snippets?",
      answer:
        "Yes, voice assistants often pull answers from featured snippets. By structuring content clearly and providing concise responses to common questions, voice SEO significantly increases your chances of earning position-zero rankings.",
    },
  ];

  const accordionData = [
    {
      title: "Proven Voice Search Expertise",
      content:
        "An experienced voice search optimization agency analyzes your competitors, identifies conversational keyword gaps, and builds a data-driven strategy to help you secure featured snippets and rank for high-intent voice queries.",
    },
    {
      title: "Holistic SEO Enhancement",
      content:
        "Voice SEO goes beyond conversational content. It strengthens your overall SEO foundation, including on-page optimization, internal linking, mobile responsiveness, page speed, and structured content — delivering consistent traffic, leads, and sales.",
    },
    {
      title: "Advanced Structured Data Implementation",
      content:
        "Professional agencies implement speakable, FAQ, and schema markup to help search engines better understand your content. This technical optimization improves your chances of being selected as a trusted voice search result.",
    },
    {
      title: "Future-Ready Search Strategy",
      content:
        "Voice search continues to grow with evolving algorithms and AI assistants. A specialized agency keeps your strategy updated with emerging trends, ensuring long-term visibility and sustained search performance.",
    },
    {
      title: "Higher Intent & Qualified Leads",
      content:
        "Voice queries often indicate strong purchase intent. By targeting natural-language and action-driven searches, voice SEO helps attract ready-to-convert users — increasing qualified leads, conversions, and overall revenue.",
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
            Voice Search Optimization
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
            What is Voice Search
            <span className="text-[#25baff]"> Optimization?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Voice search optimization is the process of improving your website
            so it can rank for spoken search queries made through voice
            assistants like Siri, Alexa, and Google Assistant. Unlike typed
            searches, voice queries are more conversational and question-based.
            As voice search continues to grow, optimizing for it helps your
            business stay visible, competitive, and easily accessible to users.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            It will help you in –
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Optimize for natural, conversational search queries.</li>
            <li>Improve visibility in local and “near me” voice searches.</li>
            <li>Increase chances of appearing in featured snippets.</li>
            <li>Enhance mobile user experience and website performance.</li>
            <li>Stay ahead of evolving voice search trends.</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How Is It Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Identifying conversational and long-tail keywords.</li>
            <li>Creating clear, question-focused content.</li>
            <li>Optimizing for “near me” and local searches.</li>
            <li>Ensuring a fast, mobile-friendly website.</li>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img1}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            A content marketing agency drives leads through smart strategies.
            Here are six ways:
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How Voice SEO Services Drive More Traffic
            <span className="text-[#25baff]"> & Conversions</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOnlinePrediction,
                head: "Improves Online Visibility",
                text: "Voice search usage continues to grow rapidly, especially among younger audiences. By optimizing your content for natural, conversational queries, you increase your chances of appearing in voice search results, featured snippets, and local listings. This helps your business gain higher visibility and reach potential customers exactly when they are searching.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Secure Zero-Click Results",
                text: "Voice search often delivers instant answers pulled directly from featured snippets and position-zero results. By optimizing your content for voice queries, you increase your chances of being selected as the primary answer. This boosts brand visibility, builds trust, and attracts high-intent users who are more likely to convert into customers.",
              },
              {
                icon: TbSeo,
                head: "Semantic SEO Strategy",
                text: "Semantic SEO focuses on optimizing content around topics and user intent rather than just individual keywords. Since voice searches are conversational and context-driven, this approach helps your content align with natural language queries. By prioritizing meaning, relevance, and search intent instead of keyword stuffing, your website becomes more discoverable and authoritative in voice search results.",
              },
              {
                icon: FaMapMarkerAlt,
                head: "Capture Local Customers",
                text: "Voice search SEO helps your local business appear in searches like, “Where is the best café near me?” or “Which store is open nearby?” By optimizing for local keywords, Google Business Profile, and location-based queries, your business becomes a top choice for customers actively searching for nearby products or services — driving more foot traffic and local conversions.",
              },
              {
                icon: GiRelationshipBounds,
                head: "Fresh User Demographic",
                text: "Voice search optimization helps you reach a growing segment of users who prefer speaking over typing. Across industries, more consumers rely on voice assistants to discover products, services, and local businesses. By optimizing for voice queries, you tap into a new audience base, expand your reach, and attract tech-savvy users with high purchase intent.",
              },
              {
                icon: RxComponent1,
                head: "Gold Mine for User Intent",
                text: "Voice and text searches differ in structure and intent. Voice queries are usually more specific, conversational, and action-driven, revealing stronger purchase intent. By optimizing for voice search, you gain deeper insights into what users truly want, allowing you to align your content with their needs and guide them smoothly through the customer journey toward conversion.",
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

      {/* Why Hire orm Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Why Choose a Professional Voice Search
              <span className="text-[#25baff]"> Optimization Agency?</span>
            </h2>
            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src={Img2}
                alt="content marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* Right Accordion */}
            <div>
              <div className="space-y-4">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex justify-between items-center p-5 bg-gray-50 font-semibold text-[#020202]"
                    >
                      {item.title}
                      <span className="text-[#25baff] text-xl">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === index
                          ? "max-h-40 p-5 bg-white"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3 p-8">
            6 Powerful Reasons to Choose Us as Your Voice Search
            <span className="text-[#25baff]"> Optimization Partner</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Affordable & Flexible Plans",
                text: "We understand that every business operates within a budget. That’s why we offer cost-effective and customizable voice search optimization plans tailored to your goals and financial needs — ensuring maximum ROI without compromising on quality.",
              },
              {
                head: "Trusted Voice SEO Partner",
                text: "Managing and optimizing multiple pages for voice search can be complex. Our experienced voice SEO professionals act as your reliable partner, creating tailored strategies that align with your business goals. We combine expertise, data-driven insights, and proven techniques to deliver sustainable growth and measurable results.",
              },
              {
                head: "Secure Featured SERP Positions",
                text: "Voice assistants often pull answers directly from featured snippets when responding to user queries. Our voice search optimization experts craft strategic, answer-focused content and structured SEO plans to help your website capture featured snippet placements and secure valuable zero-click visibility.",
              },
              {
                head: "High Client Retention Rate",
                text: "Our 93% client retention rate reflects the trust and satisfaction we consistently deliver. We provide personalized recommendations, tailored action plans, and customized voice search strategies designed to meet the unique needs of businesses across diverse industries — ensuring long-term success and measurable growth.",
              },
              {
                head: "Data-Driven Strategies",
                text: "As a results-focused voice search optimization company, we build customized, data-driven strategies tailored to your business goals. Using advanced SEO tools, analytics, and the latest industry techniques, we ensure your website stays competitive. Our team continuously monitors trends and algorithm updates to refine strategies and keep you ahead in voice search rankings.",
              },
              {
                head: "Transparent Communication",
                text: "We believe clear communication builds lasting partnerships. Throughout your voice search SEO campaign, we keep you informed with regular updates, detailed reports, and strategy discussions. Your dedicated account manager ensures your feedback is heard and implemented — guiding you from the initial consultation to generating qualified leads through voice search.",
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

      {/* ALTERNATE SECTION  */}

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3 p-8">
            Voice Search Optimization Strategic
            <span className="text-[#25baff]"> Process</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img3}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Keyword Research for{" "}
                <span className="text-[#25baff]"> Voice SEO</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Keyword research is the foundation of our voice search
                optimization strategy. We focus on identifying natural,
                conversational, and question-based phrases users speak into
                voice assistants rather than short typed keywords. Our team
                analyzes search intent, long-tail queries, “near me” phrases,
                and real user questions to ensure your business appears as the
                most relevant answer. By combining search volume insights,
                audience behavior analysis, and FAQ-focused keyword targeting,
                we position your website to capture high-intent voice traffic
                and drive meaningful conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Voice Search-Based Content
                <span className="text-[#25baff]"> Creation</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Once we identify high-intent, conversational, and long-tail
                keywords, our team develops content tailored to your voice
                search strategy. We align every piece with your industry,
                audience needs, and business goals to ensure maximum relevance.
                Our voice SEO copywriters create clear, natural, and
                question-focused content designed to match how people actually
                speak. By structuring content with concise answers, FAQs, and
                optimized formatting, we increase your chances of earning
                featured snippets and being selected as the preferred result for
                voice search queries.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img4}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img5}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Optimizing On-Page for{" "}
                <span className="text-[#25baff]"> Voice Assistants</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We apply advanced on-page voice SEO techniques to improve your
                visibility in voice search results. Our strategy includes
                integrating conversational and long-tail keywords naturally
                within your content, optimizing pages to secure featured
                snippets with clear and concise answers, and structuring content
                using proper headings, FAQs, and bullet points for better
                readability. We also enhance website speed and mobile
                responsiveness to ensure a seamless voice search experience.
                Together, these optimizations increase your chances of being
                selected by voice assistants and drive highly relevant traffic
                to your website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Implement Speakable Schema{" "}
                <span className="text-[#25baff]"> Markup</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Speakable schema markup plays a crucial role in voice search
                optimization by helping search engines identify which parts of
                your content are best suited to be read aloud. This structured
                data signals to voice assistants which sections provide clear,
                concise answers to user queries, increasing the likelihood of
                your content being selected for voice responses. Our voice
                search optimization experts implement and customize speakable
                schema based on your website structure and goals, ensuring your
                content is easily discoverable, properly indexed, and optimized
                for voice-enabled devices.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img6}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img7}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Prioritize Local
                <span className="text-[#25baff]"> SEO</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Local SEO is essential for capturing voice searches with strong
                location intent. We start by identifying high-value local and
                “near me” keywords and strategically integrating them into your
                website content. By implementing accurate schema markup and
                location-based structured data, we help search engines clearly
                understand your business details and geographic relevance. In
                addition, we optimize your Google Business Profile with
                consistent NAP information, updated business details, and
                geo-optimized visuals to strengthen your local presence. Through
                ongoing monitoring, performance tracking, and strategic
                refinements, we ensure your business stays competitive in local
                voice search results and attracts highly targeted traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Mobile Responsiveness & Fast
                <span className="text-[#25baff]"> Loading Speed</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Voice searches are primarily performed on mobile devices, making
                speed and responsiveness critical for success. We optimize your
                website to ensure it performs seamlessly across smartphones,
                tablets, and voice-enabled devices. Our team integrates natural,
                conversational keywords while improving technical performance to
                enhance user experience. To deliver fast loading times, we
                compress images, minimize HTTP requests, enable browser caching,
                and optimize code structure. By combining mobile responsiveness
                with performance optimization, we ensure your website provides a
                smooth experience — increasing your chances of ranking in voice
                search results and keeping users engaged.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img8}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
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

export default VoiceSearchOptimization;
