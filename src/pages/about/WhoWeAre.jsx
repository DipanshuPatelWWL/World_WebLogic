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
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.25,
        ease: "power4.out",
      });

      // WHO SECTION
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
          y: 40,
          duration: 0.8,
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
        duration: 1,
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
        <div className="absolute inset-0 bg-[#020202]/80" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">About Us</h1>
          <p className="mt-6 text-lg text-gray-300">
            Discover who we are & what drives us
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Our Identity
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Who
            <span className="text-[#25baff]"> We Are</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            We are a team of passionate digital strategists, developers, and
            marketers committed to helping businesses grow in the online world.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our approach combines innovation, data-driven insights, and modern
            technology to create measurable growth and long-term success.
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

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Why Work With Us?
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Reasons to
            <span className="text-[#25baff]"> Choose Us</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              { icon: FiEdit, text: "Strategic and creative digital execution." },
              { icon: FiSettings, text: "Customized growth-focused solutions." },
              { icon: FiTarget, text: "Goal-driven SEO & marketing plans." },
              { icon: FiZap, text: "Fast implementation with agile methods." },
              { icon: FiShield, text: "Transparent & ethical practices." },
              { icon: FiLayers, text: "Modern, scalable web systems." },
              { icon: FiTrendingUp, text: "Measurable ROI-focused campaigns." },
              { icon: FiMonitor, text: "Advanced analytics & tracking." },
              { icon: FiSmile, text: "Long-term partnership & support." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white rounded-2xl p-10
                  shadow-lg shadow-[#25baff]/10
                  border border-gray-200
                  transition-all duration-500
                  hover:bg-[#25baff]
                  hover:-translate-y-4
                  hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6
                    group-hover:text-white transition-colors duration-300"
                  />
                  <p className="text-gray-700 text-sm leading-relaxed
                  group-hover:text-white transition-colors duration-300">
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
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Let’s Work Together
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Ready to
            <span className="text-[#25baff]"> Grow Your Business?</span>
          </h2>

          <p className="text-gray-700 mb-6">
            We combine strategy, creativity, and technology to deliver real
            results that move your business forward.
          </p>

          <Link to="/contact">
            <button
              className="px-8 py-4 rounded-full bg-[#25baff] text-white
              font-semibold shadow-lg transition-all duration-300
              hover:bg-[#a8d97c]  hover:scale-105 hover:shadow-2xl
              active:scale-95"
            >
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
