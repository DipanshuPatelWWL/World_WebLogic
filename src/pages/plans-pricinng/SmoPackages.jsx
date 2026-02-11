import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";

const SmoPackages = () => {
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

        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            SMO Service Packages
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Home - Services - SMO Packages
          </p>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#0b3253] mb-16">
            Our SMO Plans
          </h2>

          {/* PRICING GRID */}
          <div className="grid grid-cols-3 gap-8">
            {/* BASIC */}
            <div>
              <PricingCard
                title="BASIC"
                price="200"
                color="green"
                features={[
                  "Social Account Creation - 2",
                  "Daily Posting",
                  "Content Creation",
                ]}
                enabled={[true, false, false]}
              />

              <PlanDetails
                creative="5"
                postings="5"
                paid={false}
                remarketing={false}
              />
            </div>

            {/* GOLD */}
            <div>
              <PricingCard
                title="GOLD"
                price="500"
                color="gold"
                popular
                features={[
                  "Social Account Creation - 4",
                  "Daily Posting",
                  "Content Creation",
                ]}
                enabled={[true, true, false]}
              />

              <PlanDetails
                creative="8"
                postings="8"
                paid={true}
                remarketing={false}
              />
            </div>

            {/* SILVER */}
            <div>
              <PricingCard
                title="SILVER"
                price="700"
                color="gray"
                features={[
                  "Social Account Creation - 6",
                  "Daily Posting",
                  "Content Creation",
                ]}
                enabled={[true, true, true]}
              />

              <PlanDetails
                creative="12"
                postings="12"
                paid={true}
                remarketing={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ===== PRICING CARD ===== */
const PricingCard = ({ title, price, features, enabled, popular }) => {
  const priceColor =
    title === "BASIC"
      ? "text-[#52CC55]"
      : title === "GOLD"
        ? "text-[#FFC107]"
        : "text-[#555555]";

  return (
    <div className="border border-[#25baff] rounded-xl text-center overflow-hidden">
      <div
        className={`${
          title === "GOLD" ? "bg-[#25baff] text-white" : ""
        } py-4 font-bold relative`}
      >
        {title}
        {popular && (
          <span className="absolute top-0 right-0 bg-[#a8d97c] text-xs px-5 py-1 rotate-45 translate-x-7 translate-y-3">
            POPULAR
          </span>
        )}
      </div>

      <div className="p-8">
        {/* PRICE */}
        <div className="flex justify-center items-end gap-1 mb-1">
          <span className={`text-xl font-bold ${priceColor}`}>$</span>
          <span className={`text-5xl font-bold ${priceColor}`}>{price}</span>
        </div>
        <p className="text-sm text-gray-600 mb-6">Monthly</p>

        {/* FEATURES */}
        <ul className="space-y-3 text-sm">
          {features.map((item, i) => (
            <li key={i} className="flex justify-center gap-2">
              {enabled[i] ? (
                <FaCheck className="text-[#a8d97c]" />
              ) : (
                <HiMiniXMark className="text-gray-400" />
              )}
              {item}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button
          className={`mt-6 px-6 py-2 rounded-full border border-[#25baff] cursor-pointer ${
            title === "GOLD"
              ? "bg-[#25baff] text-white"
              : "hover:bg-[#25baff] hover:text-white"
          }`}
        >
          Start Today
        </button>
      </div>
    </div>
  );
};

/* ===== DETAILS ===== */
const PlanDetails = ({ creative, postings, paid, remarketing }) => (
  <div className="mt-12 text-sm space-y-8">
    <Section
      title="ORGANIC PROMOTION"
      items={[
        "Competitor analysis",
        "Strategy formation",
        "Hashtag creation and promotion",
        `${creative} - Monthly creative creation`,
        `${postings} - Monthly postings`,
        "Analytics Tracking",
        "Google Penalty Check",
        "Account Management",
        "Engagement with active communities",
        "Network build-up",
        "Content optimization",
      ]}
    />

      <Section
      title="PAID PROMOTION"
      items={[
        "Budget estimate",
        "Setting up campaigns",
        "Ad creative creation",
        "Daily account optimization",
        "Setting up sales funnel for conversion objective",
      ]}
      enabledItems={paid ? [true, true, true, true, true] : [false, false, false, false, false]}
    />

    {/* REMARKETING */}
    <Section
      title="REMARKETING"
      items={[
        "Creation of audience lists",
        "Setting up campaigns",
        "Ad creative creation",
        "Daily account optimization",
        "Setting up sales funnel for conversion objective",
        "Conversion tracking assisted by Google Analytics",
      ]}
      enabledItems={
        remarketing
          ? [true, true, true, true, true, true]
          : [false, false, false, false, false, false]
      }
    />


   

    <Section
      title="SMO ACTIVITIES"
      items={[
        "Monthly report generation with insights",
        "Next month’s line of action",
      ]}
    />

    <Section title="CUSTOMER SUPPORT" items={["Email", "Phone", "Chat"]} />

    <button className="bg-[#25baff] text-white px-6 py-2 rounded-full cursor-pointer">
      Start Today
    </button>
  </div>
);

/* ===== REUSABLE SECTION ===== */
const Section = ({ title, items, enabledItems }) => (
  <div>
    <h4 className="font-bold mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, i) => {
        const isEnabled = enabledItems ? enabledItems[i] : true;

        return (
          <li key={i} className="flex items-center gap-2">
            {isEnabled ? (
              <FaCheck className="text-black" />
            ) : (
              <HiMiniXMark className="text-black" />
            )}
            {item}
          </li>
        );
      })}
    </ul>
  </div>
);


export default SmoPackages;
