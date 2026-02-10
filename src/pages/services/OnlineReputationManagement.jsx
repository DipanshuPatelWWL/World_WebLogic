import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus, FiSmartphone, FiTablet } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/ORM-Banner.jpg";
import WebDesign1 from "../../assets/services/orm-img.jpg";

gsap.registerPlugin(ScrollTrigger);

const OnlineReputationManagement = () => {
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
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 60, scale: 0.96 },
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
        "What is online reputation management and why is it important?",
      answer:
        "Online reputation management (ORM) involves monitoring, addressing, and influencing the online perception of your brand. It is important because a positive online reputation builds trust with potential customers, improves your brand’s credibility, and can significantly impact your business’s success.",
    },
    {
      question: "What services do you offer in your online reputation management package?",
      answer:
        "Our ORM services include monitoring online mentions and reviews, responding to customer feedback, managing social media profiles, creating and promoting positive content, suppressing negative content, and providing detailed reputation analysis and reports.",
    },
    {
      question: "How do you monitor my online reputation?",
      answer:
        "We use advanced tools and techniques to continuously monitor your brand’s online presence across various platforms, including social media, review sites, forums, and news articles. We track mentions, reviews, and discussions to stay informed about what people are saying about your business.",
    },
    {
      question: "Can you remove negative reviews or content about my business?",
      answer:
        "While we cannot directly remove negative reviews or content, we can work to suppress negative search results and promote positive content to improve your overall online image. We also help you respond to negative feedback professionally and effectively to mitigate any potential damage.",
    },
    {
      question: "How long does it take to see results from online reputation management?",
      answer:
        "The timeline for seeing results can vary based on the current state of your online reputation and the specific strategies implemented. Generally, you can expect to see noticeable improvements within a few months, but ongoing efforts are required to maintain and enhance your reputation over time.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-[#020202]">
      {/* HERO */}
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
            Home - Online Reputation Management
          </p>
        </div>
      </section>

      {/* TITLE */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            How Well Do You Manage Your
            <span className="text-[#25baff]"> Online Reputation</span>
          </h2>
          <p className="text-gray-600 text-lg">
            If the answer is not great, then hire our services today. This is an
            area that a lot of companies out there tend to neglect, and the sad
            part is that it is one of the most important. It is very important
            that you see the big picture when it comes to your digital
            experience. So, here we are with all the knowledge and skill needed
            to help your company grow here.
          </p>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item rounded-2xl overflow-hidden group">
          <img
            src={WebDesign1}
            alt="Mobile App"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="gsap-item">
          <p className="text-gray-700 mb-6">
            Did you know that about 80 percent of customers rely on digital
            media when it comes to finding a product or service? So, what do
            customers find about your business when they come online? We have a
            team that is dedicated to monitoring this so that your presence
            online has a positive impact on all customers who search for your
            business.
          </p>
          <p className="text-gray-700 mb-6">
            We help you build a positive image of your brand with all the
            strategies that we have. In this way, you can maintain a good
            business image. Don’t you want to be in the spotlight? We help you
            with this through our reputation marketing services. Our services
            are directed towards helping you win more opportunities with your
            clients.
          </p>
          <p className="text-gray-700">
            Your core business activities are something we will get to know in
            depth. We have a thorough look at how well your business is liked
            online. This way, you won’t miss any information when it comes to
            the kind of impact your business is making. This way, we manage your
            reputation so you have plenty of clients.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#020202] mb-14">
            How We Do This
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Well, we analyze your firm and take a look at all its content on the internet to determine the kind of impact it is creating on its audience. Then, we give you feedback about what you need to do, whether it’s easy or complex and so on.",
              "This way, you have the strategy needed, negative influences are removed, and bad reviews won’t be found on your site. Negative aspects of your content will be worked on again and made positive. This way, your visitors are happy.",
              "We know how important your online presence is to you, and we will take the utmost care to ensure the best for you. You can be assured of effective solutions with us.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex gap-4
                transition-all hover:-translate-y-2 hover:shadow-xl hover:border-[#25baff]"
              >
                <span className="text-[#a8d97c] text-2xl font-bold">»</span>
                <p className="text-[#020202] text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA */}
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
            Protect and enhance your online presence with our expert Online
            Reputation Management services—start building a stronger, more
            positive image today
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* FAQ */}
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
                className="gsap-item border border-gray-200 rounded-xl hover:border-[#25baff]"
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
                        });
                      }

                      gsap.to(content, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.4,
                      });
                      setActiveFaq(index);
                    }
                  }}
                  className="w-full flex justify-between px-6 py-5 text-left font-semibold text-[#020202]"
                >
                  <span className={activeFaq === index ? "text-[#25baff]" : ""}>
                    {faq.question}
                  </span>
                  {activeFaq === index ? (
                    <FiMinus className="text-[#25baff]" />
                  ) : (
                    <FiPlus className="text-gray-500" />
                  )}
                </button>

                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
                  <p className="pb-6 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineReputationManagement;
