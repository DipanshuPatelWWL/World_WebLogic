import { useLayoutEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiSmartphone, FiTablet } from "react-icons/fi";
import { FaAndroid } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/services/mobile-app-banner.jpg";
import WebDesign1 from "../../assets/services/mobile-app-dev.jpg";

gsap.registerPlugin(ScrollTrigger);

const AppDevelopment = () => {
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
        "What mobile app development services does World Web Logic offer?",
      answer:
        "We offer comprehensive mobile app development services for iOS (iPhone and iPad) and Android platforms. Our services include custom app development, UI/UX design, app testing, deployment, and ongoing maintenance and support.",
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer:
        "Our approach involves understanding your business needs and goals, conducting thorough market research, and creating a detailed project plan. We then design and develop the app, perform rigorous testing, and ensure a smooth deployment. We follow an agile development process to ensure flexibility and timely delivery.",
    },
    {
      question:
        "Do you provide support for both native and cross-platform app development?",
      answer:
        "Yes, we offer both native and cross-platform app development. For native development, we use Swift and Objective-C for iOS apps, and Java and Kotlin for Android apps. For cross-platform development, we use frameworks like React Native and Flutter to create apps that work seamlessly on both iOS and Android devices.",
    },
    {
      question: "Can you help with app store submission and optimization?",
      answer:
        "Absolutely! We assist with the entire app store submission process, including preparing the necessary documentation, creating app store listings, and ensuring compliance with Apple’s App Store and Google Play Store guidelines. We also offer app store optimization (ASO) services to enhance your app’s visibility and increase downloads.",
    },
    {
      question:
        "Do you offer ongoing maintenance and updates for the apps you develop?",
      answer:
        "Yes, we provide ongoing maintenance and updates to ensure your app remains up-to-date with the latest OS versions and technologies. Our maintenance services include bug fixes, performance improvements, feature enhancements, and regular updates to keep your app running smoothly and securely.",
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
            Home - Mobile Application Development
          </p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Mobile Application
            <span className="text-[#25baff]"> Development</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            How Strategic Are You With Your Mobile Business?
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
            You don’t need anyone to tell you how important a mobile app is in
            today/s world of online business. And all you have to do here is get
            in touch with our programmers to get a creative mobile app that
            makes a difference to your business.
          </p>
          <p className="text-gray-700 mb-6">
            We have all the knowledge, skill and talent needed to meet your
            business standards so you don’t have to worry about your mobile app
            looking plain while compared to that of your competitors.
          </p>
          <p className="text-gray-700">
            You can be sure of a tech savvy development be it with a mobile or
            tablet. So, whether you want an app that is easy to navigate or
            performance intense, we will help you and meet all your challenges
            too.
          </p>
          <p className="text-gray-700">
            So, if you have been considering a mobile app for your business, you
            know where your search ends.
          </p>
        </div>

        <p className="text-gray-700">
          Be it web development service or PHP development service that you
          want, we are here to help you. We provide all the solutions that you
          need not just for a jaw dropping website but everything else that you
          would want in a good website. Approach us for a more responsive
          website and see how your customers are going to increase by the day.
          We will keep your website trendy and use all the right shades and
          colors to make the right impression.
        </p>
        <p className="text-gray-700 -mt-18">
          This way, your website won’t just be different from that of your
          competitors but will perform better too. This way, you can create a
          striking online presence to grow your business.
        </p>
      </section>

      {/* ================= list ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#020202] mb-14">
            Why Choose World Weblogic
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Our team has all the experience to know what you want.",
              "We develop apps with high quality.",
              "Our services are cost effective and our work is quick.",
              "We will assure of a robust app.",
              "We have a deep knowledge of mobile technologies.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-center gap-4
                     transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl hover:border-[#25baff]"
              >
                <span className="text-[#a8d97c] text-2xl font-bold">»</span>

                <p className="text-black text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================  CTA ================= */}

      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-[#020202] mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 shadow-md
        hover:border-[#25baff] hover:shadow-[#25baff]/30

        hover:-translate-y-2 transition-all duration-300"
            >
              <FiSmartphone className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                iPhone App
              </h3>

              <p className="text-gray-600 leading-relaxed">
                You wouldn’t want all those iPhone users to think less of your
                app, would you? Having created iPhone apps for so many
                industries, we promise to do our best for you. Our approach is
                market centric, so whether it is a gaming, shopping, education
                or any other online business that you have, we will handle it
                for you.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 shadow-md
        hover:border-[#25baff]
 hover:shadow-orange-200/50
        hover:-translate-y-2 transition-all duration-300"
            >
              <FiTablet className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                iPad App
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Customized app development services can make a big difference by
                way of pleasing all those Apple users who like to check out
                things on a big screen. We understand this really well and know
                how to please them too. Again, be it educational services,
                retail or even entertainment, we know how it goes and what is
                needed in all these cases.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white rounded-2xl p-8 text-center
        border border-gray-200 shadow-md
        hover:border-[#25baff]
 hover:shadow-orange-200/50
        hover:-translate-y-2 transition-all duration-300"
            >
              <FaAndroid className="text-5xl text-[#25baff] mx-auto mb-6" />

              <h3 className="text-xl font-bold text-[#020202] mb-6">
                Android App
              </h3>

              <p className="text-gray-600 leading-relaxed">
                And then there is that majority out there that we cannot miss.
                You can have our trust here too. We know exactly what to give
                them. With our advanced technologies, we will ensure that we
                create a lasting impression for you on these users. Our
                expertise includes all types of apps here, be it for a
                restaurant, social media site or anything else.
              </p>
            </div>
          </div>
        </div>
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
            px-6 py-5 text-left font-semibold  text-[#020202]
"
                >
                  <span className={activeFaq === index ? "text-[#25baff]" : ""}>
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

export default AppDevelopment;
