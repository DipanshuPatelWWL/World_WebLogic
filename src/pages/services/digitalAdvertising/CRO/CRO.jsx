import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaChartLine,
    FaUsers,
    FaBolt,
    FaBullseye,
    FaMousePointer,
    FaRocket,
    FaLightbulb,
    FaSearchDollar,
    FaFlask
} from "react-icons/fa";

import Banner from "../../../../assets/services/appStoreOptimization/banner.avif";
import img1 from "../../../../assets/services/CROSlider/img6.avif";
import img2 from "../../../../assets/services/CROSlider/img4.avif";
import CROIndustries from "./CROIndustries";
import CROFAQs from "./CROFAQs";
import CROProcessSlider from "./CROProcessSlider";


gsap.registerPlugin(ScrollTrigger);

const CRO = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const sectionRefs = useRef([]);
    const cardsRef = useRef([]);
    const cardsSectionRef = useRef(null);
    const itemsSectionRef = useRef(null);

    const addSectionRef = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {

        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 80,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.2,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsSectionRef.current,
                    start: "top 80%",
                }
            }
        );

    }, []);

    const itemsRef = useRef([]);

    const addItemRef = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    useEffect(() => {

        gsap.fromTo(
            itemsRef.current,
            {
                opacity: 0,
                y: 80,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: itemsSectionRef.current,
                    start: "top 75%",
                }
            }
        );

    }, []);

    const benefits = [
        {
            icon: <FaChartLine />,
            title: "Maximize Revenue Without More Traffic",
            text: "CRO helps you generate more revenue from your existing visitors by optimizing conversion paths, eliminating friction, and improving decision-making triggers."
        },
        {
            icon: <FaUsers />,
            title: "Turn Visitors into Qualified Customers",
            text: "We optimize your website journey to guide users naturally toward conversion, increasing leads, signups, and customer acquisition rates."
        },
        {
            icon: <FaBolt />,
            title: "Improve Website Performance and Speed",
            text: "Faster and smoother user experiences reduce bounce rates and keep visitors engaged, increasing the chances of conversion."
        },
        {
            icon: <FaBullseye />,
            title: "Precision Optimization Using Real Data",
            text: "Our CRO strategies are powered by real user behavior, analytics insights, and conversion tracking to ensure measurable results."
        },
        {
            icon: <FaMousePointer />,
            title: "Increase Engagement and User Interaction",
            text: "We improve click-through rates, user interaction, and engagement by optimizing layouts, content placement, and call-to-actions."
        },
        {
            icon: <FaRocket />,
            title: "Accelerate Business Growth Efficiently",
            text: "CRO delivers faster growth by improving conversions without increasing marketing costs or traffic acquisition budgets."
        }
    ];


    return (
        <div ref={rootRef} className="bg-white text-black overflow-hidden">

            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                        Conversion Rate Optimization
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl">
                        Turn More Visitors Into Customers With Data-Driven CRO Strategies
                    </p>
                </div>
            </section>


            {/* ================= SECTION 1 ================= */}
            <section
                ref={addSectionRef}
                className="py-20 md:py-28 px-6"
            >
                <div className="max-w-7xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Frustrated With Losing Sales and Not Knowing Why?
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Many businesses get traffic but struggle to convert visitors into customers. Users browse your website, explore your services, and leave without taking action. This results in missed opportunities, wasted ad spend, and lost revenue without a clear explanation.
                        </p>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image */}
                        <div className="gsap-item group">
                            <img
                                src={img2}
                                alt="Conversion Funnel Analysis"
                                className="
                                    w-full
                                    h-[280px]
                                    md:h-[380px]
                                    object-cover
                                    rounded-2xl
                                    shadow-xl
                                    transition duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>


                        {/* Content */}
                        <div className="gsap-item">

                            <h3 className="relative inline-block text-2xl md:text-3xl font-bold mb-6">
                                Conversion Funnel
                                <span className="text-[#25baff]"> Audit & Drop-Off Analysis</span>

                                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#25baff] rounded-full"></span>
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our CRO experts perform a deep analysis of your website to identify exactly where and why users are dropping off. We evaluate user journeys, page engagement, click behavior, and conversion paths to uncover hidden friction points.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Using advanced tools like heatmaps, scroll tracking, and behavioral analytics, we understand how users interact with your website and what prevents them from converting.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                This insight allows us to fix conversion barriers and turn more of your existing visitors into qualified leads and paying customers.
                            </p>

                        </div>

                    </div>
                </div>
            </section>



            {/* ================= SECTION 2 ================= */}
            <section
                ref={addSectionRef}
                className="py-20 md:py-28 px-6 bg-gray-50"
            >

                <div className="max-w-7xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Conversion Rate Optimization:
                            <span className="text-[#25baff]"> The Smart Bet Your Business Can’t Ignore</span>
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Increasing traffic alone does not guarantee business growth. Conversion Rate Optimization ensures that your website turns visitors into customers efficiently, maximizing the value of every visitor.
                        </p>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Content */}
                        <div className="gsap-item order-2 md:order-1">

                            <h3 className="relative inline-block text-2xl md:text-3xl font-bold mb-6">
                                User Experience &
                                <span className="text-[#25baff]"> Conversion Optimization</span>

                                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#25baff] rounded-full"></span>
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                We optimize critical elements such as page layout, call-to-action placement, forms, messaging, and navigation to create a seamless and engaging experience for your users.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Every improvement is based on real data and user behavior insights, ensuring that your website becomes more intuitive, trustworthy, and conversion-focused.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                The result is higher conversion rates, better return on investment, and faster business growth without increasing your marketing costs.
                            </p>

                        </div>


                        {/* Image */}
                        <div className="gsap-item order-1 md:order-2 group">

                            <img
                                src={img1}
                                alt="Conversion Optimization"
                                className="
                                    w-full
                                    h-[280px]
                                    md:h-[380px]
                                    object-cover
                                    rounded-2xl
                                    shadow-xl
                                    transition duration-500
                                    group-hover:scale-105
                                "
                            />

                        </div>

                    </div>

                </div>
            </section>


            <section
                ref={cardsSectionRef}
                className="relative py-28 px-6 bg-gradient-to-b from-black/100 via-black/90 to-black/80 backdrop-blur-lg"
            >

                {/* Container */}
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Why CRO is a
                            <span className="text-[#25baff]"> Game-Changer</span> for Your Business
                        </h2>

                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Conversion Rate Optimization transforms your website into a powerful growth engine by improving user experience, increasing engagement, and maximizing conversions.
                        </p>

                    </div>


                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {benefits.map((item, index) => (

                            <div
                                key={index}
                                ref={addCardRef}
                                className="
                                group
                                bg-white/5
                                border border-white/10
                                backdrop-blur-xl
                                rounded-2xl
                                p-8
                                transition duration-500
                                hover:bg-white/10
                                hover:border-[#25baff]/40
                                hover:-translate-y-2
                                hover:shadow-[0_10px_40px_rgba(37,186,255,0.15)]
                            "
                            >

                                {/* Icon */}
                                <div className="
                                text-[#25baff]
                                text-3xl
                                mb-4
                                transition duration-300
                                group-hover:scale-110
                            ">
                                    {item.icon}
                                </div>


                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-3">
                                    {item.title}
                                </h3>


                                {/* Text */}
                                <p className="text-gray-300 leading-relaxed">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <section
                ref={itemsSectionRef}
                className="relative bg-gradient-to-b from-[#f8fafc] to-[#eef4f8] py-28 px-6 overflow-hidden"
            >

                {/* background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25baff]/10 blur-[120px] rounded-full" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1294d8]">
                            Why Choose Our CRO Agency
                        </h2>

                        <div className="w-20 h-[4px] bg-gradient-to-r from-[#25baff] to-[#00ffaa] mx-auto mt-4 rounded-full" />

                    </div>


                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-10">


                        {/* ITEM */}
                        {[
                            {
                                icon: <FaChartLine />,
                                title: "Conversion-Focused Strategy",
                                text: "We craft optimization strategies that directly impact conversion metrics and revenue growth."
                            },
                            {
                                icon: <FaUsers />,
                                title: "Deep User Behavior Analysis",
                                text: "Understand how users interact with your platform and remove friction from their journey."
                            },
                            {
                                icon: <FaLightbulb />,
                                title: "Creative UX Improvements",
                                text: "We redesign experiences that make conversion feel natural and intuitive."
                            },
                            {
                                icon: <FaSearchDollar />,
                                title: "Data-Driven Decisions",
                                text: "Every improvement is backed by analytics, behavioral insights, and performance metrics."
                            },
                            {
                                icon: <FaFlask />,
                                title: "Continuous Experimentation",
                                text: "We constantly run A/B tests to discover what truly drives engagement and conversion."
                            },
                            {
                                icon: <FaRocket />,
                                title: "Scalable Growth System",
                                text: "Our CRO system ensures consistent performance improvements as your business grows."
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                ref={addItemRef}
                                className="
                        group
                        relative
                        p-[1px]
                        rounded-xl
                        bg-gradient-to-br from-[#25baff]/40 via-transparent to-[#00ffaa]/40
                        hover:from-[#25baff] hover:to-[#00ffaa]
                        transition duration-500
                    "
                            >

                                <div className="
                        h-full
                        bg-white
                        rounded-xl
                        p-7
                        transition duration-500
                        group-hover:shadow-xl
                        group-hover:-translate-y-2
                    ">

                                    <div className="flex items-start gap-5">

                                        {/* ICON */}
                                        <div className="
                                text-[#25baff]
                                text-3xl
                                mt-1
                                transition duration-500
                                group-hover:scale-125
                                group-hover:rotate-6
                            ">
                                            {item.icon}
                                        </div>


                                        {/* CONTENT */}
                                        <div>

                                            <h3 className="
                                    font-semibold
                                    text-lg
                                    mb-2
                                    transition duration-300
                                    group-hover:text-[#1294d8]
                                ">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}


                    </div>

                </div>

            </section>

            <CROProcessSlider />

            <CROIndustries />

            <CROFAQs />


        </div>
    );
};

export default CRO;