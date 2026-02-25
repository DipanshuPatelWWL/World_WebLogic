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

import Banner from "../../../assets/services/appStoreOptimization/banner.avif";
import Img1 from "../../../assets/services/XMarketing/img1.avif";
import Img2 from "../../../assets/services/XMarketing/img2.avif";
import Img3 from "../../../assets/services/XMarketing/img3.avif";
import Img4 from "../../../assets/services/XMarketing/img4.avif";
import Img5 from "../../../assets/services/XMarketing/img5.avif";
import Img6 from "../../../assets/services/XMarketing/img6.avif";
import Img7 from "../../../assets/services/ppc/img2.avif";
import Img8 from "../../../assets/services/XMarketing/img2.avif";

gsap.registerPlugin(ScrollTrigger);

const XMarketing = () => {
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


    const xMarketing = [
        {
            title: "Brand Discovery & Audience Intelligence",
            text: "We begin by understanding your brand voice, business objectives, and target audience on X. Our team researches your ideal followers, their interests, behaviors, trending topics, and engagement patterns. We also analyze competitor campaigns, hashtags, and messaging strategies to identify gaps and opportunities. This insight-driven approach ensures your campaigns connect with the right audience and stand out in fast-moving X conversations.",
            image: Img3,
        },
        {
            title: "Strategic X Ads Roadmap & Funnel Structuring",
            text: "Based on research insights, we design a tailored X advertising strategy aligned with your business goals. Whether your objective is brand awareness, website traffic, lead generation, app installs, or conversions, we create a structured funnel that guides users from discovery to action. Each campaign stage is optimized to build trust, increase engagement, and drive measurable results.",
            image: Img4,
        },
        {
            title: "Scroll-Stopping Creatives & High-Impact Ad Copy",
            text: "Our creative team develops attention-grabbing visuals, compelling ad formats, and powerful copy tailored for X’s fast-scrolling environment. We craft engaging headlines, persuasive messaging, and strong calls-to-action that encourage users to interact, click, and convert. Multiple creative variations are tested to identify what resonates best with your audience and maximizes engagement.",
            image: Img5,
        },
        {
            title: "Advanced Campaign Setup & Precision Targeting",
            text: "We set up and configure campaigns using X Ads Manager with precise audience targeting options, including interest targeting, keyword targeting, follower targeting, custom audiences, and retargeting. Our team integrates X Pixel and conversion tracking tools to collect accurate performance data. This ensures your ads reach highly relevant users who are most likely to engage and convert.",
            image: Img6,
        },
        {
            title: "Performance Monitoring & Continuous Optimization",
            text: "Once your campaigns are live, we closely monitor key performance metrics such as engagement rate, click-through rate (CTR), cost per click (CPC), conversions, and return on ad spend (ROAS). We continuously optimize targeting, creatives, bidding strategies, and placements. Through ongoing A/B testing and performance analysis, we refine campaigns to achieve maximum efficiency and ROI.",
            image: Img7,
        },
        {
            title: "Detailed Reporting & Scalable Campaign Growth",
            text: "We provide transparent performance reports with clear insights, analytics, and actionable recommendations. Our team identifies high-performing campaigns and scales them strategically to increase reach, engagement, and conversions. This data-driven scaling approach helps your brand grow consistently, strengthen visibility, and achieve long-term success on X.",
            image: Img8,
        },
    ];

    const faqs = [
        {
            question: "What is X advertising?",
            answer:
                "X advertising is a digital marketing strategy that promotes your business using paid ads on the X platform. These ads help increase brand awareness, drive website traffic, generate leads, and boost conversions by reaching highly relevant audiences based on interests, keywords, and follower behavior.",
        },
        {
            question: "Why should businesses use X advertising?",
            answer:
                "X is a real-time platform where users actively engage with trends, brands, and conversations. Advertising on X helps businesses connect with their target audience instantly, increase visibility, build brand authority, and drive measurable results through highly targeted campaigns.",
        },
        {
            question: "How much budget is required to start X ads?",
            answer:
                "You can start X advertising with a flexible budget based on your business goals. Many businesses begin with a small daily budget to test performance and gradually scale campaigns as they generate positive engagement, leads, and conversions.",
        },
        {
            question: "How quickly can I see results from X campaigns?",
            answer:
                "X campaigns can start generating impressions, clicks, and engagement within the first few days. However, consistent leads and optimal performance typically improve over 2 to 4 weeks as campaigns are tested, optimized, and refined.",
        },
        {
            question: "Can X ads help generate leads and sales?",
            answer:
                "Yes, X ads are highly effective for lead generation and sales when properly targeted and optimized. With advanced targeting options such as keyword targeting, follower targeting, and retargeting, businesses can reach users who are more likely to convert.",
        },
        {
            question: "How do you target the right audience on X?",
            answer:
                "We use advanced targeting options including interests, keywords, location, demographics, follower targeting, and custom audiences. This ensures your ads reach the most relevant users who are likely to engage with your business and take action.",
        },
        {
            question: "Do you provide campaign performance reports?",
            answer:
                "Yes, we provide detailed and transparent reports that include key metrics such as impressions, engagement rate, clicks, conversions, and return on investment. These insights help track performance and guide future optimization strategies.",
        },
        {
            question: "Is X advertising suitable for small businesses?",
            answer:
                "Yes, X advertising is ideal for businesses of all sizes, including startups and small businesses. Its flexible budget options and precise targeting allow smaller brands to compete effectively and grow their online presence.",
        },
        {
            question: "Why should I choose your X advertising services?",
            answer:
                "Our team creates data-driven X advertising campaigns with strategic planning, high-converting creatives, precise targeting, and continuous optimization. We focus on delivering measurable results, increasing engagement, and helping your business achieve long-term growth.",
        },
    ];

    const accordionData = [
        {
            title: "Strategic X Advertising Planning & Expert Management",
            content:
                "A professional X advertising agency creates a customized strategy aligned with your business objectives. Our experts understand X’s algorithm, audience behavior, and ad formats to build campaigns that maximize visibility, engagement, and conversions. Every campaign is carefully planned, executed, and optimized to deliver measurable and scalable results.",
        },
        {
            title: "Dedicated X Ads Specialists with Platform Expertise",
            content:
                "Our experienced X advertising specialists manage your campaigns with precision and expertise. From audience research and creative development to campaign setup and optimization, we ensure every element is designed to achieve maximum performance and engagement.",
        },
        {
            title: "Advanced Targeting for High-Quality Leads and Conversions",
            content:
                "We use powerful targeting options such as keyword targeting, follower targeting, interest targeting, and retargeting to reach users who are most likely to convert. This ensures your ads connect with highly relevant audiences, resulting in better lead quality, increased conversions, and improved return on investment.",
        },
        {
            title: "Time-Saving Campaign Management with Maximum Efficiency",
            content:
                "Managing X campaigns requires constant monitoring, creative testing, and performance optimization. Our team handles the entire process, allowing you to focus on your business while we ensure your campaigns run efficiently and deliver consistent results.",
        },
        {
            title: "Continuous Optimization, Transparent Reporting & Scalable Growth",
            content:
                "We continuously monitor campaign performance and optimize targeting, creatives, and bidding strategies to improve results. Our transparent reports provide clear insights into engagement, clicks, conversions, and ROI, helping you scale successful campaigns and achieve long-term business growth.",
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
                    <p className="mt-6 text-lg text-gray-300">X Marketing</p>
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
                        <span className="text-[#25baff]"> X Advertising?</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        X Advertising is a powerful digital marketing strategy that allows businesses to promote their products and services directly to highly relevant audiences on the X platform. With millions of active users engaging in real-time conversations, X provides a unique opportunity for brands to increase visibility, drive targeted traffic, generate quality leads, and boost conversions through strategically managed advertising campaigns.
                    </p>

                    <p className="font-bold text-lg mb-2">
                        Key advantages of X advertising services include:
                    </p>

                    <ul className="text-gray-900 leading-relaxed ml-6 mb-6 list-disc space-y-2">
                        <li>
                            Highly precise targeting based on interests, keywords, followers, and user behavior
                        </li>
                        <li>
                            Increased brand visibility through promoted posts, trends, and engagement-driven ads
                        </li>
                        <li>
                            Real-time engagement with audiences actively participating in conversations
                        </li>
                        <li>
                            Cost-effective campaigns with measurable and scalable performance
                        </li>
                        <li>
                            Consistent generation of qualified leads, website traffic, and conversions
                        </li>
                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="X Advertising Services"
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
                            How X Advertising Helps You Generate High-Quality Leads
                        </h2>

                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-5xl mx-auto">
                            X advertising allows businesses to reach highly relevant audiences through advanced targeting options such as keywords, interests, and follower-based targeting. By leveraging real-time user engagement, strategic ad creatives, and data-driven optimization, businesses can attract qualified prospects who are more likely to convert. A well-executed X advertising strategy increases brand visibility, drives targeted traffic, and generates consistent, high-quality leads that support long-term business growth.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {[
                                {
                                    icon: FaBullseye,
                                    head: "Precision Keyword & Follower Targeting",
                                    text: "X allows highly precise targeting using keywords, interests, follower targeting, and user behavior. This ensures your ads reach users who are already interested in similar products or actively engaging in relevant conversations.",
                                },
                                {
                                    icon: FaEye,
                                    head: "Real-Time Brand Visibility",
                                    text: "Your ads appear directly in user feeds and trending conversations, allowing your brand to gain instant visibility. This real-time exposure helps you connect with your audience when their attention is most active.",
                                },
                                {
                                    icon: FaUserCheck,
                                    head: "High-Intent Lead Generation",
                                    text: "Reach users who are actively searching, engaging, or following related topics. This increases conversion rates and helps generate high-quality leads that are more likely to become paying customers.",
                                },
                                {
                                    icon: FaPaintBrush,
                                    head: "Engaging Creatives Built for X",
                                    text: "We design scroll-stopping visuals and compelling ad copy optimized specifically for X’s fast-moving environment, encouraging users to click, engage, and take action.",
                                },
                                {
                                    icon: FaWallet,
                                    head: "Cost-Effective & Scalable Campaigns",
                                    text: "X advertising allows flexible budget control, ensuring maximum results from your investment. Campaigns can be scaled based on performance to increase reach, leads, and conversions efficiently.",
                                },
                                {
                                    icon: FaChartLine,
                                    head: "Continuous Optimization & Performance Growth",
                                    text: "We continuously monitor engagement, clicks, conversions, and ROI. Through ongoing testing and optimization, we improve campaign performance and maximize your return on investment.",
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
                            <span className="text-[#25baff]"> X Marketing Agency</span>
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
                        <span className="text-[#25baff]"> X Advertising Agency</span>
                    </h2>

                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        Choosing the right X advertising agency is critical to reaching the right audience, increasing real-time engagement, and generating high-quality leads. Our team uses advanced targeting, strategic campaign planning, and continuous optimization to deliver measurable results. We focus on maximizing your return on investment, strengthening your brand presence, and driving consistent, scalable business growth through data-driven X advertising strategies.
                    </p>
                </div>


                {/* CARDS CONTAINER */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {[
                            {
                                head: "Data-Driven X Advertising Strategy",
                                text: "We create customized X advertising strategies aligned with your business goals. Our campaigns are designed to reach the right audience, increase engagement, and drive measurable conversions using proven, data-driven methods.",
                            },
                            {
                                head: "Advanced Keyword & Follower Targeting",
                                text: "We use X’s powerful targeting features, including keyword targeting, follower targeting, interest targeting, and custom audiences, to ensure your ads reach users who are most likely to engage and convert.",
                            },
                            {
                                head: "Transparent Reporting & Performance Insights",
                                text: "We provide detailed campaign reports with clear insights on impressions, engagement, clicks, conversions, and ROI. This transparency helps you understand performance and make confident, informed decisions.",
                            },
                            {
                                head: "Certified X Advertising Specialists",
                                text: "Our experienced X advertising experts understand platform algorithms, ad formats, and best practices. We manage your campaigns professionally to ensure consistent performance and long-term success.",
                            },
                            {
                                head: "Continuous Optimization for Maximum ROI",
                                text: "We continuously monitor campaign performance, test creatives, refine targeting, and optimize bidding strategies. This ensures improved efficiency, lower costs, and maximum return on your advertising investment.",
                            },
                            {
                                head: "Focused on Quality Leads & Business Growth",
                                text: "Our goal is to generate high-quality leads and real business results. We focus on attracting the right audience, increasing conversions, and helping your brand achieve scalable and sustainable growth.",
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
                            <span className="text-white"> X Advertising Services</span>
                        </h2>

                    </div>


                    {/* TESTIMONIAL CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {[
                            {
                                text: "Their X advertising strategy transformed our lead generation. With precise keyword and follower targeting, we started receiving highly qualified inquiries and saw a noticeable increase in conversions within the first month.",
                                name: "Daniel",
                                role: "Business Owner",
                            },
                            {
                                text: "The team created and optimized campaigns that significantly improved our brand visibility on X. Engagement increased, traffic grew steadily, and our overall return on investment exceeded expectations.",
                                name: "Shlok Shukla",
                                role: "Startup Founder",
                            },
                            {
                                text: "Their expertise in X Ads helped us scale faster than expected. From creative design to targeting and optimization, everything was handled professionally and delivered consistent, measurable results.",
                                name: "Daniel Joseph",
                                role: "Marketing Manager",
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
                        Our X Advertising Strategic
                        <span className="text-[#25baff]"> Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our proven X advertising process focuses on advanced audience targeting, scroll-stopping creative development, precise campaign execution, and continuous optimization. We leverage X Ads Manager, keyword targeting, and real-time performance data to generate high-quality leads, increase conversions, and drive scalable business growth.
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

                        {xMarketing.map((item, index) => (

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

export default XMarketing;