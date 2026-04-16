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
import { FaChartBar, FaBullseye, FaUserTie, FaCheckCircle, FaUserCheck } from "react-icons/fa";
import { FaSearch, FaLink, FaCogs, FaShoppingCart, } from "react-icons/fa";
import { FaKey, FaFileAlt, FaPenFancy, } from "react-icons/fa";


import Banner from "../../assets/services/boston/dallasBanner.avif";
import Dallas from "../../assets/services/boston/dallas.avif";

gsap.registerPlugin(ScrollTrigger);

const DallasSeo = () => {
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
            question: "How long does Dallas SEO take to show results?",
            answer: "Most businesses start seeing measurable SEO improvements within 3–6 months, depending on competition and website authority.",
        },
        {
            question: "Why is local SEO important for Dallas businesses?",
            answer: "Local SEO helps your business appear in Google Maps and local search results, bringing more nearby customers ready to buy.",
        },
        {
            question: "Do you provide customized SEO strategies?",
            answer: "Yes. Every SEO campaign is tailored based on industry, competition, and business goals.",
        },
        {
            question: "How much do Dallas SEO services cost?",
            answer: "SEO pricing varies depending on project scope, but we offer flexible and affordable packages for startups and growing businesses.",
        },
        {
            question: "Can SEO help generate more leads?",
            answer: "Yes. Effective SEO brings targeted organic traffic, increasing inquiries, calls, and conversions.",
        },
        {
            question: "Do you provide monthly SEO reports?",
            answer: "Yes. We provide transparent monthly reports covering rankings, traffic, and performance metrics.",
        },
        {
            question: "Why choose Digital Guider for Dallas SEO?",
            answer: "Our team combines data-driven SEO strategies, industry expertise, and transparent reporting to deliver measurable results.",
        },
    ];


    const stats = [
        {
            id: 1,
            icon: <FaSearch size={28} />,
            value: "+268%",
            title: "Organic Traffic Growth",
            desc: "Average growth achieved for Dallas clients.",
        },
        {
            id: 2,
            icon: <FaUserCheck size={28} />,
            value: "55%",
            title: "Bounce Rate Reduction",
            desc: "Improved user engagement from optimized experiences.",
        },
        {
            id: 3,
            icon: <FaRocket size={28} />,
            value: "+392%",
            title: "Lead Conversion Growth",
            desc: "Direct result of strong Dallas-focused SEO strategies.",
        },
    ];


    const benefits = [
        {
            icon: <FaSearch size={28} />,
            title: "Capture High-Intent Dallas Searchers",
            desc: "Appear when local customers are actively looking for your services.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Drive Targeted Local Traffic",
            desc: "Attract Dallas visitors ready to contact or visit your business.",
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Dominate Dallas 'Near Me' Searches",
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
            desc: "Top rankings make your Dallas business appear more credible.",
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: "Capture Seasonal & Event Traffic",
            desc: "Rank for Dallas-specific trends, festivals, sports events, and seasons.",
        },
        {
            icon: <FaBullseye size={28} />,
            title: "Compete with Bigger Players",
            desc: "Local + niche SEO helps Dallas businesses outrank national brands.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Improve Lead Quality & Conversions",
            desc: "Optimized pages turn organic Dallas visitors into high-quality leads.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "SEO Audit",
            desc: "Our comprehensive SEO audit evaluates your website’s technical performance, content quality, site structure, and search visibility. This process helps identify technical issues, uncover growth opportunities, and build a clear roadmap for higher rankings and long-term traffic growth.",
        },
        {
            icon: <FaKey size={28} />,
            title: "Keyword Research",
            desc: "Our Dallas SEO specialists analyze search trends, competitor strategies, and user intent to identify high-value keywords using advanced tools like SEMrush, Ahrefs, and Google Keyword Planner.",
        },
        {
            icon: <FaFileAlt size={28} />,
            title: "On-Page SEO",
            desc: "Our On-Page SEO services in Dallas optimize every key element of your website including content structure, headings and metadata, internal linking, image optimization, and page speed.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "Technical SEO",
            desc: "Technical SEO improves the backend performance of your website to ensure search engines can crawl and index your pages effectively. Includes site speed optimization, mobile responsiveness, site architecture improvement, XML sitemaps, and structured data implementation.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Link Building",
            desc: "Our white-hat link-building strategies help your website earn high-quality backlinks from authoritative websites through outreach campaigns, content partnerships, and authority website placements.",
        },
        {
            icon: <FaPenFancy size={28} />,
            title: "Content Marketing",
            desc: "Our Dallas SEO team develops high-quality content that attracts both users and search engines. Content services include SEO blog writing, website content optimization, landing page creation, and social media content strategy.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Local SEO",
            desc: "Our Dallas local SEO services help your business reach customers searching within Dallas and nearby cities such as Plano, Irving, Arlington, Fort Worth, and Frisco. We optimize Google Business Profile, local citations, geographic keywords, and customer reviews.",
        },
        {
            icon: <FaShoppingCart size={28} />,
            title: "E-commerce SEO",
            desc: "Our Dallas eCommerce SEO strategies focus on optimizing product and category pages for high-intent buyers. We optimize product descriptions, images and alt tags, metadata, and site architecture.",
        },
    ];


    const features = [
        {
            icon: <FaSearch size={28} />,
            title: "Free SEO Consultation",
            desc: "Our free consultation allows our SEO specialists to understand your business goals, website performance, and market opportunities. Based on this analysis, we create a custom Dallas SEO strategy designed for measurable growth.",
        },
        {
            icon: <FaUsers size={28} />,
            title: "Client-Focused Approach",
            desc: "Your business goals shape every SEO strategy we implement. Our Dallas SEO company studies your target audience, search behavior, and competitors to build personalized campaigns that increase trust, brand authority, and sustainable growth.",
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Data-Driven Strategies",
            desc: "Our search engine optimization services in Dallas, TX rely on real data, analytics, and search insights. By analyzing user behavior, keyword trends, and competitor performance, we build strategies that improve rankings and maximize ROI.",
        },
        {
            icon: <FaUserTie size={28} />,
            title: "Digital Marketing Experts",
            desc: "Our experienced team combines expertise in SEO, PPC advertising, social media marketing, and content strategy. This integrated approach allows our Dallas SEO firm to reach the right audience and support steady business growth online.",
        },
        {
            icon: <FaCheckCircle size={28} />,
            title: "Proven Performance",
            desc: "Our Dallas SEO services are built on tested strategies and real performance data. We consistently help businesses improve search rankings, increase organic website traffic, generate qualified leads, and grow long-term revenue.",
        },
        {
            icon: <FaChartBar size={28} />,
            title: "Transparent Reporting",
            desc: "Digital Guider provides clear monthly reports and real-time analytics dashboards so you always understand your SEO progress. Our reports include keyword ranking improvements, organic traffic growth, conversion tracking, and local visibility metrics.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Dallas SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Top Dallas SEO for Conversions
                    </p>
                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Dallas
                            <span className="text-[#25baff]"> SEO Services</span>
                        </h2>
                        <h2 className="text-md md:text-xl font-semibold mt-5 text-[#020202]">
                            Dominate Dallas Search Results
                        </h2>
                        <p className="text-black mt-4">
                            Our Dallas SEO agency helps local businesses, ecommerce brands, and service providers generate more qualified leads by optimizing their digital presence for search engines, AI-powered platforms, and local search results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Strategic Keyword Research",
                            "Authority Link Building",
                            "SEO Content Strategy",
                            "On-Site SEO Optimization",
                            "Local SEO for Dallas",
                            "Technical SEO Improvements",
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
                            Trusted Dallas SEO Partner for{" "}
                            <span className="text-[#25baff]">
                                Measurable Growth
                            </span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            We are a leading Dallas SEO company dedicated to increasing your website traffic, search rankings, and online visibility.<br /><br />
                            As a trusted Dallas Digital Marketing Agency, Digital Guider builds customized SEO strategies that help your ideal customers find your business easily on search engines.<br /><br />
                            Our affordable and tailored SEO plans combine organic SEO strategies with performance-driven digital marketing services to maximize your brand presence online.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Dallas}
                            alt="Dallas SEO Services"
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
                            Why <span className="text-[#25baff]">Dallas SEO</span> Delivers Real Results
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Drive Traffic and Leads with Proven SEO Strategies tailored for the Dallas market.
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
                                <li>• Strategic Keyword Research</li>
                                <li>• Authority Link Building</li>
                                <li>• SEO Content Strategy</li>
                                <li>• On-Page SEO Optimization</li>
                                <li>• Local SEO Excellence</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We don’t chase vanity metrics — we build visibility that turns Dallas searches into real leads, calls, form submissions, and customers.
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
                            Turn Dallas Searches Into{" "}
                            <span className="text-[#25baff]">Leads & Revenue</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Strategic Dallas SEO helps you capture customers at every stage — from awareness to conversion.
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
                            Dallas SEO vs.
                            <span className="text-[#25baff]"> Paid Advertising</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the Strategy That Builds Long-Term Growth for Your Dallas Business
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



                        {/* Dallas SEO */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    Dallas SEO
                                </h3>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Ideal for consistent, long-term traffic</p>
                                    <p>Requires ongoing optimization investment</p>
                                    <p>Delivers compounding results over time</p>
                                    <p>Highly targeted by service & Dallas location</p>
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
                        Talk To Our Dallas SEO Experts Now
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
                        Dallas SEO Strategies We Execute

                    </h2>

                    <p className="font-semibold text-gray-600 mb-3 px-6">
                        We help Dallas businesses grow through targeted, high-conversion SEO strategies tailored to local visibility and fierce market competition.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaSearchengin,
                                head: "Strategic Keyword Research",
                                head1: "Find What Dallas Searches",
                                text: "In-depth analysis uncovering high-value, intent-driven keywords specific to your Dallas audience.",
                            },
                            {
                                icon: FaLink,
                                head: "Authority Link Building",
                                head1: "Build Real Domain Power",
                                text: "White-hat outreach securing quality backlinks from relevant Dallas-relevant and industry sites.",
                            },
                            {
                                icon: FiPenTool,
                                head: "SEO Content Strategy",
                                head1: "Content That Ranks & Converts",
                                text: "SEO-optimized blogs, service pages, and landing content crafted for Dallas searchers.",
                            },
                            {
                                icon: IoSettingsSharp,
                                head: "On-Page SEO Optimization",
                                head1: "Perfect On-Page Foundation",
                                text: "Meta tags, headers, internal links, keyword placement — maximum crawl & user experience.",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                head: "Local SEO for Dallas",
                                head1: "Own the Dallas Map Pack",
                                text: "GBP optimization, citations, reviews, geo-landing pages — dominate local Dallas search.",
                            },
                            {
                                icon: FaLightbulb,
                                head: "Voice & Technical SEO",
                                head1: "Future-Proof Your Visibility",
                                text: "Voice search optimization + technical fixes — speed, mobile, schema, crawlability.",
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
                            Our <span className="text-[#25baff]">Dallas SEO</span> Services
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Complete, performance-focused SEO solutions built to increase visibility, traffic, leads, and revenue for Dallas businesses.
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
                        Our Proven Dallas
                        <span className="text-[#25baff]"> SEO Framework</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Structured, results-oriented process tailored for Dallas businesses — from deep audit to sustained local dominance.
                        <br />Here’s how we build long-term visibility and leads in Dallas:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Audit & Strategy Development",
                                text: "Deep technical audit, Dallas competitor analysis, keyword mapping, custom growth roadmap.",
                            },
                            {
                                head: "On-Page & Technical Optimization",
                                text: "Titles, content, images, schema, speed, mobile experience, internal structure optimization.",
                            },
                            {
                                head: "Local SEO & GBP Optimization",
                                text: "Google Business mastery, citation building, review strategy, Dallas geo-targeted pages.",
                            },
                            {
                                head: "Content Creation & Publishing",
                                text: "High-value blogs, guides, service pages, FAQs — built for Dallas search intent.",
                            },
                            {
                                head: "Authority & Link Building",
                                text: "Strategic outreach to Dallas media, blogs, directories — quality backlinks that move the needle.",
                            },
                            {
                                head: "Ongoing Monitoring & Growth",
                                text: "Rank tracking, performance reporting, seasonal updates, conversion optimization, continuous refinement.",
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
                            Why Dallas Businesses Trust Our{" "}
                            <span className="text-[#a8d97c]">SEO Expertise</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            We combine Dallas market knowledge with technical precision, local focus, and conversion-first strategies to deliver measurable revenue growth.
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


            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading + basic explanation */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable SEO
                            <span className="text-[#25baff]"> Plans</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible SEO management plans designed to maximize your ROI,
                            generate quality leads, and scale your business efficiently.
                        </p>

                        {/* ← Added basic section / short explanation */}
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                            Choose the plan that best matches your current goals and budget.
                            Every package includes keyword research, on-page optimization,
                            content strategy, technical improvements, monthly reporting,
                            and dedicated support — tailored to help your website rank higher
                            and attract more qualified traffic.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* SILVER - now $500 */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    SILVER
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-gray-300">$</span>

                                    <span className="text-5xl font-bold text-gray-300">
                                        500
                                    </span>

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
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
                            </div>

                        </div>


                        {/* GOLD - now $800 - Popular */}
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
                                        800
                                    </span>

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
                                <Link to="/payment">
                                    <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
                            </div>

                        </div>


                        {/* PREMIUM - now $1400 */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    PREMIUM
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#607AFE]">$</span>

                                    <span className="text-5xl font-bold text-[#607AFE]">
                                        1400
                                    </span>

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

export default DallasSeo;