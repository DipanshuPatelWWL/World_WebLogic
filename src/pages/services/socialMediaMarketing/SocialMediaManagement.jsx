import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TiSocialDribbble } from "react-icons/ti";
import { LuBuilding2 } from "react-icons/lu";
import { FaSearchengin } from "react-icons/fa6";
import { GiRelationshipBounds } from "react-icons/gi";
import { VscGraphLine } from "react-icons/vsc";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import Smm from "../../../assets/services/smo/smm.avif";



gsap.registerPlugin(ScrollTrigger);

const SocialMediaManagement = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);

    const [activeFaq, setActiveFaq] = useState(0);
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
            question: "Do social media algorithms work against my business?",
            answer: "No, algorithms prioritize valuable and engaging content. When your posts encourage interaction and provide value, visibility naturally improves over time.",
        },
        {
            question: "What happens if I stop posting consistently?",
            answer: "A lack of regular posting can reduce audience engagement and brand recall. Staying active helps maintain momentum and keeps your business visible to followers.",
        },
        {
            question: "Is organic growth possible without running ads?",
            answer: "Yes, strong content strategies and consistent engagement can drive organic growth. However, paid promotions can speed up reach and audience expansion.",
        },
        {
            question: "Does posting time impact engagement?",
            answer: "Posting during peak audience activity increases the chances of higher engagement. Reviewing analytics helps identify the best timing for your audience.",
        },
        {
            question: "Are hashtags still effective in social media marketing?",
            answer: "When used strategically, hashtags improve content discoverability and help connect with relevant audiences.",
        },
        {
            question: "Can older content be reused?",
            answer: "Yes, repurposing high-performing content with updated visuals or messaging can maximize its value and extend reach.",
        },
        {
            question: "Should negative comments be addressed publicly?",
            answer: "Responding professionally to negative feedback demonstrates transparency and builds trust with your audience.",
        },
        {
            question: "Is it possible to manage social media without being online all day?",
            answer: "With proper scheduling tools and a structured strategy, social media can be managed efficiently without constant monitoring.",
        },
        {
            question: "Why do some personal posts get more engagement than business posts?",
            answer: "Personal content often feels more relatable. Blending authenticity with brand messaging can help improve engagement for business accounts.",
        },
    ];

    const steps = [
        {
            title: "Understanding Goals & Audience",
            desc: "We research your business, competitors, and audience demographics to define clear objectives and KPIs."
        },
        {
            title: "Strategy Development & Audit",
            desc: "We analyze current performance and build data-driven strategies aligned with your business goals."
        },
        {
            title: "Targeting Right Channels",
            desc: "We identify the most effective platforms and balance organic and paid strategies for maximum reach."
        },
        {
            title: "Content Creation & Scheduling",
            desc: "We create engaging posts, optimize captions, and schedule content with your approval."
        },
        {
            title: "Community Management",
            desc: "We respond to comments, messages, and manage feedback to build strong relationships."
        },
        {
            title: "Paid Advertising",
            desc: "We design targeted campaigns with audience segmentation and A/B testing."
        },
        {
            title: "Performance Monitoring",
            desc: "We track engagement, reach, and conversions with detailed reporting."
        },
        {
            title: "Continuous Optimization",
            desc: "We refine strategies, test new formats, and stay updated with algorithm changes."
        }
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
                        Social Media Management
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}


            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Professional
                            <span className="text-[#25baff]"> Social Media Management</span> Solutions
                        </h2>
                        <p className="text-black mt-4">
                            Strengthen your brand presence and accelerate business growth with strategic social media management. Our tailored solutions focus on building meaningful engagement and delivering measurable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Develop high-quality, engaging content",
                            "Build strong audience relationships",
                            "Expand brand visibility across platforms",
                            "Increase targeted website visits",
                            "Drive targeted website traffic",
                            "Generate consistent leads and inquiries",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                                shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:border-[#25baff] hover:shadow-2xl hover:shadow-[#25baff]/40 hover:-translate-y-2"
                            >
                                <FaCheckCircle
                                    className="text-[#25baff] text-2xl mt-1 group-hover:text-white transition-colors duration-300"
                                />

                                <p className="text-[#020202] text-lg leading-relaxed group-hover:text-white transition-colors duration-300"
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
                className="relative py-20 px-6 overflow-hidden bg-[#020617]"
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] z-0"></div>

                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full z-0"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            What is Social Media
                            <span className="text-[#25baff]">Management?</span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            Social media management involves planning, creating, publishing,
                            and monitoring content across platforms like Facebook, Instagram,
                            and LinkedIn to maintain a strong online presence.
                            <br /><br />
                            A well-structured strategy improves visibility, builds customer
                            relationships, and drives consistent business growth.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Smm}
                            alt="Social Media Management"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        The Importance of
                        <span className="text-[#25baff]"> Social Media Management</span> for Business Growth
                    </h2>

                    <p className="font-semibold text-gray-500 mb-3 px-6">
                        Discover how strategic social media management strengthens your online presence, builds customer relationships, and drives measurable business results.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TiSocialDribbble,
                                head: "Stronger Online Presence",
                                text: "Consistent, high-quality content keeps your brand active and visible across social platforms. Regular updates ensure your business stays relevant and top-of-mind for your target audience.",
                            },
                            {
                                icon: LuBuilding2,
                                head: "Meaningful Audience Interaction",
                                text: "Active engagement through comments, messages, and discussions builds stronger connections with your audience. This interaction increases trust and enhances brand credibility.",
                            },
                            {
                                icon: GiRelationshipBounds,
                                head: "Long-Term Customer Relationships",
                                text: "Monitoring feedback, responding promptly, and maintaining transparent communication helps build loyalty and strengthens customer relationships over time.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Increased Website Visitors",
                                text: "Strategic content planning and compelling calls-to-action guide users from social platforms to your website, increasing traffic and potential customer inquiries.",
                            },
                            {
                                icon: VscGraphLine,
                                head: "Qualified Lead Growth",
                                text: "Well-planned campaigns and audience targeting attract users who are genuinely interested in your services, improving lead quality and business opportunities.",
                            },
                            {
                                icon: SiGooglecampaignmanager360,
                                head: "Higher Conversions & Better ROI",
                                text: "By aligning content strategies with business objectives and tracking performance metrics, social media management contributes to improved conversion rates and stronger returns on investment.",
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


            {/* contact us  */}

            <section
                ref={addSectionRef}
                className="relative py-24 px-6"
                style={{ backgroundColor: "#020202" }}
            >
                <div className="absolute inset-0  bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
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
                        Our Social Media
                        <span className="text-[#25baff]"> Management Services</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Social media plays a vital role in modern business success. A strategic approach to content, engagement, and performance tracking helps businesses connect with the right audience, build trust, and achieve measurable growth.
                        <br />Explore our comprehensive social media management solutions designed to elevate your online presence:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Strategic Social Media Optimization",
                                text: "Customized optimization strategies are developed based on your industry, audience behavior, and business objectives. Through research, competitor analysis, and trend monitoring, a focused plan is created to increase reach, engagement, and overall brand visibility.",
                            },
                            {
                                head: "Creative Content Development",
                                text: "High-quality posts, graphics, videos, and carousel content are crafted to capture attention and deliver the right message. Consistent and engaging content strengthens brand identity and encourages meaningful interaction.",
                            },
                            {
                                head: "Audience Engagement & Community Growth",
                                text: "Active communication with followers builds stronger relationships and long-term loyalty. Responding to comments and messages, initiating conversations, and maintaining interaction helps create a vibrant online community.",
                            },
                            {
                                head: "Performance-Driven Social Advertising",
                                text: "Targeted advertising campaigns across major platforms increase brand exposure and drive qualified traffic. Strategic ad planning helps generate leads, boost conversions, and maximize marketing returns.",
                            },
                            {
                                head: "Data Analytics & Performance Insights",
                                text: "Advanced analytics tracking measures engagement, reach, and conversion metrics. Continuous monitoring ensures campaigns are refined for better performance and smarter decision-making.",
                            },
                            {
                                head: "Brand Reputation Management",
                                text: "Online reputation is carefully monitored to maintain a positive brand image. Prompt responses to feedback and proactive management strategies help build credibility and customer trust.",
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


            {/* consultation */}

            <section
                ref={addSectionRef}
                className="relative py-24 px-6"
                style={{ backgroundColor: "#020202" }}
            >
                <div className="absolute inset-0  bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
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
                        Get a free Social Media Management Consultation!
                    </h2>

                    <Link to="/contact"
                        className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
                        Click Here
                    </Link>
                </div>
            </section>


            {/* process section  */}
            <section className="py-20 bg-gray-100 mt-10">
                <div className="max-w-6xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center text-blue-600"
                    >
                        Our Social Media Management Process
                    </motion.h2>

                    <div className="w-20 h-1 bg-orange-400 mx-auto mt-4 mb-12 rounded"></div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-6 items-start  bg-white rounded-2xl border border-gray-200 shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] hover:-translate-y-1 transition-all duration-300 p-6"
                            >

                                {/* Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>



            {/* ================= social media section ================= */}
            <section className="bg-[#a8d97c] py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Platforms We Manage for
                        <span className="text-[#272aff]"> Maximum Impact</span>
                    </h2>

                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        We help businesses grow across leading social media platforms by creating tailored strategies that align with your audience and business goals.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaFacebook,
                                head: "Facebook Marketing & Management",
                                text: "Build brand awareness and engage your community through strategic content, targeted campaigns, and performance-driven advertising. Our approach focuses on increasing reach, driving engagement, and generating meaningful customer interactions.",
                            },
                            {
                                icon: FaInstagram,
                                head: "Instagram Growth & Content Strategy",
                                text: "Strengthen your visual presence with high-quality posts, reels, and story strategies. We create engaging content that boosts brand recognition, increases follower growth, and drives qualified leads.",
                            },
                            {
                                icon: FaLinkedin,
                                head: "LinkedIn Professional Branding",
                                text: "Enhance your authority and credibility with optimized profiles, thought-leadership content, and strategic networking campaigns. Ideal for B2B growth and professional audience engagement.",
                            },
                            {
                                icon: FaTwitter,
                                head: "X (Twitter) Audience Engagement",
                                text: "Stay relevant in real-time conversations with trend-based content and interactive posts. We help increase brand visibility, spark discussions, and build a loyal online following.",
                            },
                            {
                                icon: FaPinterest,
                                head: "Pinterest Visual Marketing",
                                text: "Leverage creative pins and keyword-focused boards to drive long-term traffic. Our strategy enhances product discovery and strengthens brand presence through visually engaging content.",
                            },
                            {
                                icon: FaYoutube,
                                head: "YouTube Channel Optimization",
                                text: "Expand your reach with optimized video content, compelling thumbnails, and strategic keyword planning. We help improve discoverability, audience retention, and overall channel growth.",
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



            {/* partner section  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Why Partner With Us for
                        <span className="text-[#25baff]"> Social Media Management?</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-20">
                        Looking for a reliable team to manage and grow your social media presence? Our strategic approach, creative execution, and data-driven decisions help businesses build stronger brands, increase engagement, and drive measurable results.
                        Here’s what sets us apart:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Tailored Growth Strategies",
                                text: "Every business is unique, and so is our approach. We design customized social media strategies aligned with your industry, target audience, and business objectives to ensure maximum impact.",
                            },
                            {
                                head: "Flexible & Cost-Effective Solutions",
                                text: "Our social media management plans are structured to deliver strong performance while staying within your budget. Scalable solutions ensure long-term growth without unnecessary expenses.",
                            },
                            {
                                head: "Advanced Tools & Analytics",
                                text: "We leverage modern scheduling tools, performance tracking systems, and in-depth analytics to monitor campaigns, optimize results, and improve decision-making.",
                            },
                            {
                                head: "Cross-Platform Expertise",
                                text: "From Facebook and Instagram to LinkedIn and YouTube, we implement platform-specific strategies that maximize reach and engagement across all major social channels.",
                            },
                            {
                                head: "Strategic Optimization Approach",
                                text: "Through keyword-focused content, profile enhancement, and engagement strategies, we improve visibility, strengthen brand positioning, and attract the right audience.",
                            },
                            {
                                head: "Proactive Reputation Management",
                                text: "Maintaining a strong online reputation is essential. We monitor brand mentions, respond to feedback professionally, and implement strategies to build trust and credibility.",
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


            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable SMM
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

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

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

                                <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

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

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

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

export default SocialMediaManagement;
