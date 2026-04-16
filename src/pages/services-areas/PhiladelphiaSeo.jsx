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
import { FaMapMarkedAlt, FaUsers, FaHandshake, FaChartLine, FaCalendarAlt, FaStar } from "react-icons/fa";
import { FaCity, FaBullseye, FaUserTie, FaTools, FaChartPie, FaCheckCircle, FaUserCheck } from "react-icons/fa";
import { FaSearch, FaLink, FaPenNib, FaCogs, FaServer, FaShoppingCart, FaMicrophone } from "react-icons/fa";


import Banner from "../../assets/denver/philadelphiaBanner.avif";
import PhillyImage from "../../assets/denver/philadelphiaseo.avif";

gsap.registerPlugin(ScrollTrigger);

const PhiladelphiaSeo = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);
    const [activeFaq, setActiveFaq] = useState(0);
    const faqRefs = useRef([]);



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
            question: "How long does it take to see SEO results in Philadelphia?",
            answer:
                "Most Philly businesses start seeing noticeable improvements in rankings and traffic within 3–6 months, depending on local competition and current site strength.",
        },
        {
            question: "Why is local SEO important for Philadelphia small businesses?",
            answer:
                "Local SEO helps you rank in Google Maps and 'near me' searches across Center City, Fishtown, Manayunk, South Philly, Chestnut Hill, and beyond — bringing in nearby customers ready to visit or call.",
        },
        {
            question: "How much do Philadelphia SEO services cost?",
            answer:
                "Pricing depends on your goals, industry competition, and scope of work. We offer transparent, competitive Philadelphia SEO packages tailored for small businesses and growing brands.",
        },
        {
            question: "Can SEO actually increase real revenue for my Philly business?",
            answer:
                "Yes — we focus on high-intent organic traffic that turns into phone calls, foot traffic, form submissions, and sales — not just vanity metrics like rankings.",
        },
        {
            question: "Do you provide monthly SEO reports?",
            answer:
                "Yes. Every month we deliver clear reports showing keyword movements, traffic growth, local visibility gains, and real business impact.",
        },
        {
            question: "Which Philadelphia industries benefit most from local SEO?",
            answer:
                "Restaurants, contractors, law firms, medical practices, real estate agents, home services, retail shops, gyms, salons, and professional services see especially strong returns.",
        },
        {
            question: "Why choose Digital Webguider as your Philadelphia SEO company?",
            answer:
                "We combine Philly-specific local market knowledge, white-hat strategies, transparent reporting, and a strong focus on actual revenue growth — not just SEO numbers.",
        },
    ];

    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+295%",
            title: "Organic Traffic Increase",
            desc: "Average growth delivered for Philadelphia-area clients.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "58%",
            title: "Bounce Rate Improvement",
            desc: "Better user experience and faster, mobile-friendly sites.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+380%",
            title: "Lead & Call Growth",
            desc: "Real revenue impact from strong Philly local SEO.",
        },
    ];

    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture High-Intent Philly Searchers",
            desc: "Show up when people in your neighborhood are actively looking for your services.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Drive Nearby Customers",
            desc: "Attract local residents and workers ready to visit, call, or book.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate Philly 'Near Me' Searches",
            desc: "Rank in map packs for Center City, Fishtown, Northern Liberties, South Philly, University City, and more.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Reduce Paid Ad Dependency",
            desc: "Build sustainable organic traffic that keeps generating leads month after month.",
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Build Local Trust & Authority",
            desc: "Top local rankings make your Philadelphia business look more credible and established.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal & Event Traffic",
            desc: "Rank during Eagles games, Phillies season, Made in America Festival, holiday shopping peaks, etc.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Compete with Bigger Chains",
            desc: "Smart local SEO helps independent Philly businesses outrank national brands.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Turn Clicks Into Revenue",
            desc: "Optimized pages convert organic Philly visitors into real customers and higher revenue.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "Keyword Research",
            desc: "Philadelphia-specific keyword targeting — neighborhood terms, service + location combos, competitor gaps, high-intent local phrases.",
        },
        {
            icon: <FaPenNib size={28} />,
            title: "Content Marketing",
            desc: "SEO-optimized blogs, service pages, neighborhood guides, FAQs — written to rank and convert Philly searchers.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "On-Page Optimization",
            desc: "Meta tags, headings, internal linking, schema markup for local businesses, image optimization, fast loading, mobile-first design.",
        },
        {
            icon: <FaServer size={28} />,
            title: "Link Building",
            desc: "White-hat outreach — Philly blogs, local news, chamber of commerce, sponsorships, neighborhood directories.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Technical SEO",
            desc: "Core Web Vitals, mobile usability, HTTPS, crawl fixes, structured data, site speed optimization.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "Local SEO",
            desc: "Google Business Profile optimization, citation consistency, review generation, location-specific landing pages.",
        },
        {
            icon: <FaMicrophone size={28} />,
            title: "Google Business Profile (GBP) Optimization",
            desc: "Verification, accurate NAP, high-quality photos, regular posts, review management, Q&A responses, attributes enhancement.",
        },
        {
            icon: <FaStar size={28} />,
            title: "Online Reputation Management",
            desc: "Customer review monitoring, response strategies, reputation building campaigns, rating improvements, brand trust enhancement across search and local platforms.",
        },
    ];

    const features = [
        {
            icon: <FaTools size={28} />,
            title: "Philly Neighborhood-Focused Strategy",
            desc: "We target customers by neighborhood — Fishtown, Rittenhouse, Manayunk, South Philly, Chestnut Hill — to reach the right local audience.",
        },
        {
            icon: <FaCity size={28} />,
            title: "Competitive Local Research",
            desc: "Deep Philadelphia competitor analysis, keyword gap discovery, and neighborhood trend tracking.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Proven Local SEO Execution",
            desc: "On-page, technical, citation, review, and authority-building tactics built for Philadelphia’s market.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "Clear, Prioritized Roadmap",
            desc: "Step-by-step plan: technical foundation → local optimization → content → links → continuous improvement.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Revenue-Focused SEO Process",
            desc: "Audit → strategy → execution → measurement → refinement — everything tied to real business results.",
        },
        {
            icon: <FaChartPie size={28} />,
            title: "Transparent Monthly Reporting",
            desc: "Keyword rankings, traffic growth, call tracking, form submissions, local visibility — clear and honest.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Philadelphia SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Philadelphia Local SEO Company
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Philadelphia <span className="text-[#25baff]">SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Real Revenue Growth — Not Just Rankings
                        </h2>
                        <p className="text-black mt-4 max-w-4xl mx-auto">
                            Uncover the local SEO strategies that help Philadelphia small businesses stand out across the city. From Center City to Fishtown, South Philly to Chestnut Hill — our Philadelphia SEO solutions deliver competitive plans, customized pricing, qualified leads, foot traffic, calls, and actual revenue growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Advanced on-page SEO optimization",
                            "Authority-focused local link building",
                            "Location-driven content strategy",
                            "Google Map Pack ranking optimization",
                            "Comprehensive technical SEO improvements",
                            "Local keyword research and targeting"
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
                            About Our <span className="text-[#25baff]">Philadelphia SEO Company</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Digital Webguider helps Philadelphia small businesses and local brands grow with focused local SEO, targeted PPC, social media, and modern website design.
                            <br /><br />
                            Our Philly SEO team delivers results-driven tactics: on-page optimization, authoritative local links, neighborhood-specific content, Google Business Profile mastery, and technical upgrades.
                            <br /><br />
                            We prioritize real business outcomes — more calls, more walk-ins, more revenue — over empty vanity metrics.
                            <br /><br />
                            Local Philadelphia companies trust us to deliver honest, measurable growth in a competitive city market.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={PhillyImage}
                            alt="Philadelphia SEO Services – Center City, Fishtown, Liberty Bell area"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DARK SECTION - WHY PHILADELPHIA SEO ================= */}
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
                            Why <span className="text-[#25baff]">Philadelphia Local SEO</span> Works
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Bring real customers through the door with Philly-tailored local SEO strategies.
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
                                <li>• High-Quality Local Link Building</li>
                                <li>• Neighborhood Content Marketing</li>
                                <li>• Local Map Pack Domination</li>
                                <li>• Technical & GBP Optimization</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We turn Philadelphia searches into real phone calls, walk-ins, bookings, and revenue — not just impressions or rankings. Every change is built for qualified local traffic and measurable business growth.
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
                            Turn Philly Searches Into{" "}
                            <span className="text-[#25baff]">Customers & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Local SEO brings the right people from your neighborhood to your door — ready to buy or book.
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
                            Philadelphia SEO vs. <span className="text-[#25baff]">Paid Advertising</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the strategy that builds long-term local growth for your Philadelphia business
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

                        {/* Philadelphia SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Philadelphia SEO
                                </h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for steady, compounding local traffic</p>
                                    <p>Requires consistent optimization investment</p>
                                    <p>Results grow stronger over time</p>
                                    <p>Highly targeted by service + Philly neighborhood</p>
                                    <p>Builds long-term trust through rankings</p>
                                    <p>Full control over messaging & pages</p>
                                    <p>Takes time to build momentum</p>
                                    <p>Scales without ongoing ad spend</p>
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
                        Talk To Our Philadelphia SEO Experts Now
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
                        Philadelphia Local SEO Strategies We Execute
                    </h2>
                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        Targeted, neighborhood-focused SEO strategies built for Philadelphia’s diverse local economy and competitive landscape.
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "Keyword Research",
                                head1: "Find What Philly Searches",
                                text: "Neighborhood + service keywords, high-intent local phrases, competitor gaps — Philly-specific.",
                            },
                            {
                                icon: FaLink,
                                head: "High-Quality Link Building",
                                head1: "Build Local Domain Power",
                                text: "White-hat links from Philly blogs, local news, chambers, neighborhood associations.",
                            },
                            {
                                icon: FiPenTool,
                                head: "Content Marketing",
                                head1: "Content That Ranks & Converts",
                                text: "Neighborhood guides, service pages, blogs — written for Philly searchers and conversions.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "On-Page Optimization",
                                head1: "Strong On-Page Foundation",
                                text: "Titles, meta, schema, internal links, speed, mobile optimization — local ready.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local SEO for Philadelphia",
                                head1: "Own Your Philly Map Pack",
                                text: "GBP optimization, citations, reviews, neighborhood landing pages — dominate local.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Technical & Future-Proof SEO",
                                head1: "Stay Ahead in Philly Search",
                                text: "Core Web Vitals, mobile-first, schema, crawl efficiency + modern optimization tactics.",
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
                            Our <span className="text-[#25baff]">Philadelphia Local SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Full-service local SEO built for real Philadelphia business growth — from audits to revenue-focused optimization.
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
                        Our Proven Philadelphia
                        <span className="text-[#25baff]"> Local SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, transparent process designed for Philadelphia small businesses — from deep local audit to sustained neighborhood dominance.
                        <br />Here’s how we build real revenue in Philly:
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Philadelphia Strategy",
                                text: "Technical audit, local competitor analysis, neighborhood keyword mapping, revenue-focused roadmap.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Titles, content, schema, Core Web Vitals, mobile performance, internal linking.",
                            },
                            {
                                head: "Local SEO & GBP Mastery",
                                text: "Google Business optimization, citation building, review strategy, neighborhood pages.",
                            },
                            {
                                head: "Content Creation & Publishing",
                                text: "Neighborhood guides, service pages, blogs — built for Philly intent and rankings.",
                            },
                            {
                                head: "Local Authority & Link Building",
                                text: "Outreach to Philly media, blogs, directories, associations — quality local links.",
                            },
                            {
                                head: "Ongoing Monitoring & Revenue Growth",
                                text: "Rank & call tracking, monthly reporting, seasonal updates, conversion optimization.",
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
                            Why Philadelphia Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">Local SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            Deep Philly market understanding + technical precision + revenue-first mindset = real local growth for small businesses.
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
                            Affordable Philadelphia <span className="text-[#25baff]">SEO Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible local SEO packages designed for Philadelphia small businesses, contractors, restaurants, and service providers.
                        </p>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Every plan includes local keyword research, on-page optimization, Google Business optimization,
                            citation building, monthly reporting, and dedicated support — built to help your Philly business
                            get found, get called, and get more revenue.
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
                                    <p>Local SEO Audit & Strategy</p>
                                    <p>Keyword Research & Mapping</p>
                                    <p>On-Page Optimization (Up to 10 Pages)</p>
                                    <p>Basic Technical SEO Fixes</p>
                                    <p>Content Recommendations</p>
                                    <p>Google Business Profile Setup</p>
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
                                    <p>Advanced Local Strategy</p>
                                    <p>Neighborhood Competitor Analysis</p>
                                    <p>On-Page Optimization (Up to 20 Pages)</p>
                                    <p>Technical SEO + Core Web Vitals</p>
                                    <p>Content Creation Guidance (4 pieces/mo)</p>
                                    <p>Local Citations & GBP Optimization</p>
                                    <p>Link Building Outreach (3–5 links/mo)</p>
                                    <p>Detailed Monthly Analytics Report</p>
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
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">PREMIUM</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#607AFE]">$</span>
                                    <span className="text-5xl font-bold text-[#607AFE]">1400</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Full Local Growth Strategy</p>
                                    <p>Deep Neighborhood & Competitor Insights</p>
                                    <p>Unlimited On-Page Optimization</p>
                                    <p>Advanced Technical SEO + Schema</p>
                                    <p>Content Creation (8 pieces/mo)</p>
                                    <p>Aggressive Local Link Building (8–12 links/mo)</p>
                                    <p>Local SEO Domination + Review Management</p>
                                    <p>Conversion Rate Optimization Focus</p>
                                    <p>Priority Support & Weekly Check-ins</p>
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

            {/* ================= FAQ ================= */}
            <section className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Philadelphia Local SEO <span className="text-[#25baff]">FAQs</span>
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

export default PhiladelphiaSeo;