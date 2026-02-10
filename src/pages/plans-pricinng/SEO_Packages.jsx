import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
const SEO_Packages = () => {
    return <>
        <div className="bg-white text-gray-900">

            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    // backgroundImage: `url(${Banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ><div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 text-center px-6 text-white">
                    <h1 className="text-5xl md:text-6xl font-extrabold">SEO Service Packages</h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Home - Services - SEO Service Packages
                    </p>
                </div>
            </section>

            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-[#0b3253] mb-6">
                        Our SEO plans
                    </h2>

                    <div className="grid grid-cols-4 gap-7 mt-20">
                        <div>
                            <div className="border border-orange-400 rounded-xl">
                                <h2 className="font-bold text-2xl text-orange-400 mt-4">BASIC</h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#52CC55] pr-1 align-top">$</span>
                                        <span className="text-6xl font-bold text-[#52CC55]">500</span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>No. of Keywords – 30</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Backlinks (per month) – 300</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Target Pages Optimized – Up to 10</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-lg"><HiMiniXMark /></span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-lg"><HiMiniXMark /></span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-5 rounded-b-xl">
                                    <button className="start-btn text-lg border border-orange-400 mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-orange-400 hover:text-white cursor-pointer">Start Today</button>
                                </div>
                            </div>

                            {/*FIRST HAND SEO ANALYSIS*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">FIRST HAND SEO ANALYSIS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Pre-Optimization Website Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Competitor Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword Research & Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Baseline Ranking Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Duplicate Content Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Penalty Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Backlink Analysis (if required)</span>
                                </div>
                            </div>


                            {/*ON-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Canonical Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Title Tag Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>META Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Heading Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Image Alt Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Content Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>SEO Friendly URL Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Site Navigation Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>404 Page Implementation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Broken Links Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Speed Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Indexed Pages Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Robots.txt Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google XML Sitemap</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>HTML Sitemap (If Available)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Hyperlink Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Responsive Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Website Permalinks Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Internal Linking Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Bing Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Analytics Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Structured Data Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>On Site Blog Section Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>1 - On Site Blog Posting – Applicable from 1st month</p>
                                </div>
                            </div>

                            {/*OFF-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Search Engine Submission</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Blog Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Blog Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>6 - Blog Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Article Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Article Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>5 - Article Marketing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Image sharing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Contextual Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword used in anchor text</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Share Each Blog Post Across Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Web 2.0 Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Web 2.0 Profiles Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Press Release (If Client Provides News)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Press Release Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>15 - Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Micro Blogging</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>5 - Classified Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Infographics Creation/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Infographics Post/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Share each Infographics on Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Google Business Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><FaCheck /></span>
                                    <span>Bing Local Listing Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>PPT Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Video Marketing (if Client provides)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>1 - Location optimization</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>1 - Local Business Listings</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>NAP Syndication</span>
                                </div>
                            </div>

                            {/*SMO ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">SMO ACTIVITIES</p>
                                <p className="text-2xl mt-12">FACEBOOK</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Facebook Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Facebook Fan Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Facebook Posting & Sharing</span>
                                </div>

                                {/*INSTAGRAM*/}
                                <p className="text-2xl mt-10">INSTAGRAM</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Instagram Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Instagram Posting & Sharing</span>
                                </div>

                                {/*TWITTER*/}
                                <p className="text-2xl mt-10">TWITTER</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Twitter Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Twitter Post</span>
                                </div>

                                {/*PINTEREST*/}
                                <p className="text-2xl mt-10">PINTEREST</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Account Creation/Management</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Updating of pin boards</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Pins (If Client Provides Images)</span>
                                </div>

                                {/*LINKEDIN*/}
                                <p className="text-2xl mt-10">LINKEDIN</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Linkedin Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Linkedin Posting & Sharing</span>
                                </div>

                                {/*REPORTS*/}
                                <p className="text-2xl font-bold mt-10">REPORTS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Website Analytics Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Keywords Ranking Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Off Page Submission Report</span>
                                </div>

                                {/*CUSTOMER SUPPORT*/}
                                <p className="text-2xl font-bold mt-10">CUSTOMER SUPPORT</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Email</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Phone</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Chat</span>
                                </div>

                                <button className="start-btn text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-orange-400 text-white cursor-pointer">Start Today</button>
                            </div>

                        </div>


                        <div>
                            <div className="border border-orange-400 rounded-xl">
                                <h2 className="font-bold text-2xl text-orange-400 mt-4">SILVER</h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#555555] pr-1 align-top">$</span>
                                        <span className="text-6xl font-bold text-[#555555]">800</span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>No. of Keywords – 40</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Backlinks (per month) – 400</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Target Pages Optimized – Up to 15</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-lg"><HiMiniXMark /></span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-5 rounded-b-xl">
                                    <button className="start-btn text-lg border border-orange-400 mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-orange-400 hover:text-white cursor-pointer">Start Today</button>
                                </div>
                            </div>

                            {/*FIRST HAND SEO ANALYSIS*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">FIRST HAND SEO ANALYSIS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Pre-Optimization Website Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Competitor Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword Research & Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Baseline Ranking Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Duplicate Content Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Penalty Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Backlink Analysis (if required)</span>
                                </div>
                            </div>

                            {/*ON-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Canonical Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Title Tag Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>META Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Heading Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Image Alt Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Content Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>SEO Friendly URL Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Site Navigation Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>404 Page Implementation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Broken Links Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Speed Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Indexed Pages Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Robots.txt Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google XML Sitemap</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>HTML Sitemap (If Available)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Hyperlink Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Responsive Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Website Permalinks Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Internal Linking Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Bing Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Analytics Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Structured Data Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>On Site Blog Section Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>2 - On Site Blog Posting – Applicable from 1st month</p>
                                </div>
                            </div>

                            {/*OFF-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Search Engine Submission</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Blog Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Blog Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>10 - Blog Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Article Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Article Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>10 - Article Marketing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Image sharing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Contextual Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword used in anchor text</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Share Each Blog Post Across Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Web 2.0 Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Web 2.0 Profiles Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Press Release (If Client Provides News)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Press Release Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>24 - Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>7 - Micro Blogging</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>8 - Classified Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Infographics Creation/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>Infographics Post/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Share each Infographics on Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Business Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Bing Local Listing Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><HiMiniXMark /></span>
                                    <span>PPT Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Video Marketing (if Client provides)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>2 - Location optimization</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>2 - Local Business Listings</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>NAP Syndication</span>
                                </div>
                            </div>

                            {/*SMO ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">SMO ACTIVITIES (COMPLIMENTARY)</p>
                                <p className="text-2xl mt-4">FACEBOOK</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Facebook Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Facebook Fan Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Facebook Posting & Sharing</span>
                                </div>

                                {/*INSTAGRAM*/}
                                <p className="text-2xl mt-10">INSTAGRAM</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Instagram Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Instagram Posting & Sharing</span>
                                </div>

                                {/*TWITTER*/}
                                <p className="text-2xl mt-10">TWITTER</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Twitter Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Twitter Post</span>
                                </div>

                                {/*PINTEREST*/}
                                <p className="text-2xl mt-10">PINTEREST</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Account Creation/Management</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Updating of pin boards</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Pins (If Client Provides Images)</span>
                                </div>

                                {/*LINKEDIN*/}
                                <p className="text-2xl mt-10">LINKEDIN</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Linkedin Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Linkedin Posting & Sharing</span>
                                </div>

                                {/*REPORTS*/}
                                <p className="text-2xl font-bold mt-10">REPORTS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Website Analytics Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Keywords Ranking Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Off Page Submission Report</span>
                                </div>

                                {/*CUSTOMER SUPPORT*/}
                                <p className="text-2xl font-bold mt-10">CUSTOMER SUPPORT</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Email</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Phone</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Chat</span>
                                </div>

                                <button className="start-btn text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-orange-400 text-white cursor-pointer">Start Today</button>
                            </div>

                        </div>

                        <div>
                            <div className="border border-orange-400 rounded-xl">
                                <div className="rounded-t-xl overflow-hidden">

                                    <div className="bg-orange-400 py-4 text-center relative">
                                        <h2 className="text-2xl font-bold text-white tracking-wide">
                                            GOLD
                                        </h2>

                                        {/* Perfect Corner Ribbon */}
                                        <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
                                            <div className="absolute top-5 right-[-35px] rotate-45 bg-red-600 text-white text-xs font-bold py-1 w-40 text-center shadow-md">
                                                POPULAR
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="bg-gray-50 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#FFC107] pr-1 align-top">$</span>
                                        <span className="text-6xl font-bold text-[#FFC107]">1000</span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>No. of Keywords – 50</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Backlinks (per month) – 600</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Target Pages Optimized – Up to 25</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-6 rounded-b-xl">
                                    <button className="start-btn text-lg border border-orange-400 mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-orange-400 text-white hover:bg-white hover:text-black cursor-pointer">Start Today</button>
                                </div>
                            </div>

                            {/*FIRST HAND SEO ANALYSIS*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">FIRST HAND SEO ANALYSIS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Pre-Optimization Website Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Competitor Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword Research & Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Baseline Ranking Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Duplicate Content Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Penalty Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Backlink Analysis (if required)</span>
                                </div>
                            </div>

                            {/*ON-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Canonical Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Title Tag Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>META Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Heading Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Image Alt Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Content Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>SEO Friendly URL Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Site Navigation Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>404 Page Implementation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Broken Links Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Speed Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Indexed Pages Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Robots.txt Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google XML Sitemap</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>HTML Sitemap (If Available)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Hyperlink Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Responsive Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Permalinks Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Internal Linking Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Bing Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Analytics Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Structured Data Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>On Site Blog Section Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>4 - On Site Blog Posting – Applicable from 1st month</p>
                                </div>
                            </div>


                            {/*OFF-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Search Engine Submission</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - Blog Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - Blog Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>16 - Blog Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - Article Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - Article Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>15 - Article Marketing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>8 - Image sharing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Contextual Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword used in anchor text</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Share Each Blog Post Across Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Web 2.0 Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>10 - Web 2.0 Profiles Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Press Release (If Client Provides News)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Press Release Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>30 - Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>12 - Micro Blogging</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>12 - Classified Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Infographics Creation/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Infographics Post/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Share each Infographics on Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Business Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Bing Local Listing Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - PPT Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Video Marketing (if Client provides)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>4 - Location optimization</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>4 - Local Business Listings</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>NAP Syndication</span>
                                </div>
                            </div>

                            {/*SMO ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">SMO ACTIVITIES (COMPLIMENTARY)</p>
                                <p className="text-2xl mt-4">FACEBOOK</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Facebook Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Facebook Fan Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>8 - Facebook Posting & Sharing</span>
                                </div>

                                {/*INSTAGRAM*/}
                                <p className="text-2xl mt-10">INSTAGRAM</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Instagram Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>8 - Instagram Posting & Sharing</span>
                                </div>

                                {/*TWITTER*/}
                                <p className="text-2xl mt-10">TWITTER</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Twitter Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>8 - Twitter Post</span>
                                </div>

                                {/*PINTEREST*/}
                                <p className="text-2xl mt-10">PINTEREST</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Account Creation/Management</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>8 - Updating of pin boards</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Pins (If Client Provides Images)</span>
                                </div>

                                {/*LINKEDIN*/}
                                <p className="text-2xl mt-10">LINKEDIN</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Linkedin Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Linkedin Posting & Sharing</span>
                                </div>

                                {/*REPORTS*/}
                                <p className="text-2xl font-bold mt-10">REPORTS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Website Analytics Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Keywords Ranking Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Off Page Submission Report</span>
                                </div>

                                {/*CUSTOMER SUPPORT*/}
                                <p className="text-2xl font-bold mt-10">CUSTOMER SUPPORT</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Email</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Phone</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Chat</span>
                                </div>

                                <button className="start-btn text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-orange-400 text-white cursor-pointer">Start Today</button>
                            </div>

                        </div>

                        <div>
                            <div className="border border-orange-400 rounded-xl">
                                <h2 className="font-bold text-2xl text-orange-400 mt-4">PREMIUM</h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#607AFE] pr-1 align-top">$</span>
                                        <span className="text-6xl font-bold text-[#607AFE]">2000</span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>No. of Keywords – 100</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Backlinks (per month) – 1000</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Target Pages Optimized – Up to 40</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>GBP (GMB)</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Geotagging</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="bg-gray-50 mt-5 rounded-b-xl">
                                    <button className="start-btn text-lg border border-orange-400 mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-orange-400 hover:text-white cursor-pointer">Start Today</button>
                                </div>
                            </div>

                            {/*FIRST HAND SEO ANALYSIS*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">FIRST HAND SEO ANALYSIS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Pre-Optimization Website Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Competitor Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword Research & Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Baseline Ranking Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Duplicate Content Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Penalty Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Backlink Analysis (if required)</span>
                                </div>
                            </div>

                            {/*ON-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">ON-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Canonical Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Title Tag Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>META Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Heading Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Image Alt Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Content Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>SEO Friendly URL Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Site Navigation Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>404 Page Implementation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Broken Links Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Speed Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Indexed Pages Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Robots.txt Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google XML Sitemap</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>HTML Sitemap (If Available)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Hyperlink Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Responsive Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Website Permalinks Analysis</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Internal Linking Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Bing Webmaster Tools Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Analytics Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Structured Data Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>On Site Blog Section Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>5 - On Site Blog Posting – Applicable from 1st month</p>
                                </div>
                            </div>

                            {/*OFF-PAGE OPTIMIZATION ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">OFF-PAGE OPTIMIZATION ACTIVITIES</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Search Engine Submission</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>5 - Blog Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>5 - Blog Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>35 - Blog Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Article Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>4 - Article Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>25 - Article Marketing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>12 - Image sharing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Contextual Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Keyword used in anchor text</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Share Each Blog Post Across Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>5 - Web 2.0 Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>25 - Web 2.0 Profiles Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Press Release (If Client Provides News)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Press Release Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>60 - Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>20 - Micro Blogging</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>25 - Classified Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Infographics Creation/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Infographics Post/Month</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Share each Infographics on Social Media Networks</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Google Business Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Bing Local Listing Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - PPT Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Video Marketing (if Client provides)</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>10 - Location optimization</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <p>10 - Local Business Listings</p>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>NAP Syndication</span>
                                </div>
                            </div>

                            {/*SMO ACTIVITIES*/}
                            <div className="text-left">
                                <p className="text-2xl mt-4 font-bold ">SMO ACTIVITIES (COMPLIMENTARY)</p>
                                <p className="text-2xl mt-4">FACEBOOK</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Facebook Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Facebook Fan Page Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>16 - Facebook Posting & Sharing</span>
                                </div>

                                {/*INSTAGRAM*/}
                                <p className="text-2xl mt-10">INSTAGRAM</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Instagram Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>16 - Instagram Posting & Sharing</span>
                                </div>

                                {/*TWITTER*/}
                                <p className="text-2xl mt-10">TWITTER</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Twitter Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>16 - Twitter Post</span>
                                </div>

                                {/*PINTEREST*/}
                                <p className="text-2xl mt-10">PINTEREST</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Account Creation/Management</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Updating of pin boards</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Pins (If Client Provides Images)</span>
                                </div>

                                {/*LINKEDIN*/}
                                <p className="text-2xl mt-10">LINKEDIN</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Linkedin Profile Creation</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Linkedin Posting & Sharing</span>
                                </div>

                                {/*REPORTS*/}
                                <p className="text-2xl font-bold mt-10">REPORTS</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Website Analytics Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Keywords Ranking Report</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Monthly Off Page Submission Report</span>
                                </div>

                                {/*CUSTOMER SUPPORT*/}
                                <p className="text-2xl font-bold mt-10">CUSTOMER SUPPORT</p>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Email</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Phone</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-sm"><FaCheck /></span>
                                    <span>Chat</span>
                                </div>

                                <button className="start-btn text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 bg-orange-400 text-white cursor-pointer">Start Today</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
export default SEO_Packages