import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FcSalesPerformance } from "react-icons/fc";
import { FaSearchengin } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { SiThealgorithms } from "react-icons/si";
import { MdAutoGraph } from "react-icons/md";

import { PiStrategyBold } from "react-icons/pi";

import Banner from "../../../assets/services/contentMarketing/banner.avif";
import Img from "../../../assets/services/contentMarketing/content-marketing.avif";
import Img2 from "../../../assets/services/contentMarketing/why-content.avif";


import ClientCollaboration from "../../../assets/services/contentMarketing/client-collaboration.avif";
import ContentCreation from "../../../assets/services/contentMarketing/content-creation.avif";
import ContentOptimization from "../../../assets/services/contentMarketing/content-optimization.avif";
import QualityAssurance from "../../../assets/services/contentMarketing/quality-assurance.avif";
import Strategy from "../../../assets/services/contentMarketing/strategy.avif";


gsap.registerPlugin(ScrollTrigger);

const ContentMarketing = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);

  const [activeFaq, setActiveFaq] = useState(null);
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


 const faqs = [
  {
    question: "What are content marketing services?",
    answer:
      "Content marketing services involve planning, creating, and distributing valuable content to attract, engage, and convert a targeted audience.",
  },
  {
    question: "What are the key areas of content marketing?",
    answer:
      "Core areas include blog writing, social media content, email campaigns, infographics, videos, eBooks, website copy, and SEO-focused content strategies.",
  },
  {
    question: "How do you define content marketing goals?",
    answer:
      "Content marketing goals should align with business objectives such as increasing brand awareness, generating leads, driving website traffic, or boosting sales and customer retention.",
  },
  {
    question: "How much do content marketing services cost?",
    answer:
      "Pricing depends on the agency, scope of work, and content type. Costs can range from a few hundred to several thousand dollars per month based on complexity and deliverables.",
  },
  {
    question: "What does a content marketer do?",
    answer:
      "A content marketer researches, plans, creates, and promotes content aligned with marketing goals. They optimize content for SEO and ensure it connects effectively with the target audience.",
  },
  {
    question: "Is content marketing profitable?",
    answer:
      "When executed strategically, content marketing can deliver strong ROI by attracting qualified leads, nurturing prospects, and converting visitors into loyal customers.",
  },
  {
    question: "Do you offer content marketing services?",
    answer:
      "Yes, we provide comprehensive content marketing solutions tailored to your business goals, audience, and industry requirements.",
  },
];

  const accordionData = [
    {
      title: "Content Expertise",
      content:
        "A reliable content strategy agency provides skilled writers, designers, and SEO specialists experienced in creating and distributing high-performing content. Their industry knowledge helps implement proven strategies that deliver measurable results.",
    },
    {
      title: "Scalability & Flexibility",
      content:
        "A professional content marketing firm offers flexible, scalable solutions tailored to your goals and budget. They can easily adjust strategies as your business grows or market needs change.",
    },
    {
      title: "Time & Resource Savings",
      content:
        "Outsourcing to an agency saves internal time and resources, allowing your team to focus on core operations while experts manage content creation, distribution, and performance tracking.",
    },
    {
      title: "Access to Tools & Technology",
      content:
        "Content marketing agencies use advanced tools and software to streamline workflows, monitor performance, and optimize strategies—helping improve results and ROI efficiently.",
    },
    {
      title: "Fresh Perspectives & Creativity",
      content:
        "An agency brings new ideas and creative direction to your strategy, helping your brand stand out while uncovering growth opportunities that may be missed internally.",
    },
  ];

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
          <p className="mt-6 text-lg text-gray-300">Content Marketing</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Content
            <span className="text-[#25baff]"> Marketing?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Content Marketing is a strategic approach where businesses develop
            valuable and relevant content tailored to their audience’s
            interests, challenges, and needs, then distribute it through the
            platforms where they are most active. A professional content
            strategy agency ensures every piece of content aligns with your
            business objectives to increase visibility, engagement, and overall
            impact.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Benefits of Content Marketing:
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Establishes industry authority</li>
            <li>Strengthens brand loyalty</li>
            <li>Drives more website traffic</li>
            <li>Increases conversion rates</li>
            <li>Enhances SEO (Search Engine Optimization)</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How Does It Work?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Identify your target audience and objectives</li>
            <li>Develop meaningful and engaging content</li>
            <li>Select the most effective social media channels</li>
            <li>Distribute content strategically</li>
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
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            A content marketing agency drives leads through smart strategies.
            Here are six ways:
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How Does a Content Marketing Agency Drive
            <span className="text-[#25baff]"> Lead Generation?</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FcSalesPerformance,
                head: "High-Quality Content",
                text: "A content marketing agency creates valuable, engaging content that attracts potential customers interested in your products and services. Content aligned with user intent and SEO best practices helps turn visitors into qualified leads.",
              },
              {
                icon: FaSearchengin,
                head: "Identify Your Ideal Customer",
                text: "Content marketing professionals analyze customer behavior, purchasing patterns, and search intent to clearly define your target audience. Using these insights, they develop tailored content that attracts qualified leads and strengthens your sales funnel.",
              },
              {
                icon: GrOptimize,
                head: "Content Variety",
                text: "A reliable content marketing agency produces content in diverse formats — including blogs, eBooks, infographics, website copy, newsletters, and social media posts — to meet different audience preferences. This multi-format approach helps attract and capture more potential leads.",
              },
              {
                icon: PiStrategyBold,
                head: "Lead Generation Strategies",
                text: "Leading B2B content marketing agencies leverage gated assets such as eBooks, industry reports, and webinars as powerful lead magnets. These resources encourage visitors to share their contact details, helping initiate and nurture the conversion journey.",
              },
              {
                icon: SiThealgorithms,
                head: "Content Distribution",
                text: "A full-service content marketing agency utilizes various channels — including social media, email marketing, influencer partnerships, and content syndication — to expand your reach. This approach ensures your message connects with a wider and highly targeted audience.",
              },
              {
                icon: MdAutoGraph,
                head: "Analytics and Reporting",
                text: "Content marketing agencies leverage advanced analytics tools to measure performance and gather meaningful insights. They deliver detailed reports with practical recommendations to refine your strategy and improve results.",
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
            Claim Your Free Website Audit Today!
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* Why Hire SEO Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Why Hire a Content
              <span className="text-[#25baff]"> Marketing Agency?</span>
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
                Partnering with a content marketing agency enables you to reach
                the right audience and accelerate business growth in several
                impactful ways. Here’s how it benefits your brand –
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

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Optimize Your Digital Strategies & Boost Your Return on Investment
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            6 Strategic Advantages of Partnering With
            <span className="text-[#25baff]"> Our Content Team</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Enhance Your Online Visibility",
                text: "Our content marketing services help your content align with search engine quality and relevance guidelines. By strategically integrating relevant keywords, we make it easier for search engines to crawl and index your pages, improving your overall search visibility.",
              },
              {
                head: "Build Credibility",
                text: "Our customized B2B content marketing services go beyond driving sales — they help you establish trust and authority. By delivering informative and educational content, we position your brand as an industry expert and recognized thought leader.",
              },
              {
                head: "Strong Brand Authority",
                text: "Our content marketing agency leverages data-driven insights to craft engaging web content that answers your audience’s questions. Through insightful articles and in-depth guides, we help position your brand as a trusted leader in your industry.",
              },
              {
                head: "Enhance Customer Experience",
                text: "Our content marketing agency uses data-driven insights to develop engaging content that addresses your audience’s needs and questions. With valuable articles and comprehensive guides, we create meaningful experiences that strengthen trust and improve overall customer satisfaction",
              },
              {
                head: "Boost SEO & Lead Generation",
                text: "As a content marketing agency, our experienced team ensures your content aligns with the topics and keywords your audience actively searches for. We optimize every piece to improve visibility, attract qualified leads, and strengthen your long-term SEO performance.",
              },
              {
                head: "Future-Ready Brand",
                text: "As a trusted content marketing company in the USA, we stay updated with industry developments, emerging technologies, and evolving consumer trends. Our strategic content approach blends timely insights with evergreen value to ensure long-lasting impact for your brand.",
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

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Strategy}
                alt="research"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Research & Strategy
                <span className="text-[#25baff]"> Development</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                At the start of the content marketing process, we focus on
                detailed research and strategic planning. We define clear
                campaign objectives, analyze your target audience and
                competitors, and uncover keyword opportunities that guide
                content creation. As a reliable content strategy agency, we
                organize your content around key themes that align with and
                support your broader marketing goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Content<span className="text-[#25baff]"> Creation</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                After completing research and planning, we move into the content
                development phase. Our content marketing specialists create
                engaging, audience-focused content tailored to identified needs
                and interests. Relevant keywords are naturally incorporated to
                enhance search visibility, while clear formatting and visuals
                improve readability and engagement. We ensure credibility
                through accurate sourcing and conduct thorough editing and
                proofreading to maintain clarity, quality, and precision.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={ContentCreation}
                alt="content creation"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={QualityAssurance}
                alt="quality assurance"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Quality<span className="text-[#25baff]"> Assurance</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our content marketing agency follows a rigorous quality review
                process before delivering any content to clients. Through
                multiple editing rounds, our experts refine structure, flow, and
                clarity to ensure high standards. We also confirm that keywords
                are naturally incorporated and that the content meets strict
                editorial guidelines—ensuring every piece is polished and
                performance-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Client<span className="text-[#25baff]"> Collaboration</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                After final refinements, the content is shared with the client
                for review and approval. Our content marketing agency values
                client feedback and makes necessary revisions to ensure it
                aligns with their goals and expectations. Once approved, the
                content is prepared for distribution across the most relevant
                platforms.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={ClientCollaboration}
                alt="client collaboration"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={ContentOptimization}
                alt="Content"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Content Strategy
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our work doesn’t stop at content delivery — it marks the start
                of ongoing improvement. We consistently track performance
                metrics and analyze data to refine the strategy. Through A/B
                testing and experimentation, we identify what connects most
                effectively with your audience. This continuous optimization
                process keeps your content marketing strategy relevant,
                impactful, and focused on delivering sustained results.
              </p>

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

export default ContentMarketing;
