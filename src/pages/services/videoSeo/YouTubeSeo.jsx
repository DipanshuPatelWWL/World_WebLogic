import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SlGraph } from "react-icons/sl";
import { VscGraphLine } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiCrystalGrowth } from "react-icons/gi";
import { MdContentPasteSearch } from "react-icons/md";

import Banner from "../../../assets/services/youtubeSeo/banner.jpg";
import Img1 from "../../../assets/services/youtubeseo/img1.avif";
import Img2 from "../../../assets/services/youtubeseo/img2.avif";
import Img3 from "../../../assets/services/youtubeseo/img3.avif";
import Img4 from "../../../assets/services/youtubeseo/img4.avif";
import Img5 from "../../../assets/services/youtubeseo/img5.avif";
import Img6 from "../../../assets/services/youtubeseo/img6.avif";
import Img7 from "../../../assets/services/youtubeseo/img7.avif";
import Img8 from "../../../assets/services/youtubeseo/img8.avif";
import Img9 from "../../../assets/services/youtubeseo/img9.avif";
import Img10 from "../../../assets/services/youtubeseo/img10.avif";
import Img11 from "../../../assets/services/youtubeseo/img11.avif";

gsap.registerPlugin(ScrollTrigger);

const YouTubeSeo = () => {
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
      question: "What is a YouTube SEO service?",
      answer:
        "YouTube SEO service involves optimizing your videos and channel to improve rankings in YouTube search results and suggested feeds. The goal is to increase visibility, attract targeted viewers, and grow subscribers organically.",
    },
    {
      question: "Can I do YouTube SEO on my own?",
      answer:
        "Yes, you can implement basic YouTube SEO yourself. However, achieving consistent and competitive results requires in-depth knowledge of algorithms, keyword research, analytics, and optimization strategies. Working with experts can accelerate growth and improve outcomes.",
    },
    {
      question: "Is YouTube SEO different from Google SEO?",
      answer:
        "While both focus on improving visibility in search results, YouTube SEO is specifically tailored to video optimization on YouTube’s platform. Google SEO primarily targets websites and web pages, whereas YouTube SEO centers on video rankings, engagement signals, and watch time.",
    },
    {
      question: "How do YouTube optimization agencies work?",
      answer:
        "YouTube SEO agencies analyze your channel performance, conduct keyword research, optimize video metadata (titles, descriptions, tags), improve thumbnails, and implement engagement strategies to increase visibility, rankings, and audience growth.",
    },
    {
      question: "Do YouTube video links help with SEO?",
      answer:
        "Yes, links from YouTube videos can support overall SEO efforts by driving traffic and building brand authority. When optimized properly, YouTube content can also appear in Google search results, increasing online visibility.",
    },
    {
      question: "How does YouTube video SEO work?",
      answer:
        "YouTube video SEO works by optimizing elements such as titles, descriptions, tags, thumbnails, captions, and engagement signals. These factors help YouTube understand your content and rank it higher in relevant searches and recommendations.",
    },
    {
      question: "What are some effective YouTube SEO strategies?",
      answer:
        "Effective strategies include detailed keyword research, creating compelling titles and thumbnails, writing optimized descriptions, using relevant tags, encouraging audience interaction, and consistently publishing high-quality content.",
    },
    {
      question: "Is there an ideal video size for SEO?",
      answer:
        "There is no specific file size requirement for SEO. However, videos should be high-quality, properly formatted, and optimized for fast loading and smooth playback across devices to enhance user experience and engagement.",
    },
    {
      question: "Does Google index YouTube videos?",
      answer:
        "Yes, Google crawls and indexes YouTube videos. Well-optimized videos can appear not only in YouTube search results but also in Google’s search listings, expanding your reach and driving additional traffic.",
    },
  ];
  const accordionData = [
    {
      title: "YouTube SEO Expertise",
      content:
        "A professional YouTube SEO agency brings in-depth knowledge of YouTube’s ranking algorithms, optimization techniques, and platform best practices. They analyze your channel performance, identify growth gaps, and implement data-driven strategies to improve visibility, engagement, and overall channel authority.",
    },
    {
      title: "Saves You Valuable Time",
      content:
        "Mastering and executing YouTube SEO requires continuous research, testing, and optimization. By partnering with experts, you can focus on content creation and audience engagement while the agency handles keyword research, optimization, analytics tracking, and performance improvements.",
    },
    {
      title: "Proven & Result-Driven Strategies",
      content:
        "YouTube SEO agencies stay updated with algorithm changes, emerging trends, and competitive insights. Through ongoing testing and refinement, they apply proven strategies tailored to your niche, helping your videos rank higher, attract qualified viewers, and drive consistent growth.",
    },
    {
      title: "Customized Growth Plan",
      content:
        "Every channel is unique. A reliable YouTube SEO agency develops a personalized optimization strategy based on your niche, target audience, competitors, and business goals. This ensures that every action taken aligns with your brand positioning and long-term success objectives.",
    },
    {
      title: "Higher Return on Investment",
      content:
        "Although hiring a YouTube SEO agency requires investment, the long-term benefits often outweigh the cost. Improved rankings, targeted traffic, higher engagement, and better conversion opportunities contribute to sustainable growth and increased revenue, delivering a strong ROI.",
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
          <p className="mt-6 text-lg text-gray-300">YouTube SEO Services</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is YouTube
            <span className="text-[#25baff]"> Optimization?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            YouTube Optimization is the practice of enhancing your videos and
            channel to improve visibility, attract more viewers, and rank higher
            in YouTube and Google search results. By optimizing titles,
            descriptions, tags, and overall content strategy, you increase your
            chances of reaching the right audience at the right time.
          </p>
          <p className="text-gray-600 font-bold leading-relaxed">
            Key Advantages of YouTube SEO Services:
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Greater Video Reach & Impressions</li>
            <li>Faster Subscriber Growth</li>
            <li>Improved Watch Time & Audience Retention</li>
            <li>Stronger Brand Authority & Trust</li>
            <li>Higher Conversions & Revenue Opportunities</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How Does YouTube Optimization Work?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>In-Depth Keyword Research</li>
            <li>Smart Keyword Integration</li>
            <li>Compelling Content & Clear CTAs</li>
            <li>Eye-Catching Thumbnails</li>
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
            How YouTube SEO Maximizes Your Return
            <span className="text-[#25baff]"> on Investment</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-4">
            YouTube SEO (Search Engine Optimization) plays a powerful role in
            increasing your Return on Investment (ROI) through multiple
            strategic advantages:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BsGraphUpArrow,
                head: "Expanded Reach & Stronger Online Presence",
                text: "Optimizing your videos and channel improves search rankings and discoverability, allowing your content to appear in relevant searches and suggested feeds. With well-structured metadata, engaging titles, and quality content, your brand reaches a broader and more targeted audience. Greater visibility leads to higher engagement, stronger brand recognition, and ultimately better ROI opportunities.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Target the Right Viewers",
                text: "By strategically optimizing your videos with relevant and intent-driven keywords, your content reaches people who are actively searching for solutions. This ensures your audience is not just larger, but more qualified. When viewers find exactly what they need, they’re more likely to engage, subscribe, and convert into loyal customers.",
              },
              {
                icon: SlGraph,
                head: "Higher Click-Through Rates (CTR)",
                text: "Well-crafted titles, attention-grabbing thumbnails, and optimized descriptions encourage users to click on your videos in search results and suggested feeds. A higher CTR drives more qualified traffic to your content, increasing engagement opportunities and improving your chances of generating leads and sales.",
              },
              {
                icon: MdContentPasteSearch,
                head: "Stronger Brand Recognition",
                text: "When your videos rank higher and appear more frequently in search and recommendations, your brand gains consistent exposure. The more viewers see and engage with your content, the more familiar and trustworthy your brand becomes. This repeated visibility helps build credibility, long-term loyalty, and stronger connections with your target audience.",
              },
              {
                icon: GiCrystalGrowth,
                head: "Cost-Effective & Long-Term Growth",
                text: "Unlike paid advertising that stops delivering results once the budget runs out, YouTube SEO offers sustainable, long-term value. Once your videos are properly optimized and achieve strong rankings, they can continuously attract organic traffic and generate leads without ongoing ad expenses. This makes it a highly cost-efficient strategy for consistent growth and better ROI over time.",
              },
              {
                icon: VscGraphLine,
                head: "Sustained Traffic & Ongoing Returns",
                text: "YouTube SEO helps create lasting visibility for your content. Once a video is optimized and starts ranking, it can continue attracting viewers, generating engagement, and driving leads for months or even years. This steady stream of organic traffic ensures continuous value and stronger ROI long after the video is published.",
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
              Why Hiring a YouTube SEO Expert Can Transform
              <span className="text-[#25baff]"> Your Channel?</span>
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
                A professional YouTube SEO agency can significantly enhance your
                video and channel performance through strategic optimization.
                Here’s how it benefits your business:
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
            Why We’re the Right YouTube SEO Agency for
            <span className="text-[#25baff]"> Your Growth</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-5">
            Select expert YouTube SEO services to strengthen your niche
            authority and grow your audience. Trusted by businesses across the
            US, Digital Guider helps brands succeed with strategic video
            optimization.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Affordable & Results-Driven YouTube SEO",
                text: "At Digital Guider, we provide cost-effective YouTube SEO solutions designed to match your goals and budget. Our flexible pricing ensures businesses of all sizes can access professional optimization services. While our packages remain competitively priced, we maintain high standards of quality, strategy, and performance — delivering measurable results without unnecessary expenses.",
              },
              {
                head: "Tailored YouTube Growth Strategies",
                text: "We understand that every YouTube channel has its own niche, audience, and objectives. That’s why we create personalized optimization plans aligned with your specific goals. Whether you want to increase views, grow subscribers, or improve engagement, our customized strategies are designed to deliver measurable and sustainable results.",
              },
              {
                head: "Transparent & Clear Communication",
                text: "We prioritize open and honest communication throughout our partnership. You’ll receive consistent updates, detailed progress reports, and clear insights into the strategies we implement. We ensure you always understand what actions are being taken, the purpose behind them, and how they contribute to your channel’s growth and performance.",
              },
              {
                head: "Data-Backed Optimization Strategy",
                text: "Our approach is driven by analytics and measurable insights. We closely monitor audience behavior, performance metrics, and industry trends to refine and strengthen your optimization strategy. With continuous testing and improvement, we focus on maximizing ROI while providing clear, transparent reporting. Every decision we make is backed by data to ensure consistent growth and long-term success on YouTube.",
              },
              {
                head: "Proven Results & Client Success",
                text: "Our success is reflected in the measurable growth our clients achieve. Many brands have experienced significant improvements in visibility, engagement, and overall channel performance after working with us. With a results-focused strategy, we deliver real, data-backed outcomes that align directly with your business goals and long-term objectives.",
              },
              {
                head: "Dedicated Partnership & Ongoing Support",
                text: "When you partner with Digital Guider for YouTube SEO, you gain more than just a service provider — you gain a committed growth partner. Our team works closely with you at every stage, providing expert guidance, strategic recommendations, and continuous support to ensure your channel achieves long-term success.",
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
          Our Data-Driven YouTube SEO
          <span className="text-[#25baff]"> Execution Process</span>
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
                Comprehensive Channel Audit &
                <span className="text-[#25baff]"> Goal Alignment</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We begin with an in-depth evaluation of your YouTube channel to
                understand its current performance, strengths, gaps, and growth
                opportunities. Our team analyzes key metrics, audience insights,
                content performance, and competitor positioning to uncover
                actionable improvements. Based on these findings, we work with
                you to define clear and measurable objectives — whether that’s
                increasing views, growing subscribers, enhancing brand
                visibility, or driving website traffic.
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
                In-Depth Keyword Research &
                <span className="text-[#25baff]"> Content Planning</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We perform detailed keyword research to identify high-impact,
                relevant search terms within your niche. By understanding what
                your target audience is actively searching for, we optimize your
                video titles, descriptions, tags, and metadata for maximum
                discoverability. Similar to traditional SEO, this process
                focuses on aligning content with user intent. Using these
                insights, we craft a strategic content plan tailored to your
                industry, audience interests, and growth objectives.
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
                Strategic Content Planning
                <span className="text-[#25baff]"> & Execution</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We develop a results-focused content strategy aligned with your
                goals, target audience, and keyword insights. This includes
                selecting the right topics, video formats, and publishing
                schedule to maximize engagement and visibility. Our approach
                emphasizes creating valuable, relevant, and engaging content
                that reflects your brand voice and resonates with viewers. By
                combining creativity with SEO precision, we help attract
                qualified traffic, strengthen audience trust, and position your
                channel as an authority within your niche.
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
                Comprehensive Video
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We optimize every video to improve discoverability, engagement,
                and overall performance on YouTube. This includes enhancing
                titles, descriptions, tags, captions, and thumbnails with
                strategically placed keywords and compelling messaging. Our team
                ensures your content is fully search-optimized while maintaining
                natural readability and audience appeal. We also provide
                creative guidance on thumbnail design to increase click-through
                rates and attract more qualified viewers to your videos.
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
                Audience Engagement &
                <span className="text-[#25baff]"> Community Growth</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We implement proven strategies to increase interaction across
                your channel — encouraging likes, comments, shares, and
                subscriptions. Strong engagement signals to YouTube that your
                content is valuable, which can improve rankings in search
                results and recommended feeds. Our team also recommends
                engagement-driven tactics such as strategic calls-to-action,
                playlist creation, community posts, and interactive campaigns to
                keep your audience actively involved and connected to your
                brand.
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
                Performance Tracking & Analytics
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We leverage YouTube Analytics to monitor critical performance
                metrics such as views, watch time, audience retention,
                click-through rates, and subscriber growth. Through detailed
                reporting, we provide clear insights into what’s working and
                where improvements are needed. Continuous tracking allows us to
                refine and optimize your YouTube SEO strategy, ensuring
                consistent progress, smarter decision-making, and sustained
                channel growth over time.
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
                Adapting to Algorithm
                <span className="text-[#25baff]"> Updates</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                YouTube’s algorithm is constantly evolving, and staying ahead is
                essential for sustained growth. We continuously monitor platform
                updates, ranking factors, and emerging SEO trends to ensure your
                channel remains fully optimized. By proactively adjusting
                strategies and implementing the latest best practices, we help
                protect and enhance your channel’s performance over time.
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
                Continuous Improvement
                <span className="text-[#25baff]"> & Growth</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We regularly refine and enhance your optimization strategy by
                analyzing performance data, evaluating audience feedback, and
                adapting to platform updates. This ongoing, data-driven approach
                ensures steady progress and long-term success for your YouTube
                channel. Our commitment to continuous improvement helps maximize
                performance, strengthen engagement, and achieve your long-term
                growth objectives.
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

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img11}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Personalized Performance
                <span className="text-[#25baff]"> Reporting</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our tailored YouTube SEO reports deliver clear, actionable
                insights into your channel and video performance. We analyze
                essential metrics such as overall channel growth, engagement
                rates, audience demographics, traffic sources, keyword
                performance, and competitor comparisons. These detailed insights
                help refine your content strategy, improve audience targeting,
                and maximize ROI. With practical recommendations and transparent
                data, you can make confident decisions that strengthen your
                YouTube presence and support your business goals.
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

export default YouTubeSeo;
