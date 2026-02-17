import { useState } from "react";
import Banner from "../../../assets/services/ORM-banner.jpg";
import { PiStrategyFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { GiNuclearPlant } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { FaIndustry } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { PiCubeTransparentLight } from "react-icons/pi";


const SmallBusinessSeo = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const accordionData = [
        {
            title: "SEO Expertise",
            content:
                "An experienced SEO team understands search engine algorithms and applies proven strategies to improve your rankings and online visibility."
        },
        {
            title: "Dedicated Team Support",
            content:
                "A professional SEO company provides continuous monitoring, optimization, and strategic improvements tailored to your business goals."
        },
        {
            title: "More Qualified Leads",
            content:
                "By targeting high-intent keywords, SEO helps attract visitors who are actively searching for your services."
        },
        {
            title: "Cost-Effective Growth",
            content:
                "SEO delivers long-term results and sustainable traffic growth without the high recurring cost of paid ads."
        },
        {
            title: "Transparent Reporting",
            content:
                "Regular performance reports help you track rankings, traffic growth, and return on investment."
        }
    ];
    return (
        <>
            <div className="bg-white text-gray-900">

                {/* Banner Section */}
                <section
                    className="relative h-[58vh] flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${Banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/70" />

                    <div className="relative z-10 text-center px-6 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                            Services
                        </h1>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                            Small Business SEO
                        </p>
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="bg-gray-50 py-28">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">

                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
                                Best
                                <span className="text-[#25baff]"> Small Business SEO</span> Services
                            </h2>
                            <p className="text-black mt-4">
                                Get more online traffic & more footfall with our affordable small business SEO services.
                                Here’s how our small business SEO services help your business:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Use the power of search engines",
                                "Reach your target market",
                                "Rank higher locally, get found easily",
                                "Get increased online visibility",
                                "Get more footfall",
                                "Turn them into customers",
                                "Get listed in local directories",
                                "Choose your budget",
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="group bg-white border border-gray-200 rounded-2xl px-8 py-6 flex items-start gap-4
                                shadow-lg shadow-[#25baff]/10
                                transition-all duration-500
                                hover:bg-[#25baff]
                                hover:border-[#25baff]
                                hover:shadow-2xl hover:shadow-[#25baff]/40
                                hover:-translate-y-2"
                                >
                                    <FaCheckCircle
                                        className="text-[#25baff] text-2xl mt-1
                                  group-hover:text-white transition-colors duration-300"
                                    />

                                    <p
                                        className="text-[#020202] text-lg leading-relaxed
                                group-hover:text-white transition-colors duration-300"
                                    >
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                What is
                                <span className="text-[#25baff]"> Small Business SEO?</span>
                            </h2>
                            <div className="w-20 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid md:grid-cols-2 gap-10 items-center">

                            {/* Left Image */}
                            <div>
                                <img
                                    // src={SeoImage}
                                    alt="Small Business SEO"
                                    className="rounded-lg shadow-lg w-full"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="text-[#020202]">

                                <p className="mb-6">
                                    Small Business SEO is the process of improving your website’s
                                    visibility on search engines to attract more customers and grow your brand online.
                                </p>

                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Rank higher in local search results</li>
                                    <li>Drive organic traffic to your website</li>
                                    <li>Increase leads and conversions</li>
                                    <li>Boost brand visibility online</li>
                                    <li>Turn visitors into paying customers</li>
                                </ul>

                                <h4 className="font-semibold text-[#25baff] mb-3">
                                    How do we do it?
                                </h4>

                                <ul className="list-disc pl-6 space-y-2">
                                    <li>In-depth keyword research</li>
                                    <li>On-page SEO optimization</li>
                                    <li>Technical SEO improvements</li>
                                    <li>Website UI & UX enhancements</li>
                                    <li>Quality backlink building</li>
                                </ul>

                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-12">
                            <button className="bg-[#a8d97c] text-[#020202] font-semibold px-8 py-3 rounded-md hover:bg-[#25baff] hover:text-white transition duration-300">
                                Check Out Our Affordable SEO Plans
                            </button>
                        </div>

                    </div>
                </section>

                <section className="bg-gray-50 py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                How Small Business SEO Services
                                <span className="text-[#25baff]"> Helps You Grow Online</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                            <p className="mt-6 text-gray-600">
                                Our SEO strategies are designed to increase your online visibility,
                                attract the right audience, and convert visitors into loyal customers.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]"
                            >
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Higher Search Rankings
                                </h3>
                                <p className="text-gray-600">
                                    We optimize your website to rank higher on Google and other search engines,
                                    helping your business get discovered by potential customers searching for your services.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Targeted Website Traffic
                                </h3>
                                <p className="text-gray-600">
                                    By focusing on high-intent keywords and local SEO strategies,
                                    we bring relevant visitors to your website who are more likely to convert.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Better User Experience
                                </h3>
                                <p className="text-gray-600">
                                    We improve website speed, structure, and mobile responsiveness
                                    to ensure users enjoy a smooth browsing experience that increases engagement.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Strong Brand Credibility
                                </h3>
                                <p className="text-gray-600">
                                    Ranking higher in search results builds trust and authority,
                                    making your brand more reliable in the eyes of potential customers.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    Increased Local Visibility
                                </h3>
                                <p className="text-gray-600">
                                    Our local SEO techniques help your business appear in nearby searches,
                                    driving more local inquiries and foot traffic.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <h3 className="text-xl font-semibold text-[#020202] mb-4">
                                    More Conversions & Revenue
                                </h3>
                                <p className="text-gray-600">
                                    With optimized content and strategic SEO planning,
                                    we help turn website visitors into paying customers, boosting your revenue.
                                </p>
                            </div>

                        </div>
                    </div >
                </section >


                {/* Why Hire SEO Section */}
                <section className="bg-white py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                Why Should You Hire a
                                <span className="text-[#25baff]"> Small Business SEO Company?</span>
                            </h2>
                            <div className="w-24 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Left Image */}
                            <div>
                                <img
                                    src={Banner}
                                    alt="SEO Company"
                                    className="rounded-xl shadow-lg w-full"
                                />
                            </div>

                            {/* Right Accordion */}
                            <div>
                                <p className="text-gray-600 mb-6">
                                    Here’s why working with a professional SEO company can make a big difference:
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
                                                <p className="text-gray-600">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-gray-50 py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                6 Reasons to Choose Us As
                                <span className="text-[#25baff]"> Your Small Business SEO Agency</span>
                            </h2>
                            <div className="w-30 h-1 bg-[#a8d97c] mx-auto mt-4 rounded-full"></div>
                            <p className="mt-6 text-gray-600">
                                Choosing the right small business SEO services is critical for your business growth. As one of the best SEO companies for small businesses, we are proud to be the first choice of hundreds of small & medium size businesses. Discover why many businesses choose us for SEO success.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]"
                            >
                                <div className="flex justify-center items-center mb-4">
                                    <GiNuclearPlant className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Affordable Plans
                                </h3>
                                <p className="text-gray-600">
                                    Our affordable small business SEO services enable you to improve your online visibility within your budget. We aim to help you expand your business through quality traffic and leads without unnecessary cost. Our small business SEO services are fully customized for your ease.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <PiStrategyFill className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Customized SEO Strategy
                                </h3>
                                <p className="text-gray-600">
                                    We understand that your business needs differ from big brands. That’s why we offer customized small business SEO services. We don’t use generic approaches to grow your online presence. Instead, we tailor plan your SEO marketing campaign based on your goals and target audience.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <TbCertificate className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Google Certified Partner
                                </h3>
                                <p className="text-gray-600">
                                    Choose a Google Partner-certified agency like ours for reliable SEO services for small businesses. This certification shows our competence and track record of delivering results. As a Google premier partner, we specialize in search, mobile, video, display, and shopping advertising, offering complete solutions for your digital advertising needs.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <FaIndustry className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Multi-Industry Expertise
                                </h3>
                                <p className="text-gray-600">
                                    Our diverse industry background enables us to bring various skills and experience to every SMB project we take on. With small business SEO services experts working with thousands of businesses like yours across all niches, you can count on us to serve your unique needs with the best SEO services for small business.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <TbSeo className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    One-Stop SEO Solutions
                                </h3>
                                <p className="text-gray-600">
                                    Our full-service SEO Solutions cover everything from search engine optimization to social media management and content writing to development services; we help you achieve the SEO results you need to grow your business.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border-1 border-transparent hover:-translate-y-3 hover:shadow-[0_20px_20px_rgba(37,186,255,0.35)] hover:border-[#25baff]">
                                <div className="flex justify-center items-center mb-4">
                                    <PiCubeTransparentLight className="text-4xl text-[#25baff]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#a8d94c] mb-4 text-center">
                                    Transparent Reporting
                                </h3>
                                <p className="text-gray-600">
                                    As one of the best SEO company for small businesses, transparent communication is the utmost priority. Your dedicated account managers keep you in the loop every step of the way so you know exactly what we’re doing and where we’re headed.
                                </p>
                            </div>

                        </div>
                    </div >
                </section >


            </div >
        </>
    )
}

export default SmallBusinessSeo;
