import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";

const WebDesigningPackages = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* ===== BANNER ===== */}
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
            Web Designing Packages
          </h1>
          <p className="mt-4 text-sm">
            Home - Services - Web Designing Packages
          </p>
        </div>
      </section>

      {/* ===== SECTION ===== */}
      <section className="py-24 px-6 bg-[#f3f3f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0b3253] mb-16">
            Our Web Designing Plans
          </h2>

          {/* ===================== TOP CARDS ===================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* SILVER */}
            <div className="border-2 border-[#25baff] rounded-2xl bg-white text-center overflow-hidden">
              <div className="py-4 text-[#25baff] font-bold">SILVER</div>

              <div className="bg-gray-100 py-8">
                <span className="text-green-500 text-5xl font-bold">$400</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              <div className="px-8 py-6 text-sm space-y-4">
                <p>Design Partially Custom – only 1 iteration</p>

                <Feature ok>Layered Slides</Feature>
                <Feature ok>Responsive Site (Desktop, Tablet, Mobile)</Feature>
                <Feature>New Logo Design</Feature>
                <Feature>HTML Email Templates</Feature>
                <Feature>Letterhead Design</Feature>
              </div>

              <button
                className="mb-8 px-6 py-2 cursor-pointer rounded-full border border-[#25baff] text-[#25baff] hover:bg-[#25baff]
 hover:text-white"
              >
                Start Today
              </button>
            </div>

            {/* GOLD */}
            <div className="relative border-2 border-[#25baff] rounded-2xl bg-white text-center overflow-hidden shadow-lg">
              {/* POPULAR */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute top-4 right-[-30px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-36 text-center">
                  POPULAR
                </div>
              </div>

              <div
                className="bg-[#25baff]
 text-white py-4 font-bold"
              >
                GOLD
              </div>

              <div className="bg-gray-100 py-8">
                <span className="text-[#25baff] text-5xl font-bold">$800</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              <div className="px-8 py-6 text-sm space-y-4">
                <p>Design Custom Design – up to 2 iterations</p>

                <Feature ok>Layered Slides</Feature>
                <Feature ok>Responsive Site (Desktop, Tablet, Mobile)</Feature>
                <Feature>New Logo Design</Feature>
                <Feature>HTML Email Templates</Feature>
                <Feature ok>Letterhead Design</Feature>
              </div>

              <button
                className="mb-8 px-6 py-2 rounded-full bg-[#25baff] cursor-pointer
 text-white"
              >
                Start Today
              </button>
            </div>

            {/* PREMIUM */}
            <div className="border-2 border-[#25baff] rounded-2xl bg-white text-center overflow-hidden">
              <div className="py-4 text-[#25baff] font-bold">PREMIUM</div>

              <div className="bg-gray-100 py-8">
                <span className="text-gray-600 text-5xl font-bold">$1800</span>
                <p className="text-sm text-gray-500">Monthly</p>
              </div>

              <div className="px-8 py-6 text-sm space-y-4">
                <p>Letterhead Design</p>

                <Feature ok>Layered Slides</Feature>
                <Feature ok>Responsive Site (Desktop, Tablet, Mobile)</Feature>
                <Feature ok>New Logo Design</Feature>
                <Feature ok>HTML Email Templates</Feature>
                <Feature ok>Letterhead Design</Feature>
              </div>

              <button
                className="mb-8 px-6 py-2 rounded-full border cursor-pointer border-[#25baff] text-[#25baff] hover:bg-[#25baff]
 hover:text-white"
              >
                Start Today
              </button>
            </div>
          </div>

          {/* ===================== CMS ROW ===================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-sm mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-bold text-base mb-2">CMS</p>
              <p className="text-gray-600">WordPress / Joomla / C5 / Drupal</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-bold text-base mb-2">CMS</p>
              <p className="text-gray-600">
                WordPress / Joomla / C5 / Drupal / Magento / Shopify
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-bold text-base mb-2">CMS</p>
              <p className="text-gray-600">
                WordPress / Joomla / C5 / Drupal / Magento / Prestashop /
                Shopify / BigCommerce
              </p>
            </div>
          </div>

          {/* ===================== BOTTOM FEATURES ===================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
            {/* SILVER */}
            <div className="space-y-2">
              <Feature>Custom Blog</Feature>
              <Feature>CMS Updates</Feature>
              <Feature>Front-End User Management</Feature>
              <Feature>Back-End User Management</Feature>
              <Feature>Social Logins</Feature>
              <Feature ok>Added Site Security</Feature>
              <Feature ok>GUI Admin Panel</Feature>
              <Feature>Shopping Cart</Feature>
              <Feature>Dealer/ Affiliate Section</Feature>
              <Feature>Search Engine Friendly Structure</Feature>
              <Feature>Newsletter Module</Feature>
              <Feature>Google eCommerce Tracking</Feature>
              <p>3 - Conversion Forms</p>
              <Feature>Content Migration</Feature>
              <Feature>Products Migration</Feature>
              <Feature>Order Migration</Feature>
              <Feature>User Migration</Feature>
              <Feature>New Domain (optional)</Feature>
              <Feature ok>Web Hosting</Feature>
              <p>25 - Hosted Emails</p>
              <p>5 hr/m - Web maintenance work</p>

              <button
                className="mt-4 bg-[#25baff]
 text-white px-6 py-2 rounded-full cursor-pointer"
              >
                Start Today
              </button>
            </div>

            {/* GOLD */}
            <div className="space-y-2">
              <Feature ok>Custom Blog</Feature>
              <Feature ok>CMS Updates - upto 6 months</Feature>
              <Feature ok>Front-End User Management</Feature>
              <Feature ok>Back-End User Management</Feature>
              <Feature ok>Social Logins</Feature>
              <Feature ok>Added Site Security</Feature>
              <Feature ok>GUI Admin Panel</Feature>
              <Feature ok>Shopping Cart</Feature>
              <Feature ok>Dealer/ Affiliate Section</Feature>
              <Feature ok>Search Engine Friendly Structure</Feature>
              <Feature ok>Newsletter Module</Feature>
              <Feature ok>Google eCommerce Tracking</Feature>
              <p>7 - Conversion Forms</p>
              <Feature ok>Content Migration</Feature>
              <p>500 - Products Migration</p>
              <Feature>Order Migration</Feature>
              <Feature>User Migration</Feature>
              <Feature ok>New Domain (optional)</Feature>
              <Feature ok>Web Hosting</Feature>
              <p>50 - Hosted Emails</p>
              <p>10 hr/m - Web maintenance work</p>

              <button
                className="mt-4 bg-[#25baff]
 text-white px-6 py-2 rounded-full cursor-pointer"
              >
                Start Today
              </button>
            </div>

            {/* PREMIUM */}
            <div className="space-y-2">
              <Feature ok>Custom Blog</Feature>
              <Feature ok>CMS Updates - upto 6 months</Feature>
              <Feature ok>Front-End User Management</Feature>
              <Feature ok>Back-End User Management</Feature>
              <Feature ok>Social Logins</Feature>
              <Feature ok>Added Site Security</Feature>
              <Feature ok>GUI Admin Panel</Feature>
              <Feature ok>Shopping Cart</Feature>
              <Feature ok>Dealer/ Affiliate Section</Feature>
              <Feature ok>Search Engine Friendly Structure</Feature>
              <Feature ok>Newsletter Module</Feature>
              <Feature ok>Google eCommerce Tracking</Feature>
              <p>12 - Conversion Forms</p>
              <Feature ok>Content Migration</Feature>
              <p>2000 - Products Migration</p>
              <Feature ok>Order Migration</Feature>
              <Feature ok>User Migration</Feature>
              <Feature ok>New Domain (optional)</Feature>
              <Feature ok>Web Hosting</Feature>
              <p>200 - Hosted Emails</p>
              <p>25 hr/m - Web maintenance work</p>

              <button
                className="mt-4 bg-[#25baff]
 text-white px-6 py-2 rounded-full cursor-pointer"
              >
                Start Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ===== REUSABLE FEATURE ROW ===== */
const Feature = ({ children, ok }) => (
  <div className="flex items-center gap-2">
    {ok ? (
      <FaCheck className="text-black text-sm" />
    ) : (
      <HiMiniXMark className="text-black text-sm" />
    )}
    <span>{children}</span>
  </div>
);

export default WebDesigningPackages;
