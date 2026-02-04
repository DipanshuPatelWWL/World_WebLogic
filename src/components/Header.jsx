import { Link } from "react-router-dom";

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
                        <Link to="/" className="text-gray-300 hover:text-orange-400 transition">Home</Link>
                        <Link to="/" className="text-gray-300 hover:text-orange-400 transition">About</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition">Contact</Link>
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
