import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";
import { Link } from "react-router-dom";

const SEO_Packages = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/85" />
        <div className="relative z-10 text-center px-5 sm:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            SEO Service Packages
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 font-light tracking-wide">
            Home → Services → SEO Service Packages
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0b3253]">
              Our SEO Plans
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent • Results-driven • Monthly reporting • Flexible cancellation
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
            {/* BASIC */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">BASIC</h3>
              </div>

              <div className="py-9 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-7xl font-extrabold text-[#52CC55] mx-1">500</span>
                </div>
                <p className="text-gray-600 mt-2 font-medium text-lg">per month</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100">
                <div className="space-y-4 text-center text-base">
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>30 Keywords</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>300 Backlinks / month</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>Up to 10 Pages Optimized</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <HiMiniXMark className="text-red-500 text-2xl" />
                    <span>GBP (GMB)</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <HiMiniXMark className="text-red-500 text-2xl" />
                    <span>Geotagging</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link
                  to="/payment"
                  className="block text-center text-lg border border-[#25baff] mt-8 mb-8 py-4 px-8 rounded-2xl w-[90%] mx-auto hover:bg-[#25baff] hover:text-white transition duration-300 font-medium"
                >
                  START TODAY
                </Link>
              </div>
            </div>

            {/* SILVER */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">SILVER</h3>
              </div>

              <div className="py-9 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-7xl font-extrabold text-[#555555] mx-1">800</span>
                </div>
                <p className="text-gray-600 mt-2 font-medium text-lg">per month</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100">
                <div className="space-y-4 text-center text-base">
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>40 Keywords</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>400 Backlinks / month</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>Up to 15 Pages Optimized</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>GBP (GMB)</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <HiMiniXMark className="text-red-500 text-2xl" />
                    <span>Geotagging</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link
                  to="/payment"
                  className="block text-center text-lg border border-[#25baff] mt-8 mb-8 py-4 px-8 rounded-2xl w-[90%] mx-auto hover:bg-[#25baff] hover:text-white transition duration-300 font-medium"
                >
                  START TODAY
                </Link>
              </div>
            </div>

            {/* GOLD - Popular */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#25baff] bg-white shadow-2xl scale-[1.04] z-10 hover:shadow-3xl transition-all duration-300">
              <div className="py-7 text-center bg-[#25baff] relative">
                <h3 className="text-3xl font-bold text-white">GOLD</h3>
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                  <div className="absolute top-5 right-[-38px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-44 text-center shadow-md">
                    MOST POPULAR
                  </div>
                </div>
              </div>

              <div className="py-9 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-7xl font-extrabold text-[#FFC107] mx-1">1000</span>
                </div>
                <p className="text-gray-600 mt-2 font-medium text-lg">per month</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100">
                <div className="space-y-4 text-center text-base">
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>50 Keywords</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>600 Backlinks / month</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>Up to 25 Pages Optimized</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>GBP (GMB)</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>Geotagging</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link
                  to="/payment"
                  className="block text-center text-lg border border-[#25baff] mt-8 mb-8 py-4 px-8 rounded-2xl w-[90%] mx-auto bg-[#25baff] text-white hover:bg-white hover:text-black transition duration-300 font-medium"
                >
                  START TODAY
                </Link>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="py-7 text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-[#25baff]">PREMIUM</h3>
              </div>

              <div className="py-9 px-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-600">$</span>
                  <span className="text-7xl font-extrabold text-[#607AFE] mx-1">2000</span>
                </div>
                <p className="text-gray-600 mt-2 font-medium text-lg">per month</p>
              </div>

              <div className="px-6 py-8 border-t border-gray-100">
                <div className="space-y-4 text-center text-base">
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>100 Keywords</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>1000 Backlinks / month</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>Up to 40 Pages Optimized</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>GBP (GMB)</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FaCheck className="text-green-500 text-xl" />
                    <span>Geotagging</span>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-10">
                <Link
                  to="/payment"
                  className="block text-center text-lg border border-[#25baff] mt-8 mb-8 py-4 px-8 rounded-2xl w-[90%] mx-auto hover:bg-[#25baff] hover:text-white transition duration-300 font-medium"
                >
                  START TODAY
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Features - BASIC */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center text-[#0b3253] mb-12">Detailed Features</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
              {/* BASIC Detailed */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-[#25baff] mb-6 text-center">BASIC</h3>

                <div className="space-y-10">
                  <div>
                    <p className="text-xl font-bold mb-4">FIRST HAND SEO ANALYSIS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Pre-Optimization Website Analysis</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Competitor Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword Research & Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Baseline Ranking Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Duplicate Content Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Penalty Check</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Backlink Analysis (if required)</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Canonical Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Title Tag Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> META Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Heading Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Image Alt Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Content Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> SEO Friendly URL Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Site Navigation Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> 404 Page Implementation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Broken Links Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Speed Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Indexed Pages Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Robots.txt Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google XML Sitemap</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> HTML Sitemap (If Available)</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Hyperlink Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Responsive Check</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Website Permalinks Analysis</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Internal Linking Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Bing Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Analytics Setup</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Structured Data Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> On Site Blog Section Creation</div>
                      <div className="flex items-start gap-2"><p>1 - On Site Blog Posting – Applicable from 1st month</p></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Search Engine Submission</div>
                      <div className="flex items-start gap-2"><span>2 - Blog Writing</span></div>
                      <div className="flex items-start gap-2"><span>2 - Blog Links</span></div>
                      <div className="flex items-start gap-2"><span>6 - Blog Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>1 - Article Writing</span></div>
                      <div className="flex items-start gap-2"><span>1 - Article Submissions</span></div>
                      <div className="flex items-start gap-2"><span>5 - Article Marketing</span></div>
                      <div className="flex items-start gap-2"><span>2 - Image sharing</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Contextual Links</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword used in anchor text</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Share Each Blog Post Across Social Media Networks</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Web 2.0 Profile Creation</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Web 2.0 Profiles Bookmarking Links</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Press Release (If Client Provides News)</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Press Release Bookmarking Links</div>
                      <div className="flex items-start gap-2"><span>15 - Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>4 - Micro Blogging</span></div>
                      <div className="flex items-start gap-2"><span>5 - Classified Submissions</span></div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Infographics Creation/Month</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Infographics Post/Month</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Share each Infographics on Social Media Networks</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Google Business Page Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Bing Local Listing Creation</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> PPT Submissions</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Video Marketing (if Client provides)</div>
                      <div className="flex items-start gap-2"><p>1 - Location optimization</p></div>
                      <div className="flex items-start gap-2"><p>1 - Local Business Listings</p></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> NAP Syndication</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">SMO ACTIVITIES</p>
                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="font-semibold mb-2">FACEBOOK</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Facebook Profile Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Facebook Fan Page Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Facebook Posting & Sharing</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">INSTAGRAM</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Instagram Profile Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Instagram Posting & Sharing</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">TWITTER</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Twitter Profile Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Twitter Post</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">PINTEREST</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Account Creation/Management</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Updating of pin boards</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Pins (If Client Provides Images)</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">LINKEDIN</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Linkedin Profile Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Linkedin Posting & Sharing</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">REPORTS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Website Analytics Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Keywords Ranking Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Off Page Submission Report</div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">CUSTOMER SUPPORT</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Email</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Phone</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Chat</div>
                    </div>

                    <Link
                      to="/payment"
                      className="block text-center text-lg border border-[#25baff] mt-15 mb-5 py-3 px-8 rounded-2xl w-full mx-auto bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition duration-300 font-medium"
                    >
                      START TODAY
                    </Link>
                  </div>
                </div>
              </div>

              {/* SILVER Detailed */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-[#25baff] mb-6 text-center">SILVER</h3>

                <div className="space-y-10">
                  <div>
                    <p className="text-xl font-bold mb-4">FIRST HAND SEO ANALYSIS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Pre-Optimization Website Analysis</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Competitor Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword Research & Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Baseline Ranking Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Duplicate Content Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Penalty Check</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Backlink Analysis (if required)</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Canonical Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Title Tag Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> META Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Heading Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Image Alt Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Content Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> SEO Friendly URL Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Site Navigation Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> 404 Page Implementation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Broken Links Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Speed Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Indexed Pages Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Robots.txt Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google XML Sitemap</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> HTML Sitemap (If Available)</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Hyperlink Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Responsive Check</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Website Permalinks Analysis</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Internal Linking Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Bing Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Analytics Setup</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Structured Data Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> On Site Blog Section Creation</div>
                      <div className="flex items-start gap-2"><p>2 - On Site Blog Posting – Applicable from 1st month</p></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Search Engine Submission</div>
                      <div className="flex items-start gap-2"><span>2 - Blog Writing</span></div>
                      <div className="flex items-start gap-2"><span>2 - Blog Links</span></div>
                      <div className="flex items-start gap-2"><span>10 - Blog Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>2 - Article Writing</span></div>
                      <div className="flex items-start gap-2"><span>2 - Article Submissions</span></div>
                      <div className="flex items-start gap-2"><span>10 - Article Marketing</span></div>
                      <div className="flex items-start gap-2"><span>4 - Image sharing</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Contextual Links</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword used in anchor text</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Share Each Blog Post Across Social Media Networks</div>
                      <div className="flex items-start gap-2"><span>1 - Web 2.0 Profile Creation</span></div>
                      <div className="flex items-start gap-2"><span>4 - Web 2.0 Profiles Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Press Release (If Client Provides News)</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Press Release Bookmarking Links</div>
                      <div className="flex items-start gap-2"><span>24 - Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>7 - Micro Blogging</span></div>
                      <div className="flex items-start gap-2"><span>8 - Classified Submissions</span></div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Infographics Creation/Month</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Infographics Post/Month</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Share each Infographics on Social Media Networks</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Business Page Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Bing Local Listing Creation</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> PPT Submissions</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Video Marketing (if Client provides)</div>
                      <div className="flex items-start gap-2"><p>2 - Location optimization</p></div>
                      <div className="flex items-start gap-2"><p>2 - Local Business Listings</p></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> NAP Syndication</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">SMO ACTIVITIES (COMPLIMENTARY)</p>
                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="font-semibold mb-2">FACEBOOK</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Facebook Profile Creation</div>
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Facebook Fan Page Creation</div>
                          <div className="flex items-start gap-2"><span>4 - Facebook Posting & Sharing</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">INSTAGRAM</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Instagram Profile Creation</div>
                          <div className="flex items-start gap-2"><span>Instagram Posting & Sharing</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">TWITTER</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Twitter Profile Creation</div>
                          <div className="flex items-start gap-2"><span>4 - Twitter Post</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">PINTEREST</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Account Creation/Management</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Updating of pin boards</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Pins (If Client Provides Images)</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">LINKEDIN</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Linkedin Profile Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Linkedin Posting & Sharing</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">REPORTS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Website Analytics Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Keywords Ranking Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Off Page Submission Report</div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">CUSTOMER SUPPORT</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Email</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Phone</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Chat</div>
                    </div>

                    <Link
                      to="/payment"
                      className="block text-center text-lg border border-[#25baff] mt-8 mb-5 py-3 px-8 rounded-2xl w-full mx-auto bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition duration-300 font-medium"
                    >
                      START TODAY
                    </Link>
                  </div>
                </div>
              </div>

              {/* GOLD Detailed */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#25baff]">
                <h3 className="text-2xl font-bold text-[#25baff] mb-6 text-center">GOLD</h3>

                <div className="space-y-10">
                  <div>
                    <p className="text-xl font-bold mb-4">FIRST HAND SEO ANALYSIS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Pre-Optimization Website Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Competitor Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword Research & Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Baseline Ranking Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Duplicate Content Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Penalty Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Backlink Analysis (if required)</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Canonical Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Title Tag Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> META Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Heading Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Image Alt Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Content Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> SEO Friendly URL Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Site Navigation Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> 404 Page Implementation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Broken Links Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Speed Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Indexed Pages Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Robots.txt Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google XML Sitemap</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> HTML Sitemap (If Available)</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Hyperlink Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Responsive Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Permalinks Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Internal Linking Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Bing Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Analytics Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Structured Data Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> On Site Blog Section Creation</div>
                      <div className="flex items-start gap-2"><p>4 - On Site Blog Posting – Applicable from 1st month</p></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Search Engine Submission</div>
                      <div className="flex items-start gap-2"><span>3 - Blog Writing</span></div>
                      <div className="flex items-start gap-2"><span>3 - Blog Links</span></div>
                      <div className="flex items-start gap-2"><span>16 - Blog Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>3 - Article Writing</span></div>
                      <div className="flex items-start gap-2"><span>3 - Article Submissions</span></div>
                      <div className="flex items-start gap-2"><span>15 - Article Marketing</span></div>
                      <div className="flex items-start gap-2"><span>8 - Image sharing</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Contextual Links</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword used in anchor text</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Share Each Blog Post Across Social Media Networks</div>
                      <div className="flex items-start gap-2"><span>2 - Web 2.0 Profile Creation</span></div>
                      <div className="flex items-start gap-2"><span>10 - Web 2.0 Profiles Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Press Release (If Client Provides News)</div>
                      <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5 flex-shrink-0" /> Press Release Bookmarking Links</div>
                      <div className="flex items-start gap-2"><span>30 - Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>12 - Micro Blogging</span></div>
                      <div className="flex items-start gap-2"><span>12 - Classified Submissions</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Infographics Creation/Month</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Infographics Post/Month</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Share each Infographics on Social Media Networks</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Business Page Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Bing Local Listing Creation</div>
                      <div className="flex items-start gap-2"><span>1 - PPT Submissions</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Video Marketing (if Client provides)</div>
                      <div className="flex items-start gap-2"><p>4 - Location optimization</p></div>
                      <div className="flex items-start gap-2"><p>4 - Local Business Listings</p></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> NAP Syndication</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">SMO ACTIVITIES (COMPLIMENTARY)</p>
                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="font-semibold mb-2">FACEBOOK</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Facebook Profile Creation</div>
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Facebook Fan Page Creation</div>
                          <div className="flex items-start gap-2"><span>8 - Facebook Posting & Sharing</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">INSTAGRAM</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Instagram Profile Creation</div>
                          <div className="flex items-start gap-2"><span>8 - Instagram Posting & Sharing</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">TWITTER</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Twitter Profile Creation</div>
                          <div className="flex items-start gap-2"><span>8 - Twitter Post</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">PINTEREST</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Account Creation/Management</div>
                          <div className="flex items-start gap-2"><span>8 - Updating of pin boards</span></div>
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Pins (If Client Provides Images)</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">LINKEDIN</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Linkedin Profile Creation</div>
                          <div className="flex items-start gap-2"><HiMiniXMark className="text-red-500 mt-0.5" /> Linkedin Posting & Sharing</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">REPORTS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Website Analytics Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Keywords Ranking Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Off Page Submission Report</div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">CUSTOMER SUPPORT</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Email</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Phone</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Chat</div>
                    </div>

                    <Link
                      to="/payment"
                      className="block text-center text-lg border border-[#25baff] mt-8 mb-5 py-3 px-8 rounded-2xl w-full mx-auto bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition duration-300 font-medium"
                    >
                      START TODAY
                    </Link>
                  </div>
                </div>
              </div>

              {/* PREMIUM Detailed */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-[#25baff] mb-6 text-center">PREMIUM</h3>

                <div className="space-y-10">
                  <div>
                    <p className="text-xl font-bold mb-4">FIRST HAND SEO ANALYSIS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Pre-Optimization Website Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Competitor Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword Research & Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Baseline Ranking Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Duplicate Content Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Penalty Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Backlink Analysis (if required)</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Canonical Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Title Tag Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> META Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Heading Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Image Alt Tags Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Content Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> SEO Friendly URL Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Site Navigation Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> 404 Page Implementation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Broken Links Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Speed Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Indexed Pages Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Robots.txt Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google XML Sitemap</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> HTML Sitemap (If Available)</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Hyperlink Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Responsive Check</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Website Permalinks Analysis</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Internal Linking Optimization</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Bing Webmaster Tools Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Analytics Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Structured Data Setup</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> On Site Blog Section Creation</div>
                      <div className="flex items-start gap-2"><p>5 - On Site Blog Posting – Applicable from 1st month</p></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Search Engine Submission</div>
                      <div className="flex items-start gap-2"><span>5 - Blog Writing</span></div>
                      <div className="flex items-start gap-2"><span>5 - Blog Links</span></div>
                      <div className="flex items-start gap-2"><span>35 - Blog Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>4 - Article Writing</span></div>
                      <div className="flex items-start gap-2"><span>4 - Article Submissions</span></div>
                      <div className="flex items-start gap-2"><span>25 - Article Marketing</span></div>
                      <div className="flex items-start gap-2"><span>12 - Image sharing</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Contextual Links</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Keyword used in anchor text</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Share Each Blog Post Across Social Media Networks</div>
                      <div className="flex items-start gap-2"><span>5 - Web 2.0 Profile Creation</span></div>
                      <div className="flex items-start gap-2"><span>25 - Web 2.0 Profiles Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Press Release (If Client Provides News)</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Press Release Bookmarking Links</div>
                      <div className="flex items-start gap-2"><span>60 - Social Bookmarking Links</span></div>
                      <div className="flex items-start gap-2"><span>20 - Micro Blogging</span></div>
                      <div className="flex items-start gap-2"><span>25 - Classified Submissions</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Infographics Creation/Month</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Infographics Post/Month</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Share each Infographics on Social Media Networks</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Google Business Page Creation</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Bing Local Listing Creation</div>
                      <div className="flex items-start gap-2"><span>3 - PPT Submissions</span></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Video Marketing (if Client provides)</div>
                      <div className="flex items-start gap-2"><p>10 - Location optimization</p></div>
                      <div className="flex items-start gap-2"><p>10 - Local Business Listings</p></div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> NAP Syndication</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-4">SMO ACTIVITIES (COMPLIMENTARY)</p>
                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="font-semibold mb-2">FACEBOOK</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Facebook Profile Creation</div>
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Facebook Fan Page Creation</div>
                          <div className="flex items-start gap-2"><span>16 - Facebook Posting & Sharing</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">INSTAGRAM</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Instagram Profile Creation</div>
                          <div className="flex items-start gap-2"><span>16 - Instagram Posting & Sharing</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">TWITTER</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Twitter Profile Creation</div>
                          <div className="flex items-start gap-2"><span>16 - Twitter Post</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">PINTEREST</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Account Creation/Management</div>
                          <div className="flex items-start gap-2"><span>Updating of pin boards</span></div>
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Pins (If Client Provides Images)</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">LINKEDIN</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Linkedin Profile Creation</div>
                          <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5" /> Linkedin Posting & Sharing</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">REPORTS</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Website Analytics Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Keywords Ranking Report</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Monthly Off Page Submission Report</div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-4">CUSTOMER SUPPORT</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Email</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Phone</div>
                      <div className="flex items-start gap-2"><FaCheck className="text-green-500 mt-0.5 flex-shrink-0" /> Chat</div>
                    </div>

                    <Link
                      to="/payment"
                      className="block text-center text-lg border border-[#25baff] mt-8 mb-5 py-3 px-8 rounded-2xl w-full mx-auto bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition duration-300 font-medium"
                    >
                      START TODAY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Still not sure which plan is best for your business?
            </p>
            <Link
              to="/free-consultation"
            >
              <button className="bg-[#0b3253] hover:bg-[#08213a] text-white px-12 py-5 rounded-xl text-lg font-semibold transition shadow-lg hover:cursor-pointer">
                Book Free SEO Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO_Packages;