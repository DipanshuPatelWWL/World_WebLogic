import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiEdit, FiSettings, FiTarget } from "react-icons/fi";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FcSalesPerformance } from "react-icons/fc";
import { FaSearchengin } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { TbUxCircle } from "react-icons/tb";
import { SiThealgorithms } from "react-icons/si";
import { MdAutoGraph } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { TbDeviceIpadShare } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import { MdOutlineAttachEmail } from "react-icons/md";

import Banner from "../../assets/services/mobile-app-banner.jpg";
import About3 from "../../assets/services/digital-audit.avif";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingAudit = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];
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

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
  {
    question:
      "What steps should I take after completing a Digital Marketing Audit?",
    answer:
      "After the audit, focus on addressing priority issues, improving underperforming areas, and applying a well-structured digital marketing plan based on the findings. Ongoing tracking and optimization are essential for long-term success.",
  },
  {
    question:
      "How frequently should I conduct a digital marketing audit?",
    answer:
      "It’s advisable to perform an audit every 6–12 months to ensure your strategies remain effective and aligned with industry changes.",
  },
  {
    question: "Will a Digital Marketing Audit help improve my website rankings?",
    answer:
      "Yes! By resolving SEO challenges, refining your content approach, and enhancing website performance, you can achieve noticeable improvements in search engine rankings.",
  },
  {
    question: "Is technical expertise required to understand the audit report?",
    answer:
      "No, a well-prepared audit report delivers straightforward insights, practical recommendations, and clear action steps that are easy for business owners to follow.",
  },
  {
    question:
      "Can I address the identified issues on my own after the audit?",
    answer:
      "Definitely! The audit report outlines actionable recommendations. However, if you need professional assistance, our team can support you with full implementation.",
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
          <p className="mt-6 text-lg text-gray-300">Digital Marketing Audit</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is a Digital
            <span className="text-[#25baff]"> Marketing Audit?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A Digital Marketing Audit is a comprehensive evaluation of your
            online presence that examines your strategy’s strengths, weaknesses,
            and growth opportunities. Think of it as a complete health check for
            your brand. Studies show that 60% of marketers experience better ROI
            through regular audits, and businesses that refine their digital
            strategies can achieve up to a 20% increase in revenue.
          </p>

          <p className="text-gray-700 leading-relaxed">
            An unoptimized website can raise bounce rates by as much as 90%,
            resulting in lost leads and missed sales opportunities. If your goal
            is to enhance your digital footprint and generate measurable growth,
            a well-planned audit is the essential first step toward long-term
            success.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={About3}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Identify gaps, Improve strategies, & Increase your ROI
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How Can Your Business Benefit from Digital
            <span className="text-[#25baff]"> Marketing Audit Services?</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FcSalesPerformance,
                head: "Identify Performance Gaps",
                text: "A digital marketing audit service helps uncover obstacles that may be slowing your online growth — from technical SEO errors to underperforming ad campaigns. It provides a clear overview of what’s effective and what requires improvement, ensuring your marketing efforts achieve optimal results.",
              },
              {
                icon: FaSearchengin,
                head: "Improve Search Visibility",
                text: "A digital marketing audit helps businesses resolve on-page, off-page, and technical SEO challenges that impact search rankings. A properly conducted audit ensures your website is fully optimized for search engines, allowing you to drive more organic traffic and maintain a competitive edge.",
              },
              {
                icon: GrOptimize,
                head: "Optimize Ad Spend",
                text: "Investing in paid ads but not achieving the desired outcomes? A digital marketing audit service reviews your PPC campaigns, audience targeting, and budget distribution to pinpoint inefficiencies and recommend improvements for higher click-through rates and stronger conversions.",
              },
              {
                icon: TbUxCircle,
                head: "Enhance User Experience",
                text: "An unoptimized website can result in high bounce rates and missed opportunities. A digital marketing site audit examines your website speed, mobile responsiveness, navigation structure, and user interaction to ensure a smooth experience that keeps visitors engaged and drives conversions.",
              },
              {
                icon: SiThealgorithms,
                head: "Adapt to Algorithm Changes",
                text: "Search engine algorithms and digital marketing trends evolve constantly. A digital marketing audit agency helps you stay aligned with these updates, ensuring your strategies remain compliant and continue to deliver consistent results.",
              },
              {
                icon: MdAutoGraph,
                head: "Gain Actionable Insights",
                text: "An audit report provides data-driven recommendations backed by performance analytics. By leveraging insights from digital marketing audit tools, businesses can develop a more focused strategy that strengthens brand visibility, increases engagement, and drives long-term revenue growth.",
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
            Claim Your Free Website Audit Today!
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Optimize Your Digital Strategies & Boost Your Return on Investment
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Digital Marketing
            <span className="text-[#25baff]"> Audit Services</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AiOutlineAudit,
                head: "Website Audit",
                text: "Your website serves as the core of your online presence. Our website digital marketing audit services carefully evaluate your site’s structure, user experience (UX), loading speed, mobile responsiveness, and security to ensure peak performance and reliability.",
              },
              {
                icon: FaSearchengin,
                head: "SEO Audit",
                text: "Achieving strong search engine rankings is essential for online visibility. Our digital marketing site audit services evaluate your keyword strategy, backlink profile, on-page and off-page SEO, and content performance. We help your business gain maximum value through cost-effective SEO solutions that enhance rankings without exceeding your budget.",
              },
              {
                icon: TbDeviceIpadShare,
                head: "PPC & Paid Ads Audit",
                text: "If your paid campaigns are not generating the expected ROI, our digital marketing strategy audit identifies gaps in ad targeting, budget distribution, bidding strategies, and creative performance. We refine your Google Ads, Facebook Ads, and other paid media campaigns to lower costs and increase conversion rates.",
              },
              {
                icon: FaSearchengin,
                head: "Social Media Audit",
                text: "A powerful social media presence plays a key role in building engagement and brand recognition. Our digital marketing audit expert reviews and enhances your social media approach across platforms such as Facebook, Instagram, LinkedIn, and X. We analyze content effectiveness, audience interaction, and posting frequency to ensure your brand consistently delivers meaningful impact.",
              },
              {
                icon: BiSolidBookContent,
                head: "Content & Branding Audit",
                text: "Our digital content marketing audit analyzes the performance of your content to maintain clear and consistent brand messaging. We also study leading competitors in your industry to understand what strategies are working for them, providing you with practical insights to strengthen and elevate your content strategy.",
              },
              {
                icon: MdOutlineAttachEmail,
                head: "Email Marketing & CRM Audit",
                text: "Email marketing continues to be one of the most effective digital channels. Our digital marketing audit report evaluates deliverability, open rates, and overall campaign performance to ensure your emails connect with the right audience. We also refine lead nurturing processes and CRM segmentation to strengthen customer relationships and improve engagement.",
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

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Who Should Consider a Digital
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Who Can Gain Value from a Digital 
              <span className="text-[#25baff]"> Marketing Audit?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Startups & Local Businesses",
              "Large Enterprises & Organizations",
              "Online Retail Brands",
              "Marketing & Advertising Agencies",
              "Site Owners & Content Creators",
              "Social Media Strategists",
              "Brands Investing in Paid Campaigns",
              "Technology & SaaS Providers",
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

export default DigitalMarketingAudit;
