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
    <div className="w-full bg-gradient-to-br from-[#f5fbff] via-white to-[#eef7ff]">
      {/* ================= CONTACT FORM ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-tight">
            <span className="text-black">Let’s </span>
            <span className="text-[#25baff]">Connect</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Have a project in mind? We’d love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form
          className="grid md:grid-cols-2 gap-6 
  bg-white p-10 rounded-3xl 
  border border-[#25baff]/20
  shadow-[0_10px_40px_rgba(37,186,255,0.4)]
  hover:shadow-[0_15px_50px_rgba(37,186,255,0.5)]
  transition-all duration-300"
        >
          {["Full Name*", "Email Address*", "Phone Number*", "Website"].map(
            (placeholder, i) => (
              <div key={i} className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#25baff] focus:border-transparent transition"
                />
                <label
                  className="absolute left-4 top-4 text-gray-400 text-sm transition-all
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-400
                  peer-focus:-top-2
                  peer-focus:text-sm
                  peer-focus:text-[#25baff]
                  bg-white px-1"
                >
                  {placeholder}
                </label>
              </div>
            ),
          )}

          <div className="relative md:col-span-2">
            <textarea
              rows="4"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#25baff] focus:border-transparent transition"
            ></textarea>
            <label
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:-top-2
              peer-focus:text-sm
              peer-focus:text-[#25baff]
              bg-white px-1"
            >
              Write Message*
            </label>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#25baff] hover:bg-[#1aa7e6] text-white px-10 py-3 rounded-full font-semibold tracking-wide shadow-md hover:shadow-xl transition duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </section>

      {/* =================MAP SECTION ================= */}
      <section className="relative w-[85%] mx-auto mb-24">
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-2xl overflow-hidden shadow-xl">
          {/* Smaller Map */}
          <div className="h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4679426712655!2d77.37659797429282!3d28.615734284845466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d9b356b8ed%3A0x49adf36c8f202317!2sWorld%20WebLogic!5e0!3m2!1sen!2sin!4v1770200835800!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Google Map"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Image */}
          <div className="h-[500px]w-full relative group">
            <img
              src={image}
              alt="Office"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Info Card */}
        <div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
  bg-[#0b3253] text-white 
  p-6 rounded-2xl 
  shadow-2xl 
  w-[85%] md:w-[330px]
  backdrop-blur-sm
  border border-white/10"
        >
          <h2 className="text-xl font-semibold mb-5 border-b border-white/20 pb-2">
            Head Office
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <FaLocationDot className="text-[#25baff] text-lg mt-1" />
              <a
                href="https://www.google.com/maps?q=B+108+Sector+63+Noida+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25baff] transition leading-relaxed"
              >
                B 108, Sector 63,
                <br />
                Noida – 201301
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#25baff] text-lg mt-1" />
              <div>
                <a
                  href="tel:+911204545733"
                  className="hover:text-[#25baff] block transition"
                >
                  +91 120 454 5733
                </a>
                <a
                  href="tel:+918505837801"
                  className="hover:text-[#25baff] block transition"
                >
                  +91 85058 37801
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#25baff] text-lg mt-1" />
              <a
                href="mailto:info@worldweblogic.com"
                className="hover:text-[#25baff] transition"
              >
                info@worldweblogic.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 mt-6 text-lg">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25baff] transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
