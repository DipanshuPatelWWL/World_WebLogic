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

// Replace with your actual Los Angeles-themed image paths
import Banner from "../../assets/denver/banner.avif"; // ← ideal: LA skyline, Hollywood sign, or downtown at sunset
import Img1 from "../../assets/denver/img1.avif";    // ← e.g. city vibe, team, or digital growth visual
import Img2 from "../../assets/denver/img2.avif";    // ← e.g. strategy meeting, analytics dashboard, or LA street scene

gsap.registerPlugin(ScrollTrigger);

const LosAngelesSEO = () => {
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
            question: "Why invest in SEO in Los Angeles?",
            answer:
                "LA is one of the most competitive digital markets in the world. Strong SEO helps your business stand out in a crowded city, appear in front of high-intent searchers, and capture more local customers across neighborhoods.",
        },
        {
            question: "How long does it take to see results in LA?",
            answer:
                "In a high-competition market like Los Angeles, noticeable ranking and traffic improvements typically begin within 4–8 months — faster for less competitive niches, longer for saturated industries (law, real estate, entertainment, restaurants).",
        },
        {
            question: "Do you specialize in local SEO for LA neighborhoods?",
            answer:
                "Yes — we optimize for hyper-local searches in Hollywood, Downtown LA, Santa Monica, Beverly Hills, Silver Lake, West Hollywood, Culver City, Pasadena, Long Beach, and every major LA area.",
        },
        {
            question: "Can small LA businesses compete with big brands?",
            answer:
                "Absolutely. With precise Google Business Profile optimization, neighborhood-specific content, strong reviews, and targeted citations, smaller businesses regularly outrank national chains in local pack and map results.",
        },
        {
            question: "Do you fully optimize Google Business Profiles?",
            answer:
                "Yes — it's core to succeeding in LA. We optimize every detail: categories, photos, posts, Q&A, services, products, hours, attributes, and review management to maximize visibility in Google Maps and local results.",
        },
        {
            question: "What kind of reporting do you provide?",
            answer:
                "Detailed monthly reports showing local pack positions, Maps clicks, direction requests, call tracking, review growth, organic traffic, and estimated lead value — so you see real business impact in LA.",
        },
        {
            question: "Do you offer services beyond SEO?",
            answer:
                "Yes. We also provide PPC advertising, website design, content marketing, social media management, and reputation services — all integrated to help LA businesses grow faster.",
        },
        {
            question: "Do you offer a free SEO audit for Los Angeles businesses?",
            answer:
                "Yes — we provide a free, no-obligation audit of your current rankings, Google Business Profile, citations, competitors, and opportunities specific to the Los Angeles market.",
        },
    ];

    const accordionData = [
        {
            title: "Proven LA Market Expertise",
            content:
                "We know Los Angeles inside out — from high-competition neighborhoods to seasonal trends (awards season, summer tourism, events) and how Angelenos actually search for services.",
        },
        {
            title: "Revenue & Lead Generation Focus",
            content:
                "Our strategies are built to deliver real business outcomes: more phone calls, direction requests, bookings, foot traffic, and revenue — not just vanity rankings.",
        },
        {
            title: "Transparent Monthly Reporting",
            content:
                "Clear dashboards showing Maps performance, call tracking, review velocity, keyword movement, traffic quality, and ROI estimates — full visibility into results.",
        },
        {
            title: "Ethical & Sustainable Growth",
            content:
                "White-hat only — genuine reviews, accurate citations, high-quality content, and authoritative LA-relevant links — built to last through algorithm updates.",
        },
        {
            title: "Proven Results in Los Angeles",
            content:
                "We’ve helped dozens of LA businesses climb local pack rankings, dominate neighborhood searches, and significantly increase qualified leads and revenue.",
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
                        Proven LA SEO for Visibility
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Los Angeles SEO company helping businesses across LA and surrounding neighborhoods boost local rankings, improve Google Maps presence, and grow revenue.
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
                        Your Trusted <span className="text-[#25baff]">Los Angeles SEO Partner</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        In one of the most competitive digital markets on Earth, visibility is everything. Our Los Angeles SEO company helps businesses dominate Google Maps, local pack results, and organic search across Hollywood, Downtown LA, Santa Monica, Beverly Hills, Silver Lake, West Hollywood, Culver City, Pasadena, Long Beach, and every corner of LA County.
                    </p>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        We combine aggressive local SEO tactics with modern optimization: Google Business Profile excellence, neighborhood-specific keywords, citation authority, review momentum, structured data, and high-conversion content tailored to how people in LA actually search.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        Ready to stand out in the City of Angels?
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="Los Angeles SEO Company"
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
                            How We Dominate <span className="text-[#25baff]">Search in LA</span>
                        </h2>
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-2xl mx-auto">
                            Proven tactics to win the local pack, drive real customer actions, and grow revenue in one of the toughest markets.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaSearchLocation,
                                    head: "Google Maps & Local Pack Domination",
                                    text: "Rank in the top 3 across LA neighborhoods — turning searches into calls, directions, bookings, and foot traffic.",
                                },
                                {
                                    icon: FaSearchengin,
                                    head: "Hyper-Local LA Keywords",
                                    text: "Target neighborhood + service queries (Hollywood hair salon, Santa Monica dentist near me) that real Angelenos use.",
                                },
                                {
                                    icon: GiRelationshipBounds,
                                    head: "Review Velocity & Trust Signals",
                                    text: "Ethical systems to earn authentic 5-star reviews — one of the strongest ranking factors in competitive LA.",
                                },
                                {
                                    icon: FaMeta,
                                    head: "GBP & Citation Authority",
                                    text: "Fully optimized Google Business Profiles + clean, powerful citations across high-authority directories.",
                                },
                                {
                                    icon: MdOutlineStarRate,
                                    head: "Revenue & Lead Tracking",
                                    text: "Call tracking, direction requests, lead attribution — monthly reports show actual business growth in LA.",
                                },
                                {
                                    icon: RxComponent1,
                                    head: "Neighborhood-Specific Content",
                                    text: "Location pages, blogs, FAQs built for LA-area intent, voice search, and featured snippets.",
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
                            <span className="text-[#25baff]"> Los Angeles SEO Agency?</span>
                        </h2>
                        <div className="w-213 h-1 bg-black mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={Img2}
                                alt="Los Angeles SEO experts"
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
                        Why LA Businesses Trust Us
                        <span className="text-[#25baff]"> for SEO</span>
                    </h2>
                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        We deliver real results in one of the world's toughest markets: rankings, leads, foot traffic, and revenue — with total transparency.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "LA Neighborhood Mastery",
                                text: "We know how search behaves across Hollywood, DTLA, Santa Monica, Beverly Hills, Silver Lake, WeHo, Culver City, and beyond.",
                            },
                            {
                                head: "Google Maps & Pack Priority",
                                text: "Strategies engineered to win the local 3-pack and drive actual customer actions in Los Angeles.",
                            },
                            {
                                head: "Review & Citation Powerhouse",
                                text: "Proven systems to build authentic 5-star momentum and strong, consistent citation profiles.",
                            },
                            {
                                head: "Lead & Revenue Visibility",
                                text: "Call tracking, direction requests, form fills, revenue attribution — monthly reports show real impact.",
                            },
                            {
                                head: "Sustainable in High Competition",
                                text: "White-hat only — built to thrive long-term in LA's ultra-competitive environment.",
                            },
                            {
                                head: "Scalable Across LA County",
                                text: "From single-location businesses to multi-site brands — we scale with you across the LA metro.",
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
                            Los Angeles SEO <span className="text-[#25baff]">Pricing Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible plans designed for LA businesses — transparent pricing, proven visibility & revenue growth.
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
                                    <p>15 Target Local Keywords</p>
                                    <p>Basic Citation Cleanup</p>
                                    <p>Monthly Report</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    Get Started
                                </button>
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
                                    <p>30 Target Local Keywords</p>
                                    <p>40 Citations/Month</p>
                                    <p>Local Content Creation</p>
                                    <p>Bi-Weekly Reports</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    Get Started
                                </button>
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
                                    <p>50 Target Local Keywords</p>
                                    <p>80 Citations + Local Links</p>
                                    <p>Voice & AI Optimization</p>
                                    <p>Weekly Reports & Calls</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                    Get Started
                                </button>
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
                                    <p>Dedicated Local SEO Manager</p>
                                    <p>Unlimited Keywords</p>
                                    <p>Full Citation + Link Building</p>
                                    <p>Voice/AI/Featured Snippets</p>
                                    <p>Custom Dashboard & Weekly Calls</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Los Angeles SEO <span className="text-[#25baff]">FAQ</span>
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

export default LosAngelesSEO;