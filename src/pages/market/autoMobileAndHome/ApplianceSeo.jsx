import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
    FaSearch, FaChartLine, FaHome, FaPhoneAlt, FaStar, FaMapMarkerAlt, FaLink,
} from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { IoSettingsSharp, IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineEmergencyShare, MdOutlineReviews, MdQuestionAnswer } from "react-icons/md";

// Replace with your actual appliance repair images

import HeroBg from "../../../assets/market/automobileHome/appliance.avif";
import IntroImg from "../../../assets/market/automobileHome/technician-working.avif";
import SocialImg from "../../../assets/market/automobileHome/social-proof.avif";

gsap.registerPlugin(ScrollTrigger);

const ApplianceRepairSeo = () => {
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
            value: "300–590%",
            title: "Increase in Calls & Leads",
            desc: "Average growth in qualified calls and leads from targeted local SEO within 6–12 months.",
        },
        {
            id: 2,
            icon: <FaPhoneAlt size={28} />,
            value: "195–300%",
            title: "Booking & Call Growth",
            desc: "Surge in emergency & same-day service calls via improved Google visibility.",
        },
        {
            id: 3,
            icon: <MdOutlineEmergencyShare size={28} />,
            value: "4x–5x",
            title: "Business Growth Potential",
            desc: "Multiple case studies show revenue/staff growth multiples after strong SEO implementation.",
        },
        {
            id: 4,
            icon: <FaStar size={28} />,
            value: "4.8+",
            title: "Average Rating Achieved",
            desc: "Strong review strategies maintain high Google ratings and trust signals.",
        },
    ];

    const services = [
        {
            icon: <FaSearch size={28} />,
            title: "Appliance Repair SEO",
            desc: "Specialized strategy to dominate Google for high-intent searches like 'refrigerator repair near me', 'emergency washer repair', 'same day oven repair'. Includes keyword research, on-page optimization, schema, technical fixes.",
        },
        {
            icon: <IoSettingsSharp size={28} />,
            title: "Website Optimization & User Experience",
            desc: "Mobile-first, fast-loading sites with click-to-call, easy booking forms, clear service pages, strong CTAs — essential for emergency smartphone searches.",
        },
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: "Local SEO & Google Business Profile",
            desc: "Optimize GBP, build citations, create service-area pages, target 'near me' & city-specific queries to win Maps pack and local visibility.",
        },
        {
            icon: <FiPenTool size={28} />,
            title: "Content Marketing & Educational Guides",
            desc: "Create problem-solving content: 'Why is my dishwasher leaking?', 'Common refrigerator issues', troubleshooting guides, FAQs, pillar pages & topic clusters to build authority.",
        },
        {
            icon: <FaLink size={28} />,
            title: "Link Building & Citations",
            desc: "Earn backlinks from local directories, home service blogs, community sites, trade associations to boost domain authority and rankings.",
        },
        {
            icon: <MdOutlineReviews size={28} />,
            title: "Review & Reputation Management",
            desc: "Encourage Google/Yelp/Facebook reviews, respond professionally, monitor reputation to build instant trust and improve local SEO.",
        },
        {
            icon: <FaHome size={28} />,
            title: "Google Ads & Paid Campaigns",
            desc: "Immediate visibility for urgent keywords like '24 hour appliance repair', call-only ads, location targeting, retargeting to fill schedules fast.",
        },
        {
            icon: <IoShieldCheckmark size={28} />,
            title: "Trust Building & Conversion Optimization",
            desc: "Add guarantees, before/after photos, technician bios, service breakdowns, mobile-friendly features to turn searches into bookings.",
        },
    ];

    const faqs = [
        {
            question: "How long does SEO take to generate appliance repair leads?",
            answer: "SEO typically begins showing measurable improvements within 3–6 months, depending on competition in your area."
        },
        {
            question: "Is local SEO more important than national SEO?",
            answer: "Yes. Appliance repair businesses rely heavily on local searches, making local SEO the top priority."
        },
        {
            question: "Should I invest in Google Ads or SEO?",
            answer: "Both work best together. SEO builds long-term growth, while Google Ads deliver immediate calls."
        },
        {
            question: "How can I rank higher in “near me” searches?",
            answer: "Optimize your Google Business Profile, collect reviews, use location-based keywords, and maintain consistent local listings."
        },
        {
            question: "Do online reviews really affect rankings?",
            answer: "Yes. Positive reviews improve trust, click-through rates, and local search visibility."
        },
        {
            question: "How do I compete with large appliance repair companies?",
            answer: "Focus on local dominance, strong customer reviews, fast response times, and targeted SEO strategies."
        },
    ];

    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Appliance Repair Marketing Services</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        More Calls. More Bookings. More Local Customers.
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
                            Digital Growth Solutions for <span className="text-[#25baff]">Appliance Repair Companies</span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            When a refrigerator stops cooling or a washer floods the laundry room, homeowners grab their phone and search immediately. If your appliance repair business isn’t visible at the top of search results, that emergency call goes to someone else.
                            <br /><br />
                            Our appliance repair marketing services are built to help you dominate local search, generate consistent service calls, and turn online searches into scheduled appointments.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden group">
                        <img
                            src={IntroImg}
                            alt="Appliance Repair Marketing Services"
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
                            Why <span className="text-[#25baff]">Appliance Repair Digital Marketing</span> Drives Real Business Growth
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            Homeowners don’t flip through directories anymore — they search “Refrigerator repair near me”, “Emergency washer repair”, “Same day oven repair service”, “24 hour appliance technician”. If you're not on page one, you're invisible to high-intent customers ready to book.
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
                                Why Appliance Repair Businesses Need Digital Marketing
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li>• Higher-quality leads from active searchers</li>
                                <li>• More emergency service calls</li>
                                <li>• Increased daily bookings</li>
                                <li>• Better ROI than traditional ads</li>
                                <li>• Works 24/7 — even when closed</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#25baff]/10 to-[#a8d97c]/10 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                            <p className="text-lg leading-relaxed text-gray-200">
                                Digital marketing ensures your company is found first — not your competitors — when urgency strikes.
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

            {/* ================= WHY CHOOSE / GROWTH ================= */}
            <section
                className="relative py-20 px-6 overflow-hidden bg-white"
            >
                <div className="relative max-w-7xl mx-auto">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                        How Appliance Repair Marketing <span className="text-[#25baff]">Grows Your Business</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#25baff]">1. Dominate Local Search Results</h3>
                            <p>Optimize website & Google Business Profile for Maps, “near me”, emergency, and city-specific queries → more local calls.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#25baff]">2. Generate High-Intent Leads</h3>
                            <p>Target keywords like “same day appliance repair”, “dishwasher repair technician”, “oven repair company near me” — ready-to-book customers.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#25baff]">3. Build Trust & Authority</h3>
                            <p>Top rankings + reviews + optimized pages + educational content + guarantees = instant credibility.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#25baff]">4. Improve Website Performance</h3>
                            <p>Fast, mobile-friendly site with click-to-call, easy contact, strong CTAs → higher conversions on emergency searches.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-[#25baff]">5. Outrank Local Competitors</h3>
                            <p>Competitor analysis, keyword targeting, on-page/tech SEO, citations → stay ahead in rankings.</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-bold mb-6">Benefits</h3>
                        <ul className="inline-grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <li className="flex items-center gap-3"><FaStar className="text-[#25baff]" /> Fully booked technician schedules</li>
                            <li className="flex items-center gap-3"><FaStar className="text-[#25baff]" /> More emergency service calls</li>
                            <li className="flex items-center gap-3"><FaStar className="text-[#25baff]" /> Higher visibility in your city</li>
                            <li className="flex items-center gap-3"><FaStar className="text-[#25baff]" /> Increased revenue from local jobs</li>
                            <li className="flex items-center gap-3"><FaStar className="text-[#25baff]" /> Consistent lead flow</li>
                            <li className="flex items-center gap-3"><FaStar className="text-[#25baff]" /> Stronger brand recognition</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* SERVICES SECTION */}
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
                            How To Get Appliance Repair Leads
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            SEO & Marketing Strategies That Drive Real Bookings
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

            {/* SOCIAL MEDIA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-bold text-[#25baff] mb-6 text-center">
                        Social Media Marketing for Appliance Repair Companies
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
                        Share maintenance tips, before-and-after photos, testimonials, technician spotlights, short videos — build trust and local familiarity.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 items-center mb-10">

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="shadow-xl rounded-lg overflow-hidden border"
                        >
                            <img
                                src={SocialImg}
                                alt="Appliance repair social media example"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="shadow-xl rounded-lg overflow-hidden"
                        >
                            <div className="bg-gradient-to-br from-[#25baff] to-[#0ea5e9] p-12 text-white h-full flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Build Trust & Stay Connected Locally
                                </h3>
                                <p className="text-lg opacity-90">
                                    Consistent posting encourages referrals, strengthens reputation, and supports SEO.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020202] mb-4 flex items-center justify-center gap-4">
                            <MdQuestionAnswer className="text-[#25baff]" size={40} />
                            Appliance Repair Marketing FAQs
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-[#25baff]">{faq.question}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white text-center px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
                    Turn Searches Into Service Calls
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                    Your technicians are skilled. Your service is reliable. Now your marketing should work just as hard.
                    <br /><br />
                    Who We Help: Independent technicians • Local companies • Multi-location businesses • Appliance sales & service providers • Emergency repair services
                </p>
            </section>

        </div>
    );
};

export default ApplianceRepairSeo;