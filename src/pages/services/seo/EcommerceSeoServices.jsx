import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaSearchengin } from "react-icons/fa6";
import { GiRelationshipBounds } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { VscGraphLine } from "react-icons/vsc";

import Banner from "../../../assets/seo/banner.jpg";
import Img1 from "../../../assets/services/ecommarceSeo/img1.avif";
import Img2 from "../../../assets/services/ecommarceSeo/img2.avif";
import Img3 from "../../../assets/services/ecommarceSeo/img3.avif";
import Img4 from "../../../assets/services/ecommarceSeo/img4.avif";
import Img5 from "../../../assets/services/ecommarceSeo/img5.avif";
import Img6 from "../../../assets/services/ecommarceSeo/img6.avif";
import Img7 from "../../../assets/services/ecommarceSeo/img7.avif";
import Img8 from "../../../assets/services/ecommarceSeo/img8.avif";
import Img9 from "../../../assets/services/ecommarceSeo/img9.avif";
import Img10 from "../../../assets/services/ecommarceSeo/img10.avif";


gsap.registerPlugin(ScrollTrigger);

const EcommerceSeoServices = () => {
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
    question: "What is ecommerce SEO?",
    answer:
      "Ecommerce SEO is the strategic process of optimizing an online store to improve its visibility in search engine results, attract high-intent organic traffic, and increase sales. It focuses on product pages, category pages, technical performance, and user experience to drive revenue growth.",
  },
  {
    question: "Why does my online store need ecommerce SEO?",
    answer:
      "Most shoppers begin their buying journey on search engines. Strong ecommerce SEO ensures your products appear when potential customers search for them, helping you capture qualified traffic, build brand trust, and generate consistent, long-term sales without relying solely on paid ads.",
  },
  {
    question: "How is ecommerce SEO different from traditional SEO?",
    answer:
      "While traditional SEO focuses on improving overall website visibility, ecommerce SEO is specifically designed for online stores. It emphasizes product optimization, category structure, transactional keywords, conversion-focused content, and technical elements that directly impact sales performance.",
  },
  {
    question: "Can you improve website speed and Core Web Vitals?",
    answer:
      "Yes. We optimize page load speed, mobile responsiveness, and overall technical performance to meet modern Core Web Vitals standards. Faster websites improve search rankings, reduce bounce rates, and create a smoother shopping experience that increases conversions.",
  },
  {
    question: "What strategies are included in ecommerce SEO?",
    answer:
      "Our approach includes in-depth keyword research, product and category page optimization, technical SEO audits, structured data implementation, content marketing, internal linking, and high-quality link building to improve rankings and drive targeted traffic.",
  },
  {
    question: "What determines the success of an ecommerce SEO campaign?",
    answer:
      "Success depends on factors such as website structure, content quality, competition level, backlink profile, technical health, and overall market demand. A well-executed, data-driven strategy combined with consistent optimization delivers the strongest results.",
  },
  {
    question: "How long does it take to see results from ecommerce SEO?",
    answer:
      "Ecommerce SEO is a long-term growth strategy. While minor improvements may appear within a few weeks, significant ranking and traffic growth typically takes 3–6 months or more, depending on competition, website condition, and industry dynamics.",
  },
];


  const accordionData = [
    {
      title: "Ecommerce SEO Expertise",
      content:
        "Partnering with an ecommerce SEO company gives you access to specialists who understand online store structures, search algorithms, and industry best practices. Their expertise allows them to craft customized strategies that increase visibility, improve conversions, and drive higher sales.",
    },
    {
      title: "Dedicated Team",
      content:
        "Our experienced ecommerce SEO team stays updated with evolving search engine algorithms and market trends to keep your store competitive. You’ll have a dedicated project manager along with SEO, ASO, SMO, and development experts focused on optimizing your ecommerce performance.",
    },
    {
      title: "More Leads & Sales",
      content:
        "Using advanced tools and competitor analysis, we implement data-driven strategies that improve rankings, organic traffic, and user engagement. By increasing your store’s visibility, we attract qualified shoppers who are more likely to convert into customers.",
    },
    {
      title: "Time & Resource Savings",
      content:
        "Managing ecommerce SEO requires time, tools, and technical knowledge. By hiring an agency, you can focus on core business operations while experts handle strategy, optimization, and continuous improvements aligned with your goals and competition.",
    },
    {
      title: "Comprehensive Growth Solutions",
      content:
        "Our ecommerce SEO services go beyond basic optimization. We offer complete solutions including technical improvements, keyword targeting, content enhancement, and ongoing performance tracking to boost traffic, leads, and long-term revenue growth.",
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
          <p className="mt-6 text-lg text-gray-300">Ecommerce SEO Services</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Ecommerce
            <span className="text-[#25baff]"> SEO?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ecommerce SEO is the process of optimizing your online store to
            align with search engine guidelines and match the search intent of
            your potential customers. It involves refining website structure,
            product pages, and content to improve rankings and attract qualified
            buyers. Our experienced ecommerce SEO specialists implement tailored
            strategies to expand your brand’s visibility and drive measurable
            growth.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Key Benefits
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Increase online visibility</li>
            <li>Attract high-intent traffic</li>
            <li>Boost sales opportunities</li>
            <li>Strengthen brand credibility</li>
            <li>Maximize revenue and ROI</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How Is It Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Strategic keyword research and optimization</li>
            <li>Comprehensive technical SEO audits</li>
            <li>Product and content optimization</li>
            <li>High-quality link-building campaigns</li>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            How Do Ecommerce SEO Services Increase
            <span className="text-[#25baff]"> Your Revenue?</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-4">
            Ecommerce SEO services increase revenue by improving search
            visibility, attracting qualified traffic, and strengthening your
            online presence. Here’s how expert strategies drive ecommerce
            growth:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSearchengin,
                head: "Higher Search Rankings",
                text: "A fully optimized ecommerce website improves your position in search engine results. The better your store ranks, the more visibility and clicks it gains—leading to increased organic traffic and higher sales potential.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Stronger Brand Presence",
                text: "Customer-focused brands achieve greater success. An SEO-optimized ecommerce website helps you connect with your target audience, deliver valuable experiences, and build stronger brand recognition and trust.",
              },
              {
                icon: SlGraph,
                head: "Increased Traffic & Sales",
                text: "Search engines prioritize well-optimized websites, resulting in greater visibility and more visitors to your online store. With strategic ecommerce SEO, you can attract qualified customers, boost conversions, and drive consistent sales growth.",
              },
              {
                icon: MdOnlinePrediction,
                head: "Customer Engagement",
                text: "A well-structured website with easy navigation and engaging, relevant content encourages your target audience to return to your store. This consistent positive experience boosts engagement, enhances customer satisfaction, and builds lasting loyalty.",
              },
              {
                icon: GiRelationshipBounds,
                head: "Establish Credibility",
                text: "A strong ecommerce SEO strategy improves website performance, delivers high-quality content, resolves technical issues like index bloat and spam links, and leverages social platforms for promotion. These efforts build trust, enhance brand authority, and strengthen credibility with your customers.",
              },
              {
                icon: VscGraphLine,
                head: "Increased Conversion Rate",
                text: "Ecommerce SEO plays a vital role in guiding customers through the marketing funnel. A well-optimized and user-friendly website streamlines the buying journey, making it easy for visitors to browse products, add items to their cart, and complete purchases—ultimately improving conversion rates and sales.",
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
              Why Hire an Ecommerce
              <span className="text-[#25baff]"> SEO Company?</span>
            </h2>
            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src={Img2}
                alt="img"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* Right Accordion */}
            <div>
              <p className="text-gray-600 mb-6">
                Partnering with a professional ecommerce SEO company helps your
                business improve search visibility, attract high-intent
                shoppers, and increase sales. With expert strategies, technical
                optimization, and data-driven insights, an experienced ecommerce
                SEO consultant can strengthen your online presence and deliver
                sustainable growth
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
            Get Ecommerce SEO Services Now
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            6 Reasons to Partner with Us as Your Ecommerce
            <span className="text-[#25baff]"> SEO Agency</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-5">
            Choosing the right ecommerce SEO partner is key to online growth.
            Here’s why businesses trust us to boost visibility, traffic, and
            sales.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Targeted Ecommerce Strategy",
                text: "Our ecommerce SEO agency focuses on high-intent keywords backed by in-depth research—not just high-volume terms. By targeting shoppers actively searching for your products, we ensure your store gains qualified visibility. This strategic approach connects your brand with the right audience, driving stronger engagement and higher conversion rates.",
              },
              {
                head: "Comprehensive Ecommerce Strategy",
                text: "Our end-to-end ecommerce SEO approach covers every critical element of your online store. From customized on-page optimization to detailed site structure analysis, we fine-tune each component for maximum performance. We understand the complexities of ecommerce platforms—product pages, categories, filters, and reviews—and optimize them to improve visibility, usability, and conversions.",
              },
              {
                head: "Customized SEO Strategy",
                text: "We recognize that every ecommerce business has unique goals and challenges. That’s why we create personalized SEO strategies instead of relying on one-size-fits-all solutions. Our plans are carefully tailored to your target audience, competition, and growth objectives—ensuring measurable and sustainable online success.",
              },
              {
                head: "Content Optimization Focus",
                text: "Our team excels in creating, refining, and promoting high-quality content tailored to both users and search engines. Every piece is strategically optimized to align with your brand voice, target audience, and keyword goals. By delivering engaging, value-driven content, we improve rankings, attract backlinks, and drive consistent organic traffic growth.",
              },
              {
                head: "Affordable Plans",
                text: "Our cost-effective ecommerce SEO solutions are designed to fit your budget while delivering measurable results. We focus on driving high-quality traffic, generating qualified leads, and supporting sustainable growth—without unnecessary expenses. Explore our flexible SEO packages tailored to your business needs.",
              },
              {
                head: "High Client Satisfaction",
                text: "Our clients are at the core of everything we do. With a retention rate of over 90%, our results and long-term partnerships reflect the trust and value we consistently deliver. Beyond performance metrics, we focus on building strong relationships through transparency, dedication, and measurable success.",
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] text-center mb-25">
          Ecommerce SEO Company Strategic
          <span className="text-[#25baff]"> Process</span>
          <div className="w-30 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
        </h2>

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
                SEO Website
                <span className="text-[#25baff]"> Audit</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our ecommerce SEO website audit provides a comprehensive
                analysis of your store’s technical structure, content quality,
                and search visibility to uncover issues that may be limiting
                growth. We optimize crawlability through refined robots.txt
                files, XML sitemaps, and internal linking while improving site
                speed, mobile performance, and Core Web Vitals. Our experts
                eliminate duplicate or thin product content, fix indexing
                errors, and remove harmful backlinks to strengthen domain
                authority. With a clear, data-driven action plan, we help boost
                rankings, increase qualified traffic, and turn your ecommerce
                website into a high-performing revenue engine.
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
                Keyword
                <span className="text-[#25baff]"> Research</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our ecommerce keyword research strategy focuses on uncovering
                high-intent, revenue-driven search terms that align perfectly
                with your products and target audience. We use advanced SEO
                tools and data analytics to identify high-volume,
                low-competition, and long-tail keywords that improve search
                visibility and drive qualified traffic. By analyzing customer
                behavior, search intent, seasonal trends, and competitor
                performance, we build a strategic keyword funnel that supports
                every stage of the buyer journey—from discovery to purchase.
                This data-backed approach ensures your product and category
                pages rank for the right queries, attract ready-to-buy
                customers, and consistently increase conversions and sales.
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
                Content
                <span className="text-[#25baff]"> Creation</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our ecommerce content creation services focus on crafting
                compelling, conversion-driven content that not only ranks well
                but also builds trust with your audience. We develop optimized
                product descriptions, category pages, landing pages, and
                informative blog content aligned with high-intent keywords and
                your brand voice. By strategically integrating targeted
                keywords, optimizing meta tags, headers, and structured site
                architecture, we ensure every piece of content supports your
                overall SEO strategy. We also enhance visibility with schema
                markup, rich snippets, and search-focused formatting to improve
                click-through rates. Through a blend of data-driven SEO and
                persuasive storytelling, we help your ecommerce brand attract
                qualified traffic, engage customers, and establish lasting
                authority in your industry.
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
                Product & Category Page
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our product and category page optimization strategy is designed
                to maximize visibility, usability, and conversions. We refine
                URL structures, improve site navigation, and ensure a clean,
                search-friendly architecture that helps both users and search
                engines easily understand your store. By strategically placing
                high-intent keywords in title tags, meta descriptions, headers,
                and on-page content, we strengthen relevance and improve ranking
                potential. Our experts enhance internal linking to distribute
                authority across key pages, optimize image alt text for
                accessibility and search visibility, and implement structured
                data (schema markup) to boost rich result eligibility. The
                result is a seamless shopping experience that drives higher
                search rankings, better engagement, and increased sales.
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
                Thematic Link
                <span className="text-[#25baff]"> Building</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our thematic link building strategy focuses on earning
                high-quality, niche-relevant backlinks that strengthen your
                ecommerce store’s authority and trust. We develop targeted
                outreach campaigns to secure placements on reputable websites
                within your industry, ensuring every link is natural,
                contextually relevant, and aligned with your brand. Using proven
                techniques such as guest posting, content partnerships,
                skyscraper outreach, strategic link insertions, and digital PR,
                we prioritize quality over quantity to deliver sustainable
                ranking growth. These authoritative backlinks act as strong
                trust signals for search engines, improving domain credibility,
                increasing organic visibility, and driving qualified traffic
                that converts into loyal customers.
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
                Mobile
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                With the majority of online shopping now happening on mobile
                devices, mobile optimization is essential for ecommerce success.
                We ensure your online store delivers a fast, seamless, and
                user-friendly experience across smartphones and tablets. Our
                approach includes responsive design improvements, faster page
                load times, mobile-friendly navigation, optimized images, and
                streamlined checkout processes to reduce friction and increase
                conversions. By aligning your website with mobile-first indexing
                standards and enhancing usability on smaller screens, we help
                you capture more mobile traffic, improve engagement, and turn
                mobile visitors into loyal customers.
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
                Local SEO for
                <span className="text-[#25baff]"> Ecommerce</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our local ecommerce SEO strategy helps you connect with nearby
                customers who are actively searching for your products. We
                optimize your website with location-specific keywords,
                geographic modifiers, and locally relevant content to improve
                visibility in regional search results. By enhancing and managing
                your Google Business Profile, optimizing local citations, and
                strengthening map pack presence, we position your brand as a
                trusted authority within your area. This targeted approach
                increases local discoverability, drives qualified nearby
                traffic, and boosts both online and in-store conversions.
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
                Ecommerce Site
                <span className="text-[#25baff]"> Reporting</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our ecommerce site reporting provides clear, data-driven
                insights into your SEO performance and overall online growth. We
                use advanced analytics tools, including Google Analytics and
                Google Search Console, to track key metrics such as organic
                traffic, product page engagement, conversion rates, keyword
                rankings, backlink health, and click-through rates. By analyzing
                user behavior, traffic sources, and on-site interactions, we
                uncover actionable opportunities to improve performance and
                maximize ROI. Our detailed, easy-to-understand reports empower
                you to make informed decisions, adapt quickly to market changes,
                and continuously refine your ecommerce SEO strategy for
                sustainable growth.
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



      <section className="py-5 sm:py-10 lg:py-12 px-4 sm:px-6 bg-[#ebf0e8]">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
      Affordable Package of Ecommerce 
      <span className="text-[#25baff]"> SEO Company</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">

      {/* ================= BASIC ================= */}
      <div className="border border-[#25baff] rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-[#25baff] mt-4">
          BASIC
        </h2>

        <div className="bg-gray-50 mt-5 px-10">
          <div className="p-5">
            <span className="text-lg font-bold text-[#52CC55] pr-1 align-top">$</span>
            <span className="text-6xl font-bold text-[#52CC55]">500</span>
            <span className="line-through text-gray-400 ml-2">700</span>
            <p>/ MONTH</p>
          </div>
        </div>

        <div className="text-center">

          <div className="py-4">30 Keywords</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">40 Backlinks (per month)</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Target Pages Optimized – Up to 10</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">GBP (GMB) – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Geotagging – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">G.E.O – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">A.E.O – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Compatibility Testing – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Visibility Audit – 2 pages</div>
        </div>

        <div className="bg-gray-50 mt-5 rounded-b-xl">
          <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
            Start Today
          </button>
        </div>
      </div>

      {/* ================= SILVER ================= */}
      <div className="border border-[#25baff] rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-[#25baff] mt-4">
          SILVER
        </h2>

        <div className="bg-gray-50 mt-5 px-10">
          <div className="p-5">
            <span className="text-lg font-bold text-[#555555] pr-1 align-top">$</span>
            <span className="text-6xl font-bold text-[#555555]">700</span>
            <span className="line-through text-gray-400 ml-2">900</span>
            <p>/ MONTH</p>
          </div>
        </div>

        <div className="text-center">

          <div className="py-4">40 Keywords</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">60 Backlinks (per month)</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Target Pages Optimized – Up to 15</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">GBP (GMB) – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Geotagging – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">G.E.O – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">A.E.O – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Compatibility Testing – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Visibility Audit – 4 pages</div>
        </div>

        <div className="bg-gray-50 mt-5 rounded-b-xl">
          <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
            Start Today
          </button>
        </div>
      </div>

      {/* ================= GOLD (POPULAR STRIP) ================= */}
      <div className="border border-[#25baff] rounded-xl bg-white">
        <div className="rounded-t-xl overflow-hidden">
          <div className="bg-[#25baff] py-4 text-center relative">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              GOLD
            </h2>

            {/* Popular Ribbon */}
            <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
              <div className="absolute top-5 right-[-35px] rotate-45 bg-[#a8d97c] text-black text-xs font-bold py-1 w-40 text-center shadow-md">
                POPULAR
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-10">
          <div className="p-5">
            <span className="text-lg font-bold text-[#FFC107] pr-1 align-top">$</span>
            <span className="text-6xl font-bold text-[#FFC107]">1000</span>
            <span className="line-through text-gray-400 ml-2">1200</span>
            <p>/ MONTH</p>
          </div>
        </div>

        <div className="text-center">

          <div className="py-4">50 Keywords</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">100 Backlinks (per month)</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Target Pages Optimized – Up to 25</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">GBP (GMB) – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Geotagging – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">G.E.O – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">A.E.O – ✕</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Compatibility Testing – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Visibility Audit – 6 pages</div>
        </div>

        <div className="bg-gray-50 mt-6 rounded-b-xl">
          <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-[#25baff] text-white hover:bg-white hover:text-black cursor-pointer">
            Start Today
          </button>
        </div>
      </div>

      {/* ================= PREMIUM ================= */}
      <div className="border border-[#25baff] rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-[#25baff] mt-4">
          PREMIUM
        </h2>

        <div className="bg-gray-50 mt-5 px-10">
          <div className="p-5">
            <span className="text-lg font-bold text-[#607AFE] pr-1 align-top">$</span>
            <span className="text-6xl font-bold text-[#607AFE]">1800</span>
            <span className="line-through text-gray-400 ml-2">2000</span>
            <p>/ MONTH</p>
          </div>
        </div>

        <div className="text-center">

          <div className="py-4">100 Keywords</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">200 Backlinks (per month)</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Target Pages Optimized – Up to 40</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">GBP (GMB) – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">Geotagging – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">G.E.O – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">A.E.O – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Compatibility Testing – ✓</div>
          <hr className="border-gray-300 w-3/4 mx-auto" />

          <div className="py-4">AI Visibility Audit – 8 pages</div>
        </div>

        <div className="bg-gray-50 mt-5 rounded-b-xl">
          <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
            Start Today
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

export default EcommerceSeoServices;
