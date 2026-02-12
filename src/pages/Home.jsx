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
import Testimonials from "./Testimonials";


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
            <header className="bg-gradient-to-r from-[#020202] via-[#020202] to-[#25baff] text-white overflow-hidden">
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
                            <div className="grid md:grid-cols-2 gap-10 items-center h-full text-center md:text-left px-4">
                                <div
                                    className={`transition-all duration-700 delay-150
              ${activeSlide === index
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"}
            `}
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#25baff]">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 text-lg text-[#a8d97c]">
                                        {slide.description}
                                    </p>

                                    <div className="mt-8">
                                        <Link
                                            to="/services"
                                            className="inline-block bg-[#a8d97c] text-[#020202] hover:bg-[#25baff] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
            <section
                className="
    py-24 relative overflow-hidden
    bg-gradient-to-br from-[#a8d97c]/50 via-[#25baff]/10 to-[#a8d97c]/15
  "
            >
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#25baff]/20 rounded-full blur-2xl"></div>
                        <img
                            src={About}
                            alt="About WorldWeblogic"
                            className="relative z-10 rounded-3xl shadow-xl"
                        />
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="inline-block mb-4 text-xl font-bold tracking-widest text-[#25baff] uppercase">
                            About Us
                        </span>

                        <h2 className="text-4xl font-bold leading-tight text-[#020202]">
                            Building Digital Experiences That
                            <span className="text-[#25baff]"> Drive Growth</span>
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            WorldWeblogic empowers businesses with scalable, secure, and
                            future-ready digital solutions. Our team blends strategy, design,
                            and technology to create products that perform, adapt, and scale
                            with your vision.
                        </p>

                        {/* Feature Grid */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-6">

                            {/* Item 1 */}
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl
            bg-[#25baff]/15 text-[#25baff] font-bold">
                                    01
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202]">
                                        Expert Team
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Skilled developers, designers, and strategists working as one.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl
            bg-[#a8d97c]/25 text-[#020202] font-bold">
                                    02
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202]">
                                        Result-Focused Approach
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Every solution is aligned with ROI and measurable outcomes.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl
            bg-[#25baff]/15 text-[#25baff] font-bold">
                                    03
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202]">
                                        Modern Technologies
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        MERN stack, cloud-ready architecture, and scalable systems.
                                    </p>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-12 flex items-center justify-center rounded-xl
            bg-[#a8d97c]/25 text-[#020202] font-bold">
                                    04
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202]">
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

            <section
                className="
    py-16 text-white bg-black
  "
            >
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

                    {/* Team Members */}
                    <div className="flex flex-col items-center gap-3">
                        <FaUsers className="text-[#25baff] text-4xl" />
                        <h3 className="text-4xl font-bold text-white">
                            <CountUp end={300} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-[#a8d97c]">Team Members</p>
                    </div>

                    {/* Experience */}
                    <div className="flex flex-col items-center gap-3">
                        <FaAward className="text-[#25baff] text-4xl" />
                        <h3 className="text-4xl font-bold text-white">
                            <CountUp end={10} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-[#a8d97c]">Years of Experience</p>
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col items-center gap-3">
                        <FaHandshake className="text-[#25baff] text-4xl" />
                        <h3 className="text-4xl font-bold text-white">
                            <CountUp end={2042} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-[#a8d97c]">Projects Delivered Successfully</p>
                    </div>

                    {/* Clients */}
                    <div className="flex flex-col items-center gap-3">
                        <FaSmile className="text-[#25baff] text-4xl" />
                        <h3 className="text-4xl font-bold text-white">
                            <CountUp end={1820} duration={2.5} enableScrollSpy />+
                        </h3>
                        <p className="text-[#a8d97c]">Happy Clients</p>
                    </div>

                </div>
            </section>



            {/* Projects */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-[#020202]">
                            Our Latest Projects
                        </h2>

                        <Link
                            to="/projects"
                            className="text-[#25baff] font-semibold hover:underline"
                        >
                            View All →
                        </Link>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects
                            .filter((p) => p.featured)
                            .slice(0, 3)
                            .map((project) => (
                                <Link
                                    key={project.id}
                                    to={`/projects/${project.slug}`}
                                    className="group relative rounded-2xl overflow-hidden
              shadow-lg transform transition-all duration-500
              hover:-translate-y-3 hover:shadow-2xl"
                                >
                                    {/* Image */}
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=800"
                                        alt={project.title}
                                        className="h-64 w-full object-cover
                transition-transform duration-[1200ms]
                group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-[#020202]/60 to-transparent" />

                                    {/* Bottom Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        <h3 className="text-white text-xl font-semibold">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-200 text-sm mt-1">
                                            {project.shortDesc}
                                        </p>

                                        {/* Button */}
                                        <button
                                            className="
                  mt-4 w-max
                  bg-[#25baff] text-white
                  px-5 py-2 rounded-lg text-sm font-semibold

                  opacity-100 translate-y-0
                  md:opacity-0 md:translate-y-3
                  md:group-hover:opacity-100 md:group-hover:translate-y-0

                  transition-all duration-400
                  hover:bg-[#a8d97c] hover:text-[#020202]
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

            <section
                className="
    py-16 sm:py-20 lg:py-24
    bg-gradient-to-br from-[#25baff]/10 via-white to-[#a8d97c]/10
  "
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#020202]">
                            Let’s Start a Conversation
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                            Reach out to us for inquiries, collaborations, or project discussions.
                            Our team is always ready to help.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">

                        {/* Contact Info */}
                        <div className="space-y-8">

                            {/* Address */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
            bg-[#25baff]/15 text-[#25baff] shrink-0">
                                    <FiMapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202] text-sm sm:text-base">
                                        Office Address
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        B 108, 1st Floor, Office No. 2nd, Sector 63,<br />
                                        Noida - 201301
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
            bg-[#a8d97c]/30 text-[#020202] shrink-0">
                                    <FiPhoneCall size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202] text-sm sm:text-base">
                                        Call Us
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                        +91 85058 37801<br />
                                        +91 01204545733<br />
                                        +1 (310) 807-2867
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
            bg-[#25baff]/15 text-[#25baff] shrink-0">
                                    <FiMail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#020202] text-sm sm:text-base">
                                        Email & Website
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed break-words">
                                        info@worldweblogic.com<br />
                                        www.worldweblogic.com
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#020202] mb-6 sm:mb-8">
                                Send Us a Message
                            </h3>

                            <form className="grid gap-5 sm:gap-6 md:grid-cols-2">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="
              w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl
              border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-[#25baff]
            "
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="
              w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl
              border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-[#25baff]
            "
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="
              md:col-span-2 w-full px-4 sm:px-5 py-3 sm:py-4
              rounded-xl border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-[#a8d97c]
            "
                                />

                                <button
                                    type="submit"
                                    className="
              md:col-span-2 w-full
              mt-2 sm:mt-4
              px-6 sm:px-8 py-3 sm:py-4
              rounded-xl
              bg-[#25baff] text-white font-semibold
              hover:bg-[#020202]
              transition
            "
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>



            <OurPartners />

            <Testimonials />

            <FAQ />



            {/* CTA */}
            <section
                className="
    py-14 md:py-16
    bg-black text-white
    transition-all duration-500
  "
            >
                <div
                    className="
      max-w-7xl mx-auto px-6
      flex flex-col md:flex-row
      items-center justify-center md:justify-between
      text-center md:text-left
      gap-6
    "
                >
                    {/* Text */}
                    <h2
                        className="
        text-2xl sm:text-3xl md:text-3xl
        font-bold
        leading-snug
        max-w-xl
      "
                    >
                        Let’s Build Your Digital Success Story
                    </h2>

                    {/* Button */}
                    <Link
                        to="/contact"
                        className="
        group
        w-full sm:w-auto
        bg-[#a8d97c] text-[#020202]
        px-8 py-3 rounded-xl font-semibold
        flex items-center justify-center gap-2

        transition-all duration-300
        hover:bg-[#25baff] hover:text-white
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(37,186,255,0.4)]
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
