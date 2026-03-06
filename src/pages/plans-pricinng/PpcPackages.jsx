import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";
import { Link } from "react-router-dom";

const PpcPackages = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* ===== HERO BANNER ===== */}
      <section
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/80" />
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            PPC Services Packages
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 font-light">
            Home → Services → PPC Services Packages
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0b3253]">
              Our PPC Plans
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional campaign management • Transparent reporting • No long-term lock-in
            </p>
          </div>

          {/* ===== PRICING CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
            {/* BASIC */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">BASIC</h3>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-[#52CC55] mx-1">300</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
                <p className="mt-3 text-sm text-gray-500">+ $200 one-time setup fee</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100 text-center text-base">
                <div className="space-y-4">
                  <p>Advertising Budget – up to $1,000/mo</p>
                  <p>Full Optimizations – 1× / month</p>
                  <p>Ad Groups – Up to 5</p>
                </div>
              </div>

              <div className="px-8 pb-10">
                <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg border-2 border-[#25baff] text-[#25baff] hover:cursor-pointer hover:bg-[#25baff] hover:text-white transition-all duration-300">
                  Start Today
                </button>
              </div>
            </div>

            {/* SILVER */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">SILVER</h3>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-[#555555] mx-1">400</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
                <p className="mt-3 text-sm text-gray-500">+ $350 one-time setup fee</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100 text-center text-base">
                <div className="space-y-4">
                  <p>Advertising Budget – up to $2,000/mo</p>
                  <p>Full Optimizations – 2× / month</p>
                  <p>Ad Groups – Up to 10</p>
                </div>
              </div>

              <div className="px-8 pb-10">
                <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg border-2 border-[#25baff] text-[#25baff] hover:cursor-pointer hover:bg-[#25baff] hover:text-white transition-all duration-300">
                  Start Today
                </button>
              </div>
            </div>

            {/* GOLD – Popular */}
            <div className="relative rounded-2xl border-2 border-[#25baff] bg-white shadow-2xl scale-[1.04] z-10 hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <div className="relative bg-[#25baff] py-7 text-center">
                <h3 className="text-3xl font-bold text-white">GOLD</h3>
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                  <div className="absolute top-5 right-[-38px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-44 text-center shadow-md">
                    MOST POPULAR
                  </div>
                </div>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-[#FFC107] mx-1">600</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
                <p className="mt-3 text-sm text-gray-500">+ $500 one-time setup fee</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100 text-center text-base">
                <div className="space-y-4">
                  <p>Advertising Budget – up to $3,000/mo</p>
                  <p>Full Optimizations – 3× / month</p>
                  <p>Ad Groups – Up to 20</p>
                </div>
              </div>

              <div className="px-8 pb-10">
                <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg bg-[#25baff] text-white hover:bg-[#1a9fe0] hover:cursor-pointer shadow-lg shadow-[#25baff]/30 transition-all duration-300">
                  Start Today
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">PREMIUM</h3>
              </div>

              <div className="py-10 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-[#607AFE] mx-1">800</span>
                </div>
                <p className="mt-2 text-gray-600 font-medium">per month</p>
                <p className="mt-3 text-sm text-gray-500">+ custom setup fee</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100 text-center text-base">
                <div className="space-y-4">
                  <p>Advertising Budget – $3,000+/mo</p>
                  <p>Full Optimizations – 5× / month</p>
                  <p>Ad Groups – Up to 40</p>
                </div>
              </div>

              <div className="px-8 pb-10">
                <button className="w-full py-4 px-8 rounded-xl font-semibold text-lg border-2 border-[#25baff] text-[#25baff] hover:cursor-pointer hover:bg-[#25baff] hover:text-white transition-all duration-300">
                  Start Today
                </button>
              </div>
            </div>
          </div>

          {/* ===== DETAILED FEATURE COMPARISON ===== */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center text-[#0b3253] mb-12">
              Detailed Feature Comparison
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-12 text-sm">
              {[
                // BASIC
                {
                  title: "BASIC",
                  color: "#52CC55",
                  features: [
                    ["A/B Testing", true],
                    ["Keywords", "50"],
                    ["Negative Keywords", true],
                    ["Conversion Tracking", true],
                    ["Monthly Reporting", true],
                    ["No Long-term Contracts", true],
                    ["Google Ads", true],
                    ["Yahoo Ads", false],
                    ["Microsoft (Bing) Ads", false],
                    ["Facebook Ads", false],
                    ["Mobile-specific Ads", false],
                    ["Call Extensions", true],
                    ["Sitelink Extensions", true],
                    ["Remarketing / Retargeting", false],
                    ["Monthly Strategy Calls", false],
                    ["Display / Image Ads", false],
                  ],
                },
                // SILVER
                {
                  title: "SILVER",
                  color: "#555555",
                  features: [
                    ["A/B Testing", true],
                    ["Keywords", "100"],
                    ["Negative Keywords", true],
                    ["Conversion Tracking", true],
                    ["Monthly Reporting", true],
                    ["No Long-term Contracts", true],
                    ["Google Ads", true],
                    ["Yahoo Ads", false],
                    ["Microsoft (Bing) Ads", false],
                    ["Facebook Ads", false],
                    ["Mobile-specific Ads", false],
                    ["Call Extensions", true],
                    ["Sitelink Extensions", true],
                    ["Remarketing / Retargeting", true],
                    ["Monthly Strategy Calls", true],
                    ["Display / Image Ads", false],
                  ],
                },
                // GOLD
                {
                  title: "GOLD",
                  color: "#FFC107",
                  features: [
                    ["A/B Testing", true],
                    ["Keywords", "200"],
                    ["Negative Keywords", true],
                    ["Conversion Tracking", true],
                    ["Monthly Reporting", true],
                    ["No Long-term Contracts", true],
                    ["Google Ads", true],
                    ["Yahoo Ads", true],
                    ["Microsoft (Bing) Ads", true],
                    ["Facebook Ads", false],
                    ["Mobile-specific Ads", false],
                    ["Call Extensions", true],
                    ["Sitelink Extensions", true],
                    ["Remarketing / Retargeting", true],
                    ["Monthly Strategy Calls", true],
                    ["Display / Image Ads", false],
                  ],
                },
                // PREMIUM
                {
                  title: "PREMIUM",
                  color: "#607AFE",
                  features: [
                    ["A/B Testing", true],
                    ["Keywords", "500"],
                    ["Negative Keywords", true],
                    ["Conversion Tracking", true],
                    ["Monthly Reporting", true],
                    ["No Long-term Contracts", true],
                    ["Google Ads", true],
                    ["Yahoo Ads", true],
                    ["Microsoft (Bing) Ads", true],
                    ["Facebook Ads", true],
                    ["Mobile-specific Ads", true],
                    ["Call Extensions", true],
                    ["Sitelink Extensions", true],
                    ["Remarketing / Retargeting", true],
                    ["Monthly Strategy Calls", true],
                    ["Display / Image Ads", false],
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border ${plan.title === "GOLD" ? "border-[#25baff] shadow-xl" : "border-gray-200 shadow-lg"
                    } bg-white p-8`}
                >
                  <h3
                    className="text-2xl font-bold mb-8 text-center"
                    style={{ color: plan.color }}
                  >
                    {plan.title}
                  </h3>

                  <div className="space-y-3">
                    {plan.features.map(([label, value], i) => (
                      <div key={i} className="flex items-center gap-3 py-1.5">
                        {typeof value === "boolean" ? (
                          value ? (
                            <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                          ) : (
                            <HiMiniXMark className="text-gray-400 text-xl flex-shrink-0" />
                          )
                        ) : (
                          <span className="w-5" />
                        )}
                        <span className={typeof value === "string" ? "font-medium" : ""}>
                          {typeof value === "string" ? `${label}: ${value}` : label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-10 w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.title === "GOLD"
                      ? "bg-[#25baff] hover:cursor-pointer text-white hover:bg-[#1a9fe0] shadow-lg shadow-[#25baff]/30"
                      : "border-2 border-[#25baff] text-[#25baff] hover:bg-[#25baff] hover:text-white"
                      }`}
                  >
                    Start Today
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center mt-20">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Not sure which PPC package is right for your business goals?
            </p>
            <Link
              to="/contact"
            >
              <button className="bg-[#0b3253] hover:cursor-pointer hover:bg-[#08213a] text-white px-12 py-5 rounded-xl text-lg font-semibold transition shadow-lg">
                Book Free PPC Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PpcPackages;