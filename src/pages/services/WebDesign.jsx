import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
      question: "What services do you offer in your web design package?",
      answer:
        "We offer a comprehensive web design package that includes custom website design, responsive design for mobile and tablet compatibility, search engine optimization (SEO), content management system (CMS) integration, e-commerce solutions, and ongoing maintenance and support.",
    },
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "The timeline for designing and developing a website varies depending on the complexity and specific requirements of the project. Typically, a standard business website can take between 4 to 8 weeks from initial consultation to launch. More complex projects may require additional time.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all the websites we design are mobile-friendly. We ensure that your website looks great and functions well on all devices, including smartphones, tablets, and desktops, providing a seamless user experience for your visitors.",
    },
    {
      question: "Can I update my website content on my own after it’s built?",
      answer:
        "Absolutely! We build our websites using user-friendly content management systems (CMS) like WordPress, which allows you to easily update and manage your website content without needing any technical skills. We also provide training and support to help you get started.",
    },
    {
      question:
        "Do you provide ongoing support and maintenance after the website is launched?",
      answer:
        "Yes, we offer ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and running smoothly. Our support services include regular updates, security monitoring, backups, and technical assistance as needed.",
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
          <p className="mt-6 text-lg text-gray-300">Home - Web Design</p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">

            Our Web
            <span className="text-[#25baff]"> Design Services</span>

          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The design of your website is one of the most important factors that
            ensure whether a visitor will stay on your page or not. So, do you
            have a website that keeps customers or sends them clicking the cross
            at the top of your tab?
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
            Yes, your website can make a huge impression on your clients, which
            makes it very important that you pay utmost importance to the way it
            looks and the way it makes a visitor feel, and most of all, whether
            it has the power to turn a visitor into a customer.
          </p>
          <p className="text-gray-700 mb-6">
            Our committed team helps you design sites that are not just pleasant
            to the eye but easy to navigate too with a good user experience. We
            employ all the right strategies that we have gained from our years
            of experience. We help you with all the advice you need and give you
            designs that go well with the kind of business that you run.
          </p>
          <p className="text-gray-700">
            It is for this reason that you can entirely trust us when it comes
            to this domain of digital marketing. We will ensure that you have a
            website that is equal to that of your competitors. Apart from this,
            we also offer you a wide range of web solutions that you would need
            in order to keep your business thriving.
          </p>
          <p className="text-gray-700 mb-6 ml-5"></p>
        </div>
        <p className="text-gray-700 ml-5">
          So, whether you are starting a new online business or just revamping
          your current business site, we know exactly how to help you. We will
          help you communicate your business to clients in an interesting
          manner.
        </p>
        <p className="text-gray-700">
          It doesn’t matter whether you are interior designing, healthcare or
          any other vertical. We will give your website just the kind of
          professional touch that it needs. So, whether you want a website that
          stands out from the rest, is informative and at the same time
          interesting or just simple and easy to navigate, we will provide you
          with the kind of solution that you need.
        </p>
      </section>

      {/* ================= list ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#020202] mb-14">

            What Our Web Designing Solutions Help You With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "You have a website that is SEO friendly.",
              "We will increase your mobile user traffic.",
              "We will promote your brand and in turn increase your sales.",
              "We will get your casual visitors converted into buyers.",
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

export default WebDesign;
