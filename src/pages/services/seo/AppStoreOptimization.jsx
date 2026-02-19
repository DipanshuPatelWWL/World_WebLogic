import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GiRelationshipBounds } from "react-icons/gi";
import { RxComponent1 } from "react-icons/rx";
import { FaSearchLocation } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";

import Banner from "../../../assets/services/appStoreOptimization/banner.avif";
import Img1 from "../../../assets/services/appStoreOptimization/img1.avif";
import Img2 from "../../../assets/services/appStoreOptimization/img2.avif";
import Img3 from "../../../assets/services/appStoreOptimization/img3.avif";
import Img4 from "../../../assets/services/appStoreOptimization/img4.avif";
import Img5 from "../../../assets/services/appStoreOptimization/img5.avif";
import Img6 from "../../../assets/services/appStoreOptimization/img6.avif";
import Img7 from "../../../assets/services/appStoreOptimization/img7.avif";
import Img8 from "../../../assets/services/appStoreOptimization/img8.avif";
import Img9 from "../../../assets/services/appStoreOptimization/img9.avif";
import Img10 from "../../../assets/services/appStoreOptimization/img10.avif";

gsap.registerPlugin(ScrollTrigger);

const AppStoreOptimization = () => {
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
      question: "What is App Store Optimization (ASO)?",
      answer:
        "App Store Optimization (ASO) is the process of improving an app’s visibility and conversion rate within app marketplaces like the Apple App Store and Google Play Store. It involves optimizing keywords, titles, descriptions, visuals, and ratings to increase organic downloads and improve discoverability.",
    },
    {
      question: "Why is App Store Optimization important?",
      answer:
        "ASO is essential for helping your app reach the right audience. By improving search rankings and listing conversions, ASO drives high-quality organic installs, increases brand visibility, and supports long-term growth without relying heavily on paid ads.",
    },
    {
      question: "How effective is App Store Optimization?",
      answer:
        "When implemented strategically, ASO can significantly increase app visibility, organic installs, and user engagement. Its effectiveness depends on competition, keyword strategy, creative optimization, and continuous performance monitoring.",
    },
    {
      question: "Is ASO similar to SEO?",
      answer:
        "Yes, ASO shares similarities with SEO, such as keyword research and content optimization. However, ASO focuses specifically on app store ranking factors like app titles, metadata, ratings, reviews, conversion rate optimization, and in-store search algorithms.",
    },
    {
      question: "What does an ASO service include?",
      answer:
        "ASO services typically include keyword research, metadata optimization, creative asset enhancement (icons and screenshots), competitor analysis, A/B testing, review management, and ongoing performance tracking to improve rankings and conversions.",
    },
    {
      question: "How long does it take to see results from ASO?",
      answer:
        "Results vary depending on competition, niche, and optimization quality. While initial improvements may be visible within a few weeks, significant growth in rankings and downloads generally takes consistent optimization over several months.",
    },
    {
      question: "Do keywords in app reviews impact ASO?",
      answer:
        "Yes, keywords used in user reviews can influence app store search relevance. Positive reviews with relevant terms help strengthen your app’s discoverability and credibility, making review management an important part of ASO strategy.",
    },
  ];

  const accordionData = [
    {
      title: "Professional ASO Expertise",
      content:
        "Partnering with an ASO company gives you access to specialists who understand app store algorithms, ranking factors, and industry trends. They create customized, data-driven strategies designed to improve visibility, increase downloads, and strengthen your app’s market presence.",
    },
    {
      title: "Dedicated Optimization Team",
      content:
        "An ASO agency provides a dedicated team focused entirely on your app’s growth. From project managers to ASO, SEO, and marketing experts, professionals continuously monitor, optimize, and refine your app store strategy for maximum performance.",
    },
    {
      title: "Higher Leads & Revenue Growth",
      content:
        "The ultimate goal of ASO is to attract high-intent users. By improving search rankings and conversion rates, ASO experts drive qualified downloads that increase user acquisition, boost engagement, and generate higher revenue.",
    },
    {
      title: "Save Time & Business Resources",
      content:
        "App store optimization requires ongoing research, testing, and performance tracking. Outsourcing ASO allows you to focus on product development and innovation while experts handle technical optimization and growth strategies.",
    },
    {
      title: "Comprehensive Growth Support",
      content:
        "Beyond keyword optimization, ASO companies offer end-to-end support including competitor analysis, content enhancement, creative optimization, and performance analytics. This integrated approach ensures consistent traffic, stronger brand visibility, and improved ROI.",
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
          <p className="mt-6 text-lg text-gray-300">App Store Optimization</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is App Store
            <span className="text-[#25baff]"> Optimization?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            App Store Optimization (ASO) is the strategic process of improving a
            mobile app’s visibility and conversion rate within app marketplaces
            like the Apple App Store and Google Play Store. It focuses on
            optimizing key elements of your app listing so it ranks higher in
            search results and converts more visitors into downloads.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Core Benefits of ASO
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>
              Enhanced App Discoverability – Appear in relevant searches and top
              category rankings.
            </li>
            <li>
              Higher Organic Install Volume – Drive consistent downloads without
              heavy ad spend.
            </li>
            <li>
              Improved Conversion Rate (CVR) – Convert store impressions into
              actual installs.
            </li>
            <li>
              Stronger User Engagement – Attract the right audience for better
              retention.
            </li>
            <li>
              Positive Brand Reputation – Build credibility through optimized
              listings and strong ratings.
            </li>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How ASO Services Boost App Installs &
            <span className="text-[#25baff]"> Organic Growth</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            App Store Optimization services improve your app’s visibility,
            helping you attract more users and increase downloads. Here’s how
            ASO drives more installs, conversions, and revenue
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearchLocation,
                head: "Comprehensive Competitor Analysis",
                text: "Through detailed market and competitor research, ASO experts uncover valuable insights to shape effective strategies. This includes identifying new market opportunities, tracking consumer behavior trends, understanding evolving user needs, and adapting to the latest Apple and Google algorithm updates to stay ahead of the competition.",
              },
              {
                icon: FaSearchengin,
                head: "Strategic ASO Keyword Research",
                text: "We conduct in-depth keyword research to identify high-traffic, relevant search terms for your app. By strategically integrating these keywords into your app title, description, and metadata, we enhance discoverability, drive targeted traffic, and increase download potential.",
              },
              {
                icon: GiRelationshipBounds,
                head: "Engaging Visual Assets",
                text: "Compelling visuals play a key role in driving installs. Our ASO experts design eye-catching app icons, screenshots, and promotional creatives that clearly highlight your app’s features, benefits, and user experience—encouraging more users to download.",
              },
              {
                icon: FaMeta,
                head: "Metadata Optimization",
                text: "Optimizing your app’s metadata is essential for higher search rankings. ASO experts refine your app title, description, and keyword fields to improve relevance, enhance search visibility, and make your app more discoverable within app store results.",
              },
              {
                icon: MdOutlineStarRate,
                head: "Retention Rate Optimization",
                text: "ASO agencies analyze user behavior, identify drop-off points, and address key pain areas to improve the overall user experience. By enhancing engagement and satisfaction, they boost retention rates—leading to stronger organic growth and sustained downloads.",
              },
              {
                icon: RxComponent1,
                head: "Installs & Traffic Monitoring",
                text: "Monitoring app installs and user traffic is essential to measure ASO performance. By tracking key metrics like install rates, conversion rates, and user engagement, ASO experts evaluate campaign effectiveness and continuously refine strategies to maximize growth and results.",
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
              Why Should You Hire an
              <span className="text-[#25baff]"> ASO Company?</span>
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
            Why We’re the Right App Store Optimization Agency for You
            <span className="text-[#25baff]"> – 6 Key Reasons</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Cost-Effective ASO Solutions",
                text: "We deliver results-driven ASO services designed to maximize your app’s growth without stretching your budget. Our experts focus on improving visibility, attracting high-quality users, and increasing downloads through strategic optimization. With performance-focused plans and transparent pricing, we ensure measurable growth and strong ROI for your app.",
              },
              {
                head: "Tailored App Growth Strategy",
                text: "Every app is unique, and so are its growth goals. That’s why we create customized ASO strategies aligned with your target audience, niche, and business objectives. Instead of using one-size-fits-all methods, we develop data-driven, personalized campaigns designed to maximize visibility, traffic, and conversions.",
              },
              {
                head: "Transparent Communication & Reporting",
                text: "At Digital Guider, we prioritize clear and honest communication. Your dedicated ASO project manager keeps you informed at every stage with regular updates, performance reports, and strategic insights—so you always know what’s being done and what comes next.",
              },
              {
                head: "Multi-Industry ASO Expertise",
                text: "Our experience across diverse industries allows us to bring proven strategies and deep market insights to every app we optimize. Having worked with apps in various niches, our ASO experts understand different audience behaviors and competitive landscapes—ensuring tailored solutions that meet your unique growth needs.",
              },
              {
                head: "Advanced Tools & Technologies",
                text: "We utilize industry-leading ASO tools and advanced analytics platforms to deliver data-driven results. From in-depth keyword research to performance tracking and competitor analysis, we leverage the latest technologies to refine strategies, optimize listings, and maximize your app’s growth potential.",
              },
              {
                head: "Comprehensive ASO & Digital Growth Solutions",
                text: "We offer end-to-end app growth services designed to maximize your success. From strategic ASO planning and optimization to SEO, digital marketing, website launch support, and social media marketing, our integrated approach ensures consistent visibility, stronger brand presence, and measurable business growth.",
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
            ASO Company Strategic
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
                Market Research &
                <span className="text-[#25baff]"> Strategic Analysis</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We begin with comprehensive market research to understand your
                industry landscape, audience behavior, and competitive
                positioning. This includes identifying high-impact keywords,
                analyzing search trends, studying competitor performance, and
                evaluating user intent. By leveraging data insights and
                behavioral patterns, we create a strategic foundation that
                positions your app effectively, targets the right audience, and
                maximizes its growth potential in competitive app marketplaces.
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
                Comprehensive ASO
                <span className="text-[#25baff]"> Audit</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our ASO specialists conduct a detailed audit of your app store
                listings to identify performance gaps and growth opportunities.
                We evaluate your niche, analyze competitor strategies, and
                assess creative assets to determine what’s working—and what
                needs improvement. This includes reviewing your app’s overall
                health on both the App Store and Google Play, examining keyword
                performance, metadata effectiveness, visuals, ratings, and
                conversion elements. Using advanced research tools and
                data-driven insights, we provide clear, actionable
                recommendations that strengthen your organic growth and give you
                a competitive edge.
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
                Strategic Keyword
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Using insights from in-depth market research, we identify
                high-impact keywords that align with your app’s niche and target
                audience. Our goal is to select search terms with strong volume
                and achievable competition to maximize visibility and rankings.
                These keywords are strategically integrated into your app title,
                subtitle, description, and metadata to improve discoverability
                in app store search results. We focus on the exact terms users
                are likely to search for, ensuring your app appears in relevant
                queries. By clearly highlighting your app’s features and
                functionality, our ASO experts help app store algorithms better
                understand and rank your app—driving targeted traffic and
                increasing organic installs.
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
                ASO Metadata Optimization
                <span className="text-[#25baff]"> & Updates</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We provide actionable recommendations to enhance your app
                listings on both Google Play and the Apple App Store. Our ASO
                specialists continuously monitor industry trends, algorithm
                updates, and competitor movements to keep your app optimized for
                maximum performance. From refining titles, descriptions, and
                keyword fields based on in-depth research to implementing A/B
                testing and performance tracking, we ensure every update is
                data-driven and results-focused. A senior ASO expert at Digital
                Guider will strategically optimize and update your app store
                listing to improve visibility, strengthen rankings, and
                accelerate organic growth.
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
                App Store Listing
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We optimize your entire app store listing to improve both
                visibility and conversions. Using strategically selected
                keywords, we craft persuasive, benefit-driven descriptions that
                clearly communicate your app’s value and features. Our team also
                enhances visual elements—including app icons, screenshots, and
                preview creatives—to capture attention and build user trust. The
                goal is to create a compelling, visually engaging, and
                conversion-focused listing that not only ranks higher in search
                results but also motivates users to download your app.
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
                Performance Monitoring & Continuous
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                After your app goes live, we continuously track its performance
                to ensure steady growth. This includes monitoring keyword
                rankings, analyzing install and retention metrics, reviewing
                user feedback, and evaluating conversion rates. Using real-time
                data insights, we refine metadata, creatives, and keyword
                strategies to improve results over time. This ongoing
                optimization approach allows us to adapt to algorithm updates,
                market shifts, and changing user behavior—ensuring sustained
                visibility, stronger engagement, and long-term success for your
                app.
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

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img9}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                ASO Localization
                <span className="text-[#25baff]"> Strategy</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                To help your app reach a global audience, we implement strategic
                localization tailored to your primary and emerging markets. This
                involves translating your app store listing and metadata into
                multiple languages while adapting content to match regional
                search behavior, cultural nuances, and user preferences. By
                optimizing keywords, descriptions, and creatives for each target
                market, we improve regional visibility and relevance. Our
                localization approach ensures your app connects authentically
                with users worldwide—expanding reach, increasing downloads, and
                driving international growth.
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
                App Promotion & Marketing
                <span className="text-[#25baff]"> Strategy</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Beyond optimization, we implement targeted marketing strategies
                to amplify your app’s visibility and accelerate user
                acquisition. This includes leveraging social media campaigns,
                influencer partnerships, app review platforms, paid promotions,
                and other high-impact digital channels. By creating awareness
                and generating buzz around your app, we drive qualified traffic
                and encourage more downloads. Our integrated promotion strategy
                ensures stronger brand exposure, faster growth, and long-term
                success in competitive app marketplaces.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img10}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 sm:py-10 lg:py-12 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl font-extrabold text-[#020202] mb-3 p-8">
              Affordable ASO
              <span className="text-[#25baff]"> Plans</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
            {/* BASIC */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-4">BASIC</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#2E7D32] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#2E7D32]">500</span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">30 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">40 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✕</div>
              </div>

              <div className="bg-gray-50 mt-5 rounded-b-xl">
                <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white">
                  START TODAY
                </button>
              </div>
            </div>

            {/* SILVER */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-4">SILVER</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#555555] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#555555]">700</span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">40 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">60 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✕</div>
              </div>

              <div className="bg-gray-50 mt-5 rounded-b-xl">
                <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white">
                  START TODAY
                </button>
              </div>
            </div>

            {/* GOLD (POPULAR) */}
            <div className="border-4 border-[#25baff] rounded-xl relative">
              <div className="rounded-t-xl overflow-hidden">
                <div className="bg-[#25baff] py-4 text-center relative">
                  <h2 className="text-2xl font-bold text-white tracking-wide">
                    GOLD
                  </h2>

                  {/* Popular Ribbon */}
                  <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
                    <div className="absolute top-5 right-[-35px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-40 text-center shadow-md">
                      POPULAR
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#E65100] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#E65100]">
                    1000
                  </span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">50 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">100 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-[#25baff] text-white hover:bg-white hover:text-black border border-[#25baff]">
                  START TODAY
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-4">
                PREMIUM
              </h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#607AFE] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#607AFE]">
                    1800
                  </span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">100 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">200 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✓</div>
              </div>

              <div className="bg-gray-50 mt-5 rounded-b-xl">
                <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white">
                  START TODAY
                </button>
              </div>
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

export default AppStoreOptimization;
