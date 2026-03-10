import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Colorful icons for technologies
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaAws,
    FaDocker,
    FaShopify,
    FaGoogle,
    FaChartLine,
    FaSearch,
    FaWordpress,
    FaPhp
} from "react-icons/fa";

import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiRedux,
    SiSocketdotio,
    SiSanity,
    SiFramer,
    SiAlgolia,
    SiFirebase,
    SiExpress,
    SiMysql,
    SiApache,
    SiLinux,
    SiMongodb
} from "react-icons/si";
import { Link } from 'react-router-dom';
import Projects from '../pages/Project';

export default function Portfolio() {

    return (
        <div className="min-h-screen font-sans text-gray-700 bg-gray-50/50">
            {/* Hero Section */}
            <section className="relative py-28 md:py-36 text-white bg-gradient-to-r from-[#020202] via-[#020202]/95 to-[#25baff]/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        Our Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
                    >
                        Real-world digital solutions built for performance, scale, and measurable business growth.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block bg-[#25baff] text-white font-semibold mt-4 px-10 py-4 rounded-lg shadow-lg hover:bg-[#020202] transition-colors duration-300"
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Projects showHeader={false} />

            <TechnologiesSection />
            <TestimonialsSection />
            <CtaSection />
        </div>
    );
}

// ────────────────────────────────────────────────
// Reusable Components
// ────────────────────────────────────────────────

function PortfolioCard({ project, index }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Map tech names to colorful icons
    const techIcons = {
        React: <FaReact className="text-[#61DAFB]" />,
        'Next.js': <SiNextdotjs className="text-black" />,
        'Node.js': <FaNodeJs className="text-[#68A063]" />,
        MongoDB: <FaDatabase className="text-[#4DB33D]" />,
        TypeScript: <SiTypescript className="text-[#3178C6]" />,
        Firebase: <SiFirebase className="text-[#FFCA28]" />,
        Tailwind: <SiTailwindcss className="text-[#38BDF8]" />,
        'Framer Motion': <SiFramer className="text-[#0055FF]" />,
        Redux: <SiRedux className="text-[#764ABC]" />,
        'Socket.io': <SiSocketdotio className="text-black" />,
        Shopify: <FaShopify className="text-[#7AB55C]" />,
        Algolia: <SiAlgolia className="text-[#5468FF]" />,
        Sanity: <SiSanity className="text-[#F03E2F]" />,
        AWS: <FaAws className="text-[#FF9900]" />,
        Docker: <FaDocker className="text-[#2496ED]" />,
        'Google Maps API': <FaGoogle className="text-[#4285F4]" />,
        Analytics: <FaChartLine className="text-[#34A853]" />,
        'SEO tools': <FaSearch className="text-[#EA4335]" />,
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <a
                        href={`/portfolio/${project.id}`}
                        className="bg-[#25baff] text-white px-8 py-3.5 rounded-lg font-semibold transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg hover:bg-[#020202] active:scale-95"
                    >
                        View Project
                    </a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-[#020202] mb-2 group-hover:text-[#25baff] transition-colors">
                    {project.title}
                </h3>
                <p className="text-[#25baff] font-medium text-sm mb-3 capitalize">
                    {project.category === 'webapp' ? 'Web Application' : project.category}
                </p>
                <p className="text-gray-600 text-sm mb-5 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 bg-[#25baff]/10 text-[#25baff] px-3 py-1.5 rounded-full text-xs font-medium border border-[#25baff]/20"
                        >
                            {techIcons[tech] || <FaReact className="text-gray-500" />}
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function TechnologiesSection() {
    const [activeTech, setActiveTech] = useState(null);
    const techIcons = {
        React: <FaReact className="text-[#61DAFB]" />,
        "Next.js": <SiNextdotjs className="text-white" />,
        "Node.js": <FaNodeJs className="text-[#68A063]" />,
        "Express.js": <SiExpress className="text-gray-300" />,
        "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
        MongoDB: <SiMongodb className="text-[#47A248]" />,
        AWS: <FaAws className="text-[#FF9900]" />,
        Docker: <FaDocker className="text-[#2496ED]" />,
        PHP: <FaPhp className="text-[#777BB4]" />,
        WordPress: <FaWordpress className="text-[#21759B]" />,
        MySQL: <SiMysql className="text-[#4479A1]" />,
        Apache: <SiApache className="text-[#D22128]" />,
        Linux: <SiLinux className="text-gray-200" />,
    };

    const techs = [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "Docker",
        "PHP",
        "WordPress",
        "MySQL",
        "Apache",
        "Linux"
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#020617] relative overflow-hidden">

            {/* Background Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {activeTech && (
                    <motion.div
                        key={activeTech}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 0.12, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-[320px]"
                    >
                        {techIcons[activeTech]}
                    </motion.div>
                )}

            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Technologies We Master
                </h2>

                <div className="flex flex-wrap justify-center gap-5 md:gap-6">

                    {techs.map((tech, i) => (
                        <motion.div
                            key={tech}
                            onMouseEnter={() => setActiveTech(tech)}
                            onMouseLeave={() => setActiveTech(null)}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="
backdrop-blur-lg
bg-white/5
border border-white/10
px-6 py-3
rounded-xl
font-medium
text-sm md:text-base
flex items-center gap-2
shadow-lg
hover:bg-white/10
hover:shadow-[0_0_25px_rgba(37,186,255,0.35)]
transition-all duration-300
cursor-pointer
"
                        >

                            <span className="text-lg">
                                {techIcons[tech]}
                            </span>

                            <span className="text-white">
                                {tech}
                            </span>

                        </motion.div>
                    ))}

                </div>
            </div>

        </section>
    );
}

function TestimonialsSection() {
    const testimonials = [
        {
            quote:
                'DigitalWebGuider transformed our online presence. Leads increased by over 200% in just 8 months. Highly recommended!',
            name: 'Rahul Sharma',
            role: 'CEO, TechNova',
            rating: 5,
        },
        {
            quote:
                'The team delivered a stunning e-commerce site ahead of schedule with exceptional performance. Our conversion rate jumped 85%.',
            name: 'Priya Malhotra',
            role: 'Founder, UrbanVogue',
            rating: 5,
        },
        {
            quote:
                'Professional, responsive, and results-driven. Our SaaS dashboard is now loved by users — thanks to their clean UI/UX and fast delivery.',
            name: 'Amit Verma',
            role: 'Product Head, DataPulse',
            rating: 5,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#25baff]/5 to-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#020202] mb-16">What Our Clients Say</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                        >
                            <p className="text-lg italic text-gray-700 mb-6">"{t.quote}"</p>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="w-14 h-14 bg-gray-200 rounded-full" />
                                <div className="text-left">
                                    <p className="font-bold text-[#020202]">{t.name}</p>
                                    <p className="text-sm text-gray-600">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-[#25baff] text-2xl">{'★'.repeat(t.rating)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CtaSection() {
    return (
        <section
            id="contact"
            className="py-28 md:py-36 bg-gradient-to-r from-[#020202] to-[#25baff]/70 text-white text-center px-6"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8"
                >
                    Have a Project in Mind?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl mb-10 opacity-90"
                >
                    Let’s build something amazing together and drive real measurable growth for your business.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-[#020202] font-bold px-12 py-5 rounded-lg text-lg md:text-xl shadow-2xl transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                    >
                        Start Your Project Today
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}