import { HiOutlineMail } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi2";

const TopInfoBar = () => {
  return (
    <div className="hidden md:block w-full bg-[#020202] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-3 md:py-2 gap-4 md:gap-3">

        {/* LEFT INFO */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 text-xs sm:text-sm w-full md:w-auto">

          {/* EMAIL */}
          <a
            href="mailto:#"
            className="group flex items-center justify-center sm:justify-start gap-2 opacity-90 hover:opacity-100 transition"
          >
            <HiOutlineMail className="text-[#25baff] text-base transition group-hover:text-[#a8d97c]" />
            <span className="transition group-hover:text-[#a8d97c]">
              info@digitalwebguider.com
            </span>
          </a>

          {/* DIVIDER (Desktop Only) */}
          <div className="hidden sm:block w-px h-4 bg-white/30" />

          {/* TIME */}
          <div className="group flex items-center justify-center sm:justify-start gap-2 opacity-90 hover:opacity-100 transition cursor-default hover:text-[#a8d97c] hover:cursor-pointer">
            <BiTimeFive className="text-[#25baff] text-base transition group-hover:text-[#a8d97c]" />
            <span className="transition group-hover:text-[#a8d97c]">
              Mon – Fri: 10:00 AM – 07:00 PM
            </span>
          </div>

        </div>


        {/* RIGHT CTA */}
        <button
          className="
            flex items-center justify-center gap-2
            bg-[#25baff] text-white
            px-5 py-2.5
            text-xs sm:text-sm font-semibold
            rounded-md
            transition-all duration-300
            hover:bg-[#a8d97c] hover:text-[#020202]
            w-full sm:w-auto
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
