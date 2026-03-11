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


import Banner from "../../assets/denver/TorontoBanner.avif";
import TorontoImage from "../../assets/denver/TorontoSeo.avif";

gsap.registerPlugin(ScrollTrigger);

const TorontoSeo = () => {
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
            question: "How long does it take to see SEO results in Toronto?",
            answer:
                "Most Toronto businesses start seeing noticeable improvements in rankings, traffic, and leads within 3–6 months, depending on competition in your industry and current website strength.",
        },
        {
            question: "Why is hyperlocal SEO important for businesses in the 6ix?",
            answer:
                "Hyperlocal SEO helps you dominate searches in specific Toronto neighbourhoods — Downtown, Liberty Village, Queen West, Yorkville, The Annex, Scarborough, Etobicoke, and more — bringing nearby customers directly to you.",
        },
        {
            question: "How much do Toronto SEO services cost?",
            answer:
                "Costs vary based on competition, goals, and scope. We offer transparent, flexible Toronto SEO packages tailored for Canadian businesses of all sizes.",
        },
        {
            question: "Can SEO really increase leads and sales in Toronto?",
            answer:
                "Yes — our focus is on high-intent local traffic that turns into phone calls, form submissions, bookings, foot traffic, and actual revenue — not just impressions.",
        },
        {
            question: "Do you provide monthly SEO reports for Toronto clients?",
            answer:
                "Yes. We deliver clear monthly reports showing keyword rankings, local visibility gains, traffic quality, lead growth, and campaign performance.",
        },
        {
            question: "Which Toronto industries benefit most from local SEO?",
            answer:
                "Restaurants, real estate, home services, law firms, medical clinics, e-commerce, professional services, retail, gyms, salons, contractors, and tech startups see especially strong results.",
        },
        {
            question: "Why choose Digital Webguider as your Toronto SEO agency?",
            answer:
                "We combine deep Toronto market knowledge, hyperlocal targeting across the 6ix, committed execution, and a strong track record of delivering more leads and real business growth — Committed & Delivered.",
        },
    ];

    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+315%",
            title: "Organic Traffic Growth",
            desc: "Average increase achieved for Toronto clients.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "59%",
            title: "Bounce Rate Reduction",
            desc: "Faster, more relevant pages built for local searchers.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+410%",
            title: "Lead & Booking Growth",
            desc: "Strong results from hyperlocal Toronto SEO strategies.",
        },
    ];

    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture High-Intent Toronto Searchers",
            desc: "Show up when people in the 6ix are actively looking for your services.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Drive Local Foot Traffic & Calls",
            desc: "Attract nearby customers ready to visit, call, or book right now.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate Hyperlocal Searches",
            desc: "Rank #1 in map packs and neighbourhood queries across Toronto.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Reduce Reliance on Paid Ads",
            desc: "Build sustainable organic visibility that keeps delivering leads long-term.",
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Build Trust in Canada’s Business Hub",
            desc: "Top local rankings make your Toronto business look more credible and established.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal & Event Traffic",
            desc: "Rank during TIFF, Toronto Raptors season, summer festivals, winter events, and more.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Compete with National & Global Brands",
            desc: "Hyperlocal + niche SEO helps Toronto businesses outrank bigger players.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Turn Searches Into Real Revenue",
            desc: "Optimized pages convert local Toronto visitors into high-value customers.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "Hyperlocal Keyword Research",
            desc: "Toronto-specific + neighbourhood keywords, high-intent local phrases, competitor gaps — tailored for the 6ix.",
        },
        {
            icon: <FaPenNib size={28} />,
            title: "Neighbourhood-Focused Content",
            desc: "SEO-optimized blogs, service pages, neighbourhood guides, FAQs — written to rank and convert Toronto searchers.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "On-Page Optimization",
            desc: "Meta tags, headings, schema for local businesses, internal linking, image optimization, fast loading, mobile-first.",
        },
        {
            icon: <FaServer size={28} />,
            title: "Local Link Building",
            desc: "White-hat outreach — Toronto blogs, local news, chambers, neighbourhood directories, sponsorships.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Technical SEO",
            desc: "Core Web Vitals, mobile usability, HTTPS, crawl fixes, structured data, site speed optimization.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "Hyperlocal SEO",
            desc: "Google Business Profile optimization, citation consistency, review generation, neighbourhood landing pages.",
        },
        {
            icon: <FaMicrophone size={28} />,
            title: "Google Business Profile (GBP) Optimization",
            desc: "Verification, accurate NAP, professional photos, regular posts, review management, Q&A responses.",
        },
        {
            icon: <FaMapSigns size={28} />,
            title: "Citation & Listings Management",
            desc: "Consistent business listings across directories, NAP accuracy, citation cleanup, niche directory submissions, and local trust building.",
        },
    ];

    const features = [
        {
            icon: <FaTools size={28} />,
            title: "6ix Neighbourhood Strategy",
            desc: "We target customers by specific Toronto areas — Downtown, Liberty Village, Queen West, Yorkville, The Annex, Scarborough — to reach the right local audience.",
        },
        {
            icon: <FaCity size={28} />,
            title: "Toronto Market Intelligence",
            desc: "Deep competitor analysis, neighbourhood keyword gaps, seasonal trend tracking across the GTA.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Hyperlocal Execution",
            desc: "On-page, technical, citation, review, and authority tactics built for Toronto’s diverse and competitive market.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "Clear Implementation Roadmap",
            desc: "Prioritized plan: technical fixes → hyperlocal content → GBP → links → continuous improvement.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Committed & Delivered Process",
            desc: "Audit → tailored strategy → execution → measurement → refinement — focused on real leads and revenue.",
        },
        {
            icon: <FaChartPie size={28} />,
            title: "Transparent Monthly Reporting",
            desc: "Keyword rankings, local visibility, traffic sources, lead growth, conversions — clear and honest.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Toronto SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Toronto SEO: Propels Success
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Toronto <span className="text-[#25baff]">SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Grow Your Brand in Canada’s Business Hub
                        </h2>
                        <p className="text-black mt-4 max-w-4xl mx-auto">
                            We deliver tailored Toronto SEO that drives more leads, boosts local traffic, and enables hyperlocal targeting across the 6ix — from Downtown to Scarborough, Liberty Village to North York. Committed strategies. Delivered results.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Hyperlocal keyword targeting",
                            "Neighbourhood content strategy",
                            "Google Business & map pack domination",
                            "High-quality local link building",
                            "Technical & mobile-first optimization",
                            "Local citation building & consistency"
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
                            About Our <span className="text-[#25baff]">Toronto SEO Company</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Digital Webguider helps Toronto businesses grow with hyperlocal-focused SEO, targeted PPC, social media, and high-performance websites.
                            <br /><br />
                            Our Toronto SEO team executes proven, neighbourhood-specific tactics: hyperlocal keyword research, content that ranks in the 6ix, Google Business Profile mastery, local link building, and technical upgrades.
                            <br /><br />
                            We’re committed to real outcomes — more calls, more walk-ins, more bookings, more revenue — delivered consistently.
                            <br /><br />
                            Businesses across Toronto trust us to help them stand out in Canada’s most dynamic business hub.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={TorontoImage}
                            alt="Toronto SEO Services – CN Tower, Distillery District, Liberty Village, 6ix neighbourhoods"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DARK SECTION - WHY TORONTO SEO ================= */}
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
                            Why <span className="text-[#25baff]">Toronto Hyperlocal SEO</span> Propels Success
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Get found, get called, get more business — right in your neighbourhood.
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
                                <li>• Hyperlocal Keyword Targeting</li>
                                <li>• Neighbourhood Content Creation</li>
                                <li>• Google Business & Map Pack Domination</li>
                                <li>• Local Authority Link Building</li>
                                <li>• Technical & Mobile Optimization</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We turn Toronto searches into real customers — whether they’re in Queen West looking for coffee, Scarborough needing home services, or Downtown seeking legal advice. Committed execution. Delivered leads.
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
                            Turn Toronto Searches Into{" "}
                            <span className="text-[#25baff]">Leads & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Hyperlocal SEO brings the right customers from your neighbourhood straight to your door.
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
                            Toronto SEO vs. <span className="text-[#25baff]">Paid Advertising</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the strategy that builds long-term local growth across the 6ix
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

                        {/* Toronto SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Toronto SEO
                                </h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for steady, compounding local traffic</p>
                                    <p>Requires consistent optimization investment</p>
                                    <p>Results grow stronger over time</p>
                                    <p>Highly targeted by service + Toronto neighbourhood</p>
                                    <p>Builds long-term trust through rankings</p>
                                    <p>Full control over messaging & pages</p>
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
                        Talk To Our Toronto SEO Experts Now
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
                        Toronto SEO Strategies We Execute
                    </h2>
                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        Hyperlocal, committed strategies built for Toronto’s diverse neighbourhoods and competitive market.
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "Hyperlocal Keyword Research",
                                head1: "Know What the 6ix Searches",
                                text: "Neighbourhood + service keywords, high-intent local phrases, competitor gaps.",
                            },
                            {
                                icon: FaLink,
                                head: "Local Link Building",
                                head1: "Build Toronto Authority",
                                text: "White-hat links from Toronto blogs, news, community sites, chambers.",
                            },
                            {
                                icon: FiPenTool,
                                head: "Neighbourhood Content Marketing",
                                head1: "Content That Ranks & Converts",
                                text: "Area guides, service pages, blogs — written for Toronto searchers.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "On-Page Optimization",
                                head1: "Strong Local Foundation",
                                text: "Titles, meta, schema, internal links, speed, mobile — hyperlocal ready.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Hyperlocal SEO for Toronto",
                                head1: "Own Your Neighbourhood Map Pack",
                                text: "GBP optimization, citations, reviews, neighbourhood pages — dominate.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Technical & Future-Proof SEO",
                                head1: "Stay Ahead in Toronto Search",
                                text: "Core Web Vitals, mobile-first, schema, crawl efficiency + modern tactics.",
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
                            Our <span className="text-[#25baff]">Toronto SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Full-service, hyperlocal SEO built to grow brands across the 6ix — committed and delivered.
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
                        Our Proven Toronto
                        <span className="text-[#25baff]"> SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, neighbourhood-focused process built for Toronto — from deep local audit to sustained dominance across the 6ix.
                        <br />Here’s how we deliver more leads:
                    </p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Toronto Strategy",
                                text: "Technical audit, neighbourhood competitor analysis, hyperlocal keyword mapping, lead-focused roadmap.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Titles, content, schema, Core Web Vitals, mobile performance, internal linking.",
                            },
                            {
                                head: "Hyperlocal & GBP Optimization",
                                text: "Google Business mastery, citation building, review strategy, neighbourhood pages.",
                            },
                            {
                                head: "Neighbourhood Content Creation",
                                text: "Area guides, service pages, blogs — built for Toronto intent and rankings.",
                            },
                            {
                                head: "Local Authority & Link Building",
                                text: "Outreach to Toronto media, blogs, directories, community groups — quality local links.",
                            },
                            {
                                head: "Ongoing Monitoring & Lead Growth",
                                text: "Rank & lead tracking, monthly reporting, seasonal updates, conversion optimization.",
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
                            Why Toronto Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">SEO Commitment</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            Hyperlocal expertise + technical precision + lead-first mindset + consistent delivery = real growth across the 6ix.
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
                            Affordable Toronto <span className="text-[#25baff]">SEO Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible packages built for Toronto restaurants, real estate agents, contractors, clinics, retailers, and growing brands.
                        </p>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Every plan includes hyperlocal keyword research, on-page optimization, Google Business optimization,
                            citation building, neighbourhood content, monthly reporting, and dedicated support — designed to help your
                            Toronto business get found, get called, and grow across the 6ix.
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
                                    <p>Hyperlocal Keyword Research</p>
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
                                    <p>Advanced Hyperlocal Strategy</p>
                                    <p>Neighbourhood Competitor Analysis</p>
                                    <p>On-Page Optimization (Up to 20 Pages)</p>
                                    <p>Technical SEO + Core Web Vitals</p>
                                    <p>Content Creation Guidance (4 pieces/mo)</p>
                                    <p>Local Citations & GBP Optimization</p>
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
                                    <p>Full Hyperlocal Growth Strategy</p>
                                    <p>Deep Neighbourhood & Competitor Insights</p>
                                    <p>Unlimited On-Page Optimization</p>
                                    <p>Advanced Technical SEO + Schema</p>
                                    <p>Content Creation (8 pieces/mo)</p>
                                    <p>Aggressive Local Link Building (8–12 links/mo)</p>
                                    <p>Hyperlocal Domination + Review Strategy</p>
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
                        Toronto SEO Agency <span className="text-[#25baff]">FAQs</span>
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

export default TorontoSeo;