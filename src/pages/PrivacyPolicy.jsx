import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import privacyPolicy from "../assets/about/privacyPolicy.jpg"

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                }
            );
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const Card = ({ title, children }) => (
        <div
            ref={addToRefs}
            className="bg-white border border-[#25baff]/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <h2 className="text-lg font-semibold text-[#25baff] mb-3">
                {title}
            </h2>
            <p className="text-gray-700 leading-7 text-[15px]">
                {children}
            </p>
        </div>
    );

    return (
        <div className="bg-[#f9fafb] min-h-screen">

            {/* 🔹 Top Banner */}
            <div className="relative h-[340px] md:h-[380px] flex items-center justify-center overflow-hidden">

                {/* 🔹 Background Image */}
                <img
                    src={privacyPolicy}
                    alt="privacy banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* 🔹 Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* 🔹 Center Content */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Privacy Policy
                    </h1>

                    {/* Accent underline */}
                    <div className="w-20 h-[3px] bg-[#a8d97c] mx-auto mt-3 rounded-full"></div>
                </motion.div>

            </div>

            {/* 🔹 Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">

                <Card title="Introduction">
                    We are committed to protecting your personal information and respecting your privacy. This policy explains how we collect, use, and safeguard your data when you interact with our website, services, or applications. By using our platform, you agree to the terms outlined in this privacy policy.
                </Card>

                <Card title="Information We Collect">
                    When you register, place an order, or contact us, we may collect details such as your name, email address, phone number, payment information, and company-related details. We may also collect professional and business-related information along with usage data like how you interact with our website, pages visited, and browsing behavior to improve user experience.
                </Card>

                <Card title="How We Use Your Information">
                    We use your information to provide and manage our services, process transactions securely, improve our platform, personalize your experience, and communicate with you regarding updates or support. This helps us deliver a better and more efficient service.
                </Card>

                <Card title="Sharing of Information">
                    We do not sell your personal information. However, we may share it with trusted third parties such as payment processors, service providers, hosting platforms, analytics tools, and search engines when necessary to deliver our services. We may also disclose information if required by law.
                </Card>

                <Card title="Cookies & Website Tracking">
                    Our website uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and provide personalized content. You can control cookies through your browser settings, but disabling them may affect functionality.
                </Card>

                <Card title="Data Security">
                    We implement strong security measures including secure servers, encryption, and restricted access controls to protect your data. While we take all reasonable steps, no system can be completely secure, and we continuously improve our practices.
                </Card>

                <Card title="Data Retention">
                    We retain your personal information only for as long as necessary to fulfill business purposes and comply with legal obligations. Once no longer required, your data is securely deleted or anonymized.
                </Card>

                <Card title="Your Rights">
                    You have the right to access, update, or correct your personal data. You may also withdraw consent where applicable and request deletion of your information, subject to legal requirements.
                </Card>

                <Card title="Policy Updates & Legal Compliance">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page. We comply with applicable laws and regulations to ensure your data is handled responsibly.
                </Card>

                <Card title="Contact Us">
                    If you have any questions regarding this Privacy Policy, you can contact us through our official communication channels. We are here to assist you with any concerns related to your data and privacy.
                </Card>

            </div>
        </div>
    );
};

export default PrivacyPolicy;