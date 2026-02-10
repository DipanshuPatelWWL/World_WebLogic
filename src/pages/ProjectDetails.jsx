import { useParams, Link } from "react-router-dom";
import { projects } from "../data/project";

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div className="p-20 text-center text-[#020202]">Project not found</div>;
    }

    return (
        <div className="font-sans text-gray-700">

            {/* Header */}
            <section
                className="
          py-20 text-white
          bg-black
        "
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-gray-200 max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    {/* Left */}
                    <div className="space-y-6">

                        <p className="text-[#020202]">
                            <span className="font-semibold">Client:</span>{" "}
                            {project.client}
                        </p>

                        {/* Technologies */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#020202] mb-3">
                                Technologies Used
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="
                      bg-[#25baff]/15 text-[#25baff]
                      px-3 py-1 rounded-full text-sm font-medium
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 flex-wrap">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    bg-[#25baff] text-white
                    px-6 py-2 rounded-lg font-semibold
                    transition hover:bg-[#020202]
                  "
                                >
                                    Live Project
                                </a>
                            )}
                        </div>

                        <Link
                            to="/projects"
                            className="inline-block text-[#25baff] font-semibold hover:underline"
                        >
                            ← Back to Projects
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="space-y-8">

                        {/* Why Tech */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#020202] mb-3">
                                Why These Technologies?
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {project.whyTech.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#020202] mb-3">
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
