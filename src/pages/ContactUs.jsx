import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import image from "../assets/building.jpg";

export default function ContactUs() {
    return (
        <div className="w-full bg-gray-100">

            {/* ================= CONTACT FORM FIRST ================= */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-10">
                    Get In Touch
                </h2>

                <form className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">

                    <input
                        type="text"
                        placeholder="Full Name*"
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <input
                        type="email"
                        placeholder="Email Address*"
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number*"
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <input
                        type="text"
                        placeholder="Website"
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        className="md:col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <textarea
                        placeholder="Write Message*"
                        rows="5"
                        className="md:col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300 cursor-pointer"
                        >
                            SEND YOUR MESSAGE
                        </button>
                    </div>
                </form>
            </section>



            {/* ================= LOCATION SECTION ================= */}
            <section className="relative w-[80%] mx-auto mb-[30px]">

                <div className="grid md:grid-cols-2 grid-cols-1">

                    {/* Google Map */}
                    <div className="h-[500px] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4679426712655!2d77.37659797429282!3d28.615734284845466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d9b356b8ed%3A0x49adf36c8f202317!2sWorld%20WebLogic!5e0!3m2!1sen!2sin!4v1770200835800!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className="w-full h-full"
                        ></iframe>
                    </div>


                    {/* Building Image */}
                    <div className="h-[500px] w-full">
                        <img
                            src={image}  // Replace with your building image
                            alt="Office"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Blue Overlay Contact Card */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-[40%] md:translate-x-0 bg-blue-900/90 backdrop-blur-md text-white p-8 rounded-xl shadow-2xl w-[90%] md:w-[420px]">

                    <h2 className="text-3xl font-bold mb-6">Head Office</h2>

                    <div className="space-y-4 text-sm">

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-lg"><FaLocationDot /></span>
                            <p>
                                B 108, 1st Floor, Office No. 2nd,<br />
                                Sector 63, Noida - 201301
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-orange-500 text-lg"><FaPhoneAlt /></span>
                            <p>
                                +91 1204545733 <br />
                                +91 85058 37801
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-orange-500 text-lg"><FaEnvelope /></span>
                            <p>info@worldweblogic.com</p>
                        </div>

                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-3 text-xl">
                        <a href="#" className="hover:text-red-500 transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-red-500 transition"><FaLinkedinIn /></a>
                    </div>

                </div>
            </section>

        </div>
    );
}
