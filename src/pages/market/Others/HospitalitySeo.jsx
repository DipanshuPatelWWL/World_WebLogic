import { useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
    FaEye,
    FaBullseye,
    FaMobileAlt,
    FaShieldAlt,
    FaUserCheck,
    FaChartLine,
    FaCheckCircle
} from "react-icons/fa";

import HeroImg from "../../../assets/market/hospitalitySeo/banner.jpg";
import SeoImg from "../../../assets/market/hospitalitySeo/img1.avif";
import LocalImg from "../../../assets/market/hospitalitySeo/img2.avif";
import Card from "../../../assets/market/hospitalitySeo/card.avif";

export default function HospitalitySeo() {
    const [activeFaq, setActiveFaq] = useState(null);
    const faqRefs = useRef([]);
    const sectionRefs = useRef([]);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    const stagger = {
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const addSectionRef = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };


    const benefits = [
        {
            icon: <FaEye />,
            title: "Increase Hotel Bookings and Reservation Inquiries",
            text: "Hospitality marketing helps your property appear higher in search engine results when travelers search for accommodations."
        },
        {
            icon: <FaBullseye />,
            title: "Improve Rankings for Travel-Related Search Keywords",
            text: "Marketing targets specific search queries used by travelers actively looking for hotels and resorts."
        },
        {
            icon: <FaMobileAlt />,
            title: "Strengthen Your Brand Presence Across Search Engines",
            text: "Optimized content and profiles appear when travelers search for specific destinations or amenities you offer."
        },
        {
            icon: <FaShieldAlt />,
            title: "Attract Both Local and International Guests",
            text: "Top rankings build credibility and establish your business as a reliable hospitality provider."
        },
        {
            icon: <FaUserCheck />,
            title: "Increase Website Engagement and Conversion Rates",
            text: "Attract ready-to-book visitors who are more likely to complete reservations."
        },
        {
            icon: <FaChartLine />,
            title: "Build Trust Through Reviews, Ratings, and Strong Brand Authority",
            text: "Marketing delivers sustainable traffic and bookings growth without ongoing ad spend."
        }
    ];

    const faqs = [
        {
            question: "What are hospitality marketing services?",
            answer: "Hospitality marketing services promote hotels and travel businesses online to increase visibility, attract guests, and boost bookings."
        },
        {
            question: "How can SEO help increase hotel bookings?",
            answer: "SEO improves your hotel website’s ranking on search engines, helping more travelers find and book your property."
        },
        {
            question: "Why is local SEO important for hotels?",
            answer: "Local SEO helps your hotel appear in nearby searches and Google Maps results, attracting more local travelers."
        },
        {
            question: "How long does it take to see results from hospitality marketing?",
            answer: "Most hospitality marketing strategies start showing noticeable results within 3–6 months depending on competition."
        },
        {
            question: "Can social media marketing improve hotel visibility?",
            answer: "Yes, social media helps showcase your hotel’s amenities, offers, and experiences to attract more potential guests."
        },
        {
            question: "What role do online reviews play in hotel marketing?",
            answer: "Online reviews build trust and influence travelers’ booking decisions by showing real guest experiences."
        },
        {
            question: "How can multilingual SEO benefit international bookings?",
            answer: "Multilingual SEO helps international travelers understand your website and increases global search visibility."
        },
        {
            question: "Is content marketing effective for hotels and resorts?",
            answer: "Yes, quality content like travel guides and blogs attracts visitors and improves your website’s search rankings."
        },
        {
            question: "What makes a hotel website SEO-friendly?",
            answer: "A fast, mobile-friendly, well-structured website with optimized content and keywords improves SEO performance."
        },
        {
            question: "Why should hotels hire a hospitality marketing agency?",
            answer: "A hospitality marketing agency uses expert strategies to increase visibility, attract guests, and maximize bookings."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center">

                {/* Background Image */}
                <img
                    src={HeroImg}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/70 via-[#020202]/60 to-[#020202]" />

                {/* Content */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="relative text-center max-w-4xl px-6"
                >

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">

                        Hospitality Marketing Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Bookings Growth
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Boost visibility, attract high-intent travelers, and grow your hospitality business — hotel, resort, restaurant, or travel brand — with proven marketing strategies tailored for hospitality.
                    </p>

                </motion.div>

            </section>



            {/* WHAT IS ... */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow effects */}
                <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#25baff]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#a8d97c]/10 rounded-full blur-3xl"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* IMAGE SIDE */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition"></div>

                        {/* FIXED container */}
                        <div className="relative bg-white border border-gray-200 p-3 rounded-2xl shadow-xl">

                            <img
                                src={SeoImg}
                                className="rounded-xl w-full h-[400px] object-cover"
                                alt="Hospitality Marketing"
                            />

                        </div>

                    </motion.div>



                    {/* CONTENT SIDE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide">
                            HOSPITALITY DIGITAL GROWTH
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Hospitality Marketing?
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Hospitality marketing is the process of promoting hotels, resorts, restaurants, travel services, and other accommodation businesses through strategic digital and offline marketing techniques.
                        </p>


                        <p className="text-gray-600 mb-8">
                            We make your hospitality business the go-to choice when travelers search for accommodations you offer.
                        </p>



                        {/* Feature points */}
                        <div className="space-y-4">

                            {[
                                "Increasing brand awareness",
                                "Engaging potential guests",
                                "Promoting unique experiences and amenities",
                                "Building long-term relationships with customers"
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="flex items-center gap-3 group"
                                >

                                    <div className="w-6 h-6 rounded-full bg-[#25baff]/10 flex items-center justify-center group-hover:bg-[#25baff] transition">

                                        <FaCheckCircle className="text-[#25baff] group-hover:text-white text-sm transition" />

                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {item}
                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* PROCESS SECTION */}
            <section className="py-28 px-6">

                <div className="max-w-6xl mx-auto">

                    <motion.div
                        className="text-center mb-20"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-bold">
                            Our Proven Hospitality Growth Process
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and hospitality market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom marketing plan for your hotel or hospitality business."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Execute on-page, technical SEO, content, and local optimizations."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor, refine, and scale results for long-term visibility."
                            }
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >

                                <div className="text-5xl font-bold text-[#25baff] mb-4">
                                    {item.step}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>



            {/* Compact Glowy Case Study */}
            <section className="relative py-16 px-4 sm:px-6 bg-gray-950 overflow-hidden">
                {/* Animated Glow Background */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#25baff]/20 blur-[160px] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full animate-pulse"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-white">Hospitality Marketing</span>{" "}
                            <span className="text-[#25baff]">Success Story</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#25baff] mx-auto mt-4 rounded-full shadow-[0_0_20px_#25baff]"></div>
                    </div>

                    {/* Top Section */}
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
                        {/* Overview Card */}
                        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
                            <div
                                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
        transition duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.5)]"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Client Overview
                                </h3>

                                <p className="text-sm text-gray-300 mb-4">
                                    <strong className="text-[#25baff]">
                                        Luxury Resorts Inc
                                    </strong>{" "}
                                    – Multi-category hotel chain with online & physical properties.
                                </p>

                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Low organic visibility</li>
                                    <li>• Weak local search presence</li>
                                    <li>• Irregular booking inquiries</li>
                                    <li>• Outdated website performance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#25baff]/30 blur-3xl rounded-2xl group-hover:blur-[80px] transition duration-500"></div>
                            <img
                                src={Card}
                                alt="Handshake"
                                className="relative rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Strategy + Results Compact Grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Strategy Card */}
                        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
                            <div
                                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
        transition duration-500 group-hover:shadow-[0_0_40px_rgba(37,186,255,0.5)]"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Strategy Implemented
                                </h3>

                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Technical SEO & speed optimization</li>
                                    <li>• Geo-targeted keyword strategy</li>
                                    <li>• Google Business Profile enhancement</li>
                                    <li>• Content marketing & backlink outreach</li>
                                    <li>• Conversion rate optimization (CRO)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Results Card */}
                        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#25baff]/40 to-cyan-400/40">
                            <div
                                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
        transition duration-500 group-hover:shadow-[0_0_50px_rgba(37,186,255,0.6)]"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Results Achieved
                                </h3>

                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• +68% increase in organic traffic</li>
                                    <li>• +52% rise in qualified leads</li>
                                    <li>• Top 3 rankings for high-intent keywords</li>
                                    <li>• Reduced paid ad dependency by 40%</li>
                                    <li>• Improve booking discoverability and reservations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Major Concerns Section - Aesthetic Upgrade */}
            <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                {/* Soft Ambient Glow */}
                <div className="absolute top-20 left-[-150px] w-[450px] h-[450px] bg-[#25baff]/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-20 right-[-150px] w-[450px] h-[450px] bg-[#25baff]/10 blur-[120px] rounded-full"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            <span className="text-black">Common Concerns About</span>{" "}
                            <span className="text-[#25baff]">Hospitality Marketing</span>
                        </h2>
                        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                            We understand the hesitation. Here’s how we address the most
                            common questions hospitality businesses have about marketing.
                        </p>
                        <div className="w-24 h-[3px] bg-[#25baff] mx-auto mt-6 rounded-full shadow-[0_0_20px_#25baff]"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        {[
                            {
                                title: "Marketing feels too expensive for our hospitality business",
                                desc: "Our approach focuses on long-term return on investment. Instead of short-term tactics, we build sustainable search visibility that consistently generates high-value traffic.",
                            },
                            {
                                title: "Marketing takes too long to show meaningful impact",
                                desc: "While marketing builds gradually, our structured strategy delivers steady ranking improvements and measurable traffic growth within the first few months.",
                            },
                            {
                                title: "We tried marketing before and it didn’t deliver",
                                desc: "Generic marketing fails in hospitality. Our hospitality-focused optimization targets travel keywords, local markets, and high-intent booking searches.",
                            },
                            {
                                title: "We don’t have time to manage marketing",
                                desc: "From audits and content creation to performance tracking, our team handles everything — so you can focus on running your property and serving guests.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 
          border border-gray-200 shadow-sm
          transition-all duration-500
          hover:-translate-y-4 hover:shadow-[0_15px_50px_rgba(37,186,255,0.15)]
          hover:border-[#25baff]/40"
                            >
                                {/* Accent Dot */}
                                <div className="w-3 h-3 bg-[#25baff] rounded-full mb-5 shadow-[0_0_15px_#25baff]"></div>

                                <h3
                                    className="text-lg font-semibold text-black mb-4 
          group-hover:text-[#25baff] transition duration-300"
                                >
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Bottom Glow Line */}
                                <div
                                    className="mt-6 h-[2px] w-0 bg-[#25baff] 
          transition-all duration-500 group-hover:w-20 rounded-full"
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* LOCAL SEO */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-[#25baff]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-[#a8d97c]/10 blur-3xl rounded-full"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* CONTENT SIDE */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide">
                            LOCAL & REGIONAL SEO
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Dominate

                            <span className="block text-[#25baff]">
                                Local Hospitality Searches
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, website, and content so travelers find your hospitality property instantly in local and “near me” searches.
                        </p>



                        {/* Highlight stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "450%", label: "Local Visibility" },
                                { value: "3.5X", label: "More Foot Traffic" },
                                { value: "290%", label: "Bookings Growth" }
                            ].map((stat, index) => (

                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center"
                                >

                                    <div className="text-2xl font-bold text-[#25baff]">
                                        {stat.value}
                                    </div>

                                    <div className="text-gray-600 text-sm">
                                        {stat.label}
                                    </div>

                                </motion.div>

                            ))}

                        </div>



                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Optimizing your Google Business Profile",
                                "Creating location-specific landing pages",
                                "Managing online directories and citations",
                                "Encouraging authentic guest reviews"
                            ].map((point, index) => (

                                <motion.div
                                    key={index}
                                    className="flex gap-3 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >

                                    <div className="w-6 h-6 rounded-full bg-[#a8d97c]/20 flex items-center justify-center">

                                        <FaCheckCircle className="text-[#a8d97c] text-sm" />

                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {point}
                                    </span>

                                </motion.div>

                            ))}

                        </div>


                    </motion.div>



                    {/* IMAGE SIDE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 blur-xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

                        <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-200">

                            <img
                                src={LocalImg}
                                className="rounded-xl w-full h-[400px] object-cover"
                            />

                        </div>

                    </motion.div>


                </div>

            </section>


            {/* BENEFITS */}
            <section className="py-24 px-6">

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-6xl mx-auto"
                >

                    <h2 className="text-4xl font-bold text-center mb-16">
                        Benefits of Hospitality Marketing
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {benefits.map((item, index) => (

                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 p-8 rounded-xl hover:border-[#25baff] border border-white/10 transition"
                            >

                                <div className="text-[#25baff] text-3xl mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.text}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

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
                                                const prevContent = prevEl.querySelector(".faq-content");

                                                gsap.to(prevContent, {
                                                    height: 0,
                                                    opacity: 0,
                                                    duration: 0.3,
                                                    ease: "power2.inOut",
                                                });
                                            }

                                            gsap.to(content, {
                                                height: content.scrollHeight,
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
}