import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GiRank3 } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { GiStarsStack } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { GiClick } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";

import Banner from "../../../assets/services/wordpressDev/banner.avif";
import Img from "../../../assets/services/websiteredesign/img1.avif";
import Img2 from "../../../assets/services/websiteredesign/img2.avif";
import Card1 from "../../../assets/services/websiteredesign/card1.avif";
import Card2 from "../../../assets/services/websiteredesign/card2.avif";
import Card3 from "../../../assets/services/websiteredesign/card3.avif";
import Card4 from "../../../assets/services/websiteredesign/card4.avif";
import Card5 from "../../../assets/services/websiteredesign/card5.avif";
import Card6 from "../../../assets/services/websiteredesign/card6.avif";

import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const WebsiteRedesign = () => {
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
      title: "Assessing Your Current ",
      highlight: "Website",
      image: Card1,
      content:
        "We begin by understanding your business goals, target audience, and overall requirements. Then, we conduct a detailed audit of your existing website to identify strengths, weaknesses, and opportunities for improvement. Using performance and analytics tools, we evaluate user behavior, technical health, and SEO factors. We also analyze competitor websites to uncover strategic gaps and growth opportunities. Finally, our consultants clearly define the project scope, deliverables, and timeline to ensure complete transparency and alignment.",
    },
    {
      title: "Strategic Redesign ",
      highlight: "Plan",
      image: Card2,
      content:
        "Next, we develop a data-driven redesign strategy aligned with your business objectives. Through user research, surveys, and audience insights, we create a clear blueprint that defines site architecture, UX improvements, content direction, and SEO strategy. This structured plan ensures your redesigned website is purposeful, high-performing, and tailored to your specific goals.",
    },
    {
      title: "Redesigning the User ",
      highlight: "Experience",
      image: Card3,
      content:
        "With the strategy in place, we focus on transforming the user experience. We start by creating structured wireframes to map layouts and key user journeys, followed by interactive prototypes to demonstrate functionality and flow. Our designers then craft visually compelling elements — including colors, typography, and imagery — that reflect your brand identity. Throughout the process, we collaborate closely with you, refining every detail to ensure the final design is engaging, high-performing, and aligned with your vision.",
    },
    {
      title: "Redesigned Website ",
      highlight: "Development",
      image: Card4,
      content:
        "After design approval, our developers bring the vision to life with clean, scalable code. We transform mockups into responsive front-end experiences using modern HTML, CSS, and JavaScript, while building a robust backend with technologies like PHP or Node.js. Databases and CMS platforms such as WordPress are seamlessly integrated to ensure smooth content management. We carefully migrate existing content, optimize new pages, and ensure full responsiveness across all devices and browsers — delivering a technically sound, high-performing website.",
    },
    {
      title: "Testing the Redesigned ",
      highlight: "Site",
      image: Card5,
      content:
        "Before launch, we conduct thorough testing to ensure everything performs flawlessly. This includes functional testing to verify features, usability testing to refine user experience, and performance testing to optimize speed and responsiveness. Using advanced performance tools, we identify and resolve any issues immediately, ensuring your redesigned website is fast, stable, and ready to deliver a seamless user experience.",
    },
    {
      title: "Launching the Redesigned ",
      highlight: "Website",
      image: Card6,
      content:
        "Once everything is tested and approved, we prepare for a smooth launch. Our pre-launch checklist covers SEO configurations, analytics setup, backups, and final technical validations. We often begin with a soft launch to identify any last-minute issues before moving to the full public release. After launch, our support continues. We monitor performance, update content, resolve technical issues, and analyze user data to drive ongoing improvements — ensuring your website remains optimized, secure, and built for long-term success.",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of a website redesign?",
      answer:
        "A website redesign improves user experience, boosts organic traffic, increases conversions, enhances mobile responsiveness, and aligns your site with modern SEO and web performance standards — creating a stronger and more competitive online presence.",
    },
    {
      question: "Why is UI/UX design important in website redesign?",
      answer:
        "UI/UX design shapes how users interact with your website. A well-structured, intuitive interface improves engagement, builds trust, and makes navigation effortless — leading to higher conversion and retention rates.",
    },
    {
      question: "How does website design affect conversion rates?",
      answer:
        "Strategic design guides users toward clear calls-to-action, simplifies navigation, and builds credibility. A professionally redesigned website removes friction and encourages visitors to take action, directly improving conversions.",
    },
    {
      question: "How do I choose the right website redesign company?",
      answer:
        "Look for a company with proven experience, a strong portfolio, transparent communication, and SEO expertise. The right partner should understand your goals and deliver measurable results aligned with your business strategy.",
    },
    {
      question: "Will a website redesign affect my SEO rankings?",
      answer:
        "If handled incorrectly, it can. However, with proper SEO planning — including technical audits, structured migration, and optimization — a redesign can improve rankings and overall search visibility.",
    },
    {
      question: "How do you redesign a website without harming SEO?",
      answer:
        "We preserve SEO value by maintaining URL structures where possible, implementing 301 redirects, optimizing new content, and conducting pre- and post-launch SEO audits to protect and improve rankings.",
    },
    {
      question: "How much does a website redesign cost?",
      answer:
        "The cost depends on your website’s size, complexity, features, and goals. After understanding your requirements, we provide a clear, customized quote with complete transparency.",
    },
  ];

  const accordionData = [
    {
      title: "Expert Web Design Team",
      content:
        "A professional website redesign company brings together skilled designers, developers, and UX/UI strategists who understand modern trends and performance standards. Their expertise ensures your website is visually compelling, user-friendly, technically strong, and conversion-focused.",
    },
    {
      title: "Advanced Security & Compliance",
      content:
        "With increasing cyber threats, website security is critical. A redesign agency strengthens your site with updated security protocols, secure coding practices, and compliance standards like GDPR, protecting your business and customer data.",
    },
    {
      title: "Tailored Design Strategy",
      content:
        "Every business is unique, and your website should reflect that. A redesign agency creates customized layouts and experiences aligned with your brand identity and target audience, ensuring better engagement and stronger brand positioning.",
    },
    {
      title: "Custom Features & Seamless Integrations",
      content:
        "As your business grows, your website must evolve. A redesign service enables custom functionalities and smooth integrations with CRM systems, e-commerce platforms, payment gateways, and marketing tools to enhance performance and scalability.",
    },
    {
      title: "Improved SEO & Performance Optimization",
      content:
        "An SEO-driven redesign enhances site structure, improves page speed, ensures mobile responsiveness, and optimizes content. This helps increase search engine visibility, attract more organic traffic, and boost conversions.",
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
          <p className="mt-6 text-lg text-gray-300">Website Redesign</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Website
            <span className="text-[#25baff]"> Redesigning?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Website redesigning is the strategic transformation of your existing
            website’s layout, structure, code, content, and visual identity to
            enhance performance and user satisfaction. It goes beyond just
            changing the look — it improves functionality, usability, and
            business results.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            A well-executed website redesign helps to:
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Increase user engagement</li>
            <li>Boost conversions and revenue</li>
            <li>Lower bounce rates</li>
            <li>Deliver a better user experience (UX)</li>
            <li>Strengthen SEO performance and search rankings</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How is it Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>
              Analyzing current website performance – Reviewing traffic, user
              behavior, and technical issues.
            </li>
            <li>
              Creating wireframes and prototypes – Planning improved structure
              and user journeys.
            </li>
            <li>
              UI design and development – Crafting modern visuals and building
              optimized functionality.
            </li>
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
            How Website Redesign Services Help Grow
            <span className="text-[#25baff]"> Your Business</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 p-8">
            Discover how website redesign services enhance user experience,
            boost traffic, and increase conversions to strengthen your online
            presence.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GiRank3,
                head: "Rebrand Your Website",
                text: "A website redesign refreshes your visual identity, ensures consistent design across all pages, and aligns your site with modern trends to create a more professional and impactful brand presence.",
              },
              {
                icon: VscGraph,
                head: "Drive More Traffic",
                text: "A website redesign resolves outdated code and navigation issues, improves site speed, and strengthens SEO performance — helping you attract more organic traffic from search engines.",
              },
              {
                icon: GiStarsStack,
                head: "Add Micro-Experiences",
                text: "Strategic micro-interactions—like smart CTA pop-ups and subtle click animations—enhance user engagement and reduce bounce rates. An experienced website redesign team can craft these UX details to keep visitors interested and interacting longer.",
              },
              {
                icon: GoGraph,
                head: "Get More Leads",
                text: "A website redesign refreshes your brand image and improves conversion paths, helping you attract more visitors and turn them into qualified leads — ultimately increasing revenue growth.",
              },
              {
                icon: GiClick,
                head: "Improve CTR",
                text: "Experiencing a drop in conversions? Slow loading speeds and poor functionality can hurt your click-through rates. A redesigned website with optimized code, clear navigation, and seamless UX improves usability and encourages more clicks.",
              },
              {
                icon: MdOutlineMobileFriendly,
                head: "Mobile-First Design",
                text: "With a growing number of users browsing primarily on mobile devices, a mobile-first design is essential. A website redesign prioritizes responsiveness, speed, and mobile-first indexing to deliver a seamless experience across all devices.",
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
              Why Hire a Professional Website
              <span className="text-[#25baff]"> Redesign Company?</span>
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
                Partnering with a professional Magento development company helps
                improve store performance, increase sales, and maximize profits.
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
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === index
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
            Why We’re the Right Choice for Website Redesign
            <span className="text-[#25baff]"> — 6 Key Reasons</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            Ready to upgrade your website? Here are 6 reasons why we’re the
            right choice for professional website redesign services.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Transparent Communication",
                text: "We believe in clear, consistent communication at every stage of your website redesign. Through regular updates and collaborative feedback, we ensure your vision is aligned with the final outcome — delivering results that truly reflect your business goals.",
              },
              {
                head: "User-Centered Approach",
                text: "User experience drives every redesign we create. We analyze audience behavior, develop user personas, and map customer journeys to understand how visitors interact with your brand. Through strategic wireframing, prototyping, and continuous testing, we build intuitive, engaging designs optimized for real user needs.",
              },
              {
                head: "Customized Integrations",
                text: "Every business has unique requirements, and your website should reflect that. We develop custom features and seamlessly integrate third-party tools — from e-commerce platforms to CRM systems and specialized plugins — to enhance functionality and support your business growth.",
              },
              {
                head: "Strategic Project Management",
                text: "We follow a structured project management approach to deliver your website redesign on time and within budget. With clear timelines, defined milestones, and consistent updates, a dedicated project manager oversees every stage to ensure a smooth and transparent process.",
              },
              {
                head: "Seamless Migration",
                text: "Transitioning to a new website can be complex, especially with large volumes of content. We manage the entire migration process, ensuring secure data transfer, zero content loss, and minimal downtime for a smooth, hassle-free launch.",
              },
              {
                head: "Enhanced Conversion Rates",
                text: "Our redesign strategy focuses on maximizing conversions. By optimizing calls-to-action, refining user experience, and continuously analyzing user behavior, we create data-driven designs that turn more visitors into customers and help you achieve your business goals.",
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Proven Strategic Process for Website
            <span className="text-[#25baff]"> Development</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-4">
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
                className={`transition-all duration-700 ease-in-out ${
                  index === current
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#25baff] w-4" : "bg-gray-300 w-3"
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

export default WebsiteRedesign;
