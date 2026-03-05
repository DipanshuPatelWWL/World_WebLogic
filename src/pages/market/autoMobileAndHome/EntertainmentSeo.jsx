import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Entertainment from "../../../assets/market/automobileHome/entertainment.avif";
import Revenue from "../../../assets/market/automobileHome/revenue.avif";
import socialMedia from "../../../assets/market/automobileHome/socialMedia.avif";
import Team from "../../../assets/market/automobileHome/Team.avif";

gsap.registerPlugin(ScrollTrigger);

const EntertainmentSEO = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-line", {
                y: 120,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
            });

            gsap.utils.toArray(".fade-section").forEach((section) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 100,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-[#020202] text-white overflow-hidden"
        >
            {/* ================= HERO ================= */}

            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Entertainment})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#020202]/80" />

                <div
                    ref={heroRef}
                    className="relative z-10 text-center px-6 text-white"
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                        <span className="hero-line block">Dominate Search.</span>
                        <span className="hero-line block bg-gradient-to-r from-[#25baff] to-[#a8d97c] bg-clip-text text-transparent">
                            Capture Fans.
                        </span>
                        <span className="hero-line block">Sell More Tickets.</span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto">
                        Entertainment SEO strategies engineered for filmmakers, music
                        artists, production houses, and event brands ready to scale.
                    </p>
                </div>
            </section>

            {/* ================= WHAT IS ENTERTAINMENT SEO ================= */}
            <section className="py-28 bg-white text-[#020202] fade-section">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-8">
                            What is Entertainment SEO?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Entertainment SEO is the art of making your films, albums,
                            streaming shows, live tours, and creative projects dominate
                            Google search results. From trending topics to evergreen
                            keywords, we ensure your brand appears exactly when fans are
                            searching.
                        </p>
                        <p className="mt-6 text-lg text-gray-700">
                            We combine content marketing, technical SEO, YouTube
                            optimization, and digital PR to position your brand at the top.
                        </p>
                    </div>

                    <div>
                        <img
                            src={Entertainment}
                            alt="Film production"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ================= SERVICES GLASS SECTION ================= */}
            <section className="py-32 relative fade-section">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25baff]/10 via-[#020202] to-[#a8d97c]/10 backdrop-blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center mb-20">
                        Best Entertainment SEO Strategies
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            "Keyword & Trend Research",
                            "Video & YouTube Optimization",
                            "Authority Backlink Building",
                            "Local Event SEO",
                            "Technical Performance Optimization",
                            "Social Media Amplification",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <div className="text-3xl font-bold text-[#25baff] mb-4">
                                    0{i + 1}
                                </div>
                                <p className="text-lg text-gray-300">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SIDE IMAGE SECTION ================= */}
            <section className="py-28 bg-white text-[#020202] fade-section">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src={Revenue}
                            alt="Analytics"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold mb-8">
                            SEO That Converts Fans into Revenue
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Ranking is just the beginning. We design funnels that turn
                            visitors into ticket buyers, subscribers, and superfans.
                            Structured data, lightning-fast performance, and optimized
                            landing pages ensure maximum engagement.
                        </p>

                    </div>
                </div>
            </section>

            {/* ================= VIDEO SEO GLASS SECTION ================= */}
            <section className="py-32 relative fade-section">
                <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#25baff]/10 to-[#020202]" />

                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#25baff] to-[#a8d97c] bg-clip-text text-transparent">
                            Video & YouTube SEO Domination
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            From trailers to interviews and behind-the-scenes footage,
                            optimized video content boosts rankings and visibility across
                            YouTube and Google search results.
                        </p>
                    </div>

                    <div>
                        <img
                            src={Team}
                            alt="Video SEO"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-[#25baff] mb-6 text-center">
                        Social Media for Entertainment Companies
                    </h2>

                    {/* Top Paragraph */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
                        Social media is one of the most powerful ways to promote your entertainment brand.
                        Video content performs exceptionally well across platforms, so maintaining an
                        active presence on multiple social media channels is essential. Build a strong
                        community of followers and keep them informed about new releases, live shows,
                        events, and exclusive updates.
                    </p>

                    {/* Image Grid */}
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-10">

                        {/* Left Image - Social Post */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="shadow-xl rounded-lg overflow-hidden border"
                        >
                            <img
                                src={socialMedia}
                                alt="Social media post example"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Right Image - Promotional Graphic */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="shadow-xl rounded-lg overflow-hidden"
                        >
                            <div className="bg-gradient-to-br from-[#25baff] to-[#0ea5e9] p-12 text-white h-full flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Social Media for <br /> Entertainment Companies
                                </h3>

                                <p className="text-lg opacity-90">
                                    Build awareness. Engage fans. Drive ticket sales and streams
                                    through strategic social media campaigns.
                                </p>
                                <p>
                                    If your competitors are not actively engaging on specific social
                                    media platforms, this is your opportunity to stand out. A strong
                                    social presence not only builds brand visibility but also generates
                                    valuable backlinks and traffic that support your overall
                                    entertainment SEO strategy.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>


            <section className="py-28 bg-[#020202] text-white relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#25baff]/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a8d97c]/20 blur-3xl rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                            High-Quality <span className="text-[#25baff]">Backlinks</span>
                        </h2>
                        <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto">
                            Authority links from trusted entertainment platforms signal credibility to search engines.
                            We secure powerful backlinks that elevate rankings and build long-term brand trust.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">

                        {/* Left Content */}
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-[#a8d97c]">
                                Where We Build Authority
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                Off-page SEO in the entertainment industry requires strategic placements
                                across industry-trusted directories, media outlets, and event platforms.
                                These links increase visibility and drive high-intent traffic.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "IMDb",
                                    "Rotten Tomatoes",
                                    "AllMusic",
                                    "Playbill",
                                    "Eventbrite",
                                    "Bandsintown",
                                    "Stage 32",
                                    "Backstage",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg hover:bg-[#25baff]/10 transition"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="bg-gradient-to-br from-[#25baff]/10 via-white/5 to-[#a8d97c]/10 backdrop-blur-2xl border border-white/10 rounded-3xl mt-15 p-10">
                            <h3 className="text-3xl font-bold mb-6">
                                Why It Matters
                            </h3>

                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Boost domain authority & search rankings
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Increase organic traffic from trusted sources
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Build credibility within the entertainment industry
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#a8d97c]">✔</span>
                                    Strengthen long-term digital presence
                                </li>
                            </ul>

                            <p className="mt-8 text-gray-400 text-sm">
                                We ensure all listings and placements contain accurate, optimized
                                business information to maximize SEO impact and reputation growth.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            <section className="py-28 bg-white text-[#020202]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ================= SECTION 6 ================= */}
                    <div className="mb-24">
                        <div className="gap-4 mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                                Optimize Video Content
                            </h2>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed text-center mb-10">
                            Video is the heartbeat of the entertainment industry. Whether it's trailers, interviews, behind-the-scenes footage, or streaming content — optimized videos drive massive organic visibility and engagement.
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">

                            {/* Left Card */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-[#25baff]">
                                    Smart Video SEO
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li>✔ Use high-intent keywords in titles & descriptions</li>
                                    <li>✔ Optimize tags, transcripts & captions</li>
                                    <li>✔ Create compelling thumbnails</li>
                                    <li>✔ Encourage embeds & social sharing</li>
                                </ul>
                            </motion.div>

                            {/* Right Card */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-[#a8c97c]">
                                    Search Visibility Boost
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Properly optimized videos improve your rankings, increase
                                    click-through rates, and enhance your advertising efforts.
                                    Rich snippets and structured metadata help your content stand
                                    out directly inside search results.
                                </p>

                            </motion.div>

                        </div>
                    </div>

                    {/* ================= SECTION 7 ================= */}
                    <div>
                        <div className="gap-4 mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                                Prioritize User Experience for More Conversions
                            </h2>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
                            In the era of OTT and VOD platforms, simply launching your streaming service isn’t enough. Continuous UX optimization ensures higher engagement, longer watch times, and more subscriptions.  A seamless user experience combined with optimized indexing and
                            structured video implementation transforms your OTT platform into
                            a high-converting entertainment engine.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-[#25baff]">
                                    Platform Optimization
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Improve navigation, reduce friction, and align with modern
                                    streaming behavior trends to outperform competitors.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-[#a8c97c]">
                                    Technical SEO Structure
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Clean URL structure, optimized page hierarchy, and structured
                                    data help search engines properly index your platform.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition shadow-xl hover:shadow-xl hover:border-[#25baff]/60 hover:shadow-[#25baff]/30"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-[#020202]">
                                    Rich Snippets & Visibility
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Video rich snippets enhance click-through rates by giving
                                    viewers previews directly in search results — increasing views
                                    and conversions.
                                </p>
                            </motion.div>

                        </div>


                    </div>

                </div>
            </section>


        </div>
    );
};

export default EntertainmentSEO;