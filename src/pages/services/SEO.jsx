import { useLayoutEffect, useRef } from "react";
import { useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/seo/banner.jpg";
import Seo1 from "../../assets/seo/SEO.webp";

gsap.registerPlugin(ScrollTrigger);

const Seo = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

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
        <div className="absolute inset-0 bg-black/70" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-6 text-lg text-gray-300">
            Home - Search Engine Optimization
          </p>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3253] mb-6">
            Want 100 Percent Results? Then Our Search Engine <br />
            <span className="text-orange-500">
              Optimisation Gives You That!
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            You may design a colorful website but how helpful is it when it
            comes to making customers click on it? A result driven SEO service
            helps you with this, and we provide you with all the services that
            you need in this direction.
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Seo1}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item ">
          <p className="text-gray-700 mb-6">
            We know how exactly to promote your brand so that you have a place
            on the Google search page with our advanced internet marketing
            strategies and latest techniques.Our experts know just what you need
            to make your business look professional and draw customers to your
            website.
          </p>
          <p className="text-gray-700 mb-6">
            Be it in terms of SEO services, promotion of your brand or any area
            that you need to work on, we are there for you. Yes, we know how
            important components like a website, the right keywords and SEO
            services are when it comes to the growth of your business. We will
            build links, submit articles, provide blogs, SEO content and so much
            more that is crucial to the success of your online business.
          </p>
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            Any doubts? Let’s clear them. Read on for the answers:
          </h3>
          <p className="text-gray-700 mb-6 ml-5">
            <li>The more effective the SEO, the more visitors.</li>
            <li>SEO plays an important role in building clients.</li>
            <li>People become aware of your brand.</li>
            <li>You get to increase your sales and thus your profits.</li>
            <li>Finally, SEO is one of the best ways to promote your site.</li>
          </p>
        </div>
      </section>

      {/* =================  CTA ================= */}
      <section
        ref={addSectionRef}
        className="relative overflow-hidden py-24 px-6"
        style={{ backgroundColor: "#0b3253" }}
      >
        {/* Animated Gradient Glow */}
        <div
          className="absolute inset-0 
    bg-[radial-gradient(circle_at_20%_20%,rgba(255,165,0,0.25),transparent_45%),
        radial-gradient(circle_at_80%_80%,rgba(255,140,0,0.2),transparent_45%)]
    animate-pulseSlow"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-40 animate-float"
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
            Now that you are convinced about the reasons you should focus on
            SEO, you can now work on getting more leads for your website and we
            help you do this.
          </h2>

          {/* BUTTON */}
          <button
            className="
    bg-orange-500 text-white
    px-6 py-3
    text-sm md:text-base
    font-semibold
    rounded-full
    shadow-md
    hover:bg-orange-600
    hover: cursor-pointer
    hover:shadow-lg
    transition-all duration-300
    whitespace-nowrap"
          >
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Seo;
