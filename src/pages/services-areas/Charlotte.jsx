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

// Replace with your actual image paths
import Banner from "../../assets/charlotte/banner.avif";
import Img1 from "../../assets/charlotte/img1.avif";
import Img2 from "../../assets/charlotte/img3.avif";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CharlotteLocalSEO = () => {
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
            question: "How long does it take to rank in the Google Map Pack in Charlotte?",
            answer:
                "Most businesses see meaningful movement in local pack rankings within 3–6 months, though competitive industries (dentists, lawyers, HVAC, restaurants) often require 6–12 months of consistent optimization to reach top 3 positions.",
        },
        {
            question: "Why is local SEO important for businesses in Charlotte, NC?",
            answer:
                "Charlotte is one of the fastest-growing cities in the U.S. Over 45% of all Google searches are local. Ranking in the Map Pack and organic local results drives phone calls, direction requests, website visits, and foot traffic — especially in high-competition areas like SouthPark, Ballantyne, Uptown, and University City.",
        },
        {
            question: "Can small businesses in Charlotte compete with big chains using local SEO?",
            answer:
                "Yes — absolutely. With strong Google Business Profile optimization, consistent citations, review momentum, and hyper-local content, independent businesses frequently outrank national chains in neighborhood-specific searches across the Queen City.",
        },
        {
            question: "Do you optimize Google Business Profiles?",
            answer:
                "Yes — it's the foundation of our local SEO work. We fully optimize, verify, complete every field, add high-quality photos, manage posts/offers, respond to reviews, and track performance to maximize visibility in Charlotte Maps results.",
        },
        {
            question: "Do you help with reviews and reputation management?",
            answer:
                "Yes. We implement proven review-generation systems (without violating Google policies), monitor new reviews, and help craft professional responses to build trust signals and improve local rankings.",
        },
        {
            question: "Do you provide monthly reports?",
            answer:
                "Yes — detailed monthly reports showing Google Map Pack positions, direction requests, call tracking, review growth, citation health, and estimated lead value so you can clearly see the business impact.",
        },
        {
            question: "How do you optimize for voice search and AI Overviews?",
            answer:
                "We structure content using conversational phrases, FAQ schema, featured snippet formats, and direct answers to common Charlotte-specific questions — helping you appear in voice results (Google Assistant, Siri, Alexa) and Google's AI-generated summaries.",
        },
        {
            question: "Do you offer a free local SEO audit for Charlotte businesses?",
            answer:
                "Yes — we provide a free, no-obligation audit of your Google Business Profile, current local rankings, citation consistency, review profile, and competitors in the Charlotte market, along with clear next-step recommendations.",
        },
    ];

    const accordionData = [
        {
            title: "Deep Charlotte Market Knowledge",
            content:
                "We understand Queen City neighborhoods, competition density, seasonal patterns (Panthers games, NASCAR, festivals), and how Charlotte residents actually search for local services.",
        },
        {
            title: "Hyper-Local Lead Generation Focus",
            content:
                "Our strategies prioritize measurable business outcomes: more phone calls, direction requests, form submissions, bookings, and in-store visits — not just higher rankings.",
        },
        {
            title: "Modern Voice + AI Search Optimization",
            content:
                "We build content and schema markup optimized for voice queries and Google's AI Overviews — keeping your business visible as search behavior continues to evolve.",
        },
        {
            title: "Transparent & ROI-Driven Reporting",
            content:
                "You receive clear monthly reports with Maps insights, call & direction tracking, review velocity, and estimated lead value — no vague vanity metrics.",
        },
        {
            title: "Sustainable & Ethical Local Tactics",
            content:
                "White-hat methods only: genuine review encouragement, accurate citations, quality local content, and authoritative Charlotte-area link building.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">
                        Local SEO Experts in Charlotte, NC
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        More leads, better ranking. Our #1 Charlotte SEO company boosts search & AI visibility in Queen City with structured data, semantic content, voice search, and featured snippet optimization.
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
                        Charlotte Local SEO <span className="text-[#25baff]">That Drives Real Customers</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        In one of America's fastest-growing cities, standing out in local search is no longer optional. From Uptown to Ballantyne, South End to Lake Norman — our local SEO strategies help Charlotte businesses dominate Google Maps, the local pack, voice search results, and AI-generated answers.
                    </p>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        We combine proven local SEO tactics with modern optimizations: Google Business Profile mastery, structured data (LocalBusiness + FAQ schema), semantic content, review acceleration, citation building, and hyper-local keyword strategies tailored to Queen City search behavior.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        Ready to own local search in Charlotte?
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="Charlotte Local SEO Experts"
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
                            How We Win <span className="text-[#25baff]">Local Search</span> in Charlotte
                        </h2>
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-2xl mx-auto">
                            Proven methods that increase calls, directions, bookings, and foot traffic across the Queen City.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaSearchLocation,
                                    head: "Google Maps & Local Pack Domination",
                                    text: "Rank in the top 3 Map results in Charlotte neighborhoods — driving real phone calls, directions, and visits.",
                                },
                                {
                                    icon: FaSearchengin,
                                    head: "Hyper-Local Keyword Strategy",
                                    text: "Target 'near me', neighborhood-specific, and service + Charlotte queries actual residents use every day.",
                                },
                                {
                                    icon: GiRelationshipBounds,
                                    head: "Review Velocity & Trust Signals",
                                    text: "Systematic, policy-compliant review generation turns satisfied customers into powerful ranking assets.",
                                },
                                {
                                    icon: FaMeta,
                                    head: "Voice Search & AI Visibility",
                                    text: "Content & schema optimized for Google Assistant, Siri, Alexa, and AI Overviews — future-proof your presence.",
                                },
                                {
                                    icon: MdOutlineStarRate,
                                    head: "Structured Data Mastery",
                                    text: "LocalBusiness + Review + FAQ schema — rich results, enhanced snippets, higher click-through rates.",
                                },
                                {
                                    icon: RxComponent1,
                                    head: "Citation & NAP Consistency",
                                    text: "Clean, authoritative citations across major directories — building geographic trust and ranking power.",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        ref={(el) => (cardsRef.current[index] = el)}
                                        className="
                      group
                      bg-white/5 backdrop-blur-xl
                      border border-white/10
                      rounded-2xl
                      p-10
                      text-center
                      shadow-lg shadow-black/30
                      hover:border-[#25baff]/60
                      hover:shadow-[#25baff]/20
                      hover:-translate-y-3
                      transition-all duration-500
                    "
                                    >
                                        <Icon
                                            className="
                        text-4xl text-[#25baff] mb-6 mx-auto
                        transition-all duration-300 group-hover:scale-110
                      "
                                        />
                                        <h3 className="font-bold text-xl mb-3 text-white">
                                            {item.head}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hire Section – Accordion */}
            <section className="bg-white py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Why Choose Us as Your
                            <span className="text-[#25baff]"> Charlotte Local SEO Agency?</span>
                        </h2>
                        <div className="w-213 h-1 bg-black mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={Img2}
                                alt="Charlotte local SEO team"
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
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                            className="w-full flex justify-between items-center p-5 bg-gray-50 font-semibold text-[#020202]"
                                        >
                                            {item.title}
                                            <span className="text-[#25baff] text-xl">
                                                {openIndex === index ? "−" : "+"}
                                            </span>
                                        </button>

                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
                                                ? "max-h-40 p-5 bg-white"
                                                : "max-h-0"
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

            {/* Why Choose Us Cards – Dark Section */}
            <section className="relative z-10 py-28 bg-black">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 p-8">
                        Why Charlotte Businesses Choose Us
                        <span className="text-[#25baff]"> for Local SEO</span>
                    </h2>

                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        We focus on real leads — calls, directions, bookings — with full transparency and Queen City expertise.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Queen City Neighborhood Expertise",
                                text: "We know Charlotte — from Uptown to Matthews, Ballantyne to NoDa — including competition patterns and local search behavior.",
                            },
                            {
                                head: "Map Pack & Direction Requests Focus",
                                text: "Strategies engineered to win the local 3-pack and drive actual store visits and service calls.",
                            },
                            {
                                head: "Voice Search & AI Future-Proofing",
                                text: "Optimized for conversational queries and Google's AI-generated answers — stay visible as search evolves.",
                            },
                            {
                                head: "Transparent Lead & ROI Tracking",
                                text: "Call tracking, direction requests, review impact, and estimated lead value — reported clearly every month.",
                            },
                            {
                                head: "Ethical & Long-Term Growth",
                                text: "White-hat only — no risky shortcuts that can damage rankings long-term.",
                            },
                            {
                                head: "Review & Citation Systems",
                                text: "Proven processes to build 5-star momentum and clean, powerful citation profiles across the web.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="
                  group
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  rounded-2xl
                  p-10
                  text-center
                  shadow-lg shadow-[#25baff]/20
                  transition-all duration-500
                  hover:bg-[#25baff]/40
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-[#25baff]/30
                "
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
                                className="
                  group bg-white border border-gray-200 rounded-2xl p-10 text-center
                  shadow-lg shadow-[#25baff]/10
                  transition-all duration-500
                  hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]
                "
                            >
                                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                                    <RiDoubleQuotesL />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    {item.text}
                                </p>
                                <h4 className="font-bold text-lg text-[#020202]">{item.name}</h4>
                                <p className="text-gray-500 text-sm">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Charlotte Local SEO <span className="text-[#25baff]">Pricing Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible plans designed for Queen City businesses — transparent pricing, results-focused.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* STARTER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">STARTER</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#a8d97c]">$</span>
                                    <span className="text-5xl font-bold text-[#a8d97c]">399</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Single Location</p>
                                    <p>Full GBP Optimization</p>
                                    <p>15 Target Local Keywords</p>
                                    <p>Basic Citation Cleanup</p>
                                    <p>Monthly Report</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        GET STARTED
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
                                    <span className="text-5xl font-bold text-gray-300">699</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Up to 2 Locations</p>
                                    <p>GBP + Review Generation Strategy</p>
                                    <p>30 Target Local Keywords</p>
                                    <p>40 Citations per Month</p>
                                    <p>Local Content Creation</p>
                                    <p>Bi-Weekly Reports</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        GET STARTED
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* PREMIUM – Popular */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">
                            <div className="absolute top-4 right-4 bg-yellow-800 text-white text-xs px-3 py-2 rounded-full">
                                POPULAR
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">PREMIUM</h3>
                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">
                                    <span className="text-lg font-bold text-[#ff9800]">$</span>
                                    <span className="text-5xl font-bold text-[#ff9800]">999</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Up to 5 Locations</p>
                                    <p>Advanced GBP + Schema Markup</p>
                                    <p>50 Target Local Keywords</p>
                                    <p>80 Citations + Local Links</p>
                                    <p>Voice & AI Optimization</p>
                                    <p>Weekly Reports & Strategy Calls</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                        GET STARTED
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
                                    <span className="text-5xl font-bold text-[#607AFE]">1499</span>
                                    <p className="text-gray-400">per month</p>
                                </div>
                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Multi-Location / Franchise</p>
                                    <p>Dedicated Local SEO Manager</p>
                                    <p>Unlimited Keywords</p>
                                    <p>Full Citation + Link Building</p>
                                    <p>Voice/AI/Featured Snippets</p>
                                    <p>Custom Dashboard & Weekly Calls</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        GET STARTED
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
                        Frequently Asked <span className="text-[#25baff]">Questions</span>
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={(el) => (faqRefs.current[index] = el)}
                                className="
                  bg-white border border-gray-200 rounded-2xl
                  shadow-lg shadow-[#25baff]/20
                  hover:shadow-2xl hover:shadow-[#25baff]/40
                  hover:border-[#25baff]
                  transition-all duration-300
                "
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

export default CharlotteLocalSEO;