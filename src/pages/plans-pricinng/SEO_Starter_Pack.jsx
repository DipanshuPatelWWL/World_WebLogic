import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg"
const SEO_Starter_Pack = () => {
    return <>
        <div className="bg-white text-gray-900">

            <section
                className="relative h-[58vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Banner})`,
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
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-5xl font-bold text-[#0b3253] mb-6">
                        Our SEO plans
                    </h2>

                    <div className="mt-20">
                        <div>
                            <div className="border border-[#25baff] rounded-xl">
                                <h2 className="font-bold text-2xl text-black mt-4">STARTER</h2>
                                <div className="bg-gray-50 mt-5 px-10">
                                    <div className="p-5">
                                        <span className="text-lg font-bold text-[#52CC55] pr-1 align-top">$</span>
                                        <span className="text-6xl font-bold text-[#52CC55]">250</span>
                                        <p>Monthly</p>
                                    </div>
                                </div>

                                {/* Feature Item */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>No. of Keywords – 15</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Backlinks (per month) – 150</span>
                                    </div>
                                    <hr className="border-gray-300 w-3/4 mx-auto" />

                                    <div className="flex items-center justify-center gap-3 py-4">
                                        <span className="text-sm"><FaCheck /></span>
                                        <span>Target Pages Optimized – Up to 5</span>
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
                                    <button className="start-btn text-lg border border-[#25baff] mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] hover:text-white cursor-pointer">Start Today</button>
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
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Duplicate Content Check</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
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
                                    <span className="text-md"><HiMiniXMark /></span>
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
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Image Alt Tags Optimization</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
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
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Google XML Sitemap</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
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
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Google Analytics Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
                                    <span>Structured Data Setup</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span className="text-md"><HiMiniXMark /></span>
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
                                    <span>1 - Blog Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Blog Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - Blog Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Article Writing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Article Submissions</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Article Marketing</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>1 - Image sharing</span>
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
                                    <span>8 - Social Bookmarking Links</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>2 - Micro Blogging</span>
                                </div>
                                <div className="flex items-center gap-1 py-2">
                                    <span>3 - Classified Submissions</span>
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
                                    <span className="text-md"><HiMiniXMark /></span>
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

                                <button className="start-btn text-lg mt-8 mb-8 p-2 rounded-2xl pr-8 pl-8 hover:bg-[#25baff] text-black border border-[#25baff] hover:text-white cursor-pointer">Start Today</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
export default SEO_Starter_Pack