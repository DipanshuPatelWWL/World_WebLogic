import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxComponent1 } from "react-icons/rx";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineStarRate } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoGoal } from "react-icons/go";

import Banner from "../../../assets/services/appStoreOptimization/banner.avif";
import Img1 from "../../../assets/services/whitelabel/img1.avif";
import Img2 from "../../../assets/services/whitelabel/img2.jpg";
import Img3 from "../../../assets/services/whitelabel/img3.avif";
import Img4 from "../../../assets/services/whitelabel/img4.avif";
import Img5 from "../../../assets/services/whitelabel/img5.avif";
import Img6 from "../../../assets/services/whitelabel/img6.avif";
import Img7 from "../../../assets/services/whitelabel/img7.avif";
import Img8 from "../../../assets/services/whitelabel/img8.avif";
import Img9 from "../../../assets/services/whitelabel/img9.avif";
import Img10 from "../../../assets/services/whitelabel/img10.avif";

gsap.registerPlugin(ScrollTrigger);

const WhiteLabelSeo = () => {
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
      question: "What are white label SEO services?",
      answer:
        "White label SEO means we handle your clients’ SEO campaigns under your agency’s brand name. You manage the client relationship while we execute the strategy, delivery, and reporting behind the scenes.",
    },
    {
      question: "Will my clients know I’m outsourcing SEO?",
      answer:
        "No. Our services are 100% confidential. All communication, reports, and deliverables are provided under your branding, ensuring your clients only see your agency.",
    },
    {
      question: "Can I customize the SEO reports?",
      answer:
        "Yes. Our white label reports are fully branded with your logo, company details, and preferred format, helping you maintain brand consistency and professionalism.",
    },
    {
      question: "What SEO services do you offer?",
      answer:
        "We provide complete SEO solutions, including technical audits, on-page optimization, content creation, local SEO, link building, and ongoing performance tracking.",
    },
    {
      question: "How does your pricing model work?",
      answer:
        "We operate on a wholesale pricing model. You pay a fixed rate for our services and set your own pricing for clients, allowing you to control margins and maximize profitability.",
    },
    {
      question: "What makes your white label SEO services different?",
      answer:
        "Our focus on transparency, performance-driven strategies, and long-term partnerships sets us apart. We prioritize consistent results and seamless collaboration with your agency.",
    },
    {
      question: "How do you keep SEO strategies updated?",
      answer:
        "Our team continuously monitors search engine algorithm updates and industry trends. We adapt strategies accordingly to ensure campaigns remain effective and competitive.",
    },
  ];

  const accordionData = [
    {
      title: "Proven SEO Expertise",
      content:
        "White label SEO agencies bring years of industry experience and deep knowledge of search engine algorithms, trends, and best practices. By partnering with experts, you ensure your clients receive result-driven strategies that improve rankings, increase traffic, and strengthen long-term growth—helping you retain clients and win more projects.",
    },
    {
      title: "Cost-Effective SEO Solution",
      content:
        "Hiring and managing an in-house SEO team can be costly and time-consuming. White label SEO eliminates expenses related to salaries, tools, and training. You get a complete SEO execution team at a fraction of the cost, allowing you to maximize profits while focusing on scaling your agency.",
    },
    {
      title: "Dedicated SEO Professionals",
      content:
        "With white label SEO services, you gain access to a specialized team that may include SEO strategists, content writers, link-building experts, and technical analysts. This dedicated support ensures every campaign is managed efficiently, delivered on time, and aligned with your client’s goals.",
    },
    {
      title: "Drive More Leads & Sales",
      content:
        "Effective SEO increases online visibility, attracts targeted traffic, and converts visitors into qualified leads. A reliable white label SEO partner implements ethical, data-driven strategies that help your clients grow revenue—while strengthening your agency’s reputation for delivering real results.",
    },
    {
      title: "Fully Branded Reporting",
      content:
        "White label SEO providers offer customized reports with your agency’s branding, allowing you to present performance insights professionally. Branded reporting enhances transparency, builds client trust, and reinforces your position as a full-service digital marketing partner.",
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
          <p className="mt-6 text-lg text-gray-300">White Label SEO</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is White Label
            <span className="text-[#25baff]"> SEO?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            White Label SEO is a service model where a professional SEO company
            manages SEO campaigns for another agency, but all work is delivered
            under the agency’s brand name. The end client never knows that a
            third-party team is handling the execution. This allows agencies to
            offer expert SEO solutions without building an in-house team.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            White Label SEO services can help in
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Expand your client portfolio.</li>
            <li>Add complete SEO solutions to your service list.</li>
            <li>Increase recurring revenue.</li>
            <li>Reduce hiring and operational costs.</li>
            <li>Deliver branded SEO reports under your agency name.</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How is it done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Customized SEO planning.</li>
            <li>Professional SEO content creation.</li>
            <li>Google Business Profile optimization.</li>
            <li>Targeted local SEO execution.</li>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img1}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How White Label SEO Services Increase Your
            <span className="text-[#25baff]"> Agency Revenue?</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-8">
            Whether you're a startup or an established digital agency, white
            label SEO helps you serve clients efficiently—without the high costs
            of hiring or team expansion.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HiSpeakerphone,
                head: "Complete Digital Solutions Under One Roof",
                text: "With white label SEO, you can transform your agency into a full-service digital partner. By offering comprehensive digital marketing solutions, you position your brand as a trusted, one-stop destination for all your clients’ online growth needs.",
              },
              {
                icon: BsGraphUpArrow,
                head: "Zero In-House Hiring Costs",
                text: "Creating an internal SEO team requires significant time, effort, and investment. White label SEO services remove the need for recruitment, training, and overhead expenses—allowing you to cut costs and focus on growing your agency.",
              },
              {
                icon: FaSearchengin,
                head: "High-Quality SEO Services",
                text: "Partnering with a white label SEO provider gives you access to expert strategies and proven execution. This ensures better results for your clients, stronger campaign performance, and increased revenue opportunities for your agency.",
              },
              {
                icon: GoGoal,
                head: "Focus on Core Business Activities",
                text: "Outsourcing SEO to a white label partner allows you to concentrate on what you do best—sales, strategy, and client relationships. By streamlining operations, you can drive higher productivity and increase overall revenue.",
              },
              {
                icon: MdOutlineStarRate,
                head: "Scale Your Business Efficiently",
                text: "White label SEO offers a flexible and scalable growth model. As your client base expands, you can easily onboard new projects without operational strain—helping you grow services, attract more clients, and maximize ROI.",
              },
              {
                icon: RxComponent1,
                head: "Branded White Label Reports",
                text: "White label reporting enables you to deliver fully branded SEO reports without handling the execution yourself. This helps you demonstrate consistent campaign management, build client trust, and strengthen your agency’s credibility.",
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
              Why Partner with a White Label
              <span className="text-[#25baff]"> SEO Company?</span>
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

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] p-8">
            Why Choose Digital Guider as Your Trusted White
            <span className="text-[#25baff]"> Label SEO Partner?</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Digital Guider helps agencies scale with expert white label SEO and
            consistent results. Here’s why agencies choose us:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Experienced SEO Professionals",
                text: "Our white label SEO services are powered by a skilled team of SEO specialists who deliver data-driven, result-focused strategies. From keyword research and content creation to technical optimization and quality link building, we manage every aspect of your client’s campaign—ensuring consistent growth and measurable results.",
              },
              {
                head: "US-Based SEO Consultants",
                text: "Partner with our white label SEO team to work with experienced U.S.-based consultants who stay updated with the latest search trends and algorithm changes—ensuring your clients achieve strong and sustainable Google rankings.",
              },
              {
                head: "Multi-Industry Expertise",
                text: "Our SEO specialists have hands-on experience across diverse industries—including eCommerce, healthcare, finance, and more. With a strong track record of delivering successful white label campaigns, we understand how to tailor strategies that meet the unique needs of every client and industry.",
              },
              {
                head: "Complete Confidentiality & Privacy",
                text: "We understand that discretion is essential in white label partnerships. Digital Guider operates behind the scenes, ensuring full confidentiality at every stage. All communication and deliverables are managed under your brand, keeping your clients unaware while protecting your agency’s reputation.",
              },
              {
                head: "Dedicated 24/7 Support",
                text: "Our support team is available around the clock to assist you whenever needed. From client queries to project consultations, we act as an extension of your agency—ensuring smooth communication, reliable assistance, and a long-term partnership you can depend on.",
              },
              {
                head: "Comprehensive White Label Reporting",
                text: "Our customized white label SEO reports provide detailed insights into your client’s campaign performance—fully branded with your agency identity. Each report covers essential metrics such as keyword rankings, traffic trends, and overall search visibility, helping you showcase measurable results with confidence.",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3 p-8">
            White Label SEO Company
            <span className="text-[#25baff]"> Process</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img3}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                In-Depth SEO Website
                <span className="text-[#25baff]"> Analysis</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We begin with a comprehensive audit of your client’s website to
                identify technical, structural, and performance issues. Our
                experts analyze crawlability, indexing, site speed, content
                quality, keyword alignment, and overall site architecture. We
                also evaluate key user experience metrics such as bounce rate,
                dwell time, and mobile responsiveness—implementing strategic
                improvements to enhance usability, engagement, and search engine
                performance.
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
                Comprehensive Competitor SEO
                <span className="text-[#25baff]"> Analysis</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Before launching any campaign, we conduct a detailed competitor
                analysis to benchmark performance and uncover growth
                opportunities. Our team studies competitor keywords, rankings,
                SERP presence, and backlink profiles—including authority sources
                and anchor strategies—to refine our approach. We also identify
                content gaps and strategic opportunities to create high-quality,
                optimized content that helps your clients outperform the
                competition.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img4}
                alt="img"
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
                src={Img5}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Strategic SEO Keyword
                <span className="text-[#25baff]"> Research</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We conduct in-depth keyword research to identify high-impact
                opportunities for your client’s business. Starting with relevant
                seed keywords, we expand the list using advanced tools to
                uncover long-tail, LSI, and niche keywords with strong search
                volume and manageable competition. We then organize keywords by
                search intent and align them with each stage of the customer
                journey to maximize relevance, traffic, and conversions.
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
                SEO Content
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We create and optimize high-quality, E-E-A-T–focused content
                that aligns with targeted keywords and user search intent. Our
                writers craft SEO-friendly content that follows search engine
                guidelines while driving engagement and conversions. To maximize
                reach, we promote content through strategic marketing channels
                and continuously refresh existing assets—updating information,
                improving keyword targeting, and enhancing user experience to
                maintain strong rankings and authority.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img6}
                alt="img"
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
                src={Img7}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                On-Page SEO
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our white label SEO team applies strategic on-page enhancements
                to improve both search visibility and user experience. We
                optimize title tags and meta descriptions to increase CTR,
                structure headings (H1, H2, H3) for semantic clarity, and
                maintain proper content hierarchy. Additionally, we optimize
                images with relevant file names, alt text, and captions to boost
                accessibility and SEO value. These combined efforts help improve
                rankings, engagement, and overall website performance—while you
                take full credit under your brand.
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
                GMB
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                To achieve strong local visibility, we fully optimize your
                client’s Google Business Profile for better rankings in the
                local 3-pack. We ensure accurate and complete business details,
                including address, phone number, business hours, and website
                URL. Our team also builds and manages consistent NAP citations
                across trusted directories to strengthen local credibility,
                improve trust, and enhance overall local search performance.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img8}
                alt="img"
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
                src={Img9}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Strategic Link Building
                <span className="text-[#25baff]"> Campaigns</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Link building is one of the most critical aspects of SEO, and
                our white label off-page team manages it seamlessly behind the
                scenes. We develop customized outreach strategies targeting
                high-authority websites within your client’s niche and create
                valuable, shareable content assets to attract quality backlinks.
                By analyzing competitor backlink profiles and identifying new
                opportunities, we secure strong, relevant links—while strictly
                avoiding low-quality or spammy sources to protect long-term
                rankings and brand reputation.
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
                Transparent White Label
                <span className="text-[#25baff]"> SEO Reporting</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We provide detailed monthly campaign reports through a fully
                branded white label dashboard aligned with your agency identity.
                Our easy-to-understand reports highlight key performance
                metrics, including rankings, traffic, and growth insights—giving
                you and your clients complete transparency. Each report also
                includes actionable recommendations to support smarter decisions
                and clearly demonstrate the impact of SEO efforts, helping you
                showcase real value while maintaining your brand authority.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img10}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 sm:py-10 lg:py-12 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl font-extrabold text-[#020202] mb-3 p-8">
              Affordable & Scalable White
              <span className="text-[#25baff]"> Label SEO Plans</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
            {/* BASIC */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-4">BASIC</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#2E7D32] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#2E7D32]">500</span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">30 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">40 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✕</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✕</div>
              </div>

              <div className="bg-gray-50 mt-5 rounded-b-xl">
                <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white">
                  START TODAY
                </button>
              </div>
            </div>

            {/* SILVER */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-4">SILVER</h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#555555] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#555555]">700</span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">40 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">60 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✕</div>
              </div>

              <div className="bg-gray-50 mt-5 rounded-b-xl">
                <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white">
                  START TODAY
                </button>
              </div>
            </div>

            {/* GOLD (POPULAR) */}
            <div className="border-4 border-[#25baff] rounded-xl relative">
              <div className="rounded-t-xl overflow-hidden">
                <div className="bg-[#25baff] py-4 text-center relative">
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
              </div>

              <div className="bg-gray-50 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#E65100] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#E65100]">
                    1000
                  </span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">50 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">100 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✓</div>
              </div>

              <div className="bg-gray-50 mt-6 rounded-b-xl">
                <button className="text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-[#25baff] text-white hover:bg-white hover:text-black border border-[#25baff]">
                  START TODAY
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="border border-[#25baff] rounded-xl">
              <h2 className="font-bold text-2xl text-[#25baff] mt-4">
                PREMIUM
              </h2>

              <div className="bg-gray-50 mt-5 px-10">
                <div className="p-5">
                  <span className="text-lg font-bold text-[#607AFE] pr-1 align-top">
                    $
                  </span>
                  <span className="text-6xl font-bold text-[#607AFE]">
                    1800
                  </span>
                  <p className="italic">monthly</p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-4">100 Keywords</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">200 Backlinks (per month)</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">GBP (GMB) – ✓</div>
                <hr className="border-gray-300 w-3/4 mx-auto" />
                <div className="py-4">Geotagging – ✓</div>
              </div>

              <div className="bg-gray-50 mt-5 rounded-b-xl">
                <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white">
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

export default WhiteLabelSeo;
