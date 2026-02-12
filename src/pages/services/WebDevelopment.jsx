import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
      question: "What web development services does World Web Logic offer?",
      answer:
        "We offer comprehensive web development services including PHP development, WordPress development, and JavaScript development. Our services also extend to custom web application development, e-commerce solutions, API integrations, and performance optimization.",
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer:
        "Our team specializes in a variety of technologies and frameworks, including PHP, WordPress, JavaScript, HTML5, CSS3, Laravel, React and Node.js. We stay updated with the latest industry trends to provide cutting-edge solutions for our clients.",
    },
    {
      question: "How do you ensure the quality and security of the web applications you develop?",
      answer:
        "Quality and security are our top priorities. We follow best practices in coding, conduct thorough testing, and implement robust security measures to protect your website and user data. Our development process includes code reviews, automated testing, and regular updates to address any security vulnerabilities.",
    },
    {
      question: "Can you help with the migration and upgrade of existing websites?",
      answer:
        "Yes, we can assist with migrating and upgrading existing websites. Whether you need to move your website to a new platform, update its design, enhance functionality, or improve performance, our team has the expertise to handle the process smoothly and efficiently.",
    },
    {
      question:
        "Do you provide ongoing maintenance and support after the development is complete?",
      answer:
        "Absolutely! We offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and running smoothly. Our support packages include regular updates, security monitoring, bug fixes, performance optimization, and technical assistance as needed.",
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
          <p className="mt-6 text-lg text-gray-300">Home - Web Development</p>
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
            The first impression is the last impression, and in the world of
            online business, the design of your website is what makes the first
            impression. Hence the reason that this should be a good one. So, how
            appealing and responsive is your website?
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

        <div className="gsap-item ">
          <p className="text-gray-700 mb-6">
            Here are a lot of things that you need to keep in mind when it comes
            to working on your website. If you thought it was all about colors
            and images, then you are wrong. Understanding the minds of your
            visitors, for one, is an important thing that you need to keep in
            mind here.
          </p>
          <p className="text-gray-700 mb-6">
            Here, we will help you create a website that stands out from the
            rest and at the same time, catches the attention of a first time
            user.
          </p>
          <p className="text-gray-700">
            And did you know that there is more to a website than being catching
            and standing out? Hence, we also provide importance to ensuring that
            your website is easy to use with a good user experience. This way,
            customers won’t have a hard time navigating and your web page will
            be a pleasant experience. Be it web development service or PHP
            development service that you want, we are here to help you. We
            provide all the solutions that you need not just for a jaw dropping
            website but everything else that you would want in a good website.
          </p>
          <p className="text-gray-700 mb-6 ml-5"></p>
        </div>
        <p className="text-gray-700 ml-5">
          Approach us for a more responsive website and see how your customers
          are going to increase by the day. We will keep your website trendy and
          use all the right shades and colors to make the right impression.
        </p>
        <p className="text-gray-700">
          This way, your website won’t just be different from that of your
          competitors but will perform better too. This way, you can create a
          striking online presence to grow your business.
        </p>
      </section>

      {/* ================= list ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
         <h2 className="text-4xl font-bold text-[#020202] mb-14">

            That being said, the following are some of the services that we can
            offer:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Web application development",
              "Custom application development",
              "PHP development",
              "MERN development",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-center gap-4
                     transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl hover:border-[#25baff]
"
              >
                <span className="text-[#a8d97c] text-2xl font-bold">»</span>

                <p className="text-black text-lg leading-relaxed">{text}</p>
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
            If you want an effective website, approach us and you won’t be
            disappointed.
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

      <section ref={addSectionRef} className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="gsap-item text-4xl font-extrabold text-[#25baff] mb-12">

            FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="gsap-item border border-gray-200 rounded-xl
      hover:border-[#25baff]
 transition-colors"
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
            px-6 py-5 text-left font-semibold text-[#020202]
"
                >
                  <span
                  className={activeFaq === index ? "text-[#25baff]" : ""}

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
