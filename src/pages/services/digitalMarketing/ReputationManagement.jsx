import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOnlinePrediction } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FcNegativeDynamic } from "react-icons/fc";
import { FaSearchengin } from "react-icons/fa6";
import { GiRelationshipBounds } from "react-icons/gi";
import { RxComponent1 } from "react-icons/rx";

import Banner from "../../../assets/services/mobile-app-banner.jpg";
import Img from "../../../assets/services/orm/img1.avif";
import Img2 from "../../../assets/services/orm/img2.avif";

import Monitor from "../../../assets/services/orm/monitor.avif";
import Positive from "../../../assets/services/orm/positive.jpg";
import Promote from "../../../assets/services/orm/promote.avif";
import Remove from "../../../assets/services/orm/remove.avif";
import Strategy from "../../../assets/services/orm/strategy.avif";

gsap.registerPlugin(ScrollTrigger);

const ReputationManagement = () => {
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
    question: "What is online reputation management (ORM)?",
    answer:
      "Online Reputation Management (ORM) is the practice of monitoring, influencing, and improving how your brand is perceived online. It combines SEO, public relations, and content strategies to highlight positive mentions and minimize the impact of negative ones.",
  },
  {
    question: "Why do businesses and individuals need ORM?",
    answer:
      "Most customers research a brand online before making decisions. Negative reviews or mentions can directly impact trust and sales. ORM helps maintain a positive image and builds confidence among potential clients.",
  },
  {
    question: "What does an online reputation management service include?",
    answer:
      "ORM services involve tracking brand mentions, managing reviews, improving search results, responding to feedback, and promoting positive content to strengthen your overall online presence.",
  },
  {
    question: "What are the benefits of ORM services?",
    answer:
      "ORM services protect your brand image, prevent revenue loss from negative publicity, improve credibility, and save time by professionally managing reviews, social media, and online crises.",
  },
  {
    question: "What does an ORM service typically cover?",
    answer:
      "It includes monitoring online sentiment, addressing negative feedback, promoting positive content, optimizing search results, and safeguarding your brand’s reputation across digital platforms.",
  },
  {
    question: "How long does it take to see ORM results?",
    answer:
      "Results vary depending on your current online reputation and competition. Some improvements can be seen within weeks, while more complex cases may take several months for noticeable impact.",
  },
  {
    question: "How do you choose the right ORM agency?",
    answer:
      "Look for an agency with proven experience, strong client testimonials, transparent strategies, and expertise in SEO and reputation management to effectively protect and enhance your brand image.",
  },
];

  const accordionData = [
    {
      title: "ORM Expertise",
      content:
        "Reputation management specialists understand how to strengthen and protect your brand image online. Using proven strategies, industry trends, and best practices, they create tailored ORM plans that increase positive visibility and brand trust.",
    },
    {
      title: "Dedicated Team",
      content:
        "A professional ORM agency provides a dedicated team equipped with the right tools to monitor, manage, and enhance your online presence. This includes a project manager along with SEO, SMO, ASO, and web experts to support complete reputation optimization.",
    },
    {
      title: "More Leads & Sales",
      content:
        "Improving your brand reputation increases trust, visibility, and positive reviews—attracting more qualified traffic. This leads to higher conversions, increased sales, and stronger revenue growth.",
    },
    {
      title: "Time & Resource Savings",
      content:
        "Managing online reputation requires time and expertise. Hiring an ORM agency allows you to focus on core business operations while experts handle monitoring, strategy, and brand protection to drive organic growth.",
    },
    {
      title: "Comprehensive Reputation Solutions",
      content:
        "Beyond basic ORM, we offer complete reputation enhancement services—minimizing negative content, promoting positive assets, optimizing keywords, strengthening EEAT, and improving overall brand perception to maximize traffic and ROI.",
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
            Online Reputation Management
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
            What Is Online Reputation
            <span className="text-[#25baff]"> Management?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Online Reputation Management (ORM) is the strategic process of
            shaping how your brand is perceived online. It involves monitoring
            public opinions, managing reviews, and taking proactive steps to
            protect and enhance your brand’s image across digital platforms.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            Key Benefits of Online Reputation Management
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Strengthens brand image</li>
            <li>Builds customer trust</li>
            <li>Reduces the impact of negative reviews</li>
            <li>Enhances credibility</li>
            <li>Improves overall customer satisfaction</li>
          </div>

          <p className="text-gray-600 font-bold leading-relaxed">
            How Is It Done?
          </p>
          <div className="text-gray-700 leading-relaxed ml-8">
            <li>Monitoring brand mentions and online conversations</li>
            <li>Publishing positive and value-driven content</li>
            <li>Responding promptly to reviews and feedback</li>
            <li>Actively managing social media presence</li>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            A content marketing agency drives leads through smart strategies.
            Here are six ways:
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            How Does a Content Marketing Agency Drive
            <span className="text-[#25baff]"> Lead Generation?</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MdOnlinePrediction,
                head: "Enhanced Online Presence",
                text: "Online reputation management strengthens your digital presence by building a positive and consistent brand image across multiple platforms. A strong online reputation attracts the right audience, increases customer confidence, and drives higher sales and revenue growth.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Trust and Credibility",
                text: "A strong and positive reputation fosters trust among potential customers. When your brand is seen as reliable and credible, consumers are more confident in choosing your products or services—resulting in higher conversions and sustained revenue growth.",
              },
              {
                icon: FcNegativeDynamic,
                head: "Reduce Negative Feedback",
                text: "Professional reputation management services promptly respond to negative reviews and minimize their impact. This proactive strategy safeguards your brand image and helps prevent potential revenue loss caused by harmful online sentiment.",
              },
              {
                icon: FaSearchengin,
                head: "Improved Search Engine Visibility",
                text: "A strong online reputation supports better search engine rankings, making your business more discoverable to potential customers. Greater visibility in search results drives increased website traffic and opens up more opportunities for revenue growth.",
              },
              {
                icon: GiRelationshipBounds,
                head: "Strengthened Customer Relationships",
                text: "Online reputation management focuses on building positive customer relationships by responding quickly and effectively to feedback and concerns. Strong engagement fosters trust, increases customer loyalty, and encourages repeat business—supporting long-term revenue growth.",
              },
              {
                icon: RxComponent1,
                head: "Competitive Advantage",
                text: "A strong reputation differentiates your brand from competitors within your industry. When customers view your business as trustworthy and reliable, they are more likely to choose your products or services—leading to increased conversions and improved ROI.",
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
              Why Hire an ORM
              <span className="text-[#25baff]"> Company?</span>
            </h2>
            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src={Img2}
                alt="content marketing"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* Right Accordion */}
            <div>
              <p className="text-gray-600 mb-6">
                Working with a professional ORM company helps protect and
                enhance your brand image. With expert monitoring and strategic
                management, they strengthen trust, manage online feedback, and
                support long-term business growth.
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
            6 Reasons to Partner with Us for Online
            <span className="text-[#25baff]"> Reputation Management</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Choosing the right ORM agency is essential for brand growth. Here’s
            why businesses rely on us to strengthen their online reputation.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                head: "Customized ORM Strategy",
                text: "Every business is unique, which is why we provide tailored reputation management solutions. Using proven and personalized ORM strategies, we enhance your brand image, increase visibility, and drive targeted traffic and leads aligned with your specific goals and audience.",
              },
              {
                head: "Affordable ORM Plans",
                text: "Our cost-effective ORM services help strengthen your brand’s online presence without exceeding your budget. We offer flexible packages designed for businesses of all sizes, making professional reputation management accessible and results-driven.",
              },
              {
                head: "Transparent Communication",
                text: "We prioritize clear and honest communication with every client. Your dedicated reputation manager keeps you informed at every stage—explaining our strategies, progress, and next steps—so you always know how your brand image is being strengthened.",
              },
              {
                head: "Content Optimization Focus",
                text: "Content optimization and strategic amplification are key to an effective ORM strategy. We create search-friendly, high-quality content and promote positive messaging across relevant platforms to enhance your brand image. At the same time, we work to minimize negative visibility and strengthen your overall online reputation.",
              },
              {
                head: "Tools and Technologies",
                text: "We utilize advanced tools and technologies specifically designed for reputation management. From in-depth keyword research to powerful analytics platforms, we apply the latest solutions to refine strategies, track performance, and deliver maximum results for your brand.",
              },
              {
                head: "High Client Satisfaction",
                text: "Client satisfaction is at the heart of our reputation management services. With a retention rate of over 90%, we value long-term partnerships built on trust and consistent results. Our client testimonials reflect the performance-driven approach and dedication we bring to every project.",
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
                src={Strategy}
                alt="research"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Analysis &<span className="text-[#25baff]"> Strategy</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                We begin by thoroughly evaluating your current digital
                reputation and identifying areas for improvement. Based on these
                insights, we create a customized and cost-effective plan
                designed to strengthen your online presence. Our reputation
                management experts work closely with you to understand your
                specific goals and develop a results-driven strategy tailored to
                your brand. With a smooth and structured onboarding process, we
                ensure a fast and effective start toward enhancing and
                protecting your online image.
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
                Monitoring &<span className="text-[#25baff]"> Dashboard</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our online reputation management team uses advanced analytics
                tools and AI-powered monitoring systems to track online
                conversations about your brand. We continuously measure
                mentions, reviews, and customer sentiment across digital
                platforms to maintain a clear view of your reputation. By
                staying alert to emerging trends and potential issues, our ORM
                experts can take timely action and make data-driven decisions to
                protect and strengthen your brand image.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Monitor}
                alt="monitoring"
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
                src={Remove}
                alt="negative content"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Remove Negative <span className="text-[#25baff]"> Content</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Our ORM specialists take proactive steps to address harmful or
                misleading content about your brand. Whenever possible, we work
                toward getting negative content removed. If removal isn’t
                feasible, we apply strategic SEO techniques to push positive,
                high-quality content higher in search results. This approach
                ensures that when people search for your brand online, they
                encounter accurate, favorable information that reflects your
                true value—helping boost brand awareness, attract qualified
                leads, and increase sales.
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
                Create Positive <span className="text-[#25baff]"> Content</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Developing fresh, search-optimized, and easy-to-read content is
                essential for strengthening your brand reputation. Content
                creation is one of the most important aspects of an effective
                ORM strategy, as it shapes how your brand appears online. We
                publish high-quality content on your owned platforms as well as
                reputable third-party websites. Throughout your campaign, our
                reputation management experts produce engaging articles, blog
                posts, brand stories, biographies, and guest posts designed to
                improve visibility in search results and build a strong,
                positive online presence.
              </p>
            </div>

            {/* right Image */}
            <div className="gsap-item">
              <img
                src={Positive}
                alt="Positive content"
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
                src={Promote}
                alt="promote content"
                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                Promote
                <span className="text-[#25baff]"> Content</span>
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
              </h2>

              <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                Content promotion plays a vital role in effective brand
                reputation management. We leverage a mix of owned, earned, and
                paid media strategies to expand your reach and boost brand
                awareness. Our ORM team applies modern promotional techniques to
                connect your brand with a wider, targeted audience. By
                strategically amplifying positive and neutral content, we help
                shape search results that reflect your brand’s strengths and
                achievements.
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

export default ReputationManagement;
