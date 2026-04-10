import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import kristin from "../assets/testmonial/kristin.jpg";
import sophia from "../assets/testmonial/sophia.jpg";
import daniel from "../assets/testmonial/daniel.jpg";

const testimonials = [
    {
        name: "Kristin Watson",
        role: "Chief Product Officer, SolarGen Inc.",
        image: kristin,
        rating: 5,
        text:
            "The automation tools they built saved us time, reduced costs, and increased overall efficiency significantly.",
    },
    {
        name: "Sophia Turner",
        role: "Founder, Growthify",
        image: sophia,
        rating: 4,
        text:
            "Professional, innovative, and extremely reliable. Highly recommended.",
    },
    {
        name: "Daniel Moore",
        role: "Product Manager, NovaTech",
        image: daniel,
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
        <section className="py-28 bg-gradient-to-br from-[#a8d97c] to-[#a8d97c]/10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Header */}
                <span className="inline-block text-5xl font-bold rounded-full text-[#000000]">
                    TESTIMONIALS
                </span>
                <h2 className="mt-2 text-3xl md:text-2xl font-bold text-[#25baff] mb-2">
                    Trusted by people around the world.
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



// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaStar, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// const testimonials = [
//     {
//         name: "Kristin Watson",
//         role: "Chief Product Officer, SolarGen Inc.",
//         videoUrl:
//             "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//         rating: 5,
//     },
//     {
//         name: "Sophia Turner",
//         role: "Founder, Growthify",
//         videoUrl:
//             "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//         rating: 4,
//     },
//     {
//         name: "Daniel Moore",
//         role: "Product Manager, NovaTech",
//         videoUrl:
//             "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//         rating: 5,
//     },
//     {
//         name: "Olivia Brown",
//         role: "CEO, BrightLabs",
//         videoUrl:
//             "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//         rating: 5,
//     },
//     {
//         name: "James Anderson",
//         role: "CTO, TechSphere",
//         videoUrl:
//             "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//         rating: 4,
//     },
// ];

// export default function Testimonials() {
//     const [active, setActive] = useState(0);
//     const [isHovering, setIsHovering] = useState(false);
//     const [isMuted, setIsMuted] = useState(true);
//     const videoRefs = useRef([]);

//     /* AUTO SLIDE */
//     useEffect(() => {
//         if (isHovering) return;

//         const interval = setInterval(() => {
//             setActive((prev) => (prev + 1) % testimonials.length);
//         }, 6000);

//         return () => clearInterval(interval);
//     }, [isHovering]);

//     /* HANDLE VIDEO PLAY */
//     useEffect(() => {
//         videoRefs.current.forEach((video, index) => {
//             if (!video) return;

//             if (index === active) {
//                 video.currentTime = 0;
//                 video.muted = true;
//                 video.play();
//                 setIsMuted(true);
//             } else {
//                 video.pause();
//                 video.currentTime = 0;
//             }
//         });
//     }, [active]);

//     const handleVideoEnd = (index) => {
//         const video = videoRefs.current[index];
//         if (video) {
//             video.muted = true;
//             setIsMuted(true);
//             video.currentTime = 0;
//             video.play();
//         }
//     };

//     /* CARD POSITION LOGIC */
//     const getStyle = (index) => {
//         const total = testimonials.length;
//         const position = (index - active + total) % total;

//         if (position === 0)
//             return { scale: 1, opacity: 1, zIndex: 3, x: 0 };

//         if (position === 1)
//             return { scale: 0.8, opacity: 0.5, zIndex: 2, x: 350 };

//         if (position === total - 1)
//             return { scale: 0.8, opacity: 0.5, zIndex: 2, x: -350 };

//         return { scale: 0.6, opacity: 0, zIndex: 1 };
//     };

//     return (
//         <section className="py-28 bg-black/95 overflow-hidden text-white">
//             <div className="max-w-6xl mx-auto px-6 text-center">

//                 <h2 className="text-5xl font-bold mb-16 tracking-tight">
//                     Testimonials
//                 </h2>

//                 <div
//                     className="relative h-[500px] flex justify-center items-center"
//                     onMouseEnter={() => setIsHovering(true)}
//                     onMouseLeave={() => setIsHovering(false)}
//                 >
//                     {testimonials.map((item, index) => {
//                         const total = testimonials.length;
//                         const position = (index - active + total) % total;
//                         const isSideCard = position === 1 || position === total - 1;

//                         return (
//                             <motion.div
//                                 key={index}
//                                 animate={getStyle(index)}
//                                 transition={{ duration: 0.6 }}
//                                 onClick={() => {
//                                     if (index !== active) {
//                                         setActive(index);
//                                     }
//                                 }}
//                                 className={`
//                   absolute w-[320px] h-[450px]
//                   bg-gray-900 rounded-3xl overflow-hidden
//                   shadow-2xl border border-white/10
//                   ${isSideCard ? "cursor-pointer" : ""}
//                 `}
//                             >
//                                 <video
//                                     ref={(el) => (videoRefs.current[index] = el)}
//                                     src={item.videoUrl}
//                                     className="w-full h-full object-cover"
//                                     muted
//                                     playsInline
//                                     onEnded={() => handleVideoEnd(index)}
//                                 />

//                                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
//                                     <div className="flex gap-1 text-yellow-400 mb-2">
//                                         {Array.from({ length: item.rating }).map((_, i) => (
//                                             <FaStar key={i} />
//                                         ))}
//                                     </div>

//                                     <h4 className="font-semibold text-lg">{item.name}</h4>
//                                     <p className="text-sm text-gray-300">{item.role}</p>
//                                 </div>

//                                 {index === active && (
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             const video = videoRefs.current[index];
//                                             if (video) {
//                                                 video.muted = !video.muted;
//                                                 setIsMuted(video.muted);
//                                             }
//                                         }}
//                                         className="absolute top-4 right-4 bg-black/60 p-3 rounded-full backdrop-blur-md"
//                                     >
//                                         {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//                                     </button>
//                                 )}
//                             </motion.div>
//                         );
//                     })}
//                 </div>

//                 {/* Indicators */}
//                 <div className="flex justify-center gap-3 mt-10">
//                     {testimonials.map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setActive(i)}
//                             className={`w-3 h-3 hover:cursor-pointer rounded-full transition ${active === i ? "bg-white" : "bg-gray-600"
//                                 }`}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }