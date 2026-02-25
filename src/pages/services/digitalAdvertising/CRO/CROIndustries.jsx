import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Img1 from "../../../../assets/services/CROIndustries/img1.avif";
import Img2 from "../../../../assets/services/CROIndustries/img2.avif";
import Img3 from "../../../../assets/services/CROIndustries/img3.avif";
import Img4 from "../../../../assets/services/CROIndustries/img4.avif";
import Img5 from "../../../../assets/services/CROIndustries/img5.avif";
import Img6 from "../../../../assets/services/CROIndustries/img6.avif";
import Img7 from "../../../../assets/services/CROIndustries/img7.avif";
import Img8 from "../../../../assets/services/CROIndustries/img8.jpg";

gsap.registerPlugin(ScrollTrigger);

const CROIndustries = () => {

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
                    duration: 1.9,
                    ease: "power4.out",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 25%",
                    }
                }
            );

        });

    }, []);


    const industries = [
        {
            title: "E-commerce",
            image: Img1,
            size: "col-span-2 row-span-2",
            from: { x: -200, y: -100 }
        },
        {
            title: "Healthcare",
            image: Img2,
            size: "col-span-2 row-span-1",
            from: { x: 0, y: -200 }
        },
        {
            title: "Finance",
            image: Img3,
            size: "col-span-2 row-span-1",
            from: { x: 200, y: -100 }
        },
        {
            title: "Automobiles",
            image: Img4,
            size: "col-span-2 row-span-2",
            from: { x: 300, y: 0 }
        },
        {
            title: "Telecommunication",
            image: Img5,
            size: "col-span-2 row-span-1",
            from: { x: -300, y: 0 }
        },
        {
            title: "Technology",
            image: Img6,
            size: "col-span-2 row-span-2",
            from: { x: -200, y: 200 }
        },
        {
            title: "Interior Design",
            image: Img7,
            size: "col-span-2 row-span-1",
            from: { x: 100, y: 200 }
        },
        {
            title: "Insurance",
            image: Img8,
            size: "col-span-2 row-span-1",
            from: { x: 300, y: 200 }
        },
        {
            title: "Event Management",
            image: Img1, // replace with your actual event image
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
                    Industries That Benefit From
                    <span className="text-[#25baff]"> CRO Optimization</span>
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    CRO helps businesses across industries increase conversions, improve engagement, and maximize revenue potential.
                </p>

            </div>



            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 auto-rows-[160px] gap-6">

                {industries.map((item, index) => (

                    <div
                        key={index}
                        ref={addCardRef}
                        className={`
                group relative overflow-hidden rounded-2xl cursor-pointer
                ${item.size}
            `}
                    >

                        {/* Image */}
                        <img
                            src={item.image}
                            className="
                    w-full h-full object-cover
                    grayscale brightness-75
                    transition duration-700 ease-out
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
                    text-white font-bold text-lg md:text-xl tracking-wide
                    transition duration-500
                    group-hover:scale-110
                    group-hover:text-[#25baff]
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

export default CROIndustries;