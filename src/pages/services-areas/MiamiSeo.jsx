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

// Replace these paths with your actual Miami images
import Banner from "../../assets/denver/banner.avif";
import MiamiImage from "../../assets/denver/img1.avif";

gsap.registerPlugin(ScrollTrigger);

const MiamiSeo = () => {
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
            question: "How long does it take to see SEO results in Miami?",
            answer:
                "Most Miami businesses begin seeing meaningful improvements in rankings and traffic within 3–6 months, depending on competition level and current website authority.",
        },
        {
            question: "Why is local SEO so important for businesses in Miami?",
            answer:
                "Local SEO helps you appear in Google Maps, 'near me' searches, and local pack results — critical for attracting tourists, residents, and seasonal visitors across Miami-Dade.",
        },
        {
            question: "How much do Miami SEO services usually cost?",
            answer:
                "Costs vary based on your goals, industry competition, and project scope. We offer flexible, transparent Miami SEO packages designed for different business sizes.",
        },
        {
            question: "Can SEO really increase leads and bookings for my Miami business?",
            answer:
                "Yes. Well-executed SEO brings high-intent organic visitors who are actively searching for services — leading to more calls, form submissions, reservations, and walk-ins.",
        },
        {
            question: "Do you provide monthly SEO reports for Miami clients?",
            answer:
                "Yes — we deliver clear, detailed monthly reports showing keyword rankings, traffic growth, local visibility improvements, and campaign performance.",
        },
        {
            question: "Which industries in Miami benefit most from SEO?",
            answer:
                "Hospitality, restaurants, real estate, luxury services, law firms, medical practices, tourism companies, e-commerce, and tech startups see especially strong results.",
        },
        {
            question: "Why choose Digital Webguider as your Miami SEO agency?",
            answer:
                "We combine deep Miami market understanding, AI-enhanced optimization techniques, white-hat link building, and conversion-focused strategies to help businesses grow sustainably in one of the most competitive cities.",
        },
    ];

    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+310%",
            title: "Organic Traffic Growth",
            desc: "Average increase achieved for our Miami clients.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "62%",
            title: "Bounce Rate Reduction",
            desc: "Improved user experience through fast, mobile-optimized pages.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+425%",
            title: "Lead & Booking Growth",
            desc: "Strong results from Miami-focused local + intent SEO strategies.",
        },
    ];

    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture High-Intent Miami Searchers",
            desc: "Appear exactly when tourists and locals are searching for your services.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Attract Ready-to-Convert Visitors",
            desc: "Drive qualified traffic from South Florida residents and international travelers.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate Miami 'Near Me' Searches",
            desc: "Rank in map packs for Miami Beach, Brickell, Wynwood, Coral Gables, Downtown, and more.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Reduce Reliance on Paid Ads",
            desc: "Build long-term organic visibility that continues generating leads without ongoing ad spend.",
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Build Trust & Credibility",
            desc: "Top rankings make your Miami business appear more professional and trustworthy.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal & Event Traffic",
            desc: "Rank during Art Basel, Ultra Music Festival, Miami Boat Show, winter season, and major events.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Compete with National & Global Brands",
            desc: "Targeted local + niche SEO helps Miami businesses outrank larger competitors.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Improve Lead Quality & Revenue",
            desc: "Turn organic Miami visitors into high-value customers, bookings, and sales.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "Keyword Research",
            desc: "Miami-specific keyword strategy — high-volume local terms, seasonal trends, tourist intent, competitor gaps, long-tail phrases.",
        },
        {
            icon: <FaPenNib size={28} />,
            title: "Content Marketing",
            desc: "High-quality, SEO-optimized content — blog posts, service pages, guides, Miami lifestyle articles that rank and convert.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "On-Page Optimization",
            desc: "Meta titles & descriptions, heading structure, internal linking, image optimization, schema markup, fast page speed, mobile-first design.",
        },
        {
            icon: <FaServer size={28} />,
            title: "Link Building",
            desc: "White-hat outreach — guest posts on Miami blogs, tourism sites, local directories, sponsorship links, editorial mentions.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Technical SEO",
            desc: "Core Web Vitals optimization, mobile usability, HTTPS, crawl error fixes, structured data, international SEO readiness, site speed.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "Local SEO",
            desc: "Google Business Profile optimization, citation consistency, review generation, location pages for Miami neighborhoods.",
        },
        {
            icon: <FaMicrophone size={28} />,
            title: "Google Business Profile (GBP) Optimization",
            desc: "Profile verification, accurate NAP, professional photos, regular posts, review management, Q&A responses, attributes enhancement.",
        },
    ];

    const features = [
        {
            icon: <FaTools size={28} />,
            title: "Miami Audience-Focused Strategy",
            desc: "We analyze tourist patterns, local demographics, Brickell professionals, Wynwood creatives, and seasonal visitors to target the right people.",
        },
        {
            icon: <FaCity size={28} />,
            title: "Competitive & Market Research",
            desc: "In-depth Miami competitor analysis, keyword gap identification, and local trend tracking to create winning strategies.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Advanced Miami SEO Expertise",
            desc: "Proven on-page, technical, local, and authority-building techniques tailored for Miami’s unique and competitive market.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "Strategic & Prioritized Execution",
            desc: "Clear roadmap — technical fixes first, then content, local SEO, and authority building — executed in logical phases.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Results-Driven SEO Process",
            desc: "Comprehensive audits → custom strategy → implementation → measurement → continuous optimization focused on revenue.",
        },
        {
            icon: <FaChartPie size={28} />,
            title: "Transparent Analytics & Reporting",
            desc: "Monthly insights on rankings, traffic sources, conversions, local visibility, user behavior, and Miami-specific performance.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Miami SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Miami SEO That Amplifies Results
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Miami <span className="text-[#25baff]">SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Dominate South Florida Search Results
                        </h2>
                        <p className="text-black mt-4 max-w-4xl mx-auto">
                            Whether you're a local startup, restaurant, real estate firm, luxury brand, or international company — our Miami SEO services elevate your visibility. From technical foundations to high-converting content, we drive qualified traffic, generate more leads, bookings, and sales, and accelerate sustainable digital growth in the Magic City.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "On-page SEO optimization",
                            "High-quality link building",
                            "Strategic content marketing",
                            "Local search domination",
                            "Technical SEO improvements",
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
                            About Our <span className="text-[#25baff]">Miami SEO Company</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Digital Webguider powers Miami businesses with strategic SEO, targeted PPC, social media marketing, and high-performance web design.
                            <br /><br />
                            Our Miami SEO specialists execute proven methods: on-page optimization, authoritative link building, content that ranks and converts, hyper-local SEO, and continuous technical improvements.
                            <br /><br />
                            We don’t chase rankings for vanity — we focus on qualified traffic, better engagement, higher conversions, and strong ROI in one of the world’s most competitive markets.
                            <br /><br />
                            Miami companies choose us because we deliver measurable, sustainable digital growth.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={MiamiImage}
                            alt="Miami SEO Services – Brickell Skyline, South Beach, Wynwood"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DARK SECTION - WHY MIAMI SEO ================= */}
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
                            Why <span className="text-[#25baff]">Miami SEO</span> Delivers Real Results
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Turn Miami searches into customers with strategies built for the Magic City’s unique market.
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
                                <li>• On-Page SEO Optimization</li>
                                <li>• High-Quality Link Building</li>
                                <li>• Strategic Content Marketing</li>
                                <li>• Local Search Domination</li>
                                <li>• Technical & Core Web Vitals</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We turn Miami searches into real business — hotel bookings, restaurant reservations, real estate inquiries, consultations, and sales. Every optimization targets qualified traffic and revenue impact.
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
                            Turn Miami Searches Into{" "}
                            <span className="text-[#25baff]">Leads & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Strategic Miami SEO captures customers at every stage — from tourists discovering your brand to locals ready to buy.
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
                            Miami SEO vs. <span className="text-[#25baff]">Paid Advertising</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the strategy that builds long-term growth for your Miami business
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

                        {/* Miami SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Miami SEO
                                </h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for consistent, compounding traffic</p>
                                    <p>Requires ongoing optimization investment</p>
                                    <p>Delivers growing results over months/years</p>
                                    <p>Highly targeted by service + Miami neighborhood</p>
                                    <p>Builds trust through rankings & content</p>
                                    <p>Full control over messaging & pages</p>
                                    <p>Takes time to gain momentum</p>
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
                        Talk To Our Miami SEO Experts Now
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
                        Miami SEO Strategies We Execute
                    </h2>
                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        Targeted, high-conversion SEO strategies built for Miami’s competitive landscape, tourism peaks, and local neighborhoods.
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "Keyword Research",
                                head1: "Understand What Miami Searches",
                                text: "Local intent, seasonal tourism terms, neighborhood keywords, competitor gaps — Miami-specific.",
                            },
                            {
                                icon: FaLink,
                                head: "High-Quality Link Building",
                                head1: "Build Real Domain Authority",
                                text: "White-hat links from Miami-relevant blogs, tourism sites, local news, directories.",
                            },
                            {
                                icon: FiPenTool,
                                head: "Content Marketing",
                                head1: "Content That Ranks & Converts",
                                text: "Miami lifestyle blogs, service pages, guides, FAQs — written for searchers and conversions.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "On-Page Optimization",
                                head1: "Strong Technical Foundation",
                                text: "Titles, meta, headings, schema, internal links, speed, mobile optimization.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local SEO for Miami",
                                head1: "Dominate the Miami Map Pack",
                                text: "GBP optimization, citations, reviews, neighborhood landing pages — own local search.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Technical & AI SEO",
                                head1: "Future-Proof Your Rankings",
                                text: "Core Web Vitals, mobile-first, schema, crawl efficiency + AI-enhanced optimization.",
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
                            Our <span className="text-[#25baff]">Miami SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Comprehensive, results-driven SEO solutions powered by data, experience, and the latest AI-enhanced techniques.
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
                        Our Proven Miami
                        <span className="text-[#25baff]"> SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, transparent process designed for Miami businesses — from deep analysis to sustained local dominance.
                        <br />Here’s how we build long-term visibility and revenue in Miami:
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Miami Strategy Development",
                                text: "Technical audit, competitor benchmarking, Miami keyword mapping, custom growth plan.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Titles, content structure, schema, Core Web Vitals, mobile performance, internal linking.",
                            },
                            {
                                head: "Local SEO & GBP Optimization",
                                text: "Google Business mastery, citation cleanup, review strategy, neighborhood-specific pages.",
                            },
                            {
                                head: "Content Creation & Publishing",
                                text: "High-value blogs, guides, service pages, Miami lifestyle content — built for intent & rankings.",
                            },
                            {
                                head: "Authority & Link Building",
                                text: "Strategic outreach to Miami media, tourism blogs, local directories — quality links that move rankings.",
                            },
                            {
                                head: "Ongoing Monitoring & Growth",
                                text: "Rank tracking, monthly reporting, seasonal adjustments, conversion optimization, continuous refinement.",
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
                            Why Miami Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            Local market knowledge + technical precision + conversion-first mindset = measurable growth in Miami’s fast-moving digital landscape.
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
                            Affordable Miami <span className="text-[#25baff]">SEO Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible packages built for Miami startups, restaurants, real estate firms, hotels, luxury brands, and growing companies.
                        </p>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Every plan includes keyword research, on-page optimization, content strategy, technical fixes,
                            local SEO, monthly reporting, and dedicated support — tailored to help your Miami business
                            rank higher and attract more qualified customers.
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
                                    <p>SEO Audit & Strategy Planning</p>
                                    <p>Keyword Research & Mapping</p>
                                    <p>On-Page Optimization (Up to 10 Pages)</p>
                                    <p>Basic Technical SEO Fixes</p>
                                    <p>Content Recommendations</p>
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
                                    <p>Advanced SEO Strategy</p>
                                    <p>In-Depth Competitor Analysis</p>
                                    <p>On-Page Optimization (Up to 20 Pages)</p>
                                    <p>Technical SEO + Core Web Vitals</p>
                                    <p>Content Creation Guidance (4 pieces/mo)</p>
                                    <p>Local SEO & Citation Building</p>
                                    <p>Link Building Outreach (3–5 links/mo)</p>
                                    <p>Detailed Monthly Analytics Report</p>
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
                                    <p>Full-Scale SEO Growth Strategy</p>
                                    <p>Deep Market & Competitor Intelligence</p>
                                    <p>Unlimited On-Page Optimization</p>
                                    <p>Advanced Technical SEO + Schema</p>
                                    <p>Content Creation (8 pieces/mo)</p>
                                    <p>Aggressive Link Building (8–12 links/mo)</p>
                                    <p>Local SEO Domination + Review Strategy</p>
                                    <p>Conversion Rate Optimization Focus</p>
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
                        Miami SEO Agency <span className="text-[#25baff]">FAQs</span>
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

export default MiamiSeo;