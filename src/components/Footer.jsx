import React from "react";
import logo from "../assets/logo2.png";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                {/* BRAND / LOGO */}
                <div>
                    <div className="bg-white inline-block">
                        <img
                            src={logo}
                            alt="World WebLogic"
                            className="h-54 w-full mt-[-40px] "
                        />
                    </div>
                    <p className="text-sm leading-relaxed mt-[-40px]">
                        World WebLogic delivers end-to-end digital solutions including Web
                        Development, Mobile Apps, SEO, PPC, SMO, and ORM.
                    </p>
                </div>

                {/* IMPORTANT LINKS */}
                <div>
                    <h4 className="text-lg font-semibold text-[#020202] mb-4">
                        Important Links
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-[#25baff] cursor-pointer transition">About Us</li>
                        <li className="hover:text-[#25baff] cursor-pointer transition">Testimonials</li>
                        <li className="hover:text-[#25baff] cursor-pointer transition">Contact Us</li>
                        <li className="hover:text-[#25baff] cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-[#25baff] cursor-pointer transition">Terms & Conditions</li>
                        <li className="hover:text-[#25baff] cursor-pointer transition">Refund Policy</li>
                        <li className="hover:text-[#25baff] cursor-pointer transition">Legal Disclaimer</li>
                    </ul>
                </div>

                {/* OFFICIAL INFO */}
                <div>
                    <h4 className="text-lg font-semibold text-[#020202] mb-4">
                        Official Info
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li>B-108, 1st Floor, Sector 63, Noida – 201301</li>
                        <li>+91 1204545733</li>
                        <li>+91 85058 37801</li>
                        <li>+1 (310) 807-2867</li>
                        <li className="pt-3">
                            <strong className="text-[#a8d97c]">Open Hours:</strong><br />
                            Mon–Fri: 10 AM–7 PM<br />
                            Sat–Sun: Closed
                        </li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h4 className="text-lg font-semibold text-[#020202] mb-4">
                        Newsletter
                    </h4>
                    <p className="text-sm mb-4">
                        Subscribe to receive the latest updates and offers.
                    </p>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full px-4 py-3 rounded-lg bg-white
                        text-[#020202] border border-gray-300
                        focus:outline-none focus:border-[#25baff]"
                    />
                    <button
                        className="mt-3 w-full bg-[#25baff] hover:bg-[#a8d97c]
                        hover:text-[#020202] text-white py-3 rounded-lg font-semibold
                        transition-all duration-300"
                    >
                        Subscribe
                    </button>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} World WebLogic. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
