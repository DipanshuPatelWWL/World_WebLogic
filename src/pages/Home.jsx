import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="font-sans text-gray-800">
            {/* HEADER / HERO */}
            <header className="bg-gradient-to-r from-[#0b1c3d] to-[#123a78] text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Web Design & Development Services
                        </h1>
                        <p className="mt-6 text-lg text-blue-100">
                            We design and develop beautiful, conversion-focused websites and
                            applications that scale with your business.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold">
                                Our Services
                            </button>

                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            alt="Hero"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </header>

            {/* SERVICES */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Our Core Services</h2>
                    <p className="text-center mt-4 text-gray-600">
                        Everything you need to build, grow, and scale digitally
                    </p>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Web Design",
                            "Web & App Development",
                            "Digital Marketing",
                            "SEO Optimization",
                        ].map((service) => (
                            <div
                                key={service}
                                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition hover:border border-orange-500"
                            >
                                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                                <p className="text-gray-600 text-sm">
                                    High-quality solutions tailored to your business goals.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                        alt="About"
                        className="rounded-2xl"
                    />
                    <div>
                        <h2 className="text-3xl font-bold">We Always Provide Best Services</h2>
                        <p className="mt-4 text-gray-600">
                            WorldWeblogic delivers scalable, secure, and future-ready digital
                            solutions powered by modern technologies.
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li>• Expert Development Team</li>
                            <li>• ROI-focused Approach</li>
                            <li>• Long-term Support</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-[#0b1c3d] text-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-3xl font-bold">300+</h3>
                        <p className="text-blue-200">Projects</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">10+</h3>
                        <p className="text-blue-200">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">200+</h3>
                        <p className="text-blue-200">Happy Clients</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">95%</h3>
                        <p className="text-blue-200">Client Retention</p>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">
                        Our Latest Projects
                    </h2>

                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                            >
                                {/* Image */}
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=800"
                                    alt="Project"
                                    className="h-64 w-full object-cover transform transition duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-6 group-hover:translate-y-0 transition duration-500">
                                    <h3 className="text-white text-xl font-semibold">
                                        Web Development Project
                                    </h3>
                                    <p className="text-sm text-gray-200 mt-1">
                                        Modern & scalable solution
                                    </p>

                                    <button className="mt-4 w-max bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 mb-3 rounded-lg text-sm font-semibold transition">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Let’s Build Your Digital Success Story
                    </h2>
                    <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold">
                        <Link to={"/contact"}>
                            Contact Us
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
}
