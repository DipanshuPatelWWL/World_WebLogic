import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdTrendingUp } from "react-icons/io";
import { LuSquareActivity } from "react-icons/lu";
import { FiPlus, FiMinus, FiPenTool } from "react-icons/fi";
import { FaSearchengin, FaRocket } from "react-icons/fa6";
import { IoShieldCheckmark, IoSettingsSharp } from "react-icons/io5";
import { FaChair, FaHome, FaEye, FaCheckCircle } from "react-icons/fa";
import { FaLightbulb, FaLayerGroup, FaUserCheck, FaMapMarkerAlt } from "react-icons/fa";
import { FaLink, FaImages, FaChartLine, FaCalendarAlt } from "react-icons/fa";


import Banner from "../../assets/services/boston/banner.avif";
import Boston from "../../assets/services/boston/img.avif";

gsap.registerPlugin(ScrollTrigger);

const BostonSeo = () => {
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
            question: "How long does SEO take to show results in Boston?",
            answer: "SEO typically takes 3–6 months to show measurable improvements, depending on your competition and website condition.",
        },
        {
            question: "Why is local SEO important for Boston businesses?",
            answer: "Local SEO helps your business appear in location-based searches, making it easier for nearby customers to find your services.",
        },
        {
            question: "Can SEO increase website leads?",
            answer: "Yes, a well-planned SEO strategy improves search visibility, which brings targeted visitors who are more likely to convert into customers.",
        },
        {
            question: "Do you optimize websites for mobile search?",
            answer: "Yes. Mobile optimization is an important ranking factor, and we ensure your site performs well across all devices.",
        },
        {
            question: "What industries benefit from Boston SEO services?",
            answer: "SEO can benefit nearly every industry including healthcare, legal services, ecommerce, real estate, hospitality, and local businesses.",
        },
        {
            question: "Is SEO better than paid advertising?",
            answer: "SEO provides long-term organic traffic, while paid ads deliver instant but temporary results. Many businesses use both strategies together.",
        },
        {
            question: "How do you measure SEO success?",
            answer: "We track rankings, organic traffic, user engagement, and conversions to evaluate the success of your SEO campaigns.",
        },
    ];


    const stats = [
        {
            id: 1,
            icon: <FaChartLine size={28} />,
            value: "+214%",
            title: "Organic Search Traffic Growth",
            desc: "Average increase achieved for Boston clients within 6–12 months.",
        },
        {
            id: 2,
            icon: <FaEye size={28} />,
            value: "45%",
            title: "Reduction in Bounce Rate",
            desc: "Improved user engagement from optimized website experiences.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+310%",
            title: "Growth in Qualified Leads",
            desc: "Direct impact from strong local and service-specific SEO rankings.",
        },
    ];


    const benefits = [
        {
            icon: <FaEye size={28} />,
            title: "Capture High-Intent Searchers",
            desc: "Appear when Boston customers are actively searching for your services.",
        },
        {
            icon: <FaRocket size={28} />,
            title: "Drive Targeted Local Traffic",
            desc: "Attract visitors who are ready to contact or visit your Boston business.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Dominate Boston 'Near Me' Searches",
            desc: "Boost visibility in local map packs and location-based queries.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Reduce Reliance on Paid Ads",
            desc: "Build sustainable organic traffic that generates leads long-term.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Build Trust & Authority",
            desc: "Top rankings make your Boston business appear more credible.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal & Event Traffic",
            desc: "Rank for Boston-specific trends, holidays, and local events.",
        },
        {
            icon: <FaHome size={28} />,
            title: "Compete with Bigger Players",
            desc: "Local + niche SEO helps Boston businesses outrank national competitors.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Improve Lead Quality & Conversions",
            desc: "Optimized pages turn organic visitors into high-quality leads.",
        },
    ];

    const services = [
        {
            icon: <IoSettingsSharp size={28} />,
            title: "Technical SEO Analysis",
            desc: "Detailed technical audit to identify issues affecting search performance — speed, indexing, mobile compatibility, structured data, crawl errors.",
        },
        {
            icon: <FaSearchengin size={28} />,
            title: "Strategic Keyword Planning",
            desc: "In-depth analysis of competition, trends, and customer behavior to build a targeted Boston-focused keyword strategy.",
        },
        {
            icon: <FiPenTool size={28} />,
            title: "SEO Content Development",
            desc: "Creation of high-quality blogs, landing pages, and service pages aligned with search intent and Boston market needs.",
        },
        {
            icon: <FaImages size={28} />,
            title: "On-Site Optimization",
            desc: "Refine website structure, headings, meta tags, internal linking, and keyword placement for maximum visibility.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Authority Link Acquisition",
            desc: "Earn high-quality backlinks from relevant industry sites, local Boston publications, and authoritative directories.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "SEO for Local Businesses",
            desc: "Google Business Profile optimization, local citations, reviews management, and geo-targeted landing pages for Boston.",
        },
        {
            icon: <FaChair size={28} />,
            title: "Ecommerce Search Optimization",
            desc: "Optimize product pages, categories, and shopping experience to drive more organic traffic and sales.",
        },
        {
            icon: <FaLightbulb size={28} />,
            title: "Conversational Search Optimization",
            desc: "Optimize for voice search and AI queries with natural language and long-tail Boston-specific keywords.",
        },
    ];


    const features = [
        {
            icon: <FaLightbulb size={28} />,
            title: "Proven SEO Expertise",
            desc: "Years of experience helping Boston businesses across multiple industries stay ahead of algorithm changes.",
        },
        {
            icon: <FaLayerGroup size={28} />,
            title: "Data-Driven SEO Strategy",
            desc: "Every decision backed by analytics, user behavior insights, and performance monitoring.",
        },
        {
            icon: <FaUserCheck size={28} />,
            title: "Transparent Reporting",
            desc: "Clear, regular updates on rankings, traffic, leads, and ROI — no black box.",
        },
        {
            icon: <IoMdTrendingUp size={28} />,
            title: "Conversion-Focused Optimization",
            desc: "We optimize not just for rankings — but for actual leads, calls, and form submissions.",
        },
        {
            icon: <LuSquareActivity size={28} />,
            title: "Latest SEO Technologies",
            desc: "Advanced tools for rank tracking, competitor analysis, and opportunity discovery.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Dedicated SEO Specialists",
            desc: "Personalized attention from experienced strategists familiar with the Boston market.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Boston SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Grow Your Online Presence with a Boston SEO Agency
                    </p>
                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Boston
                            <span className="text-[#25baff]"> SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Strengthen Your Brand Visibility in Boston
                        </h2>
                        <p className="text-black mt-4">
                            Our Boston SEO agency helps local businesses, startups, and ecommerce brands achieve higher rankings on Google, AI search engines, and voice search platforms while attracting more qualified traffic.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Technical SEO Analysis",
                            "Strategic Keyword Planning",
                            "SEO Content Development",
                            "On-Site Optimization",
                            "Authority Link Acquisition",
                            "Local SEO for Boston Businesses",
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
                            Top Boston SEO Company for{" "}
                            <span className="text-[#25baff]">
                                Sustainable Growth
                            </span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Looking to increase website traffic and generate more leads? Our Boston SEO experts design customized optimization strategies based on search engine guidelines and your business objectives.
                            <br /><br />
                            From in-depth keyword analysis to technical optimization and content creation, we focus on building long-term organic growth for your business.
                            <br /><br />
                            Our affordable Boston SEO packages are designed to help businesses compete effectively in Boston’s highly competitive digital marketplace.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Boston}
                            alt="Boston SEO Services"
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
                            Why <span className="text-[#25baff]">Boston SEO</span> Delivers Real Results
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Need targeted SEO support in Boston? Our specialists deliver customized strategies that drive measurable growth.
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
                                <li>• Technical SEO Analysis</li>
                                <li>• Strategic Keyword Planning</li>
                                <li>• SEO Content Development</li>
                                <li>• On-Site Optimization</li>
                                <li>• Authority Link Acquisition</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We don’t chase vanity metrics — we build visibility that turns Boston searches into real leads, calls, and customers.
                                Every optimization is designed for qualified traffic and revenue impact.
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
                            Turn Boston Searches Into{" "}
                            <span className="text-[#25baff]">Leads & Customers</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Strategic Boston SEO helps you capture customers at every stage — from research to conversion.
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
                            Boston SEO vs.
                            <span className="text-[#25baff]"> Paid Advertising</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the Strategy That Builds Long-Term Growth for Your Boston Business
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



                        {/* Boston SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Boston SEO
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for consistent, long-term traffic</p>
                                    <p>Requires ongoing optimization investment</p>
                                    <p>Delivers compounding results over time</p>
                                    <p>Highly targeted by service & location in Boston</p>
                                    <p>Builds trust through rankings and content</p>
                                    <p>Full control over pages & messaging</p>
                                    <p>Takes time to build momentum</p>
                                    <p>Scales with authority — no recurring ad cost</p>
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
                        Talk To Our Boston SEO Experts Now
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
                        Boston SEO Strategies We Execute

                    </h2>

                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        We help Boston businesses grow through targeted, high-conversion SEO strategies tailored to local visibility and industry competition.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: IoSettingsSharp,
                                head: "Technical SEO Analysis",
                                head1: "Fix What’s Holding You Back",
                                text: "Detailed audit of speed, mobile-friendliness, indexing, structured data, and crawl issues.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Strategic Keyword Planning",
                                head1: "Target Boston Searchers",
                                text: "Competitor & trend analysis to uncover high-value Boston-specific keywords.",
                            },
                            {
                                icon: FiPenTool,
                                head: "SEO Content Development",
                                head1: "Content That Ranks & Converts",
                                text: "Blogs, service pages, and landing pages crafted for Boston audiences and search intent.",
                            },
                            {
                                icon: FaLink,
                                head: "Authority Link Acquisition",
                                head1: "Build Domain Strength",
                                text: "Earn powerful backlinks from Boston-relevant sites, local media, and industry authorities.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local SEO for Boston",
                                head1: "Dominate Local Pack",
                                text: "Google Business optimization, citations, reviews, and geo-targeted pages for Boston visibility.",
                            },
                            {
                                icon: IoShieldCheckmark,
                                head: "Conversational & Ecommerce SEO",
                                head1: "Future-Proof Your Rankings",
                                text: "Voice search + ecommerce optimization for natural queries and online sales.",
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
                            Our <span className="text-[#25baff]">Boston SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Complete, performance-driven SEO solutions designed to increase visibility, traffic, leads, and revenue for Boston businesses.
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
                            Why Boston Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            We combine deep Boston market understanding with technical excellence, local focus, and conversion-first strategies to deliver real revenue growth.
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


            {/* audit services  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Our Proven Boston
                        <span className="text-[#25baff]"> SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, results-oriented process tailored for Boston businesses — from deep audit to sustained growth.
                        <br />Here’s how we build long-term visibility and leads in Boston:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Strategy Development",
                                text: "Comprehensive technical audit, competitor research, Boston keyword mapping, and custom roadmap creation.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Optimize titles, content, images, schema, speed, mobile experience, and internal architecture.",
                            },
                            {
                                head: "Local SEO & GBP Optimization",
                                text: "Google Business Profile mastery, citation cleanup, review strategy, and Boston geo-landing pages.",
                            },
                            {
                                head: "Content Creation & Publishing",
                                text: "High-value blogs, guides, FAQs, and service pages built for Boston search intent and rankings.",
                            },
                            {
                                head: "Authority & Link Building",
                                text: "Strategic outreach to Boston media, industry blogs, and local directories for quality backlinks.",
                            },
                            {
                                head: "Ongoing Monitoring & Growth",
                                text: "Continuous rank tracking, performance reporting, seasonal adjustments, and conversion optimization.",
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
                            Affordable SMO
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

export default BostonSeo;