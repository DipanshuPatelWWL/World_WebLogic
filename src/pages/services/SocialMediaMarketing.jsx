import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/SMM-banner.jpg";
import WebDesign1 from "../../assets/services/SMM.jpg";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaMarketing = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];
  const [activeFaq, setActiveFaq] = useState(null);
  const faqRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      // ALL SECTIONS
      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: 60,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question:
        "What social media marketing services does World Web Logic offer?",
      answer:
        "We offer a wide range of social media marketing services, including social media strategy development, content creation and curation, social media management, paid advertising campaigns, influencer marketing, and performance analytics. We tailor our services to meet the unique needs and goals of your business.",
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer:
        "We specialize in marketing on all major social media platforms, including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Our team stays updated with the latest trends and best practices on each platform to ensure effective and engaging marketing campaigns.",
    },
    {
      question:
        "How do you develop a social media marketing strategy for a business?",
      answer:
        "Our strategy development process starts with understanding your business goals, target audience, and current social media presence. We conduct a competitive analysis, identify key performance indicators (KPIs), and create a comprehensive strategy that includes content plans, posting schedules, and advertising tactics to achieve your objectives.",
    },
    {
      question: "Can you manage our social media accounts on our behalf?",
      answer:
        "Yes, we offer full social media management services. This includes creating and scheduling posts, engaging with your audience, responding to comments and messages, monitoring social media trends, and providing regular performance reports. Our goal is to ensure your social media presence is active, engaging, and aligned with your brand.",
    },
    {
      question:
        "How do you measure the success of a social media marketing campaign?",
      answer:
        "We measure the success of our social media marketing campaigns using various metrics and KPIs, such as engagement rates, follower growth, website traffic, conversion rates, and return on investment (ROI). We provide detailed analytics and reports to help you understand the impact of our efforts and make data-driven decisions for future campaigns.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-gray-900">
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
            Home - Social Media Marketing
          </p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Social Media
            <span className="text-[#25baff]"> Marketing</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The first impression is the last impression, and in the world of
            online business, the design of your website is what makes the first
            impression. Hence the reason that this should be a good one. So, how
            appealing and responsive is your website?
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={WebDesign1}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item ">
          <p className="text-gray-700 mb-6">
            Word of mouth travels faster today by way of stories and statuses,
            so how well does your business do when it comes to securing a place
            in these activities? It is for this reason that our SMO experts are
            there for you. We know exactly what you need to enhance your brand
            image and increase its presence on sites like these.
          </p>
          <p className="text-gray-700 mb-6">
            We have all the expertise needed to help you with what works and
            what doesn’t in the world of social media. This can go a long way in
            increasing the visibility of your business. And it is not just this.
            You also enjoy a better engagement with your customers, and this in
            turn will help you create a positive brand image. You can get all
            the feedback that you can work on to please your clients better.
          </p>
          <p className="text-gray-700">
            Apart from this, we also detect the latest trends in social media
            and help you go with the flow. In this way, you are not lagging
            behind. You can enjoy just the kind of exposure you need on sites
            like Facebook, Twitter and YouTube.
          </p>
        </div>

        <p className="text-gray-700 -mt-18">
          Yes, we are committed to providing you with success as well as
          satisfaction when it comes to making your presence in the world of
          digital media.
        </p>

        <p className="text-gray-700">
          And no, we do not just create an automated strategy for you. We first
          work towards understanding your business and it needs so that we can
          come up with a custom approach that would work best for you. We know
          how social media can play a crucial role when it comes to the
          promotion of your business and so work closely in this area to ensure
          that this is all done to perfection. And we have all the latest tools
          and techniques that are required to help you out in this process.
        </p>
      </section>

      {/* =================  CTA ================= */}
      <section
        ref={addSectionRef}
        className="relative overflow-hidden py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
        {/* Animated Gradient Glow */}
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
              className="absolute w-1.5 h-1.5 bg-[#25baff] rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-3xl font-extrabold leading-tight max-w-4xl">
            If you want an effective website, approach us and you won’t be
            disappointed.
          </h2>

          {/* BUTTON */}
          <button
            className="
    bg-[#25baff] text-[#020202]
hover:bg-[#a8d97c]

    px-6 py-3
    text-sm md:text-base
    font-semibold
    rounded-full
    shadow-md
    hover: cursor-pointer
    hover:shadow-lg
    transition-all duration-300
    whitespace-nowrap"
          >
            Contact Now
          </button>
        </div>
      </section>

      <section ref={addSectionRef} className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto">
         <h2 className="gsap-item text-4xl font-extrabold text-[#25baff] mb-12">

            FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="gsap-item border border-gray-200 rounded-xl
          hover:border-[#25baff]
 transition-colors"
              >
                {/* Question */}
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.35,
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
                          duration: 0.35,
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
                  className="w-full flex items-center justify-between
            px-6 py-5 text-left font-semibold text-[#0b3253]"
                >
                  <span
                    className={activeFaq === index ? "text-[#25baff]" : ""}

                  >
                    {faq.question}
                  </span>

                  {activeFaq === index ? (
                   <FiMinus className="text-[#25baff] text-xl" />

                  ) : (
                    <FiPlus className="text-gray-600 text-xl" />
                  )}
                </button>

                {/* Answer */}
                <div className="faq-content px-6 overflow-hidden h-0 opacity-0">
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

export default SocialMediaMarketing;
