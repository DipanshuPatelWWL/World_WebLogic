import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition">
            <div>
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                    {project.shortDesc}
                </p>

                <p className="mt-3 text-sm">
                    <span className="font-semibold">Client:</span>{" "}
                    {project.client}
                </p>
            </div>

            <Link
                to={`/projects/${project.slug}`}
                className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg w-max"
            >
                View Details
            </Link>
        </div>
    );
}
