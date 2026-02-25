import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaBolt, FaBullseye, FaChartLine, FaMousePointer, FaRocket, FaUsers, FaSearchDollar, FaLayerGroup, FaAmazon, } from "react-icons/fa";
import AmazonPPCIndustries from "./AmazonPPCIndustries";
import AmazonPPCPartner from "./AmazonPPCPartner";
import AmazonPPCFAQ from "./AmazonPPCFAQ";

import Banner from "../../../../assets/services/ppc/img5.avif";
import img1 from "../../../../assets/services/appStoreOptimization/img1.avif";
import img2 from "../../../../assets/services/appStoreOptimization/img2.avif";
import img10 from "../../../../assets/services/amazonPPC/img10.avif";
import img11 from "../../../../assets/services/amazonPPC/img11.avif";
import img12 from "../../../../assets/services/amazonPPC/img12.avif";
import img13 from "../../../../assets/services/amazonPPC/img13.jpg";

gsap.registerPlugin(ScrollTrigger);

const AmazonPPC = () => {

    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const itemsRef = useRef([]);
    const sectionRefs = useRef([]);
    const cardsRef = useRef([]);
    const cardsSectionRef = useRef(null);
    const itemsSectionRef = useRef(null);
    const sliderRef = useRef(null);

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

    useEffect(() => {

        const slider = sliderRef.current;
        if (!slider) return;

        const ctx = gsap.context(() => {

            const totalWidth = slider.scrollWidth / 2;

            gsap.set(slider, { x: 0 });

            const animation = gsap.to(slider, {

                x: -totalWidth,

                duration: 25,

                ease: "none",

                repeat: -1,

            });

            slider.addEventListener("mouseenter", () => animation.pause());

            slider.addEventListener("mouseleave", () => animation.resume());

        });

        return () => ctx.revert();

    }, []);

    const addItemRef = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };


    const benefits = [
        {
            icon: <FaChartLine />,
            title: "Increase Sales Without Increasing Ad Spend",
            text: "Amazon PPC optimization improves campaign efficiency, allowing you to generate more sales from the same advertising budget through smarter bidding and targeting."
        },
        {
            icon: <FaUsers />,
            title: "Reach High-Intent Buyers Ready to Purchase",
            text: "We target customers actively searching for products like yours, ensuring your ads appear in front of buyers with strong purchase intent."
        },
        {
            icon: <FaBolt />,
            title: "Improve Ad Visibility and Product Ranking",
            text: "Optimized PPC campaigns increase impressions, clicks, and conversions, which helps improve your product ranking organically on Amazon."
        },
        {
            icon: <FaBullseye />,
            title: "Precision Targeting with Keyword Intelligence",
            text: "We identify profitable keywords, eliminate wasteful spend, and focus on search terms that deliver the highest conversions and ROI."
        },
        {
            icon: <FaMousePointer />,
            title: "Maximize Click-Through Rate and Conversions",
            text: "We optimize ad creatives, placements, and bidding strategies to improve click-through rates and turn clicks into real customers."
        },
        {
            icon: <FaRocket />,
            title: "Scale Profitably and Dominate Your Category",
            text: "Our Amazon PPC strategy helps you scale sales sustainably, outperform competitors, and grow your brand presence on Amazon."
        }
    ];


    const renderSliderItems = () => {

        const items = [
            {
                icon: "fa-search",
                title: "Complete Account Audit & Performance Analysis",
                text: "We perform a deep audit of your Amazon advertising account, analyzing campaign structure, keyword performance, wasted ad spend, and conversion data. This helps us uncover inefficiencies, missed opportunities, and areas where your ad budget can generate significantly higher returns."
            },
            {
                icon: "fa-key",
                title: "Advanced Keyword Research & Buyer Intent Targeting",
                text: "Our team identifies high-converting, low-competition keywords using advanced research tools and real Amazon search data. We target keywords with strong buyer intent to ensure your products appear in front of customers who are most likely to purchase."
            },
            {
                icon: "fa-layer-group",
                title: "Strategic Campaign Structure & Launch Setup",
                text: "We build a scalable campaign structure using Sponsored Products, Sponsored Brands, and Sponsored Display ads. Each campaign is carefully organized to maximize visibility, improve targeting accuracy, and create a strong foundation for long-term growth."
            },
            {
                icon: "fa-chart-line",
                title: "Continuous Optimization & Performance Improvement",
                text: "We continuously monitor your campaigns, adjusting bids, targeting, and keyword strategies based on real performance data. This ongoing optimization ensures improved click-through rates, higher conversions, and lower advertising costs."
            },
            {
                icon: "fa-rocket",
                title: "Scaling Winning Campaigns for Maximum Growth",
                text: "Once profitable campaigns are identified, we strategically scale them to increase revenue while maintaining efficiency. Our scaling process ensures sustainable growth, improved product ranking, and long-term profitability for your Amazon business."
            }
        ];

        return items.map((item, index) => (

            <div
                key={index}
                className="
                w-[320px]
                flex-shrink-0
                bg-white/5
                border border-white/10
                rounded-xl
                p-7
                hover:bg-[#25baff]/10
                hover:scale-105
                transition duration-300
            "
            >

                <div className="flex items-start gap-4 mb-4">

                    <div className="
                    w-14 h-14
                    flex items-center justify-center
                    bg-[#25baff]/20
                    rounded-xl
                    text-[#25baff]
                    text-xl
                    flex-shrink-0
                ">
                        <i className={`fas ${item.icon}`} />
                    </div>

                    <h3 className="text-white font-semibold leading-snug">
                        {item.title}
                    </h3>

                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                </p>

            </div>

        ));

    };


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
                        Amazon PPC Services
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl">
                        Increase product visibility, reduce ACoS, and scale your Amazon revenue with expert PPC optimization.
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
                            Spending on Amazon Ads But Not Seeing Profitable Results?
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Many Amazon sellers run PPC campaigns but struggle with high ACOS, low conversions, and wasted ad spend. Your ads may be getting clicks, but without proper optimization, they fail to generate consistent and profitable sales, allowing competitors to take the lead.
                        </p>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image */}
                        <div className="gsap-item group">
                            <img
                                src={img2}
                                alt="Amazon PPC Campaign Audit"
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
                                Amazon PPC
                                <span className="text-[#25baff]"> Audit & Performance Analysis</span>

                                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#25baff] rounded-full"></span>
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our Amazon PPC experts conduct a complete audit of your advertising campaigns to identify wasted ad spend, underperforming keywords, and missed sales opportunities. We evaluate campaign structure, bidding strategy, keyword targeting, and conversion data.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Using real Amazon Ads data and performance insights, we discover which keywords generate profitable sales and which ones drain your budget without delivering results.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                This allows us to optimize your campaigns, reduce ACOS, improve conversions, and turn your advertising investment into a consistent and scalable revenue source.
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
                            Amazon PPC Advertising:
                            <span className="text-[#25baff]"> The Smartest Way to Scale Your Sales</span>
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Simply running Amazon ads is not enough to grow your business. Strategic PPC optimization ensures your products reach the right customers, increase conversions, improve product rankings, and maximize your return on ad spend.
                        </p>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Content */}
                        <div className="gsap-item order-2 md:order-1">

                            <h3 className="relative inline-block text-2xl md:text-3xl font-bold mb-6">
                                Campaign Optimization &
                                <span className="text-[#25baff]"> Profit-Focused Scaling</span>

                                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#25baff] rounded-full"></span>
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                We optimize your Sponsored Products, Sponsored Brands, and Sponsored Display campaigns to increase visibility, drive more qualified traffic, and improve conversions.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our team focuses on high-performing keywords, strategic bidding, negative keyword filtering, and campaign restructuring to eliminate wasted spend and improve efficiency.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                The result is lower ACOS, higher ROI, improved product rankings, and scalable growth that helps you dominate your category on Amazon.
                            </p>

                        </div>


                        {/* Image */}
                        <div className="gsap-item order-1 md:order-2 group">

                            <img
                                src={img1}
                                alt="Amazon PPC Optimization Strategy"
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
                            Why Amazon PPC is a
                            <span className="text-[#25baff]"> Revenue Multiplier</span> for Your Brand
                        </h2>

                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Amazon PPC helps your products appear in front of the right buyers at the right time, driving more clicks, boosting conversions, and scaling your revenue with data-driven advertising strategies.
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


            {/* ================= HOW AMAZON PPC WORKS ================= */}

            {/* Slider */}
            <section
                ref={itemsSectionRef}
                className="py-24 bg-gradient-to-b from-[#0b1220] to-[#111827] overflow-hidden"
            >

                <div className="max-w-7xl mx-auto px-2">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            How Our Amazon PPC Services Work
                        </h2>

                        <p className="text-gray-400">
                            Proven framework to scale your Amazon revenue profitably
                        </p>
                    </div>

                    {/* SLIDER CONTAINER */}
                    <div className="relative overflow-hidden">

                        {/* SLIDER TRACK */}
                        <div
                            ref={sliderRef}
                            className="flex gap-8 slider-track"
                        >

                            {/* ORIGINAL SET */}
                            {renderSliderItems()}

                            {/* DUPLICATE SET */}
                            {renderSliderItems()}

                        </div>

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
                            Our Amazon PPC Services Offerings
                        </h2>

                        <div className="w-20 h-[4px] bg-gradient-to-r from-[#25baff] to-[#00ffaa] mx-auto mt-4 rounded-full" />

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                            We provide complete Amazon PPC management designed to increase product visibility,
                            reduce ACoS, and scale your sales profitably using proven advertising strategies.
                        </p>

                    </div>


                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-10">


                        {[
                            {
                                icon: <FaSearchDollar />,
                                title: "Amazon PPC Account Audit",
                                text: "We analyze your existing campaigns, search terms, and ad spend efficiency to identify wasted budget and uncover profitable growth opportunities."
                            },
                            {
                                icon: <FaBullseye />,
                                title: "Advanced Keyword Targeting",
                                text: "We discover high-converting buyer keywords using real Amazon search data to improve targeting accuracy and maximize conversions."
                            },
                            {
                                icon: <FaLayerGroup />,
                                title: "Sponsored Products Management",
                                text: "We create and optimize Sponsored Product campaigns to improve product visibility and generate consistent daily sales."
                            },
                            {
                                icon: <FaAmazon />,
                                title: "Sponsored Brands & Display Ads",
                                text: "We build advanced Sponsored Brand and Display campaigns to increase brand awareness and retarget high-intent shoppers."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Bid Optimization & ACoS Reduction",
                                text: "We continuously optimize bids and targeting strategies to reduce advertising costs while increasing profitability."
                            },
                            {
                                icon: <FaRocket />,
                                title: "Campaign Scaling & Growth",
                                text: "We scale winning campaigns strategically to maximize revenue, improve rankings, and accelerate your Amazon business growth."
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

            <AmazonPPCIndustries />


            <section className="py-24 px-6 bg-white">

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1294d8] mb-4">
                            Types of Amazon PPC Campaigns We Optimize
                        </h2>

                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We manage and optimize every Amazon ad format to help you increase product visibility,
                            attract qualified buyers, and grow your sales profitably at every stage of your business.
                        </p>

                    </div>


                    {/* ROW 1 */}
                    <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

                        {/* IMAGE */}
                        <div className="relative">

                            <img
                                src={img10}
                                className="rounded-xl shadow-xl"
                            />

                        </div>


                        {/* CONTENT */}
                        <div>

                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                                Sponsored Product Campaigns
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Promote individual listings directly in Amazon search results and product pages
                                to capture high-intent buyers and increase conversions.
                            </p>


                            <h4 className="font-semibold mb-4">
                                Best used when:
                            </h4>


                            <ul className="space-y-3">

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Increase product visibility quickly
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Launch new products successfully
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Scale high-converting listings
                                </li>

                            </ul>

                        </div>

                    </div>



                    {/* ROW 2 */}
                    <div className="grid md:grid-cols-2 gap-14 items-center mb-24">


                        {/* CONTENT */}
                        <div>

                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                                Sponsored Brand Campaigns
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Showcase your brand logo, custom headline, and multiple products
                                to build brand awareness and attract more customers.
                            </p>


                            <h4 className="font-semibold mb-4">
                                Best used when:
                            </h4>


                            <ul className="space-y-3">

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Increase brand recognition
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Promote multiple products
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Build long-term brand value
                                </li>

                            </ul>

                        </div>


                        {/* IMAGE */}
                        <div>

                            <img
                                src={img11}
                                className="rounded-xl shadow-xl"
                            />

                        </div>

                    </div>




                    {/* ROW 3 */}
                    <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

                        {/* IMAGE */}
                        <div>

                            <img
                                src={img12}
                                className="rounded-xl shadow-xl"
                            />

                        </div>


                        {/* CONTENT */}
                        <div>

                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                                Sponsored Display Campaigns
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Re-engage shoppers and target audiences both on and off Amazon
                                to increase conversions and recover lost sales.
                            </p>


                            <h4 className="font-semibold mb-4">
                                Best used when:
                            </h4>


                            <ul className="space-y-3">

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Retarget previous visitors
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Recover abandoned carts
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Expand reach beyond Amazon
                                </li>

                            </ul>

                        </div>

                    </div>




                    {/* ROW 4 */}
                    <div className="grid md:grid-cols-2 gap-14 items-center">

                        {/* CONTENT */}
                        <div>

                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                                Amazon Video Advertising
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Use engaging video ads to demonstrate your products and capture customer attention
                                across Amazon placements.
                            </p>


                            <h4 className="font-semibold mb-4">
                                Best used when:
                            </h4>


                            <ul className="space-y-3">

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Increase engagement visually
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Improve brand storytelling
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-[#1294d8] text-white rounded-full flex items-center justify-center text-sm">✓</div>
                                    Boost conversion rates
                                </li>

                            </ul>

                        </div>


                        {/* IMAGE */}
                        <div>

                            <img
                                src={img13}
                                className="rounded-xl shadow-xl"
                            />

                        </div>

                    </div>


                </div>

            </section>


            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Our Amazon PPC
                            <span className="text-[#25baff]"> Service Plans</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose the perfect Amazon PPC management plan to increase product visibility,
                            lower ACoS, and scale your sales profitably with expert campaign optimization.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


                        {/* STARTER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    STARTER
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#a8d97c]">$</span>

                                    <span className="text-5xl font-bold text-[#a8d97c]">
                                        399
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>Sponsored Products Setup</p>
                                    <p>Up to 2 Campaigns</p>
                                    <p>Keyword Research & Targeting</p>
                                    <p>Basic Bid Optimization</p>
                                    <p>Monthly Performance Report</p>

                                </div>

                            </div>

                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300">
                                    GET STARTED
                                </button>

                            </div>

                        </div>



                        {/* GROWTH */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    GROWTH
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-gray-300">$</span>

                                    <span className="text-5xl font-bold text-gray-300">
                                        699
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>Sponsored Products Management</p>
                                    <p>Sponsored Brands Campaigns</p>
                                    <p>Up to 6 Campaigns</p>
                                    <p>Conversion Tracking</p>
                                    <p>Bi-Weekly Optimization & Reports</p>

                                </div>

                            </div>

                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300">
                                    GET STARTED
                                </button>

                            </div>

                        </div>



                        {/* SCALE */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                                MOST POPULAR
                            </div>

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    SCALE
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#ff9800]">$</span>

                                    <span className="text-5xl font-bold text-[#ff9800]">
                                        999
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>Sponsored Products, Brands & Display</p>
                                    <p>Unlimited Campaign Optimization</p>
                                    <p>Advanced Bid Strategy</p>
                                    <p>Competitor Targeting</p>
                                    <p>Weekly Performance Reports</p>

                                </div>

                            </div>

                            <div className="pb-8">

                                <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300">
                                    GET STARTED
                                </button>

                            </div>

                        </div>



                        {/* ENTERPRISE */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    ENTERPRISE
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#607AFE]">$</span>

                                    <span className="text-5xl font-bold text-[#607AFE]">
                                        1499
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">

                                    <p>Full Amazon Ads Management</p>
                                    <p>Sponsored Products, Brands & Display</p>
                                    <p>Advanced Scaling Strategy</p>
                                    <p>Dedicated Amazon PPC Expert</p>
                                    <p>Weekly Strategy Calls & Reporting</p>

                                </div>

                            </div>

                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300">
                                    CONTACT SALES
                                </button>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

            <AmazonPPCPartner />
            <AmazonPPCFAQ />

        </div>
    );
};

export default AmazonPPC;