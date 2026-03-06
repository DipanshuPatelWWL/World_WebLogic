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
import {
    FaVideo,
    FaRocket,
    FaSearch,
    FaUsers,
    FaDollarSign,
    FaChartLine,
} from "react-icons/fa";

import Banner from "../../../assets/market/dayCareSEO/img1.jpg";
import Img from "../../../assets/market/dayCareSEO/img2.jpg"

gsap.registerPlugin(ScrollTrigger);

const DaycareSEO = () => {
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
            question: "How long does Daycare SEO take to show results?",
            answer:
                "Most centers see noticeable improvement within 3 to 6 months.",
        },
        {
            question: "Is SEO better than paid ads for daycare centers?",
            answer:
                "SEO provides long-term growth, while ads deliver short-term traffic. The best strategy often combines both.",
        },
        {
            question: "Do I need a new website for SEO?",
            answer:
                "Not always. Many existing websites can be optimized effectively.",
        },
        {
            question: "How important are Google reviews for daycare SEO?",
            answer:
                "Extremely important. Reviews influence both rankings and parent trust.",
        },
        {
            question: "Can SEO help with specific age programs like infant care?",
            answer:
                "Yes. We optimize pages for specific programs and services.",
        },
        {
            question: "What makes daycare SEO different from general SEO?",
            answer:
                "It focuses heavily on local visibility, trust signals, and parent-centered content.",
        },
        {
            question: "Will SEO help my daycare appear in “near me” searches?",
            answer:
                "Yes, through strong local SEO and Google Business optimization.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Market</h1>
                    <span className="text-2xl md:text-2xl font-semibold"> Daycare SEO</span>
                    <p className="mt-6 text-lg text-gray-300">
                        Daycare SEO – Dominate Local Search & Fill Your Classrooms
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
                        What Is<span className="text-[#25baff]"> Daycare SEO?</span>
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Daycare SEO is a long-term digital strategy designed to increase your website’s visibility on search engines like Google. It helps your childcare center appear in front of parents who are actively searching for enrollment opportunities.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Unlike paid ads that stop the moment you stop spending, SEO builds long-lasting organic visibility. The goal is simple: improve search rankings, drive qualified website traffic, and convert visitors into inquiries and tours.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Running a daycare means shaping tiny futures. But before parents trust you with their child’s first steps, they search. They compare. They scroll. If your daycare does not appear on page one of Google, it might as well be invisible.
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img}
                        alt="Why Choose Daycare SEO"
                        className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 w-150 h-80"
                    />
                </div>
            </section>

            <section className="relative py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1120] text-white overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            SEO vs Paid Ads for Daycare Centers
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Two powerful marketing approaches. Different strengths. Different outcomes. Let’s break it down.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-10 relative">
                        {/* Divider Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 opacity-40"></div>

                        {/* SEO CARD */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                            <div className="flex items-center gap-3 mb-8">
                                <TbSeo className="text-blue-400 text-3xl" />
                                <h3 className="text-2xl font-semibold">Daycare SEO</h3>
                            </div>

                            <ul className="space-y-6 text-gray-300">
                                <li className="flex gap-3">
                                    <FaRocket className="text-blue-400 mt-1" />
                                    Long-term compounding traffic growth
                                </li>
                                <li className="flex gap-3">
                                    <FaUsers className="text-blue-400 mt-1" />
                                    Builds trust & brand authority
                                </li>
                                <li className="flex gap-3">
                                    <FaChartLine className="text-blue-400 mt-1" />
                                    Decreasing cost per lead over time
                                </li>
                                <li className="flex gap-3">
                                    <FaDollarSign className="text-blue-400 mt-1" />
                                    No recurring click costs
                                </li>
                                <li className="flex gap-3">
                                    <FaSearch className="text-blue-400 mt-1" />
                                    Dominates "near me" & local searches
                                </li>
                            </ul>
                        </div>

                        {/* ADS CARD */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                            <div className="flex items-center gap-3 mb-8">
                                <FaVideo className="text-purple-400 text-3xl" />
                                <h3 className="text-2xl font-semibold">Paid Advertising</h3>
                            </div>

                            <ul className="space-y-6 text-gray-300">
                                <li className="flex gap-3">
                                    <FaSearch className="text-purple-400 mt-1" />
                                    Instant visibility & traffic
                                </li>
                                <li className="flex gap-3">
                                    <FaUsers className="text-purple-400 mt-1" />
                                    Precise targeting options
                                </li>
                                <li className="flex gap-3">
                                    <FaChartLine className="text-purple-400 mt-1" />
                                    Quick lead generation
                                </li>
                                <li className="flex gap-3">
                                    <FaDollarSign className="text-purple-400 mt-1" />
                                    Requires continuous budget
                                </li>
                                <li className="flex gap-3">
                                    <FaRocket className="text-purple-400 mt-1" />
                                    Traffic stops when spending stops
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <p className="text-gray-400 mb-6">
                            The smartest strategy? Combine both — use SEO as your foundation and ads for faster scaling.
                        </p>
                    </div>
                </div>
            </section>

            {/* audit services  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        Our Expert Daycare SEO
                        <span className="text-[#25baff]"> Solutions</span>
                    </h2>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TbSeo,
                                head: "Local SEO & Google Map Pack Domination",
                                text: "Most daycare searches are hyper-local. We optimize your Google Business Profile, ensure consistent NAP, collect & respond to reviews, post regular updates, and use location-specific signals so your center appears at the top of 'daycare near me' and map pack results — driving more calls, directions, and tours.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "High-Intent Keyword Strategy for Parents",
                                text: "We target the exact phrases modern parents use: 'best preschool near me', 'infant daycare [city]', 'licensed childcare [neighborhood]', and long-tail high-conversion terms. This brings ready-to-enroll families — not casual browsers — directly to your enrollment page.",
                            },
                            {
                                icon: TbDeviceIpadShare,
                                head: "Parent Trust & Conversion Optimization",
                                text: "We build trust through safety-focused pages, curriculum breakdowns, parent testimonials, FAQ sections, and clear enrollment CTAs. Combined with fast load times and mobile-first design, this dramatically improves inquiry and tour booking rates.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Review & Reputation Acceleration",
                                text: "Online reviews are make-or-break for parents. We implement systems to encourage 5-star feedback, professionally respond to every review, and showcase testimonials — boosting both rankings and emotional trust that converts visitors into enrolled families.",
                            },
                            {
                                icon: BiSolidBookContent,
                                head: "Authority-Building Content Ecosystem",
                                text: "We create helpful, parent-centered content — safety guides, 'what to look for in daycare', program comparisons, blog posts — that ranks well, answers concerns early, establishes your center as the trusted choice, and supports long-term topical authority.",
                            },
                            {
                                icon: MdOutlineSecurity,
                                head: "Technical & On-Page SEO Foundation",
                                text: "Fast loading, mobile-optimized, secure (HTTPS), clean URLs, proper schema (LocalBusiness, Review), optimized meta tags, internal linking — we make sure search engines love your site and reward it with higher rankings and better user experience.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                  shadow-lg shadow-[#25baff]/10
                  transition-all duration-500
                  hover:bg-[#25baff]
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon
                                        className="text-4xl text-[#25baff] mb-6 mx-auto
  group-hover:text-white transition-colors duration-300"
                                    />

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



            <section className="relative bg-[#030712] py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#030712] to-black" />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#25baff]/20 blur-[140px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] rounded-full animate-pulse" />

                <div className="relative container mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                            Local Visibility &
                            <span className="text-[#25baff]"> Enrollment Growth</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            We position your daycare as the obvious choice in your city and turn local searches into real enrollments.
                        </p>
                    </div>

                    {/* Timeline Layout */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#25baff]/40 via-white/10 to-[#25baff]/40" />

                        {[
                            {
                                title: "Hyper-Local Search Domination",
                                desc: "Rank for ‘daycare near me’, ‘best childcare in [city]’, and neighborhood-specific searches with precision targeting."
                            },
                            {
                                title: "Competitor Gap Analysis",
                                desc: "Identify weaknesses in competing daycare websites and strategically outrank them with better structure and content."
                            },
                            {
                                title: "Monthly Growth Reporting",
                                desc: "Clear reports showing keyword growth, traffic increase, call clicks, and actual inquiry improvements."
                            },
                            {
                                title: "Continuous Optimization Loop",
                                desc: "We analyze performance every month and refine strategy to maximize long-term enrollment growth."
                            }
                        ].map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative md:w-1/2 px-8 mb-16 ${isEven ? "md:ml-auto md:text-left" : "md:mr-auto md:text-right"
                                        }`}
                                >
                                    {/* Animated Dot */}
                                    <div
                                        className={`hidden md:block absolute top-2 w-6 h-6 bg-[#25baff] rounded-full shadow-lg shadow-[#25baff]/50 animate-pulse ${isEven ? "-left-3" : "-right-3"
                                            }`}
                                    />

                                    <div className="group backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10
                            transition-all duration-700
                            hover:-translate-y-3
                            hover:border-[#25baff]/40
                            hover:bg-[#25baff]/10
                            hover:shadow-2xl hover:shadow-[#25baff]/40">

                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* contact us  */}

            <section
                ref={addSectionRef}
                className="relative py-24 px-6"
                style={{ backgroundColor: "#020202" }}
            >
                <div
                    className="absolute inset-0 
   bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),
radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)]

    animate-pulseSlow"
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(18)].map((_, i) => (
                        <span
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-[#25baff]
 rounded-full opacity-40 animate-float"
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
                        Fill Your Classrooms with the Right Families – Start Today!
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
                        Why Choose Digital
                        <span className="text-[#25baff]"> WebGuider?</span>
                    </h2>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Daycare-Specific Local SEO Mastery",
                                text: "We live and breathe childcare marketing. Every strategy is built around how real parents search for daycare — hyper-local intent, trust signals, safety concerns, and program-specific keywords.",
                            },
                            {
                                head: "Proven Enrollment Growth Focus",
                                text: "We don’t chase vanity metrics. Our only KPI is helping you get more qualified inquiries, booked tours, and signed enrollments — month after month.",
                            },
                            {
                                head: "Google Business Profile Optimization Experts",
                                text: "Your GBP is often the #1 deciding factor in local rankings. We fully optimize it — photos, posts, services, Q&A, reviews — so you dominate the map pack.",
                            },
                            {
                                head: "Review & Reputation Management System",
                                text: "We help you systematically collect more 5-star reviews, respond professionally, and display testimonials in a way that converts hesitant parents into confident enrollees.",
                            },
                            {
                                head: "Fast, Mobile-First Technical SEO",
                                text: "Parents search on phones. We ensure lightning-fast load times, perfect mobile experience, secure site, proper schema, and clean technical foundation that Google rewards.",
                            },
                            {
                                head: "Parent-Centered Content That Ranks & Converts",
                                text: "We create helpful, empathetic content — safety pages, curriculum guides, FAQs, testimonials — that builds trust, answers objections early, and ranks for high-intent searches.",
                            },
                        ].map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                  shadow-lg shadow-[#25baff]/10
                  transition-all duration-500
                  hover:bg-[#25baff]
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-[#25baff]/40"
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
                            Our Daycare SEO
                            <span className="text-[#25baff]"> Process</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "In-Depth Local & Keyword Research",
                            "Google Business Profile & Citation Audit + Optimization",
                            "On-Page, Technical & Speed Optimization",
                            "Parent-Focused Content Creation & Strategy",
                            "Review Generation & Reputation Management",
                            "Authority Building, Link Acquisition & Monthly Tracking",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-6 flex items-start gap-4
                    shadow-lg shadow-black/40
                    transition-all duration-500
                    hover:bg-[#25baff]/10
                    hover:border-[#25baff]/40
                    hover:shadow-[#25baff]/40
                    hover:-translate-y-2"
                            >
                                <FaCheckCircle
                                    className="text-[#25baff] text-2xl mt-1
                        group-hover:scale-110
                        transition-all duration-300"
                                />

                                <p
                                    className="text-gray-200 text-lg leading-relaxed
                        group-hover:text-white
                        transition-colors duration-300"
                                >
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
                        Frequently Asked
                        <span className="text-[#25baff]"> Questions</span>
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={(el) => (faqRefs.current[index] = el)}
                                className="gsap-item bg-white border border-gray-200 rounded-2xl
                shadow-lg shadow-[#25baff]/20
                hover:shadow-2xl hover:shadow-[#25baff]/40
                hover:border-[#25baff]
                transition-all duration-300"
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
                                                const prevContent =
                                                    prevEl.querySelector(".faq-content");

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
};

export default DaycareSEO;