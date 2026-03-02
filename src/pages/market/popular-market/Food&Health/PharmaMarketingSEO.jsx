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
    FaFlask,
    FaCheckCircle,
    FaShieldAlt,
    FaPlus, FaMinus
} from "react-icons/fa";

import HeroImg from "../../../../assets/services/PharmaSEO/banner.jpg";
import SeoImg from "../../../../assets/services/PharmaSEO/img1.avif";
import LocalImg from "../../../../assets/services/PharmaSEO/img4.avif";
import OrdersImg from "../../../../assets/services/PharmaSEO/img2.avif";
import OrdersImg2 from "../../../../assets/services/PharmaSEO/img3.avif";

export default function PharmaMarketingSEO() {
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
        "Want more healthcare professionals & patients finding your pharma brand online?",
        "Ready to increase qualified leads, inquiries, and partnerships?",
        "Want your pharmaceutical company to dominate Google search results?",
        "Looking to build stronger brand authority and trust in regulated markets?"
    ];


    const benefits = [
        {
            icon: <FaSearch />,
            title: "Higher Google Rankings",
            text: "Appear on the first page where professionals & patients search for medications & treatments."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local & Regional Visibility",
            text: "Dominate local pharma searches, distributor locations, and 'near me' queries."
        },
        {
            icon: <FaShoppingCart />,
            title: "More Qualified Leads & Inquiries",
            text: "Convert search visitors into B2B inquiries, partnerships, and consultations."
        },
        {
            icon: <FaStar />,
            title: "Stronger Brand Trust & Authority",
            text: "Build E-E-A-T credibility with compliant, expert pharmaceutical content."
        },
        {
            icon: <FaUsers />,
            title: "Lead & Partnership Growth",
            text: "Attract consistent high-value leads, distributors, and healthcare professionals."
        },
        {
            icon: <FaChartLine />,
            title: "Sustainable Revenue Growth",
            text: "Boost ROI with long-term organic traffic and reduced ad dependency."
        }
    ];


    const faqs = [
        {
            question: "What is pharmaceutical SEO?",
            answer: "Pharmaceutical SEO is a specialized digital marketing strategy that helps pharma companies, drug manufacturers, distributors, and healthcare brands improve visibility on search engines like Google — while staying compliant with regulations. It optimizes websites, content, and local listings so healthcare professionals, pharmacies, hospitals, and patients can find your products and information."
        },
        {
            question: "How can SEO increase pharma leads and inquiries?",
            answer: "SEO helps your brand rank higher for terms like “best treatment for [condition]”, “pharmaceutical suppliers near me”, or “generic [drug] manufacturer”. Top rankings bring more qualified traffic, leading to increased B2B inquiries, distributor partnerships, and patient/physician interest."
        },
        {
            question: "How long does pharma SEO take to show results?",
            answer: "SEO is a long-term strategy. Most pharmaceutical companies see noticeable ranking and traffic improvements within 4–8 months, with significant lead growth and authority gains typically occurring within 9–18 months due to high competition and E-E-A-T requirements."
        },
        {
            question: "Why is local SEO important for pharmaceutical businesses?",
            answer: "Local SEO helps pharmacies, regional distributors, and medical suppliers appear in Google Maps and local searches. It makes it easier for nearby clinics, hospitals, and pharmacies to find and contact your brand or distribution centers."
        },
        {
            question: "What keywords should pharma companies target?",
            answer: "Important keywords include: [drug name] manufacturer, generic [drug] suppliers, treatment for [condition], pharmaceutical distributors near me, [drug class] side effects, regulatory information [drug]. Targeting intent-based and informational keywords attracts both professionals and patients."
        },
        {
            question: "Does my pharma website need SEO optimization?",
            answer: "Yes. Without proper SEO, even the best products remain invisible. Optimization improves rankings, drives organic traffic, enhances trust signals, and helps convert visitors into qualified leads."
        },
        {
            question: "Can SEO help smaller pharma brands compete with big companies?",
            answer: "Yes. Focused SEO allows niche manufacturers, generic drug companies, or regional distributors to target long-tail keywords, local markets, and specific conditions — helping them compete with larger players and attract high-value leads."
        },
        {
            question: "Why hire a professional pharmaceutical SEO agency?",
            answer: "A specialized pharma SEO agency understands regulatory compliance, E-E-A-T requirements, scientific content standards, and competitive healthcare keywords. They deliver compliant, results-driven strategies that help your brand grow sustainably and safely."
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

                        Pharmaceutical SEO Agency
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base md:text-lg mb-6">
                        Build authority, attract qualified healthcare leads, and grow your pharma brand with compliant, high-trust SEO strategies tailored for pharmaceutical companies and medical brands.
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
                            Our Pharmaceutical SEO Services
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Complete digital visibility solutions to help pharmaceutical manufacturers, distributors, medical brands, and pharmacies rank higher, build trust, and generate compliant, high-quality leads.
                        </p>
                    </motion.div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaFlask />,
                                title: "Pharma SEO",
                                desc: "Rank higher on Google for medications, treatments, and healthcare product searches."
                            },
                            {
                                icon: <FaBullhorn />,
                                title: "Paid Advertising (PPC)",
                                desc: "Run compliant Google & social ads for product launches and seasonal campaigns."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Local & Regional SEO",
                                desc: "Dominate local pharma searches, Google Maps, and distributor location queries."
                            },
                            {
                                icon: <FaStar />,
                                title: "Review & Reputation Management",
                                desc: "Build trust with strong, compliant reputation signals."
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "Conversion Optimization",
                                desc: "Turn professionals & visitors into qualified B2B/B2C inquiries."
                            },
                            {
                                icon: <FaUsers />,
                                title: "Content & Authority Building",
                                desc: "Create E-E-A-T compliant content on treatments, safety, and science."
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
                            PHARMA BUSINESS GROWTH CHECK
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">
                            Is Your Pharma Brand
                            <span className="block text-[#25baff]">
                                Reaching Its Full Potential?
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            Many pharma companies lose leads because they're not visible where professionals and patients search. Let's uncover your growth gaps.
                        </p>


                        {/* Feature bullets */}
                        <div className="space-y-4">

                            {[
                                "Increase organic visibility & authority",
                                "Attract high-intent healthcare professionals & patients",
                                "Boost qualified leads & B2B inquiries",
                                "Grow sustainable revenue"
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
                            Our Proven Pharma Growth Process
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and pharma market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom compliant SEO plan for your pharmaceutical brand."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Execute technical, on-page, content, and local optimizations."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor, refine, and scale results for long-term authority."
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
                                alt="Pharmaceutical SEO"
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
                            PHARMA DIGITAL GROWTH
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Pharmaceutical SEO?
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Pharmaceutical SEO is a specialized digital strategy that helps pharma companies, medical manufacturers, distributors, and healthcare brands improve visibility on search engines like Google — while remaining fully compliant. It ensures your brand appears when professionals and patients search for medications, treatments, suppliers, or regulatory information.
                        </p>


                        <p className="text-gray-600 mb-8">
                            We make your brand the trusted choice in competitive healthcare search results.
                        </p>



                        {/* Feature points */}
                        <div className="space-y-4">

                            {[
                                "Rank higher for treatment & product searches",
                                "Dominate local and industry-specific pharma queries",
                                "Increase qualified B2B & B2C leads",
                                "Establish E-E-A-T authority in healthcare"
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
                                320% Growth in 6 Months
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            Our targeted pharmaceutical SEO and compliant content strategy helped this medical brand dramatically increase visibility, qualified leads, and B2B inquiries.
                        </p>



                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "320%", label: "Traffic Growth" },
                                { value: "240%", label: "Lead Increase" },
                                { value: "4.1X", label: "ROI" }
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
                                "Higher rankings for pharma keywords",
                                "More qualified inquiries & partnerships",
                                "Stronger E-E-A-T signals",
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
                                Local Pharma Searches
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, local pages, and citations so pharmacies, distributors, and clinics find your brand instantly in regional searches.
                        </p>



                        {/* Highlight stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "480%", label: "Local Visibility" },
                                { value: "3.1X", label: "More Leads" },
                                { value: "260%", label: "Local Inquiries" }
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
                                "Rank for 'pharma suppliers near me' searches",
                                "Increase inquiries & partnerships",
                                "Attract local high-intent professionals"
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
                                src={OrdersImg}
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
                            LEAD & INQUIRY OPTIMIZATION
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Increase

                            <span className="block text-[#25baff]">
                                Qualified Pharma Leads & Revenue
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your site, forms, trust elements, and conversion paths so visitors become high-value inquiries, partnerships, or consultations.
                        </p>



                        {/* Stat cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "280%", label: "Lead Growth" },
                                { value: "185%", label: "Conversion Boost" },
                                { value: "3.7X", label: "Revenue Uplift" }
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
                                "Optimized inquiry & contact forms",
                                "Mobile-friendly compliant website experience",
                                "Faster lead capture & qualification flows",
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
                        Benefits of Pharmaceutical SEO
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
                        Proven Pharma Business Growth Results
                    </h2>

                    <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                        Our compliant SEO strategies deliver measurable increases in visibility, authority, leads, and revenue for pharmaceutical brands.
                    </p>


                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            { number: "320%", label: "Traffic Growth" },
                            { number: "240%", label: "Lead Increase" },
                            { number: "210%", label: "Authority Growth" },
                            { number: "4.1X", label: "Return on Investment" }
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


            {/* FAQ SECTION - NEW ADDED */}
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
                            Pharmaceutical SEO Services FAQs
                        </h2>

                        <p className="text-gray-400 text-sm max-w-xl mx-auto">
                            Common questions about how our pharma SEO services can help grow your brand compliantly and sustainably.
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