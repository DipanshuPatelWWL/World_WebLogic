import { useLayoutEffect, useRef } from "react";
import { useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/market/Cannabis-SEO-Services.jpg";
import Market1 from "../../assets/market/CBD-01.jpg";
import Market2 from "../../assets/market/CBD-02.jpg";
import Market3 from "../../assets/market/CBD-03.jpg";
import Market4 from "../../assets/market/CBD-04.jpg";
import Market5 from "../../assets/market/CBD-05.jpg";
import Market6 from "../../assets/market/CBD-06.jpg";

gsap.registerPlugin(ScrollTrigger);

const CannabisSeoServices = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const [activeFaq, setActiveFaq] = useState(null);

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

        gsap.from(items, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          opacity: 0,
          y: 60,
          scale: 0.96,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: "What are Cannabis SEO Services?",
      a: "Cannabis SEO services focus on optimizing your cannabis-related website to boost its search engine rankings. By targeting relevant keywords, crafting high-quality content, and building authoritative backlinks, these services drive targeted traffic to your website, enhance your brand visibility, and strengthen your business’s online presence and sales.",
    },
    {
      q: "Can Cannabis SEO Services Assist with Social Media Optimization and Marketing for Cannabis Brands?",
      a: "Yes, World Web Logic’s Cannabis SEO services include social media optimization and marketing for cannabis brands. We create tailored social media strategies, produce engaging content, manage social accounts, and utilize platforms to promote cannabis products while adhering to applicable regulations and standards.",
    },
    {
      q: "How Can SEO Help the CBD Business?",
      a: "SEO can greatly benefit CBD businesses by increasing their online visibility and attracting potential customers. In a highly regulated and competitive market, CBD SEO helps businesses reach their target audience, build trust, and establish authority. By optimizing websites with relevant keywords, creating educational content, and improving technical SEO, cannabis businesses can achieve higher search rankings, attract more organic traffic, enhance brand awareness, and ultimately drive sales growth.",
    },
    {
      q: "Is There a Difference in SEO Strategies Between Medical Cannabis and Recreational Cannabis Businesses?",
      a: "Yes, SEO strategies may differ between medical and recreational cannabis businesses. Medical cannabis often focuses on educational content, patient testimonials, and highlighting health benefits. In contrast, recreational cannabis tends to emphasize lifestyle, entertainment, and branding to attract a wider audience.",
    },
    {
      q: "What Strategies Do Cannabis SEO Services Use to Improve Website Visibility and Organic Traffic?",
      a: "Cannabis SEO services employ strategies such as keyword research to pinpoint relevant terms, optimize on-page content, create valuable and shareable material, acquire quality backlinks, enhance site structure, boost website speed, and use local SEO tactics to improve visibility and increase organic traffic for cannabis businesses.",
    },
    {
      q: "Should I Invest in SEO or Paid Advertising for CBD Marketing?",
      a: "Both SEO and paid advertising offer distinct benefits. SEO is a long-term strategy for boosting organic traffic, while paid advertising can deliver quicker results. A balanced combination of both approaches often provides the most effective outcomes, depending on your objectives and budget.",
    },
    {
      q: "Are There Any Legal Considerations or Restrictions for Implementing SEO for Cannabis Businesses?",
      a: "Yes, there are legal considerations when implementing SEO for cannabis businesses. The legality of cannabis varies by region, and marketing cannabis products may involve strict regulations. World Web Logic ensures that our SEO strategies align with applicable laws and advertising guidelines to maintain compliance and avoid any legal complications.",
    },
    {
      q: "How Much Do CBD SEO Services Cost?",
      a: "World Web Logic’s Cannabis SEO services focus on mobile optimization by ensuring responsive design, fast loading speeds, and user-friendly mobile navigation. These efforts aim to improve the user experience on mobile devices, positively affecting SEO rankings and accommodating the growing number of mobile users.",
    },
    {
      q: "How Do Cannabis SEO Services Approach Mobile Optimization for Cannabis Websites?",
      a: "World Web Logic’s Cannabis SEO services focus on mobile optimization by ensuring responsive design, fast loading speeds, and user-friendly mobile navigation. These efforts aim to improve the user experience on mobile devices, positively affecting SEO rankings and accommodating the growing number of mobile users.",
    },
    {
      q: "Are There Any Specific Challenges or Obstacles Faced When Performing SEO for Cannabis Businesses?",
      a: "Yes, cannabis SEO faces unique challenges such as restrictive advertising rules, limited traditional marketing channels, and industry stigma. Additionally, search engines may closely scrutinize cannabis-related websites, requiring a strategic and compliant approach to navigate these hurdles effectively.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section
       className="relative min-h-[45vh] md:h-[58vh] flex items-center justify-center px-4"
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">

            Cannabis Seo Services
          </h1>
          {/* <p className="mt-6 text-lg text-gray-300">Home · Who We Are</p> */}
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        ref={addSectionRef}
        className="gsap container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div className="gsap-item">
          <h2 className=" text-4xl font-bold mb-6 text-[#0d3253]">
            SEO for Cannabis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Promoting a cannabis business online can be challenging; paid ads
            and social media accounts can be taken down without warning. If you
            want to drive organic traffic to your website, CBD SEO is the
            solution you need. Whether you operate a dispensary or a CBD
            business, we know how to elevate your cannabis marketing by:
          </p>
          <ul className="ml-6 mb-5 list-disc text-gray-700 leading-relaxed space-y-2">
            <li>Attracting the right audience to your CBD business.</li>
            <li>
              Recovering lost traffic and increasing sales, positive reviews,
              and ratings.
            </li>
            <li>Optimizing your website for local search results.</li>
            <li>
              Generating more traffic to create greater opportunities to convert
              leads into loyal customers.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            World Web Logic is dedicated to helping cannabis companies elevate
            their business with expert cannabis SEO services.
          </p>
        </div>

        {/* form  */}

        <div
          className="gsap-item rounded-2xl p-[2px] bg-gradient-to-br from-[#25baff] to-[#a8d97c]
 shadow-2xl w-full"
        >
          <div className=" rounded-2xl bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-[#25baff]/30
">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Get A Quote
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 
          focus:border-[#25baff] focus:ring-2 focus:ring-[#25baff]/30
 
          outline-none transition"
                />
              </div>

              {/* Email + Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 
          focus:border-[#25baff] focus:ring-2 focus:ring-[#25baff]/30
 
          outline-none transition"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 
          focus:border-[#25baff] focus:ring-2 focus:ring-[#25baff]/30
 
          outline-none transition"
                />
              </div>

              {/* Website */}
              <input
                type="text"
                placeholder="Website URL (if you have)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 
        focus:border-[#25baff] focus:ring-2 focus:ring-[#25baff]/30
 
        outline-none transition"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Tell us what you need & best time to call you"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 
        focus:border-[#25baff] focus:ring-2 focus:ring-[#25baff]/30
 
        outline-none transition resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#25baff] py-3 font-semibold text-white
        hover:bg-[#1aa7e6] hover:shadow-lg hover:shadow-[#25baff]/40
        active:scale-95 transition-all duration-300"
              >
                Call Me Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Market1}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="gsap-item ">
          <p className="text-gray-700 mb-6">
            In recent years, the CBD industry has seen impressive growth, with
            an increasing number of companies entering the market. However, this
            rise in competition has made it essential for CBD businesses to
            build a strong digital presence and achieve high rankings in search
            engine results. Today, a solid online presence is a necessity for
            any brand, and cannabis businesses are no exception. Partnering with
            World Web Logic can help you enhance the effectiveness of your
            comprehensive digital marketing efforts, boosting conversions and
            sales—making it the smartest choice for those operating in the CBD
            market.
          </p>
          <p className="text-gray-700 mb-6">
            Website SEO plays a crucial role in helping CBD companies attract
            organic traffic, generate leads, and boost their visibility in the
            digital landscape. By applying effective SEO strategies tailored
            specifically for cannabis businesses, you can enhance your website’s
            rankings, connect with your target audience, and achieve success in
            this rapidly growing industry. This article will delve into key SEO
            techniques and best practices to help your CBD company rank
            effectively and stand out from the competition with the support of
            World Web Logic.
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div className="gsap-item ">
          <h2 className="text-[#25baff] font-bold mb-4 text-3xl">

            How CBD SEO Approach Ranks Your Cannabis Business
          </h2>
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Conduct Comprehensive Keyword Research
          </h3>
          <p className="text-gray-700 mb-6">
            Effective CBD SEO starts with in-depth keyword research to identify
            the terms your target audience uses when searching for
            cannabis-related products. This process involves analyzing search
            volumes, user intent, and competition for specific keywords.
            Selecting the right keywords ensures your content targets the most
            relevant and profitable search queries.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Optimize Your Website’s On-Page Elements
          </h3>
          <p className="text-gray-700 mb-6">
            On-page optimization involves refining key website elements like
            titles, meta descriptions, headers, and image alt tags to align with
            target keywords. A well-structured page layout, informative content,
            and keyword placement improve your website’s visibility, enhance
            user experience, and help search engines accurately understand your
            content’s relevance.
          </p>
        </div>

        <div className="gsap-item  rounded-2xl overflow-hidden group w-full">
          <img
            src={Market2}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Market3}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item ">
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            Develop Content Strategy For CBD Products
          </h3>
          <p className="text-gray-700 mb-6">
            Creating a robust content strategy is essential to educate, inform,
            and engage your audience about CBD products. Focus on producing
            high-quality blog posts, product guides, FAQs, and educational
            content that target keywords while providing value. A strategic
            content plan not only boosts rankings but also establishes
            credibility in the industry.
          </p>
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            Improve Website’s Technical SEO
          </h3>
          <p className="text-gray-700 mb-6">
            Technical SEO enhances your website’s foundation, ensuring search
            engines can efficiently crawl and index your pages. This includes
            optimizing page speed, fixing broken links, implementing proper URL
            structures, and improving XML sitemaps. A technically sound website
            improves rankings and provides a seamless experience for visitors.
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div className="gsap-item ">
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Ensure Your Site Is Mobile-Friendly
          </h3>
          <p className="text-gray-700 mb-6">
            A mobile-friendly website is crucial, as many users browse and shop
            on their smartphones. Implement responsive design to ensure that
            your website looks great and functions smoothly on all devices. A
            mobile-optimized site not only enhances user experience but is also
            a critical ranking factor in search engine algorithms.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Ensure Regulatory Compliance
          </h3>
          <p className="text-gray-700 mb-6">
            In the CBD industry, regulatory compliance is essential. Your
            content, marketing strategies, and product descriptions should
            adhere to local and international regulations. This includes
            ensuring that claims are accurate, disclaimers are visible, and
            privacy policies are clear. Compliance helps avoid penalties and
            maintains your brand’s credibility.
          </p>
        </div>

        <div className="gsap-item w-full rounded-2xl overflow-hidden group">

          <img
            src={Market4}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Market5}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item ">
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            Boost Social Media Presence
          </h3>
          <p className="text-gray-700 mb-6">
            Although CBD advertising on social media is restricted, maintaining
            an active social media presence can drive traffic and build
            community. Share engaging, informative content related to your
            products, industry news, and updates. A strong social media presence
            enhances brand loyalty and indirectly supports your SEO efforts
            through increased traffic.
          </p>
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            Enhance Local SEO/GMB Listing To Attract Locals
          </h3>
          <p className="text-gray-700 mb-6">
            Optimizing for local SEO and ensuring your Google My Business (GMB)
            listing is accurate can significantly boost your visibility in local
            searches. Focus on targeting local keywords, optimizing
            location-specific content, and encouraging customer reviews. A
            strong local SEO strategy makes it easier for nearby customers to
            find your business.
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className=" gsap-item  container mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 md:gap-16
 items-center"
      >
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Acquiring Top-Quality Backlinks
          </h3>
          <p className="text-gray-700 mb-6">
            Building a network of high-quality backlinks is essential for
            improving your domain authority. Reach out to industry influencers,
            reputable blogs, and CBD directories to secure backlinks to your
            content. Quality backlinks signal to search engines that your
            website is trustworthy, which boosts your search rankings and
            visibility.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Monitor Website Analytics
          </h3>
          <p className="text-gray-700 mb-6">
            Tracking website analytics is crucial for assessing the
            effectiveness of your CBD SEO strategy. Use tools like Google
            Analytics to monitor traffic, user behavior, and conversions.
            Analyzing this data helps you identify areas for improvement, refine
            your approach, and ensure your SEO efforts are achieving the desired
            results.
          </p>
        </div>

        <div className="gsap-item w-full rounded-2xl overflow-hidden group">

          <img
            src={Market6}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
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
    bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),
radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.25),transparent_45%)]

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
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:p-10">
          <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl">
            Boost your cannabis business visibility and drive organic traffic
            with our expert{" "}
            <span className="text-[#a8d97c]">Cannabis SEO services</span>
          </h2>

          {/* BUTTON */}
          <button
            className="
    bg-[#25baff] text-white
    px-6 py-3
    text-sm md:text-base
    font-semibold
    rounded-full
    shadow-md
    hover:bg-[#1aa7e6]
    cursor-pointer
    hover:shadow-lg
    transition-all duration-300
    whitespace-nowrap"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section ref={addSectionRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="gsap-item text-2xl md:text-3xl font-bold text-center text-[#25baff]
 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`bg-white border rounded-lg transition-all duration-300
            ${
              activeFaq === index
                ? "border-[#25baff] shadow-md"
                : "border-gray-200"
            }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left cursor-pointer"
                >
                  <span
                    className={`text-sm font-semibold transition-colors
                ${activeFaq === index ? "text-[#25baff]" : "text-[#0b3253]"}
`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`text-xl font-bold transition-transform duration-300
                ${
                  activeFaq === index
                    ? "rotate-45 text-[#25baff]"
                    : "text-[#0b3253]"
                }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300
              ${activeFaq === index ? "max-h-40 px-5 pb-5" : "max-h-0 px-5"}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
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

export default CannabisSeoServices;
