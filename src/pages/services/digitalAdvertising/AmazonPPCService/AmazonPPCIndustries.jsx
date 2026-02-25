import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../../assets/services/CROIndustries/img2.avif"
import img2 from "../../../../assets/services/amazonPPC/img2.avif"
import img3 from "../../../../assets/services/amazonPPC/img3.avif"
import img4 from "../../../../assets/services/amazonPPC/img4.avif"
import img5 from "../../../../assets/services/amazonPPC/img5.jpg"
import img6 from "../../../../assets/services/amazonPPC/img6.avif"
import img7 from "../../../../assets/services/amazonPPC/img7.avif"
import img8 from "../../../../assets/services/amazonPPC/img8.avif"
import img9 from "../../../../assets/services/amazonPPC/img9.avif"

gsap.registerPlugin(ScrollTrigger);

const AmazonPPCIndustries = () => {

    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {

        cardsRef.current.forEach((card, index) => {

            const direction = industries[index].from;

            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    x: direction.x,
                    y: direction.y,
                    scale: 0.6,
                    rotate: gsap.utils.random(-15, 15),
                    filter: "blur(10px)"
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                    duration: 1.4,
                    ease: "power4.out",
                    delay: index * 0.08,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 30%",
                    }
                }
            );

        });

    }, []);




    const industries = [

        {
            title: "Health & Personal Care",
            image: img1,
            size: "col-span-2 row-span-2",
            from: { x: -200, y: -100 }
        },

        {
            title: "Electronics & Accessories",
            image: img2,
            size: "col-span-2 row-span-1",
            from: { x: 0, y: -200 }
        },

        {
            title: "Home & Kitchen",
            image: img3,
            size: "col-span-2 row-span-1",
            from: { x: 200, y: -100 }
        },

        {
            title: "Fashion & Apparel",
            image: img4,
            size: "col-span-2 row-span-2",
            from: { x: 300, y: 0 }
        },

        {
            title: "Beauty & Cosmetics",
            image: img5,
            size: "col-span-2 row-span-1",
            from: { x: -300, y: 0 }
        },

        {
            title: "Supplements & Wellness",
            image: img6,
            size: "col-span-2 row-span-2",
            from: { x: -200, y: 200 }
        },

        {
            title: "Fitness & Sports Equipment",
            image: img7,
            size: "col-span-2 row-span-1",
            from: { x: 100, y: 200 }
        },

        {
            title: "Pet Supplies",
            image: img8,
            size: "col-span-2 row-span-1",
            from: { x: 300, y: 200 }
        },

        {
            title: "Toys & Games",
            image: img9,
            size: "col-span-2 row-span-1",
            from: { x: 0, y: 300 }
        }

    ];


    return (

        <section
            ref={sectionRef}
            className="py-28 px-6 bg-[#030712] overflow-hidden"
        >

            {/* Heading */}
            <div className="text-center mb-16">

                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Industries That Win Big with
                    <span className="text-[#25baff]"> Our Amazon PPC Agency</span>
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Our Amazon PPC strategies help brands across multiple industries increase visibility,
                    boost conversions, and scale revenue profitably.
                </p>

            </div>



            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 auto-rows-[160px] gap-6">

                {industries.map((item, index) => (

                    <div
                        key={index}
                        ref={addCardRef}
                        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.size}`}
                    >

                        {/* Image */}
                        <img
                            src={item.image}
                            className="
                                w-full h-full object-cover
                                grayscale brightness-75
                                transition duration-700
                                group-hover:grayscale-0
                                group-hover:brightness-100
                                group-hover:scale-110
                            "
                        />

                        {/* Overlay */}
                        <div className="
                            absolute inset-0
                            bg-black/40
                            group-hover:bg-black/10
                            transition duration-500
                        " />

                        {/* Title */}
                        <div className="absolute inset-0 flex items-center justify-center">

                            <h3 className="
                                text-white font-bold text-lg md:text-xl
                                transition duration-500
                                group-hover:text-[#25baff]
                                group-hover:scale-110
                            ">
                                {item.title}
                            </h3>

                        </div>

                        {/* Glow */}
                        <div className="
                            absolute inset-0 opacity-0
                            group-hover:opacity-100
                            transition duration-500
                            shadow-[inset_0_0_80px_rgba(37,186,255,0.3)]
                        " />

                    </div>

                ))}

            </div>

        </section>

    );

};

export default AmazonPPCIndustries;