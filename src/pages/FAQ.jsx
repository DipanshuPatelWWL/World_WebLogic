import { useState } from "react";
import faqImage from "../assets/faq/faq.avif";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "Who is Digital WebGuider and what do you do?",
            answer:
                "Digital WebGuider is a full-service IT and digital solutions company that helps startups and growing businesses design, develop, and scale digital products including websites, web apps, mobile apps, and digital marketing solutions."
        },
        {
            question: "What services does Digital WebGuider specialize in?",
            answer:
                "We specialize in web design and development, custom web applications, mobile app development, SEO, performance marketing, UI/UX design, and long-term digital growth solutions."
        },
        {
            question: "What types of businesses do you work with?",
            answer:
                "We work with startups, small and mid-sized businesses, and enterprises across industries such as SaaS, e-commerce, healthcare, education, fintech, and service-based businesses."
        },
        {
            question: "Why should I choose Digital WebGuider over other agencies?",
            answer:
                "We focus on business outcomes, not just delivery. Our approach includes transparent communication, result-driven strategies, modern technologies, flexible pricing, and dedicated support throughout the project lifecycle."
        },
        {
            question: "Do you offer customized solutions or fixed packages?",
            answer:
                "Every project is unique. We provide fully customized solutions based on your business goals, timeline, and budget instead of one-size-fits-all packages."
        },
        {
            question: "How long does a typical project take?",
            answer:
                "Project timelines vary depending on scope and complexity. A standard website usually takes 2–4 weeks, while complex web or mobile applications may take 6–12 weeks."
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer:
                "Yes. We offer ongoing support, maintenance, performance optimization, and feature enhancements."
        },
        {
            question: "Do you follow secure and industry-standard development practices?",
            answer:
                "Absolutely. We follow clean code standards, secure development, and white-hat SEO practices."
        },
        {
            question: "Do you work with international clients?",
            answer:
                "Yes, we work globally including India, US, Australia, and more."
        },
        {
            question: "Is there a long-term contract or commitment?",
            answer:
                "No lock-ins. We build partnerships based on trust and quality."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-black/80 py-12 px-4">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE IMAGE */}
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,186,255,0.2)]">

                    <img
                        src={faqImage}
                        alt="FAQ"
                        className="w-full h-full object-cover"
                    />

                </div>

                {/* RIGHT SIDE FAQ */}
                <div className="bg-white rounded-2xl shadow-[0_0_40px_rgba(37,186,255,0.15)] p-6">

                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#020202]">
                        Frequently Asked Questions
                    </h2>

                    {/* Scrollable FAQ Container */}
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scroll">

                        {faqData.map((item, index) => {

                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => toggleFAQ(index)}
                                    className={`
                                        border rounded-xl cursor-pointer
                                        transition-all duration-300
                                        ${isActive
                                            ? "border-[#25baff] shadow-[0_0_18px_rgba(37,186,255,0.25)]"
                                            : "border-gray-200"
                                        }
                                    `}
                                >

                                    {/* Question */}
                                    <div className="flex justify-between items-center px-5 py-4">

                                        <span className="font-medium text-sm md:text-base">
                                            {item.question}
                                        </span>

                                        <span
                                            className={`
                                                w-8 h-8 flex items-center justify-center
                                                rounded-full text-white bg-[#25baff]
                                                transition-all duration-300
                                                ${isActive
                                                    ? "rotate-45 bg-[#a8d97c] text-black"
                                                    : ""
                                                }
                                            `}
                                        >
                                            +
                                        </span>

                                    </div>

                                    {/* Answer */}
                                    <div
                                        className={`
                                            px-5 text-gray-600 text-sm md:text-base
                                            overflow-hidden transition-all duration-300
                                            ${isActive
                                                ? "max-h-40 pb-4 opacity-100"
                                                : "max-h-0 opacity-0"
                                            }
                                        `}
                                    >
                                        {item.answer}
                                    </div>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default FAQ;