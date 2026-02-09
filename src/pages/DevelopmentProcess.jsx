import {
    FaSearch,
    FaProjectDiagram,
    FaPalette,
    FaCode,
    FaVial,
    FaRocket,
    FaTools,
} from "react-icons/fa";

const processSteps = [
    { title: "Requirements & Analysis", icon: FaSearch, color: "bg-blue-500" },
    { title: "Project Planning", icon: FaProjectDiagram, color: "bg-green-500" },
    { title: "Design", icon: FaPalette, color: "bg-red-500" },
    { title: "Coding & Implementation", icon: FaCode, color: "bg-orange-500" },
    { title: "Testing", icon: FaVial, color: "bg-purple-500" },
    { title: "Deployment", icon: FaRocket, color: "bg-teal-500" },
    { title: "Maintenance", icon: FaTools, color: "bg-slate-600" },
];

const DevelopmentProcess = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-white">
                    Our Development Process
                </h2>

                {/* Underline */}
                <div className="flex justify-center mt-4">
                    <span className="w-112 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></span>
                </div>

                {/* Process */}
                <div className="mt-20 relative">
                    {/* Horizontal Line */}
                    <div className="hidden lg:block absolute top-10 left-7 right-8 h-[5px] bg-gradient-to-r from-gray-500 via-gray-200 to-gray-100"></div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-12 relative">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Icon Circle */}
                                    <div
                                        className={`w-20 h-20 flex items-center justify-center rounded-full text-white text-3xl shadow-xl ${step.color}
                    group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <Icon />
                                    </div>

                                    {/* Label */}
                                    <h4 className="mt-5 text-sm font-semibold text-gray-300 leading-tight">
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
