import { useLayoutEffect, useRef } from "react";
import { FiFileText } from "react-icons/fi";
import { FiLink, FiUserCheck, FiShield } from "react-icons/fi";

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
        <div className="absolute inset-0 bg-[#020202]/80" />

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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Want 100 Percent Results? Then Our Search Engine <br />
            <span className="text-[#25baff]">Optimisation Gives You That!</span>
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
          <h3 className="text-3xl font-bold mb-6 text-[#020202]">
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
            Now that you are convinced about the reasons you should focus on
            SEO, you can now work on getting more leads for your website and we
            help you do this.
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

      {/* ================= WHY SEO SECTION ================= */}
      <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Why SEO?
            </p>

            <h2 className="gsap-item text-3xl md:text-4xl font-extrabold text-[#020202]">
              The following are some of the things that you can expect from our{" "}
              <span className="text-[#25baff]">SEO services</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 shadow-lg border border-transparent
        hover:border-[#25baff] hover:shadow-[#25baff]/30
 hover:-translate-y-3
        transition-all duration-500"
            >
              <div
                className="text-4xl mb-6 text-[#25baff]

 group-hover:scale-110 transition-transform"
              >
                <FiFileText />
              </div>

              <h3
                className="text-xl font-bold text-[#020202]
 mb-4"
              >
                On-page Optimisation
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We guide you with the usage of your keywords, tags and content
                so that you can use them to increase the visibility of your
                site.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="gsap-item group bg-white rounded-2xl p-8 shadow-lg border border-transparent
        hover:border-[#25baff]
hover:shadow-[#25baff]/30
open:border-[#25baff]
open:shadow-[#25baff]/40
 hover:-translate-y-3
        transition-all duration-500"
            >
              <div
                className="text-4xl mb-6 text-[#25baff]

 group-hover:scale-110 transition-transform"
              >
                <FiLink />
              </div>

              <h3
                className="text-xl font-bold text-[#020202]
 mb-4"
              >
                Off-page Optimisation
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Apart from the above, we also help you with blogs and articles
                which are very important for the promotion of your online
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEO SERVICE ACCORDION ================= */}
      <section ref={addSectionRef} className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* ================= CARD 1 ================= */}
          <details
            className="gsap-item group rounded-2xl border border-gray-200
      hover:border-[#25baff]
hover:shadow-[#25baff]/30
open:border-[#25baff]
open:shadow-[#25baff]/40
"
          >
            <summary
              className="cursor-pointer list-none flex items-center justify-between
        px-8 py-6 font-bold text-lg text-[#0b3253]"
            >
              <span className="flex items-center gap-3">
                <FiLink
                  className="text-[#25baff]

 text-xl"
                />
                Link Building Services
              </span>
              <span className="text-gray-400 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="px-8 pb-8 text-gray-700 leading-relaxed space-y-4">
              <p>
                You want your page to be one of the first on search engines,
                wouldn’t you? While this does not come easy, with us by your
                side, you won’t have to worry. We will provide all the SEO and
                digital marketing you need in order to achieve this.
              </p>

              <p>
                We have proven methods to provide you with back links of high
                quality, and we get this done without consuming a lot of your
                time. We choose all the best websites for you, with the
                knowledge that we have. This way, we are confident about giving
                you a good ranking.
              </p>

              <p>
                So, how do you get a high ranking within a few days? Confused?
                We help you improve your ranking and no, not by creating a lot
                of relevant links that spam people. We are more dedicated in our
                approach. We do not create instant results just to have a lot of
                worry and stress later.
              </p>

              <p>
                We know how keyword rankings can soon disappear from a search
                engine. And we do not tempt you with these kinds of false
                promises.
              </p>

              <p>Instead the following are what we do:</p>

              <ul className="list-disc ml-6 space-y-2">
                <li>We help with links that are sure to be bookmarked.</li>
                <li>We provide links that can be classified.</li>
                <li>We help with blog links that can be commented on.</li>
                <li>Our blogs are professional and based on the product.</li>
                <li>Our links are approved by directories.</li>
                <li>We also provide links to articles.</li>
                <li>We create interesting articles.</li>
                <li>We create a forum for posting.</li>
                <li>And we perform social media marketing.</li>
              </ul>

              <p>
                So, in this way, you can be assured of your site’s ranking on
                search engines. Our experts are professionals with lots of
                experience. They know how to target the right audience. This is
                why our dedication has spread overseas to clients in countries
                like the US, Australia and so on.
              </p>

              <p>Instead the following are what we do:</p>

              <ul className="list-disc ml-6 space-y-2">
                <li>We help with links that are sure to be bookmarked.</li>
                <li>We provide links that can be classified.</li>
                <li>We help with blog links that can be commented on.</li>
                <li>Our blogs are professional and based on the product.</li>
                <li>Our links are approved by directories.</li>
                <li>We also provide links to articles.</li>
                <li>We create interesting articles.</li>
                <li>We create a forum for posting.</li>
                <li>And we perform social media marketing.</li>
              </ul>
            </div>
          </details>

          {/* ================= CARD 2 ================= */}
          <details
            className="gsap-item group rounded-2xl border border-gray-200
     hover:border-[#25baff]
hover:shadow-[#25baff]/30
open:border-[#25baff]
open:shadow-[#25baff]/40

      transition-all duration-500"
          >
            <summary
              className="cursor-pointer list-none flex items-center justify-between
        px-8 py-6 font-bold text-lg text-[#0b3253]"
            >
              <span className="flex items-center gap-3">
                <FiUserCheck
                  className="text-[#25baff]

 text-xl"
                />
                Hire Full Time SEO Expert
              </span>
              <span className="text-gray-400 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="px-8 pb-8 text-gray-700 space-y-4">
              <p>
                Believe it, it’s very important. And by now, you don’t need to
                be advised on the importance of this. This is why we offer you a
                range of services that pertain to different clients. Apart from
                SEO professionals, we have content writers, PPC experts,
                professionals who are well versed with SMO and so many others
                who will all work in collaboration in order to ensure that all
                your goals are met.
              </p>

              <p>
                So, what is your current ranking? What are your keywords like?
                No matter what it is, we are sure to get everything improved for
                you. We will do our best to give you a place on the Google page.
                This way, your expectations will be met.
              </p>

              <p className="font-bold">Our Sources:</p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Our staff are skilled and highly reliable.</li>
                <li>We provide constant customer support.</li>
                <li>We keep your data secure and confidential.</li>
              </ul>
              <p>
                We manage your resources in a hassle free way.
                <br /> We are cost effective. <br /> Our team has all the
                strategy you need, so you have no reason to worry.
              </p>
            </div>
          </details>

          {/* ================= CARD 3 ================= */}
          <details
            className="gsap-item group rounded-2xl border border-gray-200
      hover:border-[#25baff]
hover:shadow-[#25baff]/30
open:border-[#25baff]
open:shadow-[#25baff]/40

      transition-all duration-500"
          >
            <summary
              className="cursor-pointer list-none flex items-center justify-between
        px-8 py-6 font-bold text-lg text-[#0b3253]"
            >
              <span className="flex items-center gap-3">
                <FiShield
                  className="text-[#25baff]

 text-xl"
                />
                Guaranteed Money Back SEO
              </span>
              <span className="text-gray-400 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>

            <div className="px-8 pb-8 text-gray-700 space-y-4">
              <p>
                We understand how everyone hates promises. And this is what we
                assure you to ensure that this won’t happen with us. Your money
                and your time will not be wasted. We work with strict timelines,
                respect your needs and ensure that you get what you are
                expecting from what you pay us. Rest assured, if otherwise, you
                can demand your money back. We will pay 50 percent of the fee
                back to you. This includes the fee of all the months.
              </p>

              <p className="font-bold">How Does this Work</p>
              <p className="font-bold">Let us see how this works:</p>

              <p>
                Our keywords are simple. However, they are designed to attract a
                large number of the targeted audience. In this way, you can get
                the visibility and traffic your website needs.
              </p>
              <p>
                And all this, you can get in a cost effective way. Our marketing
                strategies are designed to provide the right traffic from the
                right location. We follow strict guidelines when it comes to
                handing over your money back in case you are not happy with the
                services that we have offered you. So, do not forget to write to
                us in case of any queries.
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Seo;
