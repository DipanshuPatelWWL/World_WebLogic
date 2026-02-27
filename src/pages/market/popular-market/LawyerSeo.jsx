import { useRef, useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
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
  FaAward,
  FaClipboardList,
  FaLink,
  FaBalanceScale,
  FaRobot,
  FaMicrophone,
  FaDatabase,
  FaRedditAlien,
  FaVideo,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

import Banner from "../../../assets/market/lawyerseo/banner.jpg";
import LawyerClient from "../../../assets/market/lawyerseo/img1.avif";
import AnalyticsImg from "../../../assets/market/lawyerseo/img2.avif";
import TeamImg from "../../../assets/market/lawyerseo/img3.avif";
import TrendsImg from "../../../assets/market/lawyerseo/img4.jpg";

export default function LawyerSeo() {
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
      q: "What is Law Firm SEO?",
      a: "Law Firm SEO is the process of optimizing a law firm's website to improve its ranking in search engine results pages (SERPs) to attract more clients.",
    },
    {
      q: "Why is SEO for Law Firm websites important?",
      a: "It increases visibility, attracts high-quality traffic, and helps convert leads into clients, directly impacting revenue and growth.",
    },
    {
      q: "What is Law Firm Marketing?",
      a: "It involves strategies to promote legal services, build reputation, and attract clients through various channels like SEO, social media, and content.",
    },
    {
      q: "How does SEO for attorneys lawyers benefit my practice?",
      a: "It drives more visitors, enhances online presence, builds trust, and generates leads from organic search traffic.",
    },
    {
      q: "What Are Some Key Elements of Effective Law Firm SEO services?",
      a: "Key elements include keyword research, on-page optimization, local SEO, content creation, and link building.",
    },
    {
      q: "What is the significance of link building in SEO for law firm websites?",
      a: "Link building from authoritative sites signals credibility to search engines, improving rankings and visibility.",
    },
    {
      q: "How can I measure the success of my law firm local SEO efforts?",
      a: "Track metrics like organic traffic, keyword rankings, lead generation, and conversion rates using tools like Google Analytics.",
    },
    {
      q: "Is Content Creation Important for Law Firm SEO?",
      a: "Yes, high-quality, E-E-A-T compliant content builds authority, engages users, and improves rankings.",
    },
    {
      q: "What is the Role of Local SEO for Law Firms?",
      a: "It optimizes for local searches, improves Google Business Profile visibility, and attracts clients in specific areas.",
    },
    {
      q: "What are some common mistakes to avoid in Law Firm SEO?",
      a: "Avoid ignoring mobile optimization, neglecting local SEO, producing low-quality content, and not complying with YMYL guidelines.",
    },
    {
      q: "How is AI changing Law Firm SEO in 2026?",
      a: "AI is driving trends like GEO (Generative Engine Optimization), AI Overviews, and conversational search, requiring firms to optimize for AI-assisted tools.",
    },
    {
      q: "Why focus on voice search for lawyers?",
      a: "Voice search is gaining traction, with clients using natural language queries, making 'voice first' optimization essential for visibility.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "YMYL and E-E-A-T Compliance",
      icon: <FaShieldAlt />,
      desc: "Create high-quality content overseen by legal experts to build experience, expertise, authority, and trustworthiness.",
    },
    {
      num: "02",
      title: "Location-based Keywords & Pages",
      icon: <FaSearch />,
      desc: "Use local keywords in titles, descriptions, and create dedicated pages for each office location.",
    },
    {
      num: "03",
      title: "Local SEO & GMB Optimization",
      icon: <FaGoogle />,
      desc: "Optimize Google Business Profile for local pack visibility and accurate business information.",
    },
    {
      num: "04",
      title: "Off-page SEO & Link Building",
      icon: <FaLink />,
      desc: "Build quality backlinks from authoritative legal and community sites.",
    },
    {
      num: "05",
      title: "LinkedIn Marketing",
      icon: <FaClipboardList />,
      desc: "Network, share content, and build professional relationships on LinkedIn.",
    },
    {
      num: "06",
      title: "Content Creation & Blogging",
      icon: <FaChartLine />,
      desc: "Produce informative articles on legal topics to amplify reach and SEO efforts.",
    },
  ];

  const trends = [
    {
      icon: <FaMicrophone />,
      title: "Voice Search Optimization",
      desc: "Optimize for natural language queries as voice search dominates, focusing on 'voice first' strategies.",
    },
    {
      icon: <FaRobot />,
      title: "AI SEO and GEO",
      desc: "Shift to Generative Engine Optimization for AI-assisted searches, with 78% of legal queries triggering AI Overviews.",
    },
    {
      icon: <FaDatabase />,
      title: "Data Privacy Focus",
      desc: "Emphasize privacy compliance to build trust in an era of heightened data concerns.",
    },
    {
      icon: <FaRedditAlien />,
      title: "Reddit and Quora Engagement",
      desc: "Leverage crowdsourced platforms for authority building and client acquisition.",
    },
    {
      icon: <FaVideo />,
      title: "Video Content Marketing",
      desc: "30% of firms use videos; create engaging video content to boost visibility and engagement.",
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Analytics",
      desc: "Use AI to forecast search trends and surging practice areas for proactive SEO.",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="w-full overflow-hidden bg-[#020202] text-white"
    >
      {/* HERO - Changed: Added stats overlay */}
      <section
        className="relative h-[62vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/70" />
        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Law Firm SEO
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 mb-8">
            Enhance Visibility • Secure Clients • AI-Driven Strategies •
            Dominate Online Presence
          </p>
        </div>
      </section>

      {/* INTRO - Changed: Added more text */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="gsap-item text-3xl md:text-5xl font-bold mb-6">
            Over 75% of Legal Consumers Rely on{" "}
            <span className="text-[#25baff]">Online Searches</span>
          </h2>
          <p className="gsap-item text-lg md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8">
            With younger generations preferring digital mediums, prioritizing
            your online brand is crucial for attracting recurring business and
            referrals.
          </p>
          <p className="gsap-item text-base text-gray-600 max-w-4xl mx-auto">
            According to reports, online search is the top method after
            referrals for finding legal services. Don't miss out on organic
            traffic potential.
          </p>
        </div>
      </section>

      {/* WHAT IS - Changed: Added more list items */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="gsap-item">
            <h2 className="text-4xl font-bold mb-6 text-white">
              What is <span className="text-[#25baff]">Law Firm SEO?</span>
            </h2>
            <p className="text-base leading-relaxed mb-6 text-gray-300">
              Strategies and activities to promote legal services, attract
              clients, build reputation, and ensure cost-effective growth in the
              legal industry.
            </p>
            <ul className="space-y-4">
              {[
                "Boosting Brand Recognition",
                "Collecting Lead Contact Details",
                "Encouraging Initial Consultations",
                "Transforming Leads into Clients",
                "Fostering Repeat Business and Referrals",
                "Building Trust Through Content",
                "Leveraging Digital Channels Efficiently",
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
              src={LawyerClient}
              alt="Lawyer consulting client"
              className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)]"
            />
          </motion.div>
        </div>
      </section>

      {/* IMPORTANCE - Changed: Expanded descriptions */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={AnalyticsImg}
              alt="SEO analytics for law firms"
              className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)]"
            />
          </motion.div>
          <div className="gsap-item">
            <h2 className="text-4xl font-bold mb-6 text-black">
              What Does{" "}
              <span className="text-[#25baff]">SEO for Law Firms</span> Achieve?
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              It attracts clients, builds reputation, drives growth, enhances
              visibility, and strengthens client relationships for long-term
              success.
            </p>
            <div className="grid gap-6">
              {[
                {
                  title: "Attracting Clients",
                  desc: "Raises awareness of services, encouraging those in need to seek your expertise promptly.",
                },
                {
                  title: "Building Reputation",
                  desc: "Positions your firm as a trustworthy and skilled legal provider in a competitive market.",
                },
                {
                  title: "Growing Business",
                  desc: "Generates new clients, repeat business, and referrals to fuel sustainable revenue growth.",
                },
                {
                  title: "Increasing Visibility",
                  desc: "Ensures easy discoverability online and locally, capturing high-intent searches.",
                },
                {
                  title: "Fostering Relationships",
                  desc: "Maintains strong ties with clients for loyalty and word-of-mouth promotion.",
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

      {/* LATEST TRENDS - New Section */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="gsap-item text-4xl font-bold text-white">
            Latest Trends in{" "}
            <span className="text-[#a8d97c]">Law Firm SEO for 2026</span>
          </h2>
          <p className="gsap-item text-lg text-gray-300 mt-4 max-w-4xl mx-auto">
            Stay ahead with AI-driven innovations, voice optimization, and
            emerging platforms.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trends.map((trend, i) => (
            <div
              key={i}
              className="gsap-item relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#a8d97c]/70 hover:shadow-[0_20px_60px_rgba(168,217,124,0.35)] transition-all duration-500 group hover:-translate-y-4"
            >
              <div className="text-5xl text-[#25baff] mb-6 group-hover:scale-110 transition">
                {trend.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#a8d97c] transition">
                {trend.title}
              </h4>
              <p className="text-sm text-gray-400">{trend.desc}</p>
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
            src={TrendsImg}
            alt="SEO trends visualization"
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* BEST PRACTICES / PROCESS - Changed: Updated hover colors */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="gsap-item text-4xl font-bold text-black">
            Proven Best Practices for{" "}
            <span className="text-[#25baff]">Law Firm SEO</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="gsap-item relative bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:border-[#25baff]/70 hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)] transition-all duration-500 group hover:-translate-y-4"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#a8d97c] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition">
                {step.num}
              </div>
              <div className="text-5xl text-[#25baff] mt-10 mb-6 group-hover:scale-110 transition">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-[#a8d97c] transition">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES / WHY US - Changed: Added more items */}
      <section ref={addSectionRef} className="py-20 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="gsap-item text-4xl font-bold text-white">
            Secure More Cases with Our{" "}
            <span className="text-[#25baff]">Law Firm SEO Services</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <p className="gsap-item text-lg text-gray-300 mb-8">
            Our experts deliver tailored services for areas like Corporate Law,
            Real Estate, Personal Injury, and more. We optimize from awareness
            to advocacy.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaBalanceScale />,
                title: "Client Journey Optimization",
                desc: "Guide prospects through awareness, evaluation, decision, and advocacy stages.",
              },
              {
                icon: <FaAward />,
                title: "Proven Expertise",
                desc: "E-E-A-T compliant strategies with a focus on local and AI optimization.",
              },
              {
                icon: <FaRobot />,
                title: "AI-Integrated Approaches",
                desc: "Leverage AI for predictive analytics and GEO to stay ahead.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="gsap-item bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#a8d97c]/60 hover:-translate-y-4 transition group"
              >
                <div className="text-6xl text-[#25baff] mb-6 group-hover:scale-110 group-hover:text-[#a8d97c] transition">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#25baff] transition">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          <img src={TeamImg} alt="Law firm team" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* FAQ - White Blue Version */}
      <section
        ref={addSectionRef}
        className="py-28 px-6 bg-white text-gray-900 relative overflow-hidden"
      >
        {/* Soft Sky Blue Glow Background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
    bg-[#38bdf8]/10 blur-[120px] rounded-full pointer-events-none"
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="gsap-item text-4xl md:text-4xl font-extrabold text-center mb-16">
            Law Firm SEO <span className="text-[#38bdf8]">FAQs</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                ref={(el) => (faqRefs.current[i] = el)}
                className={`gsap-item rounded-2xl overflow-hidden border transition-all duration-300
          ${
            activeFaq === i
              ? "border-[#38bdf8] shadow-[0_0_35px_rgba(56,189,248,0.35)] scale-[1.02]"
              : "border-gray-200 hover:border-[#38bdf8]/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
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
                        ease: "power2.out",
                      });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prev =
                          faqRefs.current[activeFaq]?.querySelector(
                            ".faq-content",
                          );
                        gsap.to(prev, {
                          height: 0,
                          opacity: 0,
                          duration: 0.4,
                          ease: "power2.out",
                        });
                      }

                      gsap.set(content, { height: "auto" });
                      gsap.fromTo(
                        content,
                        { height: 0, opacity: 0 },
                        {
                          height: content.scrollHeight,
                          opacity: 1,
                          duration: 0.5,
                          ease: "power2.out",
                        },
                      );
                      setActiveFaq(i);
                    }
                  }}
                  className="w-full flex justify-between items-center px-8 py-6 text-left font-semibold text-lg transition"
                >
                  <span
                    className={`transition duration-300 ${
                      activeFaq === i ? "text-[#38bdf8]" : "text-gray-900"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300
              ${
                activeFaq === i
                  ? "bg-[#38bdf8] text-white shadow-lg shadow-[#38bdf8]/40 rotate-180"
                  : "bg-gray-100 text-gray-600"
              }`}
                  >
                    {activeFaq === i ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                <div className="faq-content overflow-hidden h-0 opacity-0 px-8">
                  <p className="py-6 text-base text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Changed: Updated text */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#a8d97c]/20 to-[#25baff]/20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Dominate{" "}
          <span className="text-[#a8d97c]">Legal Searches</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
          Claim your FREE Law Firm SEO Audit and unlock growth potential.
        </p>
        <NavLink to="/contact">
          <button className="px-12 py-6 rounded-full bg-[#38bdf8] text-black font-bold text-xl shadow-xl hover:shadow-[#a8d97c]/70 transition transform hover:-translate-y-2">
            Contact Us
          </button>
        </NavLink>
      </section>
    </div>
  );
}
