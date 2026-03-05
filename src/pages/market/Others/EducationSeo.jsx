import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaSearch,
    FaMapMarkerAlt,
    FaShoppingCart,
    FaChartLine,
    FaStar,
    FaUsers,
    FaBullhorn,
    FaGraduationCap,
    FaCheckCircle,
    FaBookOpen,
    FaPlus,
    FaMinus
} from "react-icons/fa";

import HeroImg from "../../../assets/market/educationSEO/banner.jpg";
import SeoImg from "../../../assets/market/educationSEO/img1.jpg";
import LocalImg from "../../../assets/market/educationSEO/img2.jpg";
import Dominate from "../../../assets/market/educationSEO/img3.jpg";
import OrdersImg2 from "../../../assets/market/educationSEO/img4.jpg";

export default function EducationSEO() {
    const [openIndex, setOpenIndex] = useState(0);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    const stagger = {
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const questions = [
        "Want more students finding your university or college online?",
        "Ready to increase applications, inquiries, and enrollments?",
        "Want your institution to dominate Google search results?",
        "Looking to grow your education brand visibility and reputation?"
    ];

    const benefits = [
        {
            icon: <FaSearch />,
            title: "Higher Google Rankings",
            text: "Appear on the first page where students search for courses, degrees & admissions."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local & Global Visibility",
            text: "Dominate 'near me' and international searches to attract students worldwide."
        },
        {
            icon: <FaShoppingCart />,
            title: "More Applications & Inquiries",
            text: "Convert search visitors into qualified admission leads and applications."
        },
        {
            icon: <FaStar />,
            title: "Stronger Brand Trust",
            text: "Build credibility as a leading educational institution."
        },
        {
            icon: <FaUsers />,
            title: "Student & Enrollment Growth",
            text: "Attract consistent new students, increase intake, and grow globally."
        },
        {
            icon: <FaChartLine />,
            title: "Sustainable Revenue Growth",
            text: "Boost enrollment numbers with targeted, data-driven SEO strategies."
        }
    ];

    const faqs = [
        {
            question: "What is Education SEO?",
            answer: "Education SEO is a digital marketing strategy designed to improve the visibility of educational institutions in search engines and attract prospective students."
        },
        {
            question: "Who can benefit from education SEO?",
            answer: "Universities, colleges, training institutes, coaching centers, and online learning platforms can benefit from education SEO."
        },
        {
            question: "How long does it take to see results from SEO?",
            answer: "SEO typically shows noticeable results within three to six months, depending on competition and website optimization."
        },
        {
            question: "Can SEO increase student enrollment?",
            answer: "Yes, higher search rankings lead to increased website traffic and more inquiries from prospective students."
        },
        {
            question: "What keywords are used in education SEO?",
            answer: "Keywords related to courses, certifications, degrees, and training programs are commonly targeted."
        },
        {
            question: "Is local SEO important for educational institutes?",
            answer: "Yes, local SEO helps institutions appear in location-based searches and attract students from nearby areas."
        },
        {
            question: "Why is technical SEO important for education websites?",
            answer: "Technical SEO ensures that websites load quickly, work on mobile devices, and are easily accessible to search engines."
        },
        {
            question: "Does content marketing help education SEO?",
            answer: "Yes, blogs, guides, and educational resources improve search rankings and provide useful information to prospective students."
        },
        {
            question: "How does SEO compare to paid advertising?",
            answer: "SEO provides long-term organic traffic, while paid advertising generates faster but short-term results."
        },
        {
            question: "Why should institutions invest in education SEO?",
            answer: "SEO helps institutions increase online visibility, attract qualified students, and improve enrollment opportunities."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[50vh] md:h-[55vh] flex items-center justify-center">

                {/* Background Image */}
                <img
                    src={HeroImg}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/70 via-[#020202]/60 to-[#020202]" />

                {/* Content */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="relative text-center max-w-3xl px-6"
                >

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">

                        Education SEO Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Student Enrollment Growth
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Increase visibility, attract high-intent students, and grow your university, college, or training institute
                        with proven SEO & digital strategies tailored for educational institutions.
                    </p>

                </motion.div>

            </section>


            {/* SERVICES SECTION */}
            <section className="py-28 bg-[#111] px-6">

                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Our Education SEO Services
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Complete digital visibility solutions to help universities, colleges, coaching centers and online platforms rank higher, attract more students, and boost enrollments.
                        </p>
                    </motion.div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaSearch />,
                                title: "Education SEO",
                                desc: "Rank higher on Google for courses, degrees, admissions, and university searches."
                            },
                            {
                                icon: <FaBullhorn />,
                                title: "Paid Advertising (PPC)",
                                desc: "Run targeted Google & social ads for admission campaigns and peak seasons."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Local & Regional SEO",
                                desc: "Dominate local college searches, Google Maps, and 'near me' student queries."
                            },
                            {
                                icon: <FaStar />,
                                title: "Review & Reputation Management",
                                desc: "Build trust with strong student and alumni reviews."
                            },
                            {
                                icon: <FaGraduationCap />,
                                title: "Conversion Optimization",
                                desc: "Turn website visitors into admission inquiries and applications."
                            },
                            {
                                icon: <FaBookOpen />,
                                title: "Content & Authority Building",
                                desc: "Create expert content on courses, careers, and academic programs."
                            }
                        ].map((service, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="bg-black border border-white/10 p-8 rounded-xl hover:border-[#25baff] transition"
                            >
                                <div className="text-[#25baff] text-3xl mb-4">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400">
                                    {service.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>


            {/* QUICK CHECK */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#f8fbff] via-[#f3f9ff] to-[#eef6ff] overflow-hidden">

                {/* Glow background elements */}
                <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-[#25baff]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-[#a8d97c]/10 rounded-full blur-3xl"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        <p className="text-[#25baff] font-semibold mb-3">
                            EDUCATION INSTITUTION GROWTH CHECK
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">
                            Is Your Institution
                            <span className="block text-[#25baff]">
                                Reaching Its Full Potential?
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            Many colleges and universities lose students because they're not visible where prospects search. Let's uncover your growth gaps.
                        </p>


                        {/* Feature bullets */}
                        <div className="space-y-4">

                            {[
                                "Increase online & local visibility",
                                "Attract high-intent students & learners",
                                "Boost applications, inquiries, and enrollments",
                                "Grow consistent student intake"
                            ].map((item, i) => (

                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-center gap-3"
                                >

                                    <FaCheckCircle className="text-[#a8d97c]" />

                                    <span className="text-gray-700 font-medium">
                                        {item}
                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>



                    {/* RIGHT CHECKLIST CARDS */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >

                        {questions.map((q, i) => (

                            <motion.div
                                key={i}
                                variants={fadeRight}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03
                                }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                            >

                                {/* Glow hover background */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#25baff]/5 to-[#a8d97c]/5 rounded-xl transition"></div>


                                <div className="relative flex items-center gap-4">

                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25baff]/10 group-hover:bg-[#25baff] transition">

                                        <FaCheckCircle className="text-[#25baff] group-hover:text-white transition text-lg" />

                                    </div>

                                    <p className="text-gray-700 font-semibold">
                                        {q}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </motion.div>


                </div>

            </section>

            {/* PROCESS SECTION */}
            <section className="py-28 px-6">

                <div className="max-w-6xl mx-auto">

                    <motion.div
                        className="text-center mb-20"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-bold">
                            Our Proven Education Growth Process
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and education market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom SEO plan for your university, college or coaching center."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Execute on-page, technical SEO, content, and local optimizations."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor, refine, and scale results for long-term visibility."
                            }
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >

                                <div className="text-5xl font-bold text-[#25baff] mb-4">
                                    {item.step}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>


            {/* WHAT IS ... */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow effects */}
                <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#25baff]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#a8d97c]/10 rounded-full blur-3xl"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* IMAGE SIDE */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition"></div>

                        {/* FIXED container */}
                        <div className="relative bg-white border border-gray-200 p-3 rounded-2xl shadow-xl">

                            <img
                                src={SeoImg}
                                className="rounded-xl w-full h-[400px] object-cover"
                                alt="Education SEO"
                            />

                        </div>

                    </motion.div>



                    {/* CONTENT SIDE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide">
                            EDUCATION DIGITAL GROWTH
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Education SEO?
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Education SEO is a specialized digital strategy that helps universities, colleges, coaching centers, and online learning platforms improve visibility on search engines like Google. It ensures your institution appears when students search for courses, programs, admissions, or “best college in [city]”.
                        </p>


                        <p className="text-gray-600 mb-8">
                            We make your institution the go-to choice when students search for quality education opportunities.
                        </p>



                        {/* Feature points */}
                        <div className="space-y-4">

                            {[
                                "Rank higher for education & course searches",
                                "Dominate local and 'near me' college queries",
                                "Increase admission inquiries and applications",
                                "Establish expertise in academic programs"
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="flex items-center gap-3 group"
                                >

                                    <div className="w-6 h-6 rounded-full bg-[#25baff]/10 flex items-center justify-center group-hover:bg-[#25baff] transition">

                                        <FaCheckCircle className="text-[#25baff] group-hover:text-white text-sm transition" />

                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {item}
                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* CASE STUDY */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] bg-[#25baff]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] bg-[#a8d97c]/10 blur-3xl rounded-full"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 blur-xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

                        <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-200">

                            <img
                                src={OrdersImg2}
                                className="rounded-xl w-full h-[400px] object-cover"
                            />

                        </div>

                    </motion.div>



                    {/* CONTENT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        {/* Label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide">
                            REAL CLIENT SUCCESS
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Case Study:

                            <span className="block text-[#25baff]">
                                280% Growth in 6 Months
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            Our targeted education SEO and local SEO strategy helped this university dramatically increase visibility, admission inquiries, and student enrollments.
                        </p>



                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "280%", label: "Traffic Growth" },
                                { value: "250%", label: "Inquiry Increase" },
                                { value: "4.2X", label: "ROI" }
                            ].map((stat, index) => (

                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center"
                                >

                                    <div className="text-2xl font-bold text-[#25baff]">
                                        {stat.value}
                                    </div>

                                    <div className="text-gray-600 text-sm">
                                        {stat.label}
                                    </div>

                                </motion.div>

                            ))}

                        </div>



                        {/* Bullet points */}
                        <div className="space-y-4">

                            {[
                                "Higher rankings for education keywords",
                                "More admission inquiries & applications",
                                "Stronger local presence",
                                "Sustainable monthly growth"
                            ].map((point, index) => (

                                <motion.div
                                    key={index}
                                    className="flex gap-3 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >

                                    <div className="w-6 h-6 rounded-full bg-[#a8d97c]/20 flex items-center justify-center">

                                        <FaCheckCircle className="text-[#a8d97c] text-sm" />

                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {point}
                                    </span>

                                </motion.div>

                            ))}

                        </div>
                    </motion.div>

                </div>

            </section>


            {/* LOCAL SEO */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-[#25baff]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-[#a8d97c]/10 blur-3xl rounded-full"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* CONTENT SIDE */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide">
                            LOCAL & REGIONAL SEO
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Dominate

                            <span className="block text-[#25baff]">
                                Local Education Searches
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, website, and content so students find your college or university instantly in local and “near me” searches.
                        </p>



                        {/* Highlight stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "450%", label: "Local Visibility" },
                                { value: "3.5X", label: "More Inquiries" },
                                { value: "290%", label: "Local Applications" }
                            ].map((stat, index) => (

                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center"
                                >

                                    <div className="text-2xl font-bold text-[#25baff]">
                                        {stat.value}
                                    </div>

                                    <div className="text-gray-600 text-sm">
                                        {stat.label}
                                    </div>

                                </motion.div>

                            ))}

                        </div>



                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Appear in Google Maps top results",
                                "Rank for 'college near me' searches",
                                "Increase calls, inquiries, and walk-ins",
                                "Attract local high-intent students"
                            ].map((point, index) => (

                                <motion.div
                                    key={index}
                                    className="flex gap-3 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >

                                    <div className="w-6 h-6 rounded-full bg-[#a8d97c]/20 flex items-center justify-center">

                                        <FaCheckCircle className="text-[#a8d97c] text-sm" />

                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {point}
                                    </span>

                                </motion.div>

                            ))}

                        </div>


                    </motion.div>



                    {/* IMAGE SIDE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 blur-xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

                        <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-200">

                            <img
                                src={LocalImg}
                                className="rounded-xl w-full h-[400px] object-cover"
                            />

                        </div>

                    </motion.div>


                </div>

            </section>


            {/* ONLINE BOOKINGS / LEADS */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f8fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow effects */}
                <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] bg-[#25baff]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] bg-[#a8d97c]/10 blur-3xl rounded-full"></div>


                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


                    {/* IMAGE SIDE */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group"
                    >

                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 blur-xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

                        <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-200">

                            <img
                                src={Dominate}
                                className="rounded-xl w-full h-[400px] object-cover"
                            />

                        </div>

                    </motion.div>



                    {/* CONTENT SIDE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide">
                            APPLICATION & INQUIRY OPTIMIZATION
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Increase

                            <span className="block text-[#25baff]">
                                Applications & Enrollments
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your site, application forms, and conversion paths so visitors easily become enrolled students or submit high-quality inquiries.
                        </p>



                        {/* Stat cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "290%", label: "Application Growth" },
                                { value: "190%", label: "Conversion Boost" },
                                { value: "3.9X", label: "Enrollment Uplift" }
                            ].map((stat, index) => (

                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white shadow-md border border-gray-200 p-4 rounded-xl text-center"
                                >

                                    <div className="text-2xl font-bold text-[#25baff]">
                                        {stat.value}
                                    </div>

                                    <div className="text-gray-600 text-sm">
                                        {stat.label}
                                    </div>

                                </motion.div>

                            ))}

                        </div>



                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Optimized application & inquiry forms",
                                "Mobile-friendly education website experience",
                                "Faster inquiry & application flows",
                                "Higher conversion from high-intent traffic"
                            ].map((point, index) => (

                                <motion.div
                                    key={index}
                                    className="flex gap-3 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >

                                    <div className="w-6 h-6 rounded-full bg-[#a8d97c]/20 flex items-center justify-center">

                                        <FaCheckCircle className="text-[#a8d97c] text-sm" />

                                    </div>

                                    <span className="text-gray-700 font-medium">
                                        {point}
                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* BENEFITS */}
            <section className="py-24 px-6">

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-6xl mx-auto"
                >

                    <h2 className="text-4xl font-bold text-center mb-16">
                        Benefits of Education SEO
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {benefits.map((item, index) => (

                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 p-8 rounded-xl hover:border-[#25baff] border border-white/10 transition"
                            >

                                <div className="text-[#25baff] text-3xl mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.text}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </section>


            {/* STATS */}
            <section className="relative py-28 px-6 bg-gradient-to-b from-[#ffffff] to-[#f4f9ff] overflow-hidden">

                {/* Background glow elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-[#25baff]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#a8d97c]/10 blur-3xl rounded-full"></div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="relative max-w-6xl mx-auto text-center"
                >

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020202] mb-4">
                        Proven Education Institution Growth Results
                    </h2>

                    <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                        Our marketing strategies deliver measurable increases in visibility, applications, and enrollments for universities and colleges.
                    </p>


                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            { number: "280%", label: "Traffic Growth" },
                            { number: "250%", label: "Application Increase" },
                            { number: "220%", label: "Student Growth" },
                            { number: "4.2X", label: "Return on Investment" }
                        ].map((stat, index) => (

                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{
                                    y: -10,
                                    scale: 1.04
                                }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
                            >

                                {/* Top accent line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#25baff] to-[#a8d97c] rounded-t-xl"></div>


                                {/* Number */}
                                <h3 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#25baff] group-hover:scale-110 transition">
                                    {stat.number}
                                </h3>


                                {/* Label */}
                                <p className="text-gray-600 font-medium">
                                    {stat.label}
                                </p>


                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#25baff]/5 to-[#a8d97c]/5 transition"></div>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </section>


            {/* FAQ SECTION */}
            <section className="py-16 px-4 bg-[#111]">

                <div className="max-w-5xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            Education SEO Services FAQs
                        </h2>

                        <p className="text-gray-400 text-sm max-w-xl mx-auto">
                            Common questions about how our education SEO services can help grow your institution and increase student enrollment.
                        </p>
                    </motion.div>


                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-4">

                        {faqs.map((faq, index) => {

                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeUp}
                                    viewport={{ once: true }}
                                    className="bg-black border border-white/10 rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-white/5 transition"
                                    >
                                        <h3 className="text-sm md:text-base font-semibold text-[#25baff] pr-4">
                                            {faq.question}
                                        </h3>

                                        <span className="text-[#25baff] text-xs">
                                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                                        </span>
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: openIndex === index ? "auto" : 0,
                                            opacity: openIndex === index ? 1 : 0
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeInOut"
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-4">
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </section>

        </div>
    );
}