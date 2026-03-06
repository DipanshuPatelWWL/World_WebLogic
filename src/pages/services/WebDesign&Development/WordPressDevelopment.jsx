import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { GrIntegration } from "react-icons/gr";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Banner from "../../../assets/services/wordpressDev/banner.avif";
import Img from "../../../assets/services/wordpressDev/img.avif";
import Img2 from "../../../assets/services/wordpressDev/img2.avif";
import Card1 from "../../../assets/services/wordpressDev/card1.avif";
import Card2 from "../../../assets/services/wordpressDev/card2.avif";
import Card3 from "../../../assets/services/wordpressDev/card3.avif";
import Card4 from "../../../assets/services/wordpressDev/card4.avif";
import Card5 from "../../../assets/services/wordpressDev/card5.avif";
import Card6 from "../../../assets/services/wordpressDev/card6.avif";

import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const WordPressDevelopment = () => {
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
      title: "Discovery & Strategic ",
      highlight: "Planning",
      image: Card1,
      content:
        "We start with an in-depth consultation to understand your business objectives, target audience, and project requirements. Our team then conducts detailed market research and competitor analysis to gather valuable insights that guide the design and development process. Based on these findings, we create a clear and structured project roadmap outlining the scope, timeline, key features, and development milestones to ensure a smooth and successful WordPress implementation.",
    },
    {
      title: "Design & ",
      highlight: "Prototyping",
      image: Card2,
      content:
        "We begin by creating structured wireframes that define your website’s layout and user flow. Our designers then develop visually compelling mockups aligned with your brand identity, offering multiple concepts for your review and feedback. To ensure a seamless experience, we build interactive prototypes that allow early testing of the user interface and functionality—helping refine the design before development begins.",
    },
    {
      title: "Development",
      highlight: "Content",
      image: Card3,
      content:
        "Our development phase transforms approved designs into a fully functional website. On the front end, we build responsive, visually polished interfaces using modern technologies to ensure seamless performance across all devices. On the back end, we configure the CMS, database, and server environment to support secure data management and smooth functionality. We also integrate essential third-party services and APIs—such as payment gateways, marketing tools, and social media platforms—to create a powerful, connected digital ecosystem.",
    },
    {
      title: "Testing & Quality ",
      highlight: "Assurance",
      image: Card4,
      content:
        "Before launch, we conduct comprehensive testing to ensure your website performs flawlessly. This includes verifying all functionalities such as forms, navigation, and interactive features. We optimize speed and overall performance for fast load times, implement advanced security measures to safeguard against vulnerabilities, and gather real-user feedback to refine usability—ensuring a secure, high-performing, and user-friendly website.",
    },
    {
      title: "Launch & ",
      highlight: "Deployment",
      image: Card5,
      content:
        "Before going live, we perform a thorough final review to ensure every element meets quality standards and implement any last-minute refinements. We then deploy your website to the live server and conduct final environment testing to confirm smooth functionality. To empower your team, we provide hands-on training so you can confidently manage and update your website using the WordPress CMS.",
    },
    {
      title: "Maintenance & ",
      highlight: "Ongoing Support",
      image: Card6,
      content:
        "After launch, we provide continuous maintenance to keep your website secure, updated, and performing at its best. Our services include regular backups, software updates, security monitoring, and performance optimization. With a dedicated support team always ready to assist, we ensure quick issue resolution, minimal downtime, and complete peace of mind.",
    },
  ];

  const faqs = [
    {
      question:
        "What should I consider when choosing a WordPress development company?",
      answer:
        "Look for proven expertise, a strong portfolio, SEO understanding, transparent communication, and reliable post-launch support. A results-driven approach ensures your website delivers long-term value.",
    },
    {
      question: "How long does it take to develop a WordPress website?",
      answer:
        "Most WordPress websites are completed within 4–6 weeks, depending on the project’s size, features, and complexity.",
    },
    {
      question: "Will my website be mobile responsive?",
      answer:
        "Absolutely. Every website we develop is fully responsive, ensuring smooth performance across desktops, tablets, and smartphones.",
    },
    {
      question: "Can I manage and update the website myself?",
      answer:
        "Yes. WordPress offers a user-friendly dashboard, and we provide guidance so you can easily update content, images, blogs, and more.",
    },
    {
      question:
        "Should I choose a custom WordPress build or a pre-built theme?",
      answer:
        "Custom development offers greater flexibility and scalability, while theme-based solutions are faster and more budget-friendly. The right choice depends on your goals and budget.",
    },
    {
      question: "Will my website be optimized for SEO?",
      answer:
        "Yes. We implement clean code, structured site architecture, fast loading speeds, mobile responsiveness, and SEO-friendly configurations during development.",
    },
    {
      question: "How secure will my WordPress website be?",
      answer:
        "We implement SSL certificates, security plugins, firewalls, and regular updates to keep your website protected from threats and vulnerabilities.",
    },
  ];
  const accordionData = [
    {
      title: "WordPress Expertise",
      content:
        "An experienced WordPress development company brings proven technical knowledge and strategic insight to your project. They build or revamp your website efficiently, leveraging advanced WordPress capabilities to launch a fully optimized, high-performing site in less time.",
    },
    {
      title: "Tailored Design Solutions",
      content:
        "Professional WordPress developers create custom designs that truly reflect your brand identity. Through in-depth consultations and requirement analysis, they craft a visually compelling and goal-driven website aligned with your business objectives.",
    },
    {
      title: "Safe & Secure Deployment",
      content:
        "With staging environments and structured workflows, a WordPress agency ensures your website is tested and refined before going live. This minimizes risks, prevents unwanted disruptions, and keeps your live site safe during updates or changes.",
    },
    {
      title: "Strong Technical Foundation",
      content:
        "Beyond attractive design, a successful website requires optimized speed, SEO readiness, and mobile responsiveness. A reliable WordPress development partner ensures your site is technically sound, scalable, and built to deliver consistent performance.",
    },
    {
      title: "Long-Term Value & ROI",
      content:
        "Hiring professional WordPress developers reduces long-term costs by building scalable, maintainable websites. With fewer technical issues, minimized downtime, and improved reliability, your investment delivers sustainable growth and higher returns.",
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
          <p className="mt-6 text-lg text-gray-300">WordPress Development</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="ml-15">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is WordPress
            <span className="text-[#25baff]"> Development?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            WordPress development is the process of building, customizing, and
            maintaining websites using the WordPress platform. It includes
            crafting tailored themes, developing powerful plugins, configuring
            essential settings, and optimizing the website for speed, security,
            and seamless performance.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Why Choose WordPress Development?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Creates a highly user-friendly website experience</li>
            <li>Fully customizable with themes and plugins</li>
            <li>SEO-ready structure to improve search engine visibility</li>
            <li>Responsive design that adapts to all devices</li>
            <li>
              Perfect for everything from personal blogs to large-scale
              eCommerce platforms
            </li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How is it Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Planning & Strategy</li>
            <li>Installation & Initial Setup</li>
            <li>Theme Design & Customization</li>
            <li>Plugin Integration & Development</li>
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
            How Can WordPress Development Services Drive
            <span className="text-[#25baff]"> Business Revenue?</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 p-8">
            Investing in professional WordPress development can increase revenue
            by improving your website’s performance, user experience, and
            conversions in six powerful ways
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOnlinePrediction,
                head: "Enhanced User Experience",
                text: "Custom themes and intuitive layouts boost engagement and user satisfaction. Responsive design ensures a seamless experience across all devices, driving higher conversions and increasing mobile traffic through expert WordPress development.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "SEO Optimization",
                text: "Expert WordPress development builds a search-engine-friendly foundation with clean code, optimized themes, and advanced plugins. This improves visibility on search engines, brings in qualified traffic, and helps convert visitors into customers.",
              },
              {
                icon: GrIntegration,
                head: "E-commerce Integration",
                text: "Integrating solutions like WooCommerce allows you to sell products directly from your website. Features such as secure payment gateways, product management, and inventory tracking simplify operations and create a smooth, efficient buying experience for customers.",
              },
              {
                icon: BiBookContent,
                head: "Content Marketing",
                text: "Consistent blog publishing and content updates help attract and retain visitors while building credibility in your industry. Strategic content can also generate leads through email sign-ups, gated resources, and interactive engagement tools.",
              },
              {
                icon: AiOutlineSolution,
                head: "Tailored Solutions",
                text: "A professional WordPress development team creates custom features and plugins aligned with your business goals, enhancing efficiency, scalability, and user experience as your website evolves with market demands.",
              },
              {
                icon: GrUserSettings,
                head: "Maintenance and Support",
                text: "A WordPress development agency provides regular updates, security enhancements, and quick issue resolution to reduce downtime, optimize performance, and maintain a secure, reliable user experience through continuous support.",
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
              Why Hire a Professional WordPress
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
                A WordPress development agency builds a powerful online presence
                for your brand, helping you attract more leads and increase
                conversions. Here’s how —
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
            6 Reasons Why We’re the Right WordPress Development Partner
            <span className="text-[#25baff]"> for Your Business</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            We deliver exceptional results by combining strategic digital
            solutions, client-centric approaches, conversion-focused websites,
            advanced analytics, innovative development, and on-time execution
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Holistic Digital Solutions",
                text: "At Digital WebGuider, we go beyond WordPress development to deliver complete digital growth solutions. Our specialists in SEO, PPC, and social media marketing take an integrated approach to building and promoting your website. As a trusted WordPress development partner, we offer flexible pricing and comprehensive digital strategies tailored to your unique business goals.",
              },
              {
                head: "Client-Focused Strategies",
                text: "At Digital WebGuider, your business objectives come first. Whether your goal is generating more leads or increasing sales, our WordPress development services create conversion-focused websites designed to deliver measurable results. We ensure every solution aligns with your brand vision and supports long-term, sustainable growth.",
              },
              {
                head: "Sales-Driven Websites",
                text: "Our WordPress development approach focuses on delivering measurable ROI. Through strategic layouts, compelling CTAs, seamless navigation, and data-backed optimization, we turn your website into a powerful sales engine—designed to maximize conversions and consistently drive revenue.",
              },
              {
                head: "Advanced Data Tracking",
                text: "As a leading WordPress development company, Digital Guider integrates advanced analytics and tracking systems to monitor user behavior, performance, and ROI. Our experts perform regular data audits to ensure accuracy, empowering you to make informed, data-driven decisions that fuel growth and increase conversions.",
              },
              {
                head: "Cutting-Edge Development",
                text: "At Digital WebGuider, we stay ahead of evolving design trends and emerging technologies. Our WordPress developers continuously adapt to software updates, accessibility standards, and search engine algorithm changes. This forward-thinking approach keeps your website competitive, compliant, and positioned as a leader in your industry.",
              },
              {
                head: "Timely Delivery",
                text: "At Digital WebGuider, we prioritize deadlines and project efficiency. Our WordPress developers set clear, realistic timelines and consistently meet every milestone—whether your project spans a few weeks or several months. With a strong commitment to punctuality and responsiveness, we ensure a smooth process and complete satisfaction with the final outcome.",
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
      <section
        className="bg-[#f0f9ff] py-24 px-6 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Proven Strategic Process for Website
            <span className="text-[#25baff]"> Development</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mt-4">
            At Digital WebGuider, we deliver a smooth and result-driven
            WordPress development process. Here’s how we do it:
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
                {/* White Card */}
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

                      <p className="text-gray-600 leading-relaxed text-lg">
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
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#25baff] hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${current === index ? "bg-[#25baff] w-6" : "bg-gray-300 w-3"
                  }`}
              ></button>
            ))}
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

export default WordPressDevelopment;
