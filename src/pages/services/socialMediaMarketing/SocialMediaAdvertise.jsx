import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiFlyingTarget } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { IoMegaphoneSharp } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineRepeatOn } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { LuSquareActivity } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";


import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import Sma from "../../../assets/services/smo/sma.avif";



gsap.registerPlugin(ScrollTrigger);

const SocialMediaAdvertise = () => {
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
            question: "How quickly can you launch a new advertising campaign?",
            answer: "Most campaigns can be planned, created, and launched within 5–7 business days. Timelines may vary depending on creative production, audience research, and platform approvals.",
        },
        {
            question: "Can I target multiple audience segments in one campaign?",
            answer: "Yes. We structure campaigns with multiple ad sets to target different audience groups based on demographics, interests, behaviors, and buying intent — all within a strategic framework.",
        },
        {
            question: "I’ve boosted posts before without results. What makes your approach different?",
            answer: "Boosting posts is limited. We build full-funnel advertising strategies with advanced targeting, conversion tracking, A/B testing, and performance optimization to drive measurable ROI.",
        },
        {
            question: "How do you maintain my brand voice in paid ads?",
            answer: "We align every campaign with your brand guidelines, tone, and messaging. Our creative team ensures that ads reflect your identity while remaining conversion-focused.",
        },
        {
            question: "Do you work with businesses in niche or specialized industries?",
            answer: "Absolutely. We conduct detailed industry and competitor research to craft customized campaigns tailored to your specific market and audience.",
        },
        {
            question: "How do you ensure my ad budget is optimized?",
            answer: "We continuously monitor performance metrics, refine targeting, test creatives, and adjust bidding strategies to maximize return on ad spend and minimize wasted budget.",
        },
        {
            question: "Can campaigns be paused or adjusted after launch?",
            answer: "Yes. Campaigns can be optimized, scaled, or paused at any time based on performance insights and business priorities.",
        },
        {
            question: "How long does it take to see measurable results?",
            answer: "Initial performance data is available within days, but meaningful optimization and consistent results typically develop within 2–4 weeks.",
        },
        {
            question: "How do you choose the right platform for my business?",
            answer: "We analyze your target audience, industry, objectives, and budget to determine which platforms will deliver the highest impact and ROI.",
        },
    ];


    const stats = [
        {
            id: 1,
            icon: <IoMdTrendingUp size={28} />,
            value: "32%",
            title: "Higher Conversion Rate",
            desc: "Average growth achieved through optimized social media campaigns.",
        },
        {
            id: 2,
            icon: <FaUserCircle size={28} />,
            value: "250K+",
            title: "Audience Reached",
            desc: "Targeted users reached across multiple paid platforms.",
        },
        {
            id: 3,
            icon: <GiFlyingTarget size={28} />,
            value: "4X",
            title: "Return on Ad Spend",
            desc: "Improved ROAS with smart bidding & laser-focused targeting.",
        },
    ];


    const benefits = [
        {
            icon: <FaEye size={28} />,
            title: "Precision Audience Reach",
            desc: "Deliver your message to the right people using advanced targeting by interests, behavior, and demographics.",
        },
        {
            icon: <FaRocket size={28} />,
            title: "Accelerated Traffic Growth",
            desc: "Drive high-quality visitors to your website, landing page, or store the moment your campaign goes live.",
        },
        {
            icon: <FaUserCircle size={28} />,
            title: "Consistent Lead Generation",
            desc: "Turn attention into inquiries with optimized creatives and conversion-focused funnels.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Scalable Campaign Performance",
            desc: "Start small and scale confidently with performance data guiding every budget decision.",
        },
        {
            icon: <IoMegaphoneSharp size={28} />,
            title: "Promote Offers with Impact",
            desc: "Launch events, discounts, and new products with campaigns built to generate immediate action.",
        },
        {
            icon: <IoBarChartSharp size={28} />,
            title: "Transparent Analytics & ROI",
            desc: "Track impressions, clicks, and conversions to measure true return on ad spend.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Competitive Market Advantage",
            desc: "Stay visible and ahead while competitors rely only on limited organic reach.",
        },
        {
            icon: <MdOutlineRepeatOn size={28} />,
            title: "Smart Retargeting Strategy",
            desc: "Reconnect with past visitors and convert warm prospects into paying customers.",
        },
    ];

    const services = [
        {
            icon: <IoMegaphoneSharp size={28} />,
            title: "Paid Social Advertising",
            desc: "Performance-driven ad campaigns across Facebook, Instagram, LinkedIn, and more — optimized for leads, sales, and ROI.",
        },
        {
            icon: <IoSettingsSharp size={28} />,
            title: "Social Media Management",
            desc: "End-to-end account management including content planning, publishing, engagement, and performance tracking.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Brand Growth Strategy",
            desc: "Position your brand for long-term visibility with targeted messaging, audience building, and strategic scaling.",
        },
        {
            icon: <IoBarChartSharp size={28} />,
            title: "Performance Optimization",
            desc: "Continuous A/B testing, creative refinement, and data analysis to maximize conversions and reduce ad costs.",
        },
        {
            icon: <FaSearchengin size={28} />,
            title: "Social Media SEO",
            desc: "Optimize profiles and content with keyword strategies to increase discoverability across social platforms.",
        },
        {
            icon: <FaVideo size={28} />,
            title: "Video Advertising",
            desc: "High-converting video ad creatives designed to capture attention and drive measurable engagement.",
        },
        {
            icon: <FiPenTool size={28} />,
            title: "Content Marketing",
            desc: "Strategic content creation including posts, reels, captions, and campaigns tailored to your brand voice.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Online Reputation Management",
            desc: "Monitor, manage, and strengthen your brand credibility with proactive review and engagement strategies.",
        },
    ];


    const features = [
        {
            icon: <FaLightbulb size={28} />,
            title: "Strategic Expert Guidance",
            desc: "Work with experienced ad strategists who align every campaign with your business goals, ensuring clarity, focus, and measurable impact.",
        },
        {
            icon: <FaLayerGroup size={28} />,
            title: "Multi-Platform Ad Strategy",
            desc: "We design platform-specific campaigns that maximize reach, engagement, and conversions across today’s top social channels.",
        },
        {
            icon: <FaUserCheck size={28} />,
            title: "Dedicated Ads Specialist",
            desc: "Get a committed expert who manages, optimizes, and scales your campaigns as an extension of your internal team.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Conversion-Focused Approach",
            desc: "Our campaigns are built around funnels that transform clicks into qualified leads and revenue-driving customers.",
        },
        {
            icon: <LuSquareActivity size={28} />,
            title: "Real-Time Campaign Optimization",
            desc: "We monitor performance daily, refine targeting, test creatives, and adjust bidding strategies to maximize ROI.",
        },
        {
            icon: <IoBarChartSharp size={28} />,
            title: "Transparent Performance Insights",
            desc: "Receive clear reporting and actionable analytics so you always understand your growth metrics and ad performance.",
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
                        Social Media Advertising
                    </p>
                </div>
            </section>


            {/* ================= INTRO ================= */}
            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Social Media
                            <span className="text-[#25baff]"> Advertising Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Reach High-Intent Customers with Precision Targeting
                        </h2>
                        <p className="text-black mt-4">
                            Our performance-driven social media advertising solutions ensure your brand connects with the right audience at the right time. We maximize ROI through:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Strategic Ad Campaign Planning",
                            "Advanced Bid & Budget Optimization",
                            "High-Converting, Scroll-Stopping Creatives",
                            "Precision Retargeting Campaigns",
                            "Brand Awareness & Visibility Growth",
                            "Data-Driven Performance Insights & Analytics",
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
                className="relative py-20 px-6 overflow-hidden bg-white"
            >
                {/* Content Wrapper */}
                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            Understanding the Power of{" "}
                            <span className="text-[#25baff]">
                                Social Media Advertising?
                            </span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Today’s customers live on social platforms — and your brand should too.
                            With millions of users browsing, sharing, and engaging every minute,
                            social media advertising helps you capture attention and turn interest into action.
                            <br /><br />
                            Social Media Advertising (SMA) gives businesses a powerful and affordable way
                            to promote products and services on platforms like Facebook, Instagram, LinkedIn,
                            and TikTok. It enables precise audience targeting based on demographics,
                            online behavior, preferences, and geographic location — ensuring your ads
                            reach people most likely to convert.
                            <br /><br />
                            With the right strategy, SMA drives brand awareness, quality leads,
                            website traffic, and measurable growth.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Sma}
                            alt="Social Media Management"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                </div>
            </section>


            <section className="relative bg-[#020202] text-white py-24 px-6 overflow-hidden">

                {/* Background Glow Effects */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#25baff] opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a8d97c] opacity-20 blur-3xl rounded-full"></div>

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why <span className="text-[#25baff]">Paid Social Campaigns</span> Deliver Results
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Social media isn’t just about posting anymore. With smart targeting,
                            creative storytelling, and performance tracking, paid campaigns
                            turn attention into measurable growth.
                        </p>
                    </motion.div>

                    {/* Content + Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center mb-20"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-[#a8d97c]">
                                Our Strategy Focuses On:
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li>• Goal-oriented campaign structure</li>
                                <li>• Deep audience segmentation</li>
                                <li>• Scroll-stopping creative design</li>
                                <li>• Continuous A/B testing & optimization</li>
                                <li>• Real-time performance analytics</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We don’t run ads randomly — we engineer performance.
                                From precise targeting to conversion-driven creatives,
                                every campaign is built to maximize ROI and scale your brand efficiently.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#111111] p-8 rounded-2xl border border-white/10 hover:border-[#25baff] transition-all duration-300 shadow-lg"
                            >
                                <div className="text-[#25baff] mb-4">{stat.icon}</div>
                                <h4 className="text-4xl font-bold mb-3 text-[#a8d97c]">
                                    {stat.value}
                                </h4>
                                <h5 className="text-xl font-semibold mb-2">{stat.title}</h5>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {stat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= STRATEGY CARDS ================= */}

            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020202] mb-4">
                            Turn Attention Into{" "}
                            <span className="text-[#25baff]">Measurable Business Growth</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Social media advertising helps brands move from visibility to
                            conversions with data-driven strategy and creative excellence.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#25baff]/60 hover:shadow-[#25baff]/30 hover:-translate-y-3"
                            >
                                <div className="mb-4 text-[#25baff]">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-[#020202] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ================= Marketing CARDS ================= */}

            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Social Media Advertising vs.
                            <span className="text-[#25baff]"> Social Media Marketing</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the Strategy That Aligns With Your Business Goals
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/*  Marketing Objectives */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Marketing Objectives
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Immediate Results</p>
                                    <p>Cost-Effective Growth</p>
                                    <p>Long-Term Brand Development</p>
                                    <p>Advanced Audience Targeting</p>
                                    <p>Trust & Community Building</p>
                                    <p>Content & Messaging Control</p>
                                    <p>Speed of Execution</p>
                                    <p>Budget Adaptability</p>
                                </div>

                            </div>
                        </div>



                        {/* Social Media Advertising */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Social Media Advertising
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for fast traffic, leads, and direct sales</p>
                                    <p>Requires consistent ad spend to maintain visibility</p>
                                    <p>Delivers short-term performance spikes</p>
                                    <p>Highly targeted by demographics, interests, behaviors, and location</p>
                                    <p>May feel promotional if not strategically crafted</p>
                                    <p>Full control over creatives, messaging, and call-to-actions</p>
                                    <p>Campaigns can launch quickly</p>
                                    <p>Flexible budget scaling based on performance</p>
                                </div>

                            </div>

                        </div>



                        {/* Social Media Marketing */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Social Media Marketing
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Focused on sustainable, long-term growth</p>
                                    <p>Builds organic reach with consistent content efforts</p>
                                    <p>Strengthens brand authority and customer loyalty over time</p>
                                    <p>Relies on content quality and platform algorithms</p>
                                    <p>Creates authentic engagement and community relationships</p>
                                    <p>Creative flexibility through posts, reels, videos, and stories</p>
                                    <p>Requires ongoing content planning and consistency</p>
                                    <p>Lower monetary investment but higher time commitment</p>
                                </div>

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
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
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



            {/* ================= social media section ================= */}
            <section className="bg-[#a8d97c] py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Social Media Advertising
                        <span className="text-[#272aff]"> Platforms We Manage</span>
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
                                head: "Facebook Advertising",
                                head1: "Drive Sales with Precision Targeting",
                                text: "We create high-performing Facebook ad campaigns designed to generate leads, conversions, and measurable ROI. With advanced audience segmentation, creative testing, and pixel tracking, we ensure every dollar works harder for your business.",
                            },
                            {
                                icon: FaInstagram,
                                head: "Instagram Advertising",
                                head1: "Capture Attention. Inspire Action.",
                                text: "From engaging Reels and Stories to high-converting carousel ads, our Instagram campaigns combine scroll-stopping visuals with strategic targeting to turn engagement into real results.",
                            },
                            {
                                icon: FaLinkedin,
                                head: "LinkedIn Advertising",
                                head1: "Reach Decision-Makers with Confidence",
                                text: "Perfect for B2B growth, our LinkedIn campaigns target professionals by industry, job title, and company size—helping you generate high-quality leads and build authority in your niche.",
                            },
                            {
                                icon: FaTwitter,
                                head: "X (Twitter) Advertising",
                                head1: "Spark Conversations That Convert",
                                text: "We craft compelling ad creatives and leverage interest-based targeting to amplify your brand message. Our X campaigns are optimized to boost awareness, traffic, and meaningful engagement.",
                            },
                            {
                                icon: FaPinterest,
                                head: "Pinterest Advertising",
                                head1: "Convert Inspiration Into Purchases",
                                text: "We create visually compelling Pinterest ads that reach users actively searching for ideas and products. Our strategy focuses on driving traffic, boosting product discovery, and increasing sales.",
                            },
                            {
                                icon: FaYoutube,
                                head: "YouTube Advertising",
                                head1: "Turn Views Into Customers",
                                text: "We design impactful video ad campaigns that grab attention within seconds. From skippable ads to in-stream placements, we help you reach the right audience and drive action through powerful storytelling.",
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

                                    <h3 className="font-extrabold text-2xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                                        {item.head}
                                    </h3>
                                    <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                                        {item.head1}
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



            {/* ================= social media Advertising Services ================= */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020202] mb-4">
                            Our <span className="text-[#25baff]">Social Media Advertising</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            We combine strategy, creativity, and performance marketing to
                            deliver measurable growth across every major social platform.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group hover:border-[#a8d97c]/60 hover:-translate-y-3 hover:shadow-[#a8d97c]/60"
                            >
                                <div className="mb-4 text-[#25baff] group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-[#020202] mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* audit services  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Our Proven Social Media
                        <span className="text-[#25baff]"> Advertising Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        We deliver measurable growth through a structured, data-driven approach tailored to your unique business objectives.
                        <br />Here’s how we transform strategy into scalable, high-performing campaigns:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Business & Goal Discovery",
                                text: "We begin by understanding your brand, target market, and revenue objectives. This ensures every campaign is aligned with clear, measurable outcomes — from awareness to conversions.",
                            },
                            {
                                head: "Advanced Audience Research",
                                text: "Using behavioral insights, competitor analysis, and platform data, we identify high-intent audience segments most likely to engage and convert.",
                            },
                            {
                                head: "Strategic Campaign Planning",
                                text: "We develop platform-specific advertising strategies, define campaign funnels, allocate budgets smartly, and craft messaging designed to drive maximum ROI.",
                            },
                            {
                                head: "Creative Development & Launch",
                                text: "Our team produces compelling ad creatives — including visuals, videos, and persuasive copy — optimized for performance before launching with precision timing.",
                            },
                            {
                                head: "Continuous Optimization",
                                text: "We monitor performance daily, refine targeting, adjust bids, test creatives, and improve conversion rates to ensure campaigns consistently perform at their peak.",
                            },
                            {
                                head: "Transparent Performance Reporting",
                                text: "Receive detailed reports with actionable insights, conversion tracking, and ROI analysis so you always know how your investment is performing.",
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




            {/* ================= why choose us ================= */}
            <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#020202] via-[#020202] to-[#25baff]/20">

                {/* Soft Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#25baff]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a8d97c]/20 blur-3xl rounded-full"></div>

                <div className="relative max-w-6xl mx-auto text-center">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Brands Trust Our{" "}
                            <span className="text-[#a8d97c]">Social Media Advertising Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            We combine strategy, creativity, and performance analytics to build
                            scalable campaigns that deliver consistent and measurable growth.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-left hover:border-[#25baff] transition-all duration-300 shadow-lg"
                            >
                                <div className="text-[#25baff] mb-4">{item.icon}</div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
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

export default SocialMediaAdvertise;
