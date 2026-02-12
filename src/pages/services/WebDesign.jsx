import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/Web-designing-banner.jpg";
import WebDesign1 from "../../assets/services/web-designing.jpg";

gsap.registerPlugin(ScrollTrigger);

const WebDesign = () => {
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
      question: "What is included in your web design services?",
      answer:
        "Our web design services include custom website layouts, fully responsive design, basic SEO setup, CMS integration, e-commerce functionality if required, and post-launch support to ensure smooth performance.",
    },
    {
      question: "How much time do you need to complete a website?",
      answer:
        "The development timeline depends on the project scope and features. On average, a standard business website takes around 3 to 6 weeks, while more advanced or customized websites may take longer.",
    },
    {
      question: "Do you create responsive and mobile-optimized websites?",
      answer:
        "Yes, every website we design is fully responsive and optimized for all screen sizes. We make sure it delivers a seamless experience across mobile phones, tablets, and desktops.",
    },
    {
      question: "Will I be able to manage my website after it goes live?",
      answer:
        "Yes, we develop websites using easy-to-manage CMS platforms, allowing you to update text, images, and other content without technical expertise. We also provide basic guidance to help you manage it confidently.",
    },
    {
      question: "Do you offer website maintenance and technical support?",
      answer:
        "Yes, we provide ongoing maintenance and support services, including updates, security checks, backups, and performance monitoring to keep your website secure and running efficiently.",
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
          <p className="mt-6 text-lg text-gray-300">Web Designing</p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Our Professional
            <span className="text-[#25baff]"> Web Design Services</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A well-crafted website design is essential for creating a strong
            first impression and keeping visitors engaged. Does your website
            capture attention, build trust, and encourage users to explore
            further — or does it make them leave within seconds?
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
          <h3 className="text-3xl font-extrabold mb-5 text-[#020202] relative inline-block">
            Why Choose
            <span className="text-[#25baff]"> Our Web Design</span>
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
          </h3>

          <p className="text-gray-700 mb-4">
            Your website creates the first impression of your brand, so its
            design and user experience matter a lot. A well-designed site not
            only looks attractive but also builds trust and encourages visitors
            to become customers.
          </p>

          <p className="text-gray-700 mb-4">
            Our expert team designs websites that are visually appealing, easy
            to navigate, and aligned with your business goals. We use proven
            strategies and modern design practices to ensure your website stands
            out and delivers a smooth user experience.
          </p>

          <p className="text-gray-700 mb-4">
            Whether you are starting fresh or redesigning your existing site, we
            provide tailored web design solutions for every industry. From
            simple and clean layouts to bold and engaging designs, we create
            websites that truly represent your business.
          </p>

          <p className="text-gray-700 mb-4">
            In addition to great design, we focus on functionality and
            performance to ensure your website runs smoothly across all devices.
            Our goal is to deliver a complete web solution that supports your
            growth and strengthens your online presence.
          </p>
        </div>
      </section>

      {/* ================= list ================= */}
 <section className="bg-gray-50 py-24">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-[#020202] mb-14">
      How Our Web Design Services Empower Your Business
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        "We create fully responsive websites that perform smoothly on all devices.",
        "Our designs follow SEO best practices to improve search rankings.",
        "We enhance user experience to keep visitors engaged longer.",
        "We design layouts that strengthen your brand identity and credibility.",
        "We optimize website speed for better performance and lower bounce rates.",
        "We structure content strategically to increase lead generation.",
        "We integrate strong call-to-actions to boost conversions.",
        "We build scalable websites that grow with your business.",
      ].map((text, index) => (
        <div
          key={index}
          className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
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
            If you’re looking for a powerful and results-driven website, partner
            with us — we’ll deliver beyond your expectations.
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
            Frequently Asked <span className="text-[#25baff]"> Questions</span>
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
                  <span className={activeFaq === index ? "text-[#25baff]" : ""}>
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

export default WebDesign;
