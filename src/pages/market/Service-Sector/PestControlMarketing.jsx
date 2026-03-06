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
import Banner from "../../../assets/market/PestControlMarketing/img1.avif";
import Img from "../../../assets/market/PestControlMarketing/img2.avif"
import Img3 from "../../../assets/market/PestControlMarketing/img3.avif"

gsap.registerPlugin(ScrollTrigger);

const PestControlMarketing = () => {
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
            question: "How long does Pest Control marketing take to show results?",
            answer: "Most pest control companies see noticeable increases in calls and bookings within 2–5 months, depending on local competition and current online presence.",
        },
        {
            question: "Is digital marketing suitable for small local exterminators?",
            answer: "Yes. Local SEO and Google Business Profile optimization are especially powerful for small to mid-sized pest control businesses serving specific cities or counties.",
        },
        {
            question: "Can marketing help target commercial pest control contracts?",
            answer: "Yes. We create dedicated service pages, content strategies, and review systems optimized for restaurants, warehouses, offices, schools, and property managers.",
        },
        {
            question: "Do I need separate pages for each pest service?",
            answer: "Yes. Dedicated pages for termite treatment, bed bug removal, rodent control, ant extermination, commercial pest management, etc. help rank for high-intent searches.",
        },
        {
            question: "How important are reviews for pest control marketing?",
            answer: "Extremely important. Positive, recent reviews heavily influence local pack rankings, map visibility, and whether a customer chooses to call you.",
        },
        {
            question: "Will marketing reduce my dependency on paid ads or flyers?",
            answer: "Yes. As organic calls and consistent leads grow, many companies gradually reduce spending on Google Ads, door hangers, and other expensive channels.",
        },
        {
            question: "Can marketing help in very competitive service areas?",
            answer: "Yes, with aggressive local SEO, strong GBP optimization, consistent review generation, fast website, and high-intent content.",
        },
        {
            question: "How do you measure Pest Control marketing success?",
            answer: "Through call tracking, form submissions, booking volume, keyword rankings, Google Business Profile insights, organic traffic growth, and ROI per lead.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Marketing for</h1>
                    <span className="text-2xl md:text-2xl font-semibold"> Pest Control</span>
                    <p className="mt-6 text-lg text-gray-300">
                        Turn Emergency Searches • Into Booked Jobs • Dominate Local Results
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
                        What Is<span className="text-[#25baff]"> Pest Control Marketing?</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        When pests invade a home or business, people don’t browse — they search fast and call the first company they trust. If your pest control business isn’t ranking on page 1 of Google, you’re invisible exactly when customers need help most.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Pest control marketing is a combination of digital strategies designed to attract homeowners and businesses who need immediate or preventive pest removal services. It includes local SEO, Google Business Profile optimization, high-intent keyword targeting, review management, conversion-focused websites, and content marketing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The primary purpose is to be the first trusted solution when someone searches “exterminator near me”, “termite treatment [city]”, “bed bug removal emergency”, or “commercial pest control” — turning urgent searches into booked appointments and recurring service contracts.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img}
                        alt="Why Choose Pest Control Marketing"
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
                            Pest Control Services <span className="text-[#25baff]">We Scale</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                            From emergency residential calls to large commercial contracts — we craft marketing strategies tailored to your exact pest services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Residential Pest Control",
                            "Termite Inspection & Treatment",
                            "Bed Bug Extermination",
                            "Rodent Control & Removal",
                            "Commercial Pest Management",
                            "Eco-Friendly / Green Pest Solutions",
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
                        Our Expert Pest Control <span className="text-[#25baff]">Marketing Solutions</span>
                    </h2>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: TbSeo,
                                head: "Local SEO & Map Pack Domination",
                                text: "Most pest searches are hyper-local and urgent. We optimize your Google Business Profile, build citations, create location pages, and target geo-keywords to rank in the local 3-pack for 'pest control near me' and service-specific terms.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "High-Intent Emergency Keyword Strategy",
                                text: "We target exact phrases people use in panic: 'emergency exterminator [city]', 'bed bugs removal same day', 'termite damage repair near me', bringing ready-to-book customers straight to your phone.",
                            },
                            {
                                icon: TbDeviceIpadShare,
                                head: "Trust & Conversion Optimization",
                                text: "We build credibility with review showcases, pest license badges, before/after photos, click-to-call buttons, fast mobile load times, and simple booking forms — turning visitors into phone calls and jobs booked.",
                            },
                            {
                                icon: BiSolidBookContent,
                                head: "Authority-Building Content",
                                text: "We create helpful content: 'signs of termites', 'how to prevent rodents in winter', 'safe pest control for pets', seasonal pest guides — content that ranks, educates, and positions you as the local expert.",
                            },
                            {
                                icon: MdOutlineSecurity,
                                head: "Technical & On-Page SEO Foundation",
                                text: "Fast loading, mobile-optimized, secure (HTTPS), schema markup (LocalBusiness, Service), clean URLs, optimized titles & metas, internal linking — ensuring Google rewards your site with higher local rankings.",
                            },
                            {
                                icon: FaSearchengin,
                                head: "Review Acceleration & Local Link Building",
                                text: "We implement review request systems after every job, respond professionally, showcase 5-star testimonials, and build backlinks from local directories, home improvement sites, and community pages to boost authority.",
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
                            We help you win recurring contracts from restaurants, offices, warehouses, schools, apartments, and property managers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {[
                                "Dedicated Commercial Service Pages",
                                "Industry-Specific Landing Pages (Restaurants, Warehouses, Schools)",
                                "Contract & Bid Visibility Optimization",
                                "Review & Testimonial Systems for Businesses",
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
                                alt="Commercial Pest Control Services"
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
                            Measurable <span className="text-[#25baff]">Pest Control Marketing Results</span>
                        </h2>
                        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
                            We don’t just increase traffic — we increase phone calls, booked jobs, and monthly recurring revenue.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "180%+", text: "Increase in Inbound Calls" },
                            { number: "4X", text: "Growth in Emergency Bookings" },
                            { number: "55%+", text: "Higher Job Booking Rate" },
                            { number: "Top 3", text: "Local Pack Rankings" },
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
                            What Pest Control Owners <span className="text-[#25baff]">Say About Us</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "We went from 4–6 calls/week to 25–35 calls/week in under 5 months. The phone just keeps ringing.",
                                name: "Local Exterminator – Residential Focus",
                            },
                            {
                                text: "Their local SEO and review strategy landed us multiple restaurant and office contracts we never had before.",
                                name: "Commercial Pest Management Company",
                            },
                            {
                                text: "We cut Google Ads spend by 60% while bookings stayed strong — best decision we made.",
                                name: "Termite & Rodent Specialist",
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
                        Get More Pest Control Jobs & Contracts – Start Today!
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
                                head: "Pest Control-Specific Local Marketing Mastery",
                                text: "We specialize in urgent, local, seasonal pest marketing. Every tactic targets emergency searches, map pack visibility, reviews, and service-specific terms.",
                            },
                            {
                                head: "Proven Call & Job Growth Focus",
                                text: "We focus on real business outcomes: more phone calls, same-day bookings, recurring contracts, and seasonal spikes — not just rankings.",
                            },
                            {
                                head: "Google Business Profile Optimization Experts",
                                text: "Your GBP is your #1 lead source. We optimize categories, photos, services, posts, Q&A, and reviews to dominate the local pack.",
                            },
                            {
                                head: "Review & Reputation Management System",
                                text: "We help you collect authentic 5-star reviews after every job, respond professionally, and display testimonials to convert hesitant callers.",
                            },
                            {
                                head: "Fast, Mobile-First Technical SEO",
                                text: "Emergency searchers use mobile. We deliver lightning-fast sites, perfect mobile UX, click-to-call features, and technical excellence Google rewards.",
                            },
                            {
                                head: "Seasonal & Trust-Building Content That Converts",
                                text: "We produce helpful, seasonal content — pest prevention guides, infestation signs, treatment explainers — that ranks and turns searchers into booked jobs.",
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
                            Our Pest Control Marketing <span className="text-[#25baff]">Process</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "In-Depth Local Keyword & Competitor Research",
                            "Google Business Profile & Citation Audit + Optimization",
                            "On-Page, Technical & Speed Optimization",
                            "High-Intent Content Creation & Seasonal Strategy",
                            "Review Generation & Reputation Management",
                            "Local Link Building & Monthly Performance Tracking",
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

export default PestControlMarketing;