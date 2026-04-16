import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import Banner from "../../assets/seo_packages/seo_starter_pack.jpg";
import { Link } from "react-router-dom";

const SmoPackages = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* ===== BANNER ===== */}
      <section
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/80" />

        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            SMO Service Packages
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 font-light">
            Home → Services → SMO Packages
          </p>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0b3253] mb-16">
            Our SMO Plans
          </h2>

          {/* PRICING GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* BASIC */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <PricingCard
                title="BASIC"
                price={200}
                color="#52CC55"
                popular={false}
                features={[
                  { text: "Social Account Creation – 2", included: true },
                  { text: "Daily Posting", included: false },
                  { text: "Content Creation", included: false },
                ]}
              />

              <PlanDetails
                creative={5}
                postings={5}
                paid={false}
                remarketing={false}
              />
            </div>

            {/* GOLD – Popular */}
            <div className="relative flex flex-col rounded-2xl border-2 border-[#25baff] bg-white shadow-2xl scale-[1.03] z-10 hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <PricingCard
                title="GOLD"
                price={500}
                color="#FFC107"
                popular={true}
                features={[
                  { text: "Social Account Creation – 4", included: true },
                  { text: "Daily Posting", included: true },
                  { text: "Content Creation", included: false },
                ]}
              />

              <PlanDetails
                creative={8}
                postings={8}
                paid={true}
                remarketing={false}
              />
            </div>

            {/* SILVER */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <PricingCard
                title="SILVER"
                price={700}
                color="#555555"
                popular={false}
                features={[
                  { text: "Social Account Creation – 6", included: true },
                  { text: "Daily Posting", included: true },
                  { text: "Content Creation", included: true },
                ]}
              />

              <PlanDetails
                creative={12}
                postings={12}
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

/* ===== PRICING CARD COMPONENT ===== */
const PricingCard = ({ title, price, color, popular, features }) => {
  return (
    <>
      {/* Header */}
      <div className={`relative py-6 text-center ${popular ? "bg-[#25baff]" : "bg-gray-50"}`}>
        <h3
          className={`text-3xl font-bold ${popular ? "text-white" : "text-[#25baff]"}`}
        >
          {title}
        </h3>

        {popular && (
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
            <div className="absolute top-5 right-[-38px] rotate-45 bg-[#a8d97c] text-white text-xs font-bold py-1 w-44 text-center shadow-md">
              MOST POPULAR
            </div>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="py-10 px-8 text-center bg-white">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-bold text-gray-600">$</span>
          <span className="text-6xl sm:text-7xl font-extrabold" style={{ color }}>
            {price}
          </span>
        </div>
        <p className="mt-2 text-gray-600 font-medium">per month</p>
      </div>

      {/* Quick Features */}
      <div className="px-8 pb-10 pt-4 border-t border-gray-100">
        <ul className="space-y-4 text-base">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center gap-3">
              {feature.included ? (
                <FaCheck className="text-green-500 text-xl flex-shrink-0" />
              ) : (
                <HiMiniXMark className="text-red-400 text-2xl flex-shrink-0" />
              )}
              <span className={feature.included ? "font-medium" : "text-gray-500"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

/* ===== PLAN DETAILS ===== */
const PlanDetails = ({ creative, postings, paid, remarketing }) => {
  return (
    <div className="mt-10 px-8 pb-12 text-sm space-y-10 bg-gray-50">
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
        enabled={paid}
      />

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
        enabled={remarketing}
      />

      <Section
        title="SMO ACTIVITIES"
        items={["Monthly report generation with insights", "Next month’s line of action"]}
      />

      <Section
        title="CUSTOMER SUPPORT"
        items={["Email", "Phone", "Chat"]}
      />

      <Link
        to="/payment"
        className="w-full mt-6 py-4 bg-[#25baff] text-white rounded-xl font-semibold hover:bg-[#1a9fe0] transition shadow-md flex items-center justify-center text-center"
      >
        Start Today
      </Link>
    </div>
  );
};

/* ===== REUSABLE SECTION ===== */
const Section = ({ title, items, enabled = true }) => {
  return (
    <div>
      <h4 className="text-xl font-bold mb-4 text-[#0b3253]">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
            {enabled ? (
              <FaCheck className="text-green-500 mt-1 flex-shrink-0 text-lg" />
            ) : (
              <HiMiniXMark className="text-red-500 mt-1 flex-shrink-0 text-xl" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmoPackages;