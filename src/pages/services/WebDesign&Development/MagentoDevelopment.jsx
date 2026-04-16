import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VscGraph } from "react-icons/vsc";
import { GoGraph } from "react-icons/go";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

import Banner from "../../../assets/services/magentowebsite/banner.jpg";
import Img from "../../../assets/services/magentowebsite/img1.avif";
import Img2 from "../../../assets/services/magentowebsite/img2.avif";
import Card1 from "../../../assets/services/magentowebsite/card1.avif";
import Card2 from "../../../assets/services/magentowebsite/card2.avif";
import Card3 from "../../../assets/services/magentowebsite/card3.avif";
import Card4 from "../../../assets/services/magentowebsite/card4.avif";
import Card5 from "../../../assets/services/magentowebsite/card5.avif";
import Card6 from "../../../assets/services/magentowebsite/card6.jpg";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MagentoDevelopment = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const slides = [
    {
      title: "Requirement Gathering & ",
      highlight: "Analysis",
      image: Card1,
      content:
        "We begin every Magento project with detailed documentation to ensure complete clarity and alignment. This process helps both parties understand the goals, scope, and expectations clearly, creating a solid blueprint that guides the project toward successful execution and collaboration.",
    },
    {
      title: "Designs, Wireframes & ",
      highlight: "Mockups",
      image: Card2,
      content:
        "We collaborate closely with clients to create visually appealing, user-friendly designs aligned with their brand and target audience. Through detailed wireframes and interactive mockups, we provide a clear preview of the final product’s structure and functionality. We refine each concept until it perfectly matches the client’s vision and business goals.",
    },
    {
      title: "Development & ",
      highlight: "Customization",
      image: Card3,
      content:
        "Once the design is approved, our Magento developers transform concepts into a fully functional store using Magento’s powerful framework. We customize features to match your specific business needs and provide a demo or prototype to showcase the final look and feel. From frontend design to backend development, we follow best practices to ensure performance, security, and scalability.",
    },
    {
      title: "Testing & Quality ",
      highlight: "Assurance",
      image: Card4,
      content:
        "Quality is at the core of our Magento development process. We perform thorough testing to detect and fix bugs, performance issues, and usability concerns before launch. From functionality checks to cross-browser compatibility testing, we ensure a smooth and flawless user experience. We maintain open communication throughout, implementing client feedback promptly and keeping you informed at every stage.",
    },
    {
      title: "Deployment & ",
      highlight: "Launch",
      image: Card5,
      content:
        "After final approval, we smoothly migrate your Magento store to the live server, ensuring a secure and seamless launch. Our team supports final testing, UAT, training, and source code deployment to guarantee readiness. We closely monitor the launch to resolve any issues quickly, ensuring a disruption-free and successful go-live experience.",
    },
    {
      title: "Performance Monitoring & ",
      highlight: "Optimization",
      image: Card6,
      content:
        "We continuously monitor your Magento store’s performance, tracking speed, traffic, and user engagement to identify improvement opportunities. From performance tuning to SEO enhancements, we implement data-driven strategies that optimize your website and support long-term business growth.",
    },
  ];

  const faqs = [
    {
      question: "What is Magento website development?",
      answer:
        "Magento website development involves building and customizing eCommerce stores using the Magento platform. It includes design, feature integration, and performance optimization to create a user-friendly and search-optimized online store.",
    },
    {
      question:
        "Why should I choose Magento development services for my eCommerce website?",
      answer:
        "Magento offers scalability, flexibility, SEO capabilities, strong security, and extensive customization options—making it ideal for businesses looking to grow and manage complex eCommerce operations.",
    },
    {
      question: "Is Magento suitable for all types of eCommerce businesses?",
      answer:
        "Yes, Magento is highly flexible and can support businesses of all sizes and industries. Its customizable features allow it to adapt to unique product catalogs and operational needs.",
    },
    {
      question: "What Magento development services do you provide?",
      answer:
        "We offer store design and development, custom module and extension development, theme customization, third-party integrations, performance optimization, and ongoing maintenance support.",
    },
    {
      question: "What makes your Magento development team different?",
      answer:
        "Our experienced developers follow best practices, stay updated with Magento advancements, and ensure transparent communication and dedicated support throughout the project lifecycle.",
    },
    {
      question: "Can you integrate Magento with other business systems?",
      answer:
        "Yes, we integrate Magento with ERP, CRM, PIM systems, payment gateways, and other third-party tools to streamline operations and improve overall efficiency.",
    },
    {
      question: "How do you ensure Magento website security?",
      answer:
        "We implement regular updates, security patches, SSL encryption, secure payment integrations, and routine audits to protect your store from threats and vulnerabilities.",
    },
  ];

  const accordionData = [
    {
      title: "Magento Development Expertise",
      content:
        "Hiring Magento development experts gives you access to professionals specialized in eCommerce strategy, development, and optimization. They understand Magento’s architecture, latest updates, and industry best practices, enabling them to build tailored solutions that increase conversions and sales.",
    },
    {
      title: "Dedicated Development Team",
      content:
        "A professional Magento company provides a dedicated team of experienced developers who manage upgrades, customization, and store optimization efficiently, ensuring your eCommerce platform performs at its best.",
    },
    {
      title: "Optimized Magento Store",
      content:
        "Magento development companies leverage advanced tools for SEO, marketing, and catalog management to improve performance and user experience. Whether building a new store, optimizing an existing one, or integrating third-party extensions, solutions are customized to your business goals.",
    },
    {
      title: "Time and Resource Savings",
      content:
        "Magento development requires technical expertise and continuous monitoring. Professional developers follow industry standards and conduct thorough testing to deliver a secure, reliable, and high-performing website, reducing downtime and technical issues.",
    },
    {
      title: "Ongoing Support and Maintenance",
      content:
        "Magento development is a long-term investment. Agencies provide continuous support, regular updates, troubleshooting, and performance optimization to keep your store secure, stable, and growth-focused.",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  //  Auto Slide Effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // change slide every 4 sec

    return () => clearInterval(interval);
  }, [current, isPaused]);

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
          <p className="mt-6 text-lg text-gray-300">Magento Development</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="ml-15">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Magento
            <span className="text-[#25baff]"> Development?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Magento development refers to building and customizing powerful
            eCommerce websites using Magento, one of the world’s leading
            eCommerce platforms. It enables online businesses to create
            flexible, scalable, and feature-rich stores that deliver a highly
            personalized shopping experience.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Some of the key benefits of Magento eCommerce development services
            include:
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Advanced customization capabilities</li>
            <li>Highly scalable architecture for growing businesses</li>
            <li>Strong security and data protection features</li>
            <li>
              Smooth third-party integrations (payment gateways, CRM, ERP,
              shipping, etc.)
            </li>
            <li>Detailed analytics and reporting tools</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How is it Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Custom module development to add unique functionality</li>
            <li>
              Theme and template customization for a branded user experience
            </li>
            <li>Integration of third-party extensions and APIs</li>
            <li>Regular updates, security patches, and ongoing maintenance</li>
          </div>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How Magento Development Services Help Increase Your
            <span className="text-[#25baff]"> Online Sales?</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 p-8">
            Magento development boosts sales through better UX, smooth checkout,
            customization, and stronger online visibility. Here’s how it drives
            revenue growth:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOutlineSettingsEthernet,
                head: "Custom Development Solutions",
                text: "Magento web development services deliver tailored solutions that utilize the platform’s flexibility to build unique features aligned with your business goals. This improves user experience and helps increase sales.",
              },
              {
                icon: VscGraph,
                head: "Performance Optimization",
                text: "Optimizing your Magento eCommerce website improves speed, SEO, and overall performance. A fast, well-optimized store delivers a smooth shopping experience, lowers bounce rates, and increases conversions.",
              },
              {
                icon: MdSecurity,
                head: "Security Enhancements",
                text: "Magento development services strengthen your store with regular updates, advanced security patches, and firewall protection. This safeguards against cyber threats, builds customer trust, and ultimately boosts sales.",
              },
              {
                icon: GoGraph,
                head: "More Customer Engagement",
                text: "Magento eCommerce websites with clear navigation and engaging content encourage repeat visits, increasing customer engagement, satisfaction, and loyalty.",
              },
              {
                icon: MdOutlineIntegrationInstructions,
                head: "Integration Services",
                text: "Magento development agencies seamlessly integrate payment gateways, CRM, ERP, and other third-party tools to streamline operations, improve efficiency, and drive sales growth.",
              },
              {
                icon: MdOutlineMobileFriendly,
                head: "Increased Conversion Rate",
                text: "A well-designed Magento website simplifies the purchasing process, enabling users to complete orders quickly and smoothly. With responsive design and optimized checkout, agencies ensure a seamless shopping experience that increases conversions.",
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
                    className="text-4xl text-[#25baff] mb-6 mx-auto group-hover:text-white transition-colors duration-300"
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
              Why Hiring a Magento Development Company Is a Smart
              <span className="text-[#25baff]"> Business Move?</span>
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
              <p className="text-gray-600 mb-6">
                Hiring a Magento eCommerce development company boosts sales and
                profits. Here’s how partnering with experts makes a difference:
              </p>

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
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%), radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
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
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
            Talk To Our Experts Now
          </h2>

          <NavLink to="/contact">
            <button className="bg-[#25baff] cursor-pointer text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
              Contact Now
            </button>
          </NavLink>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] p-2">
            Why Leading Businesses Choose Us for Magento Development
            <span className="text-[#25baff]"> — 6 Key Reasons</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            Choosing the right Magento agency is key to eCommerce success.
            Here’s why businesses trust us.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Magento Expertise",
                text: "We specialize in upgrading existing Magento stores and building high-performance eCommerce websites from scratch—delivered on time. Our experienced Magento developers follow industry best practices to implement custom features, advanced eCommerce functionality, and strong security measures for long-term success.",
              },
              {
                head: "Proven Track Record",
                text: "Our portfolio highlights successful Magento projects across diverse industries, reflecting our commitment to quality and client satisfaction. Explore our work and testimonials to see the results we deliver.",
              },
              {
                head: "Customization Capabilities",
                text: "Every business is unique, and so are our Magento solutions. We deliver highly customized features, seamless integrations, and real-time website management to match your specific needs and turn your vision into reality.",
              },
              {
                head: "Expert Team",
                text: "Our skilled Magento team ensures seamless integration with ERP, CRM, payment gateways, and third-party extensions. We optimize every connection to streamline operations, improve efficiency, and enhance the overall shopping experience.",
              },
              {
                head: "Transparent Reporting",
                text: "Our support goes beyond project completion. We provide clear reporting, continuous monitoring, and regular Magento updates to keep your store running smoothly and competitive for long-term growth.",
              },
              {
                head: "Dedicated Support",
                text: "We believe our clients are our greatest asset. With a 90%+ retention rate, our long-term partnerships reflect our commitment to quality service, trust, and consistent support. Explore our client testimonials to see the relationships we’ve built.",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
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

      {/* ALTERNATE SECTION  */}
      <section
        className="bg-[#f0f9ff] py-24 px-6 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Strategic Magento Development Process for
            <span className="text-[#25baff]"> eCommerce Success</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-4">
            We follow a structured approach—from planning to launch and
            optimization—to ensure performance, scalability, and long-term
            eCommerce success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Slides */}
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${index === current
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 translate-x-10"
                  }`}
              >
                {/* White Card Background */}
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 relative inline-block">
                        {slide.title.split("&")[0]} &
                        <span className="text-[#25baff] ml-2">
                          {slide.highlight}
                        </span>
                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                      </h2>

                      <p className="text-gray-600 leading-relaxed">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#25baff] hover:text-white transition"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#25baff] hover:text-white transition"
          >
            <ChevronRight size={15} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${current === index ? "bg-[#25baff] w-4" : "bg-gray-300 w-3"
                  }`}
              ></button>
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

      <section className="py-10 lg:py-14 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202]">
              Affordable Package of
              <span className="text-[#25baff]"> Magento Website</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* SILVER */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-6">SILVER</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-[#2E7D32] align-top pr-1">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#2E7D32]">400</span>
                  <p className="italic text-sm mt-1">/ month</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">
                  Design Partially Custom – 1 Iteration
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Layered Sliders ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">
                  Responsive (Desktop, Tablet, Mobile) ✓
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">New Logo Design ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">HTML Email Templates ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Letterhead Design ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <Link to="/payment">
                  <button className="text-lg border border-[#25baff] mt-8 mb-8 px-8 py-2 rounded-2xl hover:bg-[#25baff] hover:text-white">
                    START TODAY
                  </button>
                </Link>
              </div>
            </div>

            {/* GOLD (POPULAR) */}
            <div className="border-4 border-[#25baff] rounded-xl relative">
              <div className="bg-[#25baff] py-5 text-center relative rounded-t-xl">
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

              <div className="bg-gray-50 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-[#E65100] align-top pr-1">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#E65100]">800</span>
                  <p className="italic text-sm mt-1">/ month</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">Custom Design – 2 Iterations</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Layered Sliders ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">
                  Responsive (Desktop, Tablet, Mobile) ✓
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">New Logo Design ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">HTML Email Templates ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Letterhead Design ✕</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <Link to="/payment">
                  <button className="text-lg mt-8 mb-8 px-8 py-2 rounded-2xl bg-[#25baff] text-white hover:bg-white hover:text-black border border-[#25baff]">
                    START TODAY
                  </button>
                </Link>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-6">
                PREMIUM
              </h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-6">
                  <span className="text-lg font-bold text-[#607AFE] align-top pr-1">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#607AFE]">
                    1800
                  </span>
                  <p className="italic text-sm mt-1">/ month</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">Custom Design – 4 Iterations</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Layered Sliders ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">
                  Responsive (Desktop, Tablet, Mobile) ✓
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">New Logo Design ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">HTML Email Templates ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Letterhead Design ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <Link to="/payment">
                  <button className="text-lg border border-[#25baff] mt-8 mb-8 px-8 py-2 rounded-2xl hover:bg-[#25baff] hover:text-white">
                    START TODAY
                  </button>
                </Link>
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
                className="gsap-item bg-white border border-gray-200 rounded-2xl shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300"
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
                    className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
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

export default MagentoDevelopment;
