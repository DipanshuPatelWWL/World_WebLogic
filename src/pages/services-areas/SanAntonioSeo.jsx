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
import { FaMapMarkedAlt, FaUsers, FaHandshake, FaChartLine, FaCalendarAlt, FaMapSigns } from "react-icons/fa";
import { FaCity, FaBullseye, FaUserTie, FaTools, FaChartPie, FaCheckCircle, FaUserCheck } from "react-icons/fa";
import { FaSearch, FaLink, FaPenNib, FaCogs, FaServer, FaShoppingCart, FaMicrophone } from "react-icons/fa";


import Banner from "../../assets/denver/SanAntonioBanner.avif";
import SanAntonioImage from "../../assets/denver/SanAntonioSEO.avif";

gsap.registerPlugin(ScrollTrigger);

const SanAntonioSeo = () => {
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
            question: "How long does it take to see SEO results in San Antonio?",
            answer:
                "Most San Antonio businesses begin seeing meaningful ranking and traffic improvements within 3–6 months, depending on competition in your vertical and current site authority.",
        },
        {
            question: "Why is vertical SEO important for San Antonio service businesses?",
            answer:
                "Vertical SEO targets high-intent searchers in specific industries — home services, healthcare, legal, HVAC, roofing, plumbing — helping you dominate your niche in the Alamo City.",
        },
        {
            question: "How much do San Antonio SEO services cost?",
            answer:
                "Pricing varies by industry competition, goals, and scope. We offer flexible, results-oriented San Antonio SEO packages tailored to service-based businesses.",
        },
        {
            question: "Can SEO increase actual conversions and revenue in San Antonio?",
            answer:
                "Yes. Our focus is on qualified traffic that becomes phone calls, form submissions, bookings, and jobs — real revenue growth, not just rankings.",
        },
        {
            question: "Do you provide monthly performance reports?",
            answer:
                "Yes — detailed monthly reports showing keyword progress, traffic sources, conversion metrics, and vertical-specific performance insights.",
        },
        {
            question: "Which San Antonio industries benefit most from SEO?",
            answer:
                "Home services (roofing, plumbing, HVAC), healthcare providers, legal practices, auto repair, real estate, restaurants, and other service-oriented verticals see the strongest ROI.",
        },
        {
            question: "Why choose Digital Webguider for San Antonio SEO?",
            answer:
                "We combine vertical-specific SEO expertise, advanced technical optimization, multi-channel strategies, and a relentless focus on conversions — turning innovation into measurable success for San Antonio businesses.",
        },
    ];

    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+340%",
            title: "Organic Traffic Growth",
            desc: "Average increase for San Antonio service-industry clients.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "61%",
            title: "Bounce Rate Reduction",
            desc: "Faster, more relevant pages built for service searchers.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+460%",
            title: "Conversion & Job Growth",
            desc: "Real revenue impact from vertical-focused San Antonio SEO.",
        },
    ];

    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture High-Intent Service Searchers",
            desc: "Appear when San Antonio residents need your exact service right now.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Drive Qualified Local Leads",
            desc: "Attract homeowners and businesses ready to hire — not just browsers.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate San Antonio Vertical Searches",
            desc: "Rank #1 for niche + location terms across the city and surrounding areas.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Lower Paid Ad Spend Over Time",
            desc: "Build sustainable organic visibility that keeps delivering jobs year-round.",
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Establish Vertical Authority",
            desc: "Top rankings in your service niche signal expertise and trust.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal Demand Spikes",
            desc: "Rank during summer AC season, storm recovery, holiday prep, and more.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Outrank National Chains",
            desc: "Vertical + local SEO helps San Antonio businesses beat big franchises.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Boost Conversion Rates & Revenue",
            desc: "Optimized pages turn searchers into booked jobs and higher revenue.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "Vertical Keyword Research",
            desc: "Deep industry-specific keyword targeting — high-value service + San Antonio location phrases, competitor gaps, buyer intent.",
        },
        {
            icon: <FaPenNib size={28} />,
            title: "Service-Focused Content",
            desc: "High-conversion blogs, service pages, FAQs, guides — written to rank and close deals in your vertical.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "On-Page Optimization",
            desc: "Meta tags, schema for services, internal linking, content structure, speed, mobile-first — built for conversions.",
        },
        {
            icon: <FaServer size={28} />,
            title: "Authority Link Building",
            desc: "Vertical-relevant outreach — industry blogs, local directories, associations, guest posts, sponsorships.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Technical SEO",
            desc: "Core Web Vitals, mobile usability, HTTPS, crawl optimization, structured data for local services, site speed.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "Local + Vertical SEO",
            desc: "Google Business optimization, citation consistency, review strategy, service-area landing pages.",
        },
        {
            icon: <FaMicrophone size={28} />,
            title: "Google Business Profile Optimization",
            desc: "Professional photos, service categories, regular posts, review responses, Q&A management — maximum visibility.",
        },
        {
            icon: <FaMapSigns size={28} />,
            title: "Local Citation Management",
            desc: "Accurate business listings across directories, NAP consistency, citation cleanup, niche directory submissions, and improved local trust signals.",
        },
    ];

    const features = [
        {
            icon: <FaTools size={28} />,
            title: "Vertical-First Strategy",
            desc: "We build campaigns around your specific service industry — HVAC, roofing, legal, healthcare — not generic SEO.",
        },
        {
            icon: <FaCity size={28} />,
            title: "San Antonio Market Intelligence",
            desc: "Local competitor analysis, service-area keyword gaps, seasonal trend tracking — tailored to the Alamo City.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Conversion-Optimized SEO",
            desc: "Technical excellence + content + authority built to turn rankings into phone calls and signed jobs.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "Multi-Channel Integration",
            desc: "SEO works alongside Google Ads, social, email — unified strategy for maximum growth.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Innovation-Driven Process",
            desc: "Audit → vertical strategy → technical + content execution → measurement → continuous scaling.",
        },
        {
            icon: <FaChartPie size={28} />,
            title: "Transparent Revenue Reporting",
            desc: "Track leads, calls, form submissions, job value — real business metrics every month.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">San Antonio SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Scale Up San Antonio SEO
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            San Antonio <span className="text-[#25baff]">SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Turn Our Innovation Into Your Success
                        </h2>
                        <p className="text-black mt-4 max-w-4xl mx-auto">
                            San Antonio SEO experts fuel growth with vertical SEO, advanced technical optimization, and smart multi-channel marketing — boosting conversions and revenue in the competitive service economy of the Alamo City.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Vertical-specific keyword targeting",
                            "High-authority link building",
                            "Conversion-focused content",
                            "Local + service-area domination",
                            "Technical & Core Web Vitals optimization",
                            "Advanced competitor SEO analysis"
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
                            About Our <span className="text-[#25baff]">San Antonio SEO Company</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Digital Webguider helps San Antonio service businesses scale with vertical-focused SEO, technical excellence, multi-channel strategies, and high-conversion web design.
                            <br /><br />
                            Our San Antonio SEO team delivers industry-specific tactics: vertical keyword domination, authority link building, conversion-optimized content, technical upgrades, and Google Business mastery.
                            <br /><br />
                            We turn rankings into real jobs, calls, and revenue — innovation that drives your bottom line.
                            <br /><br />
                            Service companies across San Antonio trust us for measurable, sustainable growth.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={SanAntonioImage}
                            alt="San Antonio SEO Services – Alamo City skyline, River Walk, service industry focus"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DARK SECTION - WHY SAN ANTONIO SEO ================= */}
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
                            Why <span className="text-[#25baff]">San Antonio Vertical SEO</span> Drives Growth
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Convert searches into signed jobs with strategies built for service businesses in the Alamo City.
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
                                <li>• Vertical Keyword Domination</li>
                                <li>• High-Authority Link Building</li>
                                <li>• Conversion-Focused Content</li>
                                <li>• Technical & Speed Optimization</li>
                                <li>• Multi-Channel Integration</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We don’t stop at rankings. Every optimization is engineered to increase phone calls, booked jobs, and revenue for San Antonio service companies.
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
                            Turn San Antonio Searches Into{" "}
                            <span className="text-[#25baff]">Jobs & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Vertical SEO brings ready-to-hire customers straight to your service business.
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
                            San Antonio SEO vs. <span className="text-[#25baff]">Paid Advertising</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the strategy that builds long-term vertical growth for your San Antonio business
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

                        {/* San Antonio SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    San Antonio SEO
                                </h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for compounding vertical traffic</p>
                                    <p>Requires consistent optimization investment</p>
                                    <p>Delivers growing results over time</p>
                                    <p>Highly targeted by service + location</p>
                                    <p>Builds lasting trust through rankings</p>
                                    <p>Full control over messaging & pages</p>
                                    <p>Takes time to gain momentum</p>
                                    <p>Scales without recurring ad cost</p>
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
                        Talk To Our San Antonio SEO Experts Now
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
                        San Antonio SEO Strategies We Execute
                    </h2>
                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        Vertical-focused, conversion-driven SEO strategies tailored for San Antonio’s thriving service economy.
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "Vertical Keyword Research",
                                head1: "Target High-Value Service Searches",
                                text: "Industry-specific + San Antonio location keywords with strong buyer intent.",
                            },
                            {
                                icon: FaLink,
                                head: "Authority Link Building",
                                head1: "Build Vertical Domain Strength",
                                text: "Industry blogs, local directories, associations, guest posts — quality links that matter.",
                            },
                            {
                                icon: FiPenTool,
                                head: "Conversion Content Marketing",
                                head1: "Content That Closes Jobs",
                                text: "Service pages, blogs, guides, FAQs — written to rank and convert.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "On-Page Optimization",
                                head1: "Conversion-Ready Foundation",
                                text: "Schema for services, fast pages, mobile-first, internal linking — built to sell.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local + Vertical SEO",
                                head1: "Dominate Your Service Area",
                                text: "GBP mastery, citations, reviews, service-area pages — own your market.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Technical & Multi-Channel SEO",
                                head1: "Future-Proof & Amplify Growth",
                                text: "Core Web Vitals, speed, schema + integration with ads & social.",
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
                            Our <span className="text-[#25baff]">San Antonio SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Vertical-focused SEO + technical precision + multi-channel support — built to scale service businesses in San Antonio.
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
                        Our Proven San Antonio
                        <span className="text-[#25baff]"> SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, vertical-first process designed for San Antonio service businesses — from deep audit to sustained revenue growth.
                        <br />Here’s how we scale your success:
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Vertical Audit & Strategy",
                                text: "Industry audit, competitor benchmarking, high-value keyword mapping, revenue roadmap.",
                            },
                            {
                                head: "Technical & On-Page Optimization",
                                text: "Core Web Vitals, schema for services, speed, mobile, content structure — conversion ready.",
                            },
                            {
                                head: "Local + GBP Optimization",
                                text: "Google Business mastery, citations, reviews, service-area pages — dominate your territory.",
                            },
                            {
                                head: "Vertical Content Creation",
                                text: "Service pages, blogs, guides, FAQs — built to rank high and close deals.",
                            },
                            {
                                head: "Authority & Link Building",
                                text: "Industry outreach, local directories, guest posts — vertical authority that moves rankings.",
                            },
                            {
                                head: "Ongoing Scaling & Reporting",
                                text: "Conversion tracking, monthly revenue reports, seasonal adjustments, continuous optimization.",
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
                            Why San Antonio Service Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">SEO Innovation</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            Vertical expertise + technical precision + multi-channel thinking + conversion focus = real revenue growth in San Antonio.
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
                            Affordable San Antonio <span className="text-[#25baff]">SEO Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Scalable packages designed for San Antonio service businesses — from startups to established vertical leaders.
                        </p>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Every plan includes vertical keyword research, technical optimization, content strategy, GBP/local SEO,
                            monthly revenue-focused reporting, and dedicated support — built to turn rankings into real jobs and revenue.
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
                                    <p>Vertical SEO Audit & Strategy</p>
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
                                    <p>Advanced Vertical Strategy</p>
                                    <p>Industry Competitor Analysis</p>
                                    <p>On-Page Optimization (Up to 20 Pages)</p>
                                    <p>Technical SEO + Core Web Vitals</p>
                                    <p>Content Creation Guidance (4 pieces/mo)</p>
                                    <p>Local Citations & GBP Optimization</p>
                                    <p>Link Building Outreach (3–5 links/mo)</p>
                                    <p>Detailed Monthly Revenue Report</p>
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
                                    <p>Full Vertical Growth Strategy</p>
                                    <p>Deep Industry & Competitor Intelligence</p>
                                    <p>Unlimited On-Page Optimization</p>
                                    <p>Advanced Technical SEO + Schema</p>
                                    <p>Content Creation (8 pieces/mo)</p>
                                    <p>Aggressive Vertical Link Building (8–12 links/mo)</p>
                                    <p>Local + Vertical Domination + Review Strategy</p>
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
                        San Antonio SEO Agency <span className="text-[#25baff]">FAQs</span>
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

export default SanAntonioSeo;