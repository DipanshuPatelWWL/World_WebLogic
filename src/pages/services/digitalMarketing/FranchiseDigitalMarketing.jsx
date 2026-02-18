import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { TbDeviceIpadShare } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import { LuMapPinCheck } from "react-icons/lu";

import Banner from "../../../assets/services/digital-banner.avif";
import Img from "../../../assets/services/franchisedigital/img.avif";
import Card1 from "../../../assets/services/franchisedigital/card1.avif";
import Card2 from "../../../assets/services/franchisedigital/card2.avif";
import Card3 from "../../../assets/services/franchisedigital/card3.jpg";

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
      "How do you rank multiple franchise locations without keyword cannibalization?",
    answer:
      "We implement a structured multi-location SEO architecture using geo-targeted landing pages, localized content, schema markup, and optimized Google Business Profiles. This ensures each location ranks independently without competing against sister branches.",
  },
  {
    question:
      "We already have a franchise website. Can you still improve performance?",
    answer:
      "Absolutely. We conduct a full technical, on-page, and conversion audit of your existing site. Then we optimize speed, structure, local landing pages, and conversion funnels to turn your current traffic into measurable growth.",
  },
  {
    question:
      "How do you manage Google Business Profiles across multiple locations?",
    answer:
      "We centralize and optimize every profile—ensuring NAP consistency, duplicate suppression, review strategy, regular posting, and geo-optimized updates. This strengthens local pack rankings across all franchise outlets.",
  },
  {
    question:
      "Is social media really necessary for franchise businesses?",
    answer:
      "Yes. Social media builds localized brand authority while maintaining a consistent brand identity. We create location-specific campaigns and paid ads that drive store visits, calls, bookings, and lead generation.",
  },
  {
    question:
      "Do you provide review and reputation management for franchises?",
    answer:
      "Yes. We implement automated review generation systems, respond strategically to feedback, and monitor platforms like Google, Yelp, and Facebook to improve trust, local rankings, and conversion rates.",
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
            Franchise Digital Marketing
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
            What Makes Franchise Digital
            <span className="text-[#25baff]"> Marketing Different?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Franchise digital marketing is a specialized approach designed to
            support multi-location businesses. It strengthens overall brand
            visibility, builds a unified online presence, attracts local
            customers, and preserves brand credibility across every branch.
            Unlike traditional digital marketing, franchise marketing requires a
            careful balance—protecting brand consistency while allowing
            localized strategies that resonate with each market.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A well-planned franchise marketing strategy aligns corporate brand
            objectives with the unique needs of individual locations. By using
            data-driven insights and location-specific campaigns, it empowers
            each franchise to grow independently while maintaining a strong,
            consistent brand identity across all markets.
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
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Identify gaps, Improve strategies, & Increase your ROI
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Key Strategies in Franchise
            <span className="text-[#25baff]"> Digital Marketing</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Localized SEO for Each Franchise Location",
                text: "Franchise digital marketing goes beyond promoting the overall brand—it focuses on optimizing the online presence of every individual location. By targeting specific geographic areas and locally relevant keywords, each franchise can improve its visibility in local search results.",
              },
              {
                head: "National Brand Consistency",
                text: "Consistent branding reflects a reliable and unified customer experience. Franchise marketing ensures that messaging, visuals, tone, and overall brand identity remain aligned across all locations. By maintaining uniform standards nationwide, your franchise strengthens customer trust, improves brand recognition, and enhances your overall online reputation.",
              },
              {
                head: "Multi-Location Campaigns",
                text: "Multi-location campaigns are specialized franchise marketing strategies that allow brands to create and manage digital advertising tailored to individual branches while maintaining overall brand consistency. This approach ensures stronger local reach, targeted engagement, and maximum impact across every franchise location.",
              },
              {
                head: "Balancing Corporate Guidelines & Local Customization",
                text: "Franchise digital marketing maintains the perfect balance between adhering to corporate standards and adapting to local market needs. It allows each location to customize campaigns for its audience while preserving a consistent and strong brand identity across all platforms.",
              },
              {
                head: "Multi-Location Reputation Management",
                text: "Multi-location reputation management is a vital component of franchise marketing. By optimizing Google Business Profiles and social media accounts for each branch, this strategy ensures consistent branding while strengthening local visibility.",
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
            Scale Your Franchise Success — One Location at a Time
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
            Our Comprehensive Franchise Digital
            <span className="text-[#25baff]"> Marketing Solutions</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Our franchise digital marketing services cover:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AiOutlineAudit,
                head: "Franchise Web Design",
                text: "Your website is the first digital impression of your franchise. Our franchise marketing experts design custom, user-friendly, and fully responsive websites optimized for performance and conversions. With a strong focus on local SEO, seamless navigation, and brand consistency, we create websites that generate more leads, strengthen your online presence, and support growth across every location.",
              },
              {
                icon: FaSearchengin,
                head: "Franchise SEO",
                text: "Our franchise SEO services are designed to improve your search rankings, attract high-intent leads, and boost conversion rates while strengthening visibility at both local and national levels. We implement advanced strategies such as location-based SEO, structured schema markup for each branch, and optimized Google Business Profile management to ensure every franchise location stands out in search results and connects with the right audience.",
              },
              {
                icon: TbDeviceIpadShare,
                head: "Franchise PPC Campaigns",
                text: "Our franchise PPC campaigns use targeted paid advertising to expand your brand’s reach across multiple locations. Through geo-targeted ads, smart budget distribution, and strategic planning, we help franchises compete effectively in high-demand and competitive markets.",
              },
              {
                icon: FaSearchengin,
                head: "Franchise Social Media Marketing",
                text: "Connect with your audience and strengthen brand loyalty through our franchise social media marketing services. We manage your social profiles, create engaging content, and launch targeted ad campaigns to enhance your online visibility.",
              },
              {
                icon: BiSolidBookContent,
                head: "Franchise Content Marketing",
                text: "Our franchise content marketing services include SEO-focused blogs, optimized website copy, engaging social media content, and targeted email campaigns designed to increase brand visibility, build trust, and drive customer engagement. We also provide professional video production—covering everything from scripting to publishing promotional and testimonial videos—to help you connect with your audience and strengthen your franchise marketing efforts across all locations.",
              },
              {
                icon: LuMapPinCheck,
                head: "Franchise Site Location Management",
                text: "We optimize each franchise location to maximize local visibility and engagement. By updating local listings, improving location-based SEO, and managing social media, we ensure brand consistency while increasing traffic, boosting local rankings, and driving more footfall to every branch.",
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
              Our Proven Industry Expertise
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Why Franchise Brands Choose and
              <span className="text-[#25baff]"> Trust Our Agency</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Specialized Franchise Marketing Team",
              "Advanced Multi-Location Performance Tracking Tools",
              "Proven Experience Across Diverse Industries",
              "Clear Reporting with Detailed Location-Level Insights",
              "Clear metrics for leads and ROI tracking",
              "Location-wise campaign performance breakdown.",
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
            Real franchise brands. Measurable impact. Scalable marketing
            systems.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Proven Franchise Growth
            <span className="text-[#25baff]"> Stories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card1}
                alt="Dental Franchise"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                #1 Ranking for Dental Franchise
              </h3>
              <p className="text-xs font-semibold text-green-600 mb-3">
                +812 Patients | +1,620% Growth
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Local SEO and Google Ads scaled across 12 locations, driving
                consistent appointment growth.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card2}
                alt="Construction Franchise"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                52% Conversion Boost
              </h3>
              <p className="text-xs font-semibold text-green-600 mb-3">
                +420% Leads | +310% Inquiries
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                CRO optimization and PPC scaling across 15 branches generated
                high-value projects.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card3}
                alt="Restaurant Franchise"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                118% Traffic Growth
              </h3>
              <p className="text-xs font-semibold text-green-600 mb-3">
                32M Impressions | 1,500+ Keywords
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Franchise SEO + paid social campaigns increased weekly orders
                across all outlets.
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

export default FranchiseDigitalMarketing;
