import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Kristin Watson",
        role: "Chief Product Officer, SolarGen Inc.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text:
            "The automation tools they built saved us time, reduced costs, and increased overall efficiency significantly.",
    },
    {
        name: "Sophia Turner",
        role: "Founder, Growthify",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4,
        text:
            "Professional, innovative, and extremely reliable. Highly recommended.",
    },
    {
        name: "Daniel Moore",
        role: "Product Manager, NovaTech",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        text:
            "They delivered beyond expectations. The UI, performance, and support were outstanding.",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    /* ================= AUTO SCROLL ================= */
    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovering]);

    /* ================= CARD POSITION LOGIC ================= */
    const getStyle = (index) => {
        const position =
            (index - active + testimonials.length) % testimonials.length;

        if (position === 0) {
            return {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                zIndex: 3,
                x: 0,
            };
        }

        if (position === 1) {
            return {
                scale: 0.9,
                opacity: 0.6,
                filter: "blur(2px)",
                zIndex: 2,
                x: 240,
            };
        }

        if (position === testimonials.length - 1) {
            return {
                scale: 0.9,
                opacity: 0.6,
                filter: "blur(2px)",
                zIndex: 2,
                x: -240,
            };
        }

        return {
            opacity: 0,
            scale: 0.8,
            zIndex: 1,
        };
    };

    return (
        <section className="py-28 bg-gradient-to-br from-[#25baff]/10 via-white to-[#a8d97c]/10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Header */}
                <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-[#25baff]/20 text-[#25baff]">
                    TESTIMONIALS
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#020202] mb-20">
                    Trusted by people <br /> around the world.
                </h2>

                {/* Cards */}
                <div
                    className="relative h-[380px] flex justify-center items-center"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            animate={getStyle(index)}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="
                absolute w-full max-w-xl
                bg-white/80 backdrop-blur-xl
                rounded-3xl p-10
                border border-white/50
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
              "
                        >
                            {/* Stars */}
                            <div className="flex justify-center gap-1 text-yellow-400 mb-6">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 text-xl leading-relaxed">
                                “{item.text}”
                            </p>

                            {/* Profile */}
                            <div className="flex items-center justify-center gap-4 mt-10">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div className="text-left">
                                    <h4 className="font-semibold text-[#020202] text-lg">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-3 h-3 rounded-full transition ${active === i ? "bg-[#25baff]" : "bg-gray-300 hover:cursor-pointer"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}