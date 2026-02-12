import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";

const SEO_Starter_Pack = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* ================= HERO ================== */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            SEO Starter Pack
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Home - Services - SEO Service Packages
          </p>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0b3253] mb-16 text-center">
            Our SEO Starter Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-14">
            {/* ================= LEFT CARD ================= */}
            <div>
              <div className="border border-[#25baff] rounded-xl sticky top-10">
                <h2 className="font-bold text-2xl text-black mt-4 text-center">
                  STARTER
                </h2>

                <div className="bg-gray-50 mt-5 px-10">
                  <div className="p-5 text-center">
                    <span className="text-lg font-bold text-[#52CC55] pr-1 align-top">
                      $
                    </span>
                    <span className="text-6xl font-bold text-[#52CC55]">
                      250
                    </span>
                    <p>Monthly</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 py-4">
                    <FaCheck />
                    <span>No. of Keywords – 15</span>
                  </div>
                  <hr className="border-gray-300 w-3/4 mx-auto" />

                  <div className="flex items-center justify-center gap-3 py-4">
                    <FaCheck />
                    <span>Backlinks (per month) – 150</span>
                  </div>
                  <hr className="border-gray-300 w-3/4 mx-auto" />

                  <div className="flex items-center justify-center gap-3 py-4">
                    <FaCheck />
                    <span>Target Pages Optimized – Up to 5</span>
                  </div>
                  <hr className="border-gray-300 w-3/4 mx-auto" />

                  <div className="flex items-center justify-center gap-3 py-4">
                    <HiMiniXMark />
                    <span>GBP (GMB)</span>
                  </div>

                  <hr className="border-gray-300 w-3/4 mx-auto" />

                  <div className="flex items-center justify-center gap-3 py-4">
                    <HiMiniXMark />
                    <span>Geotagging</span>
                  </div>
                </div>

                <div className="bg-gray-50 mt-5 rounded-b-xl text-center">
                  <button className="text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl px-8 hover:bg-[#25baff] hover:text-white cursor-pointer">
                    Start Today
                  </button>
                </div>
              </div>
            </div>

            {/* ================= RIGHT CONTENT (ALL CONTENT PRESERVED) ================= */}
            <div className="md:col-span-2 text-left space-y-16 ml-10">
              {/* FIRST HAND SEO ANALYSIS */}
              <div>
                <p className="text-2xl font-bold">FIRST HAND SEO ANALYSIS</p>

                {[
                  ["Pre-Optimization Website Analysis", false],
                  ["Competitor Analysis", false],
                  ["Keyword Research & Analysis", true],
                  ["Baseline Ranking Check", true],
                  ["Duplicate Content Check", false],
                  ["Google Penalty Check", false],
                  ["Backlink Analysis (if required)", false],
                ].map(([text, ok], i) => (
                  <div key={i} className="flex items-center gap-2 py-2">
                    {ok ? <FaCheck /> : <HiMiniXMark />}
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* ON PAGE OPTIMIZATION */}
              <div>
                <p className="text-2xl font-bold">
                  ON-PAGE OPTIMIZATION ACTIVITIES
                </p>

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
                ].map(([text, ok], i) => (
                  <div key={i} className="flex items-center gap-2 py-2">
                    {ok ? <FaCheck /> : <HiMiniXMark />}
                    <span>{text}</span>
                  </div>
                ))}

                <div className="py-2">
                  <p>1 - On Site Blog Posting – Applicable from 1st month</p>
                </div>
              </div>

              {/* OFF PAGE OPTIMIZATION */}
              <div>
                <p className="text-2xl font-bold">
                  OFF-PAGE OPTIMIZATION ACTIVITIES
                </p>

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
                ].map(([text, ok], i) => (
                  <div key={i} className="flex items-center gap-2 py-2">
                    {ok ? <FaCheck /> : <HiMiniXMark />}
                    <span>{text}</span>
                  </div>
                ))}

                {[
                  "1 - Blog Writing",
                  "1 - Blog Links",
                  "3 - Blog Social Bookmarking Links",
                  "1 - Article Writing",
                  "1 - Article Submissions",
                  "2 - Article Marketing",
                  "1 - Image sharing",
                  "8 - Social Bookmarking Links",
                  "2 - Micro Blogging",
                  "3 - Classified Submissions",
                  "1 - Location optimization",
                  "1 - Local Business Listings",
                ].map((text, i) => (
                  <div key={i} className="py-2">
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* SMO ACTIVITIES */}
              <div>
                <p className="text-2xl font-bold">SMO ACTIVITIES</p>

                {[
                  "FACEBOOK",
                  "INSTAGRAM",
                  "TWITTER",
                  "PINTEREST",
                  "LINKEDIN",
                ].map((platform, i) => (
                  <p key={i} className="text-xl font-semibold mt-6">
                    {platform}
                  </p>
                ))}

                {[
                  "Facebook Profile Creation",
                  "Facebook Fan Page Creation",
                  "Facebook Posting & Sharing",
                  "Instagram Profile Creation",
                  "Instagram Posting & Sharing",
                  "Twitter Profile Creation",
                  "Twitter Post",
                  "Account Creation/Management",
                  "Updating of pin boards",
                  "Pins (If Client Provides Images)",
                  "Linkedin Profile Creation",
                  "Linkedin Posting & Sharing",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 py-2">
                    <HiMiniXMark />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* REPORTS */}
              <div>
                <p className="text-2xl font-bold">REPORTS</p>

                {[
                  "Monthly Website Analytics Report",
                  "Monthly Keywords Ranking Report",
                  "Monthly Off Page Submission Report",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 py-2">
                    <FaCheck />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* CUSTOMER SUPPORT */}
              <div>
                <p className="text-2xl font-bold">CUSTOMER SUPPORT</p>

                {["Email", "Phone", "Chat"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 py-2">
                    <FaCheck />
                    <span>{text}</span>
                  </div>
                ))}

                <button className="mt-10 px-10 py-3 border border-[#25baff] rounded-2xl hover:bg-[#25baff] hover:text-white transition cursor-pointer">
                  Start Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO_Starter_Pack;
