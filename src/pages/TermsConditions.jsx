import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import termsConditions from "../assets/about/termsConditions.jpg"

gsap.registerPlugin(ScrollTrigger);

const TermsConditions = () => {
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

            {/* 🔹 Banner (Image Based) */}
            <div className="relative h-[360px] md:h-[400px] flex items-center justify-center overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    src={termsConditions}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="terms banner"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Terms & Conditions
                    </h1>
                    <div className="w-20 h-[3px] bg-[#a8d97c] mx-auto mt-3 rounded-full"></div>
                </motion.div>
            </div>

            {/* 🔹 Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">

                <Card title="Introduction">
                    These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms. If you do not agree, you should not use our services.
                </Card>

                <Card title="Prior Conditions">
                    Before engaging with our services, you agree that your website does not contain duplicate content, misleading redirects, or unethical SEO practices. We do not guarantee specific rankings, traffic, or sales outcomes. All service fees are paid in advance and are non-refundable. Any unauthorized changes may void service commitments.
                </Card>

                <Card title="User Responsibilities & Access">
                    To deliver our services effectively, you agree to provide necessary access such as website admin credentials, analytics data, and communication permissions with third-party developers if required. You also authorize us to use your brand assets for service and promotional purposes unless otherwise instructed.
                </Card>

                <Card title="Confidentiality (Non-Disclosure)">
                    Both parties agree to maintain strict confidentiality of shared information. You agree not to publicly disclose or criticize business practices during or after the service period. Any breach may result in legal consequences.
                </Card>

                <Card title="Intellectual Property Rights">
                    All materials and content remain protected under copyright laws. You may use them for personal or internal purposes only. Unauthorized reproduction or distribution is strictly prohibited without prior written consent.
                </Card>

                <Card title="Subscription & Billing Policy">
                    All services are subscription-based and billed in advance. Subscriptions automatically renew unless canceled. No prorated refunds or credits are provided.
                </Card>

                <Card title="Cancellation Policy">
                    You may cancel your subscription by notifying us at least three days before your next billing cycle. Late cancellation may result in additional charges.
                </Card>

                <Card title="Refund Policy">
                    All payments are non-refundable. No refunds or credits will be issued for unused services or partial billing periods.
                </Card>

            </div>
        </div>
    );
};

export default TermsConditions;