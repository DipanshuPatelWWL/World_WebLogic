import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Step1 from "../../../../assets/services/CROSlider/img1.avif";
import Step2 from "../../../../assets/services/CROSlider/img2.avif";
import Step3 from "../../../../assets/services/CROSlider/img3.avif";
import Step4 from "../../../../assets/services/CROSlider/img4.avif";
import Step5 from "../../../../assets/services/CROSlider/img5.avif";
import Step6 from "../../../../assets/services/CROSlider/img6.avif";

const CROProcessSlider = () => {

    const steps = [
        {
            image: Step1,
            title: "Website Audit & Conversion Analysis",
            text: "We begin with a comprehensive audit of your website to evaluate its current conversion performance. Our experts analyze key metrics such as bounce rate, user flow, session duration, and conversion funnels to identify exactly where visitors drop off. Using tools like heatmaps, click tracking, and behavioral analytics, we uncover friction points, usability issues, and missed opportunities that prevent users from taking action. This deep analysis provides the foundation for a data-driven optimization strategy."
        },
        {
            image: Step2,
            title: "User Behavior & Data Research",
            text: "We dive deep into real user behavior to understand how visitors interact with your website. This includes analyzing scroll depth, click patterns, navigation paths, engagement zones, and interaction trends. We also evaluate audience intent, traffic sources, and device behavior to identify differences in user experience across platforms. These insights help us understand what motivates users, what confuses them, and what prevents conversions, allowing us to design solutions based on real data rather than assumptions."
        },
        {
            image: Step3,
            title: "Strategy & Hypothesis Creation",
            text: "Based on research insights, we develop a structured CRO strategy focused on improving conversions and user experience. We create clear hypotheses for testing, such as improving CTA placement, simplifying forms, enhancing messaging clarity, or optimizing page layouts. Each hypothesis is backed by data and designed to remove friction, improve trust, and guide users toward conversion. This strategic approach ensures every change has measurable business impact."
        },
        {
            image: Step4,
            title: "Design & UX Optimization",
            text: "Our design and UX experts optimize critical conversion elements including landing pages, calls-to-action, forms, layouts, and visual hierarchy. We improve readability, usability, and engagement by making your website more intuitive and user-friendly. Every design improvement focuses on reducing cognitive load, building trust, and guiding users naturally toward desired actions, resulting in a smoother and more effective conversion journey."
        },
        {
            image: Step5,
            title: "A/B Testing & Experimentation",
            text: "We implement controlled A/B and multivariate tests to compare different versions of pages, layouts, headlines, and CTAs. This allows us to identify which variations perform best based on real user interaction and conversion data. Our testing process removes guesswork and ensures decisions are backed by measurable results. Over time, these experiments compound into significant improvements in conversion rates and revenue."
        },
        {
            image: Step6,
            title: "Continuous Optimization & Scaling",
            text: "Conversion optimization is an ongoing process, not a one-time fix. We continuously monitor performance, analyze new user data, and refine strategies to maintain and improve results. Winning experiments are scaled across your website, while new opportunities are constantly tested. This continuous improvement cycle ensures your website evolves with user behavior, market trends, and business goals, delivering sustained growth and higher conversion performance."
        }
    ];
    return (

        <section className="py-28 px-6 bg-gradient-to-b from-[#f8fbff] to-white">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-4">
                        Our Proven CRO Process
                        <span className="text-[#25baff]"> Step-by-Step</span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A structured CRO framework designed to maximize conversions and business growth.
                    </p>

                </div>


                {/* Slider */}
                <Swiper

                    modules={[Navigation, Pagination, Autoplay, EffectFade]}

                    spaceBetween={50}
                    slidesPerView={1}

                    navigation={{
                        nextEl: ".cro-next",
                        prevEl: ".cro-prev",
                    }}

                    pagination={{
                        clickable: true,
                        el: ".cro-pagination",
                    }}

                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    loop={true}

                    speed={800}

                    className="relative"

                >

                    {steps.map((step, index) => (

                        <SwiperSlide key={index}>

                            <div className="grid md:grid-cols-2 gap-12 items-center">

                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl shadow-xl">

                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-[320px] md:h-[420px] object-cover"
                                    />

                                    <div className="absolute top-5 left-5 bg-[#25baff] text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                                        Step {index + 1}
                                    </div>

                                </div>


                                {/* Content */}
                                <div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {step.text}
                                    </p>


                                    {/* Buttons */}
                                    <div className="flex gap-4">

                                        <button className="cro-prev w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#25baff] hover:text-white transition">
                                            <FaArrowLeft />
                                        </button>

                                        <button className="cro-next w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#25baff] hover:text-white transition">
                                            <FaArrowRight />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>


                {/* Pagination */}
                <div className="cro-pagination flex justify-center mt-10"></div>

            </div>

        </section>

    );
};

export default CROProcessSlider;