import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Banner from "../../../assets/seo/banner.jpg";
import { PiStrategyFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { GiNuclearPlant } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { FaIndustry } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { PiCubeTransparentLight } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { FiPlus, FiMinus } from "react-icons/fi";
import SmallBusiness from "../../../assets/services/LocalSeoServices/SmallBusiness.avif";
import SeoCompany from "../../../assets/services/LocalSeoServices/SeoCompany.avif";
import CompetitorAnalysis from "../../../assets/services/LocalSeoServices/CompetitorAnalysis.avif";
import StrategicKeyword from "../../../assets/services/LocalSeoServices/StrategicKeyword.jpg";
import SeoEnhancement from "../../../assets/services/LocalSeoServices/SeoEnhancement.avif";
import ContentStrategy from "../../../assets/services/LocalSeoServices/SeoContentStrategy.avif";
import LocalSeo from "../../../assets/services/LocalSeoServices/LocalSeo.avif";
import QualityBacklinks from "../../../assets/services/LocalSeoServices/QualityBacklinks.avif";
import Tracking from "../../../assets/services/LocalSeoServices/PerformanceTracking.avif";
import WebsiteAudit from "../../../assets/services/LocalSeoServices/WebsiteAudit.avif";


gsap.registerPlugin(ScrollTrigger);

const SmallBusinessSeo = () => {

    const [openIndex, setOpenIndex] = useState(0);
    const sectionRefs = useRef([]);
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const [activeFaq, setActiveFaq] = useState(0);
    const faqRefs = useRef([]);

    const addSectionRef = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // HERO
            gsap.from(heroRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: "power4.out",
            });

            // ALL SECTIONS
            sectionRefs.current.forEach((section) => {
                const items = section.querySelectorAll(".gsap-item");

                gsap.fromTo(
                    items,
                    {
                        autoAlpha: 0,
                        y: 60,
                        scale: 0.96,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.2,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            once: true,
                        },
                    },
                );
            });

            ScrollTrigger.refresh();
        }, rootRef);

        return () => ctx.revert();
    }, []);



    useEffect(() => {
        if (activeFaq === 0 && faqRefs.current[0]) {
            const content = faqRefs.current[0].querySelector(".faq-content");

            gsap.set(content, {
                height: "auto",
                opacity: 1,
            });
        }
    }, []);


    const accordionData = [
        {
            title: "SEO Expertise",
            content:
                "An experienced SEO team understands search engine algorithms and applies proven strategies to improve your rankings and online visibility."
        },
        {
            title: "Dedicated Team Support",
            content:
                "A professional SEO company provides continuous monitoring, optimization, and strategic improvements tailored to your business goals."
        },
        {
            title: "More Qualified Leads",
            content:
                "By targeting high-intent keywords, SEO helps attract visitors who are actively searching for your services."
        },
        {
            title: "Cost-Effective Growth",
            content:
                "SEO delivers long-term results and sustainable traffic growth without the high recurring cost of paid ads."
        },
        {
            title: "Transparent Reporting",
            content:
                "Regular performance reports help you track rankings, traffic growth, and return on investment."
        }
    ];


    const faqs = [
        {
            question: "Is SEO worth it for small businesses?",
            answer:
                "Yes, SEO is one of the most cost-effective digital marketing strategies for small businesses. It helps increase online visibility, attract targeted traffic, generate quality leads, and drive long-term revenue growth without relying solely on paid ads.",
        },
        {
            question: "How much does small business SEO cost?",
            answer:
                "SEO pricing varies depending on your industry, competition level, and business goals. Small business SEO packages are typically flexible and designed to fit different budgets while focusing on delivering measurable ROI.",
        },
        {
            question: "How long does it take to see results from SEO?",
            answer:
                "SEO is a long-term strategy. Most businesses begin seeing noticeable improvements in 3–6 months, depending on competition, website condition, and the effectiveness of the strategy implemented.",
        },
        {
            question: "What services are included in small business SEO?",
            answer:
                "Small business SEO generally includes website audits, keyword research, on-page optimization, content creation, local SEO, Google Business Profile optimization, link building, and performance reporting.",
        },
        {
            question: "Why is local SEO important for small businesses?",
            answer:
                "Local SEO helps your business appear in location-based searches and Google Maps results. It increases visibility among nearby customers who are actively searching for your products or services.",
        },
        {
            question: "Are SEO results guaranteed?",
            answer:
                "No ethical SEO agency can guarantee specific rankings because search engines frequently update their algorithms. However, proven strategies and consistent optimization significantly improve your chances of higher rankings and sustainable growth.",
        },
        {
            question: "Do I need ongoing SEO services?",
            answer:
                "Yes, SEO requires continuous monitoring and optimization. Competitors, algorithm updates, and market trends constantly change, so ongoing efforts ensure your business maintains and improves its rankings.",
        },
        {
            question: "What is the difference between SEO and SEM?",
            answer:
                "SEO focuses on improving organic (non-paid) search rankings, while SEM includes paid advertising strategies such as Google Ads. SEO delivers long-term results, while SEM provides immediate but paid visibility.",
        },
        {
            question: "Can SEO help generate more leads and sales?",
            answer:
                "Absolutely. By targeting high-intent keywords and optimizing your website for conversions, SEO helps attract qualified visitors who are more likely to become customers.",
        },
        {
            question: "Why should I hire a professional SEO agency?",
            answer:
                "A professional SEO agency provides expertise, advanced tools, strategic planning, and ongoing optimization to ensure your website performs effectively in search engines and stays ahead of competitors.",
        },
    ];

    return (
        <>
            <div className="bg-white text-gray-900" ref={rootRef}>

                {/* Banner Section */}
                <section
                    ref={heroRef}
                    className="relative h-[58vh] flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${Banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/70" />

                    <div className="relative z-10 text-center px-6 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            Services
                        </h1>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                            Small Business SEO
                        </p>
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="bg-gray-50 py-28">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">

                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                                Best
                                <span className="text-[#25baff]"> Small Business SEO</span> Services
                            </h2>
                            <p className="text-black mt-4">
                                Get more online traffic & more footfall with our affordable small business SEO services.
                                Here’s how our small business SEO services help your business:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Use the power of search engines",
                                "Reach your target market",
                                "Rank higher locally, get found easily",
                                "Get increased online visibility",
                                "Get more footfall",
                                "Turn them into customers",
                                "Get listed in local directories",
                                "Choose your budget",
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                                shadow-lg shadow-[#25baff]/10
                                transition-all duration-500
                                hover:bg-[#25baff]
                                hover:border-[#25baff]
                                hover:shadow-2xl hover:shadow-[#25baff]/40
                                hover:-translate-y-2"
                                >
                                    <FaCheckCircle
                                        className="text-[#25baff] text-2xl mt-1
                                  group-hover:text-white transition-colors duration-300"
                                    />

                                    <p
                                        className="text-[#020202] text-lg leading-relaxed
                                group-hover:text-white transition-colors duration-300"
                                    >
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                What is
                                <span className="text-[#25baff]"> Small Business SEO?</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid md:grid-cols-2 gap-10 items-center">

                            {/* Left Image */}
                            <div>
                                <img
                                    src={SmallBusiness}
                                    alt="Small Business SEO"
                                    className="rounded-lg shadow-lg w-full"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="text-[#020202]">

                                <p className="mb-6">
                                    Small Business SEO is the process of improving your website’s
                                    visibility on search engines to attract more customers and grow your brand online.
                                </p>

                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Rank higher in local search results</li>
                                    <li>Drive organic traffic to your website</li>
                                    <li>Increase leads and conversions</li>
                                    <li>Boost brand visibility online</li>
                                    <li>Turn visitors into paying customers</li>
                                </ul>

                                <h4 className="font-semibold text-[#25baff] mb-3">
                                    How do we do it?
                                </h4>

                                <ul className="list-disc pl-6 space-y-2">
                                    <li>In-depth keyword research</li>
                                    <li>On-page SEO optimization</li>
                                    <li>Technical SEO improvements</li>
                                    <li>Website UI & UX enhancements</li>
                                    <li>Quality backlink building</li>
                                </ul>

                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-12">
                            <button className="bg-[#a8d97c] text-[#020202] font-semibold px-8 py-3 rounded-md hover:bg-[#25baff] hover:text-white transition duration-300">
                                Check Out Our Affordable SEO Plans
                            </button>
                        </div>

                    </div>
                </section>

                <section className="bg-gray-50 py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                How Small Business SEO Services
                                <span className="text-[#25baff]"> Helps You Grow Online</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                            <p className="mt-6 text-gray-600">
                                Our SEO strategies are designed to increase your online visibility,
                                attract the right audience, and convert visitors into loyal customers.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]"
                            >
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Higher Search Rankings
                                </h3>
                                <p className="text-gray-600">
                                    We optimize your website to rank higher on Google and other search engines,
                                    helping your business get discovered by potential customers searching for your services.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Targeted Website Traffic
                                </h3>
                                <p className="text-gray-600">
                                    By focusing on high-intent keywords and local SEO strategies,
                                    we bring relevant visitors to your website who are more likely to convert.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Better User Experience
                                </h3>
                                <p className="text-gray-600">
                                    We improve website speed, structure, and mobile responsiveness
                                    to ensure users enjoy a smooth browsing experience that increases engagement.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Strong Brand Credibility
                                </h3>
                                <p className="text-gray-600">
                                    Ranking higher in search results builds trust and authority,
                                    making your brand more reliable in the eyes of potential customers.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Increased Local Visibility
                                </h3>
                                <p className="text-gray-600">
                                    Our local SEO techniques help your business appear in nearby searches,
                                    driving more local inquiries and foot traffic.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    More Conversions & Revenue
                                </h3>
                                <p className="text-gray-600">
                                    With optimized content and strategic SEO planning,
                                    we help turn website visitors into paying customers, boosting your revenue.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Why Hire SEO Section */}
                <section className="bg-white py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                Why Should You Hire a
                                <span className="text-[#25baff]"> Small Business SEO Company?</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Left Image */}
                            <div>
                                <img
                                    src={SeoCompany}
                                    alt="SEO Company"
                                    className="rounded-xl shadow-lg w-full"
                                />
                            </div>

                            {/* Right Accordion */}
                            <div>
                                <p className="text-gray-600 mb-6">
                                    Here’s why working with a professional SEO company can make a big difference:
                                </p>

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
                                                <p className="text-gray-600">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-gray-50 py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                Why Partner with
                                <span className="text-[#25baff]"> Digital WebGuider for Your SEO Growth</span>
                            </h2>
                            <div className="w-30 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                            <p className="mt-6 text-gray-600">
                                Selecting the right SEO agency can define your business success online. At Digital WebGuider, we focus on performance-driven strategies, measurable growth, and long-term digital success for small and growing businesses.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]"
                            >
                                <div className="flex justify-center items-center mb-4">
                                    <GiNuclearPlant className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Budget-Friendly SEO Packages
                                </h3>
                                <p className="text-gray-600">
                                    Digital WebGuider offers flexible and cost-effective SEO packages designed specifically for startups and small businesses. Our goal is to maximize your ROI while keeping your marketing investment efficient and result-oriented.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <PiStrategyFill className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Strategic & Data-Driven Approach
                                </h3>
                                <p className="text-gray-600">
                                    We don’t rely on guesswork. Our SEO campaigns are built on in-depth research, competitor analysis, and performance tracking to ensure your business reaches the right audience at the right time.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <TbCertificate className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Certified Digital Marketing Experts
                                </h3>
                                <p className="text-gray-600">
                                    Our certified professionals stay updated with the latest Google algorithms and digital trends. We implement industry-approved SEO practices that enhance your website visibility and credibility.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <FaIndustry className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Experience Across Multiple Industries
                                </h3>
                                <p className="text-gray-600">
                                    From local businesses to service-based companies, Digital WebGuider has successfully handled diverse industry projects, allowing us to craft customized strategies for every niche.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <TbSeo className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Complete SEO & Digital Solutions
                                </h3>
                                <p className="text-gray-600">
                                    We provide end-to-end services including on-page SEO, technical optimization, content strategy, link building, and performance monitoring — all under one roof.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <PiCubeTransparentLight className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Clear Communication & Performance Reports
                                </h3>
                                <p className="text-gray-600">
                                    Transparency is at the core of our work. We provide detailed monthly reports, keyword tracking insights, and ongoing consultation so you stay informed about every improvement and milestone.
                                </p>
                            </div>

                        </div>
                    </div >
                </section >

                <section className="bg-gray-50 py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                Digital WebGuider
                                <span className="text-[#25baff]"> SEO Strategic Process</span>
                            </h2>
                            <div className="w-30 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                            <p className="mt-6 text-gray-600">
                                At Digital WebGuider, we follow a structured and performance-focused SEO process to help small businesses build strong online visibility and achieve consistent growth. Our strategy is designed to deliver measurable and long-term results.
                            </p>
                        </div>

                        {/* Comprehensive SEO Website Audit */}
                        <section className="px-6" ref={addSectionRef}>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left Image */}
                                <div className="gsap-item">
                                    <img
                                        src={WebsiteAudit}
                                        alt="Comprehensive SEO Website Audit"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105 h-80 w-full"
                                    />
                                </div>

                                {/* Right Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-2xl md:text-3xl font-extrabold text-[#020202] mb-6">
                                        Comprehensive <span className="text-[#25baff]">SEO Website Audit</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        Our process begins with a detailed website audit to identify strengths, weaknesses, and growth opportunities. We analyze technical structure, site speed, mobile responsiveness, indexing issues, and overall user experience.

                                        <br />Using advanced SEO tools and industry best practices, the Digital WebGuider team detects problems such as broken links, duplicate content, crawl errors, and optimization gaps. We also optimize robots.txt, sitemap structure, and core technical elements to ensure search engines can properly understand and rank your website.

                                        <br />This strong technical foundation allows your business to compete effectively and achieve sustainable SEO success.
                                    </p>

                                </div>
                            </div>
                        </section>


                        {/* Competitor Analysis */}
                        <section className="py-15 px-6" ref={addSectionRef}>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* left Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                        Competitor <span className="text-[#25baff]">Analysis</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        You’re not the only business competing for top search rankings. Many small and medium-sized businesses are targeting the same keywords and audience as you. That’s why a detailed competitor analysis is essential for building a strong SEO strategy.

                                        <br />At Digital WebGuider, we conduct in-depth competitor research to understand what’s working in your industry and where opportunities exist. Our team analyzes competitor keywords, content strategies, backlink profiles, website structure, and overall search performance.

                                        <br />By identifying their strengths and weaknesses, we create smarter SEO campaigns that help you outperform competitors, capture more organic traffic, and strengthen your online visibility.
                                    </p>
                                </div>

                                {/* right Image */}
                                <div className="gsap-item">
                                    <img
                                        src={CompetitorAnalysis}
                                        alt="Competitor Analysis"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </section>


                        {/* Strategic Keyword Planning */}
                        <section className="px-6" ref={addSectionRef}>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left Image */}
                                <div className="gsap-item">
                                    <img
                                        src={StrategicKeyword}
                                        alt="Strategic Keyword Planning"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Right Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-2xl md:text-3xl font-extrabold text-[#020202] mb-6">
                                        Strategic <span className="text-[#25baff]">Keyword Planning</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        Effective SEO starts with selecting the right keywords that match your business goals and customer intent. Without proper keyword planning, even the best website may struggle to rank.

                                        <br />At Digital WebGuider, we conduct detailed keyword research using advanced SEO tools and industry data. We identify high-impact, long-tail, and location-based keywords that attract the right audience to your website.

                                        <br />Our team analyzes search intent, competition level, and search trends to ensure your content targets keywords that drive meaningful traffic — not just random visitors. By focusing on relevant and conversion-focused keywords, we help position your business in front of customers who are actively searching for your services.

                                        <br />This strategic approach builds a strong foundation for better rankings, increased visibility, and sustainable online growth.
                                    </p>

                                </div>
                            </div>
                        </section>


                        {/* On-Page SEO Enhancement */}
                        <section className="py-15 px-6" ref={addSectionRef}>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* left Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                        On-Page SEO <span className="text-[#25baff]">Enhancement</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        On-page optimization plays a crucial role in improving your website’s search engine rankings and overall visibility. A well-optimized website not only helps search engines understand your content but also improves user experience.

                                        <br />Our on-page SEO process focuses on optimizing key elements such as title tags, meta descriptions, header structure, keyword placement, and internal linking. We ensure that every page is strategically structured to target relevant keywords while maintaining natural and engaging content.

                                        <br />We also optimize images with proper alt tags, improve URL structure, enhance page speed, and implement structured data to make your website more search-engine friendly. Additionally, local SEO signals are integrated to strengthen your presence in location-based searches.

                                        <br />This comprehensive approach ensures your website is technically sound, content-rich, and fully optimized to attract and convert the right audience.
                                    </p>
                                </div>

                                {/* right Image */}
                                <div className="gsap-item">
                                    <img
                                        src={SeoEnhancement}
                                        alt="On-Page SEO Enhancement"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </section>


                        {/* SEO Content Strategy & Development */}
                        <section className="px-6" ref={addSectionRef}>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left Image */}
                                <div className="gsap-item">
                                    <img
                                        src={ContentStrategy}
                                        alt="SEO Content Strategy & Development"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Right Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-2xl md:text-3xl font-extrabold text-[#020202] mb-6">
                                        SEO Content <span className="text-[#25baff]">Strategy & Development</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        High-quality content is the foundation of successful SEO. Without relevant and valuable content, it becomes difficult to attract, engage, and convert your target audience.

                                        <br />Our content strategy begins with in-depth keyword planning and audience research to understand what your potential customers are searching for. We create well-structured, SEO-optimized content that aligns with user intent while maintaining clarity and readability.

                                        <br />Each piece of content is strategically crafted with proper keyword placement, optimized headings, internal linking, and structured formatting to improve search engine visibility. We also implement schema markup and content hierarchy to enhance rich results and strengthen topical authority.

                                        <br />By combining data-driven SEO strategies with engaging storytelling, we help position your business as a trusted authority while increasing organic traffic and long-term growth.
                                    </p>

                                </div>
                            </div>
                        </section>


                        {/* Local Search & Google Business Profile Optimization*/}
                        <section className="py-15 px-6" ref={addSectionRef}>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* left Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                        Local Search & Google <span className="text-[#25baff]">Business Profile Optimization</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        A strong local presence is essential for small businesses that want to attract nearby customers. Optimizing your Google Business Profile ensures your company appears in local search results, Google Maps, and “near me” searches.

                                        <br />We begin by properly setting up, verifying, and optimizing your profile with accurate business information, relevant keywords, service details, and high-quality images. This helps search engines clearly understand your business and improves your chances of appearing in the local pack.

                                        <br />Our strategy also includes review management, regular updates, post creation, and local engagement signals to build credibility and customer trust. By strengthening your local SEO foundation, we help increase visibility, drive more calls and inquiries, and convert local searches into real customers.
                                    </p>
                                </div>

                                {/* right Image */}
                                <div className="gsap-item">
                                    <img
                                        src={LocalSeo}
                                        alt="Local Search & Google Business Profile Optimization"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </section>


                        {/* Authority Building & Quality Backlinks*/}
                        <section className="px-6" ref={addSectionRef}>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left Image */}
                                <div className="gsap-item">
                                    <img
                                        src={QualityBacklinks}
                                        alt="Authority Building & Quality Backlinks"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Right Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-2xl md:text-3xl font-extrabold text-[#020202] mb-6">
                                        Authority Building & <span className="text-[#25baff]">Quality Backlinks</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        Building strong backlinks is essential for improving search engine rankings and increasing domain authority. A well-planned link-building strategy helps establish your website as a credible and trusted source within your industry.

                                        <br />Our approach focuses on acquiring high-quality, relevant backlinks from authoritative websites. Through strategic outreach, industry collaborations, guest contributions, and content-driven campaigns, we create natural link opportunities that strengthen your online presence.

                                        <br />We prioritize quality over quantity, ensuring every backlink aligns with your niche and adds genuine value to your website. This ethical and long-term strategy enhances search engine trust, improves rankings, and positions your business as a reliable authority in your market.
                                    </p>

                                </div>
                            </div>
                        </section>



                        {/* Performance Tracking & SEO Reporting*/}
                        <section className="py-15 px-6" ref={addSectionRef}>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* left Content */}
                                <div>
                                    <h2 className="gsap-item relative inline-block text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                                        Performance Tracking <span className="text-[#25baff]">& SEO Reporting</span>
                                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                                    </h2>

                                    <p className="gsap-item text-gray-600 leading-relaxed mb-6">
                                        Measuring results is a critical part of any successful SEO strategy. Without accurate tracking and reporting, it’s impossible to understand what’s working and where improvements are needed.

                                        <br />Our reporting process uses advanced analytics tools to monitor keyword rankings, organic traffic growth, user engagement, and conversion performance. We carefully analyze important metrics such as click-through rates, bounce rates, backlink quality, and overall search visibility.

                                        <br />Through detailed monthly reports and performance insights, you gain a clear understanding of your campaign progress. This data-driven approach allows for continuous optimization, helping your business adapt to search engine updates and market trends.

                                        <br />With transparent reporting and strategic analysis, we ensure your SEO investment delivers measurable growth and long-term online success.
                                    </p>
                                </div>

                                {/* right Image */}
                                <div className="gsap-item">
                                    <img
                                        src={Tracking}
                                        alt="Performance Tracking & SEO Reporting"
                                        className="rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </section>

                    </div>
                </section >

                <section className="py-5 sm:py-10 lg:py-12 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-[#0b3253] mb-6">
                            Our SEO plans
                        </h2>

                        {/* CARDS Basic */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
                            <div className="border border-[#25baff] rounded-xl">
                                <h2 className="font-bold text-2xl text-[#25baff] mt-4">
                                    BASIC
                                </h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#52CC55] pr-1 align-top">
                                            $
                                        </span>
                                        <span className="text-6xl font-bold text-[#52CC55]">
                                            500
                                        </span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>No. of Keywords – 30</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Backlinks (per month) – 300</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Target Pages Optimized – Up to 10</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-lg">
                                            <HiMiniXMark />
                                        </span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-lg">
                                            <HiMiniXMark />
                                        </span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-5 rounded-b-xl">
                                    <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
                                        Start Today
                                    </button>
                                </div>
                            </div>


                            {/* Card Silver */}
                            <div className="border border-[#25baff] rounded-xl">
                                <h2 className="font-bold text-2xl text-[#25baff] mt-4">
                                    SILVER
                                </h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#555555] pr-1 align-top">
                                            $
                                        </span>
                                        <span className="text-6xl font-bold text-[#555555]">
                                            800
                                        </span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>No. of Keywords – 40</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Backlinks (per month) – 400</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Target Pages Optimized – Up to 15</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-lg">
                                            <HiMiniXMark />
                                        </span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-5 rounded-b-xl">
                                    <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
                                        Start Today
                                    </button>
                                </div>
                            </div>


                            {/* Card Gold */}
                            <div className="border border-[#25baff] rounded-xl">
                                <div className="rounded-t-xl overflow-hidden">
                                    <div className="bg-[#25baff] py-4 text-center relative">
                                        <h2 className="text-2xl font-bold text-white tracking-wide">
                                            GOLD
                                        </h2>

                                        {/* Perfect Corner Ribbon */}
                                        <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
                                            <div
                                                className="absolute top-5 right-[-35px] rotate-45 bg-[#a8d97c]
 text-white text-xs font-bold py-1 w-40 text-center shadow-md"
                                            >
                                                POPULAR
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#FFC107] pr-1 align-top">
                                            $
                                        </span>
                                        <span className="text-6xl font-bold text-[#FFC107]">
                                            1000
                                        </span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>No. of Keywords – 50</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Backlinks (per month) – 600</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Target Pages Optimized – Up to 25</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-6 rounded-b-xl">
                                    <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-[#25baff] text-white hover:bg-white hover:text-black cursor-pointer">
                                        Start Today
                                    </button>
                                </div>
                            </div>


                            {/* Card Premium */}
                            <div className="border border-[#25baff] rounded-xl">
                                <h2 className="font-bold text-2xl text-[#25baff] mt-4">
                                    PREMIUM
                                </h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#607AFE] pr-1 align-top">
                                            $
                                        </span>
                                        <span className="text-6xl font-bold text-[#607AFE]">
                                            2000
                                        </span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>No. of Keywords – 100</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Backlinks (per month) – 1000</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Target Pages Optimized – Up to 40</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm">
                                            <FaCheck />
                                        </span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-5 rounded-b-xl">
                                    <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
                                        Start Today
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* =================  CTA ================= */}
                <section
                    ref={addSectionRef}
                    className="relative overflow-hidden py-24 px-6"
                    style={{ backgroundColor: "#020202" }}
                >
                    {/* Animated Gradient Glow */}
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%), radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)]  animate-pulseSlow"
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

                    {/* CONTENT */}
                    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                        <h2 className="gsap-item text-white text-3xl md:text-4xl lg:text-3xl font-extrabold leading-tight max-w-4xl">
                            Schedule Your Free Digital Strategy Session
                        </h2>

                        {/* BUTTON */}
                        <button
                            className="bg-[#25baff] text-[#020202] hover:bg-[#a8d97c] px-6 py-3 text-sm md:text-base font-semibold rounded-full shadow-md hover: cursor-pointer hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                        >
                            Contact Now
                        </button>
                    </div>
                </section>


                {/* =================  FAQS ================= */}
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
                                    className="gsap-item bg-white border border-gray-200 rounded-2xl shadow-lg 
                                    shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => {
                                            const el = faqRefs.current[index];
                                            const content = el.querySelector(".faq-content");

                                            if (activeFaq === index) {
                                                gsap.to(content, {
                                                    height: 0,
                                                    opacity: 0,
                                                    duration: 0.35,
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
                                                        duration: 0.35,
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
                                        className="w-full flex items-center justify-between
            px-6 py-5 text-left font-semibold text-[#020202]"
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
                                            <FiPlus className="text-gray-600 text-xl" />
                                        )}
                                    </button>

                                    {/* Answer */}
                                    <div className="faq-content px-6 overflow-hidden h-0 opacity-0">
                                        <p className="pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}

export default SmallBusinessSeo;
