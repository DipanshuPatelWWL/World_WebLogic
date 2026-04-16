import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { FaCheckCircle } from "react-icons/fa";

import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import Img2 from "../../../assets/services/gbpOptimization/img2.avif";
import Img6 from "../../../assets/services/gbpOptimization/img6.avif";
import Img7 from "../../../assets/services/gbpOptimization/img7.avif";
import Smo from "../../../assets/services/smo/smo.avif";
import Planning from "../../../assets/services/smo/Planning.avif";
import SocialMedia from "../../../assets/services/smo/socialMedia.avif";
import ProfileOptimization from "../../../assets/services/smo/profileOptimization.avif";
import Strategy from "../../../assets/services/smo/contentStrategy.jpg";
import SocialRelation from "../../../assets/services/smo/socialRelation.avif";
import { Link } from "react-router-dom";




gsap.registerPlugin(ScrollTrigger);

const SocialMediaOptimization = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);

    const [activeFaq, setActiveFaq] = useState(0);
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


    useEffect(() => {
        if (activeFaq === 0 && faqRefs.current[0]) {
            const content = faqRefs.current[0].querySelector(".faq-content");

            gsap.set(content, {
                height: "auto",
                opacity: 1,
            });
        }
    }, []);

    const faqs = [
        {
            question: "How can social media optimization support business growth?",
            answer:
                "Social media optimization strengthens your digital presence by improving profile quality, content visibility, and audience interaction. It helps attract potential customers, increase brand recognition, and create consistent engagement that supports long-term business growth.",
        },
        {
            question: "How do I choose the right social media platform for my business?",
            answer:
                "The ideal platform depends on where your target audience spends most of their time. Understanding customer demographics, interests, and behavior helps identify the most effective channels for communication and conversions.",
        },
        {
            question: "What makes social media optimization different from search engine marketing?",
            answer:
                "Social media optimization focuses on building engagement and brand authority through social platforms, while search engine marketing targets visibility on search engines. Together, they create a strong and balanced online presence.",
        },
        {
            question: "What is the ideal posting frequency for better engagement?",
            answer:
                "A consistent posting schedule is important, but quality always matters more than quantity. A structured content calendar with regular updates ensures steady engagement and audience retention.",
        },
        {
            question: "Is professional management necessary for social media growth?",
            answer:
                "Expert management ensures strategic planning, creative content development, proper audience targeting, and continuous monitoring. This structured approach leads to better performance and measurable results.",
        },
        {
            question: "Does social media marketing deliver measurable returns?",
            answer:
                "Yes, with the right strategy, businesses can track engagement, traffic, leads, and conversions. Data-driven optimization ensures continuous improvement and higher return on investment.",
        },
        {
            question: "When can noticeable improvements be expected?",
            answer:
                "Engagement and visibility may improve within a few weeks, while stronger brand authority and consistent lead generation typically develop over a few months of strategic execution.",
        },
        {
            question: "Can social media activity strengthen brand trust?",
            answer:
                "Active communication, timely responses, and valuable content build credibility and create a trustworthy brand image among your audience.",
        },
        {
            question: "What strategies help improve overall social media performance?",
            answer:
                "Effective performance comes from audience research, profile refinement, creative content planning, trend analysis, analytics tracking, and ongoing optimization to maintain steady growth.",
        },
    ];

    const accordionData = [
        {
            title: "SMO Expertise",
            content:
                "Our SMO specialists understand the algorithms, trends, and best practices of every major social platform. We create customized strategies that improve visibility, increase engagement, and position your brand ahead of competitors.",
        },
        {
            title: "Dedicated Strategy Team",
            content:
                "Digital Web Guider provides a focused team that plans, creates, and manages your social media campaigns. From content design to performance tracking, we handle everything professionally and consistently.",
        },
        {
            title: "More Leads & Conversions",
            content:
                "With strategic content planning and targeted audience engagement, we turn followers into potential customers, helping your business generate qualified leads and increase sales.",
        },
        {
            title: "Save Time & Resources",
            content:
                "Managing social media requires time and expertise. Our team takes care of content creation, posting schedules, and audience interaction, allowing you to focus on running your business.",
        },
        {
            title: "Complete Social Media Support",
            content:
                "Beyond posting content, we offer profile optimization, reputation management, analytics tracking, and continuous performance improvement to ensure long-term social media success.",
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
                        Social Media Optimization
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}


            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Best
                            <span className="text-[#25baff]"> Social Media Optimization</span>
                        </h2>
                        <p className="text-black mt-4">
                            At <span className="font-bold">Digital Web Guider</span>, we help businesses grow their online presence through strategic Social Media Optimization. Our expert team enhances your social profiles, improves engagement, and builds strong brand visibility to generate quality traffic and leads at cost-effective pricing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Optimize and manage social media profiles",
                            "Increase organic reach and engagement",
                            "Build strong brand awareness",
                            "Strengthen customer relationships",
                            "Drive targeted website traffic",
                            "Improve content performance",
                            "Generate quality leads",
                            "Maximize social media growth",
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


            <section
                ref={whoRef}
                className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
            >
                <div className="ml-15">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                        What is Social Media
                        <span className="text-[#25baff]"> Optimization?</span>
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Social Media Optimization (SMO) is the process of improving and managing your social media profiles to increase brand awareness, engagement, and online visibility. It focuses on optimizing content, profiles, and strategies to attract the right audience, drive traffic, and build strong customer relationships.
                    </p>

                    <p className="text-gray-600 font-bold leading-relaxed">
                        Key Benefits
                    </p>
                    <div className="text-gray-700 leading-relaxed ml-8 mb-3">
                        <li>Increased brand visibility across social platforms</li>
                        <li>Higher audience engagement and interaction</li>
                        <li>Improved website traffic from social channels</li>
                        <li>Stronger brand credibility and trust</li>
                        <li>Better lead generation opportunities</li>
                    </div>

                    <p className="text-gray-600 font-bold leading-relaxed">
                        How Is It Done?
                    </p>
                    <div className="text-gray-700 leading-relaxed ml-8">
                        <li>Optimize social media profiles and business information</li>
                        <li>Create and publish engaging, high-quality content</li>
                        <li>Use relevant hashtags and keyword strategies</li>
                        <li>Maintain consistent posting schedules</li>
                        <li>Monitor performance and improve engagement strategy</li>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Smo}
                        alt="Why Choose Us"
                        className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        How Do Social Media Optimization Services
                        <span className="text-[#25baff]"> Drive More Customers?</span>
                    </h2>

                    <p className="font-semibold text-gray-500 mb-3 px-6">
                        We implement strategic Social Media Optimization techniques that help businesses grow their audience, strengthen brand authority, and convert engagement into measurable business results.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MdOnlinePrediction,
                                head: "Expand Brand Awareness",
                                text: "We enhance your social presence with optimized profiles, consistent branding, and strategic content that increases visibility across major platforms.",
                            },
                            {
                                icon: VscWorkspaceTrusted,
                                head: "Connect With the Right Audience",
                                text: "Our team identifies your ideal customers and delivers tailored content that speaks directly to their interests, improving engagement and conversion potential.",
                            },
                            {
                                icon: SlGraph,
                                head: "Boost Customer Interaction",
                                text: "Through creative posts, reels, stories, and campaigns, we encourage meaningful interactions that build trust and long-term relationships.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Generate Quality Website Traffic",
                                text: "We use compelling call-to-actions and content strategies to guide users from social media platforms directly to your website.",
                            },
                            {
                                icon: GiRelationshipBounds,
                                head: "Build a Strong Online Reputation",
                                text: "By monitoring comments, reviews, and mentions, we maintain a positive brand image and ensure professional communication with your audience.",
                            },
                            {
                                icon: VscGraphLine,
                                head: "Track Growth & Optimize Performance",
                                text: "Using performance insights and analytics, we continuously refine strategies to maximize engagement, leads, and overall ROI.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon
                                        className="text-4xl text-[#25baff] mb-6 mx-auto group-hover:text-white transition-colors duration-300"
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
                            Why Should You Hire
                            <span className="text-[#25baff]"> SMO Company?</span>
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
                                Partnering with a professional Social Media Optimization company like Digital Web Guider helps your business build a strong online presence, connect with the right audience, and achieve consistent growth. Here’s how expert SMO services can make a real impact on your brand:
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
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
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
                <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
                        Talk To Our Experts Now
                    </h2>

                    <Link to="/contact" className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
                        Contact Now
                    </Link>
                </div>
            </section>

            {/* audit services  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        6 Reasons to Choose Us as Your
                        <span className="text-[#25baff]"> Social Media Optimization Agency</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Selecting the right Social Media Optimization partner is essential for long-term business growth. At Digital Web Guider, we combine strategy, creativity, and data-driven execution to deliver measurable results that help your brand grow across social platforms.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Affordable & Flexible Plans",
                                text: "We offer budget-friendly SMO packages designed to suit businesses of all sizes. Our goal is to maximize your social media growth while ensuring cost-effective solutions tailored to your needs.",
                            },
                            {
                                head: "Customized SMO Strategies",
                                text: "Every business is unique, and so is our approach. We create personalized social media strategies based on your industry, target audience, and business goals to ensure maximum impact.",
                            },
                            {
                                head: "Certified & Experienced Professionals",
                                text: "Our team consists of skilled digital marketing experts with hands-on experience in managing successful social media campaigns. We follow industry best practices to deliver consistent performance.",
                            },
                            {
                                head: "Multi-Industry Experience",
                                text: "Digital Web Guider has worked with businesses across various industries, enabling us to understand different market demands and craft strategies that deliver results in competitive environments.",
                            },
                            {
                                head: "Complete SMO Solutions",
                                text: "From profile optimization and content creation to audience engagement and performance tracking, we provide end-to-end social media optimization services under one roof.",
                            },
                            {
                                head: "Transparent Communication & Reporting",
                                text: "We maintain clear communication and provide regular performance reports so you always know how your campaigns are performing and where improvements are being made.",
                            },
                        ].map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
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
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-600 mb-3">
                            Testimonials
                        </p>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            What Our Clients Say
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
                                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
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
            <h2 className="text-3xl text-center mt-15 md:text-4xl font-extrabold text-[#020202]">
                SMO Marketing Company
                <span className="text-[#25baff]"> Strategic Process</span>
            </h2>
            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
            <section className="bg-white py-24 px-6" ref={addSectionRef}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="gsap-item">
                            <img
                                src={Planning}
                                alt="img"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                Research & Strategic
                                <span className="text-[#25baff]"> Planning</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                At Digital Web Guider, our Social Media Optimization process begins with detailed research and strategic planning. We carefully analyze your existing social media presence, target audience behavior, competitors, and overall business objectives.

                                <br />By understanding your goals and market positioning, we develop a customized SMO strategy designed to improve engagement, strengthen brand visibility, and maximize return on investment. Our data-driven approach ensures clear objectives and a structured roadmap for long-term social media growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 px-6" ref={addSectionRef}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* left Content */}
                        <div>
                            <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                Choosing the Right
                                <span className="text-[#25baff]"> Social Media Platforms</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                An effective Social Media Optimization strategy begins with selecting the platforms that align best with your business goals and target audience. Not every platform delivers the same results, so careful evaluation is essential.

                                <br />By analyzing audience demographics, industry trends, and engagement patterns, the right platforms are identified to maximize visibility and interaction. Leveraging channels such as Facebook, Instagram, LinkedIn, and others helps strengthen customer relationships, increase brand awareness, and keep your audience informed about updates, offers, and services.
                            </p>
                        </div>

                        {/* right Image */}
                        <div className="gsap-item">
                            <img
                                src={SocialMedia}
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
                                src={ProfileOptimization}
                                alt="img"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                Profile
                                <span className="text-[#25baff]"> Optimization</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                Once goals are clearly defined, the next step is optimizing your social media profiles across relevant platforms. This ensures that every profile is complete, professionally structured, and aligned with your brand identity.

                                <br />From creating or refining business pages on platforms like Facebook, Instagram, and LinkedIn to writing compelling bios and adding strategic keywords, every element is optimized for better visibility. High-quality visuals, consistent branding, and clear contact information help improve credibility and make it easier for potential customers to discover and engage with your business.
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
                                Content Strategy
                                <span className="text-[#25baff]"> Development</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                After optimizing your profiles, the next step is developing a strong and result-driven content strategy. A well-planned content approach ensures your brand communicates effectively with your target audience and maintains consistent engagement.

                                <br />This includes identifying relevant content themes, creating engaging posts, designing impactful visuals, and maintaining a structured posting schedule. By delivering valuable and interactive content, the strategy helps increase brand awareness, encourage conversations, and build a loyal community around your business.
                            </p>
                        </div>

                        {/* right Image */}
                        <div className="gsap-item">
                            <img
                                src={Strategy}
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
                                src={SocialRelation}
                                alt="img"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                Audience Interaction &
                                <span className="text-[#25baff]"> Relationship Building</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                Creating strong connections with your audience is a key part of a successful social media strategy. Consistent interaction helps transform followers into loyal customers and brand advocates.

                                <br />This process involves actively responding to comments and messages, participating in relevant discussions, and encouraging meaningful conversations. By maintaining regular engagement and providing helpful responses, businesses can build trust, strengthen brand reputation, and foster long-term customer relationships.
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
                                Performance Tracking &
                                <span className="text-[#25baff]"> Continuous Improvement</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                Monitoring and analyzing social media performance is essential for achieving long-term success. Regular evaluation of key metrics helps measure the effectiveness of strategies and identify opportunities for growth.

                                <br />By tracking engagement rates, audience growth, reach, conversions, and content performance, data-driven insights are used to refine campaigns and improve targeting. Continuous optimization ensures better results, stronger audience connection, and steady business growth over time.
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
                                Analytics & Strategic
                                <span className="text-[#25baff]"> Reporting</span>
                                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                            </h2>

                            <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                Clear reporting and actionable insights are essential for measuring the success of social media efforts. Regular performance reports keep you informed about campaign progress and overall growth.

                                <br />These reports highlight key performance indicators such as reach, engagement, follower growth, and conversions. With detailed analysis and practical recommendations, strategies are continuously refined to improve performance and ensure you receive maximum value from your social media investment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable SMO
                            <span className="text-[#25baff]"> Plans</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible SMO management plans designed to maximize your ROI,
                            generate quality leads, and scale your business efficiently.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* SILVER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    SILVER
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-gray-300">$</span>

                                    <span className="text-5xl font-bold text-gray-300">
                                        700
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Social Media Audit & Planning</p>
                                    <p>Content Calendar Development</p>
                                    <p>Branded Post Design (Up to 6 Per Month)</p>
                                    <p>Audience Targeting & Hashtag Strategy</p>
                                    <p>Profile Optimization</p>
                                    <p>Engagement Monitoring</p>
                                    <p>Monthly Performance Report</p>
                                </div>

                            </div>


                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
                            </div>

                        </div>



                        {/* GOLD */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div className="absolute top-4 right-4 bg-yellow-800 text-white text-xs px-3 py-2 rounded-full">
                                POPULAR
                            </div>


                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    GOLD
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#ff9800]">$</span>

                                    <span className="text-5xl font-bold text-[#ff9800]">
                                        1000
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>Advanced Social Media Strategy</p>
                                    <p>In-Depth Competitor Research</p>
                                    <p>Branded Creative Designs (Up to 10 Per Month)</p>
                                    <p>Optimized Content Scheduling</p>
                                    <p>Targeted Hashtag & Keyword Planning</p>
                                    <p>Audience Engagement Management</p>
                                    <p>Detailed Analytics & Insights Report</p>
                                    <p>Complete Social Media Account Handling</p>

                                </div>

                            </div>


                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
                            </div>

                        </div>



                        {/* PREMIUM */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    PREMIUM
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#607AFE]">$</span>

                                    <span className="text-5xl font-bold text-[#607AFE]">
                                        1800
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Comprehensive Social Media Growth Strategy</p>
                                    <p>Advanced Market & Competitor Insights</p>
                                    <p>Premium Creative Designs (Up to 15 Per Month)</p>
                                    <p>Strategic Content Planning & Scheduling</p>
                                    <p>Trend-Based Hashtag & Outreach Strategy</p>
                                    <p>Active Community & Engagement Management</p>
                                    <p>Performance Optimization & Conversion Tracking</p>
                                    <p>Priority Account Support & Management</p>
                                </div>

                            </div>

                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
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
                                className="gsap-item bg-white border border-gray-200 rounded-2xl shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300"
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
                                        className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
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

export default SocialMediaOptimization;
