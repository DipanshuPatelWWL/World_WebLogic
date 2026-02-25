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
    FaExchangeAlt,
    FaCreditCard,
    FaShieldAlt,
    FaGlobe,
    FaSyncAlt,
    FaChartLine
} from "react-icons/fa";


import Banner from "../../../assets/services/orm/ORM-banner.jpg";
import Payment from "../../../assets/services/ecommerce/payment/payment.avif";
import paymentBanking from "../../../assets/services/ecommerce/payment/paymentBanking.avif";
import Img1 from "../../../assets/services/ecommerce/payment/img1.avif";
import Img2 from "../../../assets/services/ecommerce/payment/img2.avif";
import Img3 from "../../../assets/services/ecommerce/wooCommerce/img3.avif";
import Img4 from "../../../assets/services/ecommerce/wooCommerce/img4.avif";
import Img5 from "../../../assets/services/ecommerce/payment/img5.avif";
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

const PaymentGateway = () => {
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
            question: "What is a payment gateway?",
            answer: "A payment gateway is a technology that securely authorizes and processes online payments. It acts as a bridge between your website or application and financial institutions, ensuring safe and encrypted transaction processing.",
        },
        {
            question: "Why do I need payment gateway integration for my business?",
            answer: "Payment gateway integration enables secure online transactions, improves customer trust, reduces cart abandonment, and ensures seamless payment processing for your website or mobile application.",
        },
        {
            question: "How does the payment gateway integration process work?",
            answer: "The process involves requirement analysis, selecting the right gateway provider, API/SDK integration, configuring security protocols, testing transactions in sandbox mode, and deploying the system to a live environment.",
        },
        {
            question: "Which payment gateways do you support?",
            answer: "We support popular payment gateways such as Stripe, PayPal, Razorpay, Authorize.Net, Square, PayU, and other region-specific providers based on your business requirements.",
        },
        {
            question: "Is payment gateway integration secure?",
            answer: "Yes, we implement SSL encryption, PCI-DSS compliance practices, tokenization, secure authentication methods, and fraud detection mechanisms to ensure safe and secure transactions.",
        },
        {
            question: "Can I integrate multiple payment gateways on my website?",
            answer: "Yes, multiple payment gateways can be integrated to provide customers with diverse payment options, improve approval rates, and ensure redundancy in case of gateway downtime.",
        },
        {
            question: "Will the integration affect my website speed?",
            answer: "No, when properly optimized, payment gateway integration does not impact performance. We ensure lightweight API implementation and optimized scripts for smooth checkout experiences.",
        },
        {
            question: "Why should I choose your company for payment gateway integration?",
            answer: "Our experienced integration specialists focus on security, performance, compliance, and seamless implementation. We deliver customized solutions tailored to your business needs with ongoing support.",
        },
        {
            question: "What industries do you specialize in for payment gateway integration?",
            answer: "We provide integration solutions for eCommerce, SaaS platforms, marketplaces, subscription-based services, education portals, healthcare systems, and other online businesses.",
        },
        {
            question: "How do we get started with your payment gateway integration services?",
            answer: "You can contact our team for a consultation. We assess your requirements, recommend suitable gateway providers, outline the integration roadmap, and begin the implementation process efficiently.",
        },
    ];

    const accordionData = [
        {
            title: "Expertise in Payment Systems",
            content: "Professional integration specialists have in-depth knowledge of payment APIs, gateways, and financial workflows, ensuring smooth and error-free transaction processing.",
        },
        {
            title: "Security & Compliance Assurance",
            content: "Experts implement SSL encryption, PCI-DSS compliance standards, fraud detection systems, and secure authentication protocols to safeguard customer data and transactions.",
        },
        {
            title: "Custom Integration Solutions",
            content: "Every business has unique requirements. A dedicated team provides tailored payment gateway integrations aligned with your platform, business model, and customer needs.",
        },
        {
            title: "Dedicated Integration Support",
            content: "From initial setup to troubleshooting, a specialized team ensures your payment system runs efficiently with minimal downtime or technical disruptions.",
        },
        {
            title: "Ongoing Monitoring & Optimization",
            content: "Continuous performance monitoring, gateway updates, and optimization strategies help improve transaction success rates and overall checkout performance.",
        },
    ];


    const paymentMarketing = [
        {
            title: "Requirement Gathering & Business Analysis",
            text: "At Digital Web Guider, our payment gateway integration specialists begin with a detailed consultation to understand your business model, transaction flow, target audience, and compliance requirements. We identify supported payment methods, currencies, security standards, and platform compatibility to design a tailored integration strategy that aligns perfectly with your business objectives.",
            image: Img1,
        },
        {
            title: "Solution Design & Integration Planning",
            text: "Based on gathered requirements, we design a customized payment gateway integration solution. This includes selecting the most suitable gateway provider such as Stripe, PayPal, Razorpay, Authorize.Net, or others based on your region and business type. We create a structured project roadmap covering technical architecture, API flow, milestones, and deployment planning for seamless execution.",
            image: Img2,
        },
        {
            title: "API & SDK Evaluation",
            text: "Our team thoroughly evaluates the APIs and SDKs provided by the selected payment gateway to understand technical specifications, authentication methods, webhooks, and security protocols. We determine the most efficient integration approach to ensure compatibility with your existing website, mobile app, or backend systems.",
            image: Img3,
        },
        {
            title: "Payment Gateway Development & Customization",
            text: "During this phase, our developers integrate and customize the payment gateway to match your platform requirements. This includes API integration, merchant account setup, configuring payment methods, implementing tokenization, and ensuring encrypted data transmission. We focus on delivering a secure, smooth, and optimized checkout experience.",
            image: Img5,
        },
        {
            title: "Testing & Quality Assurance",
            text: "Digital Web Guider conducts comprehensive testing to ensure the payment gateway works flawlessly. We perform functional testing, security validation, sandbox transaction checks, and performance testing under multiple scenarios. Our QA team identifies and resolves issues to guarantee reliable, secure, and error-free payment processing.",
            image: Img4,
        },
        {
            title: "Deployment, Support & Maintenance",
            text: "After successful testing, we deploy the payment gateway to your live environment and monitor transactions closely during the go-live phase. Our support extends beyond deployment with ongoing maintenance, security updates, fraud monitoring, and performance optimization to ensure uninterrupted and secure payment processing.",
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
                        Payment Gateway Integration
                    </p>
                </div>
            </section>

            {/* ================= INTRO ================= */}


            {/* SEO Content Section */}
            <section className="bg-gray-50 py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                            Secure & Scalable
                            <span className="text-[#25baff]"> Payment Gateway Integration</span>
                        </h2>
                        <p className="text-black mt-4">
                            In today’s digital commerce environment, seamless and secure payment processing is essential for delivering a smooth customer experience. We provide reliable payment gateway integration services for websites and mobile applications, ensuring fast, secure, and hassle-free transactions. Our solutions are designed to enhance trust, reduce cart abandonment, and streamline financial operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Fast and reliable payment processing",
                            "Multi-currency and global payment support",
                            "Smooth and optimized checkout experience",
                            "Advanced fraud detection and risk management",
                            "Secure encrypted transactions (SSL & compliance-ready)",
                            "Automated payment tracking and reconciliation",
                            "WooCommerce Performance & Speed Optimization",
                            "Integration with leading payment providers",
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
                            What is Payment Gateway
                            <span className="text-[#25baff]"> Integration?</span>
                        </h2>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-200 leading-relaxed mb-6">
                                Payment gateway integration enables secure online transactions by connecting your website or mobile application with trusted payment providers. It ensures customers can complete payments quickly, safely, and without friction, improving overall user experience and business credibility.
                            </p>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                Key Benefits:
                            </h3>

                            <ul className="space-y-3 text-gray-300 mb-6">
                                <li>• Secure encrypted transactions and data protection</li>
                                <li>• Faster and seamless checkout experience</li>
                                <li>• Multiple payment options (cards, wallets, UPI, etc.)</li>
                                <li>• Reduced cart abandonment rates</li>
                                <li>• Real-time transaction tracking and reporting</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-[#a8d97c] mb-4">
                                How We Implement It:
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                <li>• Selecting the right payment provider for your business</li>
                                <li>• API integration with your website or mobile app</li>
                                <li>• Configuring security protocols and compliance standards</li>
                                <li>• End-to-end testing across devices and browsers</li>
                                <li>• Deployment and post-integration monitoring</li>
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
                                src={Payment}
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
                        How Payment Gateway Integration
                        <span className="text-[#25baff]"> Helps Your Business Grow?</span>
                    </h2>

                    <p className="max-w-6xl mx-auto font-semibold text-gray-500 mb-3 px-6">
                        Secure and seamless payment processing plays a crucial role in business growth. A properly integrated payment gateway improves customer trust, boosts conversions, reduces fraud risks, and streamlines financial operations.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FaExchangeAlt,
                                head: "Seamless Transactions",
                                text: "Enable smooth and uninterrupted payment processing to improve user experience and increase successful transactions.",
                            },
                            {
                                icon: FaCreditCard,
                                head: "Multiple Payment Options",
                                text: "Support credit cards, debit cards, digital wallets, UPI, and bank transfers to cater to diverse customer preferences.",
                            },
                            {
                                icon: FaShieldAlt,
                                head: "Advanced Security",
                                text: "Protect transactions with SSL encryption, fraud detection systems, and secure authentication protocols.",
                            },
                            {
                                icon: FaGlobe,
                                head: "Global Payment Support",
                                text: "Accept international payments with multi-currency support to expand your reach and grow globally.",
                            },
                            {
                                icon: FaSyncAlt,
                                head: "Automated Payment Processing",
                                text: "Automate payment confirmations, refunds, and reconciliation to reduce manual work and operational errors.",
                            },
                            {
                                icon: FaChartLine,
                                head: "Real-Time Analytics & Reporting",
                                text: "Track transactions, monitor revenue, and analyze customer payment behavior with detailed reporting tools.",
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
                            Why Should You Hire a
                            <span className="text-[#25baff]"> Payment Gateway Integration Company?</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div>
                            <img
                                src={paymentBanking}
                                alt="img"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>

                        {/* Right Accordion */}
                        <div>
                            <p className="text-gray-600 mb-6">
                                Partnering with a professional payment gateway integration company ensures secure, seamless, and fully compliant transaction processing. From setup to optimization, experts help you reduce risks, improve approval rates, and deliver a smooth checkout experience that drives conversions.
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
                        <span className="text-[#25baff]"> Payment Gateway Integration Agency</span>
                    </h2>
                    <p className="font-semibold text-gray-500 mb-3 pt-5 px-12">
                        Choosing the right payment gateway integration partner is critical for secure transactions and business growth. Here are six reasons why businesses trust us to deliver seamless, secure, and high-performing payment solutions:
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                head: "Boost Conversion Rates",
                                text: "Our integration solutions streamline checkout processes, reduce friction, and improve transaction success rates—helping you increase sales and reduce cart abandonment.",
                            },
                            {
                                head: "Proven Integration Experience",
                                text: "With successful implementations across various industries, our team delivers reliable and scalable payment gateway integrations tailored to your business model.",
                            },
                            {
                                head: "Security & Compliance Focused",
                                text: "We prioritize secure payment processing through SSL encryption, PCI-DSS compliance practices, fraud detection systems, and advanced authentication protocols.",
                            },
                            {
                                head: "Fast & Reliable Payment Processing",
                                text: "Our optimized integration ensures swift transaction processing, reducing delays and improving overall customer payment experience.",
                            },
                            {
                                head: "Responsive Technical Support",
                                text: "We provide ongoing monitoring, troubleshooting, and technical assistance to ensure your payment systems remain stable, secure, and fully operational.",
                            },
                            {
                                head: "High Client Satisfaction",
                                text: "Our client-first approach, transparent communication, and commitment to excellence have earned us long-term partnerships and consistently high satisfaction rates.",
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
                        Our Payment Gateway
                        <span className="text-[#25baff]"> Integration Process</span>
                    </h2>

                    <p className="text-gray-500 max-w-4xl mx-auto">
                        Every successful payment gateway integration begins with a detailed consultation. We take the time to understand your business model, transaction flow, security requirements, supported payment methods, and long-term growth objectives to ensure a secure and seamless payment experience.
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

                        {paymentMarketing.map((item, index) => (

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

export default PaymentGateway;
