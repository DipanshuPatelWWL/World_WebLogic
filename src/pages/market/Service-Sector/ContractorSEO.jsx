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
import Banner from "../../../assets/market/Contractor/img1.jpg";
import Img from "../../../assets/market/Contractor/img2.jpg"

gsap.registerPlugin(ScrollTrigger);

const ContractorSEO = () => {
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
            question: "How long does contractor SEO take to show results?",
            answer: "Most contractors see measurable improvements within 3 to 6 months, depending on competition.",
        },
        {
            question: "Is SEO suitable for small contracting businesses?",
            answer: "Yes. Local SEO especially benefits small and mid-sized contractors.",
        },
        {
            question: "Can SEO help me target commercial construction projects?",
            answer: "Absolutely. We create service-specific landing pages to target commercial clients.",
        },
        {
            question: "Do I need separate pages for each service?",
            answer: "Yes. Dedicated pages help rank for specific services like roofing, remodeling, or plumbing.",
        },
        {
            question: "How important are reviews for contractor SEO?",
            answer: "Extremely important. Reviews influence both rankings and client decisions.",
        },
        {
            question: "Will SEO reduce my dependency on paid ads?",
            answer: "Yes. As organic traffic increases, reliance on paid ads often decreases.",
        },
        {
            question: "Can SEO help in competitive cities?",
            answer: "Yes, with strong strategy and consistent optimization.",
        },
        {
            question: "How do you measure SEO success?",
            answer: "Through keyword rankings, website traffic, phone calls, form submissions, and conversion rates.",
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
                    <span className="text-2xl md:text-2xl font-semibold"> Contractors</span>
                    <p className="mt-6 text-lg text-gray-300">
                        SEO for Contractors – Dominate Local Search & Win More Projects
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
                        What Is<span className="text-[#25baff]"> SEO for Contractors?</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        You build homes, remodel kitchens, repair roofs, and manage large construction projects. But here’s the reality: Before a homeowner calls you, they search for you. If your contracting business is not showing up on page one of Google, your competitors are collecting the calls, the estimates, and the contracts.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        SEO for contractors is the strategic process of optimizing your website and online presence so your business ranks higher in search engine results. It focuses on increasing organic traffic, generating qualified leads, improving local visibility, and converting website visitors into paying clients.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Unlike paid ads that stop the moment your budget runs out, SEO builds long-term authority and steady lead flow. Homeowners no longer flip through directories. Property managers research contractors online before reaching out. SEO levels the playing field.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img}
                        alt="Why Choose SEO for Contractors"
                        className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 w-150 h-80"
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
                            Contractor Niches <span className="text-[#25baff]">We Scale</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            From residential remodeling to commercial construction, we craft SEO strategies tailored to your exact service model.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "General Contractors",
                            "Roofing Companies",
                            "Remodeling & Renovation",
                            "HVAC & Plumbing Contractors",
                            "Commercial Construction Firms",
                            "Electrical Contractors",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center
                    transition-all duration-500 hover:-translate-y-3
                    hover:border-[#25baff]/40 hover:bg-[#25baff]/10
                    hover:shadow-2xl hover:shadow-[#25baff]/30"
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
                        Our Expert Contractor SEO <span className="text-[#25baff]">Solutions</span>
                    </h2>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TbSeo,
                                head: "Local SEO for Construction Businesses",
                                text: "Most contractor searches are location-based. We optimize your Google Business Profile, ensure consistent NAP, collect & respond to reviews, post regular updates, and use location-specific signals so your business appears at the top of 'contractor near me' and map pack results — driving more calls, directions, and estimates.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Contractor Keyword Strategy",
                                text: "We target the exact phrases homeowners use: 'best remodeling contractor near me', 'licensed roofing company in [city]', 'commercial construction contractor', and long-tail high-conversion terms. This brings ready-to-hire clients — not casual browsers — directly to your contact page.",
                            },
                            {
                                icon: TbDeviceIpadShare,
                                head: "Website Optimization for Higher Conversions",
                                text: "We build trust through license & insurance pages, project portfolios, client testimonials, FAQ sections, and clear estimate CTAs. Combined with fast load times and mobile-first design, this dramatically improves inquiry and estimate booking rates.",
                            },
                            {
                                icon: BiSolidBookContent,
                                head: "Content Marketing for Contractors",
                                text: "We create valuable content such as 'Cost of kitchen remodeling in [city]', 'How to choose a reliable roofing contractor', 'Signs you need foundation repair' — educational content that attracts potential clients earlier and positions you as the trusted expert.",
                            },
                            {
                                icon: MdOutlineSecurity,
                                head: "Technical SEO Foundation",
                                text: "Fast loading, mobile-optimized, secure (HTTPS), clean URLs, proper schema (LocalBusiness, Review), optimized meta tags, internal linking — we make sure search engines love your site and reward it with higher rankings and better user experience.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Off-Page SEO & Authority Building",
                                text: "Google evaluates your business reputation beyond your website. We improve authority through industry directory listings, local business associations, construction blogs, media mentions, backlink outreach, and review management.",
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

            {/* ================= LEAD ENGINE ================= */}
            <section className="relative bg-[#020617] py-32 overflow-hidden">
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black" />
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#25baff]/20 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[160px] rounded-full animate-pulse" />

                <div className="relative container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Contractor <span className="text-[#25baff]">Lead Engine</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            We don’t just increase traffic. We engineer predictable lead flow that turns searchers into signed contracts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "↑ 180%", label: "Organic Traffic Growth" },
                            { number: "↑ 3X", label: "Qualified Inquiries" },
                            { number: "↓ 40%", label: "Cost Per Lead Reduction" },
                            { number: "24/7", label: "Inbound Lead System" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10
                    hover:bg-[#25baff]/10 hover:border-[#25baff]/40
                    transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-4xl font-extrabold text-[#25baff] mb-4">
                                    {item.number}
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    {item.label}
                                </p>
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
                        Win More Projects with the Right Clients – Start Today!
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
                                head: "Contractor-Specific Local SEO Mastery",
                                text: "We live and breathe construction marketing. Every strategy is built around how real homeowners search for contractors — hyper-local intent, trust signals, license highlights, and service-specific keywords.",
                            },
                            {
                                head: "Proven Contract Growth Focus",
                                text: "We don’t chase vanity metrics. Our only KPI is helping you get more qualified inquiries, booked estimates, and signed contracts — month after month.",
                            },
                            {
                                head: "Google Business Profile Optimization Experts",
                                text: "Your GBP is often the #1 deciding factor in local rankings. We fully optimize it — photos, posts, services, Q&A, reviews — so you dominate the map pack.",
                            },
                            {
                                head: "Review & Reputation Management System",
                                text: "We help you systematically collect more 5-star reviews, respond professionally, and display testimonials in a way that converts hesitant homeowners into confident clients.",
                            },
                            {
                                head: "Fast, Mobile-First Technical SEO",
                                text: "Homeowners search on phones. We ensure lightning-fast load times, perfect mobile experience, secure site, proper schema, and clean technical foundation that Google rewards.",
                            },
                            {
                                head: "Homeowner-Centered Content That Ranks & Converts",
                                text: "We create helpful, empathetic content — cost guides, how-to-choose articles, project examples, FAQs — that builds trust, answers objections early, and ranks for high-intent searches.",
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
                            Our Contractor SEO <span className="text-[#25baff]">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "In-Depth Local & Keyword Research",
                            "Google Business Profile & Citation Audit + Optimization",
                            "On-Page, Technical & Speed Optimization",
                            "Homeowner-Focused Content Creation & Strategy",
                            "Review Generation & Reputation Management",
                            "Authority Building, Link Acquisition & Monthly Tracking",
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

export default ContractorSEO;