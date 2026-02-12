import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiSmartphone, FiTablet } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/mobile-app-banner.jpg";
import WebDesign1 from "../../assets/services/mobile-app-dev.jpg";

gsap.registerPlugin(ScrollTrigger);

const AppDevelopment = () => {
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
    question:
      "What mobile app development services do you provide?",
    answer:
      "We deliver complete mobile app development solutions for both iOS and Android platforms. Our services include custom app development, UI/UX design, testing, deployment, and continuous maintenance and technical support.",
  },
  {
    question: "What is your process for developing a mobile application?",
    answer:
      "Our process begins with understanding your business goals and target audience. We then conduct research, plan the project, design the interface, develop the application, and perform thorough testing before launch. We follow an agile approach to ensure flexibility and timely delivery.",
  },
  {
    question:
      "Do you support both native and cross-platform app development?",
    answer:
      "Yes, we build both native and cross-platform applications. For native apps, we use technologies like Swift and Kotlin, while for cross-platform solutions, we work with frameworks such as React Native and Flutter to ensure seamless performance across devices.",
  },
  {
    question: "Can you assist with app store submission and optimization?",
    answer:
      "Yes, we handle the complete app store submission process, including preparing listings and ensuring compliance with platform guidelines. We also provide app store optimization (ASO) services to improve visibility and increase downloads.",
  },
  {
    question:
      "Do you provide post-launch support and regular updates?",
    answer:
      "Absolutely. We offer ongoing maintenance services that include bug fixes, performance improvements, security updates, and feature enhancements to keep your app running smoothly and up to date.",
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
          <p className="mt-6 text-lg text-gray-300">App Development</p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Mobile App
            <span className="text-[#25baff]"> Development Services</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            In today’s mobile-first world, having a powerful and user-friendly
            application is essential for business growth. Is your mobile app
            designed to engage users, deliver seamless performance, and drive
            real results?
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
            Smart &
            <span className="text-[#25baff]"> Scalable App Development</span>
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
          </h3>

          <p className="text-gray-700 mb-6">
            A mobile app is essential for connecting with your audience and
            growing your business. We develop creative and result-driven apps
            tailored to your goals.
          </p>

          <p className="text-gray-700 mb-6">
            Our team combines design and technology to build apps that look
            great and perform smoothly across devices.
          </p>

          <p className="text-gray-700 mb-6">
            We focus on user experience, speed, and security to ensure long-term
            success for your application.
          </p>

          <p className="text-gray-700">
            From concept to launch, we provide complete support to turn your
            idea into a powerful mobile solution.
          </p>
        </div>
      </section>

      {/* ================= Why Choose Us ================= */}
      <section className="bg-gray-50 py-24">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-[#020202] mb-14 text-center">
      Why Choose
      <span className="text-[#25baff]"> Us</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        "Experienced team with strong technical expertise.",
        "High-quality app development with modern standards.",
        "Cost-effective solutions with timely delivery.",
        "Robust and scalable mobile applications.",
        "Deep understanding of latest mobile technologies.",
        "User-focused design with smooth navigation.",
        "Secure coding practices and data protection.",
        "Complete support from development to deployment.",
      ].map((text, index) => (
        <div
          key={index}
          className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
          shadow-lg shadow-[#25baff]/10
          transition-all duration-500
          hover:-translate-y-2
          hover:bg-[#25baff]
          hover:border-[#25baff]
          hover:shadow-2xl hover:shadow-[#25baff]/40"
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

   <section className="bg-white py-28 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-[#020202] mb-16">
      Our Mobile App Services
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Card 1 */}
      <div
        className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
      >
        <FiSmartphone className="text-5xl text-[#25baff] mx-auto mb-6" />

        <h3 className="text-xl font-bold text-[#020202] mb-6">
          iOS App Development
        </h3>

        <p className="text-gray-600 leading-relaxed">
          We build high-performance iOS applications designed for smooth
          functionality and premium user experience. From startups to
          enterprises, our apps are crafted to meet Apple’s standards and
          exceed user expectations.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
      >
        <FiTablet className="text-5xl text-[#25baff] mx-auto mb-6" />

        <h3 className="text-xl font-bold text-[#020202] mb-6">
          iPad & Tablet Apps
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Our tablet app solutions are optimized for larger screens,
          delivering engaging layouts and seamless navigation. We design apps
          that enhance usability and provide an immersive experience.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 
        shadow-lg shadow-[#25baff]/30
        hover:border-[#25baff] 
        hover:shadow-2xl hover:shadow-[#25baff]/40
        hover:-translate-y-3 transition-all duration-300"
      >
        <FaAndroid className="text-5xl text-[#25baff] mx-auto mb-6" />

        <h3 className="text-xl font-bold text-[#020202] mb-6">
          Android App Development
        </h3>

        <p className="text-gray-600 leading-relaxed">
          We develop scalable and feature-rich Android apps tailored to your
          business needs. Our focus is on performance, security, and delivering
          a consistent experience across all Android devices.
        </p>
      </div>
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

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-3xl font-extrabold leading-tight max-w-4xl">
         If you’re ready to launch a powerful and impactful App, connect with us — we’re committed to delivering results that exceed your expectations.
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

export default AppDevelopment;
