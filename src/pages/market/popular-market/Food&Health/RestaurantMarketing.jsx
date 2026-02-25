import React from "react";

export default function RestaurantMarketing() {

    const steps = [
        {
            title: "Restaurant Website SEO Optimization",
            text: "We optimize your restaurant website structure, speed, and content so search engines can easily understand and rank your business higher. This includes mobile optimization, technical SEO, and schema implementation.",
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop"
        },
        {
            title: "Local SEO & Google Maps Ranking",
            text: "We improve your Google Business Profile, local citations, and location targeting so your restaurant appears in local searches like 'restaurants near me' and Google Maps results.",
            image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1400&auto=format&fit=crop"
        },
        {
            title: "Keyword Research for Restaurant Searches",
            text: "We find high-value keywords your customers are searching such as 'best restaurant', 'family restaurant near me', or cuisine-specific searches to attract ready-to-buy customers.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop"
        },
        {
            title: "Content Marketing & Menu Optimization",
            text: "We create optimized content including menu pages, blogs, and landing pages that increase visibility, attract customers, and improve conversions.",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
        },
        {
            title: "Review & Reputation Management",
            text: "We help you generate positive customer reviews and improve your online reputation, which increases trust and improves your rankings.",
            image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1400&auto=format&fit=crop"
        },
        {
            title: "Performance Tracking & Growth Optimization",
            text: "We continuously monitor rankings, traffic, and conversions to improve your marketing performance and maximize ROI.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        }
    ];

    return (

        <div className="w-full overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-32 px-6">

                <div className="max-w-7xl mx-auto text-center">

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Restaurant Marketing
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        #1 Restaurant Marketing Agency: We Deliver Results For You.
                    </p>

                </div>

                {/* background glow */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]"></div>

            </section>


            {/* WHAT IS RESTAURANT MARKETING */}
            <section className="py-24 px-6 bg-white">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* image */}
                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop"
                            alt="Restaurant Marketing"
                            className="rounded-2xl shadow-2xl w-full"
                        />

                    </div>


                    {/* text */}
                    <div>

                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
                            What Is Restaurant Marketing?
                        </h2>

                        <p className="text-lg text-gray-600 mb-4">
                            Restaurant marketing is the process of promoting your restaurant to attract more customers, increase reservations, and grow your brand visibility online and offline.
                        </p>

                        <p className="text-lg text-gray-600 mb-4">
                            It includes SEO, social media marketing, Google Maps optimization, paid ads, reputation management, and website optimization to ensure your restaurant appears when customers search for dining options.
                        </p>

                        <p className="text-lg text-gray-600">
                            Effective restaurant marketing helps you reach local customers, increase foot traffic, boost online orders, and build long-term brand loyalty.
                        </p>

                    </div>

                </div>

            </section>



            {/* SEO STEPS SECTION */}
            <section className="py-28 px-6 bg-gray-50">

                <div className="max-w-7xl mx-auto">

                    {/* heading */}
                    <div className="text-center mb-20">

                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            How To Market My Restaurant With SEO Services?
                        </h2>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our proven SEO process helps restaurants increase visibility, attract more customers, and grow revenue consistently.
                        </p>

                    </div>



                    {/* steps */}
                    <div className="space-y-24">

                        {steps.map((step, index) => (

                            <div
                                key={index}
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* image */}
                                <div>
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="rounded-2xl shadow-xl w-full hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* text */}
                                <div>

                                    <div className="text-blue-600 font-bold mb-2 text-lg">
                                        Step {index + 1}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                        {step.title}
                                    </h3>

                                    <p className="text-lg text-gray-600">
                                        {step.text}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>



            {/* CTA SECTION */}
            <section className="py-24 px-6 bg-black text-white text-center">

                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Ready To Grow Your Restaurant?
                </h2>

                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Our restaurant marketing experts help you increase visibility, attract customers, and grow your revenue faster.
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Get Free Consultation
                </button>

            </section>

        </div>

    );

}