import React from "react";

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
                            <button className="border border-white/40 px-6 py-3 rounded-xl">
                                Get a Quote
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
                                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
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
                            <li>✔ Expert Development Team</li>
                            <li>✔ ROI-focused Approach</li>
                            <li>✔ Long-term Support</li>
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
                    <h2 className="text-3xl font-bold text-center">Our Latest Projects</h2>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-2xl overflow-hidden shadow">
                                <img
                                    src={`https://source.unsplash.com/random/800x60${i}`}
                                    alt="Project"
                                />
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
                        Contact Us
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0b1c3d] text-blue-200 py-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p>© {new Date().getFullYear()} WorldWeblogic. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
