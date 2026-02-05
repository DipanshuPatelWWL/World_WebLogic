import { useLayoutEffect, useRef } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiEdit, FiSettings, FiTarget } from "react-icons/fi";

import AboutBg from "../../assets/about/about-who-we-are.jpg";
import About3 from "../../assets/about/about3.jpg";

gsap.registerPlugin(ScrollTrigger);

const WhyWwl = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      // WHO WE ARE
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

      // CARDS
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

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-white text-black-900">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">About Us</h1>
          <p className="mt-6 text-lg text-black-300">
            Home · Why World WebLogic
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#0d3253]">
            We are very careful in following the guidelines of search engines
            and white hat SEO practices.
          </h2>
          <p className="text-black-700 leading-relaxed mb-4">
            PPC can be a very effective way to go out and market your business.
            A kind of internet marketing, this can be a form of campaign that
            mainly depends on the right research and keywords.
          </p>
          <p className="text-black-700 leading-relaxed">
            So, if you don’t know where to start, we have some of the most
            dedicated professionals with years of experience to help you out in
            this area. We employ all the right strategies that are needed when
            it comes to finding the most effective keywords.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={About3}
            alt="Who We Are"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0d3253] mb-14">
            Why Choose Us for This
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "We are dedicated to making your website visible.",
              "Our methods are cost effective and reasonable.",
              "We run your campaign in a professional way.",
              "Our experts are always available to help you.",
              "We provide regular reports so you know where you stand.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-center gap-4
                     transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl hover:border-orange-600"
              >
                <span className="text-orange-500 text-2xl font-bold">»</span>
                <p className="text-black text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REASONS ================= */}
      <section className="bg-white py-24">
        <h2 className="ml-16 mr-2 text-4xl font-bold  text-[#0d3253] mb-16">
          We provide a thorough analysis of keywords with some of the most
          modern tools. Our experts help you bid the most effective keywords.
        </h2>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiEdit,
                head: "Bidding the Right Keywords",
                text: "Keywords are mainly effective when they play a role in increasing your ROI. So, how do you find keywords like this? Leave it to our experts to do this for you. We know how to find and bid the words that tend to get targeted among audiences the most.",
              },
              {
                icon: FiSettings,
                head: "Titles and Descriptions",
                text: "They say content is king, and we help you with this most important part of your website so you can generate a good amount of traffic. A title can be a small part of your content but can play a very important role, and so does a description. This is why we give special importance to your title and have people assigned to work on this part of your content.",
              },
              {
                icon: FiTarget,
                head: "ROI Rating",
                text: "Knowing your ROI rating is very important, as this gives you a good picture of the areas in which you need to improve. This is why we give you a good report of all campaigns and share them with you on a regular basis with the use of documents so you can mark and make clear notes.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-orange-50 border border-orange-200 rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-orange-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <Icon className="text-4xl text-orange-400 mb-6 group-hover:text-white transition-colors duration-300" />
                  <h2 className="font-extrabold text-xl mb-2">{item.head}</h2>
                  <p className="text-black-700 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ORGANIC FOCUS ================= */}
      <section className="relative bg-[#0b1c2d] py-28 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-start gap-6 mb-8">
              <span className="w-1 h-24 bg-cyan-400 rounded-full" />
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  We focus on organic content and manual submission.
                </h2>
              </div>
            </div>

            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Our branding solutions are committed to being holistic and result
              driven.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { value: "50+", label: "Team Members" },
              { value: "100+", label: "Satisfied Clients" },
              { value: "100+", label: "Projects Delivered" },
              { value: "100+", label: "Average Customers" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10
                     backdrop-blur-xl border border-cyan-400/20
                     rounded-3xl p-10 text-center
                     transition-all duration-300
                     hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
              >
                <h3 className="text-4xl font-extrabold text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-cyan-200 text-sm tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-6">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="flex gap-6">
              <span className="w-1 bg-orange-500 rounded-full" />
              <h2 className="text-4xl md:text-4xl font-extrabold text-[#0d3253] leading-tight">
                It’s always a joy to hear that the work we do, has positively
                reviews.
              </h2>
            </div>

            <p className="text-black-600 text-lg leading-relaxed max-w-xl mt-5">
              We follow the best practices when it comes to on page and off page
              search engine optimization. So we have many good review of works.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "If you’re thinking about using Web Designing Lab Services, I highly recommend it. Their quotes are very reasonable. Their response time and customer service is excellent. I’ve used them on several projects and I’m very pleased. I will use them again. Thank You Guys!",
                name: "Kashvi Kahal",
                role: "Designer",
              },
              {
                text: "WDL did our complete online and offline branding from websites to brochures to visiting cards. I have visibly seen a considerable change in my sales through their online promotion solutions. We blindly trust their discretion and branding solutions. Keep it up!",
                name: "Yumlembam Sanajaoba Meitei",
                role: "CEO",
              },
              {
                text: "The team at worldweblogic performed on budget and on time. They are always available and always have the perfect web design solutions! I have recommended Worldweblogic number of times to colleagues.",
                name: "Paul Casper",
                role: "Manager",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                     transition-all duration-300
                     hover:scale-105 hover:border-orange-500 hover:shadow-2xl"
              >
                {/* Quote */}
                <div
                  className="flex justify-center items-center
             text-5xl mb-6 text-gray-600
             group-hover:text-orange-500 transition-colors duration-300"
                >
                  <RiDoubleQuotesL />
                </div>

                {/* Text */}
                <p className="text-black-600 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>

                {/* Name */}
                <h4 className="font-bold text-lg text-black">{item.name}</h4>
                <p className="text-black text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWwl;
