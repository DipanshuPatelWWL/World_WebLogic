import { useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa";
import { TbDeviceIpadShare } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import Banner from "../../../assets/market/FireProtectionSEO/img1.jpg";
import Img from "../../../assets/market/FireProtectionSEO/img2.jpg"
import Img3 from "../../../assets/market/FireProtectionSEO/img3.jpg"

gsap.registerPlugin(ScrollTrigger);

const FireProtectionSEO = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);
    const [activeFaq, setActiveFaq] = useState(null);
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

    const faqs = [
        {
            question: "How long does Fire Protection SEO take to show results?",
            answer: "Most companies see noticeable improvements in rankings and leads within 3–6 months, depending on competition and current site condition.",
        },
        {
            question: "Is SEO suitable for small fire protection businesses?",
            answer: "Yes. Local SEO is especially powerful for small and mid-sized fire safety companies serving specific cities or regions.",
        },
        {
            question: "Can SEO help target commercial fire protection services?",
            answer: "Yes. We create dedicated service pages and content strategies optimized for commercial clients, facility managers, and large projects.",
        },
        {
            question: "Do I need separate pages for each fire protection service?",
            answer: "Yes. Dedicated pages for fire extinguisher installation, fire alarm systems, suppression systems, inspections, etc. help you rank for specific searches.",
        },
        {
            question: "How important are reviews for fire protection SEO?",
            answer: "Extremely important. Positive reviews boost local pack rankings and build trust with businesses and property managers.",
        },
        {
            question: "Will SEO reduce my dependency on paid ads?",
            answer: "Yes. As organic traffic and leads grow, many companies gradually reduce reliance on continuous paid campaigns.",
        },
        {
            question: "Can SEO help in competitive cities?",
            answer: "Yes, with a strong local strategy, consistent optimization, review management, and high-quality content.",
        },
        {
            question: "How do you measure Fire Protection SEO success?",
            answer: "Through keyword rankings, organic traffic growth, call tracking, form submissions, lead volume, and conversion rate improvements.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">SEO for</h1>
                    <span className="text-2xl md:text-2xl font-semibold"> Fire Protection</span>
                    <p className="mt-6 text-lg text-gray-300">
                        Increase Leads • Boost Local Visibility • Rank Higher on Google
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section
                ref={whoRef}
                className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                        What Is<span className="text-[#25baff]"> SEO for Fire Protection Companies?</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If you are not ranking well on Google, you are missing hundreds of people interested in your fire safety product or service. You need targeted fire protection marketing strategies to reach all those potential customers.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Search engine optimization for fire protection companies, or Fire SEO, is a digital approach to improve a website’s visibility and ranking on SERPs. SEO involves improving the website’s content, structure, and technical elements to attract more relevant traffic from Google.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The primary purpose of SEO for a fire protection company is to rank higher when people or businesses search for fire extinguisher installation, fire alarm systems, suppression services, inspections, or training — helping you generate more qualified leads and conversions.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img}
                        alt="Why Choose SEO for Fire Protection"
                        className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 w-150 h-full object-cover"
                    />
                </div>
            </section>

            {/* ================= INDUSTRIES ================= */}
            <section className="relative bg-[#0f172a] py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
                <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-[#25baff]/20 blur-[140px] rounded-full" />

                <div className="relative container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Fire Protection Services <span className="text-[#25baff]">We Scale</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            From residential safety to industrial fire systems — we craft SEO strategies tailored to your exact service offerings.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Fire Extinguisher Services",
                            "Fire Alarm & Detection Systems",
                            "Fire Suppression Systems",
                            "Fire Sprinkler Installation & Maintenance",
                            "Fire Safety Training & Consulting",
                            "Emergency Lighting & Exit Signs",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:border-[#25baff]/40 hover:bg-[#25baff]/10 hover:shadow-2xl hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* audit services */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Our Expert Fire Protection SEO <span className="text-[#25baff]">Solutions</span>
                    </h2>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TbSeo,
                                head: "Local SEO & Google Business Domination",
                                text: "Most searches for fire protection are hyper-local. We optimize your Google Business Profile, ensure consistent NAP, collect & respond to reviews, and target geo-specific keywords so you rank at the top of 'fire extinguisher near me' and local pack results.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "High-Intent Keyword Strategy",
                                text: "We target exact phrases businesses and property managers use: 'fire alarm installation [city]', 'commercial fire suppression system', 'annual fire inspection services', bringing ready-to-buy clients directly to your site.",
                            },
                            {
                                icon: TbDeviceIpadShare,
                                head: "Trust & Conversion Optimization",
                                text: "We build credibility with certification pages, case studies, compliance info, testimonials, clear CTAs, fast load times, and mobile-first design — dramatically increasing quote and service booking rates.",
                            },
                            {
                                icon: BiSolidBookContent,
                                head: "Authority-Building Content",
                                text: "We create valuable content: fire safety guides, compliance checklists, 'how to choose fire protection', blog posts on NFPA standards — content that ranks, educates early, and positions you as the trusted expert.",
                            },
                            {
                                icon: MdOutlineSecurity,
                                head: "Technical & On-Page SEO Foundation",
                                text: "Fast loading, mobile-optimized, secure (HTTPS), schema markup (LocalBusiness, Service), clean URLs, optimized meta tags, internal linking — ensuring Google rewards your site with higher rankings.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Review Acceleration & Link Building",
                                text: "We implement review generation systems, respond professionally, showcase testimonials, and build thematic backlinks from industry directories, safety blogs, and associations to boost domain authority.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon className="text-4xl text-[#25baff] mb-6 mx-auto group-hover:text-white transition-colors duration-300" />
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

            {/* ================= COMMERCIAL ACQUISITION ================= */}
            <section className="relative bg-[#0f172a] py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
                <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-indigo-500/20 blur-[150px] rounded-full animate-pulse" />

                <div className="relative container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Commercial Client <span className="text-[#25baff]">Acquisition Strategy</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            We help you secure long-term service contracts from facility managers, property owners, and industrial clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {[
                                "Dedicated Commercial Service Pages",
                                "Industry-Specific Landing Pages (Hospitals, Warehouses, Schools)",
                                "RFP & Bid Visibility Optimization",
                                "LinkedIn & Authority Backlink Outreach",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8
            hover:bg-[#25baff]/10 hover:border-[#25baff]/40
            transition-all duration-500 hover:-translate-y-2"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        {item}
                                    </h3>
                                </div>
                            ))}
                        </div>


                        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                            <img
                                src={Img3}
                                alt="Commercial Fire Protection Services"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* contact us */}
            <section
                ref={addSectionRef}
                className="relative py-24 px-6"
                style={{ backgroundColor: "#020202" }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%), radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow" />
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
                        Get More Fire Protection Leads & Contracts – Start Today!
                    </h2>
                    <NavLink to="/contact">
                        <button className="bg-[#25baff] text-[#020202] cursor-pointer px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
                            Contact Now
                        </button>
                    </NavLink>
                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                        Why Choose Digital <span className="text-[#25baff]">WebGuider?</span>
                    </h2>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Fire Protection-Specific Local SEO Mastery",
                                text: "We specialize in life safety marketing. Every strategy targets how facility managers, property owners, and businesses search for fire protection — local intent, compliance focus, and service-specific terms.",
                            },
                            {
                                head: "Proven Lead & Contract Growth Focus",
                                text: "We focus on real business outcomes: more quote requests, inspections booked, system installations, and recurring service contracts — not just rankings.",
                            },
                            {
                                head: "Google Business Profile Optimization Experts",
                                text: "Your GBP is critical for local fire service rankings. We fully optimize photos, services, posts, Q&A, and reviews to help you dominate the local pack.",
                            },
                            {
                                head: "Review & Reputation Management System",
                                text: "We help you collect authentic 5-star reviews, respond professionally, and showcase testimonials to convert hesitant prospects into confident clients.",
                            },
                            {
                                head: "Fast, Mobile-First Technical SEO",
                                text: "Decision-makers search on mobile. We deliver lightning-fast sites, perfect mobile UX, secure connections, proper schema, and technical excellence Google rewards.",
                            },
                            {
                                head: "Compliance & Safety Content That Ranks & Converts",
                                text: "We produce authoritative content — NFPA guides, safety checklists, code compliance articles, case studies — that builds trust, answers questions early, and ranks for high-value searches.",
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

            {/* ================= WHY TRUST US ================= */}
            <section className="relative bg-[#0f172a] py-28 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#25baff]/20 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full" />
                <div className="relative container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Our Fire Protection SEO <span className="text-[#25baff]">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "In-Depth Local & Keyword Research",
                            "Google Business Profile & Citation Audit + Optimization",
                            "On-Page, Technical & Speed Optimization",
                            "Compliance-Focused Content Creation & Strategy",
                            "Review Generation & Reputation Management",
                            "Thematic Link Building & Monthly Performance Tracking",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-6 flex items-start gap-4 shadow-lg shadow-black/40 transition-all duration-500 hover:bg-[#25baff]/10 hover:border-[#25baff]/40 hover:shadow-[#25baff]/40 hover:-translate-y-2"
                            >
                                <FaCheckCircle className="text-[#25baff] text-2xl mt-1 group-hover:scale-110 transition-all duration-300" />
                                <p className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Frequently Asked <span className="text-[#25baff]">Questions</span>
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
                                        className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"} transition-colors duration-300`}
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

export default FireProtectionSEO;