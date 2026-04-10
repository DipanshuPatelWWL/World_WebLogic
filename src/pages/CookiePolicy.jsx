import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cookiePolicy from "../assets/about/cookiePolicy.jpg"

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy = () => {
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

            {/* 🔹 Banner */}
            <div className="relative h-[340px] md:h-[380px] flex items-center justify-center overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    src={cookiePolicy}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="cookie banner"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Cookie Policy
                    </h1>
                    <div className="w-20 h-[3px] bg-[#a8d97c] mx-auto mt-3 rounded-full"></div>
                </motion.div>
            </div>

            {/* 🔹 Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">

                <Card title="Introduction">
                    This Cookie Policy explains how we use cookies and similar tracking technologies when you visit and interact with our website. It outlines what cookies are, how and why we use them, and the choices available to you regarding their use. By continuing to browse or use our services, you acknowledge that you have read, understood, and agreed to the use of cookies in accordance with this policy.
                </Card>

                <Card title="What Are Cookies">
                    Cookies are small text files that are stored on your device, such as a computer, smartphone, or tablet, when you visit a website. These files allow the website to recognize your device and remember information about your visit, such as your preferences, login details, and browsing behavior. Cookies can either be session-based, which are deleted once you close your browser, or persistent, which remain on your device for a defined period of time or until manually deleted.
                </Card>

                <Card title="How We Use Cookies">
                    We use cookies to ensure that our website functions efficiently and provides a seamless user experience. Cookies help us understand how users interact with different parts of our website, enabling us to improve navigation, optimize performance, and enhance overall usability. Additionally, cookies allow us to personalize content, remember your preferences, and provide relevant recommendations based on your interactions with our platform.
                </Card>

                <Card title="Types of Cookies We Use">
                    We use a variety of cookies to serve different purposes and improve your experience on our website. Essential cookies are required for basic website functionality and cannot be disabled without affecting performance. Performance cookies collect anonymous data about how visitors use our site, helping us improve speed and usability. Functional cookies remember your preferences and settings to provide a more personalized experience, while advertising cookies are used to deliver relevant ads and measure the effectiveness of marketing campaigns.
                </Card>

                <Card title="Third-Party Cookies">
                    In some cases, we may allow trusted third-party services such as analytics providers and advertising networks to place cookies on your device. These third parties may collect information about your online activities across different websites and use it to provide insights, analytics, or targeted advertisements. We do not control these cookies, and their use is governed by the respective privacy policies of those third-party providers.
                </Card>

                <Card title="Managing Cookies">
                    You have the ability to control and manage cookies through your browser settings. Most web browsers allow you to block, delete, or notify you about cookies before they are stored on your device. However, please note that disabling cookies may affect the functionality of certain features on our website and may result in a less optimized user experience.
                </Card>

                <Card title="Updates to This Policy">
                    We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices. Any updates will be posted on this page, and we encourage you to review this policy periodically to stay informed about how we use cookies and protect your information.
                </Card>

            </div>
        </div>
    );
};

export default CookiePolicy;