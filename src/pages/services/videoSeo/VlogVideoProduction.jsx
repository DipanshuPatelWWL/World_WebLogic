import { useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa";
import { TbDeviceIpadShare } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import {
  FaVideo,
  FaPenNib,
  FaRocket,
  FaSearch,
  FaUsers,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";

import Banner from "../../../assets/services/videoProduction/banner.jpg";
import Img from "../../../assets/services/videoProduction/img.avif";
import Card1 from "../../../assets/services/videoProduction/card1.avif";
import Card2 from "../../../assets/services/videoProduction/card2.avif";
import Card3 from "../../../assets/services/videoProduction/card3.avif";
import Card4 from "../../../assets/services/videoProduction/card4.avif";
import Card5 from "../../../assets/services/videoProduction/card5.avif";
import Card6 from "../../../assets/services/videoProduction/card6.avif";

gsap.registerPlugin(ScrollTrigger);

const VlogVideoProduction = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);
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
      question:
        "Do I need to be a YouTuber or influencer to benefit from your video services?",
      answer:
        "Not at all. Our video services are designed for brands, startups, professionals, and growing businesses that want to leverage video for visibility and lead generation—no influencer status required.",
    },
    {
      question: "Which platforms do you optimize videos for?",
      answer:
        "We create and optimize content for YouTube, Instagram, Facebook, LinkedIn, TikTok, and videos embedded on your website—ensuring platform-specific performance and maximum reach.",
    },
    {
      question: "What’s included in your Video SEO services?",
      answer:
        "Our Video SEO services include in-depth keyword research, SEO-focused scripting, optimized titles and descriptions, metadata structuring, custom thumbnails, captions, schema recommendations, and performance tracking.",
    },
    {
      question: "What’s included in your pricing?",
      answer:
        "Our pricing covers end-to-end video production—from strategy, planning, and scripting to filming, editing, SEO optimization, publishing guidance, and performance reporting.",
    },
    {
      question: "Can I outsource only editing or scripting?",
      answer:
        "Yes. We offer flexible engagement models, allowing you to outsource specific services such as video editing, scriptwriting, YouTube optimization, or choose complete video production support.",
    },
    {
      question: "Do you handle content strategy and scripting?",
      answer:
        "Absolutely. We develop data-driven content strategies and craft SEO-optimized scripts tailored to your brand voice, audience intent, and business goals.",
    },
    {
      question: "Can you optimize my existing videos?",
      answer:
        "Yes. We audit, refine, and optimize your existing videos to improve rankings, increase watch time, enhance engagement, and maximize overall performance.",
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
          <p className="mt-6 text-lg text-gray-300">
            Script to Screen Video Production
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What Are Video
            <span className="text-[#25baff]"> Services?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Video services are the strategic backbone of powerful digital
            storytelling, designed to capture attention, communicate your brand
            message clearly, and drive measurable results. From high-quality
            video production and professional editing to YouTube optimization,
            short-form reels, and data-driven scripting, we transform your ideas
            into compelling visual experiences that connect with your audience
            and convert viewers into loyal customers. We don’t just create
            videos — we craft performance-focused content built to boost
            visibility, increase engagement, and generate real business growth.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1120] text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Video vs Text Content Strategy
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Two powerful content formats. Different strengths. Different
              outcomes. Let’s break it down in a smarter way.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10 relative">
            {/* Divider Line */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 opacity-40"></div>

            {/* VIDEO CARD */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-center gap-3 mb-8">
                <FaVideo className="text-blue-400 text-3xl" />
                <h3 className="text-2xl font-semibold">Video Content</h3>
              </div>

              <ul className="space-y-6 text-gray-300">
                <li className="flex gap-3">
                  <FaRocket className="text-blue-400 mt-1" />
                  Highly engaging & emotional storytelling
                </li>
                <li className="flex gap-3">
                  <FaUsers className="text-blue-400 mt-1" />
                  Strong audience interaction (likes, shares, comments)
                </li>
                <li className="flex gap-3">
                  <FaChartLine className="text-blue-400 mt-1" />
                  Higher viral growth potential
                </li>
                <li className="flex gap-3">
                  <FaDollarSign className="text-blue-400 mt-1" />
                  Requires production tools & editing
                </li>
                <li className="flex gap-3">
                  <FaSearch className="text-blue-400 mt-1" />
                  Optimized via YouTube SEO & captions
                </li>
              </ul>
            </div>

            {/* TEXT CARD */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-8">
                <FaPenNib className="text-purple-400 text-3xl" />
                <h3 className="text-2xl font-semibold">Textual Content</h3>
              </div>

              <ul className="space-y-6 text-gray-300">
                <li className="flex gap-3">
                  <FaSearch className="text-purple-400 mt-1" />
                  Keyword-driven & search-focused
                </li>
                <li className="flex gap-3">
                  <FaUsers className="text-purple-400 mt-1" />
                  Readers engage through comments & shares
                </li>
                <li className="flex gap-3">
                  <FaChartLine className="text-purple-400 mt-1" />
                  Long-term organic SEO traffic
                </li>
                <li className="flex gap-3">
                  <FaDollarSign className="text-purple-400 mt-1" />
                  Lower cost & easier scalability
                </li>
                <li className="flex gap-3">
                  <FaRocket className="text-purple-400 mt-1" />
                  Ideal for authority & thought leadership
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              The best strategy? Combine both for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Our Expert Video Production
            <span className="text-[#25baff]"> Solutions</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TbSeo,
                head: "Video SEO for Maximum Visibility & Rankings",
                text: "Our video production services are strategically optimized to rank higher across search platforms by integrating targeted keywords, compelling metadata, and structured schema markup. This advanced approach strengthens your video SEO, boosts visibility on search engines and video platforms, and drives high-intent organic traffic that increases engagement, authority, and conversions for your brand.",
              },
              {
                icon: FaSearchengin,
                head: "Enhanced On-Page SEO with Strategic Video Integration",
                text: "Embedding professionally produced vlogs and adding optimized transcriptions significantly increases dwell time, expands keyword coverage, and strengthens topical authority across your website. This approach enhances your overall on-page SEO, supports a performance-driven video content strategy, and improves search visibility by making your content more discoverable, engaging, and search-engine friendly.",
              },
              {
                icon: TbDeviceIpadShare,
                head: "Better Retention & Increased Watch Time",
                text: "Through strategic scripting, compelling storytelling, and polished video editing, we create content that keeps viewers engaged from start to finish. By delivering clear messaging and seamless visual flow, we improve watch time, extend session duration, and send strong engagement signals to platform algorithms — helping your videos gain greater visibility, higher rankings, and sustained audience growth.",
              },
              {
                icon: FaSearchengin,
                head: "Targeted Traffic Generation",
                text: "Our expert video production team enhances every video with strategically placed links, compelling calls-to-action, clickable elements, and SEO-rich descriptions designed to guide viewers toward meaningful actions. By combining powerful video marketing techniques with advanced YouTube optimization strategies, we expand your content’s reach, increase engagement, and drive highly targeted traffic that converts into leads and sales.",
              },
              {
                icon: BiSolidBookContent,
                head: "Multichannel Video Content Strategy",
                text: "A strategically produced video can be repurposed into blog posts, social media snippets, email campaigns, and short-form content — multiplying its value across platforms. By building a content-rich, SEO-friendly ecosystem around each video, we amplify your video marketing efforts, expand reach, increase engagement, and create a cohesive content strategy that maximizes visibility and long-term impact.",
              },
              {
                icon: MdOutlineSecurity,
                head: "Stronger Brand Authority Through Strategic Video",
                text: "We deliver consistent, high-quality video production that authentically reflects your brand voice, expertise, and values. By blending powerful storytelling with strategic video SEO, we help your brand build trust, strengthen online credibility, and establish long-term authority — positioning you as a recognized leader in your industry.",
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
            Start Your Video Journey Today!
          </h2>

          <NavLink to="/contact">
            <button className="bg-[#25baff] text-[#020202] cursor-pointer px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
              Contact Now
            </button>
          </NavLink>
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Identify gaps, Improve strategies, & Increase your ROI
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Why Choose Digital
            <span className="text-[#25baff]"> WebGuider?</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "End-to-End Vlogging Services",
                text: "From concept development to final upload, our team manages every stage of your vlog production under one roof. Our professional vlogging services include strategic scriptwriting, high-quality filming, polished editing, and platform-specific optimization — all tailored to reflect your brand voice, engage your audience, and drive measurable growth across digital channels.",
              },
              {
                head: "Hassle-Free Video Outsourcing",
                text: "Our expert team manages the entire video workflow — from outsourcing video editing for YouTube, vlogs, and testimonial videos to strategic scripting, post-production, and publishing. By handling the creative and technical heavy lifting, we free up your time so you can focus on scaling your business, strengthening your brand, and driving long-term growth with confidence.",
              },
              {
                head: "Expert YouTube Video Editing",
                text: "At Digital WebGuider, our video content creation team specializes in professional YouTube vlog editing services designed to enhance visibility and engagement. We craft SEO-optimized descriptions, design high-converting custom thumbnails, and structure videos with retention-focused timelines to maximize watch time and performance. Every edit is strategically aligned to boost rankings, grow subscribers, and turn viewers into loyal followers.",
              },
              {
                head: "Versatile Video Production",
                text: "We create dynamic, brand-aligned video content — including vlogs, testimonials, and promotional visuals — designed to resonate with your target audience and drive meaningful engagement. Each video is strategically crafted to perform across platforms like YouTube, and Instagram ensuring maximum reach, increased traffic, and consistent brand visibility across digital channels.",
              },
              {
                head: "Faster Video Editing Powered by AI",
                text: "Our team leverages advanced AI-powered tools within our video editing and production workflow to accelerate turnaround times without compromising quality. By blending intelligent automation with human creativity and strategic oversight, we deliver fast, scalable, and high-performance video content that maintains precision, storytelling depth, and brand consistency across every project.",
              },
              {
                head: "Story-Driven Video Editing That Connects & Converts",
                text: "Whether you’re looking for freelance video editing support or a dedicated full-scale content team, we create strategically structured, narrative-driven videos that align perfectly with your brand style and audience expectations. Every edit is designed to tell a compelling story, strengthen emotional connection, and drive meaningful engagement that turns viewers into loyal followers and customers.",
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

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              Our Video Content Creation
              <span className="text-[#25baff]"> Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Strategic Ideation & Campaign Planning",
              "Professional Scriptwriting & Storyboarding",
              "High-Quality Filming & Production",
              "Advanced Video Editing & Post-Production",
              "SEO-Optimized Video Publishing",
              "Consistent Scheduling, Distribution & Performance Tracking",
            ].map((text, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                shadow-lg shadow-[#25baff]/10
                transition-all duration-500
                hover:bg-[#25baff]
                hover:border-[#25baff]
                hover:shadow-2xl hover:shadow-[#25baff]/40
                hover:-translate-y-2"
              >
                <FaCheckCircle
                  className="text-[#25baff] text-2xl mt-1
                  group-hover:text-white transition-colors duration-300"
                />

                <p
                  className="text-[#020202] text-lg leading-relaxed
                group-hover:text-white transition-colors duration-300"
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Franchise Results Section ================= */}
      <section className="bg-[#a8d97c] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Video Services Crafted Around Your Unique
            <span className="text-[#25baff]"> Brand Story</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card1}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Behind-the-Scenes Stories
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Show authentic moments to build credibility and humanize your
                brand.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card2}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Travel Stories & Experiences
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Capture authentic adventures—perfect for tourism, lifestyle, and
                influencer brands.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card3}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Personal Branding Stories
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Share authentic experiences that build relatability and deeper
                emotional connections.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card4}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Culinary & Food Stories
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Showcase recipes, reviews, and flavors—perfect for chefs and
                food brands.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card5}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Lifestyle Features
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Share daily routines and practical tips—ideal for wellness and
                lifestyle brands. Share authentic experiences that build
                relatability and deeper emotional connections.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
            <div className="overflow-hidden">
              <img
                src={Card6}
                alt="img"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Beauty & Self-Care Stories
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Highlight tutorials, tips, or product reviews—ideal for beauty
                creators and brands.
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

export default VlogVideoProduction;
