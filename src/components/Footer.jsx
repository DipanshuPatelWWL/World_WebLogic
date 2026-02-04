import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0b1c3d] to-[#123a78] text-blue-100">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                {/* BRAND / LOGO */}
                <div>
                    <img
                        src={logo}
                        alt="World WebLogic"
                        className="h-14 w-auto mb-4 bg-white"
                    />
                    <p className="text-sm leading-relaxed">
                        World WebLogic delivers end-to-end digital solutions including Web
                        Development, Mobile Apps, SEO, PPC, SMO, and ORM.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-xl">
                        <a href="#" className="hover:text-orange-400 transition">🌐</a>
                        <a href="#" className="hover:text-orange-400 transition">💼</a>
                        <a href="#" className="hover:text-orange-400 transition">📸</a>
                    </div>

                    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                        Pay Now
                    </button>
                </div>

                {/* IMPORTANT LINKS */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Important Links
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
                        <li className="hover:text-orange-400 cursor-pointer">Testimonials</li>
                        <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
                        <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-orange-400 cursor-pointer">Refund Policy</li>
                        <li className="hover:text-orange-400 cursor-pointer">Legal Disclaimer</li>
                    </ul>
                </div>

                {/* OFFICIAL INFO */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Official Info
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li>B-108, 1st Floor, Sector 63, Noida – 201301</li>
                        <li>+91 1204545733</li>
                        <li>+91 85058 37801</li>
                        <li>+1 (310) 807-2867</li>
                        <li className="pt-3">
                            <strong className="text-white">Open Hours:</strong><br />
                            Mon–Fri: 10 AM–7 PM<br />
                            Sat–Sun: Closed
                        </li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Newsletter
                    </h4>
                    <p className="text-sm mb-4">
                        Subscribe to receive the latest updates and offers.
                    </p>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full px-4 py-3 rounded-lg text-gray-800"
                    />
                    <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                        Subscribe
                    </button>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
                    © {new Date().getFullYear()} World WebLogic. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
