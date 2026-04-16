import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import {
    FaRocket,
    FaDollarSign,
    FaCogs,
    FaSearch,
    FaExpandArrowsAlt,
    FaShoppingCart
} from "react-icons/fa";


import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import wooCommeeceImg from "../../../assets/services/ecommerce/wooCommerce/wooCommerce.avif";
import Shopping from "../../../assets/services/ecommerce/wooCommerce/shopping.avif";
import Img1 from "../../../assets/services/ecommerce/Shopify/img1.avif";
import Img2 from "../../../assets/services/ecommerce/wooCommerce/img2.avif";
import Img3 from "../../../assets/services/ecommerce/wooCommerce/img3.avif";
import Img4 from "../../../assets/services/ecommerce/wooCommerce/img4.avif";
import Img5 from "../../../assets/services/ecommerce/wooCommerce/img5.avif";
import Img6 from "../../../assets/services/ecommerce/wooCommerce/img6.avif";
import searchMetrics from "../../../assets/services/ecommerce/Shopify/searchMetrics.webp";
import webMasterTools from "../../../assets/services/ecommerce/Shopify/webMasterTools.webp";
import trends from "../../../assets/services/ecommerce/Shopify/trends.webp";
import tagmanager from "../../../assets/services/ecommerce/Shopify/tagmanager.webp";
import screamingfrog from "../../../assets/services/ecommerce/Shopify/screamingfrog.webp";
import majestic from "../../../assets/services/ecommerce/Shopify/majestic.webp";
import hotjar from "../../../assets/services/ecommerce/Shopify/hotjar.webp";
import ahrefs from "../../../assets/services/ecommerce/Shopify/ahrefs.webp";
import moz from "../../../assets/services/ecommerce/Shopify/moz.webp";
import semrush from "../../../assets/services/ecommerce/Shopify/semrush.webp";
import searchConsole from "../../../assets/services/ecommerce/Shopify/searchConsole.webp";
import analytics from "../../../assets/services/ecommerce/Shopify/analytics.webp";



gsap.registerPlugin(ScrollTrigger);

