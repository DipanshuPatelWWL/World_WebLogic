import { useRef, useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHome, FaAward, FaRobot } from "react-icons/fa";
import {
  FaSearch,
  FaChartLine,
  FaGoogle,
  FaCheckCircle,
  FaLink,
  FaVideo,
  FaUsers,
  FaGlobe,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

import Banner from "../../../assets/market/realestate/banner.avif";
import RealEstateClient from "../../../assets/market/realestate/img1.avif";
import AnalyticsImg from "../../../assets/market/realestate/img2.avif";
import TeamImg from "../../../assets/market/realestate/img3.avif";
import TrendsImg from "../../../assets/market/realestate/img4.avif";

export default function RealEstateSeo() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.4,
        ease: "power4.out",
      });

      sectionRefs.current.forEach((section) => {
        gsap.utils.toArray(".gsap-item", section).forEach((item, i) => {
          gsap.from(item, {
            scrollTrigger: { trigger: item, start: "top 85%" },
            opacity: 0,
            y: 70,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
          });
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const processSteps = [
    {
      num: "01",
      title: "Keyword Research & Content Creation",
      icon: <FaSearch />,
      desc: "The Keyword Research process provides insights into popular real estate search terms. By leveraging your competitors’ data, including search volume, keyword complexity, and intent, you’ll find the right keywords to focus on and rank for, as they promise the most actionable results from your target audience. Therefore concentrate on using keywords that match your user’s search intent & also fulfill your business growth. Keywords are the building blocks of SEO that dictate what content to optimize and how to increase organic traffic. Once you’ve got all the keywords for your real estate SEO strategy, write content that’s high quality, engaging, and focused on those keywords, answer common questions, give valuable advice, and provide solutions to what potential clients need.",
    },
    {
      num: "02",
      title: "Local SEO & GBP Optimization",
      icon: <FaGoogle />,
      desc: "Real estate is all about location, so it’s no surprise that real estate SEO should be as local as possible. After all, most people will be searching for a property in a particular town, city, or area, especially when they’re close to making a purchase. Plus, Google loves giving results to users based on their location, so making sure your content is as local as possible is critical. If you’re doing local SEO, one of the most important things you’ll need to do is create a Google Business Profile page and optimize your GBP profile. Your GBP profile gives Google access to your address, hours of operation, reviews, and what services you offer.",
    },
    {
      num: "03",
      title: "Website Optimization",
      icon: <FaGlobe />,
      desc: "If you want success from a real estate marketing campaign, you must ensure your website is ready to appear at the top of Google searches. Google’s search engine looks at your site to determine what value it provides to users, so make sure your website’s meta description, title, header tags, and other technical SEO factors are up to date. Plus, ensure it’s responsive to all devices, especially phones since most potential clients will search from their phones. An optimized site will also give you a featured spot when people zero-click on search terms. It’ll also give you a shout-out when someone uses Alexa or Google Assistant – but you’ll need to ensure your website is optimized for voice searches.",
    },
    {
      num: "04",
      title: "Real Estate Video SEO",
      icon: <FaVideo />,
      desc: "Creating and optimizing video content is the simplest way to generate leads & improve your online visibility. Here are some tips to help you out: Start and optimize a YouTube channel, Upload videos regularly, Share your videos on your website and other social media platforms, and Run live streams on platforms like Facebook and YouTube to reach a bigger audience. You can create video content featuring open house videos, Q&A live streams and virtual tours of the properties. The video content can then be used to create additional content to be shared on social media platforms and your blog, allowing you to optimize it in various ways. Ensure that your video content is optimized for local search engines. Include geo-targeted keyword phrases in headlines, descriptions, and hashtags. Use social media platforms to amplify your content reach. Platforms like Facebook, Instagram, YouTube, and Pinterest are the most effective platforms for your real estate listings.",
    },
    {
      num: "05",
      title: "External Linking Strategy",
      icon: <FaLink />,
      desc: "Backlinking is how search engines calculate the number of other websites linking to yours. A backlink strategy is one of the most critical aspects of real estate website SEO. This will boost your website’s authority, improving your rankings over time. Link building is also a great source of referral traffic. They help to drive more website visitors and ultimately lead to more potential buyers or listings. Some popular websites you can use for backlinking: Realtor.com, Trulia, Redfin, Bing Places, Yelp, Zillow. These websites have strong domain authority and can offer valuable backlinks to enhance your real estate website’s search engine optimization (SEO). Don’t forget to create quality content and engage with these platforms to get the most out of backlinking.",
    },
  ];

  const importancePoints = [
    {
      icon: <FaUsers />,
      title: "Attract More Buyers",
      desc: "Potential buyers and sellers will likely see if your website is easy to find & navigate. This means more real estate listings, potential buyers, and an ever-growing business.",
    },
    {
      icon: <FaBullhorn />,
      title: "Boost Brand Awareness",
      desc: "SEO helps real estate agencies build brand awareness and establish themselves as industry experts. When your agency appears in search results for the right keywords, it strengthens your reputation as the go-to source for real estate advice.",
    },
    {
      icon: <FaChartBar />,
      title: "Dominate Local Market",
      desc: "Local SEO helps real estate agents grow their online presence by capturing local prospects, building trust, and positioning themselves as the authority in their market.",
    },
    {
      icon: <FaChartLine />,
      title: "Increased Lead Generation",
      desc: "Real estate SEO is necessary if you are an agent looking to get quality leads. You can draw in potential clients actively looking for real estate services.",
    },
  ];

  const faqData = [
    {
      question: "What is Real Estate SEO?",
      answer:
        "Real Estate SEO is the process of optimizing your real estate website so it ranks higher in search engines like Google. It helps attract buyers and sellers searching for properties or realtors in specific locations.",
    },
    {
      question: "Why is SEO important for realtors?",
      answer:
        "Most property buyers start their search online. If your website does not appear on the first page, you lose potential leads. SEO improves visibility, increases calls, and generates qualified leads.",
    },
    {
      question: "How long does Real Estate SEO take to show results?",
      answer:
        "SEO is a long-term strategy. Typically, noticeable improvements can be seen within 3–6 months depending on competition, website condition, and market location.",
    },
    {
      question: "Does Local SEO help real estate agents?",
      answer:
        "Yes. Local SEO and Google Business Profile optimization help realtors appear in local searches like 'realtor near me' and Google Maps results, driving more local inquiries.",
    },
    {
      question: "Can SEO generate real estate leads without paid ads?",
      answer:
        "Absolutely. SEO focuses on organic traffic, helping you generate consistent leads without continuously spending on paid advertisements.",
    },
    {
      question: "What keywords should real estate agents target?",
      answer:
        "Agents should focus on location-based keywords like 'homes for sale in [city]', 'best realtor in [area]', and long-tail buyer intent keywords such as 'buy 2BHK apartment in [location]'.",
    },
    {
      question: "How does Google Business Profile help realtors?",
      answer:
        "A properly optimized Google Business Profile improves local visibility, shows your reviews, displays contact information, and increases calls directly from search and Maps.",
    },
    {
      question: "Is video SEO important for real estate marketing?",
      answer:
        "Yes. Property walkthroughs, virtual tours, and market updates on YouTube improve engagement, visibility, and attract more serious buyers.",
    },
    {
      question: "What is the role of backlinks in real estate SEO?",
      answer:
        "Backlinks from trusted websites like real estate directories and local portals increase your domain authority and improve search rankings.",
    }
  ];

  return (
    <div
      ref={rootRef}
      className="w-full overflow-hidden bg-[#020202] text-white"
    >
      {/* HERO - Modernized with glassy overlay */}
      <section
        className="relative h-[62vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/60 backdrop-blur-xs" />
        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#25baff] to-[#a8d97c] bg-clip-text text-transparent">
            Real Estate SEO
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 mb-8">
            Enhance Visibility • Secure Leads • AI-Driven Strategies • Dominate
            Local Markets
          </p>
        </div>
      </section>

      {/* INTRO - What is Real Estate SEO? - Modern Glass Cards */}
      <section ref={addSectionRef} className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="gsap-item text-3xl md:text-5xl font-bold mb-6">
            What Is <span className="text-[#25baff]">Real Estate SEO?</span>
          </h2>

          {/* Short Paragraph */}
          <p className="gsap-item text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
            Real Estate SEO is the process of optimizing your real estate
            website so buyers, sellers, and renters can easily find you on
            search engines like Google. It helps agents rank for searches like{" "}
            <strong>“realtor near me”</strong>
            or <strong>“property agents in your city.”</strong>
          </p>

          {/* Glass Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#25baff] text-3xl mb-3">01</div>
              <h3 className="font-semibold text-lg mb-2">
                Higher Google Rankings
              </h3>
              <p className="text-sm text-gray-600">
                Appear at the top when buyers search for properties in your
                area.
              </p>
            </div>

            {/* Card 2 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#25baff] text-3xl mb-3">02</div>
              <h3 className="font-semibold text-lg mb-2">Qualified Leads</h3>
              <p className="text-sm text-gray-600">
                Attract serious buyers and sellers actively searching for real
                estate services.
              </p>
            </div>

            {/* Card 3 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#25baff] text-3xl mb-3">03</div>
              <h3 className="font-semibold text-lg mb-2">
                Stronger Online Authority
              </h3>
              <p className="text-sm text-gray-600">
                Build trust and credibility with optimized content and local
                presence.
              </p>
            </div>

            {/* Card 4 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#25baff] text-3xl mb-3">04</div>
              <h3 className="font-semibold text-lg mb-2">Long-Term Growth</h3>
              <p className="text-sm text-gray-600">
                Generate consistent traffic and leads without relying only on
                paid ads.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WHY IMPORTANT - Dark background with gradient headings and glassy effects */}

      <section
        ref={addSectionRef}
        className="py-24 px-6 bg-[#020202] relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 backdrop-blur-md" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          {/* Left Content */}
          <div className="gsap-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why <span className="text-[#25baff]">SEO for Realtors</span>{" "}
              Matters?
            </h2>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
              Today’s buyers search online before contacting an agent. If your
              real estate website isn’t ranking on the first page, you’re
              missing valuable opportunities. SEO helps you attract serious
              buyers and sellers without relying only on cold calls or paid
              listings.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Rank in top search results for local property searches.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Generate qualified buyer & seller leads organically.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Reduce dependency on expensive paid ads.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Build long-term visibility and brand authority.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-2xl group backdrop-blur-lg bg-white/5 border border-white/20"
          >
            <img
              src={RealEstateClient}
              alt="Real estate agent with client"
              className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* IMPORTANCE POINTS - Modern cards with icons */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
            Benefits of Real <span className="text-[#25baff]"> Estate SEO</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {importancePoints.map((point, i) => (
            <div
              key={i}
              className="gsap-item relative bg-gray-50/80 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 text-center hover:border-[#25baff]/70 hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)] transition-all duration-500 group hover:-translate-y-4"
            >
              <div className="text-5xl text-[#25baff] mb-6 group-hover:scale-110 transition">
                {point.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-[#25baff] transition">
                {point.title}
              </h4>
              <p className="text-sm text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl backdrop-blur-lg bg-white/5 border border-white/20"
        >
          <img
            src={AnalyticsImg}
            alt="Real estate SEO analytics"
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>
      </section>

      {/* STRATEGIES - Dark background, glassy steps */}
      <section
        ref={addSectionRef}
        className="py-20 px-6 bg-[#020202] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#a8d97c]/10 to-[#25baff]/10 backdrop-blur-md" />
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <h2 className="gsap-item text-4xl font-bold bg-gradient-to-r from-[#25baff] to-[#a8d97c] bg-clip-text text-transparent">
            5 Top Real Estate SEO Strategies For Agents
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="gsap-item relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-[#a8d97c]/70 hover:shadow-[0_20px_60px_rgba(168,217,124,0.35)] transition-all duration-500 group hover:-translate-y-4"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#25baff] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition">
                {step.num}
              </div>
              <div className="text-5xl text-[#a8d97c] mt-10 mb-6 group-hover:scale-110 transition">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#25baff] transition">
                {step.title}
              </h4>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl backdrop-blur-lg bg-white/5 border border-white/20"
        >
          <img
            src={TrendsImg}
            alt="Real estate market trends"
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>
      </section>

      {/* SERVICES / AGENCY - Updated with glassy team image */}

      {/* REAL ESTATE MARKETING AGENCY - Premium Modern Section */}
      <section
        ref={addSectionRef}
        className="py-28 px-6 bg-white text-black relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="gsap-item text-3xl md:text-5xl font-bold mb-6">
            Real Estate Marketing Agency –
            <span className="text-[#25baff]"> Get More Calls & Leads</span>
          </h2>

          <p className="gsap-item text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real estate digital marketing gives you the competitive edge needed
            to dominate local searches. With the right SEO strategy, you rank
            higher, attract qualified buyers and sellers, and generate
            consistent leads without relying only on paid ads.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHome />,
              title: "Tailored Strategies",
              desc: "Custom-built SEO campaigns designed specifically for real estate professionals.",
            },
            {
              icon: <FaAward />,
              title: "Proven Growth",
              desc: "Higher rankings, more qualified calls, and measurable lead generation.",
            },
            {
              icon: <FaRobot />,
              title: "Algorithm Experts",
              desc: "We handle Google updates so your visibility stays protected.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="gsap-item bg-white border border-gray-200 rounded-3xl p-8 shadow-lg 
        hover:shadow-[0_20px_60px_rgba(37,186,255,0.25)] 
        hover:-translate-y-3 transition-all duration-500 group"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl 
        bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/20 
        text-3xl text-[#25baff] mb-6 
        group-hover:scale-110 group-hover:text-[#a8d97c] transition"
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#25baff] transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-20 max-w-5xl mx-auto overflow-hidden rounded-3xl 
    shadow-2xl border border-gray-200"
        >
          <img
            src={TeamImg}
            alt="Real estate marketing team"
            className="w-full h-auto rounded-3xl hover:scale-105 transition duration-700"
          />
        </motion.div>
      </section>

        {/* FAQ SECTION */}
      <section
        ref={addSectionRef}
        className="py-24 px-6 bg-[#020202] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 backdrop-blur-md" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="gsap-item text-3xl md:text-5xl font-bold text-white">
              Real Estate SEO <span className="text-[#25baff]">FAQs</span>
            </h2>
            <p className="gsap-item text-gray-400 mt-4 text-sm md:text-base">
              Everything you need to know about real estate SEO and lead
              generation.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="gsap-item backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden transition-all duration-500"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium text-sm md:text-base"
                >
                  {faq.question}
                  <span className="text-[#25baff] text-xl">
                    {activeFaq === i ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    activeFaq === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient background */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#25baff]/30 to-[#a8d97c]/30">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Boost Your
          <span className="bg-gradient-to-r from-[#a8d97c] to-[#25baff] bg-clip-text text-transparent">
            {" "}
            Real Estate Leads
          </span>
          ?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto">
          Claim your FREE Real Estate SEO Audit and unlock growth potential.
        </p>
        <NavLink to="/contact">
          <button className="px-12 py-6 rounded-full bg-[#25baff] text-white font-bold text-xl shadow-xl hover:shadow-[#a8d97c]/70 transition transform hover:-translate-y-2">
            Contact Us
          </button>
        </NavLink>
      </section>

    
    </div>
  );
}
