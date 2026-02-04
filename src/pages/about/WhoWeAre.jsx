import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiEdit,
  FiSettings,
  FiTarget,
  FiZap,
  FiShield,
  FiLayers,
  FiTrendingUp,
  FiMonitor,
  FiSmile,
} from "react-icons/fi";

import AboutBg from "../../assets/about/about-who-we-are.jpg";
import About1 from "../../assets/about/about1.jpg";
import About2 from "../../assets/about/about2.jpg";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

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

      // CTA
      gsap.from(ctaRef.current.children, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.25,
        duration: 1.1,
        ease: "power4.out",
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-white text-gray-900">
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
          <p className="mt-6 text-lg text-gray-300">Home · Who We Are</p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#0d3253]">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            World WebLogic is an online marketing solutions company that provides
            website design and development, social media marketing, SEO, SEM,
            PPC, mobile application development, and online reputation
            management services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our expert team is trusted by clients not only in India but also in
            countries like the US and Australia. You can rely on us to build,
            scale, and protect your digital presence.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={About1}
            alt="Who We Are"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= REASONS ================= */}
      <section className="bg-white py-24">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
          Why You Should Choose Us
        </h2>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiEdit, text: "Strict adherence to white-hat SEO practices." },
              { icon: FiSettings, text: "Result-driven branding solutions." },
              { icon: FiTarget, text: "Best on-page and off-page SEO strategies." },
              { icon: FiZap, text: "Organic growth with manual submissions." },
              { icon: FiShield, text: "Affordable and transparent pricing." },
              { icon: FiLayers, text: "Creative and modern web solutions." },
              { icon: FiTrendingUp, text: "Goal-oriented digital strategies." },
              { icon: FiMonitor, text: "Competitive industry-level execution." },
              { icon: FiSmile, text: "Maximum online exposure for your brand." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-orange-50 border border-orange-200 rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-orange-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <Icon className="text-4xl text-orange-400 mb-6 group-hover:text-white transition-colors duration-300" />
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        ref={ctaRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h3 className="text-orange-500 font-bold mb-4 text-2xl">
            Like What We Offer?
          </h3>
          <h2 className="text-4xl font-bold mb-6">
            Looking to grow your online business?
          </h2>
          <p className="text-gray-700 mb-6">
            Our team of experts uses modern tools, smart strategies, and strict
            timelines to help your business reach new heights.
          </p>

          <Link to="/contact">
            <button className="px-8 py-4 rounded-full bg-[#ff6900] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={About2}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
