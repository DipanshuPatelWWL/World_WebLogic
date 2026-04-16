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

// Replace with your actual Columbus-themed image paths
import Banner from "../../assets/columbus/banner.avif";
import Img1 from "../../assets/columbus/img1.avif";
import Img2 from "../../assets/columbus/img2.avif";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Columbus = () => {
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
            question: "Why should my business invest in SEO in Columbus?",
            answer:
                "SEO helps businesses appear higher in search results, making it easier for potential customers to discover your services online.",
        },
        {
            question: "How long does SEO take to deliver results?",
            answer:
                "Most businesses start seeing noticeable improvements within 3–6 months depending on competition and website condition.",
        },
        {
            question: "Do you provide services other than SEO?",
            answer:
                "Yes. Digital WebGuider also offers PPC advertising, web design, social media marketing, and content marketing services.",
        },
        {
            question: "Can SEO help small businesses compete online?",
            answer:
                "Absolutely. A targeted SEO strategy allows smaller businesses to compete with larger companies by focusing on niche and local search opportunities.",
        },
        {
            question: "Do you offer local SEO services?",
            answer:
                "Yes. Our local SEO strategies help businesses rank in local search results and Google Maps listings.",
        },
        {
            question: "Do you provide eCommerce SEO?",
            answer:
                "Yes. We optimize online stores to increase product visibility, attract qualified buyers, and improve sales performance.",
        },
        {
            question: "Do you guarantee #1 rankings?",
            answer:
                "No ethical SEO agency can guarantee specific rankings. However, our strategies are designed to significantly improve visibility and organic traffic.",
        },
        {
            question: "Can I request a customized SEO package?",
            answer:
                "Yes. We offer flexible SEO plans tailored to your business goals and marketing budget.",
        },
    ];

    const accordionData = [
        {
            title: "Free SEO Strategy Session",
            content:
                "We start every partnership with a free SEO consultation. Our experts review your website, analyze competitors, and identify opportunities for improvement. This consultation provides valuable insights into how SEO can improve your business visibility and lead generation.",
        },
        {
            title: "Client-Focused SEO Approach",
            content:
                "At Digital WebGuider, we prioritize long-term client relationships. Every SEO campaign is designed around your business goals, target market, and growth strategy. This personalized approach ensures every campaign delivers meaningful results.",
        },
        {
            title: "Transparent Campaign Reporting",
            content:
                "Transparency is an important part of our SEO process. Our clients receive regular reports that show keyword rankings, traffic improvements, and campaign performance. You always know how your SEO strategy is progressing.",
        },
        {
            title: "Efficient Project Delivery",
            content:
                "Our experienced team follows structured workflows to deliver SEO improvements quickly and efficiently. By combining strategy, execution, and ongoing optimization, we help businesses see measurable improvements without unnecessary delays.",
        },
        {
            title: "Certified Digital Marketing Experts",
            content:
                "Our team follows the latest industry best practices and search engine guidelines. With expertise in SEO strategy, analytics, and digital marketing technologies, we deliver campaigns designed for sustainable growth.",
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
                        Columbus SEO Experts
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Helping Businesses Grow Online
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
                        Your Trusted <span className="text-[#25baff]">Columbus SEO Partner</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        Digital WebGuider is a results-driven Columbus SEO agency dedicated to helping businesses strengthen their online visibility and attract qualified customers. Through strategic search optimization, local SEO targeting, and performance-focused marketing campaigns, we help companies across Columbus increase traffic, generate leads, and achieve long-term digital success.
                    </p>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        Choosing the right SEO partner can significantly impact your business growth. Our Columbus SEO specialists create customized strategies designed to improve search rankings, attract targeted audiences, and convert website visitors into loyal customers.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        As a trusted Columbus digital marketing agency, we focus on sustainable, measurable growth.
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="Columbus SEO Agency"
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
                            How Our Columbus SEO Services
                            <span className="text-[#25baff]"> Drive Growth</span>
                        </h2>
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-2xl mx-auto">
                            Proven strategies that improve rankings, traffic quality, leads, and long-term ROI in the Columbus market.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaSearchLocation,
                                    head: "Targeted Local & National Reach",
                                    text: "Rank for Columbus-specific searches and broader terms — capturing both local customers and regional traffic.",
                                },
                                {
                                    icon: FaSearchengin,
                                    head: "Data-Driven Keyword Strategy",
                                    text: "High-intent keywords selected based on real search volume, competition, and conversion potential.",
                                },
                                {
                                    icon: GiRelationshipBounds,
                                    head: "Sustainable Organic Growth",
                                    text: "Build lasting rankings and traffic that continue delivering results month after month.",
                                },
                                {
                                    icon: FaMeta,
                                    head: "Technical + Content Excellence",
                                    text: "Fast, mobile-friendly sites paired with high-quality, user-first content that search engines reward.",
                                },
                                {
                                    icon: MdOutlineStarRate,
                                    head: "Transparent Monthly Reporting",
                                    text: "Clear visibility into rankings, traffic sources, leads, and real business impact.",
                                },
                                {
                                    icon: RxComponent1,
                                    head: "Continuous Optimization",
                                    text: "Adapt to algorithm updates, competitor moves, and seasonal trends to stay ahead.",
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
                            Why Choose Digital WebGuider as Your
                            <span className="text-[#25baff]"> Columbus SEO Agency?</span>
                        </h2>
                        <div className="w-213 h-1 bg-black mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={Img2}
                                alt="Columbus SEO team"
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
                        Why Columbus Businesses Trust Us
                        <span className="text-[#25baff]"> for SEO</span>
                    </h2>
                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        We deliver measurable improvements in rankings, traffic, leads, and revenue — with full transparency.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Proven Columbus Market Results",
                                text: "Deep understanding of local competition, searcher intent, and Midwest business trends.",
                            },
                            {
                                head: "Custom Strategies — Not Templates",
                                text: "Every campaign built around your industry, goals, budget, and current website performance.",
                            },
                            {
                                head: "Ethical & Future-Proof SEO",
                                text: "White-hat techniques focused on long-term rankings and adaptability to algorithm changes.",
                            },
                            {
                                head: "Clear Monthly Performance Reports",
                                text: "Keyword positions, organic traffic growth, lead attribution — no black-box reporting.",
                            },
                            {
                                head: "Complete SEO Execution",
                                text: "Technical fixes + high-quality content + strategic link building under one roof.",
                            },
                            {
                                head: "Scalable Growth Path",
                                text: "From small local businesses to multi-location brands — we grow with you.",
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
                            Columbus SEO <span className="text-[#25baff]">Pricing Plans</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible packages designed for Columbus businesses — transparent pricing, measurable results.
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
                                    <p>25 Target Keywords</p>
                                    <p>35 Backlinks Monthly</p>
                                    <p>Pages Optimized – Up to 8</p>
                                    <p>Technical SEO Fixes</p>
                                    <p>AI Search Visibility Review – 2 Pages</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        Start Now
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
                                    <p>40 Target Keywords</p>
                                    <p>70 Backlinks Monthly</p>
                                    <p>Pages Optimized – Up to 15</p>
                                    <p>Google Business Profile Optimization</p>
                                    <p>Technical SEO Improvements</p>
                                    <p>AI Search Visibility Review – 4 Pages</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        Start Now
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
                                    <p>55 Target Keywords</p>
                                    <p>120 Backlinks Monthly</p>
                                    <p>Pages Optimized – Up to 25</p>
                                    <p>Google Business Profile + Local Citations</p>
                                    <p>Technical SEO Improvements</p>
                                    <p>AI Search Visibility Review – 6 Pages</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                        Start Now
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
                                    <p>100 Target Keywords</p>
                                    <p>220 Backlinks Monthly</p>
                                    <p>Pages Optimized – Up to 40</p>
                                    <p>GBP + Local Citations + Advanced Strategy</p>
                                    <p>Technical SEO Improvements</p>
                                    <p>AI Search Visibility Review – 10 Pages</p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        Start Now
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
                        Columbus SEO Agency <span className="text-[#25baff]">FAQ</span>
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

export default Columbus;