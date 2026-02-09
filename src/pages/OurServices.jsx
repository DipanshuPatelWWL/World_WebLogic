import { useState } from "react";
import {
    FaMobileAlt,
    FaRobot,
    FaCode,
    FaBullhorn,
    FaBug,
    FaCloud,
} from "react-icons/fa";

const servicesData = {
    "Mobility Solution": [
        {
            title: "Flutter Apps",
            desc: "Cross-platform Flutter apps that save time and deliver smooth performance.",
            icon: <FaMobileAlt />,
        },
        {
            title: "React Native",
            desc: "High-performance mobile apps using React Native technology.",
            icon: <FaMobileAlt />,
        },
        {
            title: "Android Apps",
            desc: "Secure, scalable Android applications with modern frameworks.",
            icon: <FaMobileAlt />,
        },
        {
            title: "iOS / iPhone Apps",
            desc: "Optimized iOS apps using Apple’s latest technologies.",
            icon: <FaMobileAlt />,
        },
    ],

    "AI / ML Solution": [
        {
            title: "Artificial Intelligence",
            desc: "AI systems that simulate human intelligence for smarter decisions.",
            icon: <FaRobot />,
        },
        {
            title: "Data Science",
            desc: "Transform raw data into meaningful insights and predictions.",
            icon: <FaRobot />,
        },
        {
            title: "AWS AI/ML",
            desc: "Deploy scalable machine learning solutions on AWS.",
            icon: <FaCloud />,
        },
        {
            title: "Google Cloud AI/ML",
            desc: "Advanced AI models built on Google Cloud infrastructure.",
            icon: <FaCloud />,
        },
    ],

    "Software Development": [
        {
            title: "Custom Development",
            desc: "Tailor-made software solutions built for your business needs.",
            icon: <FaCode />,
        },
        {
            title: "API Design & REST Services",
            desc: "Robust APIs for seamless system integration.",
            icon: <FaCode />,
        },
        {
            title: "Hire Dedicated Team",
            desc: "Dedicated developers focused entirely on your project.",
            icon: <FaCode />,
        },
    ],

    "Digital Marketing": [
        {
            title: "SEO Services",
            desc: "Improve organic rankings and long-term visibility.",
            icon: <FaBullhorn />,
        },
        {
            title: "Social Media Marketing",
            desc: "Engage users and grow your brand on social platforms.",
            icon: <FaBullhorn />,
        },
        {
            title: "Pay Per Click Services",
            desc: "Data-driven PPC campaigns to boost conversions.",
            icon: <FaBullhorn />,
        },
    ],

    "Software Testing": [
        {
            title: "Automation Testing",
            desc: "Reduce manual effort with automated testing solutions.",
            icon: <FaBug />,
        },
        {
            title: "Web Application Testing",
            desc: "Ensure cross-browser and platform compatibility.",
            icon: <FaBug />,
        },
        {
            title: "Mobile App Testing",
            desc: "Deliver flawless mobile app performance.",
            icon: <FaBug />,
        },
    ],
};

const OurServices = () => {
    const categories = Object.keys(servicesData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section className="py-20 bg-white text-black">
            {/* Heading */}
            <div className="text-center mb-14">
                <p className="text-orange-500 uppercase text-lg tracking-widest">
                    Our Services
                </p>
                <h2 className="text-4xl font-semibold">
                    What We Provide
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Left Sidebar */}
                <div className="space-y-3">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`w-full text-left px-5 py-4 rounded-md font-medium transition-all duration-300 border-l-4 hover:cursor-pointer
                                ${activeCategory === cat
                                    ? "bg-orange-500 text-white border-orange-500"
                                    : "bg-white text-gray-700 border-gray-200 hover:bg-orange-50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Right Content */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicesData[activeCategory].map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-xl bg-white border border-gray-200 p-6 transition-all duration-500 cursor-pointer hover:bg-orange-500 hover:border-orange-500"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div
                                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 text-2xl
                                    transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-orange-500"
                                >
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
