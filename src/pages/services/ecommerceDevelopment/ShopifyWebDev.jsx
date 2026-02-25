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
import { FaServer } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { LuShare2 } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";


import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import ShopifyImg from "../../../assets/services/ecommerce/shopify/shopify.avif";
import Shopping from "../../../assets/services/ecommerce/Shopify/shopping.avif";
import Img1 from "../../../assets/services/ecommerce/Shopify/img1.avif";
import Img2 from "../../../assets/services/ecommerce/Shopify/img2.avif";
import Img3 from "../../../assets/services/ecommerce/Shopify/img3.avif";
import Img4 from "../../../assets/services/ecommerce/Shopify/img4.avif";
import Img5 from "../../../assets/services/ecommerce/Shopify/img5.avif";
import Img6 from "../../../assets/services/ecommerce/Shopify/img6.avif";
import Img7 from "../../../assets/services/ecommerce/Shopify/img7.avif";
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

const ShopifyWebDev = () => {
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
            question: "What makes Shopify a strong platform for an online store?",
            answer: "Shopify offers a user-friendly interface, secure infrastructure, and powerful scalability, making it ideal for businesses of all sizes. Its built-in tools for product management, payments, shipping, and analytics allow you to manage your store efficiently while maintaining flexibility through customizable themes and app integrations.",
        },
        {
            question: "How long does it take to build a Shopify store?",
            answer: "The timeline depends on project complexity. A basic store can take 2–3 weeks, while fully custom stores with advanced integrations may take 4–8 weeks. Clear planning and defined requirements help ensure timely delivery.",
        },
        {
            question: "Can my Shopify store be fully customized to match my brand?",
            answer: "Yes. We design and develop fully customized Shopify themes tailored to your brand identity, including layout, colors, typography, user experience, and functionality enhancements.",
        },
        {
            question: "Do you provide ongoing support after launch?",
            answer: "Absolutely. We offer post-launch support, maintenance, performance monitoring, updates, and feature enhancements to ensure your store runs smoothly and continues to grow.",
        },
        {
            question: "Will my Shopify store be mobile-friendly?",
            answer: "Yes. All Shopify stores are built with responsive design principles to ensure seamless performance across mobile devices, tablets, and desktops.",
        },
        {
            question: "Can you migrate my existing store to Shopify?",
            answer: "Yes. We handle secure migration from platforms like WooCommerce, Magento, Wix, or custom-built systems, ensuring product data, customer information, and SEO value are preserved.",
        },
        {
            question: "Do you integrate third-party apps and tools?",
            answer: "Yes. We integrate essential third-party tools such as payment gateways, shipping providers, CRM systems, marketing automation tools, analytics platforms, and custom APIs.",
        },
        {
            question: "Is SEO included in Shopify development services?",
            answer: "Basic technical SEO setup is included, such as optimized URLs, meta tags, site structure, and speed optimization. Advanced SEO services can also be implemented for improved search visibility.",
        },
        {
            question: "How do I manage products, inventory, and orders?",
            answer: "Shopify provides an intuitive dashboard that allows you to manage product listings, track inventory, process orders, monitor customer activity, and access sales reports easily.",
        },
    ];

    const accordionData = [
        {
            title: "Advanced E-commerce Functionality",
            content:
                "A professional Shopify team implements powerful features such as product customization, subscription models, multi-currency support, advanced filtering, and seamless third-party integrations — helping your store stand out in a competitive market.",
        },
        {
            title: "Custom Theme Design & Development",
            content:
                "Get a fully customized storefront tailored to your brand identity. From UI/UX enhancements to mobile-first designs, experts create visually appealing and conversion-optimized themes.",
        },
        {
            title: "Smart Inventory & Order Management",
            content:
                "Streamline product tracking, automate stock updates, manage bulk orders, and integrate fulfillment systems to maintain accurate inventory and efficient operations.",
        },
        {
            title: "Dedicated Technical Support",
            content:
                "Ongoing support ensures your store runs smoothly. From troubleshooting to feature updates and performance monitoring, experts keep your business online without disruptions.",
        },
        {
            title: "Speed & Performance Optimization",
            content:
                "Fast-loading pages improve user experience and search rankings. Professional developers optimize code, images, apps, and server configurations to maximize store speed and conversion rates.",
        },
    ];


    const shopifyMarketing = [
        {
            title: "Discovery & Strategic Consultation",
            text: "Our Shopify development process begins with a detailed discovery and consultation phase to fully understand your business, target audience, product range, and growth objectives. We analyze your market positioning, identify required features and integrations, review your design preferences, and assess technical requirements to ensure scalability. During this stage, we also align on timelines, budget, and project milestones. This strategic foundation allows us to create a Shopify store that is not only visually appealing but also performance-driven and tailored to support your long-term eCommerce success.",
            image: Img1,
        },
        {
            title: "Research & Strategic Planning",
            text: "In the research and planning phase, we develop a clear and results-driven roadmap tailored to your business goals. Our team conducts in-depth market analysis, competitor research, and industry benchmarking to identify opportunities that give your Shopify store a competitive edge. We carefully define core features, required integrations, user experience enhancements, and technical architecture to ensure your store is both functional and future-ready. Detailed technical specifications and structured planning help minimize risks, streamline development, and ensure smooth execution from start to finish.",
            image: Img2,
        },
        {
            title: "Design & Prototyping",
            text: "During the design and prototyping phase, we transform strategy into a visual experience. Our team creates detailed wireframes to map out your store’s structure, user journey, and navigation flow, ensuring a seamless and intuitive experience. We then develop high-fidelity mockups that reflect your brand identity, incorporating colors, typography, imagery, and design elements aligned with your vision. Through collaborative feedback and refinements, we fine-tune the design to ensure it is both visually compelling and conversion-focused, delivering a Shopify store that looks exceptional and performs flawlessly across all devices.",
            image: Img3,
        },
        {
            title: "Advanced Shopify Development & Custom Implementation",
            text: "In this phase, we bring your Shopify store to life with robust, scalable, and fully customized development. Our team either customizes a premium Shopify theme or builds a tailored solution from the ground up to match your brand vision and business requirements. We seamlessly integrate essential features such as secure payment gateways, advanced shipping configurations, inventory management systems, and third-party applications to enhance functionality. Every line of code is written following best practices for performance, security, and scalability, ensuring your Shopify store is fast, reliable, and ready to support long-term growth.",
            image: Img4,
        },
        {
            title: "Content Integration & Store Structuring",
            text: "During this phase, we carefully organize and integrate all essential content into your Shopify store. This includes uploading and structuring product listings with detailed descriptions, optimized images, accurate pricing, and proper categorization to enhance usability and navigation. We also create and configure key informational pages such as About Us, Contact, FAQ, Blog, and policy pages to strengthen credibility and support SEO performance. By ensuring content clarity, consistency, and search optimization, we build a store that is both user-friendly and search-engine ready, helping attract, engage, and convert visitors effectively.",
            image: Img5,
        },
        {
            title: "Testing, Optimization & Quality Assurance",
            text: "Before launch, we conduct comprehensive testing to ensure your Shopify store performs flawlessly across all devices, browsers, and screen sizes. Every feature, integration, and user flow is thoroughly checked to confirm smooth functionality and consistent performance. We test payment gateways, checkout processes, navigation, forms, and third-party apps to eliminate errors and prevent disruptions. Our quality assurance process also includes performance optimization, responsiveness checks, and security validation to ensure a seamless shopping experience. By identifying and resolving issues proactively, we help deliver a stable, fast, and reliable store that enhances customer satisfaction and improves conversion rates.",
            image: Img6,
        },
        {
            title: "Training, Handover & Ongoing Support",
            text: "Once your Shopify store is successfully launched, we ensure you are fully equipped to manage and grow it with confidence. Our team provides hands-on training to guide you through the store’s backend, including product management, order processing, customer management, content updates, and performance tracking. We also deliver detailed documentation and best-practice guidelines for smooth day-to-day operations. For continued peace of mind, we offer flexible post-launch support and maintenance plans to assist with updates, troubleshooting, enhancements, and performance improvements. Our goal is to empower you with the knowledge and ongoing support needed to keep your store successful and scalable for the long term.",
            image: Img7,
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
                        Shopify Web Development
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}


            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Leading Shopify Website
                            <span className="text-[#25baff]"> Development Services</span>
                        </h2>
                        <p className="text-black mt-4">
                            Launch, scale, and manage your online store with confidence through our expert Shopify development solutions. At Digital Guider, we design and develop high-performance Shopify eCommerce websites tailored for D2C, B2B, and B2C brands — combining seamless functionality, modern design, and scalable architecture to support your business growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Custom Shopify Store Design & Development",
                            "Shopify Theme Customization & UI Enhancements",
                            "Shopify App Integration & Custom App Development",
                            "Seamless Migration to Shopify",
                            "Shopify SEO & Conversion Optimization",
                            "Ongoing Store Maintenance & Technical Support",
                            "Third-Party API & Payment Gateway Integrations",
                            "Speed Optimization & Performance Enhancements",
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            What is
                            <span className="text-[#25baff]"> Shopify?</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-200 leading-relaxed mb-6">
                                Shopify is a leading eCommerce platform that enables businesses
                                to build, manage, and scale online stores with ease. Whether
                                you're a startup or an established enterprise, Shopify provides
                                powerful tools to create visually appealing, secure, and
                                high-performing online shopping experiences.
                            </p>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                With Our Shopify Development Services, You Get:
                            </h3>

                            <ul className="space-y-3 text-gray-300 mb-6">
                                <li>• User-friendly and conversion-focused online stores</li>
                                <li>• Seamless payment and shipping integrations</li>
                                <li>• Advanced inventory and order management</li>
                                <li>• Fully customizable themes and UI enhancements</li>
                                <li>• Secure and scalable infrastructure</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                Our Development Process Includes:
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li>• Shopify store setup and configuration</li>
                                <li>• Custom design and theme development</li>
                                <li>• App integration and custom functionality</li>
                                <li>• Performance optimization and speed enhancement</li>
                                <li>• Ongoing maintenance and technical support</li>
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
                                src={ShopifyImg}
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
                        How Shopify Development Services
                        <span className="text-[#25baff]"> Accelerate Your E-commerce Growth</span>
                    </h2>

                    <p className="font-semibold text-gray-500 mb-3 px-6">
                        Shopify development empowers your online business with scalability, flexibility, and performance-driven features. Here’s how partnering with expert Shopify developers strengthens your e-commerce success:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaServer,
                                head: "High-Performance & Reliable Infrastructure",
                                text: "Shopify’s cloud-based architecture ensures fast loading speeds, high uptime, and secure hosting. Your store remains stable, responsive, and optimized for seamless shopping experiences — even during high traffic peaks.",
                            },
                            {
                                icon: IoMdTrendingUp,
                                head: "Flexible & Scalable Architecture",
                                text: "Whether you're launching with a small product catalog or scaling to thousands of SKUs, Shopify adapts to your growth. Custom development ensures your store evolves as your business expands.",
                            },
                            {
                                icon: LuShare2,
                                head: "Multi-Channel Selling Capabilities",
                                text: "Sell across your website, social media platforms, online marketplaces, and mobile apps from one centralized dashboard. Reach more customers without managing multiple disconnected systems.",
                            },
                            {
                                icon: FaRegCreditCard,
                                head: "Secure & Diverse Payment Integrations",
                                text: "Offer multiple payment gateways including credit cards, digital wallets, and global payment providers. A secure and frictionless checkout process improves trust and increases conversions.",
                            },
                            {
                                icon: FaTruck,
                                head: "Global Commerce & International Shipping",
                                text: "Expand beyond borders with built-in international shipping tools, tax configurations, multi-currency support, and localized checkout experiences.",
                            },
                            {
                                icon: IoShieldCheckmark,
                                head: "Advanced Security & PCI Compliance",
                                text: "Shopify stores are PCI DSS compliant and backed by enterprise-level security protocols, ensuring your customers’ payment and personal information remain protected.",
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
                            Why Hire a Professional
                            <span className="text-[#25baff]"> Shopify Development Company?</span>
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
                                Partnering with an experienced Shopify development team ensures your online store is built for performance, scalability, and long-term growth. Here’s how expert developers add real value to your eCommerce business:
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
                        6 Reasons to Partner With Us for
                        <span className="text-[#25baff]"> Shopify Web Development</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        We build high-performing Shopify stores designed to convert visitors into customers. Our team combines strategy, design, and technical expertise to create scalable eCommerce solutions that drive measurable growth.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Certified Shopify Specialists",
                                text: "Our experienced developers stay updated with the latest Shopify features, tools, and best practices. We ensure your store leverages the platform’s full capabilities for performance, security, and scalability.",
                            },
                            {
                                head: "Ongoing Post-Launch Support",
                                text: "Our partnership doesn’t end at launch. We provide continuous monitoring, updates, troubleshooting, and feature enhancements to keep your store running smoothly and efficiently.",
                            },
                            {
                                head: "Client-First Approach",
                                text: "We prioritize transparency, collaboration, and clear communication. Every project is tailored to your business goals, ensuring the final product aligns perfectly with your brand vision.",
                            },
                            {
                                head: "SEO & Performance Optimization",
                                text: "We develop Shopify stores optimized for search visibility and speed. From technical SEO to performance tuning, we focus on improving rankings, user experience, and conversion rates.",
                            },
                            {
                                head: "Custom Design & Unique User Experience",
                                text: "Stand out from competitors with a fully customized Shopify theme. We design intuitive, mobile-responsive, and conversion-focused interfaces that reflect your brand identity.",
                            },
                            {
                                head: "Cost-Effective & Scalable Solutions",
                                text: "Our development approach balances quality and budget. We build flexible solutions that grow with your business, helping you maximize ROI without unnecessary expenses.",
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
                        Our Shopify Development
                        <span className="text-[#25baff]"> Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-3xl mx-auto">
                        Every successful Shopify project begins with a comprehensive consultation. We take the time to understand your business model, target audience, product offerings, and long-term growth objectives.
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

                        {shopifyMarketing.map((item, index) => (

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
                            <span className="text-[#25baff]"> Shopify Website</span>
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
                                    <p>Custom Shopify Theme Setup</p>
                                    <p>Up to 10 Products Upload</p>
                                    <p>Mobile-Responsive Design</p>
                                    <p>Basic Payment & Shipping Setup</p>
                                    <p>Essential Apps Integration</p>
                                    <p>Basic On-Page SEO Setup</p>
                                    <p>2 Weeks Post-Launch Support</p>
                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

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

                                    <p>Fully Custom Design</p>
                                    <p>Up to 50 Products Upload</p>
                                    <p>Advanced Navigation & Filtering</p>
                                    <p>Conversion-Focused UI/UX</p>
                                    <p>Email Marketing Integration</p>
                                    <p>Payment Gateway & Shipping Integration</p>
                                    <p>Basic Speed Optimization</p>
                                    <p>1 Month Post-Launch Support</p>

                                </div>

                            </div>


                            <div className="pb-8">

                                <button className="bg-[#25baff] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#25baff] border border-[#25baff] transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

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
                                    <p>Fully Custom Shopify Store (From Scratch)</p>
                                    <p>Unlimited Product Upload</p>
                                    <p>Advanced App & API Integrations</p>
                                    <p>Custom Functionalities</p>
                                    <p>Multi-Currency & Multi-Region Setup</p>
                                    <p>Advanced SEO & Speed Optimization</p>
                                    <p>CRO Optimization Setup</p>
                                    <p>Dedicated Project Manager</p>
                                    <p>2 Months Priority Support</p>
                                </div>

                            </div>

                            <div className="pb-8">

                                <button className="border border-[#25baff] text-[#25baff] px-8 py-3 rounded-full hover:bg-[#25baff] hover:text-white transition-all duration-300 hover:cursor-pointer">
                                    START TODAY
                                </button>

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

export default ShopifyWebDev;
