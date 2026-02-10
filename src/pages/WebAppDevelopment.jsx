import { FaGlobe, FaMobileAlt, FaRocket, FaCode, FaLayerGroup } from "react-icons/fa";

const services = [
    {
        title: "Best Global Portal Development Company",
        desc:
            "We work with startups, SMEs, enterprises, and established brands across continents with tested delivery across North America, Europe, Asia, and more.",
        icon: <FaGlobe />,
    },
    {
        title: "Cross-Platform Portal Development",
        desc:
            "Provide unified access and high performance on desktop, tablet, and mobile using responsive portal solutions.",
        icon: <FaMobileAlt />,
    },
    {
        title: "Future-Proof, Scalable Solutions",
        desc:
            "Our portals are designed for security, heavy user traffic, simple updates, and the ability to change as your business changes.",
        icon: <FaRocket />,
    },
    {
        title: "Custom Web Portal Development",
        desc:
            "Each solution is designed to your business objectives, industry, and specific requirements including customer and partner portals.",
        icon: <FaCode />,
    },
    {
        title: "Full-Stack Expertise",
        desc:
            "Our developers are experts in React, Angular, Node.js, Python, and more for robust portal app development.",
        icon: <FaLayerGroup />,
    },
];

const WebAppDevelopment = () => {
    return (
        <section
            className="
        relative py-20
        bg-gradient-to-br
        from-[#020202]
        via-[#020202]
        to-[#25baff]/40
      "
        >
            {/* Title */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-semibold text-white">
                    Web & App Development
                </h2>

                {/* 3-color underline */}
                <div
                    className="mt-4 mx-auto h-1 w-110 rounded-full
          bg-gradient-to-r from-[#25baff] via-[#a8d97c] to-[#25baff]"
                />
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="
              group relative rounded-2xl
              bg-[#020202]/80
              border border-[#25baff]/30
              p-8 cursor-pointer
              transition-all duration-500
              hover:bg-[#020202]
              hover:border-[#a8d97c]
              hover:shadow-[0_15px_60px_rgba(37,186,255,0.35)]
            "
                    >
                        {/* Icon */}
                        <div className="mb-6">
                            <div
                                className="
                  flex h-14 w-14 items-center justify-center rounded-xl
                  bg-gradient-to-br from-[#25baff] via-[#a8d97c] to-[#25baff]
                  text-white text-2xl
                  transition-all duration-700
                  group-hover:rotate-[360deg]
                "
                            >
                                {item.icon}
                            </div>
                        </div>

                        {/* Text */}
                        <h3
                            className="
                text-lg font-semibold mb-3
                text-white
                group-hover:text-[#25baff]
                transition-colors duration-300
              "
                        >
                            {item.title}
                        </h3>

                        <p
                            className="
                text-sm leading-relaxed
                text-gray-300
                group-hover:text-[#a8d97c]
                transition-colors duration-300
              "
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WebAppDevelopment;