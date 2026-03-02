// DaycareSEOPage.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const SectionTitle = ({ title, light }) => (
    <div className="text-center mb-16">
        <h2
            className={`text-4xl md:text-5xl font-bold ${light ? "text-[#020202]" : "text-white"
                }`}
        >
            {title}
        </h2>
        <div className="w-24 h-1 bg-[#25baff] mx-auto mt-4 rounded-full" />
    </div>
);

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=2000"
                alt="Daycare"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#020202]/85" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold mb-6"
            >
                Daycare SEO That Fills Your Classrooms
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-10"
            >
                More visibility. More tours. More enrollments.
            </motion.p>
        </div>
    </section>
);

const DaycareSEOPage = () => {
    return (
        <div className="bg-[#020202] text-white font-sans overflow-hidden">

            <Hero />

            {/* GLASS SECTION */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-28 px-6"
            >
                <div className="max-w-6xl mx-auto bg-white/10 md:bg-white/15 backdrop-blur-2xl border border-white/10 rounded-3xl p-16 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

                    <SectionTitle title="What Is Daycare SEO?" />

                    {/* Main Intro */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-white text-center max-w-4xl mx-auto mb-8 text-lg leading-relaxed"
                    >
                        Daycare SEO is the process of optimizing your childcare website so that
                        local parents find your center before they find your competitors.
                        When someone searches for “best daycare near me” or
                        “preschool in [city name]”, your center appears at the top.
                    </motion.p>

                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-center max-w-3xl mx-auto mb-16"
                    >
                        It combines local search optimization, trust-building content, technical
                        improvements, and conversion strategy to turn online searches into real
                        classroom enrollments.
                    </motion.p>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                title: "Local Search Domination",
                                desc: "Rank in Google Maps and local search results when parents look for nearby childcare services.",
                            },
                            {
                                title: "Parent-Focused Keywords",
                                desc: "Target high-intent phrases that parents actually type when searching for daycare options.",
                            },
                            {
                                title: "Website Speed & Performance",
                                desc: "Faster websites improve rankings and reduce bounce rates from busy parents.",
                            },
                            {
                                title: "Trust-Building Content",
                                desc: "Showcase safety policies, curriculum, testimonials, and photos that build credibility.",
                            },
                            {
                                title: "Conversion Optimization",
                                desc: "Turn visitors into tour bookings with optimized calls-to-action and inquiry forms.",
                            },
                            {
                                title: "Google Business Profile Growth",
                                desc: "Optimize reviews, images, and local presence to increase calls and direction requests.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white/5 border border-[#25baff]/20 p-8 rounded-2xl hover:border-[#25baff] transition-all hover:scale-[1.02]"
                            >
                                <h4 className="text-[#a8d97c] font-semibold mb-3">
                                    ✓ {item.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Explanation Block */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-gradient-to-r from-[#25baff]/10 to-[#a8d97c]/10 border border-white/10 p-10 rounded-2xl text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            Why Daycare SEO Matters More Than Ever
                        </h3>
                        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Today’s parents don’t flip through directories. They search online.
                            If your daycare isn’t visible on page one, you’re invisible.
                            A strong SEO strategy ensures your classrooms stay full,
                            your waiting list grows, and your marketing investment
                            generates long-term, compounding results.
                        </p>
                    </motion.div>

                </div>
            </motion.section>

            {/* LIGHT SECTION */}
            <motion.section
                className="py-24 px-6 bg-white"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <SectionTitle title="Real Results for Childcare Centers" light />

                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        {[
                            { number: "180%", label: "Increase in Organic Traffic" },
                            { number: "3X", label: "More Tour Bookings" },
                            { number: "65%", label: "Lower Cost Per Lead" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-10 rounded-2xl shadow-lg bg-[#f8f9fa]"
                            >
                                <h3 className="text-4xl font-bold text-[#25baff] mb-4">
                                    {stat.number}
                                </h3>
                                <p className="text-[#020202] font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* PROCESS SECTION GLASS */}
            <motion.section
                className="py-24 px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
            >
                <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                    <SectionTitle title="Our 3 Step Process" />

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { step: "01", title: "Audit & Strategy" },
                            { step: "02", title: "Optimization & Content" },
                            { step: "03", title: "Growth & Tracking" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold text-[#25baff] mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* TESTIMONIAL SECTION LIGHT */}
            <motion.section className="py-24 px-6 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto text-center">
                    <SectionTitle title="What Daycare Owners Say" light />

                    <div className="bg-white p-10 rounded-2xl shadow-xl">
                        <p className="text-lg text-gray-700 mb-6">
                            “Within 4 months our inquiries doubled and our waiting list filled up.
                            The SEO strategy completely changed our enrollment pipeline.”
                        </p>
                        <h4 className="font-semibold text-[#020202]">
                            Sarah Mitchell – Little Stars Preschool
                        </h4>
                    </div>
                </div>
            </motion.section>

            {/* FAQ SECTION GLASS */}
            <motion.section className="py-24 px-6">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                    <SectionTitle title="Frequently Asked Questions" />

                    <div className="space-y-6">
                        {[
                            "How long does daycare SEO take?",
                            "Will SEO work in small towns?",
                            "Do you handle Google Business Profile?",
                        ].map((faq, i) => (
                            <div key={i} className="border-b border-white/10 pb-4">
                                <h4 className="font-semibold text-[#a8d97c]">{faq}</h4>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Most centers see noticeable improvements within 3–6 months.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* FINAL CTA */}
            <section className="py-32 px-6 text-center bg-[#020202]">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Ready to Fill Your Daycare?
                </h2>

                <button className="bg-[#a8d97c] text-[#020202] font-bold py-4 px-12 rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-[#a8d97c]/40">
                    Book Your Strategy Call
                </button>
            </section>

        </div>
    );
};

export default DaycareSEOPage;