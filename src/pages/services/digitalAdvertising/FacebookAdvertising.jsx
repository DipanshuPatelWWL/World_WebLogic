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
import Img1 from "../../../assets/services/FacebookAdvertising/fb.avif";
import Img2 from "../../../assets/services/FacebookAdvertising/img2.avif";
import Img3 from "../../../assets/services/FacebookAdvertising/img3.avif";
import Img4 from "../../../assets/services/FacebookAdvertising/img4.avif";
import Img5 from "../../../assets/services/ppc/img5.avif";
import Img6 from "../../../assets/services/FacebookAdvertising/img6.avif";
import Img7 from "../../../assets/services/ppc/img7.avif";
import Img8 from "../../../assets/services/FacebookAdvertising/img7.jpg";

gsap.registerPlugin(ScrollTrigger);

const FacebookAdvertising = () => {
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


    const facebookAdvertising = [
        {
            title: "Business Analysis & Audience Intelligence",
            text: "We start by conducting a deep analysis of your business model, value proposition, and target market. Our experts identify your ideal customer profiles, buying behavior, demographics, interests, and pain points. We also evaluate your competitors’ advertising strategies, messaging, and positioning to uncover opportunities that give your brand a competitive edge. This research-driven foundation ensures every campaign is built with precision and purpose.",
            image: Img3,
        },
        {
            title: "Strategic Facebook Ads Planning & Funnel Design",
            text: "Based on the research insights, we develop a customized Facebook advertising roadmap aligned with your business objectives. We define clear campaign goals such as brand awareness, traffic generation, lead acquisition, or sales conversions. Our team structures the complete funnel, including awareness, consideration, and conversion stages, ensuring each step moves your audience closer to becoming loyal customers.",
            image: Img4,
        },
        {
            title: "High-Converting Creative Design & Ad Copywriting",
            text: "Our creative specialists craft visually compelling ad creatives, scroll-stopping visuals, and persuasive ad copy designed to capture attention instantly. We focus on emotional triggers, strong calls-to-action, and brand-consistent messaging. Multiple creative variations are developed to test and identify the highest-performing combinations that resonate with your audience and drive engagement.",
            image: Img5,
        },
        {
            title: "Advanced Campaign Setup & Precision Audience Targeting",
            text: "We configure your campaigns using advanced Facebook Ads Manager tools, including custom audiences, lookalike audiences, retargeting segments, and interest-based targeting. Our team ensures your ads reach users who are most likely to convert. We also implement tracking tools such as Facebook Pixel and conversion APIs to collect accurate performance data and improve targeting accuracy.",
            image: Img6,
        },
        {
            title: "Continuous Performance Monitoring & Smart Optimization",
            text: "Once campaigns are live, we continuously monitor key performance metrics such as CTR, CPC, CPA, ROAS, and conversion rates. Our experts optimize audience segments, creatives, placements, and bidding strategies to improve performance. We run A/B tests to identify winning combinations and eliminate underperforming elements, ensuring maximum return on investment.",
            image: Img7,
        },
        {
            title: "Transparent Reporting, Insights & Scalable Growth",
            text: "We provide detailed and easy-to-understand performance reports that highlight campaign success, insights, and growth opportunities. Our team analyzes trends, identifies scalable strategies, and gradually increases budgets on high-performing campaigns. This data-driven scaling approach helps your business generate consistent leads, increase conversions, and achieve long-term sustainable growth.",
            image: Img8,
        },
    ];

    const faqs = [
        {
            question: "What is Facebook marketing?",
            answer:
                "Facebook marketing is the process of promoting your business using Facebook’s advertising platform to reach targeted audiences, increase brand awareness, generate leads, and drive sales through paid and organic campaigns.",
        },
        {
            question: "How can Facebook marketing help my business?",
            answer:
                "Facebook marketing helps your business reach potential customers based on their interests, location, and behavior. It increases brand visibility, generates qualified leads, improves engagement, and helps grow your revenue effectively.",
        },
        {
            question: "How much does Facebook advertising cost?",
            answer:
                "Facebook advertising costs vary depending on your business goals, target audience, and competition. You can start with a small budget and scale campaigns as you begin seeing positive results and conversions.",
        },
        {
            question: "How long does it take to see results from Facebook ads?",
            answer:
                "Facebook ads can start generating engagement and traffic within a few days. However, optimal performance and consistent lead generation typically improve over a few weeks with continuous optimization.",
        },
        {
            question: "Can Facebook marketing generate quality leads?",
            answer:
                "Yes, Facebook marketing is highly effective for generating quality leads. With advanced targeting and optimized campaigns, your ads reach users who are most likely to be interested in your products or services.",
        },
        {
            question: "Do you provide performance reports for Facebook campaigns?",
            answer:
                "Yes, we provide detailed performance reports including metrics such as reach, engagement, clicks, conversions, and overall campaign performance to ensure complete transparency.",
        },
        {
            question: "Which businesses can benefit from Facebook marketing?",
            answer:
                "Facebook marketing works for businesses of all sizes, including startups, local businesses, eCommerce stores, and large enterprises looking to increase brand awareness and generate leads.",
        },
        {
            question: "Why should I hire a Facebook marketing agency?",
            answer:
                "A professional Facebook marketing agency helps you create effective campaigns, target the right audience, optimize performance, and maximize return on investment while saving your time and effort.",
        },
    ];

    const accordionData = [
        {
            title: "Professional Facebook Ads Strategy & Management",
            content:
                "A Facebook marketing company develops well-planned advertising strategies tailored to your business goals. Experts understand Facebook’s algorithm, audience targeting methods, and ad formats to ensure your campaigns reach the right people and deliver measurable results.",
        },
        {
            title: "Access to Experienced Facebook Advertising Specialists",
            content:
                "A dedicated team of Facebook advertising professionals manages your campaigns efficiently. They handle audience selection, ad creation, performance monitoring, and optimization to ensure your campaigns generate consistent engagement and high-quality leads.",
        },
        {
            title: "Better Lead Quality and Higher Conversion Rates",
            content:
                "Facebook marketing experts use advanced targeting and retargeting techniques to reach users who are more likely to become customers. This improves conversion rates, increases lead quality, and helps your business achieve better return on investment.",
        },
        {
            title: "Save Time and Improve Campaign Efficiency",
            content:
                "Managing Facebook campaigns requires continuous monitoring, testing, and adjustments. Hiring a Facebook marketing company saves your time and ensures your campaigns are professionally managed for maximum efficiency and performance.",
        },
        {
            title: "Ongoing Optimization and Detailed Performance Reporting",
            content:
                "Facebook marketing agencies continuously track campaign performance and make data-driven improvements. They provide detailed reports and insights, helping you understand campaign results and make informed decisions for business growth.",
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
                    <p className="mt-6 text-lg text-gray-300">Facebook Advertising</p>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section
                ref={whoRef}
                className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
            >
                <div className="ml-15">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                        What is
                        <span className="text-[#25baff]"> Facebook Marketing?</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        Facebook Marketing is a digital promotion strategy that uses Facebook’s powerful advertising tools and audience network to help businesses connect with the right people. It allows brands to showcase their products or services, build meaningful customer relationships, and drive measurable results through highly focused campaigns.
                    </p>
                    <p className="font-bold text-lg">Key advantages of Facebook marketing services include:</p>
                    <div className="text-gray-900 leading-relaxed ml-8 mb-3">
                        <li>
                            Precise audience targeting based on demographics, interests, and behavior
                        </li>
                        <li>
                            Strong brand visibility across Facebook and its partner platforms
                        </li>
                        <li>
                            Better user interaction through engaging ad formats
                        </li>
                        <li>
                            Improved ability to reach potential customers at the right time
                        </li>
                        <li>
                            Consistent generation of qualified leads and business opportunities
                        </li>
                    </div>
                    <p className="font-bold text-lg">How does Facebook marketing work?</p>
                    <div className="text-gray-900 leading-relaxed ml-8 mb-3">
                        <li>
                            Identifying and understanding your ideal customer audience
                        </li>
                        <li>
                            Designing visually appealing and conversion-focused ad creatives
                        </li>
                        <li>
                            Launching and managing targeted advertising campaigns
                        </li>
                        <li>
                            Tracking performance metrics and optimizing campaigns continuously
                        </li>
                        <li>
                            Leveraging Facebook’s advanced tools for better reach and results
                        </li>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden group">
                    <img
                        src={Img1}
                        alt="Why Choose Us"
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
                            How Facebook Marketing Services Help You Generate High-Quality Leads?
                        </h2>

                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-5xl mx-auto">
                            Facebook marketing enables businesses to connect with potential customers who are most likely to convert. By combining precise targeting, creative advertising, and continuous optimization, businesses can attract qualified leads and improve overall conversion performance. A well-structured Facebook strategy ensures your brand reaches the right audience at the right moment, increasing engagement and driving consistent business growth.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {[
                                {
                                    icon: FaBullseye,
                                    head: "Advanced Audience Targeting",
                                    text: "Facebook allows precise targeting based on demographics, interests, and user behavior, ensuring your ads reach the most relevant and potential customers.",
                                },
                                {
                                    icon: FaEye,
                                    head: "Instant Brand Visibility",
                                    text: "Your ads appear directly in Facebook and Instagram feeds, helping your brand gain immediate exposure and attract attention from your target audience.",
                                },
                                {
                                    icon: FaUserCheck,
                                    head: "High-Quality Lead Generation",
                                    text: "Reach users who are genuinely interested in your services, improving conversion rates and generating valuable business opportunities.",
                                },
                                {
                                    icon: FaPaintBrush,
                                    head: "Creative & Engaging Ad Design",
                                    text: "We create visually appealing ad creatives and compelling messaging that capture attention and encourage user interaction.",
                                },
                                {
                                    icon: FaWallet,
                                    head: "Smart Budget Management",
                                    text: "Control your advertising budget efficiently and ensure every rupee spent contributes to meaningful results and business growth.",
                                },
                                {
                                    icon: FaChartLine,
                                    head: "Continuous Performance Optimization",
                                    text: "We monitor campaign performance and optimize strategies regularly to improve results, increase leads, and maximize ROI.",
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
                            <span className="text-[#25baff]"> Facebook Marketing Agency</span>
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
                        <span className="text-[#25baff]"> Facebook Marketing Agency</span>
                    </h2>

                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        Choosing the right Facebook marketing partner is essential for reaching your ideal audience,
                        increasing engagement, and generating high-quality leads. Our expert team creates data-driven
                        campaigns designed to maximize your return on investment and accelerate your business growth.
                    </p>
                </div>


                {/* CARDS CONTAINER */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {[
                            {
                                head: "Strategic Facebook Ad Campaigns",
                                text: "We develop result-oriented Facebook advertising strategies tailored to your business goals. Our campaigns focus on reaching the right audience and driving maximum engagement and conversions.",
                            },
                            {
                                head: "Precise Audience Targeting",
                                text: "Using Facebook’s advanced targeting tools, we reach users based on their interests, demographics, and behavior, ensuring your ads connect with potential customers who are most likely to convert.",
                            },
                            {
                                head: "Transparent Reporting & Insights",
                                text: "We provide detailed performance reports and real-time insights, allowing you to track campaign success, understand results clearly, and make informed business decisions.",
                            },
                            {
                                head: "Experienced Facebook Marketing Experts",
                                text: "Our experienced team understands Facebook’s advertising ecosystem and best practices, ensuring your campaigns are professionally managed for consistent and reliable performance.",
                            },
                            {
                                head: "Advanced Optimization Techniques",
                                text: "We continuously monitor, test, and optimize your campaigns to improve performance, reduce costs, and maximize your advertising efficiency and return on investment.",
                            },
                            {
                                head: "Focused on Lead Generation & Growth",
                                text: "Our primary goal is to generate high-quality leads and help your business grow. We focus on attracting the right customers and turning engagement into real business results.",
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
                            Testimonials
                        </p>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            What Our Clients Say About Our
                            <span className="text-white"> Facebook Marketing Services</span>
                        </h2>

                    </div>


                    {/* TESTIMONIAL CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {[
                            {
                                text: "Their Facebook marketing strategy helped us generate consistent high-quality leads. We saw a significant increase in engagement and conversions within just a few weeks.",
                                name: "Ritika Sharma",
                                role: "Business Owner",
                            },
                            {
                                text: "The team understood our target audience perfectly and created campaigns that delivered excellent ROI. Our brand visibility and customer inquiries improved dramatically.",
                                name: "Aman Verma",
                                role: "Startup Founder",
                            },
                            {
                                text: "Professional, responsive, and results-driven. Their Facebook advertising campaigns helped us scale faster and attract the right customers consistently.",
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
                        Facebook Marketing Company Strategic
                        <span className="text-[#25baff]"> Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our structured Facebook marketing process focuses on audience targeting, creative ad development,
                        performance optimization, and campaign scaling to generate high-quality leads and maximize business growth.
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

                        {facebookAdvertising.map((item, index) => (

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

export default FacebookAdvertising;