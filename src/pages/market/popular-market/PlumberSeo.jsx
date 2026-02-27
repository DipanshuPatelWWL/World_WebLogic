import { useRef, useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHome,
  FaAward,
  FaRobot,
  FaWrench,
  FaSearch,
  FaGoogle,
  FaCheckCircle,
  FaLink,
  FaVideo,
  FaUsers,
  FaGlobe,
  FaBullhorn,
  FaChartBar,
  FaChartLine,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

import Banner from "../../../assets/market/plumber/banner.jpg";
import PlumberClient from "../../../assets/market/plumber/img1.avif";
import AnalyticsImg from "../../../assets/market/plumber/img2.avif";
import TeamImg from "../../../assets/market/plumber/img3.jpg";
import TrendsImg from "../../../assets/market/plumber/img4.avif";

export default function PlumberSeo() {
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
      title: "Local SEO for Plumbers",
      icon: <FaGlobe />,
      desc: "When people are looking for local things, services, or places, they’re searching with local intent, which means they only want something specific to a particular area. Local keyword optimization is essential for local businesses like plumbing. This increases your organic visibility on the relevant SERPs and helps you generate more unpaid site traffic, foot traffic, and inquiries. By strategically adding location-based keywords such as “emergency plumbing [Your City]” or “plumbing services [Your City] near me” in your website content and meta descriptions, as well as in your title tags, a local SEO for plumbers will help direct local customers to your services. Optimization Tip: On your website’s homepage, prominently feature local keywords in your meta title, meta description, and headers.",
    },
    {
      num: "02",
      title: "Create & Optimize Google My Business Listing",
      icon: <FaGoogle />,
      desc: "As a trusted plumbing SEO company, we know optimizing your Google My Business profile is crucial for local visibility. When potential customers in your area search for “plumbers,” Google displays a list of local businesses, including yours. Optimizing your business listing with accurate contact information, customer reviews, and high-quality images places you squarely on the local map, making it easy for locals to find and choose your plumbing expertise. With an optimized Google business listing, you can ensure your marketing and local presence are seen in the top search results, even for Google. You’ll be able to reach a much bigger audience in a shorter amount of time and with more focus on what’s important to you – your customers and clients.",
    },
    {
      num: "03",
      title: "Location-based Service Pages",
      icon: <FaHome />,
      desc: "Location pages are a key part of local SEO for plumbers strategy, but they can be tricky. Ideally, they shouldn’t give potential customers any reason to switch to another business. Creating different pages can be hard when every location sells the same thing. See below; Handy has included all the locations they serve on their website. Optimization Tip: Upload high-resolution images of your most recent plumbing jobs. Write a business profile that talks about your plumbing services, what you specialize in, and any special features you offer. For example, “We’ve been serving Houston with top-notch plumbing services for over 15 years.” You can also create a dedicated service page on your website for each location you serve. Highlight the unique plumbing needs of each area and mention any local landmarks.",
    },
    {
      num: "04",
      title: "Get more reviews with Plumber SEO",
      icon: <FaUsers />,
      desc: "Every review is helpful, but some can be more important than others for plumber SEO. Make sure customers leave reviews full of details about the services they got and their experiences. See how ABC Plumbing created a separate page for showing their testimonials. A review is helpful if customers wrote about things like the problem they had, how they interacted with your team, the service results, the name of the person they worked with, and photos of the job should all be included. Ask for reviews from happy customers, especially after you’ve done an excellent job with plumbing projects. Remember to respond to all reviews quickly and professionally, showing that you care about customer satisfaction, & improving your plumbing marketing campaign’s performance.",
    },
    {
      num: "05",
      title: "Content Marketing For Plumbers",
      icon: <FaBullhorn />,
      desc: "You are not the only plumber in their area. Other plumbers are reaching out with helpful content. Through content marketing, companies can help their customers remember who they are. Only customers who need your services contact you, not people who know you’re a plumbing business. When homeowners visit your website and find valuable plumbing tips, DIY guides, informative blog posts, and testimonials from satisfied customers, this authoritative content and positive feedback establish your plumbing company as a trusted and credible source for all their plumbing needs. It’s also a core part of our plumbing SEO services, helping you boost visibility, authority, and conversions over time. Optimization Tip: For a blog post titled “Common Plumbing Problems in Katy,” discuss local plumbing challenges specific to Katy, Texas, and provide actionable advice.",
    },
  ];

  const importancePoints = [
    {
      icon: <FaUsers />,
      title: "Customer Acquisition",
      desc: "Problem: If you have a strategic plumber marketing strategy, people can find your business online, which means you’ll take advantage of some great chances. Solution: Digital marketing for plumbers ensures your website ranks higher & is visible in SERP, attracting customers actively searching for plumbing services in your servicing area.",
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Efficiency",
      desc: "Problem: Traditional marketing methods can be costly and may not effectively target your ideal customer. Solution: Digital marketing techniques like plumbing SEO offer a cost-effective marketing approach, enabling precise targeting of keywords and locations within your budget.",
    },
    {
      icon: <FaRobot />,
      title: "Employee Productivity",
      desc: "Problem: Your plumbing team will be underused if you don’t schedule your jobs properly. Solution: An SEO-friendly website with an easy-to-use booking system makes it easier to assign tasks, boosting employee efficiency.",
    },
    {
      icon: <FaChartBar />,
      title: "Overhead Management",
      desc: "Problem: If you have a lot of overhead costs, it can take a toll on your profits, especially if you don’t have enough customers. Solution: By consistently driving traffic to your website through effective search engine optimization techniques, you can control your overhead costs better while still making money.",
    },
    {
      icon: <FaAward />,
      title: "Reputation and Trust",
      desc: "Problem: Negative online reviews or a lack of online presence can break customer trust in your services. Solution: Plumber SEO gives you the power to build your online presence positively. People are more likely to trust your plumbing services when you have positive reviews and informative content.",
    },
    {
      icon: <FaWrench />,
      title: "Competitive Edge",
      desc: "Problem: If you don’t take SEO for plumbers seriously, you could be left behind in a crowded plumbing market. Solution: A robust & targeted plumber marketing strategy, including SEO, social media optimization, and website optimization, sets you apart and allows you to outrank your competitors by optimizing your online presence for top positions in SERPs.",
    }
  ];

  const faqData = [
    {
      question: "What is Plumber SEO?",
      answer:
        "Plumbers SEO is the set of techniques that help improve the online visibility of plumbing businesses. It involves many optimization techniques like keyword research, technical SEO optimization, business listing optimization, citation creation, link-building campaigns, etc. Whenever someone searches for ‘plumbing service near me,’ plumber SEO services can help your business become the go-to choice for any of their plumbing needs.",
    },
    {
      question: "Why is SEO important for plumbers?",
      answer:
        "Plumbing SEO services do more than improve ranking and online visibility, they help fix the profit leaks most plumbing business owners overlook. Think of your plumbing website as a well-kept pipeline network. Search engine optimization is your plumber, making it easy for potential customers to find you online by fixing all the leaks. It’s like having a sign on your store window in the fast-paced city of the Internet. When someone searches for “plumbing service near me,” a plumber SEO company ensures your business is the first thing that pops up. That way, you’re the first choice for anyone looking for plumbing help.",
    },
    {
      question: "How does Local SEO benefit plumbers?",
      answer:
        "Local SEO for plumbers increases organic visibility on relevant SERPs, generates more unpaid site traffic, foot traffic, and inquiries by using location-based keywords like “emergency plumbing [Your City]” or “plumbing services [Your City] near me”.",
    },
    {
      question: "What is the role of Google My Business in Plumber SEO?",
      answer:
        "Optimizing your Google My Business profile is crucial for local visibility. It displays your business in local searches with accurate contact info, reviews, and images, making it easier for locals to find and choose you.",
    },
    {
      question: "Why create location-based service pages?",
      answer:
        "Location-based pages strengthen SEO efforts by highlighting unique plumbing needs of each area, including testimonials and local landmarks, ensuring better visibility in served areas.",
    },
    {
      question: "How can reviews improve Plumber SEO?",
      answer:
        "Detailed reviews about services, experiences, and photos help SEO. Asking for reviews from happy customers and responding professionally shows customer care and boosts marketing performance.",
    },
    {
      question: "What is Content Marketing for Plumbers?",
      answer:
        "Content marketing provides valuable tips, DIY guides, blog posts, and testimonials to establish trust and credibility, boosting visibility, authority, and conversions.",
    },
    {
      question: "How can a Plumber SEO company help my business?",
      answer:
        "A company like Digital Guider offers expert SEO services to increase local visibility, attract more customers, and grow your plumbing business with tailored strategies.",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="w-full overflow-hidden bg-[#020202] text-white"
    >
      {/* HERO - Modernized with glassy overlay, same style as reference */}
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
            Plumber SEO
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300 mb-8">
            Boost Visibility • Generate Leads • AI-Powered Tactics • Rule Local
            Searches
          </p>
        </div>
      </section>

      {/* INTRO - What is Plumber SEO? - Futuristic Glass Cards with neon effects */}
      <section ref={addSectionRef} className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="gsap-item text-3xl md:text-5xl font-bold mb-6">
            What Is <span className="text-[#25baff]">Plumber SEO?</span>
          </h2>

          {/* Short Paragraph */}
          <p className="gsap-item text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed mb-14">
            Plumbers SEO is the set of techniques that help improve the online
            visibility of plumbing businesses. It involves many optimization
            techniques like keyword research, technical SEO optimization,
            business listing optimization, citation creation, link-building
            campaigns, etc.
          </p>

          {/* Glass Cards with futuristic neon glow */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300 hover:border-[#a8d97c]">
              <div className="text-[#25baff] text-3xl mb-3">01</div>
              <h3 className="font-semibold text-lg mb-2">
                Enhanced Visibility
              </h3>
              <p className="text-sm text-gray-600">
                Appear first in searches for plumbing services in your area.
              </p>
            </div>

            {/* Card 2 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300 hover:border-[#a8d97c]">
              <div className="text-[#25baff] text-3xl mb-3">02</div>
              <h3 className="font-semibold text-lg mb-2">Targeted Leads</h3>
              <p className="text-sm text-gray-600">
                Attract customers actively seeking plumbing solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300 hover:border-[#a8d97c]">
              <div className="text-[#25baff] text-3xl mb-3">03</div>
              <h3 className="font-semibold text-lg mb-2">Build Authority</h3>
              <p className="text-sm text-gray-600">
                Establish trust with optimized content and local presence.
              </p>
            </div>

            {/* Card 4 */}
            <div className="gsap-item backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[#25baff]/80 hover:-translate-y-2 transition-all duration-300 hover:border-[#a8d97c]">
              <div className="text-[#25baff] text-3xl mb-3">04</div>
              <h3 className="font-semibold text-lg mb-2">Sustainable Growth</h3>
              <p className="text-sm text-gray-600">
                Drive consistent traffic without heavy ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IMPORTANT - Dark background with gradient headings, glassy effects, futuristic glow */}
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
              Why <span className="text-[#25baff]">SEO for Plumbers</span>{" "}
              Matters?
            </h2>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
              Plumbing SEO services do more than boost rankings—they fix the
              hidden profit leaks many plumbing businesses overlook. Think of
              your website as a pipeline system and SEO as the plumber sealing
              every leak, making it easy for customers to find you online. When
              someone searches “plumbing service near me,” a strong SEO strategy
              helps your business appear first. It’s not just about
              visibility—it’s about turning more searches into calls, jobs, and
              steady profit.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Higher rankings in local searches.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Cost-effective lead generation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Improved business efficiency.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#25baff] mt-1 text-sm" />
                <p className="text-sm text-gray-300">
                  Long-term profitability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Different way: Floating with neon border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-2xl group backdrop-blur-lg bg-white/5 border border-white/20 hover:border-[#25baff]/50 hover:shadow-[#a8d97c]/50"
          >
            <img
              src={PlumberClient}
              alt="Plumber with client"
              className="rounded-3xl transform transition duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* IMPORTANCE POINTS - Modern cards with icons, futuristic hover shadows */}
      <section ref={addSectionRef} className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
            Why SEO for{" "}
            <span className="text-[#25baff]">Plumbers is a No-Brainer</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
        {/* Image - Different way: Centered with parallax effect via GSAP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl backdrop-blur-lg bg-white/5 border border-white/20"
        >
          <img
            src={AnalyticsImg}
            alt="Plumber SEO analytics"
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>
      </section>

      {/* STRATEGIES - Dark background, glassy steps, futuristic animations */}
      <section
        ref={addSectionRef}
        className="py-20 px-6 bg-[#020202] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#a8d97c]/10 to-[#25baff]/10 backdrop-blur-md" />
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <h2 className="gsap-item text-4xl font-bold bg-gradient-to-r from-[#25baff] to-[#a8d97c] bg-clip-text text-transparent">
            5 Plumbing SEO Services To Gain More Business
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
        {/* Image - Different way: Gallery style with multiple small images */}
        <div className="mt-16 max-w-7xl mx-auto grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="overflow-hidden rounded-3xl shadow-2xl backdrop-blur-lg bg-white/5 border border-white/20"
          >
            <img
              src={TrendsImg}
              alt="Plumbing trends"
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="overflow-hidden rounded-3xl shadow-2xl backdrop-blur-lg bg-white/5 border border-white/20"
          >
            <img
              src={TeamImg}
              alt="Plumbing team"
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* AGENCY - Updated with glassy team image, futuristic vibe */}
      <section
        ref={addSectionRef}
        className="py-28 px-6 bg-white text-black relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="gsap-item text-3xl md:text-5xl font-bold mb-6">
            Hire the Best Plumber{" "}
            <span className="text-[#25baff]">SEO Marketing Company!</span>
          </h2>

          <p className="gsap-item text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Digital WebGuider is your trusted partner for plumbing digital
            marketing. We specialize in SEO for plumbers, helping you boost
            local visibility, attract more customers, and grow your business
            with targeted strategies. Let’s take your plumbing business to the
            next level online.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaWrench />,
              title: "Custom Strategies",
              desc: "Tailored SEO plans for plumbing businesses.",
            },
            {
              icon: <FaAward />,
              title: "Proven Results",
              desc: "Higher rankings, more leads, measurable growth.",
            },
            {
              icon: <FaRobot />,
              title: "Expert Support",
              desc: "Handle algorithm changes to keep you ahead.",
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

        {/* Team Image - Different way: With overlay text or something futuristic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-20 max-w-5xl mx-auto overflow-hidden rounded-3xl 
    shadow-2xl border border-gray-200 relative"
        >
          <img
            src={TeamImg}
            alt="Plumber marketing team"
            className="w-full h-auto rounded-3xl hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/50 to-transparent flex items-end justify-center pb-8">
            <p className="text-white text-xl font-bold">
              Empowering Your Plumbing Future
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ SECTION - Futuristic accordion with glow */}
      <section
        ref={addSectionRef}
        className="py-24 px-6 bg-[#020202] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 backdrop-blur-md" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="gsap-item text-3xl md:text-5xl font-bold text-white">
              Plumber SEO <span className="text-[#25baff]">FAQs</span>
            </h2>
            <p className="gsap-item text-gray-400 mt-4 text-sm md:text-base">
              Answers to common questions about SEO for plumbing businesses.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="gsap-item backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#25baff]/50 hover:shadow-[#a8d97c]/30"
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
                    activeFaq === i ? "max-h-96 pb-5" : "max-h-0"
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

      {/* CTA - Gradient background, futuristic button */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-[#25baff]/30 to-[#a8d97c]/30">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Fix Your
          <span className="bg-gradient-to-r from-[#a8d97c] to-[#25baff] bg-clip-text text-transparent">
            {" "}
            Profit Leaks
          </span>
          ?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto">
          Get a FREE Plumber SEO Audit and supercharge your business.
        </p>
        <NavLink to="/contact">
          <button className="px-12 py-6 cursor-pointer rounded-full bg-[#25baff] text-white font-bold text-xl shadow-xl hover:shadow-[#a8d97c]/70 transition transform hover:-translate-y-2 hover:scale-105">
            Contact Us
          </button>
        </NavLink>
      </section>
    </div>
  );
}
