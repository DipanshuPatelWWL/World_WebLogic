import { FaGlobe, FaMobileAlt, FaRocket, FaCode, FaLayerGroup } from "react-icons/fa";

const services = [
    {
        title: "Best Global Portal Development Company",
        desc:
            "We work with startups, SMEs, enterprises, and established brands across continents with tested delivery across North America, Europe, Asia, and more.",
        icon: <FaGlobe />
    },
    {
        title: "Cross-Platform Portal Development",
        desc:
            "Provide unified access and high performance on desktop, tablet, and mobile using responsive portal solutions.",
        icon: <FaMobileAlt />
    },
    {
        title: "Future-Proof, Scalable Solutions",
        desc:
            "Our portals are designed for security, heavy user traffic, simple updates, and the ability to change as your business changes.",
        icon: <FaRocket />
    },
    {
        title: "Custom Web Portal Development",
        desc:
            "Each solution is designed to your business objectives, industry, and specific requirements including customer and partner portals.",
        icon: <FaCode />
    },
    {
        title: "Full-Stack Expertise",
        desc:
            "Our developers are experts in React, Angular, Node.js, Python, and more for robust portal app development.",
        icon: <FaLayerGroup />
    }
];

const WebAppDevelopment = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-black to-blue-950">
            {/* Title */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-semibold text-white bg-clip-text text-transparent">
                    Web & App Development
                </h2>
                <div className="mt-3 mx-auto h-1 w-110 bg-orange-500 rounded-full"></div>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl bg-black/70 border border-blue-800 p-8 transition-all duration-500 hover:bg-orange-500 hover:border-orange-400 cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="mb-6">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 text-white text-2xl 
                              transition-transform duration-700 group-hover:rotate-[360deg]">
                                {item.icon}
                            </div>
                        </div>

                        {/* Text */}
                        <h3 className="text-lg font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-white">
                            {item.title}
                        </h3>

                        <p className="text-sm text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-white">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WebAppDevelopment;
