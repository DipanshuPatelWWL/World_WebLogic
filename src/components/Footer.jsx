import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

export default function Footer() {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) return;

        setSuccess(true);
        setEmail("");

        setTimeout(() => {
            setSuccess(false);
        }, 4000);
    };

    return (
        <footer className="relative text-white overflow-hidden pt-6">

            {/* GLASS BG */}
            <div className="absolute inset-0 bg-white/2 backdrop-blur-xl border-t border-white/10"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-6">

                {/* GRID */}
                <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-3 sm:grid-cols-2 gap-12 items-start">

                    {/* COLUMN 1 */}
                    <div className="min-w-[300px]">

                        {/* LOGO */}
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Digital WebGuider"
                                className="h-20 w-80 object-cover cursor-pointer"
                            />
                        </Link>

                        {/* NEWSLETTER */}
                        <h4 className="font-semibold mb-2">
                            Subscribe Newsletter
                        </h4>

                        <form onSubmit={handleSubscribe}>

                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                className="
w-full
px-4 py-3
mb-2
rounded-lg
bg-white/10
border border-white/20
text-white
placeholder-gray-300
focus:outline-none
focus:border-[#25baff]"
                            />

                            <button
                                type="submit"
                                className="
w-full
bg-[#25baff]
hover:bg-[#a8d97c]
hover:text-black
py-3
rounded-lg
font-semibold
transition
cursor-pointer"
                            >
                                Subscribe
                            </button>

                        </form>

                        {/* SUCCESS MESSAGE */}

                        {success && (
                            <div className="mt-3 text-sm bg-green-500/20 border border-green-400 text-green-300 p-2 rounded-lg text-center">
                                Subscribed successfully! We'll keep you updated.
                            </div>
                        )}


                        {/* SOCIAL */}
                        <div className="flex gap-3 mt-5 mb-4">

                            <SocialIcon Icon={FaInstagram} link="#" />
                            <SocialIcon Icon={FaFacebookF} link="#" />
                            <SocialIcon Icon={FaLinkedinIn} link="#" />
                            <SocialIcon Icon={FaTwitter} link="#" />
                            <SocialIcon Icon={FaYoutube} link="#" />

                        </div>

                    </div>


                    {/* IMPORTANT LINKS */}
                    <FooterColumn
                        title="Important Links"
                        links={[
                            { name: "Home", path: "/" },
                            { name: "Who We Are", path: "/about/who-we-are" },
                            { name: "Why Choose Us", path: "/about/why-choose-us" },
                            { name: "Projects", path: "/projects" },
                            { name: "Pricing", path: "/pricing/seo-packages" },
                            { name: "Contact", path: "/contact" }
                        ]}
                    />


                    {/* WEB DEVELOPMENT */}
                    <FooterColumn
                        title="Web Development"
                        links={[
                            { name: "Website Redesign", path: "/services/website-redesign" },
                            { name: "WordPress Development", path: "/services/wordpress-development" },
                            { name: "Small Business SEO", path: "/services/small-business-seo" },
                            { name: "Technical SEO", path: "/services/seo/technical-seo-services" },
                            { name: "Link Building", path: "/services/seo/link-building-services" }
                        ]}
                    />


                    {/* APP DEVELOPMENT */}
                    <FooterColumn
                        title="App Development"
                        links={[
                            { name: "Mobile App Development", path: "/services/mobile-app-development" },
                            { name: "App Store Optimization", path: "/services/seo/app-store-optimization" },
                            { name: "Voice Search Optimization", path: "/services/seo/voice-search-optimization" },
                            { name: "YouTube Optimization", path: "/services/youtube-optimization" }
                        ]}
                    />


                    {/* DIGITAL MARKETING */}
                    <FooterColumn
                        title="Digital Marketing"
                        links={[
                            { name: "Digital Marketing Strategy", path: "/services/digitalMarketing/digital-marketing-strategy" },
                            { name: "Content Marketing", path: "/services/digitalMarketing/content-marketing" },
                            { name: "Email Marketing", path: "/services/digitalMarketing/email-marketing" },
                            { name: "Reputation Management", path: "/services/digitalMarketing/reputation-management" },
                            { name: "Franchise Marketing", path: "/services/digitalMarketing/franchise-digital-marketing" },
                            { name: "Conversion Optimization", path: "/services/conversion-rate-optimization" }
                        ]}
                    />


                    {/* ADVERTISING */}
                    <FooterColumn
                        title="Advertising"
                        links={[
                            { name: "PPC Services", path: "/services/pay-per-click" },
                            { name: "Facebook Advertising", path: "/services/facebook-advertising" },
                            { name: "Instagram Advertising", path: "/services/instagram-advertising" },
                            { name: "X Marketing", path: "/services/x-marketing" },
                            { name: "LinkedIn Marketing", path: "/services/linkedin-marketing" },
                            { name: "Pinterest Marketing", path: "/services/pinterest-marketing" }
                        ]}
                    />

                </div>
            </div>


            {/* BOTTOM BAR */}
            <div className="border-t border-white/20 bg-white/10 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center text-white">
                    © {new Date().getFullYear()} Digital WebGuider. All rights reserved.
                </div>
            </div>

        </footer>
    );
}


/* FOOTER COLUMN */

function FooterColumn({ title, links }) {

    return (
        <div>

            <h4 className="
                font-semibold
                mb-4
                relative
                inline-block
                after:block
                after:w-full
                after:h-[2px]
                after:bg-[#25baff]
                after:mt-2">

                {title}

            </h4>

            <ul className="space-y-2 text-sm text-gray-200">

                {links.map((link, index) => (

                    <li key={index}>

                        <Link
                            to={link.path}
                            className="hover:text-[#25baff] cursor-pointer transition"
                        >
                            {link.name}
                        </Link>

                    </li>

                ))}

            </ul>

        </div>
    );
}



/* SOCIAL ICON */

function SocialIcon({ Icon, link }) {

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/10
            border border-white/20
            hover:bg-[#25baff]
            cursor-pointer
            transition"
        >
            <Icon size={16} />
        </a>
    );
}