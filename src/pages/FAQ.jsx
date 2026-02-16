import { useState } from "react";

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
                "Yes. We offer ongoing support, maintenance, performance optimization, and feature enhancements to ensure your product remains secure, scalable, and up to date."
        },
        {
            question: "Do you follow secure and industry-standard development practices?",
            answer:
                "Absolutely. We follow industry best practices including clean code standards, secure development guidelines, and white-hat SEO techniques for long-term and sustainable growth."
        },
        {
            question: "Do you work with international clients?",
            answer:
                "Yes, we work with clients globally including India, the United States, Australia, and other regions, with flexible communication across time zones."
        },
        {
            question: "Is there a long-term contract or commitment?",
            answer:
                "No long-term lock-ins. We believe in building long-term partnerships through quality work, transparency, and consistent results—not contracts."
        }
    ];


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className="
    min-h-screen flex items-center justify-center
    px-4 sm:px-6 py-10 sm:py-12
    bg-gradient-to-br from-[#25baff]/10 via-white to-[#a8d97c]/10
  "
        >
            <div className="w-full max-w-4xl rounded-2xl bg-white p-6 sm:p-8 shadow-[0_0_40px_rgba(37,186,255,0.15)]">

                {/* Title */}
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 text-[#020202]">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`
              rounded-xl sm:rounded-2xl bg-white
              border transition-all duration-300
              cursor-pointer
              ${isActive
                                        ? "border-[#25baff] shadow-[0_0_18px_rgba(37,186,255,0.25)]"
                                        : "border-gray-200"}
            `}
                                onClick={() => toggleFAQ(index)}
                            >
                                {/* Question */}
                                <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5">
                                    <span className="text-[#020202] font-medium text-sm sm:text-base leading-snug">
                                        {item.question}
                                    </span>

                                    {/* Plus Icon */}
                                    <span
                                        className={`
                  flex h-8 w-8 sm:h-9 sm:w-9
                  items-center justify-center
                  rounded-full
                  bg-[#25baff] text-white
                  text-lg font-medium
                  transition-all duration-300 flex-shrink-0
                  ${isActive ? "rotate-45 bg-[#a8d97c] text-[#020202]" : ""}
                `}
                                    >
                                        +
                                    </span>
                                </div>

                                {/* Answer */}
                                <div
                                    className={`
                px-4 sm:px-6
                text-sm sm:text-base
                leading-relaxed
                transition-all duration-300 ease-in-out
                overflow-hidden
                ${isActive
                                            ? "max-h-96 pb-4 sm:pb-5 opacity-100 text-gray-600"
                                            : "max-h-0 opacity-0"}
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

    );
};

export default FAQ;
