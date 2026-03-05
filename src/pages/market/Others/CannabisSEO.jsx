import { useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import {
    FaSearch,
    FaMapMarkerAlt,
    FaLink,
    FaMobileAlt,
    FaChartLine,
    FaCheckCircle,
    FaStar,
    FaBlog,
} from "react-icons/fa";

import Banner from "../../../assets/market/cannabisSEO/banner.avif";
import PhotoService from "../../../assets/market/cannabisSEO/img1.avif";
import LocalImg from "../../../assets/market/cannabisSEO/img2.avif";
import ChooseUs from "../../../assets/market/cannabisSEO/img3.avif";

export default function CannabisSEO() {

    const [activeFaq, setActiveFaq] = useState(null);
    const faqRefs = useRef([]);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const strategies = [
        {
            icon: <FaSearch />,
            title: "Advanced Keyword Research",
            text: "Our team performs in-depth keyword analysis to identify the most relevant and profitable search terms in the cannabis niche. We focus on keywords that match customer intent, such as CBD for pain relief, cannabis dispensary near me, benefits of CBD oil, medical cannabis products."
        },
        {
            icon: <FaCheckCircle />,
            title: "On-Page SEO Optimization",
            text: "We optimize all essential elements of your website so search engines can clearly understand your content. This includes SEO-friendly title tags, keyword-optimized headings, compelling meta descriptions, structured internal linking, optimized URLs."
        },
        {
            icon: <FaBlog />,
            title: "Content Marketing for Cannabis Brands",
            text: "Content is a powerful tool for building authority in the cannabis industry. We create valuable content that educates users while improving your SEO performance. Examples include CBD product guides, health and wellness blogs, cannabis education articles, comparison posts (CBD vs THC), frequently asked questions."
        },
        {
            icon: <FaChartLine />,
            title: "Technical SEO Improvements",
            text: "A technically optimized website performs better in search engines and provides a smoother user experience. Our technical SEO services include improving website loading speed, fixing crawl and indexing issues, implementing structured data, resolving broken links, optimizing website architecture."
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Optimization",
            text: "Many cannabis consumers search for products on mobile devices. A mobile-friendly website ensures users can browse your content easily on any screen. We optimize responsive website layouts, mobile page speed, touch-friendly navigation, optimized images and media."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local SEO for Dispensaries",
            text: "Local search optimization is essential for cannabis dispensaries and CBD stores. Our local SEO strategy includes optimizing Google Business Profile, managing customer reviews, improving local citations, targeting location-specific keywords."
        },
        {
            icon: <FaStar />,
            title: "Compliance-Focused SEO",
            text: "The cannabis industry operates under strict regulations. Our SEO strategies follow industry guidelines to ensure your content remains compliant while still ranking effectively in search results. We help you provide accurate product information, legal disclaimers, and trustworthy content that builds customer confidence."
        },
        {
            icon: <FaLink />,
            title: "Authority Building Through Backlinks",
            text: "Backlinks from reputable websites increase your domain authority and improve search rankings. We focus on acquiring quality links through guest posting, influencer collaborations, industry partnerships, cannabis directories."
        }
    ];

    const benefits = [
        "Drive highly targeted organic traffic",
        "Improve search rankings for CBD-related keywords",
        "Increase brand trust and online authority",
        "Generate more leads, reviews, and sales",
        "Strengthen local visibility for dispensaries",
        "Build credibility and brand awareness"
    ];

    const faqs = [
        {
            question: "What is Cannabis SEO?",
            answer: "Cannabis SEO is a specialized digital marketing strategy designed to help cannabis businesses improve their visibility in search engine results and attract organic traffic."
        },
        {
            question: "Why is SEO important for CBD businesses?",
            answer: "Due to advertising restrictions on cannabis products, SEO is one of the most effective ways for CBD companies to reach customers online."
        },
        {
            question: "How long does cannabis SEO take to show results?",
            answer: "SEO typically takes 3–6 months to start showing significant improvements in rankings and traffic, depending on competition and website condition."
        },
        {
            question: "Can cannabis websites rank on Google?",
            answer: "Yes. With proper optimization, cannabis websites can rank for relevant keywords and attract organic search traffic."
        },
        {
            question: "What makes cannabis SEO different from regular SEO?",
            answer: "Cannabis SEO requires compliance with strict industry regulations and a tailored strategy that avoids restricted advertising methods."
        },
        {
            question: "How can Digital Guider help my cannabis business?",
            answer: "Digital Guider provides customized cannabis SEO strategies that improve search rankings, increase website traffic, and generate more qualified leads."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center">

                <img
                    src={Banner}
                    alt="Cannabis SEO Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/70 via-[#020202]/60 to-[#020202]" />

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="relative text-center max-w-4xl px-6"
                >

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">

                        Cannabis SEO Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Organic Growth & Sales
                        </span>

                    </h1>

                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Grow your cannabis business — CBD brands, dispensaries, e-commerce — with powerful SEO that attracts ready-to-buy customers and ranks you higher in CBD and local searches.
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
                                src={PhotoService}
                                className="rounded-xl w-full h-[400px] object-cover"
                                alt="Cannabis SEO"
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
                            CANNABIS DIGITAL GROWTH
                        </p>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                SEO for Cannabis Businesses?
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Marketing cannabis products online is challenging. Strict advertising policies often block paid promotions for CBD and cannabis businesses, which means brands must rely heavily on organic search visibility to attract customers. This is where professional Cannabis SEO services play a crucial role.
                        </p>

                        <p className="text-gray-600 mb-8">
                            At Digital Guider, we help cannabis brands, dispensaries, and CBD companies increase their visibility on search engines through proven SEO strategies. Our team understands the unique regulations and marketing challenges in the cannabis industry and builds tailored campaigns that help businesses grow safely and sustainably.
                        </p>

                        {/* Feature points */}
                        <div className="space-y-4">

                            {benefits.map((item, index) => (

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
                            Our Proven Cannabis Growth Process
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your current site, competitors, keywords, and cannabis market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build a custom SEO plan tailored to your niche — CBD, dispensaries, e-commerce, etc."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Optimize content, technical SEO, local listings, keywords, schema, and Google Business Profile."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor rankings, traffic, inquiries — refine and scale to dominate your cannabis market."
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

            {/* STRATEGIES SECTION - 7+ Best Strategies */}
            <section className="py-24 px-6 bg-gray-950">

                <div className="max-w-7xl mx-auto">

                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-bold">
                            8 Best Cannabis Marketing Strategies
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {strategies.map((item, index) => (

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
                                Local Dispensary Searches
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            Local search optimization is essential for cannabis dispensaries and CBD stores. We optimize your Google Business Profile, citations, reviews, location pages, and schema so clients find you instantly in “cannabis dispensary near me”, “CBD store [city]”, and niche local searches.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Optimizing Google Business Profile with product photos",
                                "Creating city/niche-specific landing pages",
                                "Building citations on cannabis directories, Yelp",
                                "Encouraging 5-star customer reviews & testimonials",
                                "Adding structured data (schema) for dispensaries"
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
                                alt="Local Cannabis SEO"
                                className="rounded-xl w-full h-[400px] object-cover"
                            />

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* WHY CHOOSE US / SUCCESS FACTORS */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#25baff]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#a8d97c]/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* IMAGE SIDE - left on desktop */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group order-2 md:order-1"
                    >
                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition"></div>

                        {/* Image container */}
                        <div className="relative bg-white border border-gray-200 p-3 rounded-2xl shadow-xl">
                            <img
                                src={ChooseUs}
                                className="rounded-xl w-full h-[420px] object-cover"
                                alt="Cannabis business team working with happy customers"
                            />
                        </div>
                    </motion.div>

                    {/* CONTENT SIDE - right on desktop */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        {/* Small label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide uppercase">
                            WHY CANNABIS BUSINESSES CHOOSE US
                        </p>

                        {/* Main heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">
                            Grow Your Cannabis Business
                            <span className="block text-[#25baff] mt-1">
                                Without Ad Restrictions
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Most cannabis businesses face strict ad policies that limit paid promotions. Our cannabis SEO creates lasting organic visibility, higher Google rankings, and consistent customer inquiries — even while navigating regulations.
                        </p>

                        <p className="text-gray-600 mb-8">
                            We help CBD brands, dispensaries, and e-commerce stores become the go-to name in their market — month after month.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Rank #1 for high-intent searches like 'CBD store near me'",
                                "Receive steady inquiries without monthly ad spend",
                                "Build long-term Google rankings and local pack presence",
                                "Convert website visitors into confirmed sales",
                                "Outrank larger cannabis companies and competitors locally",
                                "Grow sustainably — rankings and traffic compound over time"
                            ].map((point, index) => (

                                <motion.div
                                    key={index}
                                    className="flex gap-3 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
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

                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-6xl mx-auto"
                >

                    <h2 className="text-4xl font-bold text-center mb-16">
                        Benefits of Cannabis SEO
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaSearch />,
                                title: "Better Online Visibility",
                                text: "Professional SEO helps your cannabis website rank higher on Google for relevant CBD and marijuana-related searches."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Dominate Local & Maps Results",
                                text: "Rank in Google Maps + local pack for 'cannabis dispensary near me' searches."
                            },
                            {
                                icon: <FaStar />,
                                title: "Build Instant Trust & Authority",
                                text: "Strong rankings + glowing reviews make you the obvious choice for customers."
                            },
                            {
                                icon: <FaMobileAlt />,
                                title: "Attract Ready-to-Buy Customers",
                                text: "Target people actively searching for CBD products, dispensaries, or cannabis information."
                            },
                            {
                                icon: <FaLink />,
                                title: "Sustainable Growth – No Ad Dependency",
                                text: "Organic traffic and leads that grow over time without monthly ad costs."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Beat Local & National Competition",
                                text: "Outrank big cannabis companies and aggregators in your service area."
                            }
                        ].map((item, index) => (

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
            <section className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Cannabis SEO
                        <span className="text-[#25baff]"> FAQs</span>
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