import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

export default function Projects() {
    return (
        <div className="font-sans text-gray-700">

            {/* Header */}
            <section className="py-20 text-white
                bg-gradient-to-r from-[#020202] via-[#020202]/90 to-[#25baff]/60">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Our Projects
                    </h1>
                    <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
                        Real-world digital solutions built for performance, scale, and business growth.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20
                bg-gradient-to-br from-[#25baff]/10 via-white to-[#a8d97c]/10">
                <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

        </div>
    );
}
