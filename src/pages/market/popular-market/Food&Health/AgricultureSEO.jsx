import { motion } from "framer-motion";
import {
    FaSearch,
    FaMapMarkerAlt,
    FaShoppingCart,
    FaChartLine,
    FaStar,
    FaUsers,
    FaBullhorn,
    FaTractor,
    FaCheckCircle,
    FaSeedling
} from "react-icons/fa";

import HeroImg from "../../../../assets/services/AgricultureMarketing/banner.avif";
import SeoImg from "../../../../assets/services/AgricultureMarketing/img1.avif";
import LocalImg from "../../../../assets/services/AgricultureMarketing/img2.avif";
import OrdersImg from "../../../../assets/services/AgricultureMarketing/img3.avif";
import OrdersImg2 from "../../../../assets/services/AgricultureMarketing/img4.avif";

export default function AgricultureSEO() {

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
        "Want more farmers and buyers finding your agribusiness online?",
        "Ready to increase leads, sales, and contracts?",
        "Want your farm or supplier to dominate Google search?",
        "Looking to grow your agricultural brand visibility?"
    ];


    const benefits = [
        {
            icon: <FaSearch />,
            title: "Higher Google Rankings",
            text: "Appear on the first page where buyers search for ag products & services."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local & Regional Visibility",
            text: "Dominate 'near me' and rural searches to attract nearby farmers/buyers."
        },
        {
            icon: <FaShoppingCart />,
            title: "More Qualified Leads & Sales",
            text: "Convert search visitors into inquiries, orders, and B2B contracts."
        },
        {
            icon: <FaStar />,
            title: "Stronger Industry Authority",
            text: "Build trust with expertise in sustainable farming & ag solutions."
        },
        {
            icon: <FaUsers />,
            title: "Customer & Partner Growth",
            text: "Attract consistent new farmers, dealers, and repeat business."
        },
        {
            icon: <FaChartLine />,
            title: "Revenue & Efficiency Increase",
            text: "Boost profits with targeted, data-driven digital strategies."
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

                        Agriculture SEO Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Agribusiness Growth
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Increase visibility, attract targeted leads, and grow your farm or agribusiness
                        with proven SEO & digital strategies tailored for agriculture.
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
                            Our Agriculture SEO Services
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Complete digital visibility solutions to help farms, suppliers, equipment dealers, and agribusinesses rank higher, attract buyers, and scale revenue.
                        </p>
                    </motion.div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaTractor />,
                                title: "Agriculture SEO",
                                desc: "Rank higher on Google for farming, equipment, inputs, and services searches."
                            },
                            {
                                icon: <FaBullhorn />,
                                title: "Paid Advertising (PPC)",
                                desc: "Run targeted Google & social ads for instant leads during peak seasons."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Local & Regional SEO",
                                desc: "Dominate local farm searches, Google Maps, and regional buyer queries."
                            },
                            {
                                icon: <FaStar />,
                                title: "Review & Reputation Management",
                                desc: "Build trust with strong reviews from farmers and partners."
                            },
                            {
                                icon: <FaSeedling />,
                                title: "Conversion Optimization",
                                desc: "Turn website visitors into leads, quotes, and online sales."
                            },
                            {
                                icon: <FaUsers />,
                                title: "Content & Authority Building",
                                desc: "Create expert content on sustainable farming, tech, and ag trends."
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
                            AGRIBUSINESS GROWTH CHECK
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">
                            Is Your Agribusiness
                            <span className="block text-[#25baff]">
                                Reaching Its Full Potential?
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            Many farms and suppliers lose opportunities because they're not visible where buyers and farmers search. Let's uncover your growth gaps.
                        </p>


                        {/* Feature bullets */}
                        <div className="space-y-4">

                            {[
                                "Increase online & local visibility",
                                "Attract high-intent buyers & partners",
                                "Boost leads, quotes, and sales",
                                "Grow consistent seasonal revenue"
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
                            Our Proven Ag Growth Process
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and ag market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom SEO plan for your farm, equipment, or inputs business."
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


            {/* WHAT IS AGRICULTURE SEO */}
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
                                alt="Agriculture SEO"
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
                            AGRICULTURE DIGITAL GROWTH
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Agriculture SEO?
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Agriculture SEO is the strategic optimization of your website and online presence to rank higher in search engines for farming, equipment, inputs, and ag services—driving targeted traffic, leads, and sales for farms and agribusinesses.
                        </p>


                        <p className="text-gray-600 mb-8">
                            We make your business the go-to choice when buyers search for agricultural solutions in your region or niche.
                        </p>



                        {/* Feature points */}
                        <div className="space-y-4">

                            {[
                                "Rank higher for ag-specific searches",
                                "Dominate local and regional farm queries",
                                "Increase leads, inquiries, and online sales",
                                "Establish expertise in sustainable & modern agriculture"
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
                            Our targeted agriculture SEO and content strategy helped this ag supplier dramatically increase visibility, leads from farmers, and online inquiries.
                        </p>



                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "280%", label: "Traffic Growth" },
                                { value: "190%", label: "Lead Increase" },
                                { value: "3.8X", label: "ROI" }
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
                                "Higher rankings for ag keywords",
                                "More seasonal inquiries & sales",
                                "Stronger regional presence",
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
                                Local Ag Searches
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, website, and content so buyers find your farm, dealership, or supply business instantly in regional searches.
                        </p>



                        {/* Highlight stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "450%", label: "Local Visibility" },
                                { value: "2.8X", label: "More Inquiries" },
                                { value: "200%", label: "Regional Leads" }
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
                                "Rank for 'near me' farm searches",
                                "Increase calls, quotes, and visits",
                                "Attract local & regional high-intent buyers"
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


            {/* ONLINE ORDERS / LEADS */}
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
                            LEAD & SALES OPTIMIZATION
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Increase

                            <span className="block text-[#25baff]">
                                Leads & Ag Revenue
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your site, lead forms, and conversion paths so visitors become quotes, orders, or long-term partners easily.
                        </p>



                        {/* Stat cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "220%", label: "Lead Growth" },
                                { value: "165%", label: "Conversion Boost" },
                                { value: "3.2X", label: "Revenue Uplift" }
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
                                "Optimized lead capture & forms",
                                "Mobile-friendly ag site experience",
                                "Faster quote & checkout flows",
                                "Higher conversion from seasonal traffic"
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
                        Benefits of Agriculture SEO
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
                        Proven Agribusiness Growth Results
                    </h2>

                    <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                        Our SEO strategies deliver measurable increases in visibility, leads, and revenue for farms, suppliers, and ag companies.
                    </p>


                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            { number: "280%", label: "Traffic Growth" },
                            { number: "190%", label: "Lead Increase" },
                            { number: "165%", label: "Buyer Growth" },
                            { number: "3.8X", label: "Return on Investment" }
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

        </div>
    );
}