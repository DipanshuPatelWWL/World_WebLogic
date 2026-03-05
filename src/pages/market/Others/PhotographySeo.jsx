import { useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import {
    FaCamera,
    FaSearch,
    FaMapMarkerAlt,
    FaLink,
    FaMobileAlt,
    FaUsers,
    FaChartLine,
    FaCheckCircle,
    FaStar,
    FaImage,
    FaBlog,
    FaHeart
} from "react-icons/fa";

import Banner from "../../../assets/market/photographySeo/banner.jpg";
import PhotoService from "../../../assets/market/photographySeo/weddingPhoto.avif";
import LocalImg from "../../../assets/market/photographySeo/tripPhoto.avif";
import ChooseUs from "../../../assets/market/photographySeo/horsePhoto.jpg";

export default function PhotographySEO() {

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
            icon: <FaImage />,
            title: "Image Optimization",
            text: "Photographers rely heavily on images, but large files slow down websites. Compress images, use correct formats (JPEG/PNG), resize appropriately, and maintain quality to improve speed and rankings."
        },
        {
            icon: <FaSearch />,
            title: "Descriptive Alt Tags",
            text: "Add meaningful alt text to every image. Example: “Bride and groom laughing during golden hour wedding photoshoot in [city] park”. Helps search engines understand images and improves accessibility + image search rankings."
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Photography Website",
            text: "Most clients browse on mobile. A fast, mobile-friendly, beautifully designed website improves user experience, reduces bounce rate, and helps Google’s mobile-first indexing."
        },
        {
            icon: <FaSearch />,
            title: "Keyword Research for Photographers",
            text: "Target high-intent phrases like wedding photographer [city], real estate photographer near me, portrait photography session, event photographer, commercial photography services."
        },
        {
            icon: <FaBlog />,
            title: "Create Engaging Blog Content",
            text: "Write helpful blog posts: 'Best Poses for Engagement Photos', 'How to Prepare for Your Wedding Shoot', 'Top Locations for Family Portraits'. Showcases expertise and attracts organic traffic."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local SEO for Photographers",
            text: "Optimize Google Business Profile, use location keywords, keep NAP consistent, build citations (Yelp, WeddingWire), encourage reviews, add schema markup, and create city-specific landing pages."
        },
        {
            icon: <FaStar />,
            title: "Online Reputation & Reviews",
            text: "Encourage happy clients to leave Google and Facebook reviews. Respond to every review. Positive testimonials build trust and improve local pack & map rankings."
        },
        {
            icon: <FaHeart />,
            title: "Showcase Portfolio + Social Proof",
            text: "Beautiful galleries, client testimonials, before/after (if applicable), Instagram feed integration, and consistent branding help convert visitors into booked clients."
        }
    ];

    const benefits = [
        "Attract clients actively searching for photography services",
        "Rank higher in “photographer near me” and niche-specific searches",
        "Increase website traffic and qualified booking inquiries",
        "Establish yourself as a trusted expert in your photography niche",
        "Generate more weddings, portraits, events, and commercial bookings",
        "Build long-term organic visibility without constant ad spend"
    ];

    const faqs = [
        {
            question: "What is SEO for photographers?",
            answer: "SEO for photographers is a strategy that improves a photography website’s visibility on search engines to attract more potential clients."
        },
        {
            question: "How does SEO help photographers get more bookings?",
            answer: "SEO helps your website rank higher in search results, allowing potential clients to discover your photography services easily."
        },
        {
            question: "What keywords should photographers target?",
            answer: "Common keywords include wedding photographer, event photographer, portrait photography, real estate photographer, and photographer near me."
        },
        {
            question: "Is local SEO important for photographers?",
            answer: "Yes. Local SEO helps photographers appear in location-based searches and Google Maps results."
        },
        {
            question: "How long does photography SEO take to show results?",
            answer: "SEO typically takes 3–6 months to start showing measurable improvements in traffic and rankings."
        },
        {
            question: "Do images affect SEO rankings?",
            answer: "Yes. Properly optimized images improve website speed, user experience, and image search visibility."
        },
        {
            question: "Why are reviews important for photography SEO?",
            answer: "Positive reviews build trust with potential clients and improve local search rankings."
        },
        {
            question: "Can blogging help photography SEO?",
            answer: "Yes. Blogging helps target additional keywords, improve search rankings, and showcase your expertise."
        },
        {
            question: "What makes a photography website SEO-friendly?",
            answer: "A fast, mobile-responsive website with optimized images, keywords, alt text, quality content, and good site structure improves SEO performance."
        },
        {
            question: "Should photographers hire an SEO agency?",
            answer: "An SEO agency can implement professional strategies that increase website visibility, traffic, and bookings more effectively than DIY efforts."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center">

                <img
                    src={Banner}
                    alt="Photography SEO Banner"
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

                        Photography SEO Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Bookings & Growth
                        </span>

                    </h1>

                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Grow your photography business — weddings, portraits, real estate, events, commercial — with powerful SEO that attracts ready-to-book clients and ranks you higher in local and niche searches.
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
                                alt="Photography SEO"
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
                            PHOTOGRAPHY DIGITAL GROWTH
                        </p>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                SEO for Photographers?
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            SEO for photographers is a set of strategies designed to improve your website’s visibility in search engines when clients look for wedding photographers, portrait sessions, real estate shoots, event coverage, or commercial photography services.
                        </p>

                        <p className="text-gray-600 mb-8">
                            We help photographers get discovered by the right clients — so your stunning portfolio actually turns into booked jobs instead of staying hidden.
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
                            Our Proven Photography Growth Process
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your current site, competitors, keywords, and photography market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build a custom SEO plan tailored to your niche — weddings, portraits, real estate, events, etc."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Optimize images, content, technical SEO, local listings, alt tags, schema, and Google Business Profile."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor rankings, traffic, inquiries — refine and scale to dominate your local photography market."
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
                            8 Best Photography Marketing Strategies
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
                                Local Photography Searches
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, citations, reviews, location pages, and schema so clients find you instantly in “photographer near me”, “wedding photographer [city]”, and niche local searches.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Optimizing Google Business Profile with portfolio photos",
                                "Creating city/niche-specific landing pages",
                                "Building citations on WeddingWire, The Knot, Yelp",
                                "Encouraging 5-star client reviews & testimonials",
                                "Adding structured data (schema) for photographers"
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
                                alt="Local Photography SEO"
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
                                alt="Photographer working with happy clients"
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
                            WHY PHOTOGRAPHERS CHOOSE US
                        </p>

                        {/* Main heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">
                            Book More Clients
                            <span className="block text-[#25baff] mt-1">
                                Without Burning Budget on Ads
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Most photographers spend thousands on ads that disappear when the budget runs out.
                            Our photography SEO creates lasting organic visibility, higher Google rankings, and consistent client inquiries — even while you’re out shooting.
                        </p>

                        <p className="text-gray-600 mb-8">
                            We help wedding, portrait, real estate, and event photographers become the go-to name in their city — month after month.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Rank #1 for high-intent searches like 'wedding photographer near me'",
                                "Receive steady inquiries without monthly ad spend",
                                "Build long-term Google rankings and local pack presence",
                                "Convert portfolio visitors into confirmed bookings",
                                "Outrank chain studios and big aggregators locally",
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
                        Benefits of Photography SEO
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaSearch />,
                                title: "More Inquiries & Bookings",
                                text: "Appear higher when clients search for your exact photography style and location."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Dominate Local & Maps Results",
                                text: "Rank in Google Maps + local pack for 'photographer near me' searches."
                            },
                            {
                                icon: <FaStar />,
                                title: "Build Instant Trust & Authority",
                                text: "Strong rankings + glowing reviews make you the obvious choice."
                            },
                            {
                                icon: <FaMobileAlt />,
                                title: "Attract Ready-to-Book Clients",
                                text: "Target people actively searching for wedding, portrait, real estate & event photographers."
                            },
                            {
                                icon: <FaLink />,
                                title: "Sustainable Growth – No Ad Dependency",
                                text: "Organic traffic and leads that grow over time without monthly ad costs."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Beat Local & National Competition",
                                text: "Outrank big studios and aggregators in your service area."
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
                        Photography SEO
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