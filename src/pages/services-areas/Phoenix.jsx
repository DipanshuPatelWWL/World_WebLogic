import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GiRelationshipBounds } from "react-icons/gi";
import { RxComponent1 } from "react-icons/rx";
import { FaSearchLocation } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Banner from "../../assets/denver/PhoenixBanner.avif";
import Img1 from "../../assets/denver/PhoenixSeo.avif";
import Img2 from "../../assets/denver/PhoenixAgency.avif";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PhoenixSEO = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);

    const [activeFaq, setActiveFaq] = useState(null);
    const [openIndex, setOpenIndex] = useState(0);
    const faqRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: "power4.out",
            });

            gsap.from(whoRef.current.children, {
                scrollTrigger: { trigger: whoRef.current, start: "top 80%" },
                opacity: 0,
                y: 60,
                stagger: 0.25,
                duration: 1,
                ease: "power3.out",
            });

            cardsRef.current.forEach((card) => {
                if (!card) return;
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: "top 85%" },
                    opacity: 0,
                    scale: 0.92,
                    y: 40,
                    duration: 0.7,
                    ease: "power3.out",
                });
            });

            ScrollTrigger.refresh();
        }, rootRef);

        return () => ctx.revert();
    }, []);

    const faqs = [
        {
            question: "Why should my business invest in SEO in Phoenix?",
            answer:
                "Phoenix is one of the fastest-growing metro areas in the U.S. — with rising competition across every industry. Strong SEO puts your business in front of high-intent searchers on Google, Maps, and AI overviews, driving more calls, visits, leads, and revenue.",
        },
        {
            question: "How long does it take to see results in Phoenix?",
            answer:
                "In a rapidly expanding market like Phoenix, most businesses see meaningful ranking, traffic, and lead improvements within 4–8 months — faster for niche services, longer in highly competitive verticals (real estate, HVAC, legal, home services).",
        },
        {
            question: "Do you specialize in local SEO for Phoenix neighborhoods?",
            answer:
                "Yes — we optimize for hyper-local searches across Phoenix proper, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, and every key Valley area to dominate Google Maps and local pack results.",
        },
        {
            question: "Can small Phoenix businesses compete with bigger companies?",
            answer:
                "Absolutely. With precise Google Business Profile optimization, neighborhood-specific content, strong review velocity, and targeted citations, smaller businesses regularly outrank national brands in local Phoenix-area searches.",
        },
        {
            question: "Do you optimize for AI overviews and voice search?",
            answer:
                "Yes — we structure content for Google's AI Overviews, featured snippets, and voice queries (Google Assistant, Siri, Alexa) using conversational language, FAQ schema, and direct answers — critical for staying visible in 2025+ search.",
        },
        {
            question: "Do you provide transparent monthly reporting?",
            answer:
                "Yes — detailed reports showing local pack positions, Maps clicks, direction requests, call tracking, review growth, organic traffic, keyword rankings, and estimated ROI — so you see real business impact in Phoenix.",
        },
        {
            question: "Do you offer services beyond SEO?",
            answer:
                "Yes. We also provide PPC advertising, website design & optimization, content marketing, social media strategy, and conversion rate optimization — all integrated to accelerate growth in the Valley.",
        },
        {
            question: "Do you offer a free SEO consultation for Phoenix businesses?",
            answer:
                "Yes — we provide a free, no-obligation audit of your current rankings, Google Business Profile, citations, competitors, mobile performance, and opportunities specific to the Phoenix metro market.",
        },
    ];

    const accordionData = [
        {
            title: "Growth-Driven Phoenix Expertise",
            content:
                "We understand the Valley — rapid population growth, neighborhood competition patterns, seasonal trends (snowbirds, events, tourism), and how Phoenicians actually search for services.",
        },
        {
            title: "Mobile-First & ROI-Focused",
            content:
                "Every strategy starts with mobile optimization and conversion tracking — built to deliver measurable ROI: more calls, form submissions, bookings, and revenue, not just rankings.",
        },
        {
            title: "Dominating SERPs & AI Overviews",
            content:
                "We optimize for traditional SERPs + Google's AI-generated summaries and featured snippets — ensuring your business appears in the new zero-click and voice-first search landscape.",
        },
        {
            title: "Transparent Monthly Reporting",
            content:
                "Clear dashboards showing Maps performance, call & direction tracking, review velocity, keyword movement, traffic quality, and estimated revenue impact — full visibility into results.",
        },
        {
            title: "Proven Results in Phoenix",
            content:
                "We’ve helped dozens of Valley businesses climb local pack rankings, dominate neighborhood searches, improve AI visibility, and significantly increase qualified leads and revenue.",
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
                <div ref={heroRef} className="relative z-10 text-center px-6 text-white">
                    <h1 className="text-5xl md:text-6xl font-extrabold">
                        Growth-Driven Phoenix SEO Agency
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Stay ahead with our Phoenix SEO, building a mobile-optimized, ROI-driven website that dominates SERPs & AI overviews, using local SEO expertise for local reach and global recognition.
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
                        Your <span className="text-[#25baff]">Phoenix SEO Growth Partner</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        Phoenix is booming — from Scottsdale to Chandler, Tempe to Glendale, and every Valley neighborhood in between. Our growth-driven Phoenix SEO agency helps businesses dominate Google Maps, local pack results, traditional SERPs, and emerging AI overviews to attract more qualified customers and scale revenue.
                    </p>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        We build mobile-first, ROI-focused websites and strategies: advanced technical SEO, hyper-local keyword targeting, Google Business Profile excellence, review momentum, structured data for AI visibility, and high-conversion content tailored to how people in the Valley search today.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        Ready to lead in Phoenix — and beyond?
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="Phoenix SEO Agency"
                        className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="relative py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/90 to-[#020617]/95"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#25baff]/10 blur-[160px] rounded-full"></div>

                <div className="relative z-10">
                    <div className="text-center mb-20 px-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            How We Drive <span className="text-[#25baff]">Growth in Phoenix</span>
                        </h2>
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-2xl mx-auto">
                            Mobile-first, ROI-obsessed SEO that wins SERPs, AI overviews, and local customers across the Valley.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaSearchLocation,
                                    head: "Phoenix Maps & Local Pack Leadership",
                                    text: "Rank #1–3 in Google Maps across Phoenix, Scottsdale, Tempe, Mesa, Chandler — turning searches into calls, directions, and revenue.",
                                },
                                {
                                    icon: FaSearchengin,
                                    head: "High-Intent Valley Keywords",
                                    text: "Target neighborhood + service queries (Scottsdale HVAC near me, Phoenix roofing company) that real Phoenicians use every day.",
                                },
                                {
                                    icon: GiRelationshipBounds,
                                    head: "Review Momentum & Trust",
                                    text: "Proven systems to earn authentic 5-star reviews — one of the strongest local ranking signals in the Valley.",
                                },
                                {
                                    icon: FaMeta,
                                    head: "Mobile-First + AI Visibility",
                                    text: "Fast, mobile-optimized sites with structured data and content built to appear in Google AI Overviews and voice results.",
                                },
                                {
                                    icon: MdOutlineStarRate,
                                    head: "ROI & Revenue Tracking",
                                    text: "Call tracking, direction requests, lead attribution, revenue estimates — monthly reports show real business growth.",
                                },
                                {
                                    icon: RxComponent1,
                                    head: "Neighborhood → National Scaling",
                                    text: "Local dominance in Phoenix metro while building keywords and authority for national reach.",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        ref={(el) => (cardsRef.current[index] = el)}
                                        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center shadow-lg shadow-black/30 hover:border-[#25baff]/60 hover:shadow-[#25baff]/20 hover:-translate-y-3 transition-all duration-500"
                                    >
                                        <Icon className="text-4xl text-[#25baff] mb-6 mx-auto transition-all duration-300 group-hover:scale-110" />
                                        <h3 className="font-bold text-xl mb-3 text-white">{item.head}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us – Accordion */}
            <section className="bg-white py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Why Choose Us as Your
                            <span className="text-[#25baff]"> Phoenix SEO Agency?</span>
                        </h2>
                        <div className="w-213 h-1 bg-black mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={Img2}
                                alt="Phoenix SEO experts"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>

                        <div>
                            <div className="space-y-4">
                                {accordionData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            className="w-full flex justify-between items-center p-5 bg-gray-50 font-semibold text-[#020202]"
                                        >
                                            {item.title}
                                            <span className="text-[#25baff] text-xl">
                                                {openIndex === index ? "−" : "+"}
                                            </span>
                                        </button>

                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 p-5 bg-white" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dark Cards Section */}
            <section className="relative z-10 py-28 bg-black">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 p-8">
                        Why Phoenix Businesses Choose Us
                        <span className="text-[#25baff]"> for Growth-Driven SEO</span>
                    </h2>
                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        We deliver measurable rankings, qualified traffic, and real revenue growth — with full transparency in the Valley.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Valley-Wide Local Expertise",
                                text: "We know Phoenix metro search behavior — from Scottsdale to Surprise, Chandler to Glendale, and every key area in between.",
                            },
                            {
                                head: "Mobile + AI Optimization",
                                text: "Fast mobile sites + structured data + conversational content built to win SERPs, AI Overviews, and voice search.",
                            },
                            {
                                head: "ROI & Revenue Focus",
                                text: "Call tracking, direction requests, lead attribution, revenue estimates — every strategy is measured by business impact.",
                            },
                            {
                                head: "Transparent Monthly Insights",
                                text: "Clear reports showing Maps performance, keyword gains, traffic quality, and real ROI — no black-box tactics.",
                            },
                            {
                                head: "Sustainable in Fast-Growing Market",
                                text: "White-hat only — built to scale with Phoenix’s explosive growth and last through algorithm changes.",
                            },
                            {
                                head: "Local Reach → Global Scale",
                                text: "Dominate Phoenix neighborhoods while building authority for national and international visibility.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/20 transition-all duration-500 hover:bg-[#25baff]/40 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/30"
                            >
                                <h3 className="font-extrabold text-xl mb-3 text-white transition-colors duration-300">
                                    {item.head}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="bg-[#a8d97c] py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-widest text-lg font-semibold text-gray-900 mb-3">
                            Testimonials
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            What Our Clients <span className="text-[#25baff]">Say</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                text: "Professional execution and outstanding results. Our digital growth has significantly improved.",
                                name: "Kashvi Kahal",
                                role: "Marketing Director",
                            },
                            {
                                text: "Their branding and online strategy completely transformed our visibility.",
                                name: "Yumlembam Sanajaoba Meitei",
                                role: "Founder",
                            },
                            {
                                text: "Reliable team with consistent performance delivery. Highly recommended.",
                                name: "Paul Casper",
                                role: "Operations Manager",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
                            >
                                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                                    <RiDoubleQuotesL />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">{item.text}</p>
                                <h4 className="font-bold text-lg text-[#020202]">{item.name}</h4>
                                <p className="text-gray-500 text-sm">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Phoenix SEO <span className="text-[#25baff]">Pricing Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible plans built for Valley businesses — transparent pricing, mobile-first, ROI-driven growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* STARTER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">STARTER</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#a8d97c]">$</span>
                                    <span className="text-5xl font-bold text-[#a8d97c]">450</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Single Location</p>
                                    <p>GBP Optimization + Posts</p>
                                    <p>15 Target Keywords</p>
                                    <p>Basic Citation Cleanup</p>
                                    <p>Monthly Report</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* GROWTH */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">GROWTH</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-gray-300">$</span>
                                    <span className="text-5xl font-bold text-gray-300">750</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Up to 2 Locations</p>
                                    <p>GBP + Review Strategy</p>
                                    <p>30 Target Keywords</p>
                                    <p>40 Citations/Month</p>
                                    <p>Local Content Creation</p>
                                    <p>Bi-Weekly Reports</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* BUSINESS – Popular */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div className="absolute top-4 right-4 bg-yellow-800 text-white text-xs px-3 py-2 rounded-full">
                                POPULAR
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">BUSINESS</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#ff9800]">$</span>
                                    <span className="text-5xl font-bold text-[#ff9800]">1100</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Up to 5 Locations</p>
                                    <p>Advanced GBP + Schema</p>
                                    <p>50 Target Keywords</p>
                                    <p>80 Citations + Local Links</p>
                                    <p>Voice & AI Optimization</p>
                                    <p>Weekly Reports & Calls</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">ENTERPRISE</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#607AFE]">$</span>
                                    <span className="text-5xl font-bold text-[#607AFE]">1900</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Multi-Location / Franchise</p>
                                    <p>Dedicated SEO Manager</p>
                                    <p>Unlimited Keywords</p>
                                    <p>Full Citation + Link Building</p>
                                    <p>Voice/AI/Featured Snippets</p>
                                    <p>Custom Dashboard & Weekly Calls</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Phoenix SEO Agency <span className="text-[#25baff]">FAQ</span>
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={(el) => (faqRefs.current[index] = el)}
                                className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300"
                            >
                                <button
                                    onClick={() => {
                                        const el = faqRefs.current[index];
                                        const content = el.querySelector(".faq-content");

                                        if (activeFaq === index) {
                                            gsap.to(content, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
                                            setActiveFaq(null);
                                        } else {
                                            if (activeFaq !== null) {
                                                const prevEl = faqRefs.current[activeFaq];
                                                const prevContent = prevEl.querySelector(".faq-content");
                                                gsap.to(prevContent, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
                                            }
                                            gsap.to(content, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
                                            setActiveFaq(index);
                                        }
                                    }}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#020202]"
                                >
                                    <span className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"} transition-colors duration-300`}>
                                        {faq.question}
                                    </span>
                                    {activeFaq === index ? <FiMinus className="text-[#25baff] text-xl" /> : <FiPlus className="text-gray-500 text-xl" />}
                                </button>

                                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
                                    <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhoenixSEO;