import { useLayoutEffect, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
    FaBullseye,
    FaEye,
    FaUserCheck,
    FaPaintBrush,
    FaWallet,
    FaChartLine
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "../../../assets/services/LinkedInMarketing/Banner.avif";
import Img1 from "../../../assets/services/LinkedInMarketing/img1.avif";
import Img2 from "../../../assets/services/LinkedInMarketing/img2.avif";
import Img3 from "../../../assets/services/LinkedInMarketing/img3.avif";
import Img4 from "../../../assets/services/LinkedInMarketing/img4.avif";
import Img5 from "../../../assets/services/LinkedInMarketing/img5.avif";
import Img6 from "../../../assets/services/LinkedInMarketing/img6.avif";
import Img7 from "../../../assets/services/LinkedInMarketing/img7.avif";
import Img8 from "../../../assets/services/LinkedInMarketing/img8.avif";

gsap.registerPlugin(ScrollTrigger);

const LinkedInMarketing = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);

    const [activeFaq, setActiveFaq] = useState(null);
    const [openIndex, setOpenIndex] = useState(0);
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


    const linkedinMarketing = [
        {
            title: "Business Profiling & Professional Audience Research",
            text: "We analyze your company profile, industry niche, and target professionals on LinkedIn. Our experts identify key decision-makers, job titles, company sizes, industries, and professional behaviors. We evaluate competitor LinkedIn strategies, content approaches, and engagement tactics to discover unique opportunities for your brand to establish authority and connect meaningfully.",
            image: Img3,
        },
        {
            title: "Customized LinkedIn Ads Strategy & Lead Funnel Development",
            text: "Using audience insights, we craft a personalized LinkedIn advertising plan focused on your goals like thought leadership, B2B lead generation, talent acquisition, or event promotion. We design a multi-stage funnel that nurtures prospects from awareness to decision-making, ensuring each interaction builds professional trust and drives qualified engagements.",
            image: Img4,
        },
        {
            title: "Professional Content Creation & Ad Messaging",
            text: "Our content specialists develop sophisticated ad creatives, insightful whitepapers, professional videos, and compelling copy tailored for LinkedIn's business-oriented users. We emphasize value-driven messaging, industry expertise, and clear professional benefits. Various content formats are created and tested to determine what best engages your target professionals and encourages meaningful interactions.",
            image: Img5,
        },
        {
            title: "Sophisticated Campaign Configuration & B2B Targeting",
            text: "We implement campaigns via LinkedIn Campaign Manager using advanced targeting like job titles, skills, company names, industries, and Matched Audiences. Our setup includes LinkedIn Insight Tag for precise tracking and retargeting. This professional-grade targeting ensures your message reaches influential decision-makers and key stakeholders in your industry.",
            image: Img6,
        },
        {
            title: "Ongoing Campaign Analysis & Professional Optimization",
            text: "We track essential B2B metrics including lead quality, engagement depth, cost per lead (CPL), conversion rates, and pipeline value. Our specialists refine targeting parameters, content variations, and bidding approaches. Through systematic testing and professional insights, we enhance campaign effectiveness while maintaining a sophisticated brand presence.",
            image: Img7,
        },
        {
            title: "Executive Reporting & Strategic Scaling",
            text: "We deliver comprehensive reports with executive-level insights, ROI analysis, and strategic recommendations. Our team identifies high-value opportunities and scales successful elements methodically. This professional approach supports sustained B2B growth, stronger industry positioning, and measurable business outcomes on LinkedIn.",
            image: Img8,
        },
    ];

    const faqs = [
        {
            question: "What is LinkedIn marketing?",
            answer:
                "LinkedIn marketing involves promoting your business on the world's largest professional network to build brand authority, generate B2B leads, recruit talent, and establish thought leadership through targeted content and advertising.",
        },
        {
            question: "How does LinkedIn marketing benefit B2B companies?",
            answer:
                "LinkedIn provides access to decision-makers and professionals, enabling precise targeting by job title, industry, and company size. It helps build credible relationships, generate qualified leads, and drive business growth through professional networking.",
        },
        {
            question: "What budget is needed for LinkedIn ads?",
            answer:
                "LinkedIn ads can start with modest budgets, but B2B campaigns often require higher investment for quality leads. We recommend starting with testing budgets and scaling based on performance metrics and lead quality.",
        },
        {
            question: "When can I expect results from LinkedIn campaigns?",
            answer:
                "Initial engagement can appear quickly, but meaningful B2B leads and conversions typically develop over 4-8 weeks as campaigns optimize and professional relationships build through consistent targeting.",
        },
        {
            question: "Does LinkedIn marketing produce quality B2B leads?",
            answer:
                "Yes, LinkedIn excels at generating high-quality B2B leads due to its professional user base and advanced targeting options that reach decision-makers ready for business discussions.",
        },
        {
            question: "How do you target audiences on LinkedIn?",
            answer:
                "We use professional criteria including job functions, seniority levels, skills, company names, industries, and professional groups to ensure your content reaches the most relevant business audience.",
        },
        {
            question: "What reporting do you provide for LinkedIn campaigns?",
            answer:
                "We offer detailed analytics including lead demographics, engagement metrics, conversion tracking, cost per lead, and ROI insights to demonstrate campaign value and inform strategic decisions.",
        },
        {
            question: "Is LinkedIn marketing effective for small businesses?",
            answer:
                "Absolutely, LinkedIn helps small businesses establish credibility, connect with enterprise clients, and compete in professional spaces through targeted content and cost-effective advertising options.",
        },
        {
            question: "Why partner with your LinkedIn marketing agency?",
            answer:
                "Our agency specializes in B2B strategies with proven expertise in LinkedIn's professional ecosystem, delivering customized campaigns that build authority, generate qualified leads, and drive measurable business growth.",
        },
    ];

    const accordionData = [
        {
            title: "Expert LinkedIn Strategy Development & Professional Management",
            content:
                "A specialized LinkedIn agency creates tailored B2B strategies aligned with professional objectives. Our experts leverage LinkedIn's algorithm, targeting capabilities, and content formats to ensure campaigns build authority and deliver qualified business opportunities.",
        },
        {
            title: "Access to B2B Marketing Specialists",
            content:
                "Our dedicated LinkedIn specialists handle strategy, content creation, targeting, and optimization. They focus on professional engagement to generate meaningful business connections and high-value opportunities.",
        },
        {
            title: "Superior B2B Lead Quality & Conversion Focus",
            content:
                "Using professional targeting and retargeting, we reach decision-makers effectively. This results in higher-quality leads, stronger business relationships, and improved conversion rates for B2B success.",
        },
        {
            title: "Efficient Management & Time Savings",
            content:
                "LinkedIn campaigns require ongoing professional oversight. Our agency manages everything, allowing you to focus on core business while we maintain campaign efficiency and professional standards.",
        },
        {
            title: "Data-Driven Optimization & Executive Reporting",
            content:
                "We continuously refine campaigns based on professional metrics and provide executive-level reports with insights on lead quality, engagement, and business impact to support informed growth decisions.",
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
                    <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
                    <p className="mt-6 text-lg text-gray-300">LinkedIn Marketing</p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section
                ref={whoRef}
                className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
            >
                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                        What is
                        <span className="text-[#25baff]"> LinkedIn Marketing?</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        LinkedIn Marketing is a sophisticated B2B strategy that leverages the world's largest professional network to build brand authority, connect with decision-makers, and drive business growth. It enables companies to showcase expertise, nurture professional relationships, and achieve targeted outcomes through precise advertising and content distribution.
                    </p>

                    <p className="font-bold text-lg mb-2">
                        Key advantages of LinkedIn marketing services include:
                    </p>

                    <ul className="text-gray-900 leading-relaxed ml-6 mb-6 list-disc space-y-2">
                        <li>
                            Targeted reach to professionals and decision-makers by job title, industry, and company
                        </li>
                        <li>
                            Enhanced thought leadership through professional content and engagement
                        </li>
                        <li>
                            Quality B2B lead generation with high conversion potential
                        </li>
                        <li>
                            Measurable ROI through advanced analytics and tracking
                        </li>
                        <li>
                            Stronger business networks and partnership opportunities
                        </li>
                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="LinkedIn Marketing Services"
                        className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="relative py-28 overflow-hidden">

                {/* Dark gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/90 to-[#020617]/95"></div>

                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#25baff]/10 blur-[160px] rounded-full"></div>

                <div className="relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20 px-6">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            How LinkedIn Marketing Helps You Generate High-Quality Leads
                        </h2>

                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-5xl mx-auto">
                            LinkedIn marketing targets professional audiences through job-based targeting, company insights, and industry-specific content. By combining thought leadership content, precise advertising, and relationship-building tools, businesses can attract high-value B2B prospects. A strategic LinkedIn approach establishes credibility, nurtures professional connections, and generates qualified leads that contribute to sustainable business development.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {[
                                {
                                    icon: FaBullseye,
                                    head: "Professional Job Title & Industry Targeting",
                                    text: "LinkedIn enables precise targeting by job function, seniority, skills, and industries, connecting you with decision-makers who influence purchasing decisions.",
                                },
                                {
                                    icon: FaEye,
                                    head: "Professional Brand Authority Building",
                                    text: "Content and ads position your brand as an industry leader, appearing in professional feeds to build trust and credibility among business audiences.",
                                },
                                {
                                    icon: FaUserCheck,
                                    head: "B2B Lead Generation Excellence",
                                    text: "Attract professionals actively seeking solutions, resulting in higher-quality leads with stronger intent and better conversion potential.",
                                },
                                {
                                    icon: FaPaintBrush,
                                    head: "Sophisticated Content Design",
                                    text: "We create professional-grade content including articles, videos, and infographics optimized for LinkedIn's business-focused environment.",
                                },
                                {
                                    icon: FaWallet,
                                    head: "Investment-Efficient Campaigns",
                                    text: "Control budgets while targeting high-value professionals, ensuring efficient spend that delivers meaningful B2B results and growth.",
                                },
                                {
                                    icon: FaChartLine,
                                    head: "Data-Driven Performance Enhancement",
                                    text: "We analyze professional metrics and optimize campaigns to improve lead quality, engagement, and overall business impact.",
                                },
                            ].map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={index}
                                        ref={(el) => (cardsRef.current[index] = el)}
                                        className="
                    group
                    bg-white/5
                    backdrop-blur-xl
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
                        text-4xl
                        text-[#25baff]
                        mb-6
                        mx-auto
                        transition-all duration-300
                        group-hover:scale-110
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


            {/* Why Hire orm Section */}
            <section className="bg-white py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Why Choose Our
                            <span className="text-[#25baff]"> LinkedIn Marketing Agency</span>
                            <span className="text-black"> for Better Results?</span>
                        </h2>
                        <div className="w-273 h-1 bg-black mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div>
                            <img
                                src={Img2}
                                alt="content marketing"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>

                        {/* Right Accordion */}
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

            {/* audit services  */}
            <section className="relative z-10 py-28 bg-black">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 p-8">
                        6 Reasons to Choose Us as Your
                        <span className="text-[#25baff]"> LinkedIn Marketing Agency</span>
                    </h2>

                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        Selecting the ideal LinkedIn marketing partner is crucial for connecting with professionals, building B2B relationships, and generating quality opportunities. Our team develops targeted strategies, professional content, and optimized campaigns to deliver tangible business value and support your professional growth objectives.
                    </p>
                </div>


                {/* CARDS CONTAINER */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {[
                            {
                                head: "B2B-Focused LinkedIn Strategies",
                                text: "We design professional marketing strategies tailored to B2B goals, focusing on building authority and driving meaningful business connections.",
                            },
                            {
                                head: "Advanced Professional Targeting",
                                text: "Utilizing LinkedIn's rich professional data for targeting by job role, industry, and company to reach key decision-makers effectively.",
                            },
                            {
                                head: "Comprehensive Reporting & Insights",
                                text: "Detailed analytics on professional engagement, lead quality, and business impact to guide strategic decisions and demonstrate value.",
                            },
                            {
                                head: "Experienced B2B Marketing Professionals",
                                text: "Our team understands LinkedIn's professional dynamics and best practices for creating campaigns that resonate in business contexts.",
                            },
                            {
                                head: "Strategic Optimization Techniques",
                                text: "Continuous refinement of campaigns to enhance professional engagement, reduce acquisition costs, and improve overall effectiveness.",
                            },
                            {
                                head: "Emphasis on B2B Growth & Opportunities",
                                text: "We prioritize generating qualified professional leads and fostering business relationships that contribute to long-term success.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="
                    group
                    bg-white/10
                    backdrop-blur-md
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

                    {/* HEADER */}
                    <div className="text-center mb-16">

                        <p className="uppercase tracking-widest text-lg font-bold text-gray-900 mb-3">
                            Client Testimonials
                        </p>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            What Our Clients Say About Our
                            <span className="text-white"> LinkedIn Marketing Services</span>
                        </h2>

                    </div>


                    {/* TESTIMONIAL CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {[
                            {
                                text: "Their LinkedIn strategy revolutionized our B2B lead generation. We connected with key decision-makers and saw a substantial increase in qualified opportunities within months.",
                                name: "Sarah Johnson",
                                role: "CEO",
                            },
                            {
                                text: "The professional campaigns enhanced our industry presence significantly. Engagement with target professionals grew, leading to valuable partnerships and business growth.",
                                name: "Michael Chen",
                                role: "Marketing Director",
                            },
                            {
                                text: "Expert management and optimization of our LinkedIn presence delivered exceptional results. From content to ads, everything was executed with professional excellence.",
                                name: "Emily Rodriguez",
                                role: "Sales Manager",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="
                        group
                        bg-white
                        border border-gray-200
                        rounded-2xl
                        p-10
                        text-center
                        shadow-lg shadow-[#25baff]/10
                        transition-all duration-500
                        hover:-translate-y-3
                        hover:shadow-2xl hover:shadow-[#25baff]/40
                        hover:border-[#25baff]
                    "
                            >

                                {/* QUOTE ICON */}
                                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                                    <RiDoubleQuotesL />
                                </div>


                                {/* TEXT */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    {item.text}
                                </p>


                                {/* NAME */}
                                <h4 className="font-bold text-lg text-[#020202]">
                                    {item.name}
                                </h4>

                                <p className="text-gray-500 text-sm">
                                    {item.role}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ALTERNATE SECTION  */}

            <section className="relative py-28 px-6 bg-gradient-to-br from-white via-[#f8fcff] to-[#eef7ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25baff]/10 blur-[120px] rounded-full pointer-events-none"></div>


                {/* HEADER */}
                <div className="text-center mb-10 relative z-10">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202] mb-4">
                        Our LinkedIn Marketing Strategic
                        <span className="text-[#25baff]"> Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our systematic LinkedIn marketing process emphasizes professional targeting, value-driven content, campaign precision, and ongoing refinement. We utilize LinkedIn's tools for audience insights, content distribution, and performance tracking to create meaningful B2B connections and drive professional success.
                    </p>

                </div>


                {/* SLIDER CONTAINER */}
                <div className="max-w-7xl mx-auto relative z-10">


                    {/* LEFT ARROW */}
                    <button className="
            custom-prev
            absolute left-100 top-1/1 -translate-y-1/2
            z-20
            w-12 h-12
            rounded-full
            bg-white
            border border-gray-200
            shadow-lg
            hover:bg-[#25baff]
            hover:text-white
            transition-all duration-300
            flex items-center justify-center
        ">
                        ←
                    </button>


                    {/* RIGHT ARROW */}
                    <button className="
            custom-next
            absolute right-100 top-1/1 -translate-y-1/2
            z-20
            w-12 h-12
            rounded-full
            bg-white
            border border-gray-200
            shadow-lg
            hover:bg-[#25baff]
            hover:text-white
            transition-all duration-300
            flex items-center justify-center
        ">
                        →
                    </button>



                    {/* SWIPER */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        speed={900}
                        loop={true}
                        className="!pb-20"
                    >

                        {linkedinMarketing.map((item, index) => (

                            <SwiperSlide key={index}>

                                <div className="
                        group
                        grid md:grid-cols-2 gap-12 items-center
                        bg-white/80 backdrop-blur-xl
                        border border-gray-200
                        rounded-3xl
                        p-8 md:p-12
                        shadow-xl shadow-[#25baff]/10
                        transition-all duration-700
                    ">

                                    {/* Image */}
                                    <div className="relative overflow-hidden rounded-2xl">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-2xl transition-all duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute top-4 left-4 bg-[#25baff] text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                                            Step {index + 1}
                                        </div>

                                    </div>


                                    {/* Content */}
                                    <div>

                                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#020202] mb-4 relative inline-block">

                                            {item.title}

                                            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#25baff] rounded-full"></span>

                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {item.text}
                                        </p>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>


                    {/* PAGINATION */}
                    <div className="custom-pagination flex justify-center items-center gap-4"></div>

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

export default LinkedInMarketing;