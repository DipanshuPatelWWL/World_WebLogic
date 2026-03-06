import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index = 0 }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
        >
            {/* Image + Hover Overlay */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay + Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="
              bg-[#25baff] text-white 
              px-8 py-4 rounded-full font-semibold 
              transform translate-y-10 opacity-0 
              group-hover:translate-y-0 group-hover:opacity-100 
              transition-all duration-500 shadow-xl
              hover:bg-[#020202] active:scale-95
            "
                    >
                        View Project
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-[#020202] mb-2 group-hover:text-[#25baff] transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="
                bg-[#25baff]/10 text-[#25baff] 
                px-3 py-1 rounded-full text-xs font-medium
              "
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-gray-500 text-xs">+{project.technologies.length - 4}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}