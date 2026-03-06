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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "../../../assets/services/appStoreOptimization/banner.avif";
import Img1 from "../../../assets/services/ppc/img1.avif";
import Img2 from "../../../assets/services/ppc/img2.avif";
import Img3 from "../../../assets/services/ppc/img3.avif";
import Img4 from "../../../assets/services/ppc/img4.jpg";
import Img5 from "../../../assets/services/ppc/img5.avif";
import Img6 from "../../../assets/services/ppc/img6.avif";
import Img7 from "../../../assets/services/ppc/img7.avif";
import Img8 from "../../../assets/services/appStoreOptimization/img8.avif";
import Img9 from "../../../assets/services/ppc/img9.avif";
import Img11 from "../../../assets/services/ppc/img11.avif";
import Img10 from "../../../assets/services/appStoreOptimization/img10.avif";

gsap.registerPlugin(ScrollTrigger);

const AppStoreOptimization = () => {
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


    const ppcProcess = [
        {
            title: "PPC Audit",
            text: "We begin by conducting a comprehensive PPC audit to evaluate your existing campaigns, account structure, keyword performance, bidding strategies, targeting settings, and conversion tracking. Our experts identify inefficiencies, wasted ad spend, and missed opportunities. This audit provides a clear understanding of your current performance and helps us create a strategic roadmap to improve efficiency, reduce costs, and maximize your return on investment.",
            image: Img3,
        },
        {
            title: "Market Research",
            text: "Our team performs in-depth market research to understand your industry landscape, competitors, and customer behavior. We analyze competitor ad strategies, audience intent, search trends, and demand patterns. These insights allow us to identify growth opportunities and build data-driven PPC campaigns that target the right audience and deliver optimal results.",
            image: Img4,
        },
        {
            title: "Identifying PPC Platforms",
            text: "We identify the most effective PPC platforms for your business, including Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and other relevant networks. Based on your target audience, industry, and business goals, we select the best platforms to ensure maximum reach, engagement, and conversions.",
            image: Img5,
        },
        {
            title: "Research Keywords",
            text: "Our experts conduct advanced keyword research to identify high-intent, high-converting keywords relevant to your products or services. We analyze search volume, competition level, and user intent to select the most profitable keywords. This ensures your ads appear when potential customers are actively searching for your offerings.",
            image: Img6,
        },
        {
            title: "PPC Strategy Execution",
            text: "Based on research and analysis, we develop and execute a customized PPC strategy tailored to your business objectives. This includes campaign structuring, audience targeting, bidding strategies, and performance optimization. Our goal is to ensure your campaigns are optimized for maximum visibility, conversions, and return on investment.",
            image: Img7,
        },
        {
            title: "Ad Campaign Creation",
            text: "We create compelling ad copy and engaging creatives designed to attract attention and drive clicks. Our team highlights your unique value proposition, key benefits, and strong calls-to-action. We structure campaigns effectively to improve ad relevance, quality score, and overall performance.",
            image: Img8,
        },
        {
            title: "A/B Testing",
            text: "We perform continuous A/B testing on ad copy, creatives, keywords, and targeting settings to identify the best-performing variations. This testing allows us to optimize campaigns for higher click-through rates, improved conversions, and reduced cost-per-click, ensuring maximum campaign efficiency.",
            image: Img9,
        },
        {
            title: "Goal Tracking",
            text: "We implement advanced conversion tracking to measure important actions such as form submissions, purchases, calls, and sign-ups. By tracking user behavior and campaign performance, we gain valuable insights that help optimize campaigns and improve overall ROI.",
            image: Img10,
        },
        {
            title: "Customized Reporting",
            text: "We provide detailed, customized performance reports that give you complete visibility into your PPC campaigns. These reports include metrics such as clicks, conversions, cost-per-click, and return on investment. Our transparent reporting ensures you always understand your campaign performance and business growth.",
            image: Img11,
        },
    ];

    const faqs = [
        {
            question: "What is Pay-Per-Click (PPC) advertising?",
            answer:
                "Pay-Per-Click (PPC) is a digital advertising model where businesses pay only when someone clicks on their ad. PPC ads appear on platforms like Google, Bing, and social media, helping businesses attract targeted traffic, generate leads, and increase sales quickly.",
        },
        {
            question: "Why is PPC important for my business?",
            answer:
                "PPC helps your business reach potential customers instantly by placing your ads in front of people actively searching for your products or services. It increases brand visibility, drives qualified traffic, and delivers measurable results with full control over budget and targeting.",
        },
        {
            question: "How effective is PPC advertising?",
            answer:
                "PPC is highly effective when managed properly. It delivers fast results, precise audience targeting, and measurable performance. With the right strategy, PPC can increase website traffic, generate high-quality leads, and improve your return on investment (ROI).",
        },
        {
            question: "Which platforms do you use for PPC campaigns?",
            answer:
                "We run PPC campaigns on major platforms including Google Ads, Bing Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads. We choose the best platform based on your business goals, target audience, and industry.",
        },
        {
            question: "What does your PPC service include?",
            answer:
                "Our PPC services include keyword research, competitor analysis, campaign setup, ad copy creation, audience targeting, bid management, performance tracking, and continuous optimization to maximize results and minimize costs.",
        },
        {
            question: "How long does it take to see results from PPC?",
            answer:
                "PPC campaigns can start generating traffic and leads immediately after launch. However, optimal performance and improved ROI typically develop over a few weeks as we analyze data and optimize the campaigns.",
        },
        {
            question: "How do you measure PPC campaign success?",
            answer:
                "We measure success using key performance indicators such as clicks, conversions, cost per click (CPC), conversion rate, and return on investment (ROI). Detailed reports are provided so you can clearly track your campaign performance.",
        },
        {
            question: "Can PPC work for small businesses?",
            answer:
                "Yes, PPC is highly effective for businesses of all sizes. With proper targeting and budget management, even small businesses can reach their ideal audience, generate leads, and compete with larger competitors.",
        },
    ];

    const accordionData = [
        {
            title: "Expert PPC Strategy & Campaign Management",
            content:
                "A professional PPC management agency brings deep expertise in creating and managing high-performing ad campaigns. Experts understand bidding strategies, audience targeting, and platform algorithms to ensure your ads reach the right audience and deliver maximum results.",
        },
        {
            title: "Dedicated Team Focused on Your Growth",
            content:
                "With a dedicated PPC team, your campaigns are continuously monitored, optimized, and improved. Specialists handle keyword targeting, ad performance, and budget management to ensure consistent lead generation and better campaign efficiency.",
        },
        {
            title: "Higher Quality Leads & Better ROI",
            content:
                "PPC agencies focus on attracting high-intent users who are more likely to convert into customers. By optimizing ad copy, targeting, and bidding, they help increase conversions while reducing wasted ad spend, resulting in a stronger return on investment.",
        },
        {
            title: "Save Time and Reduce Ad Spend Waste",
            content:
                "Managing PPC campaigns requires constant analysis, testing, and optimization. Hiring an agency saves your valuable time and prevents costly mistakes, ensuring your budget is used efficiently to achieve the best possible results.",
        },
        {
            title: "Continuous Optimization and Performance Tracking",
            content:
                "A PPC management agency provides ongoing campaign optimization, performance tracking, and detailed reporting. This ensures your campaigns stay competitive, adapt to market changes, and consistently deliver traffic, leads, and business growth.",
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
                    <p className="mt-6 text-lg text-gray-300">PPC Services</p>
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
                        <span className="text-[#25baff]"> Pay-Per-Click?</span>
                    </h2>

                    <p className="text-gray-900 leading-relaxed mb-4">
                        Pay-per-click is a process where you, as an advertiser, pay a cost to online platforms for each click you get on your website. In other words, you buy online user visits for increased online visibility rather than waiting for organic clicks. Some of the primary benefits of PPC services are:
                    </p>

                    <div className="text-gray-900 leading-relaxed ml-8 mb-3">
                        <li>
                            Highly Targeted Traffic
                        </li>
                        <li>
                            Immediate Results
                        </li>
                        <li>
                            Real-time Tracking
                        </li>
                        <li>
                            Brand Visibility & Awareness
                        </li>
                        <li>
                            Targeted Remarketing
                        </li>
                    </div>
                    <p className="font-bold text-lg">How is it done?</p>
                    <div className="text-gray-900 leading-relaxed ml-8 mb-3">
                        <li>
                            Keyword Research
                        </li>
                        <li>
                            Ad Creation & Targeting
                        </li>
                        <li>
                            Bid Management
                        </li>
                        <li>
                            Monitoring Ad Performance
                        </li>
                        <li>
                            Refine PPC Strategies
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
                            How PPC Services Help You
                            <span className="text-[#25baff]"> Maximize ROI?</span>
                        </h2>

                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mt-6 max-w-2xl mx-auto">
                            Our PPC strategies are designed to drive targeted traffic, increase conversions,
                            and deliver measurable return on investment.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {[
                                {
                                    icon: FaSearchLocation,
                                    head: "Precise Audience Targeting",
                                    text: "PPC allows you to target specific audiences based on keywords, location, interests, and behavior. This ensures your ads reach people ready to convert.",
                                },
                                {
                                    icon: FaSearchengin,
                                    head: "Instant Visibility",
                                    text: "Your ads appear instantly on search engines and social platforms, bringing immediate traffic and faster business growth.",
                                },
                                {
                                    icon: GiRelationshipBounds,
                                    head: "Higher Quality Leads",
                                    text: "Reach high-intent users actively searching for your services, increasing conversions and maximizing your ROI.",
                                },
                                {
                                    icon: FaMeta,
                                    head: "Optimized Ad Creatives",
                                    text: "We craft high-performing ad copy and creatives designed to improve click-through rates and conversions.",
                                },
                                {
                                    icon: MdOutlineStarRate,
                                    head: "Budget Efficiency",
                                    text: "Full control over ad spend ensures you only pay for real clicks, reducing waste and improving profitability.",
                                },
                                {
                                    icon: RxComponent1,
                                    head: "Continuous Optimization",
                                    text: "We monitor, analyze, and optimize campaigns continuously to improve performance and maximize results.",
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

                                        <h3 className="
                font-bold
                text-xl
                mb-3
                text-white
              ">
                                            {item.head}
                                        </h3>

                                        <p className="
                text-gray-400
                text-sm
                leading-relaxed
              ">
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
                            Why Should You Hire a
                            <span className="text-[#25baff]"> PPC Management Agency?</span>
                        </h2>
                        <div className="w-213 h-1 bg-black mx-auto mt-4 rounded-full"></div>
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

            {/* contact us  */}

            {/* audit services  */}
            <section className="relative z-10 py-28 bg-black">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 p-8">
                        Why Choose Us As Your
                        <span className="text-[#25baff]"> PPC Management Company?</span>
                    </h2>

                    <p className="uppercase tracking-widest text-sm font-semibold text-gray-300 max-w-3xl mx-auto">
                        Choosing the right PPC partner is essential for generating quality leads and maximizing ROI. Our expert team creates data-driven campaigns that deliver measurable results, helping businesses grow faster with targeted advertising and continuous optimization.
                    </p>
                </div>


                {/* CARDS CONTAINER */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {[
                            {
                                head: "Cost-Effective PPC Campaigns",
                                text: "We design PPC campaigns focused on maximizing results while minimizing wasted ad spend. Our experts optimize bidding strategies, targeting, and ad performance to ensure you get the best return on investment from your advertising budget.",
                            },
                            {
                                head: "Customized PPC Strategy",
                                text: "Every business has unique goals, so we create tailored PPC strategies based on your industry, audience, and objectives. Our personalized approach ensures better targeting, higher engagement, and improved conversion rates.",
                            },
                            {
                                head: "Transparent Reporting & Communication",
                                text: "We provide clear performance reports and regular updates so you always know how your campaigns are performing. Our transparent process helps you track clicks, conversions, and ROI with complete confidence.",
                            },
                            {
                                head: "Experienced PPC Specialists",
                                text: "Our team has extensive experience managing PPC campaigns across multiple industries. We understand platform algorithms, audience behavior, and optimization techniques to deliver consistent and reliable results.",
                            },
                            {
                                head: "Advanced Tools & Optimization Techniques",
                                text: "We use industry-leading PPC tools and analytics platforms to monitor campaign performance, conduct competitor analysis, and continuously optimize ads for maximum efficiency and growth.",
                            },
                            {
                                head: "Complete Lead Generation Focus",
                                text: "Our goal is not just traffic but real business growth. We focus on generating high-quality leads and conversions that help increase your sales, strengthen your brand presence, and grow your business sustainably.",
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
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-widest text-lg font-semibold text-gray-900 mb-3">
                            Testimonials
                        </p>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            What Our Clients
                            <span className="text-[#25baff]"> Say</span>
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
                                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                shadow-lg shadow-[#25baff]/10
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
                            >
                                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                                    <RiDoubleQuotesL />
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    {item.text}
                                </p>

                                <h4 className="font-bold text-lg text-[#020202]">
                                    {item.name}
                                </h4>
                                <p className="text-gray-500 text-sm">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALTERNATE SECTION  */}

            <section className="relative py-28 px-6 bg-gradient-to-br from-white via-[#f8fcff] to-[#eef7ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25baff]/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="text-center mb-10 relative z-10">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202] mb-4">
                        PPC Management Company Strategic
                        <span className="text-[#25baff]"> Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our proven PPC workflow ensures precision targeting, optimized campaigns,
                        and continuous performance improvements to maximize your ROI.
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

                        {ppcProcess.map((item, index) => (

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
                                            alt=""
                                            className="rounded-2xl transition-all duration-700 group-hover:scale-105"
                                        />

                                        {/* Step */}
                                        <div className="
                absolute top-4 left-4
                bg-[#25baff]
                text-white
                text-sm font-bold
                px-4 py-1
                rounded-full
                shadow-md
              ">
                                            Step {index + 1}
                                        </div>

                                    </div>


                                    {/* Content */}
                                    <div>

                                        <h3 className="
                text-2xl md:text-3xl font-extrabold text-[#020202]
                mb-4 relative inline-block
              ">
                                            {item.title}

                                            <span className="
                  absolute left-0 -bottom-2
                  w-16 h-1 bg-[#25baff]
                  rounded-full
                "></span>

                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {item.text}
                                        </p>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>


                    {/* PAGINATION DOTS CENTERED BELOW */}
                    <div className="
      custom-pagination
      flex justify-center
      items-center
      gap-4
    "></div>
                </div>
            </section>


            {/* Pricing section */}
            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable PPC
                            <span className="text-[#25baff]"> Plans</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Flexible PPC management plans designed to maximize your ROI,
                            generate quality leads, and scale your business efficiently.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


                        {/* BASIC */}
                        <div className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                shadow-xl shadow-black/40
                hover:border-[#25baff]/60
                hover:-translate-y-3
                hover:shadow-[#25baff]/30
                transition-all duration-500
                flex flex-col justify-between
            ">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    BASIC
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#a8d97c]">$</span>

                                    <span className="text-5xl font-bold text-[#a8d97c]">
                                        500
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>1 PPC Platform (Google Ads)</p>
                                    <p>Up to 2 Campaigns</p>
                                    <p>Keyword Research & Setup</p>
                                    <p>Ad Creation (2 Ads per Group)</p>
                                    <p>Monthly Performance Report</p>

                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="
                        border border-[#25baff]
                        text-[#25baff]
                        px-8 py-3
                        rounded-full
                        hover:bg-[#25baff]
                        hover:text-white
                        transition-all duration-300
                        hover:cursor-pointer
                    ">
                                    START TODAY
                                </button>

                            </div>

                        </div>



                        {/* SILVER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    SILVER
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-gray-300">$</span>

                                    <span className="text-5xl font-bold text-gray-300">
                                        800
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>2 PPC Platforms</p>
                                    <p>Up to 5 Campaigns</p>
                                    <p>Conversion Tracking Setup</p>
                                    <p>A/B Testing</p>
                                    <p>Bi-Weekly Reports</p>

                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300
                                hover:cursor-pointer
                                ">
                                    START TODAY
                                </button>

                            </div>

                        </div>



                        {/* GOLD */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div className="absolute top-4 right-4 bg-yellow-800 text-white text-xs px-3 py-2 rounded-full">
                                POPULAR
                            </div>


                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    GOLD
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#ff9800]">$</span>

                                    <span className="text-5xl font-bold text-[#ff9800]">
                                        1200
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>Google, Facebook & Instagram Ads</p>
                                    <p>Unlimited Campaigns</p>
                                    <p>Advanced A/B Testing</p>
                                    <p>Landing Page Suggestions</p>
                                    <p>Weekly Reports</p>

                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300
                                hover:cursor-pointer
                                ">
                                    START TODAY
                                </button>

                            </div>

                        </div>



                        {/* PREMIUM */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    PREMIUM
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#607AFE]">$</span>

                                    <span className="text-5xl font-bold text-[#607AFE]">
                                        2000
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>All PPC Platforms</p>
                                    <p>Full Funnel Campaign Setup</p>
                                    <p>Advanced Conversion Optimization</p>
                                    <p>Dedicated PPC Manager</p>
                                    <p>Weekly Reporting & Strategy Calls</p>

                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300
                                hover:cursor-pointer
                                ">
                                    START TODAY
                                </button>

                            </div>

                        </div>


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

export default AppStoreOptimization;
