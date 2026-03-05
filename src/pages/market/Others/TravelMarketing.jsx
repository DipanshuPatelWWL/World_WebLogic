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

import Banner from "../../../assets/market/travelMarketing/banner.avif";
import PhotoService from "../../../assets/market/travelMarketing/img1.avif";
import LocalImg from "../../../assets/market/travelMarketing/img2.avif";
import ChooseUs from "../../../assets/market/travelMarketing/img3.avif";

export default function TravelMarketing() {

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
            title: "Destination Keyword Research",
            text: "Target long-tail, geo-specific keywords with high intent like 'best family resorts in Maldives' or 'luxury tours in Paris 2025' instead of broad terms. Focus on specific niches, seasons, and traveler types to capture qualified searches."
        },
        {
            icon: <FaCheckCircle />,
            title: "On-Page SEO Optimization",
            text: "Optimize title tags, meta descriptions, headings, internal linking, and URLs with relevant travel keywords. Ensure content is engaging, mobile-friendly, and structured for better crawlability and user experience."
        },
        {
            icon: <FaBlog />,
            title: "High-Quality Content Creation",
            text: "Develop detailed guides, itineraries, destination blogs, packing tips, and seasonal content. Create valuable, informative posts that answer traveler questions and establish your agency as an authority."
        },
        {
            icon: <FaChartLine />,
            title: "Technical SEO Improvements",
            text: "Enhance site speed, fix crawl issues, implement schema markup for tours/events/reviews, optimize images, and ensure mobile responsiveness to improve rankings and user satisfaction."
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Optimization",
            text: "Most travel searches happen on mobile. Ensure responsive design, fast loading times, touch-friendly elements, and optimized media to provide seamless experience for on-the-go travelers."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local SEO for Travel Agencies",
            text: "Optimize Google Business Profile, encourage reviews, build local citations, target 'near me' and city-specific keywords, and create location pages to dominate local and regional searches."
        },
        {
            icon: <FaStar />,
            title: "Reviews & Reputation Management",
            text: "Encourage positive client reviews on Google, TripAdvisor, and other platforms. Respond to feedback and showcase testimonials to build trust, improve local rankings, and influence booking decisions."
        },
        {
            icon: <FaLink />,
            title: "Backlink Building & Authority",
            text: "Acquire quality backlinks from travel blogs, directories, partnerships, and influencers. Strong domain authority helps outrank competitors and improves overall search visibility."
        }
    ];

    const benefits = [
        "Stand out in one of the most competitive travel niches",
        "Generate relevant organic traffic from the most qualified leads",
        "Reach your target audience and convert visitors into travelers",
        "Establish trust and credibility as a travel organization",
        "Improve customer base both in local & national/international markets",
        "Level up customer satisfaction & get positive reviews and ratings"
    ];

    const faqs = [
        {
            question: "What is Travel SEO?",
            answer: "Travel SEO is a specialized strategy to optimize travel websites, agencies, and tourism businesses for search engines, improving visibility for destination, tour, and booking-related searches."
        },
        {
            question: "Why is SEO important for travel agencies?",
            answer: "In a highly competitive industry, SEO helps travel businesses attract organic traffic, generate qualified leads, increase bookings, and reduce reliance on paid ads."
        },
        {
            question: "What keywords should travel agencies target?",
            answer: "Focus on long-tail keywords like 'best family tours in Bali', 'luxury honeymoon packages Europe', 'adventure travel near me', and location-specific phrases with high booking intent."
        },
        {
            question: "Is local SEO important for travel businesses?",
            answer: "Yes, especially for agencies targeting regional clients. Local SEO boosts visibility in 'travel agency near me' and city-specific searches, plus Google Maps results."
        },
        {
            question: "How long does travel SEO take to show results?",
            answer: "Typically 3–6 months for noticeable improvements in rankings and traffic, depending on competition, site condition, and keyword difficulty."
        },
        {
            question: "Do images and visuals affect travel SEO?",
            answer: "Yes. Optimized images with alt text, fast loading, and schema markup improve user experience, image search rankings, and overall site performance."
        },
        {
            question: "Why are reviews important for travel SEO?",
            answer: "Positive reviews build trust, improve local pack rankings, enhance click-through rates, and influence traveler decisions in a review-heavy industry."
        },
        {
            question: "Can blogging help travel SEO?",
            answer: "Absolutely. Regular, high-quality blog content targets additional keywords, attracts backlinks, engages visitors, and demonstrates expertise to search engines."
        },
        {
            question: "What makes a travel website SEO-friendly?",
            answer: "Fast loading, mobile-responsive design, optimized content/images, proper schema, quality backlinks, good site structure, and user-focused experience drive better SEO performance."
        },
        {
            question: "Should travel agencies hire an SEO agency?",
            answer: "Yes. A specialized travel SEO agency delivers tailored strategies, stays updated on trends, and achieves faster, more effective results than DIY approaches."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center">

                <img
                    src={Banner}
                    alt="Travel Marketing SEO Banner"
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

                        Travel Marketing Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Bookings & Growth
                        </span>

                    </h1>

                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Grow your travel business — agencies, tour operators, tourism websites — with powerful SEO that attracts ready-to-book travelers and ranks you higher in destination and local searches.
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
                                alt="Travel Marketing SEO"
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
                            TRAVEL DIGITAL GROWTH
                        </p>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Travel Marketing Services?
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            The global travel & tourism market is huge. With a large customer base & a massive potential gain, brands turn to travel marketing agency to stand out. If you operate a travel agency, travel event planner, tour guide, tourism website, or other travel business, we can assist you in boosting your online visibility, achieving better search engine rankings, and reaching more potential customers.
                        </p>

                        <p className="text-gray-600 mb-8">
                            With our strategic travel SEO, you’ll stand out in one of the most competitive travel niches, generate relevant organic traffic from qualified leads, and transform visitors into happy travelers.
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
                            Our Proven Travel Growth Process
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your current site, competitors, keywords, and travel market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build a custom SEO plan tailored to your niche — tours, destinations, agencies, etc."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Optimize content, images, technical SEO, local listings, schema, and Google Business Profile."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor rankings, traffic, bookings — refine and scale to dominate your travel market."
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
                            8 Best Travel Marketing Strategies
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
                                Local Travel Searches
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, citations, reviews, location pages, and schema so travelers find you instantly in “travel agency near me”, “tours in [city]”, and niche local searches.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Optimizing Google Business Profile with destination photos",
                                "Creating city/niche-specific landing pages",
                                "Building citations on travel directories, TripAdvisor",
                                "Encouraging 5-star client reviews & testimonials",
                                "Adding structured data (schema) for tours and events"
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
                                alt="Local Travel SEO"
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
                                alt="Travel agency team helping happy clients"
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
                            WHY TRAVEL BUSINESSES CHOOSE US
                        </p>

                        {/* Main heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">
                            Book More Travelers
                            <span className="block text-[#25baff] mt-1">
                                Without Heavy Ad Spend
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Most travel businesses compete with giants and OTAs through expensive ads. Our travel SEO creates lasting organic visibility, higher rankings, and consistent inquiries — helping you grow sustainably.
                        </p>

                        <p className="text-gray-600 mb-8">
                            We help agencies, tour operators, and tourism sites become the go-to choice in their destinations — season after season.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Rank #1 for high-intent searches like 'tours near me'",
                                "Receive steady bookings without constant ad spend",
                                "Build long-term Google rankings and local presence",
                                "Convert website visitors into confirmed travelers",
                                "Outrank big OTAs and competitors in your niche",
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
                        Benefits of Travel Marketing SEO
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaSearch />,
                                title: "More Qualified Traffic & Bookings",
                                text: "Appear higher when travelers search for your destinations, tours, and packages."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Dominate Local & Destination Searches",
                                text: "Rank in Google Maps + local pack for 'travel agency near me' and geo-specific queries."
                            },
                            {
                                icon: <FaStar />,
                                title: "Build Trust & Authority",
                                text: "Strong rankings + glowing reviews make you the preferred choice for travelers."
                            },
                            {
                                icon: <FaMobileAlt />,
                                title: "Attract Ready-to-Book Travelers",
                                text: "Target people actively searching for trips, itineraries, and experiences."
                            },
                            {
                                icon: <FaLink />,
                                title: "Sustainable Growth – Less Ad Dependency",
                                text: "Organic traffic and leads that grow over time without ongoing ad costs."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Beat Competition & OTAs",
                                text: "Outrank big platforms and local competitors in your service areas."
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
                        Travel Marketing
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