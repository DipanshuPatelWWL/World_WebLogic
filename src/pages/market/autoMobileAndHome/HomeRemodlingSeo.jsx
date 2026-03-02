import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";


import Home from "../../../assets/market/automobileHome/home.avif";
import Essential from "../../../assets/market/automobileHome/essential.avif";
import Remodel from "../../../assets/market/automobileHome/remodel.avif";


gsap.registerPlugin(ScrollTrigger);

const HomeRemodlingSeo = () => {
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


    const benefits = [
        {

            title: "Strategic Keyword Research for Remodelers",
            desc: "We target high-intent, location-specific keywords like kitchen remodeling contractor near me to attract homeowners ready to hire.",
            head: "Examples include:",
            points: [
                "Kitchen remodeling contractor near me",
                "Bathroom renovation services in [city]",
                "Home addition company in [location]",
                "Affordable remodeling contractor",
            ],
        },
        {

            title: "Advanced On-Page SEO Optimization",
            desc: "Optimize titles, meta descriptions, headers, URLs, internal linking, images, mobile responsiveness, and site speed.",
            head: "We improve:",
            points: [
                "Page titles and meta descriptions",
                "URL formatting",
                "Internal linking strategy",
                "Image optimization",
                "Mobile responsiveness",
                "Site speed performance",
            ],
        },
        {

            title: "High-Quality Remodeling SEO Content",
            desc: "Create service pages, city landing pages, blogs, case studies, FAQs, and remodeling guides that drive organic traffic.",
            head: "We create:",
            points: [
                "Dedicated service pages (kitchen, bathroom, basement, roofing, etc.)",
                "City-based landing pages",
                "Educational blog posts",
                "Project case studies",
                "FAQ sections",
                "Remodeling guides",
            ],
        },
        {

            title: "Conversion-Focused Website Optimization",
            desc: "Improve UX, speed, navigation, and CTAs to convert visitors into estimate requests and consultations.",
            head: "A high-performing remodeling website must be:",
            points: [
                "Fast and mobile-friendly",
                "Visually appealing",
                "Easy to navigate",
                "Clear with service information",
                "Equipped with strong calls-to-action",
            ],
        },
        {

            title: "Local SEO & Google Business Optimization",
            desc: "Improve map rankings, citations, Google Business Profile performance, and increase calls and direction requests.",
            head: "optimize your Google Business Profile to improve:",
            points: [
                "Local map rankings",
                "Customer engagement",
                "Call volume",
                "Direction requests",
                "Accurate business listings",
                "Location-specific content",
                "Citation building",
                "Review strategy implementation",
            ],
        },
        {

            title: "Authority Building Through Off-Page SEO",
            desc: "Earn quality backlinks from directories, industry websites, and community organizations to strengthen domain authority.",
            head: "We strengthen your authority by earning quality backlinks from:",
            points: [
                "Local business directories",
                "Industry-related websites",
                "Professional associations",
                "Community organizations",
            ],
        },
        {

            title: "Social Media Integration for Brand Growth",
            desc: "Leverage Facebook, Instagram, Pinterest, and Houzz to showcase projects and build local brand recognition.",
            head: "Effective platforms include:",
            points: [
                "Facebook",
                "Instagram",
                "Pinterest",
                "Houzz",
            ],
        },
        {

            title: "Online Reputation & Review Management",
            desc: "Increase Google reviews, manage feedback professionally, and improve ratings to boost conversions and trust.",
            head: "We help you implement strategies to:",
            points: [
                "Increase Google reviews",
                "Manage customer feedback",
                "Respond professionally to reviews",
                "Improve overall star ratings",
            ],
        },
    ];


    const services = [
        "Home remodeling keyword research & strategy",
        "Targeting high-intent remodeling search terms",
        "Competitor analysis to uncover local ranking gaps",
        "On-page SEO optimization for remodeling websites",
        "Creating optimized remodeling service & location pages",
        "Technical SEO improvements for better site performance",
        "Blog creation on remodeling trends and renovation ideas",
        "Project guides, case studies, and homeowner resources",
        "Optimizing for 'near me' and city-based searches",
        "Google Business Profile optimization & management",
        "Building backlinks from local and home improvement websites",
        "SEO analytics and detailed performance reporting",
        "Monthly SEO growth tracking",
        "Real-time insights into traffic, leads, and conversions",
        "Generating high-quality home remodeling leads",
    ];

    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Home})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Home Remodeling Seo</h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-4xl">
                        Home Remodeling SEO services designed to boost your remodeling company’s visibility in competitive local search results and attract homeowners ready to start their projects.
                    </p>
                </div>
            </section>



            {/* ================= WHAT IS Home Remodeling Seo? ================= */}

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
                            <span className="text-[#25baff]"> Home Remodeling SEO?</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-200 leading-relaxed mb-6">
                                If you own a home remodeling company and want a steady flow of high-quality leads, investing in professional SEO is the smartest move. Today’s homeowners search online before hiring a contractor. If your business isn’t visible on search engines, you’re missing out on valuable projects.
                                With a powerful Home Remodeling SEO strategy, your company appears in front of homeowners actively searching for services like kitchen renovations, bathroom upgrades, basement finishing, home additions, roofing, flooring, and full-house remodeling.

                                The goal is simple — more visibility, more calls, and more booked projects.
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
                                src={Remodel}
                                alt="Home Remodeling SEO"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>



            {/* Why Online Marketing*/}
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
                                src={Essential}
                                alt="Home Remodeling SEO"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                            Why Online Marketing Is Essential
                            <span className="text-[#25baff]"> for Remodeling Companies</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-500 leading-relaxed mb-6">
                                Traditional advertising methods no longer deliver consistent results. Homeowners now use Google to find trusted remodeling contractors near them.

                                The most effective marketing strategy for home improvement companies is building a strong online presence through search engine optimization.
                            </p>

                            <h3 className="text-lg font-semibold text-[#a8c97c] mb-4">
                                A professional remodeling SEO strategy helps you:
                            </h3>

                            <ul className="space-y-3 text-gray-500">
                                <li>• Appear at the top of Google search results</li>
                                <li>• Reach homeowners ready to start projects</li>
                                <li>• Build credibility in your local market</li>
                                <li>• Turn website visitors into real inquiries</li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </section>



            {/* ================= Home Remodeling SEO Strategies ================= */}

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
                            8 Proven{" "}
                            <span className="text-[#25baff]">
                                Home Remodeling SEO Strategies
                            </span>{" "}
                            That Drive Results
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our remodeling SEO framework combines local targeting, technical optimization, and conversion-focused strategy to generate consistent qualified leads.
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

                                <h3 className="text-lg font-semibold text-[#a8b97c] mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-md leading-relaxed mb-4">
                                    {item.desc}
                                </p>

                                {item.points && (
                                    <>
                                        <h3 className="text-md font-semibold text-[#a8c97c] mb-4">
                                            {item.head}
                                        </h3>

                                        <ul className="space-y-3 text-gray-500">
                                            {item.points.map((point, i) => (
                                                <li key={i}>• {point}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Partner With a Home Remodeling*/}
            <section className="py-28 bg-[#020202] relative overflow-hidden">

                {/* Soft Accent Glow Effects */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#25baff]/20 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a8d97c]/20 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                            Partner With a Home Remodeling{" "}
                            <span className="text-[#25baff]">
                                SEO Agency That Delivers Results
                            </span>
                        </h2>

                        <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                            Our team develops customized SEO campaigns designed to strengthen your brand authority, improve search engine rankings, drive qualified organic traffic, and consistently generate appointment-ready leads.
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


        </div>
    );
};

export default HomeRemodlingSeo;
