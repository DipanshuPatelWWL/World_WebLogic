import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiSofa } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";
import { LuSquareActivity } from "react-icons/lu";
import { FiPlus, FiMinus, FiPenTool } from "react-icons/fi";
import { FaSearchengin, FaRocket } from "react-icons/fa6";
import { IoShieldCheckmark, IoSettingsSharp } from "react-icons/io5";
import { FaChair, FaHome, FaEye, FaCheckCircle } from "react-icons/fa";
import { FaLightbulb, FaLayerGroup, FaUserCheck, FaMapMarkerAlt } from "react-icons/fa";
import { FaLink, FaImages, FaChartLine, FaCalendarAlt } from "react-icons/fa";


import Furniture from "../../../assets/market/automobileHome/furniture.avif";
import MarketSeo from "../../../assets/market/automobileHome/marketSeo.avif";

gsap.registerPlugin(ScrollTrigger);

const FurnitureSeoMarketing = () => {
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
            question: "How long does it take to rank a furniture website?",
            answer: "Typically 4–6 months for noticeable results, depending on competition and website condition.",
        },
        {
            question: "Is SEO suitable for both online and physical furniture stores?",
            answer: "Yes. SEO supports both eCommerce sales and local showroom traffic.",
        },
        {
            question: "How do you handle image-heavy furniture websites?",
            answer: "We compress and optimize images while maintaining quality to ensure fast loading speeds.",
        },
        {
            question: "What type of keywords work best for furniture SEO?",
            answer: "High-intent long-tail keywords like “solid wood dining table in Chicago” or “luxury leather recliner near me.”",
        },
        {
            question: "Can SEO compete with big furniture brands?",
            answer: "Yes. Niche targeting and local optimization allow smaller stores to outrank national retailers in specific markets.",
        },
        {
            question: "How important are reviews for furniture stores?",
            answer: "Extremely important. Reviews influence buying decisions and improve local search rankings.",
        },
        {
            question: "Does SEO increase showroom visits?",
            answer: "Yes. Strong local SEO and map optimization directly increase in-store foot traffic.",
        },
    ];


    const stats = [
        {
            id: 1,
            icon: <FaChartLine size={28} />,
            value: "180%",
            title: "Organic Traffic Growth",
            desc: "Average increase achieved for furniture clients within 6 months.",
        },
        {
            id: 2,
            icon: <FaHome size={28} />,
            value: "220%",
            title: "GBP Interactions",
            desc: "Growth in Google Business Profile views and actions.",
        },
        {
            id: 3,
            icon: <GiSofa size={28} />,
            value: "45%",
            title: "Showroom Visit Increase",
            desc: "Direct impact from strong local SEO rankings.",
        },
    ];


    const benefits = [
        {
            icon: <FaEye size={28} />,
            title: "Capture Research-Stage Buyers",
            desc: "Appear when customers are comparing styles, materials, and prices online.",
        },
        {
            icon: <FaRocket size={28} />,
            title: "Drive High-Intent Traffic",
            desc: "Target buyers actively searching for furniture — ready to purchase.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Increase Showroom Footfall",
            desc: "Dominate 'near me' searches to bring more customers to your physical location.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Reduce Ad Spend Dependence",
            desc: "Build consistent organic traffic that continues generating sales long-term.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Build Brand Credibility",
            desc: "Page-one rankings make your store appear more trustworthy and established.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Seasonal Demand Capture",
            desc: "Adapt to trends — patio sets in summer, cozy furniture in winter.",
        },
        {
            icon: <FaChair size={28} />,
            title: "Compete with Big Retailers",
            desc: "Niche and local SEO strategies help you win in specific markets.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Improve Conversion Rates",
            desc: "Optimized product pages and strong content turn visitors into buyers.",
        },
    ];

    const services = [
        {
            icon: <FaSearchengin size={28} />,
            title: "Advanced Keyword Research",
            desc: "Identify high-intent buyer keywords, long-tail searches, style-specific terms, and location-based queries.",
        },
        {
            icon: <IoSettingsSharp size={28} />,
            title: "On-Page Product Optimization",
            desc: "Optimize titles, descriptions, meta tags, internal linking, headers, and CTAs for maximum visibility.",
        },
        {
            icon: <FaImages size={28} />,
            title: "Technical SEO & Speed",
            desc: "Image compression, mobile optimization, schema markup, Core Web Vitals, and fast-loading performance.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Local SEO for Showrooms",
            desc: "Google Business Profile optimization, citations, reviews, and geo-targeted landing pages.",
        },
        {
            icon: <FiPenTool size={28} />,
            title: "Content Marketing",
            desc: "Buying guides, trend blogs, style comparisons, care guides, and FAQ-rich content.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Strategic Link Building",
            desc: "Earn quality backlinks from décor blogs, local directories, and home lifestyle publications.",
        },
        {
            icon: <GiSofa size={28} />,
            title: "E-Commerce SEO",
            desc: "Product schema, category structure, filter management, and conversion rate optimization.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Reputation Management",
            desc: "Encourage reviews, monitor mentions, respond professionally, and build trust online.",
        },
    ];


    const features = [
        {
            icon: <FaLightbulb size={28} />,
            title: "Furniture Industry Expertise",
            desc: "Deep understanding of buyer psychology, seasonal trends, and competitive furniture search landscape.",
        },
        {
            icon: <FaLayerGroup size={28} />,
            title: "Customized SEO Roadmap",
            desc: "Tailored strategies for online stores, physical showrooms, or hybrid furniture businesses.",
        },
        {
            icon: <FaUserCheck size={28} />,
            title: "Conversion-First Approach",
            desc: "Optimize not just for rankings — but for showroom visits, inquiries, and actual sales.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Local + National Visibility",
            desc: "Dominate both 'near me' searches and broader product-specific keywords.",
        },
        {
            icon: <LuSquareActivity size={28} />,
            title: "Transparent Monthly Reporting",
            desc: "Clear insights into rankings, traffic, conversions, and revenue impact.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Sustainable Long-Term Growth",
            desc: "White-hat techniques built to deliver consistent results even after algorithm updates.",
        },
    ];

    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Furniture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Furniture Seo</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Grow Your Furniture Business with Strategic SEO Marketing
                    </p>
                </div>
            </section>


            {/* ================= INTRO ================= */}
            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Furniture
                            <span className="text-[#25baff]"> SEO Marketing Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Connect Your Showroom to Today’s Digital Buyers
                        </h2>
                        <p className="text-black mt-4">
                            Our specialized furniture SEO strategies help retailers appear when customers are actively searching, comparing, and ready to buy — driving both online sales and in-store visits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "High-Intent Furniture Keyword Targeting",
                            "Optimized Product & Category Pages",
                            "Local Showroom Visibility Boost",
                            "Image & Speed Optimization",
                            "Content That Educates & Converts",
                            "Sustainable Organic Growth & Authority",
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
                                Furniture SEO Marketing?
                            </span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Today’s furniture shoppers start their journey online — comparing styles, reading reviews, checking prices, and searching for local stores.
                            <br /><br />
                            Furniture SEO Marketing helps your brand appear exactly when buyers are in research or purchase mode.
                            Whether you run an online store, physical showroom, or both — strong SEO connects digital discovery to real sales.
                            <br /><br />
                            With targeted keywords, optimized product pages, local visibility, and authoritative content, SEO drives consistent traffic, showroom visits, and revenue growth.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={MarketSeo}
                            alt="Furniture SEO Marketing"
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
                            Why <span className="text-[#25baff]">Furniture SEO</span> Delivers Real Results
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            In a competitive market dominated by big retailers, strategic SEO helps furniture businesses win local customers, capture high-intent searches, and grow sustainably.
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
                                <li>• High-intent buyer keyword targeting</li>
                                <li>• Product page & image optimization</li>
                                <li>• Local showroom visibility</li>
                                <li>• Educational content & guides</li>
                                <li>• Authority through quality backlinks</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We don’t chase vanity metrics — we build visibility that turns searches into showroom visits and online orders.
                                Every optimization is designed to increase qualified traffic and actual revenue.
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
                            Turn Online Searches Into{" "}
                            <span className="text-[#25baff]">Furniture Sales</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Strategic furniture SEO helps you capture buyers at every stage — from inspiration to final purchase decision.
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
                            Furniture SEO vs.
                            <span className="text-[#25baff]"> Paid Furniture Advertising</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the Strategy That Builds Long-Term Growth for Your Furniture Business
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
                                    <p>High-Intent Buyer Targeting</p>
                                    <p>Trust & Authority Building</p>
                                    <p>Content Control & Quality</p>
                                    <p>Speed of Visibility</p>
                                    <p>Budget Flexibility</p>
                                </div>

                            </div>
                        </div>



                        {/* Furniture SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Furniture SEO
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for consistent, long-term traffic</p>
                                    <p>Requires ongoing optimization investment</p>
                                    <p>Delivers compounding results over time</p>
                                    <p>Highly targeted by product type, style, and location</p>
                                    <p>Builds trust through rankings and content</p>
                                    <p>Full control over product pages & content</p>
                                    <p>Takes time to build momentum</p>
                                    <p>Scales with authority — no recurring ad cost</p>
                                </div>

                            </div>

                        </div>



                        {/* Paid Advertising */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Paid Furniture Advertising
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Focused on fast visibility & immediate sales</p>
                                    <p>Requires continuous ad budget to maintain reach</p>
                                    <p>Delivers short-term performance spikes</p>
                                    <p>Precise targeting by interest and demographics</p>
                                    <p>Can feel promotional if not done creatively</p>
                                    <p>Creative flexibility in ads & promotions</p>
                                    <p>Quick to launch and scale</p>
                                    <p>Flexible budget but stops when spend stops</p>
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
                        Furniture SEO  Strategies We Execute

                    </h2>

                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        We help furniture businesses grow through targeted, high-conversion SEO strategies tailored to both online stores and physical showrooms.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: GiSofa,
                                head: "Product & Category SEO",
                                head1: "Make Every Page Discoverable",
                                text: "Optimized titles, rich descriptions, schema markup, and structured internal linking help search engines understand and rank your furniture offerings.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local Showroom SEO",
                                head1: "Drive Foot Traffic to Your Store",
                                text: "Google Business Profile optimization, citations, reviews, and geo-targeted landing pages ensure you dominate local furniture searches.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Content & Buying Guides",
                                head1: "Educate & Convert Shoppers",
                                text: "In-depth guides, trend articles, style comparisons, and care tips build authority and keep potential buyers engaged longer.",
                            },
                            {
                                icon: FaLink,
                                head: "Authority Link Building",
                                head1: "Earn Trust from Quality Sites",
                                text: "Strategic backlinks from décor blogs, local media, and home lifestyle sites strengthen your domain and rankings.",
                            },
                            {
                                icon: IoMdTrendingUp,
                                head: "E-Commerce Optimization",
                                head1: "Boost Online Furniture Sales",
                                text: "Product schema, filter-friendly URLs, fast-loading images, and conversion-focused layouts help online stores convert better.",
                            },
                            {
                                icon: IoShieldCheckmark,
                                head: "Reputation & Review Strategy",
                                head1: "Build Trust That Converts",
                                text: "Encourage reviews, respond professionally, and manage online reputation to improve both rankings and buyer confidence.",
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
                            Our <span className="text-[#25baff]">Furniture SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            We deliver complete, performance-focused SEO solutions designed to increase visibility, traffic, showroom visits, and revenue for furniture businesses.
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
                        Our Proven Furniture
                        <span className="text-[#25baff]"> SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        We follow a structured, results-driven process tailored specifically for furniture retailers — from audit to continuous growth.
                        <br />Here’s how we build lasting visibility and sales:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Strategy Development",
                                text: "Full technical audit, competitor analysis, keyword research, and seasonal trend mapping to create your custom roadmap.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Product descriptions, image optimization, schema markup, speed improvements, and mobile-first enhancements.",
                            },
                            {
                                head: "Local SEO & GBP Optimization",
                                text: "Google Business Profile setup, citation building, review strategy, and location-specific landing pages.",
                            },
                            {
                                head: "Content Creation & Publishing",
                                text: "Buying guides, style blogs, comparison articles, care tips, and FAQ content that educates and ranks.",
                            },
                            {
                                head: "Authority & Link Building",
                                text: "Strategic outreach to décor blogs, local media, and home lifestyle sites to earn high-quality backlinks.",
                            },
                            {
                                head: "Ongoing Monitoring & Growth",
                                text: "Rank tracking, performance reporting, seasonal updates, conversion optimization, and continuous refinement.",
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
            <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#020202] via-[#020202] to-[#25baff]/80">

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
                            Why Furniture Brands Trust Our{" "}
                            <span className="text-[#a8d97c]">SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            We understand furniture buyer behavior and combine technical precision, content strategy, and local focus to deliver measurable revenue growth.
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

export default FurnitureSeoMarketing;