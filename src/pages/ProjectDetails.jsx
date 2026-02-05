import { useParams, Link } from "react-router-dom";
import { projects } from "../data/project";

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div className="p-20 text-center">Project not found</div>;
    }

    return (
        <div className="font-sans text-gray-800">

            {/* Header */}
            <section className="bg-[#0b1c3d] text-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-blue-200 max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    {/* Left */}
                    <div className="space-y-6">
                        <p>
                            <span className="font-semibold">Client:</span>{" "}
                            {project.client}
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
                                >
                                    Live Project
                                </a>
                            )}
                        </div>

                        <Link
                            to="/projects"
                            className="inline-block text-orange-500 font-semibold"
                        >
                            ← Back to Projects
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="space-y-8">

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Why These Technologies?
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {project.whyTech.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Project Specifications
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {project.specifications.map((spec, i) => (
                                    <li key={i}>{spec}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
