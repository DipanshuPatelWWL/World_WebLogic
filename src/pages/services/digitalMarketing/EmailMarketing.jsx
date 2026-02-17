import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GiDiscussion } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { MdOutlineAutoGraph } from "react-icons/md";

import Banner from "../../../assets/services/mobile-app-banner.jpg";
import Img from "../../../assets/services/emailMarketing/img.avif";
import ContentDesign from "../../../assets/services/emailMarketing/content-design.avif";
import CRM from "../../../assets/services/emailMarketing/crm.avif";
import EmailCompaign from "../../../assets/services/emailMarketing/email-compaign.avif";
import EmailManage from "../../../assets/services/emailMarketing/email-manage.jpg";
import Plan from "../../../assets/services/emailMarketing/plan-strategy.avif";
import Testing from "../../../assets/services/emailMarketing/testing.avif";



gsap.registerPlugin(ScrollTrigger);

const EmailMarketing = () => {
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
    question: "Is email marketing still effective?",
    answer:
      "Absolutely. Email marketing remains one of the highest ROI digital channels, allowing businesses to communicate directly with their audience in a personalized and measurable way.",
  },
  {
    question: "How can I build an email subscriber list?",
    answer:
      "You can grow your subscriber list by offering valuable incentives such as eBooks, discounts, webinars, or exclusive content, combined with optimized sign-up forms and landing pages.",
  },
  {
    question: "What types of emails should I send to my subscribers?",
    answer:
      "Effective email types include newsletters, promotional campaigns, product updates, event invitations, transactional emails, and personalized recommendations based on user behavior.",
  },
  {
    question: "What's the difference between a newsletter and a promotional email?",
    answer:
      "Newsletters focus on delivering informative, value-driven content regularly, while promotional emails are designed to drive sales by highlighting specific offers, products, or services.",
  },
  {
    question: "How frequently should we send marketing emails?",
    answer:
      "Email frequency depends on your audience and goals, but maintaining consistency is crucial. Testing different schedules helps determine the ideal timing for engagement.",
  },
  {
    question: "What's better: HTML or plain-text emails?",
    answer:
      "HTML emails offer visual appeal and branding opportunities, while plain-text emails feel more personal and can sometimes achieve higher engagement. The best choice depends on your campaign goals.",
  },
  {
    question: "What are the best practices for email subject lines?",
    answer:
      "Subject lines should be clear, concise, and compelling. Personalization, urgency, and relevance to the email content can significantly improve open rates.",
  },
];


  const accordionData = [
    {
      title: "Content Expertise",
      content:
        "A reliable content strategy agency provides skilled writers, designers, and SEO specialists experienced in creating and distributing high-performing content. Their industry knowledge helps implement proven strategies that deliver measurable results.",
    },
    {
      title: "Scalability & Flexibility",
      content:
        "A professional content marketing firm offers flexible, scalable solutions tailored to your goals and budget. They can easily adjust strategies as your business grows or market needs change.",
    },
    {
      title: "Time & Resource Savings",
      content:
        "Outsourcing to an agency saves internal time and resources, allowing your team to focus on core operations while experts manage content creation, distribution, and performance tracking.",
    },
    {
      title: "Access to Tools & Technology",
      content:
        "Content marketing agencies use advanced tools and software to streamline workflows, monitor performance, and optimize strategies—helping improve results and ROI efficiently.",
    },
    {
      title: "Fresh Perspectives & Creativity",
      content:
        "An agency brings new ideas and creative direction to your strategy, helping your brand stand out while uncovering growth opportunities that may be missed internally.",
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
          <p className="mt-6 text-lg text-gray-300">Email Marketing</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="gsap-item">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            What is Email
            <span className="text-[#25baff]"> Marketing?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Email marketing is a highly cost-effective and results-driven
            digital marketing strategy that uses email campaigns to promote
            products, share updates, nurture prospects, and drive conversions.
            It allows businesses to communicate directly with their audience in
            a personalized and measurable way.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Through well-planned and targeted email marketing strategies, you
            can segment your audience, deliver relevant and customized messages,
            increase website traffic, and guide potential customers through the
            buying journey. Beyond generating sales, email marketing also helps
            build long-term relationships, strengthen brand loyalty, and create
            consistent engagement that supports sustainable business growth.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Explore how email marketing strategies can accelerate your business
            growth:
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Why Is Email Marketing Important for
            <span className="text-[#25baff]"> Your Business?</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Reach the Right Audience",
                text: "Through consistent email marketing campaigns, you can connect with the right audience using personalized messages tailored to their preferences and behavior. By delivering content directly to their inbox, you effectively promote your products and services while expanding your reach and engagement.",
              },
              {
                head: "Build Relationships",
                text: "Email marketing goes beyond promotions — it’s about creating meaningful connections with your audience. Similar to a local coffee shop offering a birthday discount to make customers feel valued, personalized emails add a human touch that strengthens trust and long-term customer relationships.",
              },
              {
                head: "Improved Search Rankings",
                text: "Strategic email campaigns encourage users to visit your website, increasing traffic and engagement while lowering bounce rates. This improved user activity signals value and relevance to search engines, helping boost your rankings and strengthen overall brand credibility.",
              },
              {
                head: "More Website Visitors",
                text: "Well-planned email campaigns do more than nurture subscribers — they bring qualified traffic directly to your website. By promoting product pages, special offers, and valuable content, email marketing helps generate leads, increase conversions, and strengthen your online presence.",
              },
              {
                head: "Reconnecting with Customers",
                text: "A strategic email campaign helps convert prospects into repeat buyers. With automated email workflows, you can re-engage inactive customers through targeted messages such as exclusive member offers, personalized recommendations, or feedback requests like “Rate Your Recent Purchase.”",
              },
              {
                head: "High-Value Campaigns",
                text: "Email marketing delivers strong returns with minimal investment, making it a cost-effective growth tool. By targeting the right audience with relevant and valuable content, your business can drive higher sales, improve ROI, and maintain a competitive edge in the market.",
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
        <div className="text-center mb-25">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3 mt-2">
            Elevate your brand with expert email marketing — from strategy to
            performance optimization:
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Email Marketing
            <span className="text-[#25baff]"> Services</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="gsap-item">
              <img
                src={Plan}
                alt="research"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Campaign Strategy
                <span className="text-[#25baff]"> & Planning</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-4">
                Our email marketing specialists carefully analyze your
                audience’s interests, behaviors, demographics, and engagement
                patterns to create precise audience segments. This allows us to
                craft highly personalized and relevant messages that resonate
                with each group and improve overall campaign effectiveness.
              </p>
              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Following in-depth research and competitive analysis, our
                experts design customized email marketing strategies aligned
                with your business goals. From campaign objectives and content
                planning to scheduling and automation workflows, we ensure every
                element is structured to deliver measurable results, stronger
                engagement, and higher conversions.
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
                Email List Building{" "}
                <span className="text-[#25baff]"> & Management</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-4">
                We grow your subscriber base using optimized sign-up forms,
                landing pages, and attractive lead magnets like webinars,
                discounts, and downloadable resources to attract the right
                audience.
              </p>
              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We also keep your email list clean and updated by removing
                inactive contacts and re-engaging dormant users. This improves
                deliverability, boosts open rates, and ensures your emails reach
                the inbox instead of the spam folder.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={EmailManage}
                alt="content creation"
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
                src={ContentDesign}
                alt="quality assurance"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Content & <span className="text-[#25baff]"> Design</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our email marketing specialists craft compelling subject lines
                and persuasive content that encourage recipients to open and
                engage with your emails. With clear messaging and strong
                calls-to-action, we effectively showcase your key products or
                services to drive clicks and conversions.
              </p>
              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We also design visually appealing email templates that are fully
                responsive across desktops, tablets, and smartphones. Using
                clean layouts, optimized visuals, and prominent CTA buttons, we
                enhance readability, improve user experience, and motivate
                subscribers to take action.
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
                Automation Email{" "}
                <span className="text-[#25baff]"> Campaigns</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-4">
                Our email marketing experts build automated workflows that
                nurture leads based on their actions and interactions. Whether
                someone subscribes to your newsletter, downloads a guide, or
                abandons a cart, we trigger timely, relevant emails to keep them
                engaged and moving through the sales funnel.
              </p>
              <p className="gsap-item text-gray-600 leading-relaxed mb-4">
                From welcome series and follow-up sequences to promotional and
                transactional emails, we create personalized automation journeys
                tailored to user behavior, preferences, and engagement
                history—ensuring consistent communication and higher conversion
                rates.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={EmailCompaign}
                alt="client collaboration"
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
                src={Testing}
                alt="testing"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                A/B
                <span className="text-[#25baff]"> Testing</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-4">
                We perform A/B testing to identify what delivers the best
                results in your email campaigns. This includes testing different
                subject lines, call-to-action buttons, layouts, and content
                variations to determine the most effective approach for higher
                engagement and conversions.
              </p>
              <p className="gsap-item text-gray-600 leading-relaxed mb-4">
                Our email marketing team closely tracks key performance metrics
                such as open rates, click-through rates, conversion rates, and
                unsubscribe rates. Using these insights, we continuously refine
                and optimize your campaigns to ensure consistent improvement and
                measurable results.
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
                Integration with{" "}
                <span className="text-[#25baff]"> CRM Tools</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We seamlessly integrate your CRM system with leading email
                marketing platforms such as HubSpot, Mailchimp, ActiveCampaign,
                and other advanced automation tools. This integration ensures
                smooth data synchronization between your customer database and
                email campaigns, eliminating manual work and reducing errors.
              </p>
              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                By connecting your CRM with powerful email software, we enable
                precise audience segmentation based on customer behavior,
                purchase history, engagement patterns, and demographics. This
                allows us to build highly targeted and automated email workflows
                that deliver personalized experiences, improve campaign
                efficiency, and drive stronger marketing results.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={CRM}
                alt="crm"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
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
           Claim Your Free Email Marketing Strategy Session Today!
          </h2>

          <button className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
            Contact Now
          </button>
        </div>
      </section>


      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
           Here’s an overview of how our email marketing agency executes successful campaigns:
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
           Our Email Marketing 
            <span className="text-[#25baff]"> Process</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GiDiscussion,
                head: "Understanding Your Goals & Strategy",
                text: "Our email marketing process starts with comprehensive research to gain a clear understanding of your business, target audience, and overall marketing objectives. By analyzing industry trends and customer behavior, we establish well-defined goals and develop customized strategies designed to align with your vision and drive measurable results.",
              },
              {
                icon: RiBuilding2Fill,
                head: "Building & Segmenting Your Email List",
                text: "Once your goals are clearly defined, we segment your audience based on demographics, interests, behavior, and engagement history to deliver highly personalized messaging. Using strategic list-building techniques, we develop a targeted email database aligned with your campaign objectives.",
              },
              {
                icon: MdContentPaste,
                head: "Design & Content Creation",
                text: "Our email marketing experts craft attention-grabbing subject lines, persuasive copy, and visually engaging designs to ensure every email captures interest. We develop clean, mobile-responsive templates that enhance readability and deliver a consistent, impactful experience across all devices.",
              },
              {
                icon: HiMiniRocketLaunch,
                head: "Launching Your Email Campaigns",
                text: "We deploy your email campaigns with precise scheduling to reach your audience at the right time. Using advanced automation tools, we implement personalized workflows across multiple platforms to ensure seamless execution.",
              },
              {
                icon: MdOutlineAutoGraph,
                head: "Tracking Results & Improving Performance",
                text: "We prioritize effective email marketing management by continuously monitoring key metrics such as open rates, click-through rates, and conversions. Detailed reporting allows us to measure performance and identify areas for improvement.",
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

export default EmailMarketing;
