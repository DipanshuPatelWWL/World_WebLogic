import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaBullseye, FaRoute, FaGlobe, FaChartLine, FaSearch } from "react-icons/fa";
import { FaFileAlt, FaTools, FaTachometerAlt, FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { FaAward, FaUsers, FaGoogle, FaChartBar, FaCheckCircle } from "react-icons/fa";


import cleaningSeo from "../../../assets/market/automobileHome/cleaningSeo.avif";
import Cleaning from "../../../assets/market/automobileHome/cleaning.avif";
import Contractors from "../../../assets/market/automobileHome/contractors.avif";



gsap.registerPlugin(ScrollTrigger);

const CleaningSEOMarketing = () => {
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
            gsap.set(content, { height: "auto", opacity: 1, });
        }
    }, []);

    const faqs = [
        {
            question: "How long before I see results?",
            answer: "Most cleaning businesses see improvements within 3–4 months, with stronger growth by 6 months.",
        },
        {
            question: "Is SEO better than Google Ads?",
            answer: "SEO provides long-term traffic, while ads provide immediate visibility. The best strategy often combines both.",
        },
        {
            question: "How important is Google Business Profile?",
            answer: "Extremely important. It directly impacts local map rankings and call volume.",
        },
        {
            question: "Do reviews affect rankings?",
            answer: "Yes. Positive reviews improve local SEO visibility and customer trust.",
        },
        {
            question: "Can small cleaning companies compete locally?",
            answer: "Absolutely. Strong local SEO can help smaller companies outperform larger competitors in specific service areas.",
        },
        {
            question: "What budget is needed for cleaning SEO?",
            answer: "Budgets vary by competition and location, but SEO typically provides better long-term ROI than paid ads.",
        },
        {
            question: "Will SEO help increase bookings?",
            answer: "Yes. By improving visibility and targeting high-intent keywords, SEO directly increases qualified inquiries and bookings.",
        },
    ];

    const benefits = [
        {
            icon: FaSearch,
            title: "Strategic Keyword Research",
            desc: "Identify high-converting service keywords, local geo-targeted phrases, long-tail intent keywords, and competitor keyword gaps.",
        },
        {
            icon: FaTools,
            title: "On-Page SEO Optimization",
            desc: "Optimize title tags & meta descriptions, service page content, header structure, internal linking, image alt tags, and call-to-action placements.",
        },
        {
            icon: FaTachometerAlt,
            title: "Technical SEO Improvements",
            desc: "Enhance website speed, mobile responsiveness, schema markup, XML sitemap, Core Web Vitals, and crawlability & indexing fixes.",
        },
        {
            icon: FaMapMarkerAlt,
            title: "Local SEO & Google Maps Optimization",
            desc: "Optimize Google Business Profile, build local citations, manage reviews, create city-specific landing pages, and improve NAP consistency.",
        },
        {
            icon: FaFileAlt,
            title: "Content Marketing for Cleaning Businesses",
            desc: "Create service-based landing pages, location-based content, cleaning guides & blog articles, FAQ-rich content, and informational posts.",
        },
        {
            icon: FaLink,
            title: "Link Building & Authority Growth",
            desc: "Build high-quality backlinks through local directories, industry blogs, guest posting, community websites, and business partnerships.",
        },
        {
            icon: FaChartBar,
            title: "SEO Analytics & Performance Tracking",
            desc: "Monitor keyword rankings, website traffic, map visibility, conversion rate, lead tracking, and call tracking with monthly reports.",
        },
        {
            icon: FaCheckCircle,
            title: "Review & Reputation Management",
            desc: "Encourage positive reviews, respond professionally, and improve online reputation to boost trust and local rankings.",
        },
    ];

    const services = [
        "Cleaning keyword research & strategy",
        "Targeting high-intent cleaning search terms",
        "Competitor analysis to identify gaps",
        "On-Page optimization",
        "Creating optimized cleaning landing pages",
        "Technical SEO enhancements",
        "Blog creation on cleaning tips & trends",
        "Guides, checklists, and educational content",
        "Optimizing for 'near me' searches",
        "Managing Google Business Profile",
        "Securing backlinks from local & industry sources",
        "Analytics and reporting",
        "Monthly performance tracking",
        "Real-time insights into traffic, leads, and bookings",
    ];

    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Cleaning})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Cleaning SEO Marketing</h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-4xl">
                        Grow Your Cleaning Business with Strategic SEO Marketing
                    </p>
                </div>
            </section>

            {/* ================= WHAT IS Cleaning SEO Marketing? ================= */}

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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                            What is
                            <span className="text-[#25baff]"> Cleaning SEO Marketing?</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-200 leading-relaxed mb-6">
                                Cleaning SEO Marketing is a comprehensive digital strategy that improves your cleaning company’s online visibility in search engines like Google. It focuses on ranking higher for cleaning-related keywords, optimizing your website for local searches, improving Google Maps visibility, generating organic leads consistently, and building trust through reviews and authority.
                            </p>
                            <p className="text-gray-200 leading-relaxed mb-6">
                                It targets searches like “house cleaning service near me”, “commercial cleaning company in [city]”, “same-day deep cleaning”, “office janitorial services”, “move-out cleaning company”.
                            </p>
                            <p className="text-gray-200 leading-relaxed">
                                The goal is simple: More traffic → More inquiries → More booked jobs.
                            </p>
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
                                src={cleaningSeo}
                                alt="Cleaning SEO Marketing"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            <section
                ref={whoRef}
                className="relative py-20 px-6 overflow-hidden bg-[#020617]"
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-white z-0"></div>

                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full z-0"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

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
                                src={Contractors}
                                alt="Cleaning SEO Marketing"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            Major SEO Challenges
                            <span className="text-[#25baff]"> Cleaning Companies Face</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <ul className="space-y-4 text-gray-600">
                                <li>1. Intense Local Competition — Without a strategic plan, it’s difficult to stand out.</li>
                                <li>2. Poor Google Map Visibility — Missing high-converting traffic from the Local Pack.</li>
                                <li>3. Weak Website Performance — Slow pages and poor mobile experience hurt rankings.</li>
                                <li>4. Lack of Targeted Keywords — Generic targeting brings unqualified traffic.</li>
                                <li>5. Low Authority & Backlinks — Google may not trust your site without quality links.</li>
                                <li>6. Poor Online Reputation — Few or negative reviews impact rankings and trust.</li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Key Challenges & Opportunities in <span className="text-[#25baff]">Cleaning SEO</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: FaSearch, head: "Intense Local Competition", text: "Cleaning is highly competitive locally. A focused strategy helps you stand out and capture more bookings." },
                            { icon: FaMapMarkerAlt, head: "Poor Google Map Visibility", text: "Many businesses miss the top 3 map results — the most clicked local listings." },
                            { icon: FaTachometerAlt, head: "Weak Website Performance", text: "Slow loading, outdated design, and poor mobile experience reduce rankings and conversions." },
                            { icon: FaBullseye, head: "Lack of Targeted Keywords", text: "Generic keywords bring unqualified traffic that rarely converts to jobs." },
                            { icon: FaLink, head: "Low Authority & Backlinks", text: "Without quality backlinks, it's harder for Google to trust and rank your site highly." },
                            { icon: IoShieldCheckmark, head: "Poor Online Reputation", text: "Few reviews or negative feedback can hurt both rankings and customer decisions." },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon className="text-5xl text-[#25baff] mx-auto mb-6 group-hover:text-white" />
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-white">{item.head}</h3>
                                    <p className="text-gray-600 group-hover:text-white">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ================= WHY HIRE? ================= */}
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
                            <span className="text-[#25baff]">
                                Cleaning SEO Success
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our Cleaning SEO framework combines technical precision, strategic content, and data-driven optimization to maximize visibility, authority, and qualified lead generation.
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
                                <item.icon className="text-4xl text-[#25baff] mb-4" />
                                <h3 className="text-lg font-semibold text-[#020202] mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= WHY SEO? ================= */}
            <section className="py-28 bg-gradient-to-br from-[#020202] to-[#25baff]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Why Your Cleaning Business <span className="text-[#a8d97c]">Needs SEO</span>
                    </h2>

                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: FaGlobe, head: "Increase Local Visibility", text: "Appear when people search for cleaning services in your area." },
                                { icon: FaBullseye, head: "Attract Ready-to-Book Clients", text: "Bring customers who are actively looking for cleaning services." },
                                { icon: FaChartLine, head: "Reduce Marketing Costs", text: "Organic traffic continues generating leads long after optimization." },
                                { icon: IoShieldCheckmark, head: "Build Brand Trust", text: "Ranking on page one increases credibility instantly." },
                                { icon: FaRoute, head: "Improve Website Conversions", text: "Optimized pages turn visitors into paying customers." },
                                { icon: FaCheckCircle, head: "Long-Term Sustainable Growth", text: "Build a strong online presence that grows with your business." },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center shadow-lg transition-all duration-500 hover:bg-white hover:-translate-y-3 hover:shadow-2xl"
                                    >
                                        <Icon className="text-4xl text-white mb-6 mx-auto group-hover:text-[#25baff] transition-colors duration-300" />
                                        <h3 className="font-extrabold text-xl mb-3 text-white group-hover:text-[#020202] transition-colors duration-300">{item.head}</h3>
                                        <p className="text-white/80 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* audit services */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        6 Powerful Benefits of <span className="text-[#25baff]">Cleaning SEO Services</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { head: "Increase Local Visibility", text: "Appear when people search for cleaning services in your area." },
                            { head: "Attract Ready-to-Book Clients", text: "Bring customers who are actively looking for cleaning services." },
                            { head: "Reduce Marketing Costs", text: "Organic traffic continues generating leads long after optimization." },
                            { head: "Build Brand Trust", text: "Ranking on page one increases credibility instantly." },
                            { head: "Improve Website Conversions", text: "Optimized pages turn visitors into paying customers." },
                            { head: "Long-Term Growth & Stability", text: "Generate consistent leads and sustainable business growth." },
                        ].map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#25baff]/60 hover:shadow-[#25baff]/30 hover:-translate-y-3"
                                >
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-white">{item.head}</h3>
                                    <p className="text-gray-600 group-hover:text-white">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* why choose us */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Why Choose Us for <span className="text-[#25baff]">Cleaning SEO Marketing?</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: FaAward, head: "Industry-Focused Expertise", text: "We understand how cleaning customers search online." },
                            { icon: FaBullseye, head: "Customized Strategy", text: "No generic templates — fully tailored approach." },
                            { icon: FaUsers, head: "Transparent Reporting", text: "Clear monthly progress reports." },
                            { icon: FaGoogle, head: "Ethical SEO Techniques", text: "White-hat strategies that deliver long-term results." },
                            { icon: FaChartBar, head: "ROI-Focused Approach", text: "We focus on leads, calls, and revenue — not just rankings." },
                            { icon: FaCheckCircle, head: "Proven Results", text: "Consistent delivery of improved rankings and qualified leads." },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon className="text-5xl text-[#25baff] mx-auto mb-6 group-hover:text-white" />
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-white">{item.head}</h3>
                                    <p className="text-gray-600 group-hover:text-white">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Soft Accent Glow Effects */}
            {/* Heading */}
            <section className="py-28 bg-[#020202] relative overflow-hidden">

                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#25baff]/20 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a8d97c]/20 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                            Breakdown of Our Core{" "}
                            <span className="text-[#25baff]">
                                Cleaning SEO Services
                            </span>
                        </h2>
                        <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                            We deliver structured, performance-focused cleaning SEO solutions designed to enhance rankings, drive qualified traffic, and build long-term digital authority.
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
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            ref={(el) => (faqRefs.current[index] = el)}
                            className="gsap-item bg-white border border-gray-200 rounded-2xl shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300 mb-4 overflow-hidden"
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
                                {faq.question}
                                {activeFaq === index ? (
                                    <FiMinus className="text-xl" />
                                ) : (
                                    <FiPlus className="text-xl" />
                                )}
                            </button>
                            <div
                                className="faq-content overflow-hidden px-6"
                                style={{ height: activeFaq === index ? "auto" : 0, opacity: activeFaq === index ? 1 : 0 }}
                            >
                                <p className="pb-6 text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default CleaningSEOMarketing;