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
import Banner from "../../../assets/market/financialSEO/img1.avif";
import Img from "../../../assets/market/financialSEO/img2.avif"
import Img3 from "../../../assets/market/financialSEO/img3.avif"

gsap.registerPlugin(ScrollTrigger);

const FinancialSEO = () => {
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
            question: "How long does Financial SEO take to show results?",
            answer: "Most financial firms see noticeable improvements in rankings and qualified leads within 3–6 months, depending on competition and current site authority.",
        },
        {
            question: "Is SEO suitable for small financial advisory firms?",
            answer: "Yes. Local SEO is especially powerful for independent advisors, boutique wealth managers, and small fintech companies targeting specific cities or niches.",
        },
        {
            question: "Can SEO help target high-net-worth and commercial clients?",
            answer: "Yes. We create dedicated service pages and content strategies optimized for affluent individuals, businesses, corporations, and institutions.",
        },
        {
            question: "Do I need separate pages for each financial service?",
            answer: "Yes. Dedicated pages for retirement planning, investment management, tax services, mortgage solutions, insurance, etc. help you rank for specific high-intent searches.",
        },
        {
            question: "How important are reviews and trust signals for financial SEO?",
            answer: "Extremely important. In YMYL topics, strong E-E-A-T signals, authentic reviews, and compliance disclosures are essential for rankings and client conversions.",
        },
        {
            question: "Will SEO reduce my dependency on paid ads?",
            answer: "Yes. As organic traffic and high-quality leads grow, many financial firms gradually reduce reliance on continuous paid campaigns.",
        },
        {
            question: "Can SEO help in highly competitive financial markets?",
            answer: "Yes, with a strong E-E-A-T strategy, compliance-focused content, technical excellence, and authority building.",
        },
        {
            question: "How do you measure Financial SEO success?",
            answer: "Through keyword rankings, organic traffic growth, lead volume & quality, consultation bookings, conversion rates, and ROI metrics specific to your financial goals.",
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
                    <span className="text-2xl md:text-2xl font-semibold"> Financial Services</span>
                    <p className="mt-6 text-lg text-gray-300">
                        Generate High-Intent Leads • Build Lasting Trust • Dominate Financial Search
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section
                ref={whoRef}
                className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
            >
                <div className="ml-15">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                        What Is<span className="text-[#25baff]"> Financial SEO?</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If your financial firm is not ranking at the top of Google, you are missing high-intent clients searching for advice, loans, tax help, or investments. You need specialized Financial SEO strategies to capture that trust and those opportunities.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Financial SEO is the specialized process of optimizing finance-related websites to increase visibility in search engines while maintaining strict regulatory compliance. Unlike general SEO, financial SEO focuses on high-trust content creation, regulatory-safe messaging, intent-based keyword targeting, reputation management, and authority building.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The primary purpose of Financial SEO for banks, fintech startups, wealth managers, insurance providers, and advisors is to rank higher when people search for retirement planning, investment advice, tax solutions, mortgage options, or insurance — helping you generate more qualified leads and build lasting client relationships.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img}
                        alt="Why Choose Financial SEO"
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
                            Financial Services <span className="text-[#25baff]">We Scale</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            From personal wealth management to enterprise fintech solutions — we craft SEO strategies tailored to your exact service offerings.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Retirement Planning",
                            "Wealth Management & Advisory",
                            "Investment Services",
                            "Tax Planning & Optimization",
                            "Mortgage & Loan Solutions",
                            "Insurance Solutions",
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
                        Our Expert Financial SEO <span className="text-[#25baff]">Solutions</span>
                    </h2>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TbSeo,
                                head: "Local SEO & Google Business Domination",
                                text: "Financial decisions are often hyper-local. We optimize your Google Business Profile, ensure consistent NAP, collect & respond to reviews, and target geo-specific keywords so you rank at the top of 'financial advisor near me' and local pack results.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "High-Intent Keyword Strategy",
                                text: "We target exact phrases clients actually use: 'fee-only financial advisor [city]', 'best retirement planning services', 'mortgage refinance options [city]', bringing ready-to-act clients directly to your site.",
                            },
                            {
                                icon: TbDeviceIpadShare,
                                head: "Trust & YMYL Compliance Optimization",
                                text: "We build credibility with E-E-A-T signals, certifications, compliance disclosures, testimonials, clear CTAs, fast load times, and mobile-first design — dramatically increasing consultation and service booking rates.",
                            },
                            {
                                icon: BiSolidBookContent,
                                head: "Authority-Building Content",
                                text: "We create valuable content: retirement guides, tax law explainers, investment insights, compliance checklists, blog posts on market trends — content that ranks, educates early, and positions you as the trusted expert.",
                            },
                            {
                                icon: MdOutlineSecurity,
                                head: "Technical & On-Page SEO Foundation",
                                text: "Fast loading, mobile-optimized, secure (HTTPS), financial product schema markup, clean URLs, optimized meta tags, internal linking — ensuring Google rewards your YMYL site with higher rankings.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Reputation Management & Link Building",
                                text: "We implement compliant review generation systems, respond professionally, showcase testimonials, and build thematic backlinks from finance publications, Investopedia, and industry associations to boost domain authority.",
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
                            Financial Client <span className="text-[#25baff]">Acquisition Strategy</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            We help you attract and convert high-value clients from individuals, businesses, and institutions seeking premium financial services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {[
                                "Dedicated Wealth & Advisory Service Pages",
                                "Industry-Specific Landing Pages (FinTech, Banks, HNIs)",
                                "Lead Generation & Consultation Form Optimization",
                                "LinkedIn Authority & Backlink Outreach",
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
                                alt="Financial Client Acquisition"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* ================= RESULTS SECTION ================= */}
            <section className="relative bg-white py-28 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Measurable <span className="text-[#25baff]">Financial SEO Results</span>
                        </h2>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
                            We don’t just increase traffic — we increase consultations, qualified leads, and revenue growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "220%+", text: "Increase in Organic Traffic" },
                            { number: "3X", text: "Growth in Consultation Bookings" },
                            { number: "65%+", text: "Higher Conversion Rates" },
                            { number: "Top 3", text: "Rankings for High-Intent Keywords" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 border border-gray-200 rounded-2xl p-10 shadow-md transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                            >
                                <h3 className="text-4xl font-extrabold text-[#25baff] group-hover:text-white transition-colors duration-300">
                                    {item.number}
                                </h3>
                                <p className="mt-4 text-gray-600 group-hover:text-white transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CLIENT TESTIMONIALS ================= */}
            <section className="relative bg-[#0f172a] py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />

                <div className="relative container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            What Financial Leaders <span className="text-[#25baff]">Say About Us</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "Within 6 months, our advisory firm started ranking #1 for retirement planning in our city. Lead quality improved dramatically.",
                                name: "Wealth Advisory Firm",
                            },
                            {
                                text: "Their compliance-focused SEO strategy gave us both traffic and confidence. No risky shortcuts — just sustainable growth.",
                                name: "FinTech Startup",
                            },
                            {
                                text: "We reduced paid ad dependency by 40% after organic leads consistently increased month after month.",
                                name: "Mortgage Consultant",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-white shadow-lg hover:shadow-[#25baff]/40 transition-all duration-500 hover:-translate-y-3"
                            >
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    "{item.text}"
                                </p>
                                <h4 className="font-bold text-[#25baff]">{item.name}</h4>
                            </div>
                        ))}
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
                        Get More Financial Leads & Clients – Start Today!
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
                                head: "Financial-Specific SEO Mastery",
                                text: "We specialize in YMYL finance SEO. Every strategy targets regulatory compliance, high-intent searches, E-E-A-T signals, and service-specific terms for advisors, banks, and fintech.",
                            },
                            {
                                head: "Proven Lead & Client Growth Focus",
                                text: "We focus on real business outcomes: more consultations booked, applications submitted, AUM growth, and recurring revenue — not just rankings.",
                            },
                            {
                                head: "Google Business Profile Optimization Experts",
                                text: "Your GBP is critical for local financial rankings. We fully optimize photos, services, posts, Q&A, and reviews to help you dominate the local pack.",
                            },
                            {
                                head: "Review & Reputation Management System",
                                text: "We help you collect authentic, regulation-compliant 5-star reviews, respond professionally, and showcase testimonials to convert hesitant prospects into confident clients.",
                            },
                            {
                                head: "Fast, Secure, Mobile-First Technical SEO",
                                text: "YMYL demands excellence. We deliver lightning-fast sites, perfect mobile UX, robust security, proper schema, and technical standards Google rewards.",
                            },
                            {
                                head: "Compliance & Authority Content That Ranks & Converts",
                                text: "We produce authoritative, regulation-compliant content — tax guides, investment insights, retirement checklists, case studies — that builds trust early and turns searchers into clients.",
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
                            Our Financial SEO <span className="text-[#25baff]">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Strategic Financial Keyword Research",
                            "YMYL Compliance & E-E-A-T Audit + Optimization",
                            "On-Page, Technical & Speed Optimization",
                            "Schema Markup & Rich Results Implementation",
                            "Authority Content Creation & Reputation Management",
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

export default FinancialSEO;