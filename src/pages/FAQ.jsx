import { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "Who is World WebLogic?",
            answer:
                "World WebLogic is an online marketing solutions company providing services such as website design and development, social media marketing, SEO, SEM, PPC, mobile application development, and online reputation management."
        },
        {
            question: "What services does World WebLogic offer?",
            answer:
                "We offer complete digital marketing and development services including SEO, SEM, PPC, social media marketing, website development, mobile app development, and online reputation management."
        },
        {
            question: "Why should you choose World WebLogic?",
            answer:
                "We follow strict white-hat SEO practices, deliver result-driven branding solutions, focus on organic growth, offer creative services, and provide affordable and comprehensive packages."
        },
        {
            question: "Do you follow white-hat SEO practices?",
            answer:
                "Yes, we strictly adhere to search engine guidelines and use only white-hat SEO techniques for sustainable and long-term results."
        },
        {
            question: "Does World WebLogic work with international clients?",
            answer:
                "Yes, we work with clients in India as well as internationally, including the United States and Australia."
        },
        {
            question: "What makes your team reliable?",
            answer:
                "Our consultants are experts in SEO, PPC, and social media marketing. We are proud of our high client retention rate due to consistent and proven results."
        },
        {
            question: "Do you offer long-term contracts?",
            answer:
                "No, we do not bind clients with long-term contracts. We believe in earning trust through performance and results."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 px-4 pb-6 pt-6">
            <div className="w-full max-w-5xl rounded-2xl bg-white p-8 shadow-[0_0_40px_rgba(37,99,235,0.2)]">

                {/* Title */}
                <h2 className="text-center text-4xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-full p-4 bg-white overflow-hidden border transition-all duration-300 cursor-pointer ${isActive
                                    ? "border-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.4)]"
                                    : "border-blue-100"
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {/* Question */}
                                <div className="flex items-center justify-between px-6 py-4 text-left text-black text-sm md:text-base transition">
                                    <span>{item.question}</span>

                                    {/* Plus Icon */}
                                    <span
                                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white text-xl font-medium transition-transform duration-300 ${isActive ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </div>

                                {/* Answer */}
                                <div
                                    className={`px-6 text-blue-700 text-sm leading-relaxed transition-all duration-300 ease-in-out ${isActive
                                        ? "max-h-40 pb-5 opacity-100"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
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
