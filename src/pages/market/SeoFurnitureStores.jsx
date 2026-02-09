import { useLayoutEffect, useRef } from "react";
import { useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../assets/market/seo-furniture-store.jpg";
import Market7 from "../../assets/market/CBD-07.jpg";
import Market8 from "../../assets/market/CBD-08.jpg";

gsap.registerPlugin(ScrollTrigger);

const SeoFurnitureStores = () => {
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
      q: "What is Furniture SEO Services?",
      a: " Furniture SEO Services refer to a specialized service designed to optimize the online presence of furniture businesses. This includes enhancing their websites and digital assets to improve search engine rankings, ultimately driving more organic traffic from potential customers.",
    },
    {
      q: "Why do furniture businesses need SEO services?",
      a: "Furniture businesses require SEO services to boost their online visibility and reach a larger audience. By applying effective SEO strategies, businesses can enhance their search engine rankings, attract targeted traffic to their websites, and generate more leads and sales.",
    },
    {
      q: "How can Furniture SEO services benefit my business?",
      a: "Furniture SEO services can significantly benefit your business by increasing website visibility on search engines, driving targeted traffic, improving your brand’s online reputation, generating more leads and sales, and helping your business grow. For further details, book a free consultation with our experts at World Web Logic.",
    },
    {
      q: "How long does it take to see results from Furniture SEO services?",
      a: "The time to see results from Furniture SEO services depends on factors like market competitiveness, the current state of your website’s SEO, and the strategies implemented. Typically, noticeable improvements in search engine rankings and organic traffic may take a few months.",
    },
    {
      q: "Can Furniture SEO services help with local marketing?",
      a: "Yes, Furniture SEO services often include local SEO strategies that help businesses target customers in specific geographic areas. This can involve optimizing business listings, implementing location-specific keywords, and ensuring consistent NAP (name, address, phone number) information across online directories.",
    },
    {
      q: "How do Furniture SEO services improve website rankings?",
      a: "Furniture SEO services enhance website rankings by implementing strategies such as optimizing website structure and meta tags, conducting keyword research and optimization, creating high-quality content, improving site speed and mobile-friendliness, and building authoritative backlinks. For more information, connect with our experts at World Web Logic.",
    },
    {
      q: "Are Furniture SEO services suitable for e-commerce furniture businesses?",
      a: "Absolutely! E-commerce furniture SEO is highly beneficial for furniture businesses. By optimizing your online furniture store for search engine optimization, you can increase organic traffic, improve conversion rates, and boost online sales.",
    },
    {
      q: "Do Furniture SEO services involve social media marketing?",
      a: "While social media marketing is not directly included in Furniture SEO services, it can complement SEO efforts. Social media platforms can help furniture businesses engage with their target audience, build brand awareness, and drive traffic to their websites, which indirectly supports SEO goals.",
    },
    {
      q: "How can I choose the right Furniture SEO service provider?",
      a: "When selecting a Furniture SEO service provider, consider their experience and expertise in the furniture industry, their proven track record of delivering results, their strategies and techniques, their communication practices, and their understanding of your business goals. It’s also beneficial to request client references or case studies to evaluate their past performance.",
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
        <div className="absolute inset-0 bg-black/70" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            SEO for Furniture Stores
          </h1>
          {/* <p className="mt-6 text-lg text-gray-300">Home · Who We Are</p> */}
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        ref={addSectionRef}
        className="gsap container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item">
          <h2 className=" text-4xl font-bold mb-6 text-[#0d3253]">
            SEO for Furniture Stores
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When your ideal customer goes to Google and types something like
            “Furniture stores near me,” they’re likely searching for stores,
            comparing products, or checking prices online. To capture their
            attention, it’s crucial to stand out in search engine results. SEO
            for furniture stores is one of the smartest investments you can make
            for growing your business and becoming a go-to destination for those
            seeking quality furniture.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you run a small storefront, an online shop, or are a major
            player in the furniture industry, World Web Logic offers affordable
            digital marketing and SEO services designed to:
          </p>
          <ul className="ml-6 mb-5 list-disc text-gray-700 leading-relaxed space-y-2">
            <li>Rank your business for product-specific searches.</li>
            <li>
              Secure a prominent spot in Google My Business (GMB) listings.
            </li>
            <li>Boost your online visibility.</li>
            <li>Drive more traffic, generate leads, and increase sales.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Let us help you rank higher and reach the right audience. Get our
            expert marketing services today!
          </p>
        </div>

        {/* form  */}

        <div className="gsap-item rounded-2xl p-[2px] bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl w-120 ml-15">
          <div className=" rounded-2xl bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-orange-200">
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
          focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
          outline-none transition"
                />
              </div>

              {/* Email + Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 
          focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
          outline-none transition"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 
          focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
          outline-none transition"
                />
              </div>

              {/* Website */}
              <input
                type="text"
                placeholder="Website URL (if you have)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 
        focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
        outline-none transition"
              />

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Tell us what you need & best time to call you"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 
        focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
        outline-none transition resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white
        hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300
        active:scale-95 transition-all duration-300"
              >
                Call Me Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item  rounded-2xl overflow-hidden group">
          <img
            src={Market7}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="gsap-item ">
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            What Is Furniture Marketing?
          </h3>
          <p className="text-gray-700 mb-6">
            Furniture store marketing involves enhancing the visibility and
            ranking of a website that offers furniture or related services in
            Google searches. The goal of online marketing is to attract
            potential customers actively searching for furniture-related
            products or services on the internet. By optimizing your online
            presence, website structure, content, and other elements, you can
            improve your chances of ranking higher on SERPs. This increases the
            likelihood of users visiting your website or store—whatever your end
            goal may be.
          </p>
          <h3 className="text-3xl font-bold mb-6 text-[#0d3253]">
            Furniture SEO Services
          </h3>
          <p className="text-gray-700 mb-6">
            Furniture store marketing involves enhancing the visibility and
            ranking of a website that offers furniture or related services in
            Google searches. The goal of online marketing is to attract
            potential customers actively searching for furniture-related
            products or services on the internet. By optimizing your online
            presence, website structure, content, and other elements, you can
            improve your chances of ranking higher on SERPs. This increases the
            likelihood of users visiting your website or store—whatever your end
            goal may be.
          </p>
        </div>
      </section>

      <section
        ref={addSectionRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item ">
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Is SEO for Furniture Stores Important?
            <br />
            Brand Credibility | Capture Niche Markets
          </h3>
          <p className="text-gray-700 mb-6">
            Being ranked in the top search results enhances your authority and
            credibility, positively impacting customer trust and engagement. |
            Optimizing for specific, long-tail keywords like “mid-century modern
            wooden coffee table” allows you to target niche customers and
            markets with lower competition.
          </p>
          <h3 className="text-2xl font-bold mb-6 text-[#0d3253]">
            Enhanced User Engagement | Outrank Competition
          </h3>
          <p className="text-gray-700 mb-6">
            Digital marketing for furniture stores boosts user engagement,
            encouraging visitors to explore your products and spend more time on
            your website. | Stand out from your competitors by showcasing the
            unique features, designs, or materials of your furniture, capturing
            a larger share of the online market.
          </p>
        </div>

        <div className=" gsap-item  rounded-2xl overflow-hidden group w-126 ml-8">
          <img
            src={Market8}
            alt="CTA"
            className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY SECTION ================= */}
      <section ref={addSectionRef} className="py-28 px-6 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b3253]">
              Best Strategies for
              <span className="text-orange-500"> Furniture Marketing</span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base">
              Executing a successful furniture advertisement campaign requires
              careful planning and effort. Here’s a proven guide to digital
              marketing for the furniture business.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-14">
            {[
              {
                step: "01",
                title: "Keyword Research",
                body: (
                  <>
                    <p>
                      Choosing the right keywords for your campaign depends on:
                    </p>

                    <p className="ml-5">
                      <li>What you are selling</li>
                      <li>Who your target audience is</li>
                      <li>Your desired demographics</li>
                    </p>

                    <p>
                      To optimize your furniture store’s marketing efforts,
                      identify relevant keywords that your potential customers
                      are likely to use when searching. This will help you
                      improve your ranking on SERPs and make your site more
                      visible to the right audience.
                    </p>
                  </>
                ),
              },
              {
                step: "02",
                title: "Product Page Optimization",
                body: (
                  <>
                    <p>
                      Online marketing allows you to reach customers interested
                      in what you’re selling. With many furniture stores
                      offering similar products, product page optimization is
                      key to making your store stand out.
                    </p>
                    <p>
                      To optimize your product pages, consider the following:
                    </p>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>
                        Write high-quality, keyword-rich product descriptions
                        with valuable product information.
                      </li>
                      <li>Use high-quality images on product pages.</li>
                      <li>
                        Include a “Benefits” section so potential customers can
                        easily access key information.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                step: "03",
                title: "Engaging Content Creation",
                body: (
                  <>
                    <p>
                      Tailor your content to the audience you want to reach.
                      Your marketing content should be informative and engaging,
                      with keywords related to your products and services.
                      Optimize metadata, alt text, captions, and images to
                      improve search visibility. High-quality content increases
                      your website’s reach and draws in more potential
                      customers.
                    </p>
                  </>
                ),
              },
              {
                step: "04",
                title: "Website Technical Optimization",
                body: (
                  <>
                    <p>
                      Furniture eCommerce sites often have thousands of product
                      pages. Technical optimization is crucial for effective
                      SEO. Even if your content is strong, it won’t matter if
                      your site isn’t optimized for search engines. Follow these
                      best practices for technical SEO:
                    </p>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>Use HTTPS.</li>
                      <li>
                        Ensure only a single version of your site is accessible
                        to users and search engines.
                      </li>
                      <li>Improve page speed.</li>
                      <li>Ensure mobile-friendliness.</li>
                      <li>Implement structured data.</li>
                    </ul>
                    <p>
                      If you lack technical expertise, hiring a professional
                      marketing company like World Web Logic can help you
                      address areas that need improvement.
                    </p>
                  </>
                ),
              },
              {
                step: "05",
                title: "Off-Page Optimization",
                body: (
                  <>
                    <p>
                      While on-page optimization is essential, off-page SEO is
                      equally important. Building thematic links on
                      high-authority websites can increase your site’s Domain
                      Authority (DA) and establish trust with Google and your
                      audience.
                    </p>
                  </>
                ),
              },
              {
                step: "06",
                title: "Local SEO for Furniture Businesses",
                body: (
                  <>
                    <p>
                      Driving foot traffic to your local store is crucial,
                      especially given the costs of transporting large furniture
                      items. Targeting local customers through a robust local
                      SEO strategy is essential. Optimize your Google Business
                      Profile to appear in the local 3-pack listings for
                      relevant searches in your area. World Web Logic can help
                      you improve your local web presence, making your store the
                      top choice in your community.
                    </p>
                  </>
                ),
              },
              {
                step: "07",
                title: "Leverage Social Media Effectively",
                body: (
                  <>
                    <p>
                      In the furniture industry, social media is a valuable
                      tool. While customers may not always make direct purchases
                      on platforms like Facebook or Instagram, they use these
                      channels to read reviews, gather inspiration, and explore
                      local shopping options. Consider using virtual 3D
                      visualization tools to showcase how your furniture would
                      look in a home. Stay consistent with your social media
                      strategy, and if it becomes overwhelming, consider hiring
                      social media experts for professional guidance.
                    </p>
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            gsap-item group relative bg-white rounded-2xl
            border-2 border-transparent
            p-10 shadow-xl
            transition-all duration-300
            hover:-translate-y-3 hover:scale-[1.03]
            hover:border-orange-500
            hover:shadow-[0_25px_50px_rgba(255,165,0,0.3)]
          "
              >
                {/* Step Badge */}
                <span
                  className="
              absolute -top-6 -left-6 w-16 h-16 rounded-full
              bg-orange-500 text-white text-lg font-bold
              flex items-center justify-center
              shadow-lg
              transition-transform duration-300
              group-hover:scale-110
            "
                >
                  {item.step}
                </span>

                <h3 className="text-xl font-bold text-[#0b3253] mb-4 mt-6">
                  {item.title}
                </h3>

                <div className="text-gray-600 space-y-3 text-sm leading-relaxed">
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATIC WHITE SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3253] mb-6">
            Generate More Sales with
            <span className="text-orange-500"> SEO for Furniture Stores!</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Digital marketing for furniture stores boosts visibility, traffic,
            and sales. With expert SEO and affordable packages, World Web Logic
            helps you outperform competitors and maximize ROI.
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
          <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl">
            Generate More Sales with SEO for
            <span className="text-orange-400"> Furniture Stores!</span>
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
            Get a Quote
          </button>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section ref={addSectionRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="gsap-item text-2xl md:text-3xl font-bold text-center text-[#0b3253] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`bg-white border rounded-lg transition-all duration-300
            ${
              activeFaq === index
                ? "border-orange-500 shadow-md"
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
                ${activeFaq === index ? "text-orange-500" : "text-[#0b3253]"}`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`text-xl font-bold transition-transform duration-300
                ${
                  activeFaq === index
                    ? "rotate-45 text-orange-500"
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

export default SeoFurnitureStores;
