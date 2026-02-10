import { HiOutlineMail } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi2";

const TopInfoBar = () => {
  return (
    <div className="w-full bg-[#020202] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-2 gap-3">

        {/* LEFT INFO */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
            <HiOutlineMail className="text-[#25baff] text-md" />
            <a href="mailto: info@worldweblogic.com">
              <span className="hover:text-[#a8d97c] transition">
                info@worldweblogic.com
              </span>
            </a>
          </div>

          <div className="hidden sm:block w-px h-4 bg-white/30" />

          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
            <BiTimeFive className="text-[#25baff] text-md" />
            <span className="hover:text-[#a8d97c] transition">
              Mon – Fri: 10:00 AM – 07:00 PM
            </span>
          </div>
        </div>

        {/* RIGHT CTA */}
        <button
          className="
            flex items-center gap-2
            bg-[#25baff] text-white
            px-4 py-2 text-xs sm:text-sm font-semibold
            rounded-md
            transition-all duration-300
            hover:bg-[#a8d97c] hover:text-[#020202]
            hover:cursor-pointer
          "
        >
          Request a Quote
          <HiArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default TopInfoBar;
