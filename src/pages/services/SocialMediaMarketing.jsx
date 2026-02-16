import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import { FaCheckCircle } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/SMM-banner.jpg";
import WebDesign1 from "../../assets/services/SMM.jpg";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaMarketing = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
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
      // HERO
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      // ALL SECTIONS
      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: 60,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What social media marketing services do you provide?",
      answer:
        "We offer complete social media marketing solutions including strategy planning, content creation, account management, paid advertising campaigns, influencer collaborations, and performance tracking. Our services are customized to match your business goals and target audience.",
    },
    {
      question: "Which social media platforms do you work with?",
      answer:
        "We manage and promote brands across major platforms such as Facebook, Instagram, Twitter (X), LinkedIn, Pinterest, and TikTok. Our team stays updated with platform trends and algorithm changes to ensure effective campaigns.",
    },
    {
      question: "How do you create a social media strategy for a business?",
      answer:
        "We begin by understanding your business objectives, audience, and competitors. Based on research and key performance indicators (KPIs), we develop a detailed plan that includes content strategy, posting schedules, and advertising tactics to achieve measurable results.",
    },
    {
      question: "Do you handle complete social media account management?",
      answer:
        "Yes, we provide full account management services including content posting, audience engagement, responding to messages, trend monitoring, and regular performance reporting to keep your brand active and engaging.",
    },
    {
      question: "How do you track and measure campaign performance?",
      answer:
        "We measure campaign success using metrics such as engagement rate, follower growth, website traffic, conversions, and return on investment (ROI). Detailed reports and analytics help you understand results and guide future strategies.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-gray-900">
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
          <p className="mt-6 text-lg text-gray-300">Social Media Marketing</p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Social Media
            <span className="text-[#25baff]"> Marketing</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            In today’s digital landscape, your social media presence defines how
            your audience sees your brand. A strong and strategic approach can
            boost engagement, build trust, and drive real business growth. Is
            your brand making the right impact online?
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={WebDesign1}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item">
          {/* Heading */}
          <h3 className="text-3xl font-extrabold mb-8 text-[#020202] relative inline-block">
            Strategic
            <span className="text-[#25baff]"> Social Media Growth</span>
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
          </h3>

          <p className="text-gray-700 mb-6">
            In today’s digital world, conversations happen through posts,
            stories, and reels. We help your brand stay visible and relevant by
            creating impactful social media strategies that strengthen your
            online presence.
          </p>

          <p className="text-gray-700 mb-6">
            Our experts understand what works on social platforms and how to
            turn engagement into real growth. From increasing visibility to
            building meaningful customer interactions, we help you create a
            strong and positive brand image.
          </p>

          <p className="text-gray-700 mb-6">
            We create engaging content, manage campaigns, and optimize
            performance to ensure consistent and measurable results.
          </p>

          <p className="text-gray-700">
            Across platforms like Facebook, Instagram, Twitter, and YouTube, we
            ensure your business gains the exposure and growth it deserves.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#020202] mb-14 text-center">
            Why Choose
            <span className="text-[#25baff]"> Our Social Media Marketing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Creative content strategies tailored to your brand.",
              "Data-driven campaigns focused on measurable growth.",
              "Expert management across all major social platforms.",
              "Targeted paid advertising for maximum ROI.",
              "Consistent audience engagement and community building.",
              "Trend analysis to keep your brand ahead of competitors.",
              "Transparent reporting with detailed performance insights.",
              "Dedicated support to ensure long-term social success.",
            ].map((text, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
          shadow-md shadow-[#25baff]/10
          transition-all duration-300
          hover:-translate-y-2
          hover:bg-[#25baff]
          hover:border-[#25baff]
          hover:shadow-2xl hover:shadow-[#25baff]/30"
              >
                <FaCheckCircle
                  className="text-[#a8d97c] text-2xl mt-1
            group-hover:text-white transition-colors duration-300"
                />

                <p
                  className="text-black text-lg leading-relaxed
            group-hover:text-white transition-colors duration-300"
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================  CTA ================= */}
      <section
        ref={addSectionRef}
        className="relative overflow-hidden py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
        {/* Animated Gradient Glow */}
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
              className="absolute w-1.5 h-1.5 bg-[#25baff] rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-3xl font-extrabold leading-tight max-w-4xl">
            If you’re ready to grow your brand on social media, partner with us
            — we’ll help you build strong engagement and real results.
          </h2>

          {/* BUTTON */}
          <button
            className="
    bg-[#25baff] text-[#020202]
hover:bg-[#a8d97c]

    px-6 py-3
    text-sm md:text-base
    font-semibold
    rounded-full
    shadow-md
    hover: cursor-pointer
    hover:shadow-lg
    transition-all duration-300
    whitespace-nowrap"
          >
            Contact Now
          </button>
        </div>
      </section>

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
                {/* Question */}
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.35,
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
                          duration: 0.35,
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
                  className="w-full flex items-center justify-between
            px-6 py-5 text-left font-semibold text-[#020202]"
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
                    <FiPlus className="text-gray-600 text-xl" />
                  )}
                </button>

                {/* Answer */}
                <div className="faq-content px-6 overflow-hidden h-0 opacity-0">
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

export default SocialMediaMarketing;
