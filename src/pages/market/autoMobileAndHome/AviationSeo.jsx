import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { FaPlaneDeparture, FaBullseye, FaRoute, FaGlobe, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { FaFileAlt, FaTools, FaDatabase, FaTachometerAlt, FaMapMarkedAlt, FaLink, } from "react-icons/fa";
import { FaAward, FaUsers, FaGoogle, FaCogs, FaChartBar, FaCheckCircle } from "react-icons/fa";


import Aviation from "../../../assets/market/automobileHome/aviation.avif";


gsap.registerPlugin(ScrollTrigger);

const AviationSeo = () => {
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
            question: "How long does it take to see results with Aviation SEO?",
            answer: "It generally takes 3–6 months to see measurable results from an aviation SEO campaign. The timeline depends on competition, keyword difficulty, website condition, and the consistency of optimization efforts.",
        },
        {
            question: "Do I need ongoing Aviation SEO services, or is it a one-time investment?",
            answer: "Aviation SEO is an ongoing process. Search engine algorithms evolve, competitors optimize continuously, and new aviation trends emerge. Consistent SEO ensures sustained rankings, traffic growth, and long-term visibility.",
        },
        {
            question: "How can airlines leverage seasonal trends for SEO?",
            answer: "Airlines can target seasonal travel keywords, holiday routes, event-based searches, and destination-specific campaigns. Creating timely content and optimizing landing pages for peak seasons improves traffic and bookings.",
        },
        {
            question: "Why is 'flight delay compensation' a high-value keyword in aviation SEO?",
            answer: "This keyword reflects strong user intent and high search demand. Users searching for compensation information are actively looking for solutions, making it a high-conversion opportunity for airlines and legal aviation services.",
        },
        {
            question: "What is the impact of drone services on aviation SEO?",
            answer: "Drone-related services are a rapidly growing niche within aviation. Targeting drone operations, aerial photography, inspections, and compliance keywords can help capture emerging market demand.",
        },
        {
            question: "What are the best SEO strategies for promoting niche aviation blogs?",
            answer: "High-quality content creation, long-tail keyword targeting, backlink acquisition from aviation publications, and consistent content updates help niche aviation blogs build authority and organic visibility.",
        },
        {
            question: "How can airlines improve their SEO for in-flight Wi-Fi services?",
            answer: "Airlines can optimize service pages with relevant keywords, technical details, FAQs, and customer-focused content. Structured data and internal linking further enhance discoverability.",
        },
        {
            question: "How can airlines optimize for voice search in the aviation sector?",
            answer: "Optimizing for conversational keywords, question-based queries, and structured FAQ content improves voice search performance, especially for travel-related and real-time aviation queries.",
        },
        {
            question: "What role do aviation forums play in link-building strategies?",
            answer: "Aviation forums and industry communities can generate relevant backlinks, referral traffic, and brand visibility when used strategically and authentically.",
        },
    ];


    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Advanced Keyword Research",
            desc: "Identify high-intent aviation search terms including charters, MRO services, training programs, and destination-based queries.",
        },
        {
            icon: <FaFileAlt size={28} />,
            title: "On-Page Content Optimization",
            desc: "Enhance meta tags, structured headings, and aviation-focused content to improve rankings and user engagement.",
        },
        {
            icon: <FaTools size={28} />,
            title: "Technical SEO Enhancements",
            desc: "Resolve crawl issues, optimize site architecture, and improve indexing for better search engine performance.",
        },
        {
            icon: <FaDatabase size={28} />,
            title: "Schema & Structured Data",
            desc: "Implement aviation-specific schema to improve visibility for services, routes, and key offerings in search results.",
        },
        {
            icon: <FaTachometerAlt size={28} />,
            title: "Website Speed Optimization",
            desc: "Improve Core Web Vitals, compress assets, and enhance loading times for seamless browsing experiences.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Local Aviation SEO Strategy",
            desc: "Boost rankings for airport services, charter providers, and aviation businesses in targeted geographic regions.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Authoritative Link Building",
            desc: "Acquire high-quality backlinks from aviation, travel, and industry-related websites to strengthen domain authority.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Performance Analytics & Reporting",
            desc: "Track keyword rankings, organic traffic, and conversions with transparent performance insights.",
        },
        {
            icon: <FaPlaneDeparture size={28} />,
            title: "Conversion-Focused SEO Strategy",
            desc: "Align SEO efforts with booking funnels and inquiry forms to turn aviation website traffic into qualified leads.",
        },
    ];


    const services = [
        "Aviation keyword research & strategy",
        "Targeting aviation-specific search terms",
        "Competitor analysis to identify gaps",
        "On-Page optimization",
        "Creating optimized aviation landing pages",
        "Technical SEO enhancements",
        "Blog creation on aviation trends",
        "Guides, whitepapers, and videos for informational searches",
        "Optimizing for 'near me' searches",
        "Managing Google Business Profile",
        "Securing backlinks from aviation-related publications",
        "Analytics and reporting",
        "Monthly performance tracking",
        "Real-time insights into traffic, rankings, and ROI",
    ];

    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Aviation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Aviation Seo</h1>
                    <p className="mt-6 text-xl text-gray-300">
                        Aviation SEO services designed to boost your airline, charter, or aviation business visibility in competitive search results.
                    </p>
                </div>
            </section>



            {/* ================= WHAT IS Aviation? ================= */}

            <section
                ref={whoRef}
                className="relative py-20 px-6 overflow-hidden bg-[#020617] mt-20"
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
                            What is
                            <span className="text-[#25baff]"> Aviation SEO?</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-200 leading-relaxed mb-6">
                                Aviation SEO (Search Engine Optimization) is the process of optimizing
                                websites and digital marketing strategies specifically for businesses
                                in the aviation industry. It improves online visibility on search engines
                                like Google and Bing for aviation-related searches.
                            </p>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                With Our Aviation SEO Services, You Get:
                            </h3>

                            <ul className="space-y-3 text-gray-300 mb-6">
                                <li>• Higher rankings for aviation-related keywords</li>
                                <li>• Increased organic traffic from targeted audiences</li>
                                <li>• Optimized content for airlines, charters, and MRO services</li>
                                <li>• Local and global search visibility improvements</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                Our SEO Process Includes:
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li>• Aviation market and competitor research</li>
                                <li>• Keyword strategy and on-page optimization</li>
                                <li>• Technical SEO and website performance enhancement</li>
                                <li>• High-quality content creation and optimization</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={Aviation}
                                alt="Aviation SEO"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Key Challenges & Opportunities in
                        <span className="text-[#25baff]"> Aviation SEO</span>
                    </h2>

                    <p className="font-semibold text-gray-500 mb-3 px-6">
                        Aviation-related searches are unique, highly competitive, and intent-driven. A strategic SEO approach helps aviation businesses capture targeted traffic and convert high-value customers.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearch,
                                head: "Highly Specific Queries",
                                text: "Aviation customers use detailed, long-tail keywords such as aircraft maintenance for specific models or private jet charter for limited passengers. Targeting these niche queries improves qualified traffic.",
                            },
                            {
                                icon: IoMdTrendingUp,
                                head: "Search Intent Varies Widely",
                                text: "From informational searches like pilot training requirements to transactional queries like booking private charters, Aviation SEO strategies must address every stage of the buyer journey.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Geo-Specific Searches",
                                text: "Location plays a major role in aviation searches. Optimizing for local SEO helps businesses rank for queries like aircraft repair near me or flight schools in specific regions.",
                            },
                            {
                                icon: FaCalendarAlt,
                                head: "Seasonal & Event-Driven Trends",
                                text: "Aviation demand often spikes during holidays, air shows, and corporate events. Targeting time-sensitive keywords helps capture seasonal opportunities.",
                            },
                            {
                                icon: FaBuilding,
                                head: "Competition from Industry Giants",
                                text: "Large aviation companies dominate search rankings. A focused niche strategy and strong local SEO help smaller aviation businesses compete effectively.",
                            },
                            {
                                icon: IoShieldCheckmark,
                                head: "Regulatory & Compliance",
                                text: "The aviation sector is highly regulated. Optimizing for keywords related to certifications, safety standards, and compliance builds authority and trust.",
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


            {/* ================= WHY SEO? ================= */}
            <section className="py-28 bg-gradient-to-br from-[#020202] via-[#25baff] to-[#a8d97c]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                        Why Aviation Businesses Need
                        <span className="text-[#020202]"> Professional SEO Services</span>
                    </h2>

                    <p className="font-semibold text-white/80 mb-3 px-6">
                        Aviation SEO delivers measurable growth by increasing visibility,
                        attracting high-intent users, and building long-term authority in a competitive industry.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaPlaneDeparture,
                                head: "Higher Rankings in Niche Market",
                                text: "Rank higher for aviation-specific keywords such as private jet charters, aircraft maintenance, and aviation training courses to stand out in competitive search results.",
                            },
                            {
                                icon: FaBullseye,
                                head: "Targeted Traffic for Better ROI",
                                text: "Attract high-intent users actively searching for aviation services, increasing inquiries, bookings, and overall return on investment.",
                            },
                            {
                                icon: FaRoute,
                                head: "Optimize Buyer Journey",
                                text: "Ensure visibility at every stage of the decision-making process, from initial research to final booking or service inquiry.",
                            },
                            {
                                icon: FaGlobe,
                                head: "Global and Local Reach",
                                text: "Capture both international and location-based searches such as private jet charter in specific cities or regional aviation services.",
                            },
                            {
                                icon: FaShieldAlt,
                                head: "Building Credibility and Trust",
                                text: "Establish authority through optimized content, case studies, certifications, and industry-focused SEO strategies.",
                            },
                            {
                                icon: FaChartLine,
                                head: "Long-Term Growth and Stability",
                                text: "Generate consistent organic traffic and sustainable business growth without relying solely on paid advertising campaigns.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center shadow-lg transition-all duration-500 hover:bg-white hover:-translate-y-3 hover:shadow-2xl"
                                >
                                    <Icon
                                        className="text-4xl text-white mb-6 mx-auto group-hover:text-[#25baff] transition-colors duration-300"
                                    />

                                    <h3 className="font-extrabold text-xl mb-3 text-white group-hover:text-[#020202] transition-colors duration-300">
                                        {item.head}
                                    </h3>

                                    <p className="text-white/80 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* ================= WComprehensive Strategy  ================= */}

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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#020202] mb-4">
                            Comprehensive Strategy for{" "}
                            <span className="text-[#25baff]">Aviation SEO Success</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our Aviation SEO framework combines technical precision, strategic content, and data-driven optimization to maximize visibility, authority, and qualified lead generation.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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


            {/* Powerful Benefits  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        6 Powerful Benefits of
                        <span className="text-[#25baff]"> Aviation SEO Services</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Aviation SEO helps your business rank higher, attract high-intent customers, and build long-term authority in a competitive aviation market.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Higher Ranking in Niche Market",
                                text: "Aviation SEO helps your website rank higher on search engine results pages (SERPs) for aviation-specific keywords such as private jet charters, aircraft maintenance, and aviation training courses.",
                            },
                            {
                                head: "Targeted Traffic for Better ROI",
                                text: "Attract high-intent users actively searching for aviation services. By targeting the right audience, you increase inquiries, bookings, and overall return on investment.",
                            },
                            {
                                head: "Optimize Buyer Journey",
                                text: "Ensure your aviation business is visible at every stage of the buyer journey — from initial research to final booking or service inquiry.",
                            },
                            {
                                head: "Global and Local Reach",
                                text: "Capture both international and location-based searches such as private jet charter in specific cities or region-focused aviation services.",
                            },
                            {
                                head: "Building Credibility and Trust",
                                text: "Position your brand as an industry authority through optimized content, certifications, case studies, and improved search visibility.",
                            },
                            {
                                head: "Long-Term Growth and Stability",
                                text: "Generate consistent organic traffic and qualified leads without relying entirely on paid advertising campaigns.",
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


            {/*Price section*/}

            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable Packages for
                            <span className="text-[#25baff]"> SEO</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose a plan that fits your business stage and growth goals.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* SILVER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Basic
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-gray-300">$</span>
                                    <span className="text-5xl font-bold text-gray-300">
                                        500
                                    </span>
                                    <p className="text-gray-400">per month</p>
                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>30 Keywords</p>
                                    <p>40 Backlinks (per month)</p>
                                    <p>GBP (GMB) - ✖</p>
                                    <p>Geotagging - ✖</p>
                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

                            </div>

                        </div>


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
                                    <p>40 Keywords</p>
                                    <p>60 Backlinks (per month)</p>
                                    <p>GBP (GMB) - ✖</p>
                                    <p>Geotagging - ✖</p>
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

                                    <p>50 Keywords</p>
                                    <p>100 Backlinks (per month)</p>
                                    <p>GBP (GMB) - ✔</p>
                                    <p>Geotagging - ✔</p>

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
                                    <p>100 Keywords</p>
                                    <p>200 Backlinks (per month)</p>
                                    <p>GBP (GMB) - ✔</p>
                                    <p>Geotagging - ✔</p>
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



            {/* why choose us  */}
            {/* why choose us  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Why Choose Digital Guider for
                        <span className="text-[#25baff]"> Aviation SEO?</span>
                    </h2>

                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        We combine aviation industry expertise with advanced SEO strategies to deliver measurable growth, higher rankings, and long-term digital success.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaAward,
                                head: "Unparalleled Expertise",
                                text: "We understand airlines, private charters, MRO services, and aviation training institutions—allowing us to create SEO strategies tailored specifically for the aviation industry.",
                            },
                            {
                                icon: FaBullseye,
                                head: "Specialized SEO Approach",
                                text: "Our aviation SEO campaigns are designed to target niche keywords, complex buyer journeys, and high-intent aviation audiences.",
                            },
                            {
                                icon: FaUsers,
                                head: "Dedicated Support Team",
                                text: "Our experienced team provides continuous support, insights, and optimization to ensure your aviation brand stays ahead of competitors.",
                            },
                            {
                                icon: FaSearch,
                                head: "Comprehensive SEO Services",
                                text: "From keyword research and technical SEO to content marketing and link building, we provide complete aviation SEO solutions.",
                            },
                            {
                                icon: FaGoogle,
                                head: "Google Best Practices Alignment",
                                text: "We align with Google’s E-E-A-T principles and Core Web Vitals to ensure sustainable rankings and long-term visibility.",
                            },
                            {
                                icon: FaCogs,
                                head: "Tailored SEO Strategies",
                                text: "Every aviation business is unique. We craft personalized strategies that match your goals, services, and target markets.",
                            },
                            {
                                icon: FaGlobe,
                                head: "Local & Global Visibility",
                                text: "We optimize your presence for both regional airport searches and international aviation service markets.",
                            },
                            {
                                icon: FaChartBar,
                                head: "Transparent Reporting",
                                text: "Receive detailed performance reports covering rankings, traffic growth, and measurable ROI improvements.",
                            },
                            {
                                icon: FaCheckCircle,
                                head: "Proven Track Record",
                                text: "Our aviation SEO campaigns consistently deliver improved rankings, qualified leads, and sustainable growth.",
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

                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Services Grid */}
            <section className="py-28 bg-[#020202] relative overflow-hidden">

                {/* Soft Accent Glow Effects */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#25baff]/20 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a8d97c]/20 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                            Breakdown of Our Core{" "}
                            <span className="text-[#25baff]">
                                Aviation SEO Services
                            </span>
                        </h2>

                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            We deliver structured, performance-focused aviation SEO solutions
                            designed to enhance rankings, drive qualified traffic, and build
                            long-term digital authority.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-[#111111] border border-white/5 rounded-2xl p-7 flex items-start gap-4 transition-all duration-500 hover:border-[#25baff] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,186,255,0.25)]"
                            >
                                <FaCheckCircle className="text-[#a8d97c] text-xl mt-1 group-hover:text-[#25baff] transition-colors duration-300" />

                                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {item}
                                </p>
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

export default AviationSeo;
