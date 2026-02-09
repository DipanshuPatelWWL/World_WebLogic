import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { projects } from "../data/project";
import {
    FaUsers,
    FaAward,
    FaHandshake,
    FaSmile,
} from "react-icons/fa";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import DevelopmentProcess from "./DevelopmentProcess";
import OurPartners from "../components/OurPartners";
import FAQ from "./Faq";
import WebAppDevelopment from "./WebAppDevelopment";
import OurServices from "./OurServices";
import Banner1 from "../assets/banner1.jfif"
import Banner2 from "../assets/banner2.jfif"
import Banner3 from "../assets/banner3.jfif"
import About from "../assets/about1.jfif"


const heroSlides = [
    {
        title: "Web Design & Development Services",
        description:
            "We design and develop beautiful, conversion-focused websites and applications that scale with your business.",
        image:
            Banner3,
    },
    {
        title: "Scalable MERN Stack Solutions",
        description:
            "High-performance applications built using React, Node.js, and MongoDB.",
        image:
            Banner1,
    },
    {
        title: "Grow Your Business Digitally",
        description:
            "From idea to launch, we help brands build digital products that convert.",
        image:
            Banner2,
    },
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4500);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="font-sans text-gray-800">

            {/* ================= HERO SLIDER ================= */}
            <header className="bg-gradient-to-r from-[#0b1c3d] to-[#123a78] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-20 relative min-h-[520px]">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out
    ${activeSlide === index
                                    ? "opacity-100 z-10"
                                    : "opacity-0 z-0 pointer-events-none"}
  `}
                        >
                            <div className="grid md:grid-cols-2 gap-10 items-center h-full text-center md:text-left">
                                <div
                                    className={`transition-all duration-700 delay-150
    ${activeSlide === index
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"}
  `}
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 text-lg text-blue-100">
                                        {slide.description}
                                    </p>

                                    <div className="mt-8">
                                        <Link
                                            to="/services"
                                            className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
                                        >
                                            Our Services
                                        </Link>
                                    </div>
                                </div>


                                <div className="hidden md:block">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className={`rounded-2xl shadow-lg transition-transform duration-700
    ${activeSlide === index ? "scale-100" : "scale-95"}
  `}
                                    />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </header>

            {/* SERVICES */}
            <OurServices />


            <WebAppDevelopment />




            {/* ABOUT */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-2xl"></div>
                        <img
                            src={About}
                            alt="About WorldWeblogic"
                            className="relative z-10 rounded-3xl shadow-xl"
                        />
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="inline-block mb-4 text-xl font-bold tracking-widest text-orange-500 uppercase">
                            About Us
                        </span>

                        <h2 className="text-4xl font-bold leading-tight text-gray-900">
                            Building Digital Experiences That
                            <span className="text-orange-500"> Drive Growth</span>
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            WorldWeblogic empowers businesses with scalable, secure, and
                            future-ready digital solutions. Our team blends strategy, design,
                            and technology to create products that perform, adapt, and scale
                            with your vision.
                        </p>

                        {/* Feature Grid */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl bg-orange-200 text-orange-600 font-bold">
                                    01
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Expert Team
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Skilled developers, designers, and strategists working as one.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl bg-orange-200 text-orange-600 font-bold">
                                    02
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Result-Focused Approach
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Every solution is aligned with ROI and measurable outcomes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl bg-orange-200 text-orange-600 font-bold">
                                    03
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Modern Technologies
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        MERN stack, cloud-ready architecture, and scalable systems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl bg-orange-200 text-orange-600 font-bold">
                                    04
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Long-Term Support
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Continuous improvement, maintenance, and growth support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* STATS (UPDATED WITH ICONS + COUNT UP) */}
            <section className="bg-[#0b1c3d] py-16 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

                    <div className="flex flex-col items-center gap-3">
                        <FaUsers className="text-orange-500 text-4xl mr-4" />
                        <h3 className="text-4xl font-bold">
                            <CountUp end={300} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-blue-200">Team Members</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <FaAward className="text-orange-500 text-4xl mr-5" />
                        <h3 className="text-4xl font-bold">
                            <CountUp end={10} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-blue-200">Years of Experience</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <FaHandshake className="text-orange-500 text-4xl mr-6" />
                        <h3 className="text-4xl font-bold">
                            <CountUp end={2042} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-blue-200">Projects Completed</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <FaSmile className="text-orange-500 text-4xl mr-5" />
                        <h3 className="text-4xl font-bold">
                            <CountUp end={1820} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-blue-200">Happy Clients</p>
                    </div>

                </div>
            </section>


            {/* Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">
                            Our Latest Projects
                        </h2>

                        <Link
                            to="/projects"
                            className="text-orange-500 font-semibold hover:underline"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects
                            .filter((p) => p.featured)
                            .slice(0, 3)
                            .map((project) => (
                                <Link
                                    key={project.id}
                                    to={`/projects/${project.slug}`}
                                    className="group relative rounded-2xl overflow-hidden shadow-lg
                       transform transition-all duration-500
                       hover:-translate-y-3 hover:shadow-2xl"
                                >
                                    {/* Image */}
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=800"
                                        alt={project.title}
                                        className="h-64 w-full object-cover transition-transform duration-[1200ms]
                         group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                    {/* Bottom Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        {/* Title & Description (ALWAYS visible) */}
                                        <h3 className="text-white text-xl font-semibold">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-200 text-sm mt-1">
                                            {project.shortDesc}
                                        </p>

                                        {/* View Project Button */}
                                        <button
                                            className="
                  mt-4 w-max bg-orange-500 text-white
                  px-5 py-2 rounded-lg text-sm font-semibold

                  opacity-100 translate-y-0
                  md:opacity-0 md:translate-y-3
                  md:group-hover:opacity-100 md:group-hover:translate-y-0

                  transition-all duration-400 hover:cursor-pointer hover:bg-orange-600
                "
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <DevelopmentProcess />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Let’s Start a Conversation
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Reach out to us for inquiries, collaborations, or project discussions.
                            Our team is always ready to help.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">

                        {/* Contact Info */}
                        <div className="space-y-8 mt-10">

                            <div className="flex gap-5">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                                    <FiMapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Office Address</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        B 108, 1st Floor, Office No. 2nd, Sector 63,<br />
                                        Noida - 201301
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                                    <FiPhoneCall size={22} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        +91 85058 37801<br />
                                        +91 01204545733<br />
                                        +1 (310) 807-2867
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                                    <FiMail size={22} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email & Website</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        info@worldweblogic.com<br />
                                        www.worldweblogic.com
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-10 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                                Send Us a Message
                            </h3>

                            <form className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="md:col-span-2 w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />

                                <button
                                    type="submit"
                                    className="md:col-span-2 mt-4 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition hover:cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </section>

            <OurPartners />


            <FAQ />


            {/* CTA */}
            <section
                className="
    bg-orange-500 text-white py-16
    transition-all duration-500
    hover:bg-orange-600
  "
            >
                <div
                    className="
      max-w-7xl mx-auto px-6
      flex flex-col md:flex-row
      items-center justify-between gap-6
    "
                >
                    {/* Text */}
                    <h2
                        className="
        text-2xl md:text-3xl font-bold
        transform transition-transform duration-500
      "
                    >
                        Let’s Build Your Digital Success Story
                    </h2>

                    {/* Button */}
                    <Link
                        to="/contact"
                        className="
        group bg-white text-orange-600
        px-8 py-3 rounded-xl font-semibold

        flex items-center gap-2
        transform transition-all duration-300

        hover:bg-gray-100 hover:-translate-y-1
        hover:shadow-xl
        active:scale-95
      "
                    >
                        Contact Us
                    </Link>
                </div>
            </section>


        </div>
    );
}
