
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    {/* Text Logo */}
                    <div className="leading-tight">
                        <h1 className="text-3xl font-extrabold tracking-wide">
                            <span className="text-blue-600">WORLD</span>
                            <span className="text-orange-500 ml-1">WEBLOGIC</span>
                        </h1>
                        <p className="text-xs ml-22 text-orange-400 tracking-wider">
                            give digital wings to your brands
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <a
                            className="text-gray-300 hover:text-orange-400 transition"
                            href="#"
                        >
                            Home
                        </a>
                        {/* ABOUT DROPDOWN */}
                        <div className="relative group">


                            {/* Navigation */}
                            <nav className="hidden md:flex space-x-6">

                                <span className="cursor-pointer text-gray-300 hover:text-orange-400 transition">
                                    About
                                </span>
                            </nav>
                            {/* DROPDOWN */}
                            <div className="absolute left-0 top-full mt-3 w-48 rounded-xl bg-slate-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <NavLink
                                    to="/about/who-we-are"
                                    className="block px-5 py-3 text-gray-300 hover:text-orange-400 hover:bg-slate-800 transition"
                                >
                                    Who We Are
                                </NavLink>

                                <NavLink
                                    to="/about/why-choose-us"
                                    className="block px-5 py-3 text-gray-300 hover:text-orange-400 hover:bg-slate-800 transition"
                                >
                                    Why Choose Us
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className="text-gray-300 hover:text-orange-400 transition">Contact</NavLink>
                    </nav>

                    {/* Button */}
                    <button className="px-4 py-2 bg-orange-500 text-black rounded-lg font-medium hover:bg-orange-400 transition">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
