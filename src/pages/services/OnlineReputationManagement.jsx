import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/ORM-Banner.jpg";
import WebDesign1 from "../../assets/services/orm-img.jpg";

gsap.registerPlugin(ScrollTrigger);

const OnlineReputationManagement = () => {
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
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 60, scale: 0.96 },
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
      question:
        "What is Online Reputation Management (ORM) and why does it matter?",
      answer:
        "Online Reputation Management (ORM) is the process of monitoring, managing, and improving how your brand is perceived online. A strong reputation builds customer trust, enhances credibility, and directly influences purchasing decisions and long-term business growth.",
    },
    {
      question:
        "What is included in your Online Reputation Management services?",
      answer:
        "Our ORM services cover monitoring brand mentions, managing online reviews, responding to customer feedback, promoting positive content, improving search results, and providing detailed performance reports to track your brand image.",
    },
    {
      question: "How do you track and monitor my online presence?",
      answer:
        "We use advanced monitoring tools to track reviews, social media mentions, search results, forums, and other online platforms. This helps us stay updated on public sentiment and respond quickly to protect your brand image.",
    },
    {
      question: "Can negative reviews or harmful content be removed?",
      answer:
        "While not all negative content can be directly removed, we apply strategies to reduce its visibility, promote positive content, and professionally manage responses to protect and improve your brand’s perception.",
    },
    {
      question:
        "How long does it take to see improvements in online reputation?",
      answer:
        "Results depend on your current reputation status and the strategies implemented. In most cases, noticeable improvements can be seen within a few months, with continuous efforts ensuring long-term reputation growth and stability.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-[#020202]">
      {/* HERO */}
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
            Online Reputation Management
          </p>
        </div>
      </section>

      {/* TITLE */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Protect & Strengthen Your
            <span className="text-[#25baff]"> Online Reputation</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Your brand’s online image plays a crucial role in building trust and
            attracting customers. Ignoring reviews, feedback, and digital
            presence can impact your growth. We help you monitor, manage, and
            enhance your reputation across platforms to ensure your business
            maintains a strong and positive online presence.
          </p>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item rounded-2xl overflow-hidden group">
          <img
            src={WebDesign1}
            alt="Mobile App"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="gsap-item">
          {/* Heading */}
          <h3 className="text-3xl font-extrabold mb-8 text-[#020202] relative inline-block">
            Complete
            <span className="text-[#25baff]"> Reputation Management</span>
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
          </h3>

          <p className="text-gray-700 mb-6">
            Today, most customers research a brand online before making a
            decision. What they see about your business directly impacts their
            trust. We monitor and manage your digital presence to ensure your
            brand creates a strong and positive impression.
          </p>

          <p className="text-gray-700 mb-6">
            Our strategies focus on building credibility, improving reviews, and
            strengthening your online image. We help you stay in control of how
            your brand is perceived across platforms.
          </p>

          <p className="text-gray-700">
            By analyzing feedback, tracking mentions, and managing public
            interactions, we ensure your reputation supports business growth and
            attracts more opportunities.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#020202] mb-14 text-center">
            How We Manage Your
            <span className="text-[#25baff]"> Online Reputation</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "We analyze your online presence, including reviews, mentions, and content, to understand how your brand is perceived.",
              "We identify negative feedback and apply strategies to strengthen your brand image and credibility.",
              "We create positive, engaging content and encourage authentic reviews to build customer trust.",
              "We continuously monitor your digital presence to maintain a strong and positive reputation.",
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

      {/* CTA */}
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
            Strengthen and safeguard your digital presence with our professional
            Online Reputation Management services — start shaping a powerful and
            positive brand image today.
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
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

export default OnlineReputationManagement;
