import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaSearchengin } from "react-icons/fa6";
import { GiRelationshipBounds } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { VscGraphLine } from "react-icons/vsc";

import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import Img1 from "../../../assets/services/gbpOptimization/img1.avif";
import Img2 from "../../../assets/services/gbpOptimization/img2.avif";
import Img3 from "../../../assets/services/gbpOptimization/img3.avif";
import Img4 from "../../../assets/services/gbpOptimization/img4.avif";
import Img5 from "../../../assets/services/gbpOptimization/img5.avif";
import Img6 from "../../../assets/services/gbpOptimization/img6.avif";
import Img7 from "../../../assets/services/gbpOptimization/img7.avif";




gsap.registerPlugin(ScrollTrigger);

const GbpOptimization = () => {
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
      question: "What is Google Business Profile Optimization?",
      answer:
        "Google Business Profile optimization focuses on improving your listing to increase local search visibility. It includes updating business details, adding visuals, managing reviews, and using relevant keywords to strengthen local presence.",
    },
    {
      question: "Why is optimizing my Google Business Profile important?",
      answer:
        "An optimized profile improves local rankings, boosts customer engagement, and strengthens credibility—resulting in more website visits, calls, and revenue opportunities.",
    },
    {
      question: "How can I optimize my Google Business Profile?",
      answer:
        "Keep your business information accurate and complete, upload high-quality images, respond to customer reviews, post regular updates, and integrate location-based keywords strategically.",
    },
    {
      question: "How should I optimize photos on my profile?",
      answer:
        "Use clear, high-resolution images that reflect your brand. Upload a variety of photos, ensure proper formatting, and include keyword-friendly file names to enhance visibility.",
    },
    {
      question: "When will I start seeing results?",
      answer:
        "Most businesses notice improvements within 30 to 90 days, including better local rankings, increased profile views, and more customer inquiries.",
    },
    {
      question: "What do your GMB services include?",
      answer:
        "Our services cover profile setup, data accuracy, keyword optimization, visual content updates, review management, regular posts, and detailed performance tracking.",
    },
    {
      question: "How can I improve mobile local SEO?",
      answer:
        "Ensure your website is mobile-responsive, maintain consistent NAP details, optimize your Google Business Profile, and use location-specific keywords to enhance mobile search visibility.",
    },
  ];

  const accordionData = [
    {
      title: "Expertise and Experience",
      content:
        "GMB optimization agencies bring in-depth knowledge and hands-on experience in enhancing business profiles. By staying updated with the latest updates, algorithms, and best practices, they implement proven strategies that maximize your local visibility and performance.",
    },
    {
      title: "Time Savings",
      content:
        "Optimizing and maintaining a Google Business Profile requires consistent effort and attention. By entrusting this responsibility to an agency, you can focus on core business operations while experts ensure your profile remains updated, optimized, and performing at its best.",
    },
    {
      title: "Enhanced Local SEO",
      content:
        "A GMB optimization agency applies proven local SEO strategies to strengthen your search presence. From targeted keyword optimization and accurate business details to leveraging key profile features, these tactics improve local rankings, increase visibility, and drive more qualified traffic to your business.",
    },
    {
      title: "Consistent Engagement and Updates",
      content:
        "Maintaining an active Google Business Profile requires regular interaction and fresh content. Agencies keep your profile updated with posts, images, offers, and timely review responses—ensuring ongoing engagement and a strong local presence.",
    },
    {
      title: "Performance Monitoring and Reporting",
      content:
        "A GMB optimization agency tracks key metrics and delivers comprehensive performance reports. These insights reveal how your profile is performing, highlight areas for improvement, and enable data-driven decisions to strengthen your local visibility and overall online presence.",
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
          <p className="mt-6 text-lg text-gray-300">
            Google Business Profile Optimization
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Google My Business
            <span className="text-[#25baff]"> Optimization?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Google My Business (GMB) Optimization is the process of enhancing
            and managing your business profile to improve visibility in local
            search results. It ensures your listing is accurate, complete, and
            engaging—helping attract nearby customers, strengthen local
            rankings, and provide clear information to potential clients.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Key Benefits
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Greater visibility among local customers</li>
            <li>Direct interaction through messages and reviews</li>
            <li>Increased trust with accurate business details</li>
            <li>Higher chances of converting searchers into customers</li>
            <li>Valuable insights into customer behavior</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How Is It Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Maintain accurate NAP (Name, Address, Phone) information</li>
            <li>Upload high-quality photos and updates</li>
            <li>Respond actively to customer reviews</li>
            <li>Post regular updates, offers, and events</li>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img1}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            How Can GMB Optimization Services Help
            <span className="text-[#25baff]"> Increase Your Revenue?</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            GMB optimization services enhance your local visibility and attract
            more potential customers through an optimized Google Business
            Profile—ultimately driving higher revenue. Here’s how:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOnlinePrediction,
                head: "Greater Local Search Visibility",
                text: "Optimizing your Google Business Profile improves your chances of appearing in local search results and map listings. Higher visibility means more nearby customers can find your business when searching for relevant products or services, leading to increased inquiries and foot traffic.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Higher Customer Engagement",
                text: "GMB optimization encourages active interaction through reviews, Q&A sections, updates, and posts. Consistent engagement builds credibility, strengthens customer trust, and influences potential buyers to choose your business—resulting in more conversions and sales.",
              },
              {
                icon: SlGraph,
                head: "Stronger Online Reputation",
                text: "GMB experts actively manage customer reviews by promoting positive feedback and responding professionally to concerns. A well-maintained, highly rated profile builds trust and credibility—encouraging more customers to choose and visit your business.",
              },
              {
                icon: FaSearchengin,
                head: "Accurate & Up-to-Date Business Details",
                text: "Keeping your business information correct and consistently updated prevents confusion and lost opportunities. Clear details such as address, hours, and contact information make it easier for customers to reach or visit you—resulting in increased foot traffic and higher sales.",
              },
              {
                icon: GiRelationshipBounds,
                head: "Compelling Visual Content",
                text: "Uploading professional photos and engaging videos enhances the appeal of your Google Business Profile. Strong visuals capture attention, build credibility, and influence customer decisions—encouraging more visits and increasing sales opportunities.",
              },
              {
                icon: VscGraphLine,
                head: "Data-Driven Decisions",
                text: "GMB optimization services deliver actionable insights into customer behavior, search queries, and profile performance. These analytics help businesses refine marketing strategies and improve operations—resulting in smarter decisions and stronger revenue growth.",
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

      {/* Why Hire orm Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Why Hire a Google My Business
              <span className="text-[#25baff]"> Optimization Agency?</span>
            </h2>
            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src={Img2}
                alt="img"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* Right Accordion */}
            <div>
              <p className="text-gray-600 mb-6">
                A professional GMB agency improves your local visibility,
                manages your profile effectively, and helps attract more
                customers—boosting engagement and revenue growth.
              </p>

              <div className="space-y-4">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex justify-between items-center p-5 bg-gray-50 font-semibold text-[#020202]"
                    >
                      {item.title}
                      <span className="text-[#25baff] text-xl">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === index
                          ? "max-h-40 p-5 bg-white"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            Talk To Our Experts Now
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
            6 Reasons to Choose Us as Your GMB
            <span className="text-[#25baff]"> Optimization Partner</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 p-5">
            At Digital WebGuider, we optimize Google Business Profiles to boost
            your local visibility. Here are six reasons to choose us for your
            GMB optimization:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Proven Results",
                text: "We have successfully optimized Google Business Profiles for businesses across various industries. Our clients experience stronger local rankings, increased visibility, and higher customer engagement.",
              },
              {
                head: "Customized Strategies",
                text: "Every business has unique goals and audiences. That’s why we create tailored GMB optimization plans aligned with your industry, target market, and objectives—ensuring maximum impact and measurable results.",
              },
              {
                head: "Comprehensive Services",
                text: "We provide end-to-end GMB optimization—from profile setup and accurate business details to photo updates and review management. Our team handles every aspect of your profile to keep it fully optimized, active, and consistently performing.",
              },
              {
                head: "Expert Team",
                text: "Our skilled professionals have deep expertise in local SEO and Google Business Profile optimization. By staying updated with industry trends and best practices, we deliver reliable strategies that drive strong local results.",
              },
              {
                head: "Transparent Reporting",
                text: "We believe in complete transparency. Our detailed reports highlight your profile’s performance, including local rankings, customer engagement, and growth opportunities—so you always understand the results and impact of our efforts.",
              },
              {
                head: "Dedicated Support",
                text: "We are committed to delivering outstanding client support. Our dedicated team is readily available to answer questions, offer expert guidance, and resolve concerns—ensuring a seamless and successful GMB optimization experience.",
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

      {/* ALTERNATE SECTION  */}

      <section className="bg-white py-24 px-6" ref={addSectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Img3}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Share Your Business{" "}
                <span className="text-[#25baff]"> Information</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Start by providing your essential business details through our
                easy-to-complete Google Business Profile optimization form. This
                step allows us to gather accurate information such as your
                location, services, contact details, and operating hours to
                ensure your profile reflects your brand correctly. The process
                takes only a few minutes but plays a crucial role in building a
                strong foundation for your GMB optimization. With complete and
                precise information, we can enhance your visibility, improve
                local search performance, and position your business effectively
                in front of potential customers.
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
                Comprehensive Listing{" "}
                <span className="text-[#25baff]"> Audit</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Next, we conduct a detailed audit of your Google Business
                Profile using a structured, experience-backed approach. Our team
                carefully evaluates every element of your listing—from business
                information and categories to visuals, reviews, and keyword
                usage. This in-depth review provides a clear overview of your
                current profile performance along with a comprehensive checklist
                of improvements. You’ll gain actionable insights that highlight
                gaps, optimization opportunities, and steps needed to strengthen
                your local visibility.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img4}
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
                src={Img5}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Develop a Customized{" "}
                <span className="text-[#25baff]"> Action Plan</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Once the audit is complete, your dedicated account manager
                creates a tailored strategy to strengthen and optimize your
                Google Business Profile. This action plan outlines clear steps,
                targeted improvements, and proven tactics designed to boost
                visibility and engagement. After you review and approve the
                proposed strategy, we move forward with the implementation phase
                to enhance your profile and drive measurable local results.
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
                Profile Enhancement and{" "}
                <span className="text-[#25baff]"> Optimization</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                After the action plan is approved, your account manager begins
                implementing the recommended updates to fully optimize your
                Google Business Profile. This includes refining business
                details, enhancing descriptions, uploading high-quality images,
                and strategically integrating relevant keywords. We also update
                your optimization checklist to reflect every improvement made,
                ensuring complete transparency and keeping you informed
                throughout the process.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Img6}
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
                src={Img7}
                alt="img"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Performance Monitoring and
                <span className="text-[#25baff]"> Reporting</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Once your Google Business Profile is fully optimized, we
                continuously monitor its performance to track measurable growth.
                Within 30 to 90 days, you can expect improvements such as
                stronger local rankings, increased website visits, more customer
                inquiries, and higher engagement. Our ongoing reporting keeps
                you informed of progress, ensuring your profile continues to
                generate visibility, leads, and sustainable revenue growth.
              </p>
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

export default GbpOptimization;
