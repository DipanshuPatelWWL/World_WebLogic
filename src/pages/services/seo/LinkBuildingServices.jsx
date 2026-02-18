import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxComponent1 } from "react-icons/rx";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaLinkSlash } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuUnlink } from "react-icons/lu";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import Banner from "../../../assets/services/linkBuilding/banner.avif";
import Img1 from "../../../assets/services/linkBuilding/img1.avif";
import Img2 from "../../../assets/services/linkBuilding/img2.avif";
import Img3 from "../../../assets/services/linkBuilding/img3.avif";
import Img4 from "../../../assets/services/linkBuilding/img4.avif";
import Img5 from "../../../assets/services/linkBuilding/img5.avif";
import Img6 from "../../../assets/services/linkBuilding/img6.avif";
import Img7 from "../../../assets/services/linkBuilding/img7.jpg";

gsap.registerPlugin(ScrollTrigger);

const LinkBuildingServices = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);
  const faqRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

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

      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        items.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question:
        "Do you provide niche-specific and industry-relevant backlinks?",
      answer:
        "Yes. We prioritize acquiring backlinks from authoritative websites within your specific industry to ensure contextual relevance, stronger SEO impact, and higher ranking potential.",
    },
    {
      question: "Is your link-building process safe for my website?",
      answer:
        "Absolutely. We strictly follow ethical, white-hat SEO practices aligned with Google’s guidelines to ensure your website remains penalty-free and benefits from sustainable, long-term growth.",
    },
    {
      question: "How do backlinks improve brand authority and trust?",
      answer:
        "High-quality backlinks from trusted and reputable websites signal credibility to both search engines and users, strengthening your brand authority and improving organic visibility.",
    },
    {
      question: "What type of websites do you acquire backlinks from?",
      answer:
        "We focus on securing backlinks from high-authority domains (typically DA 40+ / DR 50+) that are relevant, traffic-generating, and editorially trusted within your niche.",
    },
    {
      question: "Can you identify and remove toxic or spammy backlinks?",
      answer:
        "Yes. Our comprehensive backlink audit service detects harmful or low-quality links and implements a strategic disavow process to protect and improve your website’s SEO health.",
    },
    {
      question:
        "Is link building beneficial for new or recently launched websites?",
      answer:
        "Definitely. Strategic link building helps new websites build domain authority faster, gain early search visibility, and compete more effectively in organic rankings.",
    },
    {
      question:
        "Do you offer one-time campaigns or ongoing link-building plans?",
      answer:
        "We offer both options. You can choose a targeted one-time campaign or opt for ongoing monthly link-building plans designed for consistent ranking growth and long-term SEO success.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-black">
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
          <p className="mt-6 text-lg text-gray-300">Link Building Services</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Why Quality Backlink Services Are the
            <span className="text-[#25baff]"> Foundation of SEO Growth</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            High-quality backlinks remain one of the strongest ranking factors
            in search engine algorithms—but not all links are created equal.
            Sustainable SEO success depends on earning authoritative, relevant,
            and naturally placed backlinks that signal trust and credibility to
            search engines. Low-quality or spammy links can damage your
            rankings, while strategic, white-hat link building strengthens your
            domain authority and long-term visibility.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our professional backlink services focus on securing niche-relevant,
            high-authority placements through ethical outreach, digital PR,
            content collaborations, and strategic partnerships. Every link is
            carefully evaluated for relevance, authority, and organic value to
            ensure it contributes positively to your SEO performance.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img1}
            alt="img"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            High-quality backlinks that boost rankings and authority.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Premium Link Building
            <span className="text-[#25baff]"> Services</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOutlineContentPaste,
                head: "Digital Press Release",
                text: "Our Digital PR link building services create newsworthy, high-value content that earns authoritative backlinks and brand mentions across trusted media platforms. By promoting your brand through strategic outreach and compelling stories, we secure high-authority links that strengthen your SEO, increase online visibility, and position your business as a recognized leader in your industry.",
              },
              {
                icon: FaLinkSlash,
                head: "Broken Link Recovery",
                text: "Our broken link recovery strategy focuses on identifying outdated or dead links on relevant websites and replacing them with high-quality, active links pointing to your content. We research broken backlink opportunities, create or refine valuable replacement content, and conduct targeted outreach to publishers for seamless link placement. This white-hat approach strengthens your backlink profile, restores lost link equity, and supports sustainable SEO growth—making it an essential part of our advanced link building services.",
              },
              {
                icon: HiSpeakerphone,
                head: "Sponsorship Campaigns",
                text: "Our sponsorship campaigns help you earn authoritative backlinks while expanding your brand visibility. We identify and secure relevant sponsorship opportunities with reputable organizations, events, and industry platforms that align with your niche. This strategy not only delivers high-quality, trusted backlinks but also strengthens brand credibility, increases exposure, and supports long-term SEO growth through meaningful partnerships.",
              },
              {
                icon: MdMiscellaneousServices,
                head: "Outreach Service",
                text: "Our outreach services are fully manual and relationship-driven—never automated. Our link building experts personally connect with authoritative websites, bloggers, and industry influencers within your niche to secure authentic, high-quality backlinks. This hands-on approach ensures every placement is relevant, editorially earned, and aligned with Google’s E-E-A-T principles. By focusing on credibility, authority, and trust, we strengthen your backlink profile while supporting both on-page and technical SEO performance for long-term growth.",
              },
              {
                icon: LuUnlink,
                head: "Unlinked Brand Mentions",
                text: "Your brand may already be mentioned online—but without a backlink, you’re missing valuable SEO potential. We proactively monitor the web to identify unlinked brand mentions using advanced tools and manual research. Once discovered, we conduct strategic outreach to website owners and editors to convert those mentions into relevant, high-quality backlinks—helping you reclaim lost link equity, strengthen authority, and improve search visibility.",
              },
              {
                icon: RxComponent1,
                head: "Multilingual Link Building",
                text: "Expanding into international markets? Our multilingual link building services help you build strong visibility in non-English speaking regions. We secure geo-relevant, language-specific backlinks from authoritative websites within your target country, ensuring your SEO strategy aligns with local search behavior and regional search engines. This localized approach strengthens international rankings, builds trust with global audiences, and supports sustainable cross-border growth.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                  shadow-lg shadow-[#25baff]/10
                  transition-all duration-500
                  hover:bg-[#25baff]
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto
  group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* contact us  */}

      <section
        ref={addSectionRef}
        className="relative py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
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
              className="absolute w-1.5 h-1.5 bg-[#25baff]
 rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
            Talk To Our ORM Experts Now
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Why Link Building Services Matter for
            <span className="text-[#25baff]"> Your Business</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Drive traffic, build authority, & rank higher on search engines
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Boost Your Rankings on Google",
                text: "Nearly 92% of top-ranking websites have at least one quality backlink pointing to them. Our high-quality, results-driven link building services secure authoritative and relevant backlinks that strengthen your website’s credibility, improve domain authority, and help you achieve higher rankings on Google.",
              },
              {
                head: "Stronger Link Profile",
                text: "A well-structured backlink strategy builds a natural and diverse link profile that strengthens your website’s authority and credibility. At Digital Guider, we focus on earning relevant, high-quality links from trusted sources to enhance domain authority, improve search visibility, and protect your site from penalties associated with spammy or low-quality backlinks.",
              },
              {
                head: "Increased Referral Traffic",
                text: "Digital Guider’s strategic link building campaigns secure placements on high-traffic, niche-relevant websites that drive qualified referral traffic to your business. By earning authoritative backlinks from platforms your target audience already trusts, we attract high-intent visitors, strengthen brand credibility, and increase conversion rates for sustainable growth.",
              },
              {
                head: "Better Indexing & Crawling",
                text: "Our backlink SEO services help search engines discover, crawl, and index your web pages more efficiently. By earning high-quality links from authoritative and frequently crawled websites, we accelerate content discovery, improve indexation speed, and increase the chances of your new pages ranking faster in search results.",
              },
              {
                head: "Attract Consistent Organic Traffic",
                text: "Higher rankings and stronger domain authority lead to greater search visibility—bringing a steady flow of targeted organic traffic to your website. Our strategic, quality-focused link building services help position your brand in front of the right audience at the right time, driving consistent visitors who are more likely to engage, convert, and become long-term customers.",
              },
              {
                head: "Scalable & Measurable Growth",
                text: "Our link building specialists deliver transparent, data-driven reports that allow you to clearly track performance, monitor keyword improvements, and measure return on investment. With detailed insights into backlink growth, referral traffic, and ranking progress, you can make informed decisions and continuously refine your strategy for sustainable, long-term SEO success.",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                  shadow-lg shadow-[#25baff]/10
                  transition-all duration-500
                  hover:bg-[#25baff]
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALTERNATE SECTION  */}

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Why Choose
            <span className="text-[#25baff]"> Us?</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Building Lasting Authority, Credibility & Sustainable Growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img2}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Results-Driven Link Building{" "}
                <span className="text-[#25baff]"> Strategies</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                At Digital Guider, we focus on sustainable, white-hat link
                building methods designed for long-term SEO success. Our
                approach is powered by detailed market research, competitor
                backlink analysis, strategic outreach, and high-quality content
                placement. Rather than relying on shortcuts or low-value
                tactics, we earn natural, niche-relevant backlinks that
                strengthen your website’s authority, enhance credibility, and
                consistently improve search engine rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Experienced Link Building{" "}
                <span className="text-[#25baff]"> Professionals</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our team consists of skilled SEO and outreach experts dedicated
                to securing high-quality, authoritative backlinks that deliver
                real results. With extensive experience in strategic outreach
                and digital relationship building, we connect your brand with
                reputable, niche-relevant websites. From personalized outreach
                campaigns to long-term publisher partnerships, we ensure every
                backlink earned is relevant, credible, and aligned with your
                overall SEO growth strategy.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img3}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img4}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Backlink <span className="text-[#25baff]"> Mapping</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our backlink mapping strategy aligns your link building efforts
                with your core business objectives and targeted keywords. We
                analyze your content assets, priority pages, and competitive
                landscape to identify the most valuable linking opportunities.
                By strategically planning anchor text distribution, target URLs,
                and outreach campaigns, we ensure every backlink supports your
                SEO goals. This structured approach maximizes authority flow,
                strengthens key pages, and drives measurable, long-term ranking
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                High-Quality Backlinks from{" "}
                <span className="text-[#25baff]"> Trusted Sources</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Not all backlinks deliver real impact—that’s why we focus
                exclusively on earning authoritative, niche-relevant links that
                strengthen your SEO foundation. Our strategy prioritizes
                placements on reputable, high-authority websites with strong
                domain metrics and genuine traffic. By securing credible,
                contextually relevant backlinks, we enhance your domain
                authority, improve search visibility, and build lasting trust
                with both search engines and your target audience.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img5}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img6}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Advanced Link Building Tools
                <span className="text-[#25baff]"> & Techniques</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We leverage industry-leading SEO tools, data analytics, and
                smart outreach systems to execute efficient and scalable link
                building campaigns. From competitive backlink analysis to
                prospect qualification and performance tracking, our process is
                fully optimized for accuracy and impact. Whether you’re
                launching a new website or strengthening an established domain,
                our strategic, technology-driven link building solutions are
                built to deliver sustainable authority growth and long-term SEO
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Transparent Link Building
                <span className="text-[#25baff]"> Reports</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We prioritize complete transparency in every campaign. Our
                detailed link building reports provide clear insights into each
                backlink earned, including its source, authority, relevance, and
                performance impact. With data-driven tracking of rankings,
                traffic, and link growth, you’ll always understand how your SEO
                strategy is progressing. Our reporting ensures accountability,
                measurable results, and informed decision-making at every stage
                of your growth journey.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img7}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-5">
              Our Proven & Transparent Link
              <span className="text-[#25baff]"> Building Approach</span>
            </h2>

            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              At Digital Guider, we deliver ethical, results-driven link
              building tailored to your niche and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Comprehensive Keyword Research & Search Intent Analysis",
              "In-Depth Competitor SEO & Backlink Analysis",
              "Complete Website & Backlink Profile Audit",
              "Strategic Outreach & Link Placement Research",
              "Custom Data-Driven Link Building Strategy",
              "High-Authority & Niche-Relevant Link Prospecting",
              "SEO-Optimized Content Development for Link Acquisition",
              "Ethical, White-Hat High-Quality Backlink Acquisition",
            ].map((text, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                      shadow-lg shadow-[#25baff]/10
                      transition-all duration-500
                      hover:bg-[#25baff]
                      hover:border-[#25baff]
                      hover:shadow-2xl hover:shadow-[#25baff]/40
                      hover:-translate-y-2"
              >
                <FaCheckCircle
                  className="text-[#25baff] text-2xl mt-1
                        group-hover:text-white transition-colors duration-300"
                />

                <p
                  className="text-[#020202] text-lg leading-relaxed
                      group-hover:text-white transition-colors duration-300"
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#a8d97c] py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              What Our Clients
              <span className="text-[#25baff]"> Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "Professional execution and outstanding results. Our digital growth has significantly improved.",
                name: "Kashvi Kahal",
                role: "Marketing Director",
              },
              {
                text: "Their branding and online strategy completely transformed our visibility.",
                name: "Yumlembam Sanajaoba Meitei",
                role: "Founder",
              },
              {
                text: "Reliable team with consistent performance delivery. Highly recommended.",
                name: "Paul Casper",
                role: "Operations Manager",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                shadow-lg shadow-[#25baff]/10
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
              >
                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                  <RiDoubleQuotesL />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>

                <h4 className="font-bold text-lg text-[#020202]">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
              Why Our Link Building Strategy
              <span className="text-[#25baff]"> Stands Out</span>
            </h2>
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              We focus on sustainable growth, authority-driven placements, and
              transparent SEO practices — not shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Our Approach */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-6 text-center">
                Our Approach
              </h3>

              <div className="grid gap-4">
                {[
                  "Ethical, White-Hat Link Acquisition",
                  "Manual & Personalized Outreach",
                  "Authority & Niche-Relevant Placements",
                  "Custom Strategy for Every Client",
                  "Transparent Performance Reports",
                  "Long-Term SEO Growth Focus",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 group-hover:scale-110 transition" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Agencies */}
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-6 text-center">
                Typical Agencies
              </h3>

              <div className="grid gap-4">
                {[
                  "Risky or Grey-Hat Techniques",
                  "Automated Bulk Outreach Campaigns",
                  "Irrelevant or Low-Quality Links",
                  "Generic One-Size Packages",
                  "Limited Visibility into Results",
                  "Short-Term Ranking Tactics",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <FaTimesCircle className="text-red-500 mt-1 group-hover:scale-110 transition" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
            Frequently Asked
            <span className="text-[#25baff]"> Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="gsap-item bg-white border border-gray-200 rounded-2xl
                shadow-lg shadow-[#25baff]/20
                hover:shadow-2xl hover:shadow-[#25baff]/40
                hover:border-[#25baff]
                transition-all duration-300"
              >
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                      });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prevEl = faqRefs.current[activeFaq];
                        const prevContent =
                          prevEl.querySelector(".faq-content");

                        gsap.to(prevContent, {
                          height: 0,
                          opacity: 0,
                          duration: 0.3,
                          ease: "power2.inOut",
                        });
                      }

                      gsap.to(content, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                      });

                      setActiveFaq(index);
                    }
                  }}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#020202]"
                >
                  <span
                    className={`${
                      activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
                    } transition-colors duration-300`}
                  >
                    {faq.question}
                  </span>

                  {activeFaq === index ? (
                    <FiMinus className="text-[#25baff] text-xl" />
                  ) : (
                    <FiPlus className="text-gray-500 text-xl" />
                  )}
                </button>

                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
                  <p className="pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
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

export default LinkBuildingServices;
