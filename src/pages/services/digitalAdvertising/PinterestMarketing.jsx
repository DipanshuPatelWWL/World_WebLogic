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
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Banner from "../../../assets/services/PinterestMarketing/banner.avif";
import Img1 from "../../../assets/services/PinterestMarketing/img1.avif";
import Img2 from "../../../assets/services/PinterestMarketing/img2.avif";
import Img3 from "../../../assets/services/PinterestMarketing/img3.avif";
import Img4 from "../../../assets/services/PinterestMarketing/img4.avif";
import Img5 from "../../../assets/services/PinterestMarketing/img5.avif";
import Img6 from "../../../assets/services/PinterestMarketing/img6.avif";
import Img7 from "../../../assets/services/PinterestMarketing/img7.avif";
import Img8 from "../../../assets/services/PinterestMarketing/img8.avif";

gsap.registerPlugin(ScrollTrigger);

const PinterestMarketing = () => {
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


    const pinterestMarketing = [
        {
            title: "Brand Visual Identity & Audience Discovery",
            text: "We examine your brand aesthetics, product categories, and target demographics on Pinterest. Our specialists pinpoint user interests, search behaviors, lifestyle preferences, and pinning patterns. We assess competitor boards, pin strategies, and visual trends to identify distinctive opportunities for your brand to inspire and captivate users.",
            image: Img3,
        },
        {
            title: "Tailored Pinterest Ads Plan & Traffic Funnel Creation",
            text: "Drawing from audience data, we formulate a bespoke Pinterest advertising blueprint centered on objectives such as inspiration, traffic driving, e-commerce sales, or app downloads. We construct a visual journey funnel that guides users from discovery to purchase, making each pin interaction more engaging and conversion-oriented.",
            image: Img4,
        },
        {
            title: "Eye-Catching Pin Design & Visual Storytelling",
            text: "Our design experts produce stunning pin graphics, rich pins, video pins, and captivating descriptions optimized for Pinterest's visual platform. We prioritize aesthetic appeal, trending styles, and compelling narratives. Multiple visual concepts are crafted and evaluated to find what best inspires saves, clicks, and conversions from your audience.",
            image: Img5,
        },
        {
            title: "Smart Campaign Setup & Interest-Based Targeting",
            text: "We launch campaigns through Pinterest Ads Manager utilizing targeted interests, keywords, demographics, and audience matching. Our configuration incorporates conversion tracking and rich pin features for accurate measurement. This visual-centric targeting guarantees your pins appear in relevant searches and feeds of inspired users.",
            image: Img6,
        },
        {
            title: "Real-Time Monitoring & Visual Performance Tuning",
            text: "We monitor key visual metrics like save rates, click-throughs, closeup rates, traffic quality, and conversion value. Our team adjusts visual elements, targeting criteria, and bid strategies. Through consistent A/B testing and trend analysis, we refine pins to boost engagement and drive better results.",
            image: Img7,
        },
        {
            title: "In-Depth Analytics & Visual Growth Expansion",
            text: "We supply detailed visual performance analytics with trend insights, ROI breakdowns, and optimization suggestions. Our specialists spot trending opportunities and expand successful visual campaigns strategically. This inspiration-driven method fosters ongoing traffic growth, better conversions, and lasting visual presence on Pinterest.",
            image: Img8,
        },
    ];

    const faqs = [
        {
            question: "What is Pinterest marketing?",
            answer:
                "Pinterest marketing uses the visual discovery platform to showcase products, inspire ideas, and drive traffic through eye-catching pins, boards, and targeted ads, ideal for lifestyle, e-commerce, and creative brands.",
        },
        {
            question: "How does Pinterest marketing help e-commerce businesses?",
            answer:
                "Pinterest reaches users in planning and discovery mode, driving high-intent traffic to websites. Its visual nature showcases products effectively, leading to increased saves, clicks, and purchases through shoppable pins.",
        },
        {
            question: "What's the starting budget for Pinterest ads?",
            answer:
                "Pinterest ads are flexible, allowing starts with small daily budgets. For effective reach, we suggest beginning with test campaigns and scaling based on engagement and traffic performance.",
        },
        {
            question: "How soon do Pinterest campaigns show results?",
            answer:
                "Initial traffic and engagement can build quickly, but optimal performance for saves, clicks, and conversions usually develops over 3-6 weeks as pins gain momentum and algorithms optimize.",
        },
        {
            question: "Can Pinterest marketing drive website traffic?",
            answer:
                "Yes, Pinterest is excellent for driving qualified traffic, with users often in research mode. Optimized pins and ads lead to high click-through rates and valuable website visits.",
        },
        {
            question: "How is targeting done on Pinterest?",
            answer:
                "We target based on user interests, search keywords, demographics, and behaviors, ensuring pins appear in relevant feeds and searches for maximum discovery and engagement.",
        },
        {
            question: "What kind of reporting is provided for Pinterest campaigns?",
            answer:
                "We deliver comprehensive reports covering pin performance, traffic metrics, conversion tracking, audience insights, and ROI to measure success and guide improvements.",
        },
        {
            question: "Is Pinterest marketing good for new brands?",
            answer:
                "Definitely, Pinterest helps emerging brands gain visibility through visual content, build audiences organically, and compete with established names in discovery-based searches.",
        },
        {
            question: "Why select your Pinterest marketing services?",
            answer:
                "Our team excels in visual strategies, creating optimized pins and campaigns that drive traffic, boost sales, and build lasting brand inspiration on Pinterest.",
        },
    ];

    const accordionData = [
        {
            title: "Specialized Pinterest Strategy & Visual Management",
            content:
                "A dedicated Pinterest agency develops visual-first strategies matched to your brand. Our experts master Pinterest's discovery algorithm, pin optimization, and ad formats to create campaigns that inspire action and deliver traffic.",
        },
        {
            title: "Team of Visual Marketing Experts",
            content:
                "Our Pinterest specialists manage pin creation, board strategy, targeting, and optimization, focusing on visual appeal to drive discovery, saves, and valuable website traffic.",
        },
        {
            title: "Improved Traffic Quality & Conversion Optimization",
            content:
                "Through interest targeting and rich pins, we attract inspired users ready to engage. This leads to better traffic quality, higher engagement, and stronger conversion performance.",
        },
        {
            title: "Streamlined Management & Resource Efficiency",
            content:
                "Pinterest requires consistent visual updates and monitoring. Our agency handles operations, freeing your team to focus on business while maintaining campaign momentum.",
        },
        {
            title: "Performance-Driven Refinement & Visual Analytics",
            content:
                "We constantly optimize based on visual metrics and provide clear reports on traffic, engagement, and conversions to inform decisions and scale success.",
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
                    <p className="mt-6 text-lg text-gray-300">Pinterest Marketing</p>
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
                        <span className="text-[#25baff]"> Pinterest Marketing?</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        Pinterest Marketing is a visual discovery approach that harnesses Pinterest's platform to inspire users, showcase ideas, and drive engagement through captivating pins and targeted promotions. It empowers brands to reach audiences in inspiration mode, particularly in lifestyle, home, fashion, and DIY categories, leading to increased traffic and conversions.
                    </p>

                    <p className="font-bold text-lg mb-2">
                        Key advantages of Pinterest marketing services include:
                    </p>

                    <ul className="text-gray-900 leading-relaxed ml-6 mb-6 list-disc space-y-2">
                        <li>
                            Visual discovery driving high-intent user engagement
                        </li>
                        <li>
                            Strong website traffic from inspired pinners
                        </li>
                        <li>
                            Long-term content visibility through saves and repins
                        </li>
                        <li>
                            Effective targeting by interests and search terms
                        </li>
                        <li>
                            Boosted e-commerce sales via shoppable features
                        </li>
                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="Pinterest Marketing Services"
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
                            How Pinterest Marketing Helps You Generate High-Quality Leads
                        </h2>

                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-5xl mx-auto">
                            Pinterest marketing leverages visual search and discovery to connect with users planning projects or purchases. Through optimized pins, promoted content, and interest targeting, businesses can drive inspired traffic and leads. A well-planned Pinterest strategy builds visual appeal, encourages saves and shares, and generates qualified leads for ongoing business success.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {[
                                {
                                    icon: FaBullseye,
                                    head: "Interest & Keyword Targeting",
                                    text: "Pinterest allows targeting by search terms, interests, and behaviors, reaching users actively discovering related content and ideas.",
                                },
                                {
                                    icon: FaEye,
                                    head: "Visual Discovery Exposure",
                                    text: "Pins appear in search results and feeds, capturing attention during users' inspiration-seeking moments for maximum visibility.",
                                },
                                {
                                    icon: FaUserCheck,
                                    head: "Inspired Lead Acquisition",
                                    text: "Attract users in planning mode, creating leads with high intent for products, ideas, or services shown visually.",
                                },
                                {
                                    icon: FaPaintBrush,
                                    head: "Creative Pin Development",
                                    text: "We design visually stunning pins with trends and aesthetics that encourage saves, clicks, and user interaction.",
                                },
                                {
                                    icon: FaWallet,
                                    head: "Cost-Effective Promotion",
                                    text: "Manage ad spend while reaching inspired audiences, delivering value through traffic that converts efficiently.",
                                },
                                {
                                    icon: FaChartLine,
                                    head: "Analytics-Based Improvement",
                                    text: "We track visual performance and refine strategies to enhance traffic quality, engagement, and lead generation.",
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
                            <span className="text-[#25baff]"> Pinterest Marketing Agency</span>
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
                        <span className="text-[#25baff]"> Pinterest Marketing Agency</span>
                    </h2>

                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        Choosing the right Pinterest marketing partner is essential for inspiring audiences, driving visual engagement, and generating quality traffic. Our team crafts visual strategies, creative pins, and optimized campaigns to deliver measurable value and support your growth goals.
                    </p>
                </div>


                {/* CARDS CONTAINER */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {[
                            {
                                head: "Visual-Centric Pinterest Strategies",
                                text: "We create inspiration-focused strategies tailored to visual goals, emphasizing discovery and driving meaningful user interactions.",
                            },
                            {
                                head: "Precise Interest Targeting",
                                text: "Leveraging Pinterest's search data for targeting by keywords, interests, and demographics to reach inspired pinners effectively.",
                            },
                            {
                                head: "Detailed Analytics & Insights",
                                text: "In-depth reporting on visual performance, traffic quality, and conversion impact to inform decisions and prove value.",
                            },
                            {
                                head: "Seasoned Visual Marketing Experts",
                                text: "Our team grasps Pinterest's discovery mechanics and best practices for campaigns that captivate in visual contexts.",
                            },
                            {
                                head: "Ongoing Visual Refinement",
                                text: "Constant campaign tuning to boost visual appeal, lower costs, and enhance overall performance.",
                            },
                            {
                                head: "Focus on Traffic & Growth",
                                text: "We emphasize driving qualified traffic and building visual audiences that support long-term success.",
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
                            <span className="text-white"> Pinterest Marketing Services</span>
                        </h2>

                    </div>


                    {/* TESTIMONIAL CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {[
                            {
                                text: "Their Pinterest approach transformed our visual presence. We saw surges in traffic from inspired users and notable sales increases within weeks.",
                                name: "Laura Thompson",
                                role: "E-commerce Owner",
                            },
                            {
                                text: "The creative pins boosted our brand discovery dramatically. User engagement soared, bringing steady visitors and new customers.",
                                name: "Alex Rivera",
                                role: "Content Creator",
                            },
                            {
                                text: "Professional handling of our Pinterest account yielded impressive results. From design to promotion, it was visually perfect.",
                                name: "Jordan Lee",
                                role: "Brand Manager",
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

            <section className="relative pt-20 px-6 bg-gradient-to-br from-white via-[#f8fcff] to-[#eef7ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25baff]/10 blur-[120px] rounded-full pointer-events-none"></div>


                {/* HEADER */}
                <div className="text-center mb-10 relative z-10">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202] mb-4">
                        Our Pinterest Marketing Strategic
                        <span className="text-[#25baff]"> Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our methodical Pinterest marketing process highlights visual optimization, interest targeting, pin creation, and continuous refinement. We employ Pinterest's features for trend analysis, content promotion, and performance metrics to inspire users and drive visual success.
                    </p>

                </div>


                {/* SLIDER CONTAINER - No controls at all */}
                <div className="max-w-7xl mx-auto relative z-10">

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        speed={900}
                        loop={true}
                        className="!pb-20"
                    >

                        {pinterestMarketing.map((item, index) => (

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

                </div>

            </section>

            {/* FAQ */}
            <section ref={addSectionRef} className="bg-gray-50 pb-15 px-6">
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

export default PinterestMarketing;