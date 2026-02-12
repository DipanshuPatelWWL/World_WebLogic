import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  FaCode,
  FaLaptopCode,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/web-dev-banner.jpg";
import WebDesign1 from "../../assets/services/web-development.jpg";

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
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
      question: "What web development solutions do you provide?",
      answer:
        "We deliver end-to-end web development services such as PHP development, WordPress solutions, and JavaScript-based applications. Our expertise also includes custom web apps, e-commerce development, third-party API integrations, and website performance enhancement.",
    },
    {
      question: "Which technologies and frameworks do you work with?",
      answer:
        "Our developers work with modern technologies including PHP, WordPress, JavaScript, HTML5, CSS3, Laravel, React, and Node.js. We continuously upgrade our skills to implement the latest tools and frameworks for high-quality web solutions.",
    },
    {
      question:
        "How do you maintain the quality and security of your web projects?",
      answer:
        "We follow industry best practices, perform detailed testing, and apply strong security standards during development. Our process includes code reviews, functionality testing, security checks, and regular updates to keep applications safe and reliable.",
    },
    {
      question:
        "Can you upgrade or migrate my existing website to a new platform?",
      answer:
        "Yes, we handle website migrations and upgrades efficiently. Whether it’s shifting to a new platform, redesigning the interface, adding new features, or improving speed and performance, our team ensures a smooth transition.",
    },
    {
      question:
        "Do you offer post-development support and maintenance services?",
      answer:
        "Yes, we provide continuous maintenance and technical support to keep your website secure and optimized. Our services include updates, monitoring, bug resolution, performance improvements, and ongoing assistance whenever required.",
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
        <div className="absolute inset-0 bg-black/70" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-6 text-lg text-gray-300">Web Development</p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Our Web
            <span className="text-[#25baff]"> Development Solutions</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            In today’s digital world, a powerful backend and seamless
            functionality are just as important as design. A professionally
            developed website ensures speed, security, scalability, and smooth
            performance. Is your website built to handle growth and deliver a
            flawless user experience?
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
            Powerful & Scalable
            <span className="text-[#25baff]"> Web Development</span>
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
          </h3>

          <p className="text-gray-700 mb-6">
            Building a successful website involves much more than visuals. It
            requires strong architecture, clean coding, and a deep understanding
            of user behavior. A well-developed website ensures stability,
            performance, and long-term growth for your business.
          </p>

          <p className="text-gray-700 mb-6">
            Our team develops websites that are fast, secure, and tailored to
            your business needs. We focus on creating platforms that not only
            stand out but also deliver smooth functionality for every visitor.
          </p>

          <p className="text-gray-700 mb-6">
            From custom web applications to PHP-based solutions and advanced
            backend systems, we provide complete development services. Our goal
            is to build a reliable, high-performing website that offers seamless
            navigation and an exceptional user experience.
          </p>
        </div>
      </section>

      {/* ================= list ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">

          {/* Updated Heading Style */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Our Web Development
              <span className="text-[#25baff]"> Services Include</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <FaLaptopCode />, text: "Web Application Development" },
              { icon: <FaCode />, text: "Custom Software Development" },
              { icon: <FaPhp />, text: "PHP Development Solutions" },
              { icon: <FaReact />, text: "MERN Stack Development" },
              { icon: <FaNodeJs />, text: "Node.js Backend Development" },
              { icon: <FaDatabase />, text: "Database Design & Integration" },
              { icon: <FaReact />, text: "API Development & Integration" },
              { icon: <FaLaptopCode />, text: "Website Maintenance & Support" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-center gap-4
          shadow-lg shadow-[#25baff]/10
          transition-all duration-500
          hover:-translate-y-2
          hover:bg-[#25baff]
          hover:border-[#25baff]
          hover:shadow-2xl hover:shadow-[#25baff]/40"
              >
                <div
                  className="text-[#a8d97c]
 text-2xl
            group-hover:text-white transition-colors duration-300"
                >
                  {item.icon}
                </div>

                <p
                  className="text-black text-lg leading-relaxed
            group-hover:text-white transition-colors duration-300"
                >
                  {item.text}
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
            If you're ready to build a high-performing website, connect with us
            — we’ll turn your vision into a powerful digital reality.
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
                    className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
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

export default WebDevelopment;
