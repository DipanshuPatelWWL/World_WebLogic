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

import HeroImg from "../../../assets/market/jewelrySEO/banner.jpg";
import SeoImg from "../../../assets/market/jewelrySEO/img1.jpg";
import LocalImg from "../../../assets/market/jewelrySEO/img2.jpg";
import Card from "../../../assets/market/jewelrySEO/card.jpg";

export default function JewelrySEO() {
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
            title: "Increased Brand Visibility",
            text: "SEO helps your jewelry website rank higher for important search queries."
        },
        {
            icon: <FaBullseye />,
            title: "Attract Highly Targeted Customers",
            text: "SEO focuses on attracting users who are actively searching for jewelry products."
        },
        {
            icon: <FaMobileAlt />,
            title: "Better User Experience",
            text: "A well-optimized jewelry website loads faster, works smoothly on mobile devices."
        },
        {
            icon: <FaShieldAlt />,
            title: "Build Trust and Credibility",
            text: "Strong SEO performance helps establish your jewelry brand as a reliable source."
        },
        {
            icon: <FaUserCheck />,
            title: "Higher Conversion Rates",
            text: "Attract consistent new customers, increase traffic, and grow globally."
        },
        {
            icon: <FaChartLine />,
            title: "Long-Term Growth and ROI",
            text: "SEO continues to drive organic traffic over time for sustained sales growth."
        }
    ];

    const faqs = [
        {
            question: "What is jewelry SEO?",
            answer: "Jewelry SEO is the process of optimizing jewelry websites to improve their rankings in search engines and attract customers searching for jewelry products online."
        },
        {
            question: "Why is SEO important for jewelry stores?",
            answer: "SEO helps jewelry businesses increase visibility, attract targeted customers, and generate more online sales."
        },
        {
            question: "How long does jewelry SEO take to show results?",
            answer: "SEO typically shows noticeable results within three to six months depending on competition and optimization efforts."
        },
        {
            question: "Can SEO increase jewelry sales?",
            answer: "Yes. Higher search rankings bring more visitors to your website, increasing the chances of product inquiries and purchases."
        },
        {
            question: "What keywords are important for jewelry SEO?",
            answer: "Keywords related to engagement rings, diamond jewelry, gold necklaces, bracelets, and custom jewelry designs are commonly targeted."
        },
        {
            question: "Is local SEO important for jewelry stores?",
            answer: "Yes. Local SEO helps jewelry stores appear in searches like “jewelry store near me” and attract nearby customers."
        },
        {
            question: "Does content marketing help jewelry SEO?",
            answer: "Yes. Informative blogs and guides improve search rankings and build trust with potential customers."
        },
        {
            question: "What role do backlinks play in jewelry SEO?",
            answer: "Backlinks from reputable websites improve your website’s authority and help increase search engine rankings."
        },
        {
            question: "Is SEO better than paid advertising for jewelry marketing?",
            answer: "SEO provides long-term organic traffic, while paid ads generate faster but short-term visibility."
        },
        {
            question: "How can jewelry SEO help grow a business?",
            answer: "SEO improves online visibility, attracts targeted customers, and increases both online and in-store jewelry sales."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[50vh] md:h-[55vh] flex items-center justify-center">

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
                    className="relative text-center max-w-3xl px-6"
                >

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">

                        Jewelry SEO Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Business Growth
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Increase visibility, attract high-intent customers, and grow your jewelry store, online brand, or custom design business with proven SEO & digital strategies tailored for jewelry businesses.
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
                                alt="Jewelry SEO"
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
                            JEWELRY DIGITAL GROWTH
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Jewelry SEO?
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Jewelry SEO services help jewelry stores, online jewelry brands, and custom jewelry designers improve their search engine rankings and connect with customers actively searching for jewelry products.
                        </p>


                        <p className="text-gray-600 mb-8">
                            We make your jewelry business the go-to choice when customers search for quality jewelry opportunities.
                        </p>



                        {/* Feature points */}
                        <div className="space-y-4">

                            {[
                                "Rank higher for jewelry-related search terms",
                                "Dominate local and 'near me' jewelry queries",
                                "Increase product inquiries and sales",
                                "Establish expertise in jewelry products"
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
                            Our Proven Jewelry Growth Process
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and jewelry market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom SEO plan for your jewelry store or online brand."
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
                            <span className="text-white">Jewelry SEO</span>{" "}
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
                                        Sparkle Gems Jewelers
                                    </strong>{" "}
                                    – Texas-based residential & commercial jewelry company.
                                </p>

                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Low organic visibility</li>
                                    <li>• Weak local search presence</li>
                                    <li>• Irregular product inquiries</li>
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

                                <ul className="space-y-2 text-sm text-gray-400">
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

                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• +68% increase in organic traffic</li>
                                    <li>• +52% rise in qualified leads</li>
                                    <li>• Top 3 rankings for high-intent keywords</li>
                                    <li>• Reduced paid ad dependency by 40%</li>
                                    <li>• Listing the business in local directories</li>
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
                            <span className="text-[#25baff]">Jewelry SEO</span>
                        </h2>
                        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                            We understand the hesitation. Here’s how we address the most
                            common questions jewelry businesses have about SEO.
                        </p>
                        <div className="w-24 h-[3px] bg-[#25baff] mx-auto mt-6 rounded-full shadow-[0_0_20px_#25baff]"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        {[
                            {
                                title: "SEO feels too expensive for our jewelry business",
                                desc: "Our approach focuses on long-term return on investment. Instead of short-term tactics, we build sustainable search visibility that consistently generates high-value leads.",
                            },
                            {
                                title: "SEO takes too long to show meaningful impact",
                                desc: "While SEO builds gradually, our structured strategy delivers steady ranking improvements and measurable traffic growth within the first few months.",
                            },
                            {
                                title: "We tried SEO before and it didn’t deliver",
                                desc: "Generic SEO fails in specialized industries. Our jewelry-focused optimization targets industry keywords, local markets, and high-intent product searches.",
                            },
                            {
                                title: "We don’t have time to manage marketing",
                                desc: "From audits and content creation to performance tracking, our team handles everything — so you can focus on running operations and managing sales.",
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
                                Local Jewelry Searches
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, website, and content so customers find your jewelry store or brand instantly in local and “near me” searches.
                        </p>



                        {/* Highlight stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "450%", label: "Local Visibility" },
                                { value: "3.5X", label: "More Inquiries" },
                                { value: "290%", label: "Local Sales" }
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
                                "Appear in Google Maps top results",
                                "Rank for 'jewelry near me' searches",
                                "Increase calls, inquiries, and walk-ins",
                                "Attract local high-intent customers"
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
                        Benefits of Jewelry SEO
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
