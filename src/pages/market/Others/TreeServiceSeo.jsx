import { useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import {
    FaTree,
    FaSearch,
    FaMapMarkerAlt,
    FaLink,
    FaMobileAlt,
    FaUsers,
    FaChartLine,
    FaCheckCircle,
    FaStar,
    FaBullhorn
} from "react-icons/fa";


import Banner from "../../../assets/market/treeSeo/banner.avif";
import TreeService from "../../../assets/market/treeSeo/treeService.avif";
import LocalImg from "../../../assets/market/treeSeo/localImg.avif";
import ChooseUs from "../../../assets/market/treeSeo/chooseUs.avif";


export default function TreeServiceSeo() {

    const [activeFaq, setActiveFaq] = useState(null);
    const faqRefs = useRef([]);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const strategies = [
        {
            icon: <FaSearch />,
            title: "Tree Service SEO Optimization",
            text: "Search Engine Optimization (SEO) is one of the most powerful ways to grow your tree service business online. Tree Service SEO helps your website appear in Google search results when customers search for services such as tree trimming, emergency tree removal, stump grinding, and certified arborist services."
        },
        {
            icon: <FaStar />,
            title: "Collect Customer Reviews",
            text: "Online reviews play a major role in building trust with potential customers. Encourage satisfied customers to leave reviews on Google, Yelp, Houzz, and Facebook. Respond to every review to show professionalism and improve your online reputation."
        },
        {
            icon: <FaBullhorn />,
            title: "Perform Keyword Research",
            text: "Keyword research helps identify high-value terms like tree service near me, tree removal in [city], tree trimming services, and certified arborist near me. Using the right keywords increases your chances of ranking higher on Google."
        },
        {
            icon: <FaUsers />,
            title: "Optimize Your Website Content",
            text: "Your website content must be optimized to rank well in search engines. Writing SEO-friendly service pages, adding optimized meta titles and descriptions, using keyword-focused headings, and publishing helpful blog content improves rankings and converts visitors into customers."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Maintain Accurate Business Listings",
            text: "Your NAP information must be consistent across all online directories including Google Business Profile, Yelp, Angi, Houzz, and local business directories. Accurate listings help search engines verify your business and improve local search rankings."
        },
        {
            icon: <FaLink />,
            title: "Build High-Quality Backlinks",
            text: "Backlinks signal to search engines that your website is trustworthy. Earn backlinks through guest posting on industry blogs, partnering with local businesses, publishing helpful guides, and getting listed on industry directories."
        },
        {
            icon: <FaMobileAlt />,
            title: "Create a Fast & Mobile-Friendly Website",
            text: "Most customers search for services using smartphones. A fast, mobile-responsive, easy-to-navigate, SEO-friendly website with technical improvements like image compression and code optimization reduces bounce rates and improves rankings."
        },
        {
            icon: <FaTree />,
            title: "Use Social Media Marketing",
            text: "Social media helps tree service businesses connect with the local community. Share tree maintenance tips, before-and-after project photos, seasonal tree care advice, safety guidelines, and local updates to strengthen your brand reputation."
        }
    ];

    const benefits = [
        "Rank your tree service business on Google Maps and local search results",
        "Get your website on the first page of Google organic search",
        "Appear in “tree service near me” searches",
        "Generate more calls, leads, and service bookings",
        "Stay ahead of local competitors with a strong SEO strategy",
        "Increase website traffic and grow your tree service business"
    ];

    const faqs = [
        {
            question: "What is Tree Service SEO?",
            answer: "Tree Service SEO is a digital marketing strategy that improves the online visibility of tree care companies so they can rank higher on search engines like Google."
        },
        {
            question: "Why is SEO important for tree service companies?",
            answer: "SEO helps tree service businesses appear in local searches, attract more customers, and generate consistent leads."
        },
        {
            question: "How long does Tree Service SEO take to show results?",
            answer: "SEO typically starts showing results within 3–6 months, depending on competition and the current state of your website."
        },
        {
            question: "What keywords are best for tree service SEO?",
            answer: "Common keywords include tree removal, tree trimming, stump grinding, arborist services, and tree service near me."
        },
        {
            question: "What is Local SEO for tree services?",
            answer: "Local SEO focuses on optimizing your business for location-based searches so your company appears in Google Maps and local results."
        },
        {
            question: "Do online reviews help tree service SEO?",
            answer: "Yes. Positive customer reviews improve trust, increase click-through rates, and help your business rank higher in local search results."
        },
        {
            question: "How can I get more tree service leads online?",
            answer: "You can generate more leads through SEO, Google Business Profile optimization, paid ads, and strong website content."
        },
        {
            question: "What role does content play in tree service SEO?",
            answer: "High-quality content helps search engines understand your services and improves rankings while educating potential customers."
        },
        {
            question: "Do backlinks help improve SEO rankings?",
            answer: "Yes. Backlinks from reputable websites increase your site authority and improve search engine rankings."
        },
        {
            question: "Why should I hire a tree service SEO agency?",
            answer: "An SEO agency has the expertise, tools, and experience needed to improve rankings, drive traffic, and generate qualified leads consistently."
        }
    ];

    return (
        <div className="bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center">

                <img
                    src={Banner}
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/70 via-[#020202]/60 to-[#020202]" />

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="relative text-center max-w-4xl px-6"
                >

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">

                        Tree Service SEO Services Agency

                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Leads & Growth
                        </span>

                    </h1>

                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Rank your tree service business at the top of Google, generate more calls, leads, and bookings — for arborists, tree removal companies, and tree care specialists — with proven local SEO strategies tailored for the tree service industry.
                    </p>

                </motion.div>

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
                                src={TreeService}
                                className="rounded-xl w-full h-[400px] object-cover"
                                alt="Tree Service SEO"
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
                            TREE SERVICE DIGITAL GROWTH
                        </p>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">

                            What Is

                            <span className="block text-[#25baff]">
                                Tree Service SEO?
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Tree Service SEO is a digital marketing strategy designed to help arborists, tree removal companies, and tree care specialists appear at the top of Google when homeowners and businesses search for tree trimming, removal, stump grinding, and certified arborist services.
                        </p>

                        <p className="text-gray-600 mb-8">
                            With Digital Guider’s Tree Service SEO services, we help you generate more leads and dominate local search results. Most homeowners search online — if you’re not ranking, they’re choosing your competitors.
                        </p>

                        {/* Feature points */}
                        <div className="space-y-4">

                            {benefits.map((item, index) => (

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
                            Our Proven Tree Service Growth Process
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">

                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your site, competitors, keywords, and local tree service market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build custom SEO plan for your tree removal or tree care business."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Execute on-page, technical SEO, local citations, content, and Google Business Profile optimizations."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor rankings, refine strategy, and scale leads for long-term dominance."
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

            {/* STRATEGIES SECTION - 8 Best Strategies (integrated from data) */}
            <section className="py-24 px-6 bg-gray-950">

                <div className="max-w-7xl mx-auto">

                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-bold">
                            8 Best Tree Service Marketing Strategies
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {strategies.map((item, index) => (

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
                                Local Tree Service Searches
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, website, citations, and content so homeowners find your tree service instantly in local and “near me” searches. Tree Service SEO brings highly qualified leads directly to your business.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Optimizing your Google Business Profile",
                                "Creating location-specific service pages",
                                "Building local citations and directories",
                                "Encouraging authentic customer reviews",
                                "Using city-specific keywords like tree removal in [city]"
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
                                alt="Local Tree Service"
                                className="rounded-xl w-full h-[400px] object-cover"
                            />

                        </div>

                    </motion.div>

                </div>

            </section>



            {/* WHY CHOOSE US / SUCCESS FACTORS */}
            <section className="relative py-32 px-6 bg-gradient-to-b from-[#ffffff] via-[#f7fbff] to-[#eef6ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#25baff]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#a8d97c]/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* IMAGE SIDE - left on desktop */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group order-2 md:order-1"
                    >
                        {/* Glow frame */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25baff]/20 to-[#a8d97c]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition"></div>

                        {/* Image container */}
                        <div className="relative bg-white border border-gray-200 p-3 rounded-2xl shadow-xl">
                            <img
                                src={ChooseUs}
                                className="rounded-xl w-full h-[420px] object-cover"
                                alt="Tree service team working safely"
                            />
                        </div>
                    </motion.div>

                    {/* CONTENT SIDE - right on desktop */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        {/* Small label */}
                        <p className="text-[#25baff] font-semibold mb-3 tracking-wide uppercase">
                            WHY TREE SERVICE COMPANIES CHOOSE US
                        </p>

                        {/* Main heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">
                            Get More Calls & Jobs
                            <span className="block text-[#25baff] mt-1">
                                Without Wasting Money on Ads
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Most tree service businesses waste thousands on paid ads that stop the moment you stop paying.
                            Our Tree Service SEO builds long-term, free organic traffic and local dominance that keeps generating
                            high-quality leads even while you sleep.
                        </p>

                        <p className="text-gray-600 mb-8">
                            We help arborists and tree removal companies become the #1 choice in their city — month after month.
                        </p>

                        {/* Feature checklist */}
                        <div className="space-y-4">

                            {[
                                "Appear #1 for 'tree service near me' and high-intent searches",
                                "Get consistent phone calls & quote requests without monthly ad spend",
                                "Build long-term Google Maps & organic rankings",
                                "Convert more website visitors into paying jobs",
                                "Outrank big national chains in your local area",
                                "Sustainable growth that compounds over time"
                            ].map((point, index) => (

                                <motion.div
                                    key={index}
                                    className="flex gap-3 items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
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
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-6xl mx-auto"
                >

                    <h2 className="text-4xl font-bold text-center mb-16">
                        Benefits of Tree Service SEO
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                icon: <FaSearch />,
                                title: "Increase Calls, Leads & Bookings",
                                text: "Tree Service SEO helps your business appear higher in search results when customers search for tree care services."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Dominate Local & Google Maps Results",
                                text: "Target specific local searches used by homeowners actively looking for tree trimming and removal."
                            },
                            {
                                icon: <FaStar />,
                                title: "Build Trust & Credibility Fast",
                                text: "Optimized profiles and reviews make your tree service the go-to choice in your area."
                            },
                            {
                                icon: <FaMobileAlt />,
                                title: "Attract High-Intent Local Customers",
                                text: "Reach ready-to-book homeowners searching “tree service near me” or “emergency tree removal”."
                            },
                            {
                                icon: <FaLink />,
                                title: "Sustainable Growth Without Ad Spend",
                                text: "Generate consistent organic traffic and leads that keep growing month after month."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Stay Ahead of Local Competitors",
                                text: "Strong local SEO strategy positions your business as the authority in tree care."
                            }
                        ].map((item, index) => (

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


            {/* FAQ */}
            <section className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Tree Service SEO
                        <span className="text-[#25baff]"> FAQs</span>
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={(el) => (faqRefs.current[index] = el)}
                                className="gsap-item bg-white border border-gray-200 rounded-2xl shadow-lg shadow-[#25baff]/20 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff] transition-all duration-300"
                            >
                                <button
                                    onClick={() => {
                                        const el = faqRefs.current[index];
                                        const content = el.querySelector(".faq-content");

                                        if (activeFaq === index) {
                                            gsap.to(content, {
                                                height: 0,
                                                opacity: 0,
                                                duration: 0.3,
                                                ease: "power2.inOut",
                                            });
                                            setActiveFaq(null);
                                        } else {

                                            if (activeFaq !== null) {
                                                const prevEl = faqRefs.current[activeFaq];
                                                const prevContent = prevEl.querySelector(".faq-content");

                                                gsap.to(prevContent, {
                                                    height: 0,
                                                    opacity: 0,
                                                    duration: 0.3,
                                                    ease: "power2.inOut",
                                                });
                                            }

                                            gsap.to(content, {
                                                height: content.scrollHeight,
                                                opacity: 1,
                                                duration: 0.4,
                                                ease: "power2.out",
                                            });

                                            setActiveFaq(index);
                                        }
                                    }}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#020202]"
                                >
                                    <span
                                        className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
                                            } transition-colors duration-300`}
                                    >
                                        {faq.question}
                                    </span>

                                    {activeFaq === index ? (
                                        <FiMinus className="text-[#25baff] text-xl" />
                                    ) : (
                                        <FiPlus className="text-gray-500 text-xl" />
                                    )}
                                </button>

                                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
                                    <p className="pb-6 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}