import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Partner logos
import shopify from "../assets/partner/shopify.webp";
import linkedin from "../assets/partner/amazon.webp";
import godaddy from "../assets/partner/google.jpg";
import google from "../assets/partner/clutch.webp";
import hostinger from "../assets/partner/app.webp";
import aws from "../assets/partner/microsoft.webp";
import clutch from "../assets/partner/reliable.webp";
import microsoft from "../assets/partner/mobile.webp";

const partners = [
    shopify,
    linkedin,
    godaddy,
    google,
    hostinger,
    aws,
    clutch,
    microsoft,
];

const OurPartners = () => {
    return (
        <section className="py-15 relative overflow-hidden bg-gradient-to-br from-[#061826] via-black to-[#1b2d12]">
            <div className="max-w-7xl mx-auto px-2 relative z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-widest drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                    OUR PARTNERS
                </h2>

                {/* Underline */}
                <div className="flex justify-center mt-5">
                    <span className="w-110 h-[3px] bg-gradient-to-r from-sky-400 to-lime-400 rounded-full"></span>
                </div>

                {/* Slider Wrapper */}
                <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-12 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        speed={7000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={2}
                        spaceBetween={40}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {[...partners, ...partners].map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center">
                                    <div className="bg-white rounded-2xl px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img
                                            src={logo}
                                            alt="partner"
                                            className="h-16 md:h-20 object-cover
             grayscale-0
             lg:grayscale
             lg:hover:grayscale-0
             transition duration-300"
                                        />

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-lime-500/10 blur-3xl"></div>
        </section>
    );
};

export default OurPartners;
