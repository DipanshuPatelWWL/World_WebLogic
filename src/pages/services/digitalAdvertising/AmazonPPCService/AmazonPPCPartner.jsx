import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import {
    FaAmazon,
    FaChartLine,
    FaBullseye,
    FaCogs,
    FaRocket,
    FaUserTie
} from "react-icons/fa";
const whyChooseUs = [
    {
        icon: <FaAmazon />,
        title: "Amazon Advertising Specialists",
        text: "Our team focuses exclusively on Amazon PPC, ensuring deep expertise and proven campaign strategies tailored for Amazon's ecosystem."
    },
    {
        icon: <FaChartLine />,
        title: "Data-Driven Optimization",
        text: "We use real performance data, search term analysis, and conversion metrics to continuously improve campaign efficiency."
    },
    {
        icon: <FaBullseye />,
        title: "Lower ACoS & Higher ROI",
        text: "Our optimization process reduces wasted ad spend and improves profitability, delivering better returns from your advertising budget."
    },
    {
        icon: <FaCogs />,
        title: "Advanced Campaign Management",
        text: "We manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns with advanced scaling strategies."
    },
    {
        icon: <FaRocket />,
        title: "Scalable Growth Strategy",
        text: "We identify winning campaigns and scale them safely to maximize revenue while maintaining strong performance."
    },
    {
        icon: <FaUserTie />,
        title: "Dedicated PPC Experts",
        text: "Work directly with experienced Amazon PPC specialists focused on growing your business and improving results."
    }
];

const AmazonPPCPartner = () => {

    const chooseRef = useRef(null);
    const chooseCardsRef = useRef([]);

    const addChooseCardRef = (el) => {
        if (el && !chooseCardsRef.current.includes(el)) {
            chooseCardsRef.current.push(el);
        }
    };
    useEffect(() => {

        gsap.fromTo(
            chooseCardsRef.current,
            {
                opacity: 0,
                y: 80,
                scale: 0.9,
                rotateX: 30
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: chooseRef.current,
                    start: "top 75%",
                }
            }
        );

    }, []);
    return (
        <>
            <section
                ref={chooseRef}
                className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#eef6ff]"
            >

                {/* glow orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#25baff]/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#4f46e5]/20 blur-[120px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto">


                    {/* Heading */}
                    <div className="text-center mb-20">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
                            Why Choose Us as Your
                            <span className="text-[#25baff]"> Amazon PPC Partner</span>
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We combine Amazon expertise, advanced optimization strategies,
                            and proven scaling systems to deliver measurable growth and higher ROI.
                        </p>

                    </div>



                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {whyChooseUs.map((item, index) => (

                            <div
                                key={index}
                                ref={addChooseCardRef}
                                className="
                        group
                        relative
                        bg-white
                        border border-gray-200
                        rounded-2xl
                        p-8
                        transition-all duration-500
                        hover:-translate-y-4
                        hover:border-[#1294d8]
                        hover:shadow-[0_20px_60px_rgba(18,148,216,0.15)]
                    "
                            >

                                {/* glow overlay */}
                                <div className="
                        absolute inset-0 opacity-0 group-hover:opacity-100
                        transition duration-500
                        bg-gradient-to-br from-[#1294d8]/5 to-[#6366f1]/5
                        rounded-2xl
                    "></div>


                                {/* icon */}
                                <div className="
                        relative
                        w-16 h-16
                        flex items-center justify-center
                        bg-gradient-to-br from-[#25baff] to-[#25baff]
                        text-white
                        text-2xl
                        rounded-xl
                        mb-6
                        transition duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                        shadow-md
                    ">
                                    {item.icon}
                                </div>


                                {/* title */}
                                <h3 className="
                        relative
                        text-xl font-bold text-[#0f172a] mb-4
                        group-hover:text-[#1294d8]
                        transition duration-300
                    ">
                                    {item.title}
                                </h3>


                                {/* text */}
                                <p className="relative text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>


                            </div>

                        ))}

                    </div>


                </div>

            </section>
        </>
    )
}

export default AmazonPPCPartner
