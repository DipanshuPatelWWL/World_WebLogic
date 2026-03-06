import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoGraph } from "react-icons/go";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";

import Banner from "../../../assets/services/appdev/banner.avif";
import Img from "../../../assets/services/appdev/img1.avif";
import Img2 from "../../../assets/services/appdev/img2.avif";
import Card1 from "../../../assets/services/appdev/card1.avif";
import Card2 from "../../../assets/services/appdev/card2.avif";
import Card3 from "../../../assets/services/appdev/card3.avif";
import Card4 from "../../../assets/services/appdev/card4.avif";
import Card5 from "../../../assets/services/appdev/card5.avif";
import Card6 from "../../../assets/services/appdev/card6.avif";
import Card7 from "../../../assets/services/appdev/card7.avif";
import Card8 from "../../../assets/services/appdev/card8.avif";

import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MobileAppDevelopment = () => {
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
      title: "Market Research & ",
      highlight: "Ideation",
      image: Card1,
      content:
        "Our mobile app experts conduct in-depth market research to analyze trends, user behavior, competitors, and business goals. This strategic insight guides ideation, app architecture planning, and roadmap creation—ensuring your app is built on strong data, clear objectives, and real market demand for long-term success.",
    },
    {
      title: "Requirement Gathering & ",
      highlight: "Analysis",
      image: Card2,
      content:
        "After finalizing the concept, we collaborate closely with you to define key features, target audience, platform preferences, and project goals. This detailed analysis creates a clear roadmap that aligns development strategy with your business objectives and market needs.",
    },
    {
      title: "Prototyping & ",
      highlight: "Wireframing",
      image: Card3,
      content:
        "We develop wireframes and interactive prototypes to map out the app’s structure, UI, and user journey. This early-stage visualization helps refine design and functionality, incorporate feedback, reduce risks, and ensure the final product aligns with user expectations.",
    },
    {
      title: "UI/UX ",
      highlight: "Design",
      image: Card4,
      content:
        "Our design phase transforms strategy into an intuitive and engaging user experience. We craft visually appealing interfaces, define system architecture, and apply user-centric design principles aligned with your brand. Through continuous design iterations and usability testing, we refine the UI/UX to maximize engagement, functionality, and user satisfaction.",
    },
    {
      title: "Development & ",
      highlight: "Testing",
      image: Card5,
      content:
        "Once the design is approved, our developers begin building the app using agile methodologies and industry best practices. We ensure clean, scalable code while following platform standards for optimal performance. Continuous testing, code reviews, and quality checks help identify and resolve issues early—delivering a reliable, high-quality final product.",
    },
    {
      title: "Deployment & ",
      highlight: "Launch",
      image: Card6,
      content:
        "After final testing and issue resolution, we manage the complete app deployment process across relevant app stores and platforms. From submission and listing optimization to launch support and post-release monitoring, we ensure a smooth rollout and quickly address any unexpected issues for a successful launch.",
    },
    {
      title: "Marketing & ",
      highlight: "Promotion",
      image: Card7,
      content:
        "We create a strategic marketing plan to boost your app’s visibility and reach. Through app store optimization (ASO), digital campaigns, social media promotion, and targeted user acquisition strategies, we drive downloads, increase engagement, and support long-term growth.",
    },
    {
      title: "Maintenance & ",
      highlight: "Support",
      image: Card8,
      content:
        "Our commitment continues beyond launch with ongoing maintenance and support. We monitor performance, resolve issues, and release regular updates, patches, and enhancements to keep your app secure, stable, and up to date. Our dedicated support team ensures smooth operation and long-term success for both your business and users.",
    },
  ];

  const faqs = [
    {
      question: "What is mobile app development?",
      answer:
        "Mobile app development is the process of creating software applications for smartphones and tablets on platforms like iOS and Android. It enables businesses to connect with customers, streamline services, and enhance digital engagement.",
    },
    {
      question: "What are the different types of mobile apps?",
      answer:
        "There are three main types of mobile apps: native apps (built specifically for iOS or Android), hybrid apps (cross-platform apps using shared code), and web-based apps such as Progressive Web Apps (PWAs).",
    },
    {
      question:
        "What services do you offer as a mobile app development company?",
      answer:
        "We build scalable iOS and Android apps, enterprise-grade software, and web applications. Using agile methodology, we ensure flexibility, faster delivery, and user-focused solutions tailored to your business goals.",
    },
    {
      question: "What support will I receive during development?",
      answer:
        "You’ll have a dedicated project manager as your main point of contact. We ensure clear communication, regular updates, and quick responses throughout the entire development lifecycle.",
    },
    {
      question: "How do I choose the right mobile app development company?",
      answer:
        "Evaluate their portfolio, technical expertise, client reviews, communication process, and ability to meet timelines and budget requirements before making a decision.",
    },
    {
      question: "How do you ensure app security?",
      answer:
        "We implement advanced security practices such as data encryption, secure APIs, protected storage, and regular security testing to safeguard your app against vulnerabilities.",
    },
    {
      question: "What makes your mobile app development team different?",
      answer:
        "Our experienced team excels in handling complex projects, integrating legacy systems, building advanced features, and delivering scalable solutions that align with evolving business needs.",
    },
  ];

  const accordionData = [
    {
      title: "Mobile App Development Expertise",
      content:
        "Partnering with a professional app development company ensures high-quality, scalable applications tailored to your business goals and optimized for performance across all platforms and devices.",
    },
    {
      title: "Dedicated Development Team",
      content:
        "Gain access to a skilled team of designers, developers, and strategists who manage your project from concept to launch, ensuring a smooth and efficient development process.",
    },
    {
      title: "User-Centric Design",
      content:
        "We focus on intuitive UI/UX design to create visually appealing, user-friendly apps that enhance engagement, improve user satisfaction, and drive higher adoption rates.",
    },
    {
      title: "Time & Cost Efficiency",
      content:
        "Outsourcing app development saves time and resources by eliminating the need to hire and manage an in-house team, allowing you to focus on core business growth.",
    },
    {
      title: "Ongoing Support & Maintenance",
      content:
        "Post-launch support, regular updates, bug fixes, and performance optimization ensure your app stays secure, functional, and competitive in the long run.",
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
          <p className="mt-6 text-lg text-gray-300">Mobile App Development</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="ml-15">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Mobile App
            <span className="text-[#25baff]"> Development?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Mobile app development is the process of designing, building, and
            maintaining software applications that operate on smartphones and
            tablets. These applications are crafted to deliver seamless user
            experiences, solve specific business challenges, and drive
            measurable growth. With the right strategy, mobile apps become
            powerful tools for connecting brands with their audiences.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Some of the key benefits of mobile app development services include:
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>
              Strengthening customer engagement through personalized experiences
            </li>
            <li>Increasing brand visibility and market presence</li>
            <li>Building long-term customer loyalty</li>
            <li>Automating and streamlining business operations</li>
            <li>Creating new revenue streams and growth opportunities</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How is it Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>
              UI/UX Design – Creating intuitive, visually appealing, and
              user-friendly interfaces
            </li>
            <li>
              Development & Integration – Writing clean, scalable code and
              integrating required features
            </li>
            <li>
              Testing & Quality Assurance – Conducting rigorous testing for
              performance, security, and usability
            </li>
            <li>
              Deployment & Launch – Publishing the app on relevant platforms and
              executing marketing strategies
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
            How Mobile Development Services Empower Your
            <span className="text-[#25baff]"> Business to Grow?</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 p-8">
            Mobile app development boosts online presence, engagement,
            functionality, and revenue. Here’s how it drives growth:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOutlineAutoGraph,
                head: "Enhanced Customer Engagement",
                text: "Mobile app development services deliver intuitive, interactive experiences that keep users actively engaged. With personalized features, seamless navigation, and real-time communication, businesses can strengthen customer relationships, encourage repeat usage, and drive sustainable growth.",
              },
              {
                icon: GrAnnounce,
                head: "Brand Recognition",
                text: "Custom mobile apps keep your business within easy reach of customers, strengthening brand visibility, improving recognition, and expanding your overall market presence.",
              },
              {
                icon: HiSpeakerphone,
                head: "Direct Marketing Channel",
                text: "Mobile apps serve as a direct marketing channel, enabling businesses to share updates, offers, and notifications instantly—enhancing customer interaction and driving higher sales.",
              },
              {
                icon: GoGraph,
                head: "Enhance Customer Loyalty",
                text: "Mobile apps build stronger customer loyalty through personalized experiences, exclusive offers, and reward programs—encouraging repeat purchases and long-term brand relationships.",
              },
              {
                icon: MdOutlineIntegrationInstructions,
                head: "Streamline Business Operations",
                text: "Mobile app development services simplify business operations with features like in-app purchases, booking systems, and integrated support—boosting efficiency and improving customer satisfaction.",
              },
              {
                icon: MdOutlineMobileFriendly,
                head: "Improve Sales & Conversions",
                text: "Mobile apps track user behavior and preferences to deliver actionable insights. These insights power smarter strategies and personalized marketing—resulting in higher sales and better conversion rates.",
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
              Why Choose an Expert Mobile App Development
              <span className="text-[#25baff]"> Company?</span>
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
                Hiring a mobile app development company boosts growth, enhances
                customer engagement, and increases sales. Here’s why partnering
                with experts makes a difference:
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
            6 Reasons Businesses Choose Our Mobile App
            <span className="text-[#25baff]"> Development Agency</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            Choosing the right mobile app development agency is key to your
            success. Discover why businesses trust us for powerful app
            solutions.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "App Development Expertise",
                text: "We specialize in building high-performance mobile apps from the ground up and enhancing existing applications with advanced features. Our experienced developers follow industry best practices, focusing on scalability, performance optimization, seamless functionality, strong security standards, and conversion-driven design to deliver impactful results within deadlines.",
              },
              {
                head: "Proven Track Record",
                text: "Our portfolio highlights successful mobile app projects delivered for a wide range of industries. With a strong history of quality execution and client satisfaction, we consistently deliver results that drive real business impact. Explore our portfolio to see our work in action.",
              },
              {
                head: "Customization & Flexibility",
                text: "We recognize that every business has unique needs. That’s why we deliver fully customized mobile app solutions tailored to your goals. From seamless integrations to personalized features and real-time management capabilities, we turn your vision into a scalable, high-performing application.",
              },
              {
                head: "Comprehensive Services",
                text: "We offer end-to-end mobile app development solutions, including custom design, feature development, module integration, performance optimization, and advanced security enhancements. Our holistic approach ensures your app is fully aligned with your business goals and built for long-term success.",
              },
              {
                head: "Best Responsive Support",
                text: "Our commitment goes beyond launch. We provide ongoing support and maintenance to ensure your mobile app stays secure, updated, and optimized for peak performance—so your business runs smoothly at all times.",
              },
              {
                head: "High Client Satisfaction",
                text: "Our clients are at the heart of everything we do. With a retention rate of over 90%, our long-term partnerships reflect the quality, reliability, and dedication we bring to every project. Our success isn’t just measured in numbers—it’s built on trust, results, and lasting relationships.",
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

      {/* ALTERNATE SECTION  */}
      <section
        className="bg-[#f0f9ff] py-24 px-6 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Strategic Mobile App Development
            <span className="text-[#25baff]"> Process</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-4">
            Our strategic process turns your idea into a secure, scalable,
            high-performance mobile app from concept to launch.
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

export default MobileAppDevelopment;
