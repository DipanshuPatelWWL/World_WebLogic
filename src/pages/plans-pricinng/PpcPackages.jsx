import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";

const PpcPackages = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[55vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            PPC Services Packages
          </h1>
          <p className="mt-4 text-sm">
            Home - Services - PPC Services Packages
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#0b3253] mb-16">
            Our PPC Plans
          </h2>

          {/* TOP PRICING CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            {/* BASIC */}
            <div className="border-2 border-[#25baff] rounded-2xl text-center">
              <h3 className="text-[#25baff] font-bold mt-6">BASIC</h3>

              <div className="bg-gray-50 my-6 py-6">
                <span className="text-6xl font-bold text-[#52CC55]">$300</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              <div className="text-sm space-y-3 px-6">
                <p>Setup Fee – $200</p>
                <p>Advertising Budget – upto $1000/month</p>
                <p>Full Optimizations – 1 / month</p>
                <p>Ad Groups – Up To 5</p>
              </div>

              <button className="mt-8 mb-8 px-8 py-2 cursor-pointer rounded-full border border-[#25baff] text-[#25baff] hover:bg-[#25baff] hover:text-white">
                Start Today
              </button>
            </div>

            {/* SILVER */}
            <div className="border-2 border-[#25baff] rounded-2xl text-center">
              <h3 className="text-[#25baff] font-bold mt-6">SILVER</h3>

              <div className="bg-gray-50 my-6 py-6">
                <span className="text-6xl font-bold text-[#555555]">$400</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              <div className="text-sm space-y-3 px-6">
                <p>Setup Fee – $350</p>
                <p>Advertising Budget – upto $2000/month</p>
                <p>Target Pages Optimized – Up to 15</p>
                <p>Ad Groups – Up To 10</p>
              </div>

              <button className="mt-8 mb-8 px-8 py-2 cursor-pointer rounded-full border border-[#25baff] text-[#25baff] hover:bg-[#25baff] hover:text-white">
                Start Today
              </button>
            </div>

            {/* GOLD */}
            <div className="relative border-2 border-[#25baff] rounded-2xl text-center shadow-xl overflow-hidden">
              {/* TOP HEADER BAR */}
              <div className="relative bg-[#25baff] py-4">
                <h3 className="text-white font-bold text-lg">GOLD</h3>

                {/* POPULAR RIBBON */}
                <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
                  <div className="absolute top-3 right-[-58px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-40 text-center">
                    POPULAR
                  </div>
                </div>
              </div>

              {/* PRICE */}
              <div className="bg-gray-50 my-6 py-6">
                <span className="text-6xl font-bold text-[#25baff]">$600</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              {/* CONTENT */}
              <div className="text-sm space-y-3 px-6">
                <p>Setup Fee – $500</p>
                <p>Advertising Budget – upto $3000/month</p>
                <p>Full Optimizations – 3 / month</p>
                <p>Ad Groups – Up To 20</p>
              </div>

              {/* BUTTONS */}
              <button className="mt-8 mb-8 px-8 py-2 rounded-full bg-[#25baff] text-white cursor-pointer">
                Start Today
              </button>
            </div>

            {/* PREMIUM */}
            <div className="border-2 border-[#25baff] rounded-2xl text-center">
              <h3 className="text-[#25baff] font-bold mt-6">PREMIUM</h3>

              <div className="bg-gray-50 my-6 py-6">
                <span className="text-6xl font-bold text-indigo-500">$800</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              <div className="text-sm space-y-3 px-6">
                <p>Ad Groups – Up To 20</p>
                <p>Advertising Budget – above $3000/month</p>
                <p>Full Optimizations – 5 / month</p>
                <p>Ad Groups – Up To 40</p>
              </div>

              <button className="mt-8 mb-8 px-8 py-2 rounded-full border cursor-pointer border-[#25baff] text-[#25baff] hover:bg-[#25baff] hover:text-white">
                Start Today
              </button>
            </div>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            {[
              /* BASIC */ [
                ["A/B Test", true],
                ["50 - Keywords", true],
                ["Negative Keywords", true],
                ["Conversion Tracking", true],
                ["Monthly Reporting", true],
                ["No Contracts", true],
                ["Google Ad Networks", true],
                ["Yahoo Ad Networks", false],
                ["Bing Ad Networks", false],
                ["FB Ad Networks", false],
                ["Mobile Ads", false],
                ["Call Extensions", true],
                ["Sitelink Extensions", true],
                ["Remarketing", false],
                ["Monthly Conference Calls", false],
                ["Display/Image Ads", false],
              ],
              /* SILVER */ [
                ["A/B Test", true],
                ["100 - Keywords", true],
                ["Negative Keywords", true],
                ["Conversion Tracking", true],
                ["Monthly Reporting", true],
                ["No Contracts", true],
                ["Google Ad Networks", true],
                ["Yahoo Ad Networks", false],
                ["Bing Ad Networks", false],
                ["FB Ad Networks", false],
                ["Mobile Ads", false],
                ["Call Extensions", true],
                ["Sitelink Extensions", true],
                ["Remarketing", true],
                ["Monthly Conference Calls", true],
                ["Display/Image Ads", false],
              ],
              /* GOLD */ [
                ["A/B Test", true],
                ["200 - Keywords", true],
                ["Negative Keywords", true],
                ["Conversion Tracking", true],
                ["Monthly Reporting", true],
                ["No Contracts", true],
                ["Google Ad Networks", true],
                ["Yahoo Ad Networks", true],
                ["Bing Ad Networks", true],
                ["FB Ad Networks", false],
                ["Mobile Ads", false],
                ["Call Extensions", true],
                ["Sitelink Extensions", true],
                ["Remarketing", true],
                ["Monthly Conference Calls", true],
                ["Display/Image Ads", false],
              ],
              /* PREMIUM */ [
                ["A/B Test", true],
                ["500 - Keywords", true],
                ["Negative Keywords", true],
                ["Conversion Tracking", true],
                ["Monthly Reporting", true],
                ["No Contracts", true],
                ["Google Ad Networks", true],
                ["Yahoo Ad Networks", true],
                ["Bing Ad Networks", true],
                ["FB Ad Networks", true],
                ["Mobile Ads", true],
                ["Call Extensions", true],
                ["Sitelink Extensions", true],
                ["Remarketing", true],
                ["Monthly Conference Calls", true],
                ["Display/Image Ads", false],
              ],
            ].map((group, col) => (
              <div key={col}>
                {group.map(([label, ok], i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    {ok ? (
                      <FaCheck className="text-[#25baff]" />
                    ) : (
                      <HiMiniXMark className="text-[#555555]" />
                    )}
                    <span>{label}</span>
                  </div>
                ))}
                <button className="mt-6 bg-[#25baff] text-white px-6 py-2 rounded-full cursor-pointer ">
                  Start Today
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PpcPackages;
