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
import CTA from "../assets/video/video.mp4"


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
    bg-gradient-to-br from-[#a8d97c]/20 via-[#25baff]/10 to-[#a8d97c]/10
  "
            >
                {/* DARK OVERLAY FOR VISIBILITY */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE SIDE */}
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#25baff]/30 rounded-full blur-3xl"></div>

                        <img
                            src={About}
                            alt="About XYZ"
                            className="relative z-10 rounded-3xl shadow-2xl"
                        />
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10">

                        <span className="inline-block mb-4 text-lg font-bold tracking-widest text-[#25baff] uppercase">
                            About Us
                        </span>

                        <h2 className="text-4xl font-bold leading-tight text-white">
                            Building Digital Experiences That
                            <span className="text-[#25baff]"> Drive Growth</span>
                        </h2>

                        <p className="mt-6 text-gray-200 leading-relaxed text-lg">
                            XYZ empowers businesses with scalable, secure, and future-ready
                            digital solutions. We blend strategy, design, and cutting-edge technology
                            to create products that perform, adapt, and grow with your vision.
                        </p>

                        {/* FEATURES */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-6">

                            {/* ITEM */}
                            {[
                                {
                                    num: "01",
                                    title: "Expert Team",
                                    desc: "Skilled developers, designers, and strategists working together.",
                                },
                                {
                                    num: "02",
                                    title: "Result-Focused Approach",
                                    desc: "Every solution is aligned with measurable ROI outcomes.",
                                },
                                {
                                    num: "03",
                                    title: "Modern Technologies",
                                    desc: "MERN stack, cloud architecture, and scalable systems.",
                                },
                                {
                                    num: "04",
                                    title: "Long-Term Support",
                                    desc: "Continuous improvement and growth assistance.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-14 h-9 p-2 flex items-center justify-center rounded-xl bg-[#25baff] text-black font-bold shadow-lg">
                                        {item.num}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[#a8d97c] text-lg">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-gray-300 mt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}

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
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#020202] via-[#0b1a24] to-[#020202]">

                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#25baff]/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a8d97c]/20 blur-[120px] rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-14">

                        <div>
                            <p className="text-[#25baff] uppercase tracking-widest font-bold text-sm">
                                Portfolio
                            </p>

                            <h2 className="text-4xl font-bold text-white mt-2">
                                Our Latest Projects
                            </h2>
                        </div>

                        <Link
                            to="/projects"
                            className="
        px-6 py-3 rounded-xl
        bg-[#25baff]/10 border border-[#25baff]/30
        text-[#25baff] font-semibold
        hover:bg-[#25baff] hover:text-black
        transition-all duration-300
      "
                        >
                            View All →
                        </Link>

                    </div>

                    {/* PROJECT GRID */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {projects
                            .filter((p) => p.featured)
                            .slice(0, 3)
                            .map((project) => (

                                <Link
                                    key={project.id}
                                    to={`/projects/${project.slug}`}
                                    className="
            group relative rounded-3xl overflow-hidden
            bg-white/5 backdrop-blur-md
            border border-white/10
            shadow-xl transition-all duration-500
            hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(37,186,255,0.25)]
          "
                                >

                                    {/* IMAGE */}
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=800"
                                        alt={project.title}
                                        className="
                h-64 w-full object-cover
                transition-transform duration-[1200ms]
                group-hover:scale-110
              "
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    {/* CONTENT */}
                                    <div className="absolute bottom-0 p-6">

                                        <h3 className="text-white text-xl font-semibold">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-300 text-sm mt-2">
                                            {project.shortDesc}
                                        </p>

                                        {/* BUTTON */}
                                        <div
                                            className="
                mt-5 inline-block
                px-5 py-2 rounded-lg text-sm font-semibold
                bg-[#25baff] text-black

                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0

                transition-all duration-500
              "
                                        >
                                            View Project →
                                        </div>

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
    bg-gradient-to-br from-[#25baff]/10 via-white/50 to-[#a8d97c]/10
  "
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                            Let’s Start a Conversation
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white leading-relaxed">
                            Reach out to us for inquiries, collaborations, or project discussions.
                            Our team is always ready to help.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">

                        {/* CONTACT INFO - GLASS */}
                        <div
                            className="
        space-y-8
        p-6 sm:p-8 rounded-2xl sm:rounded-3xl
        bg-white/40 backdrop-blur-xl
        border border-white/50
        shadow-lg mt-8
      "
                        >
                            {/* Address */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
            bg-[#25baff]/20 text-[#25baff] shrink-0">
                                    <FiMapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-md sm:text-base">
                                        Office Address
                                    </h4>
                                    <p className="text-black text-sm mt-1 leading-relaxed">
                                        B 108, 1st Floor, Office No. 2nd, Sector 63,<br />
                                        Noida - 201301
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
            bg-[#a8d97c]/40 text-black shrink-0">
                                    <FiPhoneCall size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-md sm:text-base">
                                        Call Us
                                    </h4>
                                    <p className="text-black text-sm mt-1 leading-relaxed">
                                        +91 85058 37801<br />
                                        +91 01204545733<br />
                                        +1 (310) 807-2867
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 sm:gap-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
            bg-[#25baff]/20 text-black shrink-0">
                                    <FiMail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-md sm:text-base">
                                        Email & Website
                                    </h4>
                                    <p className="text-black text-sm mt-1 leading-relaxed break-words">
                                        info@xyz.com<br />
                                        www.xyz.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT FORM - GLASS */}
                        <div
                            className="
        lg:col-span-2
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8 lg:p-10
        bg-white/60 backdrop-blur-xl
        border border-white/40
        shadow-lg
      "
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#020202] mb-6 sm:mb-8">
                                Send Us a Message
                            </h3>

                            <form className="grid gap-5 sm:gap-6 md:grid-cols-2">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="
            w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl
            border border-white/40
            bg-white/70 backdrop-blur
            focus:outline-none focus:ring-2 focus:ring-[#25baff]
          "
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="
            w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl
            border border-white/40
            bg-white/70 backdrop-blur
            focus:outline-none focus:ring-2 focus:ring-[#25baff]
          "
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="
            md:col-span-2 w-full px-4 sm:px-5 py-3 sm:py-4
            rounded-xl border border-white/40
            bg-white/70 backdrop-blur
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
            <section className="relative py-14 md:py-16 text-white overflow-hidden">

                {/* BACKGROUND VIDEO */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={CTA} type="video/mp4" />
                </video>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* CONTENT */}
                <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-6">

                    {/* TEXT */}
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-snug max-w-xl">
                        Let’s Build Your Digital Success Story
                    </h2>

                    {/* BUTTON */}
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
