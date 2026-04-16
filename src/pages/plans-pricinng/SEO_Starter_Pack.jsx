import { FaCheck, FaTimes } from "react-icons/fa"; // Using FaTimes instead of HiMiniXMark for consistency
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";
import { Link } from "react-router-dom";

const SEO_Starter_Pack = () => {
  const checkIcon = <FaCheck className="text-[#52CC55] text-xl flex-shrink-0" />;
  const crossIcon = <FaTimes className="text-red-500 text-xl flex-shrink-0" />;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* ================= HERO ================== */}
      <section
        className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 text-center px-5 sm:px-8 text-white max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            SEO Starter Pack
          </h1>
          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-200 font-light">
            Home → Services → SEO Service Packages
          </p>
        </div>
      </section>

      {/* ================= PRICING & FEATURES ================= */}
      <section className="py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b3253]">
              SEO Starter Plan
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect entry-level SEO package to get your website ranking and
              generating leads
            </p>
          </div>

          {/* Pricing Card - Centered & Prominent */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-xl border border-[#25baff]/30 overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0b3253] to-[#25baff] py-10 px-8 text-white text-center">
                <h3 className="text-4xl md:text-5xl font-extrabold">STARTER</h3>
                <div className="mt-6 flex items-end justify-center gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-7xl md:text-8xl font-extrabold">250</span>
                  <span className="text-2xl font-medium opacity-90">/month</span>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 text-center border-b border-gray-200">
                <Link
                  to="/payment"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold text-white bg-[#25baff] rounded-full shadow-lg hover:bg-[#1a9fe0] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Today →
                </Link>
              </div>

              {/* Core Features Highlight */}
              <div className="p-8 md:p-10 bg-gray-50">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  {[
                    { icon: checkIcon, text: "15 Keywords" },
                    { icon: checkIcon, text: "150 Backlinks / month" },
                    { icon: checkIcon, text: "Up to 5 Pages Optimized" },
                    { icon: crossIcon, text: "GBP (GMB) Optimization" },
                    { icon: crossIcon, text: "Geotagging" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm"
                    >
                      {item.icon}
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-20">
            {/* First Hand SEO Analysis */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold text-[#0b3253] mb-8 pb-4 border-b-2 border-[#25baff]/40">
                First Hand SEO Analysis
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  ["Pre-Optimization Website Analysis", false],
                  ["Competitor Analysis", false],
                  ["Keyword Research & Analysis", true],
                  ["Baseline Ranking Check", true],
                  ["Duplicate Content Check", false],
                  ["Google Penalty Check", false],
                  ["Backlink Analysis (if required)", false],
                ].map(([text, included], i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {included ? checkIcon : crossIcon}
                    <span className={included ? "font-medium" : "text-gray-500"}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Page Optimization */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold text-[#0b3253] mb-8 pb-4 border-b-2 border-[#25baff]/40">
                On-Page Optimization Activities
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["Website Canonical Check", true],
                  ["Title Tag Optimization", false],
                  ["META Tags Optimization", true],
                  ["Heading Tags Optimization", true],
                  ["Image Alt Tags Optimization", false],
                  ["Content Optimization", false],
                  ["SEO Friendly URL Setup", true],
                  ["Site Navigation Analysis", true],
                  ["404 Page Implementation", true],
                  ["Broken Links Check", true],
                  ["Website Speed Check", true],
                  ["Google Indexed Pages Check", true],
                  ["Robots.txt Creation", true],
                  ["Google XML Sitemap", false],
                  ["HTML Sitemap (If Available)", false],
                  ["Hyperlink Optimization", false],
                  ["Website Responsive Check", true],
                  ["Website Permalinks Analysis", false],
                  ["Internal Linking Optimization", false],
                  ["Google Webmaster Tools Setup", true],
                  ["Bing Webmaster Tools Setup", false],
                  ["Google Analytics Setup", false],
                  ["Structured Data Setup", false],
                  ["On Site Blog Section Creation", false],
                ].map(([text, included], i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {included ? checkIcon : crossIcon}
                    <span className={included ? "font-medium" : "text-gray-500"}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 pt-6 border-t border-gray-200 text-gray-700 font-medium">
                1 On-Site Blog Posting – Applicable from 1st month
              </p>
            </div>

            {/* Off-Page Optimization */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold text-[#0b3253] mb-8 pb-4 border-b-2 border-[#25baff]/40">
                Off-Page Optimization Activities
              </h3>
              <div className="space-y-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    ["Search Engine Submission", true],
                    ["Contextual Links", true],
                    ["Keyword used in anchor text", true],
                    ["Share Each Blog Post Across Social Media Networks", true],
                    ["Web 2.0 Profile Creation", false],
                    ["Web 2.0 Profiles Bookmarking Links", false],
                    ["Press Release (If Client Provides News)", false],
                    ["Press Release Bookmarking Links", false],
                    ["Infographics Creation/Month", false],
                    ["Infographics Post/Month", false],
                    ["Share each Infographics on Social Media Networks", false],
                    ["Google Business Page Creation", false],
                    ["Bing Local Listing Creation", false],
                    ["PPT Submissions", false],
                    ["Video Marketing (if Client provides)", true],
                    ["NAP Syndication", true],
                  ].map(([text, included], i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {included ? checkIcon : crossIcon}
                      <span className={included ? "font-medium" : "text-gray-500"}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-xl font-semibold text-[#0b3253] mb-4">
                    Monthly Deliverables
                  </h4>
                  <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      "1 Blog Writing",
                      "1 Blog Links",
                      "3 Blog Social Bookmarking Links",
                      "1 Article Writing",
                      "1 Article Submissions",
                      "2 Article Marketing",
                      "1 Image sharing",
                      "8 Social Bookmarking Links",
                      "2 Micro Blogging",
                      "3 Classified Submissions",
                      "1 Location optimization",
                      "1 Local Business Listings",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-[#25baff] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SMO Activities */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold text-[#0b3253] mb-8 pb-4 border-b-2 border-[#25baff]/40">
                SMO Activities
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {["FACEBOOK", "INSTAGRAM", "TWITTER", "PINTEREST", "LINKEDIN"].map(
                  (platform) => (
                    <div key={platform}>
                      <h4 className="text-2xl font-bold text-[#0b3253] mb-5">
                        {platform}
                      </h4>
                      <div className="space-y-3">
                        {[
                          `${platform} Profile Creation`,
                          `${platform} Fan/Page Creation`,
                          `${platform} Posting & Sharing`,
                          ...(platform === "PINTEREST"
                            ? ["Updating of pin boards", "Pins (If Client Provides Images)"]
                            : []),
                        ].map((text, i) => (
                          <div key={i} className="flex items-center gap-4 py-2">
                            {crossIcon}
                            <span className="text-gray-600">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Reports & Support */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-3xl font-bold text-[#0b3253] mb-8 pb-4 border-b-2 border-[#25baff]/40">
                  Reports
                </h3>
                <div className="space-y-4">
                  {[
                    "Monthly Website Analytics Report",
                    "Monthly Keywords Ranking Report",
                    "Monthly Off Page Submission Report",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 py-3">
                      {checkIcon}
                      <span className="font-medium text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
                <h3 className="text-3xl font-bold text-[#0b3253] mb-8 pb-4 border-b-2 border-[#25baff]/40">
                  Customer Support
                </h3>
                <div className="space-y-4 flex-grow">
                  {["Email", "Phone", "Chat"].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 py-3">
                      {checkIcon}
                      <span className="font-medium text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/payment"
                  className="mt-10 w-full py-4 text-lg font-semibold text-white bg-[#25baff] rounded-full shadow-lg hover:bg-[#1a9fe0] transition-all duration-300 flex items-center justify-center text-center"
                >
                  Start Today →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO_Starter_Pack;