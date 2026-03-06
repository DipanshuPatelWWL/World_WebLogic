import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div className="font-sans text-gray-700 min-h-screen">

            {/* Header - keeping your exact gradient & style */}
            <section className="py-20 text-white bg-gradient-to-r from-[#020202] via-[#020202]/90 to-[#25baff]/60">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Our Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-gray-200 max-w-2xl mx-auto"
                    >
                        Real-world digital solutions built for performance, scale, and business growth.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-gradient-to-br from-[#25baff]/10 via-white to-[#a8d97c]/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id || project.slug} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}