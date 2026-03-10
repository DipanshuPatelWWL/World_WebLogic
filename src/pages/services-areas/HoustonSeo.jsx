import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FiPlus,
    FiMinus,
    FiPenTool,
} from "react-icons/fi";
import { FaSearchengin, FaRocket } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import {
    FaLightbulb,
    FaMapMarkerAlt,
    FaMapMarkedAlt,
    FaUsers,
    FaHandshake,
    FaChartLine,
    FaCalendarAlt,
    FaCity,
    FaBullseye,
    FaUserTie,
    FaTools,
    FaChartPie,
    FaCheckCircle,
    FaUserCheck,
    FaSearch,
    FaLink,
    FaPenNib,
    FaCogs,
    FaServer,
    FaShoppingCart,
    FaMicrophone,
} from "react-icons/fa";


import Banner from "../../assets/services/boston/houstonBanner.avif";
import Houston from "../../assets/services/boston/houston.avif";

gsap.registerPlugin(ScrollTrigger);

const HoustonSeo = () => {
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
            question: "How long does Houston SEO take to show results?",
            answer:
                "SEO typically takes 3–6 months to show significant improvements depending on competition and website authority.",
        },
        {
            question: "Why is local SEO important in Houston?",
            answer:
                "Local SEO helps businesses appear in Google Maps and local search results, attracting customers searching nearby.",
        },
        {
            question: "How much do Houston SEO services cost?",
            answer:
                "SEO pricing depends on project size, industry competition, and required services. We offer customized and affordable SEO packages.",
        },
        {
            question: "Can SEO help my Houston business generate more leads?",
            answer:
                "Yes. SEO drives high-intent organic traffic, increasing inquiries, calls, and conversions.",
        },
        {
            question: "Do you offer monthly SEO reports?",
            answer:
                "Yes. We provide detailed monthly reports including keyword rankings, traffic insights, and performance metrics.",
        },
        {
            question: "What industries benefit from Houston SEO services?",
            answer:
                "Industries like healthcare, real estate, legal services, home services, and eCommerce benefit significantly from SEO.",
        },
        {
            question: "Why choose Digital Webguider for Houston SEO?",
            answer:
                "Digital Webguider offers data-driven SEO strategies, transparent reporting, and proven results that help Houston businesses grow online.",
        },
    ];

    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+268%",
            title: "Organic Traffic Growth",
            desc: "Average growth achieved for Houston clients.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "54%",
            title: "Bounce Rate Reduction",
            desc: "Improved user engagement from optimized experiences.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+385%",
            title: "Lead Conversion Growth",
            desc: "Direct result of strong Houston-focused SEO strategies.",
        },
    ];

    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture High-Intent Houston Searchers",
            desc: "Appear when local customers are actively looking for your services.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Drive Targeted Local Traffic",
            desc: "Attract Houston visitors ready to contact or visit your business.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate Houston 'Near Me' Searches",
            desc: "Boost visibility in local map packs and geo-specific queries.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Reduce Reliance on Paid Ads",
            desc: "Build sustainable organic traffic that generates leads long-term.",
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Build Trust & Local Authority",
            desc: "Top rankings make your Houston business appear more credible.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal & Event Traffic",
            desc: "Rank for Houston-specific trends, festivals, sports events, and seasons.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Compete with Bigger Players",
            desc: "Local + niche SEO helps Houston businesses outrank national brands.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Improve Lead Quality & Conversions",
            desc: "Optimized pages turn organic Houston visitors into high-quality leads.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "Website SEO Audit",
            desc: "Our Houston SEO specialists perform a comprehensive website audit to analyze your website’s strengths, weaknesses, and growth opportunities. Our audits evaluate: On-page SEO performance, Core Web Vitals and page speed, Mobile responsiveness, Content quality and optimization, Backlink profile, User experience, Website security.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Keyword Research",
            desc: "Effective SEO begins with identifying the right keywords your customers are searching for. Our Houston SEO experts research: High-volume keywords, Local Houston search terms, Long-tail keywords with buying intent, Competitor keyword strategies. Using tools like SEMrush, Ahrefs, and Google Keyword Planner.",
        },
        {
            icon: <FaPenNib size={28} />,
            title: "On-Page SEO",
            desc: "Our On-Page SEO services in Houston TX optimize all essential elements of your website to improve search engine rankings and user experience. Key optimizations include: Keyword-optimized meta titles and descriptions, Structured content and headings, Internal linking strategies, Image optimization, Improved readability, Mobile responsiveness, Faster page load speeds.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "Technical SEO",
            desc: "Technical SEO ensures your website is search engine-friendly and technically optimized for performance. Our Houston SEO specialists handle: Fixing crawl errors and broken links, Resolving duplicate content issues, Improving site architecture, Implementing structured data schema, Optimizing website speed and performance.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Content Marketing",
            desc: "Our Houston SEO experts develop high-quality content aligned with Google’s E-E-A-T guidelines (Experience, Expertise, Authority, Trust). Our content strategies include: SEO blog articles, Website landing pages, Google Business Profile posts, Social media content, Product descriptions.",
        },
        {
            icon: <FaServer size={28} />,
            title: "Link Building",
            desc: "Our white-hat link building strategies help strengthen your website’s authority by earning high-quality backlinks from reputable websites. Our approach includes: Guest posting on authority websites, Strategic outreach campaigns, Industry content partnerships, Editorial link placements.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "Local SEO Services",
            desc: "Local SEO helps your business appear in Google Maps and Houston local search results when customers search for nearby services. Our Houston Local SEO strategies include: Google Business Profile optimization, Accurate NAP (Name, Address, Phone) citations, Local keyword targeting, Customer review optimization, Local content creation.",
        },
        {
            icon: <FaMicrophone size={28} />,
            title: "Voice Search SEO",
            desc: "Voice search continues to grow with devices like Siri, Alexa, and Google Assistant. Our voice search optimization includes: Conversational keyword targeting, Long-tail question-based keywords, Structured data implementation, Featured snippet optimization.",
        },
    ];

    const features = [
        {
            icon: <FaTools size={28} />,
            title: "Customer-First Approach",
            desc: "At Digital Webguider, your business goals guide every SEO strategy. We carefully understand your vision and create SEO campaigns designed to achieve your specific growth objectives.",
        },
        {
            icon: <FaCity size={28} />,
            title: "In-Depth SEO Expertise",
            desc: "Our Houston SEO specialists bring years of digital marketing experience across multiple industries including: Healthcare, Real estate, eCommerce, Professional services, Multi-location businesses. We build customized SEO strategies for every client.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Dedicated Work Ethic",
            desc: "SEO is more than a service for us — it’s our passion. Our team constantly innovates, analyzes performance data, and improves strategies to deliver measurable results.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "On-Time Project Delivery",
            desc: "We respect your time and business operations. Our Houston SEO team follows structured timelines and delivers SEO campaigns efficiently without unnecessary delays.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Transparent Communication",
            desc: "Transparency is central to our SEO process. Clients receive clear updates about strategy implementation, keyword rankings, and campaign performance.",
        },
        {
            icon: <FaChartPie size={28} />,
            title: "Long-Term Marketing Partnership",
            desc: "Digital Webguider acts as your long-term digital marketing partner, continuously optimizing campaigns and exploring new opportunities for growth through SEO, PPC, and digital marketing.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Houston SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Spark Real Business Growth
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Houston <span className="text-[#25baff]">SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Dominate Houston Search Results
                        </h2>
                        <p className="text-black mt-4">
                            Houston’s fast-moving business environment demands strong digital visibility. Our Houston SEO services combine advanced SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) strategies to help businesses get discovered online, generate qualified leads, and grow faster across H-Town.
                            Whether you run a healthcare clinic, real estate agency, law firm, eCommerce store, or local service business, our data-driven SEO strategies help you reach the right audience and convert visitors into customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Advanced keyword research",
                            "Technical website analysis",
                            "Local SEO optimization",
                            "Authority backlink building",
                            "Content marketing",
                            "Online reputation management",
                            "Conversion-focused optimization",
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

            {/* ================= WHO WE ARE ================= */}
            <section ref={whoRef} className="relative py-20 px-6 overflow-hidden bg-white">
                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            About Our <span className="text-[#25baff]">Houston SEO Company</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Digital Webguider is a trusted Houston SEO agency specializing in delivering measurable results through strategic search engine optimization.
                            <br /><br />
                            Our team helps businesses improve their search rankings, online visibility, and revenue growth by implementing proven SEO techniques tailored to Houston’s competitive market.
                            <br /><br />
                            Businesses across Houston rely on our expertise to appear on Google’s first page and local map results, helping them attract customers actively searching for their services.
                            <br /><br />
                            Our Houston SEO services include: Advanced keyword research, Technical website analysis, Local SEO optimization, Authority backlink building, Content marketing, Online reputation management, Conversion-focused optimization.
                            <br /><br />
                            Our customized and affordable SEO packages are designed to match your business goals and marketing budget while delivering sustainable growth.
                            Partner with a reliable Houston SEO company that businesses trust for consistent results.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Houston}
                            alt="Houston SEO Services"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DARK SECTION - WHY HOUSTON SEO ================= */}
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
                            Why <span className="text-[#25baff]">Houston SEO</span> Delivers Real Results
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Drive Traffic and Leads with Proven SEO Strategies tailored for the Houston market.
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
                                <li>• Advanced Keyword Research</li>
                                <li>• Technical SEO Optimization</li>
                                <li>• Local SEO Excellence</li>
                                <li>• Authority Link Building</li>
                                <li>• Content & Conversion Optimization</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We don’t chase vanity metrics — we build visibility that turns Houston searches into real leads, calls, form submissions, and customers.
                                Every optimization is designed for qualified traffic and revenue impact.
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

            {/* ================= BENEFITS GRID ================= */}
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
                            Turn Houston Searches Into <span className="text-[#25baff]">Leads & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Strategic Houston SEO helps you capture customers at every stage — from awareness to conversion.
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
                            Houston SEO vs. <span className="text-[#25baff]">Paid Advertising</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the Strategy That Builds Long-Term Growth for Your Houston Business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">Marketing Objectives</h3>
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

                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">Houston SEO</h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for consistent, long-term traffic</p>
                                    <p>Requires ongoing optimization investment</p>
                                    <p>Delivers compounding results over time</p>
                                    <p>Highly targeted by service & Houston location</p>
                                    <p>Builds trust through rankings and content</p>
                                    <p>Full control over pages & messaging</p>
                                    <p>Takes time to build momentum</p>
                                    <p>Scales with authority — no recurring ad cost</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">Paid Advertising</h3>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Focused on fast visibility & immediate leads</p>
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

            {/* ================= CONTACT CTA ================= */}
            <section ref={addSectionRef} className="relative py-24 px-6" style={{ backgroundColor: "#020202" }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow" />

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
                        Talk To Our Houston SEO Experts Now
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
                        Houston SEO Strategies We Execute
                    </h2>
                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        We help Houston businesses grow through targeted, high-conversion SEO strategies tailored to local visibility and fierce market competition.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "Advanced Keyword Research",
                                head1: "Find What Houston Searches",
                                text: "High-volume, local Houston, long-tail, and competitor keywords to capture high-intent searchers.",
                            },
                            {
                                icon: FaLink,
                                head: "Authority Link Building",
                                head1: "Build Real Domain Power",
                                text: "White-hat outreach securing quality backlinks from reputable Houston-relevant and industry sites.",
                            },
                            {
                                icon: FiPenTool,
                                head: "Content Marketing",
                                head1: "Content That Ranks & Converts",
                                text: "E-E-A-T aligned blogs, landing pages, GBP posts, and product descriptions crafted for Houston audiences.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "On-Page & Technical SEO",
                                head1: "Perfect Site Foundation",
                                text: "Meta tags, headers, internal links, keyword placement, speed, schema — maximum crawl & user experience.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local SEO for Houston",
                                head1: "Own the Houston Map Pack",
                                text: "GBP optimization, citations, reviews, geo-targeted pages — dominate Houston-area search results.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Voice Search & GEO/AEO",
                                head1: "Future-Proof Your Visibility",
                                text: "Conversational queries, long-tail questions, structured data — appear in voice and AI-powered results.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon className="text-4xl text-[#25baff] mb-6 mx-auto group-hover:text-white transition-colors duration-300" />
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

            {/* ================= OUR SERVICES GRID ================= */}
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
                            Our <span className="text-[#25baff]">Houston SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Complete, performance-focused SEO solutions built to increase visibility, traffic, leads, and revenue for Houston businesses.
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
                                <h3 className="text-lg font-semibold text-[#020202] mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROVEN FRAMEWORK ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Our Proven Houston <span className="text-[#25baff]">SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, results-oriented process tailored for Houston businesses — from deep audit to sustained local dominance.
                        <br />
                        Here’s how we build long-term visibility and leads in Houston:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Strategy Development",
                                text: "Comprehensive website audit, Houston competitor analysis, keyword mapping, custom growth roadmap.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Titles, content, images, schema, speed, mobile experience, internal structure optimization.",
                            },
                            {
                                head: "Local SEO & GBP Optimization",
                                text: "Google Business mastery, citation building, review strategy, Houston geo-targeted pages.",
                            },
                            {
                                head: "Content Creation & Publishing",
                                text: "High-value blogs, guides, service pages, FAQs — built for Houston search intent.",
                            },
                            {
                                head: "Authority & Link Building",
                                text: "Strategic outreach to Houston media, blogs, directories — quality backlinks that move the needle.",
                            },
                            {
                                head: "Ongoing Monitoring & Growth",
                                text: "Rank tracking, performance reporting, seasonal updates, conversion optimization, continuous refinement.",
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
                            Why Houston Businesses Trust Our <span className="text-[#a8d97c]">SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            We combine Houston market knowledge with technical precision, local focus, and conversion-first strategies to deliver measurable revenue growth.
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

            {/* ================= AFFORDABLE PLANS ================= */}
            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable SEO <span className="text-[#25baff]">Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible SEO management plans designed to maximize your ROI, generate quality leads, and scale your business efficiently.
                        </p>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Choose the plan that best matches your current goals and budget. Every package includes keyword research, on-page optimization, content strategy, technical improvements, monthly reporting, and dedicated support — tailored to help your website rank higher and attract more qualified traffic.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
            <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Houston SEO Company <span className="text-[#25baff]">FAQs</span>
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

export default HoustonSeo;