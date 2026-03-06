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
import Img from "../../../assets/services/joomladev/img1.avif";
import Img2 from "../../../assets/services/joomladev/img2.avif";
import Card1 from "../../../assets/services/magentowebsite/card1.avif";
import Card2 from "../../../assets/services/magentowebsite/card2.avif";
import Card3 from "../../../assets/services/magentowebsite/card3.avif";
import Card4 from "../../../assets/services/magentowebsite/card4.avif";
import Card5 from "../../../assets/services/magentowebsite/card5.avif";
import Card6 from "../../../assets/services/magentowebsite/card6.jpg";
import Card7 from "../../../assets/services/joomladev/card.avif";

import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const JoomlaDev = () => {
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
      title: "Analysis & Strategy ",
      highlight: "Planning",
      image: Card1,
      content:
        "We begin with detailed documentation and research to clearly understand your business goals, target audience, and project requirements. This strategic planning phase acts as a blueprint, ensuring alignment, clarity, and a smooth Joomla development process from start to finish.",
    },
    {
      title: "Design, Wireframes & ",
      highlight: "Prototypes",
      image: Card2,
      content:
        "We create intuitive wireframes, mockups, and interactive design prototypes that align with your brand and user expectations. This stage allows you to visualize the website’s structure, flow, and functionality, ensuring the final design perfectly matches your business vision.",
    },
    {
      title: "Development & ",
      highlight: "Customization",
      image: Card3,
      content:
        "Once the design is approved, our developers transform it into a fully functional Joomla website using clean coding standards and best practices. We build secure, scalable front-end and back-end solutions, integrate essential features, and deliver custom functionality tailored to your specific business requirements.",
    },
    {
      title: "Testing & Quality ",
      highlight: "Assurance",
      image: Card4,
      content:
        "We perform thorough testing to ensure your Joomla website is secure, bug-free, and fully functional. From performance and usability checks to cross-browser compatibility, we refine every detail before launch while keeping you involved throughout the process.",
    },
    {
      title: "Deployment & ",
      highlight: "Launch",
      image: Card5,
      content:
        "After successful testing, we smoothly migrate your Joomla website to the live server with proper configuration and setup. We monitor the launch closely to ensure all features function perfectly and deliver a seamless go-live experience.",
    },
    {
      title: "Post-Launch Support ",
      highlight: "& Maintenance",
      image: Card6,
      content:
        "Our support continues even after launch. We provide ongoing maintenance, updates, and technical assistance to keep your Joomla website secure, optimized, and running smoothly as your business evolves.",
    },
    {
      title: "Performance Monitoring & ",
      highlight: "Optimization",
      image: Card7,
      content:
        "We continuously monitor your Joomla website’s speed, traffic, and user engagement to identify improvement opportunities. Through performance tuning and SEO strategies, we optimize your site for better visibility, higher engagement, and consistent business growth.",
    },
  ];

  const faqs = [
    {
      question: "What is Joomla website development?",
      answer:
        "Joomla website development involves building and managing websites using the Joomla CMS. It includes custom design, extension development, third-party integrations, and SEO optimization to create a secure and user-friendly website.",
    },
    {
      question:
        "Why should I choose Joomla development services for my business?",
      answer:
        "Joomla offers flexibility, scalability, and powerful features for growing businesses. With extensive extensions, strong security, and regular updates, it’s ideal for building customizable and high-performance websites.",
    },
    {
      question: "What Joomla development services do you provide?",
      answer:
        "We offer custom website development, template customization, extension and module development, migration and upgrades, SEO optimization, performance enhancement, and ongoing maintenance support.",
    },
    {
      question: "What makes your Joomla development team different?",
      answer:
        "Our experienced team delivers tailored, secure, and scalable Joomla solutions using best practices. We focus on transparency, timely delivery, and measurable results for your business.",
    },
    {
      question: "How do you ensure Joomla website security?",
      answer:
        "We implement secure coding standards, regular updates, security extensions, routine backups, and continuous monitoring to protect your Joomla website from threats.",
    },
    {
      question: "Do you provide ongoing Joomla support?",
      answer:
        "Yes, we offer continuous maintenance, updates, troubleshooting, performance monitoring, and security support to keep your website running smoothly.",
    },
    {
      question: "How long does Joomla website development take?",
      answer:
        "Project timelines depend on complexity and requirements. On average, a Joomla website takes 4–10 weeks, including design, development, testing, and deployment.",
    },
  ];

  const accordionData = [
    {
      title: "Joomla Development Expertise",
      content:
        "Work with experienced Joomla specialists who understand CMS architecture, customization, and performance optimization. They apply best practices to build secure, scalable, and conversion-focused websites tailored to your business goals.",
    },
    {
      title: "Dedicated Development Team",
      content:
        "A professional Joomla company provides a skilled and dedicated team to handle development, upgrades, and enhancements efficiently. Their expertise ensures smooth project execution and high-quality results.",
    },
    {
      title: "Performance & SEO Optimized Website",
      content:
        "Joomla experts implement SEO strategies, speed optimization, and advanced tools to improve visibility, user experience, and online sales. Whether building new or optimizing existing sites, they deliver growth-driven solutions.",
    },
    {
      title: "Time & Cost Efficiency",
      content:
        "Hiring professionals saves time and resources by avoiding technical errors and delays. With proper testing and optimization, they ensure your website runs smoothly, securely, and without downtime.",
    },
    {
      title: "Ongoing Support & Maintenance",
      content:
        "Joomla development companies offer continuous updates, security monitoring, and performance improvements. This keeps your website secure, updated, and aligned with evolving business needs.",
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
          <p className="mt-6 text-lg text-gray-300">Joomla Development</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="ml-15">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Joomla
            <span className="text-[#25baff]"> Development?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Joomla Development is the process of creating dynamic and
            feature-rich websites using Joomla, a free and open-source content
            management system (CMS). It enables businesses to build professional
            websites, web applications, and scalable online platforms with ease.
            Some of the primary benefits of Joomla Development.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Services are:
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Customizable and responsive website design</li>
            <li>Flexible and advanced content management</li>
            <li>Strong built-in security features</li>
            <li>Extensive extension and plugin support</li>
            <li>SEO-friendly structure</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How is it Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Installing Joomla CMS</li>
            <li>Configuring global and security settings</li>
            <li>Adding required extensions and plugins</li>
            <li>Customizing templates and layout design</li>
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
            How Joomla Dev Services Drive Business Growth &
            <span className="text-[#25baff]"> Online Success?</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 p-8">
            Joomla development services boost business growth by enhancing your
            online presence and performance. Here’s how they help increase
            revenue:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOutlineSettingsEthernet,
                head: "Scalable & Custom Web Solutions",
                text: "Joomla development services provide adaptable and scalable website solutions tailored to your business goals. With easy customization and future-ready architecture, your website can grow alongside your brand and support long-term success.",
              },
              {
                icon: VscGraph,
                head: "High-Performance & Fast Loading Website",
                text: "Our experts implement performance best practices such as caching optimization, CDN integration, and clean coding standards to deliver a fast and responsive website. This enhances user experience, lowers bounce rates, and helps improve conversions.",
              },
              {
                icon: MdSecurity,
                head: "Advanced Security & Protection",
                text: "Joomla development services implement strong security measures to protect your website from cyber threats. This ensures data safety, builds customer trust, and maintains your brand reputation for long-term business growth.",
              },
              {
                icon: MdOutlineIntegrationInstructions,
                head: "Seamless Third-Party Integrations",
                text: "Joomla development services enable smooth integration with CRM systems, payment gateways, marketing tools, and other third-party platforms. This streamlines operations, improves efficiency, and enhances overall business productivity.",
              },
              {
                icon: MdOutlineMobileFriendly,
                head: "Mobile-Optimized & Responsive Design",
                text: "Joomla development services follow a mobile-first approach to create fully responsive websites that deliver seamless experiences across all devices. This helps capture mobile users, improve engagement, and increase conversions and revenue.",
              },
              {
                icon: GoGraph,
                head: "Improved Visibility & Higher Conversions",
                text: "Joomla development services leverage built-in SEO features to enhance website visibility, improve search rankings, and attract targeted organic traffic. This increases brand exposure, generates quality leads, and boosts conversion rates.",
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
              Why Choose a Professional Joomla Web
              <span className="text-[#25baff]"> Development Company?</span>
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
                Hiring a Joomla development company enhances your online reach,
                conversions, and sales. Here’s why partnering with professionals
                makes a difference:
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
            6 Reasons to Choose Us as Your Trusted Joomla
            <span className="text-[#25baff]"> Development Agency</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            Choosing the right Joomla web development agency is key to your
            website’s success. See why businesses trust us for Joomla
            development.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Joomla Web Expertise",
                text: "We specialize in building and upgrading Joomla websites with precision and efficiency. Our experienced developers follow best practices to deliver secure, scalable, and feature-rich solutions, including custom development, CMS management, eCommerce integration, and performance optimization.",
              },
              {
                head: "Proven Track Record",
                text: "Our portfolio highlights successful Joomla projects delivered across various industries. We are committed to quality, performance, and client satisfaction, consistently delivering measurable results.",
              },
              {
                head: "Customization & Flexibility",
                text: "Every business is unique, and so are our Joomla solutions. We deliver fully customized websites with flexible features, seamless integrations, and scalable functionality tailored to your specific goals.",
              },
              {
                head: "Comprehensive Joomla Services",
                text: "We offer end-to-end Joomla development solutions, including custom design, theme and module development, component creation, plugin customization, performance optimization, and security enhancements—ensuring your website fully supports your business goals.",
              },
              {
                head: "Reliable & Ongoing Support",
                text: "Our partnership continues even after launch. We provide continuous support, timely updates, and proactive maintenance to ensure your Joomla store runs smoothly and stays competitive for long-term growth.",
              },
              {
                head: "High Client Satisfaction",
                text: "Our clients are at the heart of everything we do. With a strong retention rate and positive feedback, we focus on delivering quality service, long-term partnerships, and trusted Joomla development solutions that drive real results.",
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

      {/* Slider SECTION  */}
      <section
        className="bg-[#f0f9ff] py-24 px-6 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Strategic Joomla Development
            <span className="text-[#25baff]"> Process</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-4">
            We follow a strategic approach to build secure, scalable, &
            high-performing Joomla websites aligned with your business goals
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

      {/* price section  */}

      <section className="py-10 lg:py-14 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202]">
              Affordable Package of
              <span className="text-[#25baff]"> Joomla Website</span>
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
                  Design Partially Custom – only 1 iteration
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Layered Sliders ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">
                  Responsive Site (Desktop, Tablet, Mobile) ✓
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">New Logo Design ×</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">HTML Email Templates ×</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Letterhead Design ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg border border-[#25baff] mt-8 mb-8 px-8 py-2 rounded-2xl hover:bg-[#25baff] hover:text-white">
                  START TODAY
                </button>
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
                <div className="py-4">
                  Design Custom Design – up to 2 iterations
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Layered Sliders ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">
                  Responsive Site (Desktop, Tablet, Mobile) ✓
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">New Logo Design ×</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">HTML Email Templates ×</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Letterhead Design ×</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg mt-8 mb-8 px-8 py-2 rounded-2xl bg-[#25baff] text-white hover:bg-white hover:text-black border border-[#25baff]">
                  START TODAY
                </button>
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
                <div className="py-4">
                  Design Custom Design – up to 4 iterations
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Layered Sliders ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">
                  Responsive Site (Desktop, Tablet, Mobile) ✓
                </div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">New Logo Design ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">HTML Email Templates ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Letterhead Design ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg border border-[#25baff] mt-8 mb-8 px-8 py-2 rounded-2xl hover:bg-[#25baff] hover:text-white">
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

export default JoomlaDev;
