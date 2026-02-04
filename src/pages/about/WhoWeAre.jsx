import React, { useLayoutEffect, useRef } from "react";
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
          scale: 0.9,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        });
      });

      // CTA
      gsap.from(ctaRef.current.children, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 80,
        stagger: 0.3,
        duration: 1,
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
          <p className="mt-6 text-lg text-black-300">Home - Who We Are</p>
        </div>
      </section>

      {/* ================= WHO WE ARE (WHITE BG) ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center ml-12"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#0d3253]">Who We Are</h2>
          <p className="text-black leading-relaxed">
            World WebLogic is an online marketing solutions company that
            provides all the necessary services that an online company needs
            like website design and development, social media marketing, SEO,
            SEM, PPC, mobile application development and finally, the most
            important, online reputation management services.
          </p>
          <p className="text-black leading-relaxed">
            We have a team that has all the knowledge, skills and expertise that
            is needed for these kinds of services, so all you have to do is
            trust us and relax. It is for this reason that we have been favoured
            by a large number of clients, not just in India but in countries
            like the US and Australia too.
          </p>
        </div>
        <div className=" rounded-2xl group">
          <img
            src={About1}
            alt="Who We Are"
            className="
      rounded-2xl
      shadow-2xl
      transition-transform
      duration-500
      ease-out
      group-hover:scale-110
    "
          />
        </div>
      </section>

      {/* ================= REASONS SECTION ================= */}
      <section className="bg-white py-24">
        <h2 className="text-center text-4xl font-bold text-slate-900 mb-16">
          These are the Reasons Why You Should Choose Us
        </h2>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiEdit,
                text: "We strictly adhere to the guidelines of SEO and white hat SEO practices.",
              },
              {
                icon: FiSettings,
                text: "Our branding solutions are holistic and result driven.",
              },
              {
                icon: FiTarget,
                text: "Our on page and off page search engine optimization is followed in the best way.",
              },
              {
                icon: FiZap,
                text: "We focus on manual submission and organic content.",
              },
              {
                icon: FiShield,
                text: "Our packages are comprehensive and reasonable.",
              },
              {
                icon: FiLayers,
                text: "Our websites and all other services are creative, which is very important today.",
              },
              {
                icon: FiTrendingUp,
                text: "Our services are goal oriented.",
              },
              {
                icon: FiMonitor,
                text: "We help you become as good as your competition sites.",
              },
              {
                icon: FiSmile,
                text: "We provide your business with all the online exposure that it needs.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="
              group
              bg-orange-50
              border border-orange-200
              rounded-2xl
              p-10
              flex
              flex-col
              items-center
              text-center
              transition-all
              duration-300
              hover:bg-orange-400
              hover:-translate-y-3
              hover:shadow-2xl
            "
                >
                  <Icon className="text-4xl text-orange-400 mb-6 transition-colors duration-300 group-hover:text-white" />

                  <p className="text-slate-700 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA (WHITE BG) ================= */}
      <section
        ref={ctaRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h3 className="text-yellow-600 font-bold mb-4 text-2xl">
            Like What We Offer
          </h3>
          <h2 className="text-4xl font-bold mb-6">
            Looking to improve your online business? Approach us.
          </h2>
          <p className="text-black-700 ">
            We are a team of tried, tested and trusted experts who have been
            providing big as well as small companies all the branding solutions
            that they need in order to win more customers.
          </p>
          <p className="text-black-700">
            Our squad of experts follows a unique approach that is oriented
            towards the goal of helping you get all the traffic that you need to
            empower your business. We use all the latest tools and techniques
            for this.
          </p>
          <p className="text-black-700">
            Yes, we work under strict timelines so that we don’t cause you any
            inconvenience. In this way we work towards building good long term
            relationships with our clients as well as our solution partners.
          </p>
          <p className="text-black-700 mb-8">
            All you have to do is stay in touch with us and we will let your
            business reach heights.
          </p>
          <button className="px-8 py-4 rounded-full bg-[#ff6900] text-black font-semibold hover:scale-105 transition">
            Contact Us
          </button>
        </div>

        <div className=" rounded-2xl group">
          <img
            src={About2}
            alt="CTA"
            className="
      rounded-2xl
      shadow-2xl
      transition-transform
      duration-500
      ease-out
      group-hover:scale-110
    "
          />
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
