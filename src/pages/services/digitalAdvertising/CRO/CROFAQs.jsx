import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const CROFAQs = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const faqRef = useRef([]);
    const sectionRef = useRef(null);

    const addFaqRef = (el) => {
        if (el && !faqRef.current.includes(el)) {
            faqRef.current.push(el);
        }
    };

    useEffect(() => {

        gsap.fromTo(
            faqRef.current,
            {
                opacity: 0,
                y: 60
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );

    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Conversion Rate Optimization (CRO)?",
            answer:
                "Conversion Rate Optimization (CRO) is the process of improving your website to increase the percentage of visitors who take action, such as making a purchase, filling out a form, or contacting your business."
        },
        {
            question: "Why is CRO important for my business?",
            answer:
                "CRO helps you generate more revenue from your existing traffic without increasing marketing spend. It improves user experience, increases conversions, and maximizes return on investment."
        },
        {
            question: "How do you identify conversion problems on my website?",
            answer:
                "We use analytics, heatmaps, session recordings, and user behavior analysis to identify friction points, drop-off areas, and opportunities for optimization."
        },
        {
            question: "How long does it take to see CRO results?",
            answer:
                "Initial improvements can be seen within a few weeks, but meaningful and scalable results typically develop over 1 to 3 months through continuous testing and optimization."
        },
        {
            question: "Do you perform A/B testing?",
            answer:
                "Yes. We run A/B and multivariate tests to compare different variations and identify the highest-performing design, layout, messaging, and conversion elements."
        },
        {
            question: "Can CRO improve lead generation?",
            answer:
                "Absolutely. CRO optimizes forms, landing pages, CTAs, and user journeys to increase qualified leads and conversion rates."
        },
        {
            question: "Is CRO suitable for small businesses?",
            answer:
                "Yes. CRO benefits businesses of all sizes by improving performance, increasing efficiency, and maximizing existing traffic value."
        },
        {
            question: "Do you provide CRO reports?",
            answer:
                "Yes. We provide detailed reports with insights, test results, performance improvements, and actionable recommendations."
        }
    ];

    return (

        <section
            ref={sectionRef}
            className="py-28 px-6 bg-gradient-to-b from-white to-[#f8fbff]"
        >

            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-4">
                        Conversion Rate Optimization Services
                        <span className="text-[#25baff]"> FAQs</span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about how CRO improves performance,
                        increases conversions, and grows your business.
                    </p>

                </div>


                {/* FAQ Items */}
                <div className="space-y-4">

                    {faqData.map((faq, index) => {

                        const isActive = activeIndex === index;

                        return (

                            <div
                                key={index}
                                ref={addFaqRef}
                                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300"
                            >

                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left p-5 font-semibold text-lg"
                                >

                                    <span>{faq.question}</span>

                                    <span
                                        className={`text-[#25baff] text-2xl transition-transform duration-300 ${isActive ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>

                                </button>


                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isActive
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">

                                        <p className="p-5 pt-0 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>

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

export default CROFAQs;