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
    FaTractor,
    FaCheckCircle,
    FaSeedling,
    FaPlus, FaMinus
} from "react-icons/fa";

import HeroImg from "../../../../assets/services/CateringMarketingSEO/banner.jpg";
import SeoImg from "../../../../assets/services/CateringMarketingSEO/img1.avif";
import LocalImg from "../../../../assets/services/CateringMarketingSEO/img2.avif";
import OrdersImg from "../../../../assets/services/CateringMarketingSEO/img3.avif";
import OrdersImg2 from "../../../../assets/services/CateringMarketingSEO/img4.avif";

export default function CateringMarketingSEO() {
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
        "Want more clients finding your catering service online?",
        "Ready to increase bookings, events, and revenue?",
        "Want your catering business to dominate Google search results?",
        "Looking to grow your catering brand visibility and reputation?"
    ];


    const benefits = [
        {
            icon: <FaSearch />,
            title: "Higher Google Rankings",
            text: "Appear on the first page where people search for catering & event services."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local & Regional Visibility",
            text: "Dominate 'near me' and local searches to attract nearby clients."
        },
        {
            icon: <FaShoppingCart />,
            title: "More Bookings & Inquiries",
            text: "Convert search visitors into event requests and bookings."
        },
        {
            icon: <FaStar />,
            title: "Stronger Brand Trust",
            text: "Build credibility with expertise in catering & event services."
        },
        {
            icon: <FaUsers />,
            title: "Client & Loyalty Growth",
            text: "Attract consistent new clients, repeat business, and referrals."
        },
        {
            icon: <FaChartLine />,
            title: "Revenue & Business Growth",
            text: "Boost profits with targeted, data-driven digital strategies."
        }
    ];


    const faqs = [
        {
            question: "What is catering SEO?",
            answer: "Catering SEO is a digital marketing strategy that helps catering companies improve their visibility on search engines like Google. It involves optimizing your website, content, and local listings so potential clients can easily find your catering services when searching online."
        },
        {
            question: "How can SEO increase catering bookings?",
            answer: "SEO helps your catering business rank higher for search terms like “wedding catering near me” or “event catering services.” When your website appears at the top, more potential clients visit your site, leading to increased inquiries and confirmed bookings."
        },
        {
            question: "How long does catering SEO take to work?",
            answer: "SEO is a gradual process. Most catering businesses begin seeing improvements in rankings and traffic within 3 to 6 months, while significant growth in bookings and visibility typically occurs within 6 to 12 months."
        },
        {
            question: "Why is local SEO important for catering businesses?",
            answer: "Local SEO helps your catering business appear in Google Maps and local search results. This makes it easier for nearby customers planning events, weddings, or corporate functions to find and contact you."
        },
        {
            question: "What keywords should catering businesses target?",
            answer: "Important keywords include: catering services near me, wedding catering services, corporate catering company, event catering near me, party catering services. Targeting these keywords helps attract clients actively looking for catering services."
        },
        {
            question: "Does my catering website need SEO optimization?",
            answer: "Yes. Without SEO, your website may not appear in search results. Proper optimization improves your rankings, increases website traffic, and helps convert visitors into customers."
        },
        {
            question: "How do customer reviews impact catering SEO?",
            answer: "Customer reviews improve your credibility and help your business rank higher in local search results. Positive reviews also encourage new customers to trust your services and book your catering."
        },
        {
            question: "Can SEO help small catering businesses compete with larger companies?",
            answer: "Yes. SEO allows small catering businesses to target local customers and niche services, helping them compete effectively with larger catering companies and attract more qualified leads."
        },
        {
            question: "Why should I hire a professional catering SEO agency?",
            answer: "A professional catering SEO agency has the expertise and tools to improve your search rankings, optimize your website, and generate more leads. They create customized strategies to help your catering business grow faster and achieve long-term success."
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

                        Catering Marketing SEO Agency
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base md:text-lg mb-6">
                        Increase visibility, attract high-intent clients, and grow your catering business
                        with proven SEO & digital strategies tailored for catering and event services.
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
                            Our Catering Marketing Services
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Complete digital visibility solutions to help catering companies, event planners, wedding caterers and corporate catering services rank higher, attract more clients, and scale bookings.
                        </p>
                    </motion.div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaTractor />,
                                title: "Catering SEO",
                                desc: "Rank higher on Google for catering, event, wedding, and corporate searches."
                            },
                            {
                                icon: <FaBullhorn />,
                                title: "Paid Advertising (PPC)",
                                desc: "Run targeted Google & social ads for instant bookings during peak seasons."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Local & Regional SEO",
                                desc: "Dominate local catering searches, Google Maps, and 'near me' client queries."
                            },
                            {
                                icon: <FaStar />,
                                title: "Review & Reputation Management",
                                desc: "Build trust with strong reviews from satisfied clients."
                            },
                            {
                                icon: <FaSeedling />,
                                title: "Conversion Optimization",
                                desc: "Turn website visitors into event bookings and inquiries."
                            },
                            {
                                icon: <FaUsers />,
                                title: "Content & Authority Building",
                                desc: "Create expert content on event planning, menus, and catering services."
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
                            CATERING BUSINESS GROWTH CHECK
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">
                            Is Your Catering Business
                            <span className="block text-[#25baff]">
                                Reaching Its Full Potential?
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            Many catering companies lose clients because they're not visible where people search. Let's uncover your growth gaps.
                        </p>


                        {/* Feature bullets */}
                        <div className="space-y-4">

                            {[
                                "Increase online & local visibility",
                                "Attract high-intent clients & event planners",
                                "Boost bookings, calls, and inquiries",
                                "Grow consistent revenue"
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
                            Our Proven Catering Growth Process
                        </h2>
                    </motion.div>


                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and catering market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom SEO plan for your catering or event business."
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
                                alt="Catering Marketing"
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
                            CATERING DIGITAL GROWTH
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Catering Marketing?
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Catering marketing is a specialized digital strategy that helps catering companies, event planners, and food service businesses improve visibility on search engines like Google. It ensures your catering business appears when people search for services such as “catering services near me”, “wedding catering services”, “corporate catering company”, or “event catering near me”.
                        </p>


                        <p className="text-gray-600 mb-8">
                            We make your business the go-to choice when clients search for event and catering solutions in your area.
                        </p>



                        {/* Feature points */}
                        <div className="space-y-4">

                            {[
                                "Rank higher for catering & event searches",
                                "Dominate local and 'near me' catering queries",
                                "Increase event bookings and inquiries",
                                "Establish expertise in event planning & catering"
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
                            Our targeted catering marketing and local SEO strategy helped this event catering company dramatically increase visibility, event bookings, and client inquiries.
                        </p>



                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "320%", label: "Traffic Growth" },
                                { value: "240%", label: "Booking Increase" },
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
                                "Higher rankings for catering keywords",
                                "More event requests & bookings",
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
                                Local Catering Searches
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, website, and content so clients find your catering business instantly in local and “near me” searches.
                        </p>



                        {/* Highlight stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "480%", label: "Local Visibility" },
                                { value: "3.1X", label: "More Bookings" },
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
                                "Rank for 'catering near me' searches",
                                "Increase calls, bookings, and inquiries",
                                "Attract local high-intent clients"
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
                            BOOKING & LEAD OPTIMIZATION
                        </p>


                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">

                            Increase

                            <span className="block text-[#25baff]">
                                Bookings & Catering Revenue
                            </span>

                        </h2>


                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your site, booking forms, and conversion paths so visitors easily become event bookings, inquiries, or service requests.
                        </p>



                        {/* Stat cards */}
                        <div className="grid grid-cols-3 gap-4 mb-8">

                            {[
                                { value: "280%", label: "Booking Growth" },
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
                                "Optimized online booking & contact forms",
                                "Mobile-friendly catering website experience",
                                "Faster inquiry & booking flows",
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
                        Benefits of Catering Marketing
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
                        Proven Catering Business Growth Results
                    </h2>

                    <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                        Our marketing strategies deliver measurable increases in visibility, bookings, and revenue for catering companies and event services.
                    </p>


                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            { number: "320%", label: "Traffic Growth" },
                            { number: "240%", label: "Booking Increase" },
                            { number: "210%", label: "Client Growth" },
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
                            Catering Marketing Services FAQs
                        </h2>

                        <p className="text-gray-400 text-sm max-w-xl mx-auto">
                            Common questions about how our catering marketing and SEO services can help grow your business.
                        </p>
                    </motion.div>


                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-4">

                        {faqs.map((faq, index) => {

                            const isOpen = openIndex === index;

                            const toggleFaq = () => {
                                setOpenIndex(isOpen ? null : index);
                            };

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