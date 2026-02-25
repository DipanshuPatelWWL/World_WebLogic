import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
        question: "What is Amazon PPC and how does it work?",
        answer:
            "Amazon PPC (Pay-Per-Click) is an advertising system where you pay only when someone clicks your ad. It helps your products appear in search results and product pages, increasing visibility and driving sales."
    },
    {
        question: "How quickly can I see results from Amazon PPC?",
        answer:
            "Initial improvements can be seen within the first 2–4 weeks. However, optimal performance and scaling usually occur after continuous optimization over 2–3 months."
    },
    {
        question: "Do you manage Sponsored Products, Brands, and Display ads?",
        answer:
            "Yes, we manage all Amazon ad types including Sponsored Products, Sponsored Brands, and Sponsored Display campaigns to maximize reach and conversions."
    },
    {
        question: "Can you reduce my ACoS?",
        answer:
            "Yes. Our optimization strategies focus on reducing wasted ad spend, improving targeting, and increasing conversions to lower your ACoS and improve profitability."
    },
    {
        question: "Do you provide reports and performance tracking?",
        answer:
            "Yes, we provide detailed performance reports including impressions, clicks, conversions, ACoS, and growth insights to keep you fully informed."
    },
    {
        question: "Is Amazon PPC suitable for new sellers?",
        answer:
            "Yes. Amazon PPC is essential for new sellers to gain visibility, generate initial sales, and improve organic rankings quickly."
    }
];

const AmazonPPCFAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const sectionRef = useRef(null);
    const faqRefs = useRef([]);

    const addFaqRef = (el) => {
        if (el && !faqRefs.current.includes(el)) {
            faqRefs.current.push(el);
        }
    };

    useEffect(() => {

        gsap.fromTo(
            faqRefs.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );

    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <section
            ref={sectionRef}
            className="py-28 px-6 bg-gradient-to-b from-white to-[#f1f7ff]"
        >

            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
                        Amazon PPC Services
                        <span className="text-[#1294d8]"> – FAQ</span>
                    </h2>

                    <p className="text-gray-600">
                        Get answers to the most common questions about our Amazon PPC management services.
                    </p>

                </div>


                {/* FAQ List */}
                <div className="space-y-4">

                    {faqData.map((faq, index) => {

                        const isOpen = activeIndex === index;

                        return (

                            <div
                                key={index}
                                ref={addFaqRef}
                                className="
                                    bg-white
                                    border border-gray-200
                                    rounded-xl
                                    overflow-hidden
                                    transition duration-300
                                    hover:border-[#1294d8]
                                    hover:shadow-lg
                                "
                            >

                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="
                                        w-full
                                        flex
                                        justify-between
                                        items-center
                                        p-6
                                        text-left
                                        font-semibold
                                        text-[#0f172a]
                                        hover:text-[#1294d8]
                                        transition
                                    "
                                >

                                    {faq.question}

                                    <FaChevronDown
                                        className={`
                                            transition-transform duration-300
                                            ${isOpen ? "rotate-180 text-[#1294d8]" : ""}
                                        `}
                                    />

                                </button>


                                {/* Answer */}
                                <div
                                    className={`
                                        overflow-hidden
                                        transition-all duration-500
                                        ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >

                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

};

export default AmazonPPCFAQ;