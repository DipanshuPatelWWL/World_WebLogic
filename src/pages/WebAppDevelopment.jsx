import { motion } from "framer-motion";
import {
    FaGlobe,
    FaMobileAlt,
    FaRocket,
    FaCode,
    FaLayerGroup,
} from "react-icons/fa";

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
        <section className="relative py-32 bg-gradient-to-br from-[#020202] via-[#020202] to-[#25baff]/40">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <h2 className="text-4xl font-semibold text-white mb-6">
                        Web & App Development
                    </h2>

                    <div className="h-1 w-40 rounded-full bg-gradient-to-r from-[#25baff] via-[#a8d97c] to-[#25baff] mb-6" />

                    <p className="text-gray-300 text-lg leading-relaxed">
                        We build scalable, secure, and future-ready web & mobile
                        applications designed to grow with your business.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLING CARDS) */}

                <div className="relative flex flex-col gap-24">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                top: `${120 + index * 40}px`,
                                zIndex: index + 1,
                            }}
                            className="
        sticky
        rounded-2xl
        bg-[#020202]/90
        border border-[#25baff]/30
        p-8
        transition-all duration-500
        hover:border-[#a8d97c]
        hover:shadow-[0_15px_60px_rgba(37,186,255,0.35)]
      "
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="
          flex h-14 w-14 items-center justify-center rounded-xl
          bg-gradient-to-br from-[#25baff] via-[#a8d97c] to-[#25baff]
          text-white text-2xl
        ">
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-3 text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-300">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default WebAppDevelopment;