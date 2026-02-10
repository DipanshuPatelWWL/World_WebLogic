import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="
            bg-white rounded-2xl shadow-lg p-6
            flex flex-col justify-between
            transition-all duration-300
            hover:shadow-2xl hover:-translate-y-1
        ">
            <div>
                <h3 className="text-xl font-semibold text-[#020202]">
                    {project.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                    {project.shortDesc}
                </p>

                <p className="mt-3 text-sm text-gray-700">
                    <span className="font-semibold text-[#020202]">Client:</span>{" "}
                    {project.client}
                </p>
            </div>

            <Link
                to={`/projects/${project.slug}`}
                className="
                    mt-6 inline-block w-max
                    bg-[#25baff] text-white
                    text-sm font-semibold
                    px-5 py-2 rounded-lg
                    transition-all duration-300
                    hover:bg-[#a8d97c] hover:text-[#020202]
                "
            >
                View Details
            </Link>
        </div>
    );
}