const WoocommerceDev = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const whoRef = useRef(null);
    const cardsRef = useRef([]);
    const sectionRefs = useRef([]);

    const [activeFaq, setActiveFaq] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);
    const faqRefs = useRef([]);

    const addSectionRef = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: "power4.out",
            });

            gsap.from(whoRef.current.children, {
                scrollTrigger: {
                    trigger: whoRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                y: 60,
                stagger: 0.25,
                duration: 1,
                ease: "power3.out",
            });

            cardsRef.current.forEach((card) => {
                if (!card) return;
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    opacity: 0,
                    scale: 0.92,
                    y: 40,
                    duration: 0.7,
                    ease: "power3.out",
                });
            });

            sectionRefs.current.forEach((section) => {
                const items = section.querySelectorAll(".gsap-item");

                items.forEach((item) => {
                    gsap.from(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        },
                        opacity: 0,
                        y: 60,
                        duration: 0.8,
                        ease: "power3.out",
                    });
                });
            });

            ScrollTrigger.refresh();
        }, rootRef);

        return () => ctx.revert();
    }, []);


    useEffect(() => {
        if (activeFaq === 0 && faqRefs.current[0]) {
            const content = faqRefs.current[0].querySelector(".faq-content");

            gsap.set(content, {
                height: "auto",
                opacity: 1,
            });
        }
    }, []);

    const tools = [
        { img: analytics, name: "Google Analytics" },
        { img: searchConsole, name: "Search Console" },
        { img: semrush, name: "SEMrush" },
        { img: ahrefs, name: "Ahrefs" },
        { img: moz, name: "Moz" },
        { img: hotjar, name: "Hotjar" },
        { img: majestic, name: "Majestic" },
        { img: screamingfrog, name: "Screaming Frog" },
        { img: tagmanager, name: "Tag Manager" },
        { img: trends, name: "Google Trends" },
        { img: webMasterTools, name: "Google Webmaster Tools" },
        { img: searchMetrics, name: "Search Metrics" },
    ];


    const faqs = [
        {
            question: "What is WooCommerce and why is it a good choice for my online store?",
            answer: "WooCommerce is a powerful, open-source eCommerce platform built on WordPress. It offers flexibility, scalability, and complete control over your store’s design and functionality, making it ideal for businesses of all sizes.",
        },
        {
            question: "How long does it take to develop a WooCommerce website?",
            answer: "The timeline depends on the project scope and complexity. A basic store may take 2–4 weeks, while a fully customized WooCommerce solution with advanced features may take 6–8 weeks or more.",
        },
        {
            question: "Can you customize my WooCommerce store according to my brand?",
            answer: "Yes, we provide fully customized WooCommerce solutions tailored to your brand identity, design preferences, and business goals, including custom themes and feature enhancements.",
        },
        {
            question: "Will my WooCommerce website be mobile-friendly?",
            answer: "Absolutely. We develop fully responsive WooCommerce websites that perform seamlessly across desktops, tablets, and mobile devices.",
        },
        {
            question: "Can you integrate payment gateways and shipping providers?",
            answer: "Yes, we integrate secure payment gateways, shipping solutions, CRM systems, and other third-party services to streamline your store’s operations.",
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer: "Yes, we offer ongoing maintenance, security monitoring, updates, and technical support to ensure your store remains secure and optimized.",
        },
        {
            question: "How much does WooCommerce development cost?",
            answer: "The cost varies depending on features, customization level, and integrations required. We provide flexible packages and custom quotes based on your business needs.",
        },
        {
            question: "Can you migrate my existing store to WooCommerce?",
            answer: "Yes, we handle seamless migrations from platforms like Shopify, Magento, or custom-built systems to WooCommerce, ensuring secure data transfer with minimal downtime.",
        },
        {
            question: "How do you ensure website security?",
            answer: "We implement SSL encryption, secure coding practices, regular updates, firewall protection, and vulnerability monitoring to safeguard your WooCommerce store.",
        },
        {
            question: "Is WooCommerce SEO-friendly?",
            answer: "Yes, WooCommerce is built with SEO best practices and integrates easily with SEO tools to improve search engine visibility, site performance, and rankings.",
        },
    ];

    const accordionData = [
        {
            title: "Time & Cost Optimization",
            content: "Working with specialists reduces development time and prevents expensive errors. With streamlined workflows and technical expertise, projects are completed efficiently without unnecessary delays or rework.",
        },
        {
            title: "Reliable Quality Assurance",
            content: "Professional developers follow structured testing processes to ensure your store functions smoothly across devices and browsers. This minimizes bugs, improves performance, and enhances user satisfaction.",
        },
        {
            title: "Advanced Inventory & Order Management",
            content: "Experts implement smart inventory systems that help track stock levels, manage orders efficiently, and automate updates—reducing manual workload and operational errors.",
        },
        {
            title: "Ongoing Support & Maintenance",
            content: "A professional team provides regular updates, security monitoring, and performance optimization to keep your store running smoothly and securely at all times.",
        },
        {
            title: "Seamless Third-Party Integrations",
            content: "From payment gateways and shipping providers to CRM and marketing tools, experienced developers ensure smooth integration with essential business systems for better automation and growth.",
        },
    ];


    const wooCommMarketing = [
        {
            title: "Strategic Project Discovery & Planning",
            text: "We begin with an in-depth consultation to understand your business goals, target audience, and technical requirements. This discovery phase helps us clearly define the project scope and create a roadmap aligned with your objectives. Our team then performs a detailed feasibility analysis to determine the ideal technology stack, tools, and plugins required for optimal performance. We design the database architecture, outline API and third-party integration needs, and establish clear timelines, milestones, and deliverables—ensuring a structured and efficient development process from start to finish.",
            image: Img1,
        },
        {
            title: "UI/UX Design & Interactive Prototyping",
            text: "In this phase, we craft intuitive wireframes and visually engaging designs that reflect your brand identity and enhance user experience. Wireframing allows us to define the structure, layout, and navigation flow of your website before development begins. We create interactive prototypes using modern design tools to visualize functionality and user journeys. Our team selects the appropriate CSS framework and UI components to ensure responsiveness, performance, and consistency across devices. High-fidelity mockups are prepared for both desktop and mobile views and shared for your feedback.",
            image: Img2,
        },
        {
            title: "WooCommerce Development & Implementation",
            text: "In the development phase, we transform approved designs into a fully functional, high-performance WooCommerce store. Our team sets up a secure development environment, configures WooCommerce settings, and ensures the platform is optimized for scalability and stability. We follow industry best practices, using version control systems to maintain clean and manageable code. Custom themes are developed using child theme architecture to safeguard modifications during future updates. When required, we build custom plugins and advanced features tailored to your business needs, adhering to WordPress and WooCommerce coding standards.",
            image: Img3,
        },
        {
            title: "Quality Testing & Performance Optimization",
            text: "Quality assurance is a critical stage in our WooCommerce development process. We conduct comprehensive testing to ensure your website is secure, stable, and performs seamlessly across all devices and browsers. Our team performs functional, regression, and usability testing to identify and resolve potential issues before launch. We also optimize website performance through advanced techniques such as caching configuration, code minification, database optimization, and image compression to deliver fast loading speeds. Security is a top priority. We implement SSL encryption, conduct vulnerability scans, and apply best-practice security configurations to protect your store from threats.",
            image: Img4,
        },
        {
            title: "Deployment & Go-Live Execution",
            text: "During the final stage, we prepare your WooCommerce store for a smooth and secure launch. Our team deploys the website to the live environment following structured deployment procedures to ensure stability and zero data loss. Before going live, we conduct final performance checks, verify SEO configurations, set up analytics tracking, and review all integrations. The website is thoroughly tested on a staging environment, and once approved, DNS settings are configured and the site is published. After launch, we closely monitor the store to address any immediate issues, ensuring a seamless transition and optimal performance from day one.",
            image: Img5,
        },
        {
            title: "Ongoing Support & Performance Maintenance",
            text: "Our commitment doesn’t end at launch. We provide continuous maintenance and proactive support to ensure your WooCommerce store remains secure, updated, and fully optimized. Our services include regular core, theme, and plugin updates, security monitoring, performance checks, and backup management to prevent downtime or data loss. We also offer training sessions to help your team confidently manage products, orders, and store operations. As your business evolves, we implement new features, enhancements, and improvements based on your feedback and changing requirements—ensuring your store continues to grow and perform at its best.",
            image: Img6,
        },
    ];


    return (
        <div ref={rootRef} className="bg-white text-black">
            {/* ================= HERO ================= */}
            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        WooCommerce Development
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}


            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            WooCommerce
                            <span className="text-[#25baff]"> Development Company</span>
                        </h2>
                        <p className="text-black mt-4">
                            Build a high-performing, scalable WooCommerce website with our expert team. We deliver result-driven WooCommerce development services designed to help you increase sales, enhance user experience, and grow your online business.
                        </p>
                        <p className="text-black mt-4 font-semibold">
                            Our WooCommerce development services include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "WooCommerce Website Development",
                            "Custom WooCommerce Store Design",
                            "PSD to WooCommerce Conversion",
                            "WooCommerce Theme Customization",
                            "WooCommerce Plugin Development",
                            "WooCommerce API Integrations",
                            "WooCommerce Performance & Speed Optimization",
                            "WooCommerce Migration Services",
                            "WooCommerce Maintenance & Support",
                            "WooCommerce Troubleshooting & Bug Fixes",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                                shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:border-[#25baff] hover:shadow-2xl hover:shadow-[#25baff]/40 hover:-translate-y-2"
                            >
                                <FaCheckCircle
                                    className="text-[#25baff] text-2xl mt-1 group-hover:text-white transition-colors duration-300"
                                />

                                <p className="text-[#020202] text-lg leading-relaxed group-hover:text-white transition-colors duration-300"
                                >
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ================= WHAT IS Shopify? ================= */}

            <section
                ref={whoRef}
                className="relative py-20 px-6 overflow-hidden bg-[#020617]"
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] z-0"></div>

                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full z-0"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Why Choose WooCommerce
                            <span className="text-[#25baff]"> for Your Online Store?</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-200 leading-relaxed mb-6">
                                WooCommerce is a powerful and widely trusted open-source eCommerce solution built for WordPress. It enables businesses to create, manage, and scale their online stores with flexibility and ease. Its robust features and customization capabilities make it a preferred choice for modern online retailers.
                            </p>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                Key Features:
                            </h3>

                            <ul className="space-y-3 text-gray-300 mb-6">
                                <li>• Multi-currency and global selling support</li>
                                <li>• Extensive built-in eCommerce tools</li>
                                <li>• Highly scalable for growing businesses</li>
                                <li>• Intuitive and user-friendly interface</li>
                                <li>• Fully customizable themes and functionality</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                Our Implementation Approach:
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li>• Custom WooCommerce store development</li>
                                <li>• WooCommerce theme design and customization</li>
                                <li>• Complete store setup and configuration</li>
                                <li>• Secure payment gateway integration</li>
                                <li>• PSD to WooCommerce conversion</li>
                            </ul>
                        </motion.div>

                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden group">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={wooCommeeceImg}
                                alt="Social Media Management"
                                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ================= STRATEGY CARDS ================= */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        How WooCommerce Supports
                        <span className="text-[#25baff]"> Your eCommerce Growth?</span>
                    </h2>

                    <p className="font-semibold text-gray-500 mb-3 px-6">
                        Whether you're launching a new online store or scaling an existing one, WooCommerce provides the flexibility, tools, and performance needed to grow your eCommerce business efficiently. Here’s how it adds value to your online venture:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaRocket,
                                head: "Fast & Hassle-Free Store Setup",
                                text: "Launch your online store quickly with a simple installation process and easy configuration. WooCommerce allows you to get started without complex technical requirements.",
                            },
                            {
                                icon: FaDollarSign,
                                head: "Budget-Friendly eCommerce Solution",
                                text: "WooCommerce is a cost-effective platform that reduces upfront investment while offering powerful features. You can start small and expand as your business grows.",
                            },
                            {
                                icon: FaCogs,
                                head: "Simple Store Management",
                                text: "Manage products, orders, customers, and inventory from an intuitive dashboard. WooCommerce makes daily store operations smooth and efficient.",
                            },
                            {
                                icon: FaSearch,
                                head: "SEO-Optimized Architecture",
                                text: "Built with search engine best practices in mind, WooCommerce helps improve your store’s visibility. Optimized URLs, metadata control, and plugin support enhance organic rankings.",
                            },
                            {
                                icon: FaExpandArrowsAlt,
                                head: "Fully Customizable & Scalable",
                                text: "From design to functionality, WooCommerce allows complete customization. Whether you have a small catalog or thousands of products, the platform scales with your business.",
                            },
                            {
                                icon: FaShoppingCart,
                                head: "Flexible Product & Payment Options",
                                text: "Sell physical products, digital downloads, subscriptions, and more. Integrate multiple secure payment gateways and shipping methods to provide a seamless checkout experience.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <Icon
                                        className="text-4xl text-[#25baff] mb-6 mx-auto group-hover:text-white transition-colors duration-300"
                                    />

                                    <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                                        {item.head}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Hire orm Section */}
            <section className="bg-white py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Why Partner with a Professional
                            <span className="text-[#25baff]"> WooCommerce Development Team?</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div>
                            <img
                                src={Shopping}
                                alt="img"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>

                        {/* Right Accordion */}
                        <div>
                            <p className="text-gray-600 mb-6">
                                Hiring experienced WooCommerce experts ensures your online store is built for performance, scalability, and long-term success. From strategy to execution, a dedicated development team helps you avoid costly mistakes while delivering a seamless shopping experience.
                            </p>

                            <div className="space-y-4">
                                {accordionData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                            className="w-full flex justify-between items-center p-5 bg-gray-50 font-semibold text-[#020202]"
                                        >
                                            {item.title}
                                            <span className="text-[#25baff] text-xl">
                                                {openIndex === index ? "−" : "+"}
                                            </span>
                                        </button>

                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
                                                ? "max-h-40 p-5 bg-white"
                                                : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact us  */}

            <section
                ref={addSectionRef}
                className="relative py-24 px-6"
                style={{ backgroundColor: "#020202" }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)] animate-pulseSlow"
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(18)].map((_, i) => (
                        <span
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-[#25baff] rounded-full opacity-40 animate-float"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.25}s`,
                            }}
                        />
                    ))}
                </div>
                <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
                        Talk To Our Experts Now
                    </h2>

                    <Link to="/contact" className="bg-[#25baff] text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
                        Contact Now
                    </Link>
                </div>
            </section>



            {/* ================= SEO TOOLS ================= */}
            <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef6ff]">

                {/* Soft Light Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#25baff]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a8d97c]/10 blur-3xl rounded-full"></div>

                <div className="relative max-w-6xl mx-auto text-center">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#020202]">
                            We Use <span className="text-[#25baff]">Advanced SEO Tools</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Our SEO strategies are powered by industry-leading tools that help
                            us analyze data, track rankings, and drive measurable growth.
                        </p>
                    </motion.div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                // whileHover={{ scale: 1.06, y: -6 }}
                                className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-center 
                               shadow-sm hover:shadow-xl hover:shadow-[#25baff]/20 hover:border-[#25baff] hover:-translate-y-3 grayscale hover:grayscale-0
                               transition-all duration-300"
                            >
                                <img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="h-12 object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* audit services  */}
            <section className="bg-white py-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
                        6 Reasons to Choose Us as Your
                        <span className="text-[#25baff]"> WooCommerce Development</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Selecting the right WooCommerce development team plays a crucial role in your store’s long-term success. Here are six strong reasons why businesses trust us for building high-performing eCommerce solutions:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Certified WooCommerce Experts",
                                text: "Our experienced developers specialize in building scalable, secure, and feature-rich WooCommerce stores. With a proven track record across diverse industries, we deliver reliable and results-driven solutions.",
                            },
                            {
                                head: "Tailored eCommerce Solutions",
                                text: "Every business is unique, and so is our approach. We create fully customized WooCommerce solutions—from theme design to advanced integrations—aligned with your goals and brand identity.",
                            },
                            {
                                head: "Client-Focused Collaboration",
                                text: "We believe in transparency and clear communication. Our team works closely with you at every stage, ensuring your vision is reflected in the final product.",
                            },
                            {
                                head: "SEO & Performance Optimization",
                                text: "We build WooCommerce stores optimized for speed, search engines, and user experience. Our development process follows SEO best practices to improve visibility and drive organic traffic.",
                            },
                            {
                                head: "Dedicated Post-Launch Support",
                                text: "Our partnership doesn’t end at launch. We provide continuous maintenance, security updates, and performance enhancements to keep your store running smoothly.",
                            },
                            {
                                head: "End-to-End eCommerce Services",
                                text: "From strategy and design to development, marketing integration, and ongoing support, we offer complete WooCommerce services under one roof for seamless project execution.",
                            },
                        ].map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                                >
                                    <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                                        {item.head}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="bg-[#a8d97c] py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="uppercase tracking-widest text-sm font-semibold text-gray-600 mb-3">
                            Testimonials
                        </p>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                text: "Professional execution and outstanding results. Our digital growth has significantly improved.",
                                name: "Kashvi Kahal",
                                role: "Marketing Director",
                            },
                            {
                                text: "Their branding and online strategy completely transformed our visibility.",
                                name: "Yumlembam Sanajaoba Meitei",
                                role: "Founder",
                            },
                            {
                                text: "Reliable team with consistent performance delivery. Highly recommended.",
                                name: "Paul Casper",
                                role: "Operations Manager",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
                            >
                                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                                    <RiDoubleQuotesL />
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    {item.text}
                                </p>

                                <h4 className="font-bold text-lg text-[#020202]">
                                    {item.name}
                                </h4>
                                <p className="text-gray-500 text-sm">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            {/* ALTERNATE SECTION  */}

            <section className="relative py-28 px-6 bg-gradient-to-br from-white via-[#f8fcff] to-[#eef7ff] overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25baff]/10 blur-[120px] rounded-full pointer-events-none"></div>


                {/* HEADER */}
                <div className="text-center mb-10 relative z-10">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#020202] mb-4">
                        Our WooCommerce Website
                        <span className="text-[#25baff]"> Development Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-3xl mx-auto">
                        Every successful WooCommerce project begins with a comprehensive consultation. We take the time to understand your business model, target audience, product offerings, and long-term growth objectives.
                    </p>

                </div>


                {/* SLIDER CONTAINER */}
                <div className="max-w-7xl mx-auto relative z-10">


                    {/* LEFT ARROW */}
                    <button className=" custom-prev absolute left-100 top-1/1 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-[#25baff] hover:text-white transition-all duration-300 flex items-center justify-center
                    ">
                        ←
                    </button>


                    {/* RIGHT ARROW */}
                    <button className=" custom-next absolute right-100 top-1/1 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-[#25baff] hover:text-white transition-all duration-300 flex items-center justify-center
                    ">
                        →
                    </button>



                    {/* SWIPER */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        speed={900}
                        loop={true}
                        className="!pb-20"
                    >

                        {wooCommMarketing.map((item, index) => (

                            <SwiperSlide key={index}>

                                <div className="group grid md:grid-cols-2 gap-12 items-center bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-[#25baff]/10 transition-all duration-700
                                ">

                                    {/* Image */}
                                    <div className="relative overflow-hidden rounded-2xl">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-2xl transition-all duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute top-4 left-4 bg-[#25baff] text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                                            Step {index + 1}
                                        </div>

                                    </div>


                                    {/* Content */}
                                    <div>

                                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#020202] mb-4 relative inline-block">

                                            {item.title}

                                            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#25baff] rounded-full"></span>

                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {item.text}
                                        </p>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>


                    {/* PAGINATION */}
                    <div className="custom-pagination flex justify-center items-center gap-4"></div>

                </div>

            </section>



            <section className="relative py-20 px-6 overflow-hidden bg-[#020617]">

                {/* background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]"></div>

                {/* glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#25baff]/20 blur-[180px] rounded-full"></div>


                <div className="relative z-10 max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <div className="mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Affordable Packages for
                            <span className="text-[#25baff]"> WooCommerce Website</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Choose a plan that fits your business stage and growth goals.
                        </p>

                    </div>


                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* SILVER */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    SILVER
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-gray-300">$</span>

                                    <span className="text-5xl font-bold text-gray-300">
                                        700
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Partially custom website design with 1 design iteration included.</p>
                                    <p>Layered sliders included.</p>
                                    <p>Fully responsive website (Desktop, Tablet, Mobile).</p>
                                    <p>New logo design not included.</p>
                                    <p>HTML email templates not included.</p>
                                    <p>Letterhead design included.</p>
                                </div>

                            </div>


                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>

                            </div>

                        </div>



                        {/* GOLD */}
                        <div className="group bg-white/10 backdrop-blur-xl border-2 border-[#25baff] rounded-2xl shadow-2xl shadow-[#25baff]/30 hover:-translate-y-4 transition-all duration-500 flex flex-col justify-between relative">

                            <div className="absolute top-4 right-4 bg-yellow-800 text-white text-xs px-3 py-2 rounded-full">
                                POPULAR
                            </div>


                            <div>

                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    GOLD
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#ff9800]">$</span>

                                    <span className="text-5xl font-bold text-[#ff9800]">
                                        1000
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Custom website design with up to 2 design iterations.</p>
                                    <p>Layered sliders included.</p>
                                    <p>Fully responsive website (Desktop, Tablet, Mobile).</p>
                                    <p>New logo design not included.</p>
                                    <p>HTML email templates not included.</p>
                                    <p>Letterhead design not included.</p>
                                </div>

                            </div>


                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
                            </div>

                        </div>



                        {/* PREMIUM */}
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/40 hover:border-[#25baff]/60 hover:-translate-y-3 hover:shadow-[#25baff]/30 transition-all duration-500 flex flex-col justify-between">

                            <div>
                                <h3 className="font-bold text-2xl text-[#25baff] mt-6">
                                    PREMIUM
                                </h3>

                                <div className="bg-white/5 mt-5 py-6 border-y border-white/10">

                                    <span className="text-lg font-bold text-[#607AFE]">$</span>

                                    <span className="text-5xl font-bold text-[#607AFE]">
                                        1800
                                    </span>

                                    <p className="text-gray-400">per month</p>

                                </div>

                                <div className="text-gray-300 space-y-3 px-6 py-6">
                                    <p>Fully custom website design with up to 4 design iterations.</p>
                                    <p>Layered sliders included.</p>
                                    <p>Fully responsive website (Desktop, Tablet, Mobile).</p>
                                    <p>New logo design included.</p>
                                    <p>HTML email templates included.</p>
                                    <p>Letterhead design included.</p>
                                </div>

                            </div>

                            <div className="pb-8">
                                <Link to="/payment">
                                    <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                        START TODAY
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </section>



            {/* FAQ */}
            <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
                        Frequently Asked
                        <span className="text-[#25baff]"> Questions</span>
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
                                                const prevContent =
                                                    prevEl.querySelector(".faq-content");

                                                gsap.to(prevContent, {
                                                    height: 0,
                                                    opacity: 0,
                                                    duration: 0.3,
                                                    ease: "power2.inOut",
                                                });
                                            }

                                            gsap.to(content, {
                                                height: "auto",
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
};

export default WoocommerceDev;
