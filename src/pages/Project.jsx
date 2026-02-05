import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

export default function Projects() {
    return (
        <div className="font-sans text-gray-800">

            {/* Header */}
            <section className="bg-gradient-to-r from-[#0b1c3d] to-[#123a78] text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Our Projects
                    </h1>
                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Real-world digital solutions built for performance, scale, and business growth.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

        </div>
    );
}
