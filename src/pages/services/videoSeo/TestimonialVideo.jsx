import { useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxComponent1 } from "react-icons/rx";
import { HiSpeakerphone } from "react-icons/hi";
import { LuUnlink } from "react-icons/lu";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineAutoGraph } from "react-icons/md";

import Banner from "../../../assets/services/testimonialVideo/banner.avif";
import Img1 from "../../../assets/services/testimonialVideo/img.avif";

gsap.registerPlugin(ScrollTrigger);

const TestimonialVideo = () => {
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
      question:
        "What if my customers are camera-shy or uncomfortable on video?",
      answer:
        "Our team conducts empathy-driven interviews with guided prompts to help even the most camera-shy customers feel relaxed and confident. We create a comfortable environment that encourages natural, authentic storytelling.",
    },
    {
      question: "Will I own the rights to the final video?",
      answer:
        "Yes, you receive full ownership rights to your testimonial video, allowing you to use it across your website, social media, ads, and other marketing channels.",
    },
    {
      question: "How long does it take to produce a testimonial video?",
      answer:
        "On average, testimonial video production takes between 2 to 4 weeks, depending on planning, filming logistics, and post-production requirements.",
    },
    {
      question: "What is the ideal length of a customer testimonial video?",
      answer:
        "Most effective testimonial videos are between 60 and 90 seconds, long enough to tell a compelling story while keeping viewers engaged.",
    },
    {
      question:
        "Can testimonials be filmed remotely, or is on-site filming required?",
      answer:
        "Yes, we offer professional remote filming solutions. We provide guided support and, when needed, ship professional kits with lighting and audio equipment to ensure high-quality results from any location.",
    },
    {
      question: "How much do customer testimonial video services cost?",
      answer:
        "Pricing varies based on scope, production style, and distribution needs. We offer customized packages to fit different budgets—book a free consultation to get a tailored quote.",
    },
    {
      question:
        "How do you ensure testimonials feel authentic and not scripted?",
      answer:
        "We focus on natural conversations rather than memorized scripts. By capturing genuine reactions, candid moments, and honest experiences, we ensure every testimonial feels real, relatable, and trustworthy.",
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
            Customer Testimonial Video
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
            What Are Testimonial
            <span className="text-[#25baff]"> Videos?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Testimonial videos are authentic storytelling tools where real
            customers share their honest experiences with your company. These
            unscripted narratives highlight genuine challenges, the solutions
            your business provided, and the results achieved. By focusing on
            real journeys and real outcomes, testimonial videos create
            credibility and trust that traditional advertising often cannot
            match. They allow potential customers to see and hear firsthand how
            your services or products have made a meaningful difference.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            More than just polished production or scripted messaging, business
            testimonial videos capture genuine emotions, real pain points, and
            authentic satisfaction from actual clients. This emotional honesty
            builds a strong connection with viewers and strengthens brand trust.
            When optimized with effective video SEO strategies, testimonial
            videos also improve online visibility, helping your brand reach a
            broader audience and drive stronger engagement and conversions.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img1}
            alt="img"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          {/* <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            High-quality backlinks that boost rankings and authority.
          </p> */}

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Why Customer Testimonial Videos Are Essential for
            <span className="text-[#25baff]"> Business Growth</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TbSeo,
                head: "Improved SEO Performance",
                text: "Customer testimonial videos generate stronger SEO results than traditional text-based reviews because video content captures attention, increases engagement, and keeps visitors on your website longer. Higher watch time and improved click-through rates signal value to search engines, helping your business rank higher on SERPs. By leveraging professionally optimized testimonial videos, you can enhance online visibility, attract more targeted traffic, and ultimately drive greater conversions.",
              },
              {
                icon: MdOutlineAutoGraph,
                head: "Drive Engagement",
                text: "Customer testimonial videos enhance engagement by making your website more dynamic and visually compelling, encouraging visitors to spend more time interacting with your brand. By showcasing authentic customer experiences and real success stories, these videos create a lasting impression and foster deeper emotional connections with potential clients, ultimately increasing trust, conversions, and long-term loyalty.",
              },
              {
                icon: BsGraphUpArrow,
                head: "Improved Conversion Rates",
                text: "Customer testimonial videos act as powerful, trust-building endorsements for your business, strengthening credibility, enhancing online reputation, and increasing audience confidence in your brand. By showcasing real customer experiences and authentic success stories, these videos influence purchasing decisions and encourage action. Studies indicate that marketing campaigns incorporating testimonial videos can experience a 25–50% increase in conversion rates compared to those without them, making video testimonials a highly effective tool for driving sales and business growth.",
              },
              {
                icon: HiSpeakerphone,
                head: "Social Proof",
                text: "Customer testimonial videos provide strong social proof by showcasing authentic endorsements and real experiences from satisfied clients. By highlighting genuine results and honest feedback, these videos build credibility, reinforce trust, and make potential customers feel more confident in choosing your services based on the positive experiences of others.",
              },
              {
                icon: LuUnlink,
                head: "Emotional Connection",
                text: "Customer testimonial videos create meaningful emotional connections by capturing genuine experiences and real emotions from satisfied clients. These authentic stories strengthen your brand identity, build deeper trust, and inspire long-term loyalty, often making testimonial videos more impactful and persuasive than traditional paid advertisements.",
              },
              {
                icon: RxComponent1,
                head: "Increased Credibility & Trust",
                text: "Trust is the foundation of every successful business, and testimonial videos play a powerful role in strengthening it. Research shows that a significant percentage of customers develop greater trust in a brand after watching positive testimonial videos, as they clearly demonstrate that your services deliver on their promises. By featuring real customer experiences and genuine feedback, these testimonials enhance your brand’s credibility, reinforce trustworthiness, and attract new clients with confidence.",
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

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-5">
              Our Approach to Testimonial Video
              <span className="text-[#25baff]"> Production</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Strategic Planning & Story Development",
              "Professional Video Production",
              "Post-Production Editing & Optimization",
              "Final Delivery & Multi-Platform Publishing",
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
           Get a free customer testimonial video consultation!
          </h2>

         <NavLink to="/contact">
           <button className="bg-[#25baff] text-[#020202] cursor-pointer px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
         </NavLink>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            6 Compelling Reasons to Choose Us for Your Video
            <span className="text-[#25baff]"> Testimonial Services</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Expert Creative Team",
                text: "Our skilled creative team collaborates closely with your business to transform authentic customer experiences into powerful, story-driven testimonial videos. Through strategic storytelling, thoughtful scripting, and high-quality production, we craft narratives that genuinely connect with your target audience. Every video is designed to reflect your brand’s voice, values, and goals, ensuring each testimonial not only tells a story but also strengthens your brand identity and impact.",
              },
              {
                head: "Authenticity",
                text: "We focus on showcasing the genuine and authentic side of your brand through real customer feedback and honest storytelling. Our experts capture natural emotions and unscripted experiences, ensuring every testimonial feels relatable and trustworthy. By highlighting true voices and real moments, we help your audience connect with your brand in a meaningful and credible way.",
              },
              {
                head: "Video Optimization",
                text: "Every testimonial video we produce is strategically optimized for maximum visibility and performance. Our expert team ensures your content is SEO-friendly, fast-loading, and seamlessly formatted for smooth playback across all devices and platforms. By combining technical optimization with smart distribution strategies, we enhance engagement, improve search rankings, and expand your brand’s reach through comprehensive video SEO practices.",
              },
              {
                head: "Strategic Marketing",
                text: "Our strategic marketing approach ensures your testimonial video reaches the right audience at the right time. We carefully plan and execute targeted campaigns across multiple social media platforms and digital channels to maximize visibility, boost engagement, and generate meaningful results that support your overall business growth.",
              },
              {
                head: "Exceptional Customer Support",
                text: "Our commitment to client satisfaction sets us apart at every stage of the testimonial video production process. We prioritize collaboration, transparent communication, and your feedback to ensure the project aligns perfectly with your vision. With dedicated support from start to finish, we provide a smooth, stress-free experience and deliver a final video that not only meets but exceeds your expectations.",
              },
              {
                head: "Results-Oriented Approach",
                text: "Our expert testimonial video team is focused on delivering measurable results that align with your business goals. Every video we create is strategically crafted to enhance brand visibility, increase audience engagement, and drive higher conversion rates. By combining creative storytelling with performance-driven strategies, we ensure your testimonial videos generate real impact and tangible growth for your brand.",
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

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
              Do’s and Don’ts for Effective Testimonial
              <span className="text-[#25baff]"> Video Production</span>
            </h2>
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Customer testimonial videos capture authentic feedback to boost
              marketing, visibility, and brand credibility. Follow these key
              do’s and don’ts to create an effective and impactful video.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Our Approach */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-6 text-center">
                Do’s
              </h3>

              <div className="grid gap-4">
                {[
                  "Keep it Short and Impactful",
                  "Highlight the Customer’s Journey",
                  "Ask Clear and Targeted Questions",
                  "Include Subtitles for Accessibility",
                  "Use Engaging Visuals and Natural Settings",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 group-hover:scale-110 transition" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Agencies */}
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-6 text-center">
                Don’ts
              </h3>

              <div className="grid gap-4">
                {[
                  "Avoid Letting Customers Go Off-Topic",
                  "Do Not Over-Script the Testimonial",
                  "Limit the Number of Participants",
                  "Avoid Exaggeration or False Claims",
                  "Always Obtain Proper Consent",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <FaTimesCircle className="text-red-500 mt-1 group-hover:scale-110 transition" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  </div>
                ))}
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

export default TestimonialVideo;
