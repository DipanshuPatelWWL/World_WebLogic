import { useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
    FaCamera,
    FaSearch,
    FaMapMarkerAlt,
    FaLink,
    FaMobileAlt,
    FaUsers,
    FaChartLine,
    FaCheckCircle,
    FaStar,
    FaImage,
    FaBlog,
    FaHeart
} from "react-icons/fa";
import Banner from "../../../assets/market/movingSeo/banner.avif";
import MovingService from "../../../assets/market/movingSeo/movingService.avif";
import LocalImg from "../../../assets/market/movingSeo/localMoving.avif";
import ChooseUs from "../../../assets/market/movingSeo/teamPhoto.jpg";

export default function MoversSEO() {
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
            title: "Keyword Research for More Traffic",
            text: "Keyword research is the foundation of every successful SEO campaign. Target specific search phrases such as residential movers near me, long-distance moving services, packing and moving services, and office relocation company."
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Local SEO Optimization",
            text: "Local SEO helps your moving company dominate local search results and attract customers from nearby areas. Claim and optimize your Google Business Profile, maintain consistent NAP, list on Yelp and Moving.com, and create service area pages."
        },
        {
            icon: <FaBlog />,
            title: "High-Quality Content Strategy",
            text: "Quality content helps your website stand out from competitors. Create moving tips and guides, relocation checklists, packing advice, and blog posts about moving services to educate customers and build trust."
        },
        {
            icon: <FaLink />,
            title: "Off-Page SEO and Link Building",
            text: "Build your website’s credibility through backlinks from industry websites, real estate agencies, relocation companies, and local business directories. Strong backlinks improve authority and search rankings."
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Optimization",
            text: "More than half of all searches for moving companies happen on mobile devices. Your website must be mobile responsive, fast loading, and include click-to-call buttons and map integration."
        },
        {
            icon: <FaUsers />,
            title: "Social Media Marketing",
            text: "Connect with customers on Facebook, Instagram, LinkedIn, and TikTok. Showcase behind-the-scenes operations, team introductions, successful moves, and customer testimonials to build trust."
        },
        {
            icon: <FaStar />,
            title: "Online Review Generation",
            text: "Customer reviews are one of the most important trust signals. Encourage satisfied customers to leave reviews on Google, Yelp, and Facebook. Respond professionally to every review to boost local SEO."
        },
        {
            icon: <FaChartLine />,
            title: "Technical SEO Optimization",
            text: "Our developers identify and fix website issues that may affect your rankings, including site speed, mobile responsiveness, schema markup, and structured data for moving services."
        }
    ];
    const benefits = [
        "Rank for high-intent moving service keywords",
        "Attract customers actively searching for movers",
        "Appear in Google Maps and local “near me” searches",
        "Generate more leads, calls, and booking requests",
        "Build a strong online reputation with positive reviews",
        "Increase website traffic, revenue, and long-term growth"
    ];
    const faqs = [
        {
            question: "What is SEO for moving companies?",
            answer: "SEO for moving companies is a strategy that improves your website’s visibility on search engines to attract more customers searching for moving services."
        },
        {
            question: "Why is SEO important for moving companies?",
            answer: "SEO helps your business appear in local search results, increasing leads, calls, and booking requests."
        },
        {
            question: "How long does moving company SEO take to show results?",
            answer: "SEO typically takes 3–6 months to start showing noticeable improvements in rankings and traffic."
        },
        {
            question: "What keywords should moving companies target?",
            answer: "Common keywords include moving company near me, local movers, long-distance moving services, and affordable movers."
        },
        {
            question: "Does local SEO help moving businesses?",
            answer: "Yes. Local SEO helps your business appear in Google Maps and nearby search results."
        },
        {
            question: "Do online reviews affect SEO rankings?",
            answer: "Yes. Positive reviews improve trust and help boost local search rankings."
        },
        {
            question: "What role does content play in SEO for movers?",
            answer: "High-quality content helps educate potential customers, build trust, and improve search engine rankings."
        },
        {
            question: "Is mobile optimization important for moving websites?",
            answer: "Yes. Mobile-friendly websites provide better user experience and rank higher in search results."
        },
        {
            question: "Can social media help moving companies get more leads?",
            answer: "Yes. Social media helps promote your services, build brand awareness, and attract potential customers."
        },
        {
            question: "Why should moving companies hire an SEO agency?",
            answer: "An SEO agency provides expertise, tools, and strategies to improve rankings, generate leads, and grow your business."
        }
    ];
    return (
        <div className="bg-[#020202] text-white overflow-hidden">
            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <img
                    src={Banner}
                    alt="Moving Company SEO Banner"
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
                        Moving Company SEO Services Agency
                        <span className="text-[#25baff] block mt-2">
                            That Drives Real Bookings & Growth
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Grow your moving business — residential, long-distance, commercial, office relocations — with powerful SEO that attracts ready-to-move clients and ranks you higher in local and service searches.
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
                                src={MovingService}
                                className="rounded-xl w-full h-[400px] object-cover"
                                alt="Moving Company SEO"
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
                            MOVING COMPANY DIGITAL GROWTH
                        </p>
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#020202]">
                            What Is
                            <span className="block text-[#25baff]">
                                SEO for Moving Companies?
                            </span>
                        </h2>
                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            SEO for moving companies is the process of optimizing your website, online listings, and digital presence to rank higher in search engine results pages (SERPs). The goal is to ensure your business appears when potential customers search for services like moving companies in [city], residential movers near me, office relocation services, and affordable moving companies.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We help moving companies get discovered by the right clients — so your reliable service actually turns into booked jobs instead of staying hidden.
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
                            Our Proven Moving Company Growth Process
                        </h2>
                    </motion.div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Audit & Research",
                                desc: "Analyze your current site, competitors, keywords, and moving market opportunities."
                            },
                            {
                                step: "02",
                                title: "Strategy Creation",
                                desc: "Build a custom SEO plan tailored to your niche — residential, long-distance, commercial, and office moves."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "Optimize technical SEO, content, local listings, Google Business Profile, mobile experience, and schema markup."
                            },
                            {
                                step: "04",
                                title: "Growth & Scaling",
                                desc: "Monitor rankings, traffic, inquiries — refine strategies, generate reviews, and dominate your local moving market."
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
            {/* STRATEGIES SECTION - 8 Best Strategies */}
            <section className="py-24 px-6 bg-gray-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-bold">
                            8 Best SEO Strategies for Moving Companies
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
                            LOCAL MOVING SEO
                        </p>
                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[#020202] mb-6 leading-tight">
                            Dominate
                            <span className="block text-[#25baff]">
                                Local Moving Searches
                            </span>
                        </h2>
                        {/* Description */}
                        <p className="text-gray-600 mb-8 text-lg">
                            We optimize your Google Business Profile, citations, reviews, location pages, and schema so customers find you instantly in “moving company near me”, “local movers in [city]”, and service-specific searches.
                        </p>
                        {/* Feature checklist */}
                        <div className="space-y-4">
                            {[
                                "Claiming and optimizing your Google Business Profile",
                                "Maintaining consistent Name, Address, and Phone Number (NAP) across directories",
                                "Listing your business on platforms like Yelp and Moving.com",
                                "Using location-specific keywords on your website",
                                "Creating service area pages for every city you serve"
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
                                alt="Local Moving SEO"
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
                                alt="Moving company team with happy clients"
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
                            WHY MOVING COMPANIES CHOOSE US
                        </p>
                        {/* Main heading */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#020202]">
                            Book More Moves
                            <span className="block text-[#25baff] mt-1">
                                Without Burning Budget on Ads
                            </span>
                        </h2>
                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-lg">
                            Most moving companies spend thousands on ads that disappear when the budget runs out. Our moving company SEO creates lasting organic visibility, higher Google rankings, and consistent client inquiries — even while your trucks are on the road.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We help residential, long-distance, and commercial movers become the go-to name in their city — month after month.
                        </p>
                        {/* Feature checklist */}
                        <div className="space-y-4">
                            {[
                                "Rank #1 for high-intent searches like 'moving company near me'",
                                "Receive steady inquiries without monthly ad spend",
                                "Build long-term Google rankings and local pack presence",
                                "Convert website visitors into confirmed bookings",
                                "Outrank chain movers and big aggregators locally",
                                "Grow sustainably — rankings and traffic compound over time"
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
                        Benefits of Moving Company SEO
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaSearch />,
                                title: "More Inquiries & Bookings",
                                text: "Appear higher when customers search for your exact moving services and location."
                            },
                            {
                                icon: <FaMapMarkerAlt />,
                                title: "Dominate Local & Maps Results",
                                text: "Rank in Google Maps + local pack for 'moving company near me' searches."
                            },
                            {
                                icon: <FaStar />,
                                title: "Build Instant Trust & Authority",
                                text: "Strong rankings + glowing reviews make you the obvious choice."
                            },
                            {
                                icon: <FaMobileAlt />,
                                title: "Attract Ready-to-Book Clients",
                                text: "Target people actively searching for residential, long-distance, and commercial movers."
                            },
                            {
                                icon: <FaLink />,
                                title: "Sustainable Growth – No Ad Dependency",
                                text: "Organic traffic and leads that grow over time without monthly ad costs."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Beat Local & National Competition",
                                text: "Outrank big movers and aggregators in your service area."
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
                        Moving Company SEO
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