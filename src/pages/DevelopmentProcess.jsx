import { useState } from "react";
import {
    FaSearch,
    FaProjectDiagram,
    FaPalette,
    FaCode,
    FaVial,
    FaRocket,
    FaTools,
} from "react-icons/fa";

import requirementsAnalysis from "../assets/developmentProcess/requirementsAnalysis.avif";
import projectPlanning from "../assets/developmentProcess/projectPlanning.avif";
import design from "../assets/developmentProcess/design.avif";
import coding from "../assets/developmentProcess/coding.avif";
import testing from "../assets/developmentProcess/testing.avif";
import deployment from "../assets/developmentProcess/deployment.avif";
import maintenance from "../assets/developmentProcess/maintenance.avif";

/* ================= PROCESS STEPS ================= */
const processSteps = [
    {
        title: "Requirements & Analysis",
        icon: FaSearch,
        image: requirementsAnalysis,
    },
    {
        title: "Project Planning",
        icon: FaProjectDiagram,
        image: projectPlanning,
    },
    {
        title: "Design",
        icon: FaPalette,
        image: design,
    },
    {
        title: "Coding & Implementation",
        icon: FaCode,
        image: coding,
    },
    {
        title: "Testing",
        icon: FaVial,
        image: testing,
    },
    {
        title: "Deployment",
        icon: FaRocket,
        image: deployment,
    },
    {
        title: "Maintenance",
        icon: FaTools,
        image: maintenance,
    },
];

const DevelopmentProcess = () => {
    // First step active by default (better UX + mobile support)
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="relative py-28 bg-black overflow-hidden">
            {/* ================= Dynamic Background ================= */}
            <div className="absolute inset-0 z-0 transition-opacity duration-700">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${processSteps[activeStep].image})`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            {/* ================= Content ================= */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl lg:text-5xl font-semibold text-center text-white">
                    Our Development Process
                </h2>

                {/* Underline */}
                <div className="flex justify-center mt-5">
                    <span className="w-32 h-1 bg-gradient-to-r from-[#25baff] to-[#a8d97c] rounded-full" />
                </div>

                {/* ================= Process Steps ================= */}
                <div className="mt-20 relative">
                    {/* Timeline Line */}
                    <div
                        className="
              hidden lg:block absolute top-10 left-10 right-10
              h-[3px]
              bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600
              z-0
            "
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-14 relative z-10">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = activeStep === index;

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveStep(index)}
                                    onClick={() => setActiveStep(index)}
                                    className="flex flex-col items-center text-center cursor-pointer group"
                                >
                                    {/* Icon */}
                                    <div
                                        className={`
                      relative z-20
                      w-20 h-20 flex items-center justify-center
                      rounded-full text-white text-3xl
                      transition-all duration-500 ease-out
                      ${isActive
                                                ? "bg-[#25baff] shadow-[0_0_30px_rgba(37,186,255,0.6)] scale-110 ring-4 ring-[#25baff]/40"
                                                : "bg-[#1f2933] group-hover:bg-[#25baff]/80"
                                            }
                    `}
                                    >
                                        <Icon />
                                    </div>

                                    {/* Label */}
                                    <h4
                                        className={`
                      mt-6 text-sm font-medium tracking-wide transition-colors duration-300
                      ${isActive
                                                ? "text-white"
                                                : "text-gray-400 group-hover:text-gray-200"
                                            }
                    `}
                                    >
                                        {step.title}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
