import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdTrendingUp } from "react-icons/io";
import { FiPlus, FiMinus, FiPenTool } from "react-icons/fi";
import { FaSearchengin, FaRocket } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLightbulb, FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt, FaUsers, FaHandshake, FaChartLine, FaCalendarAlt } from "react-icons/fa";
import { FaCity, FaBullseye, FaUserTie, FaTools, FaChartPie, FaCheckCircle, FaUserCheck } from "react-icons/fa";
import { FaSearch, FaLink, FaPenNib, FaCogs, FaServer, FaShoppingCart, FaMicrophone } from "react-icons/fa";


import Banner from "../../assets/denver/SanFranciscoBanner.avif";
import SfImage from "../../assets/denver/SanFranciscoSeo.avif";

gsap.registerPlugin(ScrollTrigger);

const SanFranciscoSeo = () => {
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
            gsap.set(content, { height: "auto", opacity: 1 });
        }
    }, []);

    const faqs = [
        {
            question: "How long does AI-powered SEO take to show results in San Francisco?",
            answer:
                "In the competitive Bay Area market, meaningful improvements in rankings, traffic, and conversions typically appear within 3–6 months, depending on your niche, current authority, and implementation speed.",
        },
        {
            question: "Why is AI-driven SEO essential for San Francisco businesses?",
            answer:
                "AI-powered SEO analyzes search intent in real time, predicts trends, optimizes for generative answers (AI Overviews), and adapts to evolving algorithms — critical in a tech-forward city like San Francisco where traditional tactics fall short.",
        },
        {
            question: "How much do San Francisco SEO services cost in 2026?",
            answer:
                "Pricing varies by competition level (especially in tech, fintech, SaaS), goals, and scope. We provide transparent, flexible packages tailored for startups and established Bay Area companies.",
        },
        {
            question: "Can AI-powered SEO increase qualified leads and revenue?",
            answer:
                "Yes — by focusing on high-intent queries, content architecture that satisfies user needs, and technical signals that AI engines favor, we drive traffic that converts into demos, sign-ups, trials, and sales.",
        },
        {
            question: "Do you provide monthly AI SEO performance reports?",
            answer:
                "Yes. Detailed monthly reports include keyword rankings, AI visibility (e.g., featured in AI Overviews), traffic quality, intent match, conversion metrics, and strategic recommendations.",
        },
        {
            question: "Which San Francisco industries benefit most from AI SEO?",
            answer:
                "Tech startups, SaaS, fintech, AI/ML companies, biotech, venture capital firms, e-commerce platforms, professional services, and consumer tech brands see the strongest results in this fast-evolving market.",
        },
        {
            question: "Why choose Digital Webguider as your San Francisco SEO partner?",
            answer:
                "We retool traditional SEO with AI-powered intent analysis, advanced keyword strategy, intelligent content architecture, and Bay Area market expertise — helping your business stand out in one of the world’s most competitive digital landscapes.",
        },
    ];

    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+385%",
            title: "Organic Traffic Growth",
            desc: "Average increase for Bay Area clients using AI-enhanced strategies.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "67%",
            title: "Bounce Rate Reduction",
            desc: "Intent-aligned content and lightning-fast technical performance.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+520%",
            title: "Conversion Growth",
            desc: "AI-optimized pages turn Bay Area searchers into high-value leads.",
        },
    ];

    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture Precise Search Intent",
            desc: "AI analyzes user queries to match exactly what San Francisco searchers want — right now.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Attract High-Quality Bay Area Traffic",
            desc: "Bring in decision-makers from startups, enterprises, and investors ready to engage.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate AI & Traditional Results",
            desc: "Rank in Google AI Overviews, traditional SERPs, and local packs across SF neighborhoods.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Future-Proof Your Visibility",
            desc: "AI-adaptive strategies keep you ahead as search evolves in 2026 and beyond.",
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Build Authority in Tech & Innovation",
            desc: "E-E-A-T signals and structured content position your brand as a Bay Area leader.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Leverage Trend & Event Spikes",
            desc: "Capture searches around tech conferences, funding rounds, product launches, and more.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Stand Out in a Crowded Market",
            desc: "Retooled SEO helps Bay Area businesses outrank global competitors and noise.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Drive Real Revenue Growth",
            desc: "Intent-matched architecture turns organic visitors into demos, trials, and customers.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "AI-Powered Keyword & Intent Strategy",
            desc: "Semantic analysis, predictive trends, conversational + long-tail targeting — aligned with Bay Area user behavior.",
        },
        {
            icon: <FaPenNib size={28} />,
            title: "Intelligent Content Architecture",
            desc: "Modular, intent-first content systems — blogs, pillar pages, FAQs, schema-rich structures that AI engines love.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "On-Page & Entity Optimization",
            desc: "E-E-A-T signals, structured data, internal linking graphs, topic clusters — re-engineered for generative search.",
        },
        {
            icon: <FaServer size={28} />,
            title: "Technical & Core Web Vitals",
            desc: "Speed optimization, mobile-first indexing, crawl efficiency, schema for AI visibility, zero-downtime fixes.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Local + Bay Area SEO",
            desc: "Google Business mastery, neighborhood + city pages, citation consistency, review velocity — SF-focused.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "AI Visibility & Generative Optimization",
            desc: "Content tuned for AI Overviews, voice search, multimodal results — appear in next-gen discovery.",
        },
        {
            icon: <FaMicrophone size={28} />,
            title: "Google Business Profile Optimization",
            desc: "Photos, posts, Q&A, attributes, review management — enhanced for local + intent signals.",
        },
    ];

    const features = [
        {
            icon: <FaTools size={28} />,
            title: "AI-First Intent Analysis",
            desc: "We decode real Bay Area user intent — not just keywords — to build content that satisfies and converts.",
        },
        {
            icon: <FaCity size={28} />,
            title: "Bay Area Market Expertise",
            desc: "Deep understanding of SF tech ecosystem, startup dynamics, investor behavior, and competitive density.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Retooled Modern SEO",
            desc: "Beyond traditional tactics — AI predictive modeling, entity SEO, generative visibility, adaptive execution.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "Strategic Content Systems",
            desc: "Scalable architecture — topic clusters, modular pages, schema networks — designed for long-term dominance.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Innovation-Driven Growth",
            desc: "Audit → AI strategy → technical + content execution → measurement → real-time adaptation.",
        },
        {
            icon: <FaChartPie size={28} />,
            title: "Transparent AI-Powered Reporting",
            desc: "Track traditional rankings + AI visibility, intent match, conversion paths, revenue impact — monthly.",
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
                <div ref={heroRef} className="relative z-10 text-center px-6 text-white">
                    <h1 className="text-5xl md:text-6xl font-extrabold">San Francisco SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        San Francisco SEO Company
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            San Francisco <span className="text-[#25baff]">SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            AI-Powered Growth for the Bay Area
                        </h2>
                        <p className="text-black mt-4 max-w-4xl mx-auto">
                            Our San Francisco SEO drives AI-powered growth with deep search intent understanding, precision keyword strategy, and intelligent content architecture — retooling traditional SEO to make your Bay Area business stand out in one of the world’s most innovative and competitive markets.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "AI-powered intent optimization",
                            "Advanced keyword & entity strategy",
                            "Intelligent content architecture",
                            "Technical excellence & Core Web Vitals",
                            "Generative & traditional visibility",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4 shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:border-[#25baff] hover:shadow-2xl hover:shadow-[#25baff]/40 hover:-translate-y-2"
                            >
                                <FaCheckCircle className="text-[#25baff] text-2xl mt-1 group-hover:text-white transition-colors duration-300" />
                                <p className="text-[#020202] text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ABOUT OUR COMPANY ================= */}
            <section ref={whoRef} className="relative py-20 px-6 overflow-hidden bg-white">
                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            About Our <span className="text-[#25baff]">San Francisco SEO Company</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Digital Webguider empowers Bay Area businesses with next-generation SEO — blending AI-powered intent analysis, technical precision, content systems, and multi-channel thinking.
                            <br /><br />
                            Our San Francisco SEO specialists re-engineer traditional approaches: AI-driven keyword strategy, entity-based architecture, generative visibility, and conversion-focused optimizations.
                            <br /><br />
                            We don’t chase rankings — we build sustainable visibility that drives demos, trials, sign-ups, and revenue in the world’s innovation capital.
                            <br /><br />
                            Tech companies, startups, and brands across the Bay Area trust us to deliver real, measurable digital growth.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={SfImage}
                            alt="San Francisco SEO Services – Bay Area skyline, Golden Gate, tech innovation"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DARK SECTION - WHY SAN FRANCISCO SEO ================= */}
            <section className="relative bg-[#020202] text-white py-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#25baff] opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a8d97c] opacity-20 blur-3xl rounded-full"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why <span className="text-[#25baff]">AI-Powered San Francisco SEO</span> Wins
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Retool your visibility for the future of search — where intent, AI, and innovation rule.
                        </p>
                    </motion.div>
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
                                <li>• AI Intent & Semantic Analysis</li>
                                <li>• Precision Keyword & Entity Strategy</li>
                                <li>• Intelligent Content Architecture</li>
                                <li>• Technical & Generative Optimization</li>
                                <li>• Bay Area Market Adaptation</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                In San Francisco, standing still means falling behind. We combine AI-powered tools with deep Bay Area insight to create visibility that drives real business outcomes — not just vanity metrics.
                            </p>
                        </div>
                    </motion.div>
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
                                <h4 className="text-4xl font-bold mb-3 text-[#a8d97c]">{stat.value}</h4>
                                <h5 className="text-xl font-semibold mb-2">{stat.title}</h5>
                                <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= TURN SEARCHES INTO LEADS ================= */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020202] mb-4">
                            Turn Bay Area Searches Into{" "}
                            <span className="text-[#25baff]">Leads & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            AI-powered SEO captures high-intent users and converts them in the heart of innovation.
                        </p>
                    </motion.div>
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
                                <h3 className="text-lg font-semibold text-[#020202] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SEO VS PAID ================= */}
            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            San Francisco SEO vs. <span className="text-[#25baff]">Paid Advertising</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the long-term strategy that scales with innovation in the Bay Area
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Marketing Objectives */}
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

                        {/* San Francisco SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    San Francisco SEO
                                </h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for compounding AI & organic visibility</p>
                                    <p>Requires ongoing AI-optimized investment</p>
                                    <p>Delivers exponential results over time</p>
                                    <p>Highly targeted by intent + Bay Area niche</p>
                                    <p>Builds lasting authority & trust</p>
                                    <p>Full control over architecture & messaging</p>
                                    <p>Takes time to build momentum</p>
                                    <p>Scales without recurring ad spend</p>
                                </div>
                            </div>
                        </div>

                        {/* Paid Advertising */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Paid Advertising
                                </h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Fast visibility & immediate leads</p>
                                    <p>Requires continuous ad budget</p>
                                    <p>Short-term performance spikes</p>
                                    <p>Precise demographic & interest targeting</p>
                                    <p>Can feel promotional</p>
                                    <p>High creative flexibility</p>
                                    <p>Quick to launch & scale</p>
                                    <p>Traffic stops when budget stops</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT CTA ================= */}
            <section
                className="relative py-24 px-6"
                style={{ backgroundColor: "#020202" }}
            >
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
                />
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
                        Talk To Our San Francisco SEO Experts Now
                    </h2>
                    <Link
                        to="/contact"
                        className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition"
                    >
                        Contact Now
                    </Link>
                </div>
            </section>

            {/* ================= STRATEGIES WE EXECUTE ================= */}
            <section className="bg-[#a8d97c] py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        San Francisco AI SEO Strategies We Execute
                    </h2>
                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        Next-gen, AI-forward strategies built for the Bay Area’s innovation-driven, high-competition environment.
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "AI Intent & Keyword Strategy",
                                head1: "Decode What SF Searches Really Want",
                                text: "Semantic + predictive analysis for high-intent, conversational, and emerging Bay Area queries.",
                            },
                            {
                                icon: FaLink,
                                head: "Authority & Entity Building",
                                head1: "Establish Bay Area Leadership",
                                text: "Strategic links + entity signals that boost E-E-A-T and AI visibility.",
                            },
                            {
                                icon: FiPenTool,
                                head: "Intelligent Content Architecture",
                                head1: "Content Built for Humans & AI",
                                text: "Modular systems, topic clusters, schema-rich pages — optimized for generative results.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "Technical & Performance Optimization",
                                head1: "Speed Meets Innovation",
                                text: "Core Web Vitals, mobile-first, crawl efficiency — technical foundation for AI-era search.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Bay Area Local + Vertical SEO",
                                head1: "Dominate SF Neighborhoods & Niches",
                                text: "GBP mastery, neighborhood pages, vertical intent — own local + industry search.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Generative & Adaptive SEO",
                                head1: "Future-Proof Your Presence",
                                text: "AI Overviews, voice, multimodal — strategies that evolve with search engines.",
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

            {/* ================= OUR SERVICES ================= */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020202] mb-4">
                            Our <span className="text-[#25baff]">San Francisco AI SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Cutting-edge, AI-integrated SEO solutions retooling visibility for Bay Area innovation leaders.
                        </p>
                    </motion.div>
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

            {/* ================= PROVEN FRAMEWORK ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Our Proven San Francisco
                        <span className="text-[#25baff]"> AI SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Intelligent, adaptive process built for Bay Area speed — from AI audit to sustained dominance in next-gen search.
                        <br />Here’s how we make your business stand out:
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "AI Audit & Intent Strategy",
                                text: "Deep semantic audit, intent mapping, predictive keyword planning — Bay Area tailored.",
                            },
                            {
                                head: "Technical & Entity Optimization",
                                text: "Core Web Vitals, schema networks, crawl + speed upgrades — AI-ready foundation.",
                            },
                            {
                                head: "Content Architecture & Clustering",
                                text: "Modular pillars, topic clusters, generative-tuned pages — built to satisfy and rank.",
                            },
                            {
                                head: "Generative & Local Visibility",
                                text: "AI Overviews optimization, voice/multimodal, SF neighborhood + GBP mastery.",
                            },
                            {
                                head: "Authority & Adaptive Execution",
                                text: "Entity links, E-E-A-T signals, real-time strategy adjustments — continuous evolution.",
                            },
                            {
                                head: "Conversion & Revenue Tracking",
                                text: "Intent-to-conversion paths, monthly AI visibility + revenue reports, ongoing refinement.",
                            },
                        ].map((item, index) => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#020202] via-[#020202] to-[#25baff]/80">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#25baff]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a8d97c]/20 blur-3xl rounded-full"></div>
                <div className="relative max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Bay Area Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">AI SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            AI innovation + Bay Area market depth + intent-first thinking + measurable revenue focus = standout growth in San Francisco.
                        </p>
                    </motion.div>
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
                                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= AFFORDABLE SEO PLANS ================= */}
            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable San Francisco <span className="text-[#25baff]">SEO Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Scalable, AI-integrated packages built for Bay Area startups, SaaS, fintech, and growth-stage companies.
                        </p>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Every plan includes AI intent analysis, keyword strategy, content architecture, technical optimization,
                            generative visibility, monthly AI + revenue reporting, and dedicated support — designed to help your
                            San Francisco business rank, convert, and scale in 2026.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* SILVER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">SILVER</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-gray-300">$</span>
                                    <span className="text-5xl font-bold text-gray-300">500</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>AI SEO Audit & Strategy</p>
                                    <p>Intent & Keyword Mapping</p>
                                    <p>On-Page Optimization (Up to 10 Pages)</p>
                                    <p>Basic Technical + Speed Fixes</p>
                                    <p>Content Architecture Recommendations</p>
                                    <p>Google Business Profile Setup</p>
                                    <p>Monthly Performance Report</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>
                            </div>
                        </div>

                        {/* GOLD - POPULAR */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div className="absolute top-4 right-4 bg-yellow-800 text-white text-xs px-3 py-2 rounded-full">
                                POPULAR
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">GOLD</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#ff9800]">$</span>
                                    <span className="text-5xl font-bold text-[#ff9800]">800</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Advanced AI Intent Strategy</p>
                                    <p>Competitor & Trend Analysis</p>
                                    <p>On-Page Optimization (Up to 20 Pages)</p>
                                    <p>Technical SEO + Core Web Vitals</p>
                                    <p>Content Architecture Guidance (4 pieces/mo)</p>
                                    <p>Entity & Generative Optimization</p>
                                    <p>Link Strategy (3–5 links/mo)</p>
                                    <p>Detailed Monthly AI Report</p>
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
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">PREMIUM</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#607AFE]">$</span>
                                    <span className="text-5xl font-bold text-[#607AFE]">1400</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Full AI-Powered Growth Strategy</p>
                                    <p>Deep Intent & Market Intelligence</p>
                                    <p>Unlimited On-Page Optimization</p>
                                    <p>Advanced Technical + Entity SEO</p>
                                    <p>Content Architecture (8 pieces/mo)</p>
                                    <p>Aggressive Authority Building (8–12 links/mo)</p>
                                    <p>Generative & Local Domination</p>
                                    <p>Conversion Optimization Focus</p>
                                    <p>Priority Support & Weekly Check-ins</p>
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

            {/* ================= FAQ ================= */}
            <section className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        San Francisco SEO Agency <span className="text-[#25baff]">FAQs</span>
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
                                                const prevContent = prevEl.querySelector(".faq-content");
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
                                        className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"} transition-colors duration-300`}
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
                                    <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SanFranciscoSeo;