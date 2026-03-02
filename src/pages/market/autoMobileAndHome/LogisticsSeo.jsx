import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaTruck, FaGlobe, FaChartLine, FaHome, FaSearchengin, FaLink, FaImages } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { IoSettingsSharp, IoShieldCheckmark } from "react-icons/io5";
import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";


import Logistics from "../../../assets/market/automobileHome/logistics.avif";
import socialMedia from "../../../assets/market/automobileHome/socialMedia.avif";
import Img from "../../../assets/market/automobileHome/img.avif";
import Img1 from "../../../assets/market/automobileHome/img1.avif";


gsap.registerPlugin(ScrollTrigger);

const LogisticsSeo = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);

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

    const stats = [
        {
            id: 1,
            icon: <FaChartLine size={28} />,
            value: "180%",
            title: "Organic Traffic Growth",
            desc: "Average increase achieved for logistics clients within 6 months.",
        },
        {
            id: 2,
            icon: <FaHome size={28} />,
            value: "220%",
            title: "GBP Interactions",
            desc: "Growth in Google Business Profile views and actions.",
        },
        {
            id: 3,
            icon: <FaTruck size={28} />,
            value: "45%",
            title: "Freight Inquiries Increase",
            desc: "Direct impact from strong local & national SEO rankings.",
        },
        {
            id: 4,
            icon: <FaRoute size={28} />,
            value: "52%",
            title: "Logistics Lead Growth",
            desc: "Result of targeted SEO, and location-based visibility.",
        },
    ];

    const services = [
        {
            icon: <FaSearchengin size={28} />,
            title: "Strategic Logistics SEO",
            desc: "We build custom SEO strategies tailored to freight, trucking, warehousing, and supply chain companies. Industry-focused keyword research, competitor gap analysis, service-page optimization, technical SEO improvements, schema implementation, SEO for freight & transport services.",
        },
        {
            icon: <IoSettingsSharp size={28} />,
            title: "Website Optimization for Logistics Companies",
            desc: "Your website should convert visitors into inquiries. We ensure: Fast loading speed, mobile responsiveness, clear service structure, strong CTAs, optimized landing pages, conversion-focused design. A well-structured logistics website reduces bounce rate and increases booking inquiries.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Local SEO for Trucking & Freight Companies",
            desc: "If you serve specific cities or regions, local SEO is critical. We help you: Optimize Google Business Profile, target “near me” searches, build local citations, create location-specific landing pages, improve map rankings.",
        },
        {
            icon: <FiPenTool size={28} />,
            title: "Content Marketing for Supply Chain Brands",
            desc: "Content builds authority and improves rankings. We create: Industry blog articles, case studies, freight guides, international shipping resources, warehouse management insights, supply chain trend reports.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Link Building & Authority Development",
            desc: "Strong backlinks increase domain authority and search rankings. We secure placements through: Industry publications, logistics blogs, business directories, guest posts, trade websites.",
        },
        {
            icon: <FaImages size={28} />,
            title: "Social Media Marketing for Logistics Companies",
            desc: "Social media builds credibility and brand awareness. We help you: Showcase fleet operations, share delivery milestones, publish industry insights, attract drivers & talent, connect with B2B clients. Platforms like LinkedIn are especially powerful for B2B logistics marketing.",
        },
        {
            icon: <FaGlobe size={28} />,
            title: "Global SEO & Multilingual Optimization",
            desc: "For international shipping companies, global reach is essential. We implement: Multilingual website optimization, hreflang configuration, international keyword mapping, country-specific landing pages, optimization for global search engines.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Reputation & Review Management",
            desc: "Clients entrust you with valuable goods. We help encourage reviews, monitor mentions, respond professionally, and build trust online to strengthen brand credibility.",
        },
    ];

    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Logistics})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Logistics SEO</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Accelerate Visibility. Move More Freight. Win Bigger Contracts.
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section
                ref={whoRef}
                className="relative py-20 px-6 overflow-hidden bg-white"
            >
                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            What Are
                            <span className="text-[#25baff]"> Logistics Marketing Services?</span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            In today’s digital-first economy, manufacturers, eCommerce brands, distributors, and retailers search online before choosing a logistics partner. If your trucking, freight forwarding, or supply chain company isn’t visible on search engines, you're missing high-value contracts.
                            <br /><br />
                            Logistics marketing is no longer optional — it’s essential for consistent lead generation, brand credibility, and long-term growth.
                            <br /><br />
                            Specialized digital strategies designed for freight companies, trucking businesses, 3PL providers, warehousing companies, and international shipping firms help you: Increase online visibility, Generate qualified B2B leads, Build industry authority, Strengthen brand trust, Dominate local & global markets.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Img}
                            alt="Logistics Marketing Services"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                </div>
            </section>

            <section className="relative bg-[#020202] text-white py-24 px-6 overflow-hidden">

                <div className="absolute top-0 left-0 w-72 h-72 bg-[#25baff] opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a8d97c] opacity-20 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why <span className="text-[#25baff]">Logistics Digital Marketing</span> Drives Real Business Growth
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            In a highly competitive freight and supply chain market, strategic digital marketing helps logistics companies win high-value contracts, capture serious B2B searches, and expand sustainably — from local routes to global trade lanes.
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
                                Why Logistics Companies Need Strong Digital Marketing
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li>• B2B buyers research logistics providers online first</li>
                                <li>• Extremely competitive transportation & freight landscape</li>
                                <li>• Rapid growth in e-commerce and global trade</li>
                                <li>• Trust and reliability are critical in logistics</li>
                                <li>• Local authority • National reach • Global expansion</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                We focus on results that matter: turning searches into qualified freight inquiries, RFQs, and signed contracts.
                                Every strategy is built to increase high-intent traffic and actual revenue.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
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
            <section
                ref={whoRef}
                className="relative py-20 px-6 overflow-hidden bg-white"
            >
                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={Img1}
                            alt="Logistics Marketing Services"
                            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            Why Choose Specialized{" "}
                            <span className="text-[#25baff]">Logistics Marketing</span>?
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Unlike generic digital agencies, we understand transportation, fleet operations, freight management, customs clearance, last-mile delivery, and full supply chain solutions.
                            <br /><br />
                            We work with: Trucking companies, Freight forwarding agencies, 3PL providers, Warehousing & distribution companies, Cold storage logistics, Import-export businesses, Last-mile delivery services, International cargo operators.
                            <br /><br />
                            Ready to grow your logistics business? Let’s build a results-driven strategy that drives traffic, increases inquiries, and wins more contracts.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= SERVICES SECTION ================= */}
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
                            Our <span className="text-[#25baff]">Logistics Marketing</span> Solutions
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Complete, performance-focused digital marketing services built specifically for freight, trucking, 3PL, warehousing, and international logistics businesses.
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

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-bold text-[#25baff] mb-6 text-center">
                        Social Media Marketing for Logistics & Freight Companies
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
                        Social media is a powerful channel to showcase your fleet, build trust with shippers, attract quality drivers, and connect with B2B decision-makers.
                        Active presence across LinkedIn, YouTube, Instagram, and Facebook helps you stand out in a competitive industry.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 items-center mb-10">

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="shadow-xl rounded-lg overflow-hidden border"
                        >
                            <img
                                src={socialMedia}
                                alt="Social media post example - logistics"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="shadow-xl rounded-lg overflow-hidden"
                        >
                            <div className="bg-gradient-to-br from-[#25baff] to-[#0ea5e9] p-12 text-white h-full flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Social Media for <br /> Logistics & Freight Brands
                                </h3>

                                <p className="text-lg opacity-90">
                                    Build awareness. Engage shippers & carriers. Drive inquiries and contracts through targeted B2B social campaigns.
                                </p>
                                <p className="mt-4">
                                    A strong social presence differentiates you from competitors, generates valuable backlinks, referral traffic, and supports your overall logistics SEO strategy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-[#020202] text-white relative overflow-hidden">

                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#25baff]/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a8d97c]/20 blur-3xl rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                            High-Quality <span className="text-[#25baff]">Backlinks</span> for Logistics Brands
                        </h2>
                        <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto">
                            Authority links from respected transportation, supply chain, and logistics platforms signal trust and expertise to Google — improving rankings and long-term visibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">

                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-[#a8d97c]">
                                Where We Build Your Authority
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                Strategic off-page SEO placements in industry-trusted publications, directories, blogs, and trade platforms that drive real visibility and high-intent traffic.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "FreightWaves",
                                    "Transport Topics",
                                    "Logistics Management",
                                    "Supply Chain Dive",
                                    "Journal of Commerce (JOC)",
                                    "Inbound Logistics",
                                    "Trucking Info",
                                    "Global Trade Magazine",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg hover:bg-[#25baff]/10 transition"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 via-white/5 to-[#a8d97c]/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10">
                            <h3 className="text-3xl font-bold mb-6">
                                Why Authority Links Matter in Logistics
                            </h3>

                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Significantly boost domain authority & rankings
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Drive qualified organic traffic from industry sources
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Establish credibility with shippers and carriers
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Strengthen long-term digital presence in freight
                                </li>
                            </ul>

                            <p className="mt-8 text-gray-400 text-sm">
                                All placements include accurate NAP, optimized anchor text, and contextually relevant content to maximize SEO and reputation impact.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-28 bg-white text-[#020202]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-24">
                        <div className="gap-4 mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                                Optimize Logistics Content for Search & Conversions
                            </h2>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed text-center mb-10">
                            Content is central to logistics marketing. From freight rate guides and customs compliance articles to warehouse optimization tips and supply chain trend reports — well-optimized content attracts serious shippers and improves rankings.
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-[#25baff]">
                                    Strategic Content SEO
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li>✔ Target high-intent logistics keywords</li>
                                    <li>✔ Optimize titles, meta descriptions & headers</li>
                                    <li>✔ Use schema markup for services & FAQs</li>
                                    <li>✔ Create downloadable guides & infographics</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-[#a8d97c]">
                                    Visibility & Lead Generation Boost
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Optimized content ranks higher, attracts qualified traffic, improves click-through rates, and feeds your sales pipeline with serious freight inquiries.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                    <div>
                        <div className="gap-4 mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                                Prioritize Website Experience to Maximize Conversions
                            </h2>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
                            In today’s digital freight marketplace, a fast, mobile-friendly, easy-to-navigate website is essential. Great UX keeps visitors engaged longer, reduces bounce rates, and turns more searches into RFQs and booked loads.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-[#25baff]">
                                    Logistics Website Optimization
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Streamlined navigation, fast load times, clear service pages, strong CTAs — built for shippers and decision-makers.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-[#a8d97c]">
                                    Technical SEO Foundation
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Clean URLs, proper site hierarchy, mobile-first indexing, Core Web Vitals, and logistics-specific schema markup.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-[#020202]">
                                    Rich Results & Higher CTR
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Service rich snippets, FAQ schema, and local business markup help you stand out in search results and drive more qualified clicks.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default LogisticsSeo;
