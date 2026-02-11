import { FaLocationDot } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import image from "../assets/building.jpg";

export default function ContactUs() {
  return (
    <div className="w-full bg-gray-100">
      {/* ================= CONTACT FORM FIRST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Get In Touch</h2>

        <form className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Full Name*"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#25baff]"
          />

          <input
            type="email"
            placeholder="Email Address*"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#25baff]"
          />

          <input
            type="text"
            placeholder="Phone Number*"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#25baff]"
          />

          <input
            type="text"
            placeholder="Website"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#25baff]"
          />

          <input
            type="text"
            placeholder="Address"
            className="md:col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#25baff]"
          />

          <textarea
            placeholder="Write Message*"
            rows="5"
            className="md:col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#25baff]"
          />

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#25baff] hover:bg-[#1aa7e6] text-white px-8 py-3 rounded-md font-semibold transition duration-300 cursor-pointer"
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
              src={image}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Blue Overlay Contact Card */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-[40%] md:translate-x-0 bg-[#0b3253]/95
 backdrop-blur-md text-white p-8 rounded-xl shadow-2xl w-[90%] md:w-[420px]"
        >
          <h2 className="text-3xl font-bold mb-6">Head Office</h2>

          <div className="space-y-4 text-sm">
            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <span className="text-[#25baff] text-lg mt-1">
                <FaLocationDot />
              </span>
              <a
                href="https://www.google.com/maps?q=B+108+Sector+63+Noida+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25baff] transition leading-relaxed"
              >
                B 108, 1st Floor, Office No. 2nd,
                <br />
                Sector 63, Noida – 201301
              </a>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <span className="text-[#25baff] text-lg mt-1">
                <FaPhoneAlt />
              </span>
              <div className="leading-relaxed">
                <a
                  href="tel:+911204545733"
                  className="hover:text-[#25baff] transition block"
                >
                  +91 120 454 5733
                </a>
                <a
                  href="tel:+918505837801"
                  className="hover:text-[#25baff] transition block"
                >
                  +91 85058 37801
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <span className="text-[#25baff] text-lg mt-1">
                <FaEnvelope />
              </span>
              <a
                href="mailto:info@worldweblogic.com"
                className="hover:text-[#25baff] transition"
              >
                info@worldweblogic.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-xl">
            <a
              href="https://www.facebook.com/WorldWebLogic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25baff] hover:scale-110 transition"
              aria-label="World WebLogic Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/worldweblogic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25baff] hover:scale-110 transition"
              aria-label="World WebLogic Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/world-weblogic-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25baff] hover:scale-110 transition"
              aria-label="World WebLogic LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
