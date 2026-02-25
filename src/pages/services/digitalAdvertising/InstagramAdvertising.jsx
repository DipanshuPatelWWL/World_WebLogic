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
import Img1 from "../../../assets/services/instagramAdvertising/img1.avif";
import Img2 from "../../../assets/services/instagramAdvertising/img2.avif";
import Img3 from "../../../assets/services/instagramAdvertising/img3.avif";
import Img4 from "../../../assets/services/instagramAdvertising/img4.avif";
import Img5 from "../../../assets/services/instagramAdvertising/img5.avif";
import Img6 from "../../../assets/services/instagramAdvertising/img2.avif";
import Img8 from "../../../assets/services/instagramAdvertising/img7.avif";
import Img7 from "../../../assets/services/appStoreOptimization/img8.avif";
gsap.registerPlugin(ScrollTrigger);
const InstagramAdvertising = () => {
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

    const instagramAdvertising = [
        {
            title: "Brand Discovery & Instagram Audience Intelligence",
            text: "We begin by understanding your brand identity, business objectives, and ideal customer profile on Instagram. Our team analyzes audience behavior, interests, content interaction patterns, and competitor strategies to identify what captures attention and drives conversions. We create detailed audience personas based on demographics, lifestyle, and engagement habits to ensure your campaigns connect with the right users.",
            image: Img3,
        },
        {
            title: "Strategic Instagram Ads Planning & Funnel Development",
            text: "Based on research insights, we create a customized Instagram advertising strategy aligned with your goals, whether it's brand awareness, follower growth, website traffic, lead generation, or sales. We design a full-funnel approach using high-performing placements such as Reels, Stories, Feed, and Explore ads to guide users from discovery to conversion.",
            image: Img4,
        },
        {
            title: "Scroll-Stopping Creatives & Conversion-Focused Ad Copy",
            text: "Our creative team develops visually stunning creatives, engaging reels-style videos, motion graphics, and persuasive ad copy designed specifically for Instagram’s visual-first environment. We focus on storytelling, emotional connection, and strong calls-to-action. Multiple creative variations are tested to identify the most effective combinations that drive engagement and conversions.",
            image: Img5,
        },
        {
            title: "Advanced Campaign Setup & Precision Audience Targeting",
            text: "We launch campaigns using Meta Ads Manager with advanced targeting options including interest targeting, behavior targeting, custom audiences, lookalike audiences, and retargeting. We also implement Meta Pixel and conversion tracking to ensure accurate data collection and improved targeting performance, helping your ads reach users most likely to convert.",
            image: Img6,
        },
        {
            title: "Continuous Performance Monitoring & Smart Optimization",
            text: "Once campaigns are live, we monitor key performance metrics such as reach, engagement rate, click-through rate (CTR), cost per click (CPC), conversions, and return on ad spend (ROAS). Through ongoing A/B testing, audience refinement, and creative optimization, we continuously improve campaign performance and maximize ROI.",
            image: Img7,
        },
        {
            title: "Transparent Reporting & Scalable Growth Execution",
            text: "We provide detailed performance reports with actionable insights and growth recommendations. Our team identifies top-performing campaigns and scales them strategically to increase reach, engagement, and conversions. This data-driven scaling approach ensures consistent lead generation, improved brand visibility, and long-term business growth on Instagram.",
            image: Img8,
        },
    ];

    const faqs = [
        {
            question: "What is Instagram advertising?",
            answer:
                "Instagram advertising is a paid digital marketing strategy that allows businesses to promote their products or services to targeted audiences using ad formats such as Reels, Stories, Feed, and Explore ads. It helps increase brand awareness, drive website traffic, generate qualified leads, and boost conversions through highly targeted campaigns.",
        },
        {
            question: "How can Instagram advertising help my business grow?",
            answer:
                "Instagram advertising helps your business connect with highly relevant users based on their interests, behavior, demographics, and online activity. It increases brand visibility, improves engagement, drives targeted traffic, and generates high-quality leads that contribute to consistent business growth.",
        },
        {
            question: "How much budget is required to start Instagram ads?",
            answer:
                "Instagram ads can be started with a flexible budget depending on your goals and audience. Many businesses begin with a small daily budget to test performance and scale campaigns as they start generating engagement, leads, and conversions.",
        },
        {
            question: "How quickly can I see results from Instagram advertising?",
            answer:
                "Instagram ads can begin generating impressions, engagement, and clicks within the first few days. However, optimal performance and consistent lead generation typically improve over 2 to 4 weeks as campaigns are tested, optimized, and refined.",
        },
        {
            question: "Can Instagram ads generate high-quality leads and sales?",
            answer:
                "Yes, Instagram ads are highly effective for lead generation and sales. With advanced targeting options such as interest targeting, lookalike audiences, and retargeting, your ads reach users who are more likely to engage and convert into customers.",
        },
        {
            question: "Do you provide performance reports for Instagram ad campaigns?",
            answer:
                "Yes, we provide detailed and transparent reports that include key metrics such as reach, impressions, engagement rate, clicks, conversions, and return on ad spend (ROAS). These insights help track performance and guide campaign optimization.",
        },
        {
            question: "Which types of businesses benefit most from Instagram advertising?",
            answer:
                "Instagram advertising is effective for startups, local businesses, service providers, eCommerce brands, and large enterprises. Any business looking to increase brand awareness, generate leads, or drive online sales can benefit from Instagram advertising.",
        },
        {
            question: "Why should I hire a professional Instagram advertising agency?",
            answer:
                "A professional Instagram advertising agency provides strategic planning, high-converting creatives, precise audience targeting, and continuous optimization. This ensures better campaign performance, higher return on investment, and faster business growth while saving your time and resources.",
        },
        {
            question: "What Instagram ad formats do you use?",
            answer:
                "We use high-performing ad formats including Reels ads, Stories ads, Feed ads, Carousel ads, and Explore ads. Each format is selected strategically based on your business goals to maximize engagement, leads, and conversions.",
        },
    ];

    const accordionData = [
        {
            title: "Strategic Instagram Advertising Planning & Expert Management",
            content:
                "A professional Instagram advertising agency develops customized strategies aligned with your business goals. Our experts understand Meta’s algorithm, audience behavior, and high-performing ad formats such as Reels, Stories, and Feed ads. We ensure your campaigns reach the right audience, increase engagement, and deliver measurable conversions.",
        },
        {
            title: "Dedicated Instagram Ads Specialists with Proven Expertise",
            content:
                "Our experienced Instagram advertising specialists manage your campaigns end-to-end, including audience research, creative development, campaign setup, and continuous optimization. We focus on maximizing performance, increasing engagement, and generating high-quality leads consistently.",
        },
        {
            title: "Advanced Targeting for Higher Conversions and Better ROI",
            content:
                "We use powerful targeting options such as interest targeting, custom audiences, lookalike audiences, and retargeting to reach users most likely to convert. This ensures improved lead quality, higher conversion rates, and maximum return on your advertising investment.",
        },
        {
            title: "Save Time with Fully Managed Campaign Execution",
            content:
                "Managing Instagram ad campaigns requires constant monitoring, testing, and optimization. Our team handles the entire process, allowing you to focus on running your business while we ensure your campaigns perform efficiently and deliver consistent results.",
        },
        {
            title: "Continuous Optimization and Transparent Performance Reporting",
            content:
                "We continuously monitor campaign performance, analyze key metrics such as engagement, clicks, conversions, and ROAS, and optimize campaigns for better results. Our transparent reports provide clear insights and help scale successful campaigns for long-term business growth.",
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
                    <p className="mt-6 text-lg text-gray-300">Instagram Advertising</p>
                </div>
            </section>
            {/* ================= INTRO ================= */}
            <section
                ref={whoRef}
                className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
                        What is
                        <span className="text-[#25baff]"> Instagram Advertising?</span>
                    </h2>
                    <p className="text-gray-900 leading-relaxed mb-4">
                        Instagram Advertising is a powerful digital marketing strategy that allows businesses to promote their products and services directly to highly targeted audiences using Instagram’s advanced advertising platform. With visually engaging ad formats such as Reels, Stories, Feed, and Explore ads, businesses can increase brand awareness, attract potential customers, generate qualified leads, and drive measurable conversions.
                    </p>
                    <p className="font-bold text-lg">Key advantages of Instagram advertising services include:</p>
                    <div className="text-gray-900 leading-relaxed ml-8 mb-3">
                        <li>
                            Highly precise targeting using interests, behavior, demographics, and custom audiences
                        </li>
                        <li>
                            Increased brand visibility through visually engaging ad formats like Reels and Stories
                        </li>
                        <li>
                            Higher engagement rates due to Instagram’s visual-first and interactive platform
                        </li>
                        <li>
                            Ability to reach potential customers at every stage of the buying journey
                        </li>
                        <li>
                            Consistent generation of qualified leads, website traffic, and conversions
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
                            How Instagram Advertising Services Help You Generate High-Quality Leads
                        </h2>
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-5xl mx-auto">
                            Instagram advertising enables businesses to reach highly targeted audiences using advanced Meta Ads targeting, visually engaging creatives, and data-driven optimization. By leveraging placements such as Reels, Stories, and Feed ads, businesses can attract qualified prospects, increase engagement, and drive conversions. A strategic Instagram advertising approach ensures your brand connects with the right audience at the right time, generating consistent leads and supporting long-term business growth.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FaBullseye,
                                    head: "Precision Audience Targeting with Meta Ads",
                                    text: "Instagram uses advanced targeting options such as interests, behaviors, custom audiences, and lookalike audiences to ensure your ads reach users most likely to engage and convert.",
                                },
                                {
                                    icon: FaEye,
                                    head: "Maximum Brand Visibility Across Instagram Placements",
                                    text: "Your ads appear across high-performing placements including Reels, Stories, Feed, and Explore, helping your brand gain strong visibility and attract attention from your ideal customers.",
                                },
                                {
                                    icon: FaUserCheck,
                                    head: "High-Intent Lead and Customer Acquisition",
                                    text: "Reach users who have already shown interest in similar products or services, improving conversion rates and generating high-quality leads and valuable business opportunities.",
                                },
                                {
                                    icon: FaPaintBrush,
                                    head: "Scroll-Stopping Visual Creatives and Ad Copy",
                                    text: "We create visually compelling creatives, reels-style videos, and persuasive ad copy designed to capture attention instantly and encourage users to take action.",
                                },
                                {
                                    icon: FaWallet,
                                    head: "Cost-Effective Budget Control and Campaign Scaling",
                                    text: "Instagram advertising allows flexible budget management, ensuring efficient spending while scaling high-performing campaigns to maximize reach, leads, and conversions.",
                                },
                                {
                                    icon: FaChartLine,
                                    head: "Continuous Optimization and Performance Growth",
                                    text: "We monitor campaign performance, analyze key metrics, and optimize targeting, creatives, and bidding strategies to improve results and maximize return on investment.",
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
                            <span className="text-[#25baff]"> Instagram Marketing Agency</span>
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


            {/* audit services */}
            <section className="relative z-10 py-28 bg-black">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 p-8">
                        6 Reasons to Choose Us as Your
                        <span className="text-[#25baff]"> Instagram Advertising Agency</span>
                    </h2>
                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        Choosing the right Instagram advertising agency is essential for reaching your ideal audience, increasing engagement, and generating high-quality leads. Our team uses advanced Meta Ads targeting, high-converting creatives, and continuous optimization to deliver measurable results, maximize your return on investment, and drive scalable business growth.
                    </p>
                </div>

                {/* CARDS CONTAINER */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Data-Driven Instagram Advertising Strategy",
                                text: "We create customized Instagram advertising strategies based on your business goals, target audience, and industry insights to maximize engagement, conversions, and overall campaign performance.",
                            },
                            {
                                head: "Advanced Meta Audience Targeting",
                                text: "Using Meta Ads Manager, we target users through interests, behaviors, custom audiences, and lookalike audiences, ensuring your ads reach people most likely to engage and convert.",
                            },
                            {
                                head: "Transparent Reporting and Performance Insights",
                                text: "We provide detailed reports including reach, impressions, engagement, conversions, and ROI, helping you clearly track campaign performance and make data-driven decisions.",
                            },
                            {
                                head: "Certified Instagram Advertising Specialists",
                                text: "Our experienced team understands Meta’s advertising ecosystem, ad formats like Reels and Stories, and best practices to ensure your campaigns deliver consistent and reliable results.",
                            },
                            {
                                head: "Continuous Optimization for Maximum ROI",
                                text: "We continuously monitor campaign performance, test creatives, refine audience targeting, and optimize bidding strategies to improve efficiency and maximize return on investment.",
                            },
                            {
                                head: "Focused on Lead Generation and Business Growth",
                                text: "Our goal is to generate high-quality leads, increase conversions, and help your business grow by connecting your brand with the right audience at the right time.",
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
                            Client Success Stories
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Real Results From Our
                            <span className="text-white"> Instagram Advertising Campaigns</span>
                        </h2>
                    </div>

                    {/* TESTIMONIAL CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                text: "Within the first 30 days, our Instagram ad campaigns generated over 3x more qualified leads than our previous marketing efforts. The targeting and creative strategy were incredibly effective, and we saw measurable business growth quickly.",
                                name: "Neha Kapoor",
                                role: "Founder, Fashion Brand",
                            },
                            {
                                text: "Their team helped us scale our Instagram campaigns efficiently while reducing our cost per lead. The performance tracking, creative quality, and optimization process were exceptional. Highly recommended for serious business growth.",
                                name: "Rahul Mehta",
                                role: "Director, Real Estate Company",
                            },
                            {
                                text: "We struggled with online lead generation before working with them. Their Instagram advertising strategy completely changed our results. Our engagement increased significantly, and we started receiving consistent inquiries every week.",
                                name: "Jason Fernandes",
                                role: "Marketing Head, IT Services Firm",
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


            {/* ALTERNATE SECTION */}
            <section className="relative py-28 px-6 bg-gradient-to-br from-white via-[#f8fcff] to-[#eef7ff] overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25baff]/10 blur-[120px] rounded-full pointer-events-none"></div>
                {/* HEADER */}
                <div className="text-center mb-10 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202] mb-4">
                        Instagram Marketing Company Strategic
                        <span className="text-[#25baff]"> Process</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our structured Instagram marketing process focuses on audience targeting, creative ad development,
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
                        {instagramAdvertising.map((item, index) => (
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
export default InstagramAdvertising;