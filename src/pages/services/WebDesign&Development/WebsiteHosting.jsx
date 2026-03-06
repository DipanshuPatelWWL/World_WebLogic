import { useLayoutEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaExclamationTriangle } from "react-icons/fa";
import {
  FaRocket,
  FaSearch,
  FaUserCheck,
  FaDatabase,
  FaTools,
  FaClock,
} from "react-icons/fa";

import {
  FaWordpress,
  FaMagento,
  FaShopify,
  FaJoomla,
  FaDrupal,
} from "react-icons/fa";
import { SiWoocommerce, SiWix } from "react-icons/si";

import { FaLightbulb, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

import {
  FaServer,
  FaLock,
  FaSlidersH,
  FaTachometerAlt,
  FaSyncAlt,
  FaHeadset,
} from "react-icons/fa";

import { FaCloud, FaLayerGroup } from "react-icons/fa";

import Banner from "../../../assets/services/websitehosting/banner.avif";
import Img from "../../../assets/services/websitehosting/img1.avif";
import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const WebsiteHosting = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const faqRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(whoRef.current.children, {
        scrollTrigger: {
          trigger: whoRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          scale: 0.92,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
        });
      });

      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        items.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question:
        "I have a new website. Do you offer hosting consultations for new websites?",
      answer:
        "Yes. We provide personalized hosting consultations for new websites. Our team evaluates your business goals, expected traffic, platform requirements, and growth plans to recommend the most suitable hosting environment from day one.",
    },
    {
      question:
        "What if I already have hosting but want to switch to your support?",
      answer:
        "No problem. We handle complete hosting migration with minimal or zero downtime. Our experts transfer your files, databases, emails, and DNS configurations securely while ensuring your website performance remains stable.",
    },
    {
      question: "Do you support staging environments for testing changes?",
      answer:
        "Absolutely. We set up secure staging environments so you can safely test updates, design changes, plugins, or new features before deploying them to your live website.",
    },
    {
      question: "Do you help optimize website speed after hosting is set up?",
      answer:
        "Yes. Beyond setup, we optimize server performance, enable caching, integrate CDN services, compress assets, and fine-tune configurations to ensure faster load times and improved Core Web Vitals.",
    },
    {
      question: "How do you monitor uptime and performance?",
      answer:
        "We use advanced monitoring tools to track uptime, server health, traffic spikes, and performance metrics 24/7. Any potential issue is detected early and resolved proactively before impacting your visitors.",
    },
    {
      question: "Will I get alerts if anything goes wrong with my website?",
      answer:
        "Yes. Our monitoring systems trigger instant alerts for downtime, security threats, or unusual activity. Our support team immediately investigates and resolves issues to minimize disruption.",
    },
    {
      question: "How often do you update the hosting environment?",
      answer:
        "We regularly update server software, security patches, firewall configurations, and performance settings to maintain stability, compatibility, and maximum protection.",
    },
    {
      question:
        "Will hosting support include help with SSL renewal or expiry alerts?",
      answer:
        "Yes. We manage SSL certificate installations, renewals, and expiration tracking to ensure your website always remains secure and trusted by browsers.",
    },
    {
      question:
        "What happens to my SEO performance if I change hosting providers?",
      answer:
        "If migration is handled correctly, your SEO will not be negatively affected. In many cases, improved hosting speed and uptime can enhance rankings. We ensure proper DNS management, zero broken links, and minimal downtime during transitions.",
    },
  ];

  return (
    <div ref={rootRef} className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/80" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-6 text-lg text-gray-300">Website Hosting</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="ml-15">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            How Poor Web Hosting Impacts Your
            <span className="text-[#25baff]"> Growth & Revenue</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Your website is your digital storefront. But when your hosting
            provider fails, your business suffers. Slow loading speeds,
            unexpected downtime, and weak security don’t just frustrate visitors
            — they directly impact conversions, trust, and long-term growth.
          </p>

          <div className="space-y-4">
            {[
              "Slow loading speeds increase bounce rates and reduce conversions.",
              "Unexpected downtime damages brand credibility and SEO rankings.",
              "Security vulnerabilities expose sensitive customer data.",
              "Checkout or form failures result in immediate revenue loss.",
              "Limited scalability prevents handling high-traffic campaigns.",
              "Poor backup systems risk permanent data loss.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-red-100 text-red-500 p-2 rounded-full mt-1">
                  <FaExclamationTriangle size={14} />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img}
            alt="Web Hosting Performance Issues"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* audit services  */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Stay Secure, Stay Fast with Digital WebGuider
            <span className="text-[#25baff]"> Hosting</span>
          </h2>

          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
            Our web hosting benefits include:
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaRocket,
                head: "Quick Loading Speed",
                text: "Fast websites keep visitors engaged and improve conversions. Our optimized hosting infrastructure ensures minimal load times, better user retention, and stronger overall performance.",
              },
              {
                icon: FaSearch,
                head: "Better Search Engine Visibility",
                text: "Search engines prioritize fast, secure, and stable websites. Our hosting improves performance factors that help boost your SEO rankings and increase organic traffic.",
              },
              {
                icon: FaUserCheck,
                head: "Smooth User Experience",
                text: "A well-performing server ensures seamless browsing across devices. We deliver reliable hosting that enhances responsiveness and keeps users satisfied.",
              },
              {
                icon: FaShieldAlt,
                head: "Advanced Data Security",
                text: "Protect your website and customer information with built-in security features, firewalls, malware protection, and regular monitoring for maximum safety.",
              },
              {
                icon: FaChartLine,
                head: "Flexible Scaling Options",
                text: "As your business grows, your hosting grows with you. Our scalable solutions handle increasing traffic and content without compromising performance.",
              },
              {
                icon: FaDatabase,
                head: "Regular Automated Backups",
                text: "Unexpected issues can happen, but recovery should be simple. Our automated backup systems ensure your data is safe and restorable anytime.",
              },
              {
                icon: FaTools,
                head: "No Technical Hassles",
                text: "User-friendly dashboards, one-click installations, and easy management tools make website administration simple—even without technical expertise.",
              },
              {
                icon: FaClock,
                head: "24/7 Website Availability",
                text: "Downtime means lost opportunities. Our reliable servers guarantee high uptime so your website stays accessible to customers around the clock.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
            shadow-lg shadow-[#25baff]/10
            transition-all duration-500
            hover:bg-[#25baff]
            hover:-translate-y-3
            hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto
              group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* contact us  */}

      <section
        ref={addSectionRef}
        className="relative py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
        <div
          className="absolute inset-0 
   bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),
radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)]

    animate-pulseSlow"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#25baff]
 rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
            Talk To Our Experts Now
          </h2>

          <NavLink to="/contact">
            <button className="bg-[#25baff] cursor-pointer text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
              Contact Now
            </button>
          </NavLink>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-3">
            Our Full Suite of Website
            <span className="text-[#25baff]"> Hosting Solutions</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaServer,
                head: "Website Setup & Seamless Migration",
                points: [
                  "Complete hosting environment configuration",
                  "Zero-downtime website migration",
                  "Domain, DNS & professional email setup",
                  "Database transfer with full integrity check",
                  "Pre-launch performance & compatibility testing",
                ],
              },
              {
                icon: FaLock,
                head: "Advanced SSL Integration",
                points: [
                  "SSL certificate installation & activation",
                  "Full HTTPS enforcement across all pages",
                  "Auto-renewal configuration",
                  "Secure browser trust verification",
                ],
              },
              {
                icon: FaSlidersH,
                head: "Custom Control Panel Configuration",
                points: [
                  "cPanel / hosting dashboard optimization",
                  "Customized resource allocation",
                  "Email account & security setup",
                  "Easy-to-manage interface guidance",
                ],
              },
              {
                icon: FaTachometerAlt,
                head: "High-Level Performance Optimization",
                points: [
                  "Server speed tuning & uptime monitoring",
                  "Advanced caching & compression setup",
                  "CDN integration for global performance",
                  "Core Web Vitals optimization support",
                ],
              },
              {
                icon: FaShieldAlt,
                head: "24/7 Proactive Security Monitoring",
                points: [
                  "Firewall configuration & malware scanning",
                  "Real-time threat detection",
                  "Routine vulnerability assessments",
                  "CMS & plugin security updates",
                ],
              },
              {
                icon: FaDatabase,
                head: "Automated & Secure Backup Systems",
                points: [
                  "Scheduled daily/weekly backups",
                  "Cloud-based encrypted storage",
                  "One-click restoration capability",
                  "Backup health monitoring alerts",
                ],
              },
              {
                icon: FaSyncAlt,
                head: "Flexible Hosting Upgrades",
                points: [
                  "Scalable server resources on demand",
                  "RAM, CPU & storage expansion support",
                  "Traffic surge handling without downtime",
                ],
              },
              {
                icon: FaHeadset,
                head: "Dedicated Expert Support",
                points: [
                  "Immediate troubleshooting assistance",
                  "Server configuration & optimization help",
                  "Priority technical support access",
                  "Guidance for long-term hosting growth",
                ],
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-10
            shadow-lg shadow-[#25baff]/10
            transition-all duration-500
            hover:bg-[#25baff]
            hover:-translate-y-3
            hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto block
              group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="font-extrabold text-lg text-center mb-4 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white transition-colors duration-300 list-disc list-inside">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#0b1120] to-[#111827] py-32 overflow-hidden">
        {/* Section Heading */}
        <div className="text-center mb-20 px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Hosting Solutions for
            <span className="text-[#25baff]"> Every Website Need</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Choose the right hosting environment based on your business size,
            performance expectations, and future scalability goals.
          </p>
          <div className="w-24 h-1 bg-[#25baff] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: FaServer,
                title: "Shared Hosting",
                best: "Perfect for startups, blogs & small business websites.",
                benefits: [
                  "Cost-effective hosting solution",
                  "Beginner-friendly setup",
                  "Optimized for light to moderate traffic",
                ],
                help: [
                  "Complete setup & configuration",
                  "Performance tuning for stability",
                ],
              },
              {
                icon: FaLayerGroup,
                title: "Managed Hosting",
                best: "Ideal for business owners who want hands-off management.",
                benefits: [
                  "Fully managed infrastructure",
                  "Automatic updates & backups",
                  "Enhanced security monitoring",
                ],
                help: ["Server optimization", "Ongoing maintenance & support"],
              },
              {
                icon: FaDatabase,
                title: "VPS Hosting",
                best: "Best for growing websites needing more control.",
                benefits: [
                  "Dedicated virtual resources",
                  "Improved performance & flexibility",
                  "Scalable server environment",
                ],
                help: [
                  "VPS configuration & setup",
                  "Advanced performance tuning",
                ],
              },
              {
                icon: FaCloud,
                title: "Cloud Hosting",
                best: "Designed for fast-scaling businesses.",
                benefits: [
                  "High availability architecture",
                  "Load-balanced performance",
                  "Flexible resource allocation",
                ],
                help: ["Cloud environment setup", "Traffic surge optimization"],
              },
              {
                icon: FaCogs,
                title: "Dedicated Hosting",
                best: "Built for enterprise-level performance.",
                benefits: [
                  "Complete server control",
                  "Maximum performance & speed",
                  "Custom security configuration",
                ],
                help: [
                  "Full server deployment",
                  "Continuous monitoring & management",
                ],
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
            group relative
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-3xl p-8
            shadow-lg shadow-black/40
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-[0_25px_60px_rgba(37,186,255,0.35)]
          "
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#25baff] to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-[#25baff]/30">
                    <Icon className="text-white text-2xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Best For */}
                  <p className="text-gray-400 text-sm mb-5">{item.best}</p>

                  {/* Benefits */}
                  <div className="mb-4">
                    <p className="text-[#25baff] text-sm font-semibold mb-2">
                      Key Benefits
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {item.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-[#25baff] mt-1 text-xs" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Help */}
                  <div>
                    <p className="text-[#25baff] text-sm font-semibold mb-2">
                      How We Help
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {item.help.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-[#25baff] mt-1 text-xs" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-32 relative overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#020202]">
            How Our Website Hosting
            <span className="text-[#25baff]"> Management Works</span>
          </h2>
          <div className="w-24 h-1 bg-[#25baff] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 space-y-20">
          {[
            {
              icon: FaLightbulb,
              title: "Discovery & Strategy Planning",
              text: "We analyze your business goals, expected traffic, and technical needs to design a hosting strategy built for performance and long-term growth.",
            },
            {
              icon: FaServer,
              title: "Platform Selection & Architecture",
              text: "We choose the right hosting environment that balances scalability, speed, and security for sustainable website performance.",
            },
            {
              icon: FaCogs,
              title: "Hosting & Domain Configuration",
              text: "From DNS setup to database integration, we configure everything precisely so your website launches without technical friction.",
            },
            {
              icon: FaShieldAlt,
              title: "Security, Speed & Backup Optimization",
              text: "SSL, firewalls, CDN, caching layers, and automated backups ensure maximum protection and high-speed performance.",
            },
            {
              icon: FaChartLine,
              title: "Continuous Monitoring",
              text: "We monitor uptime, traffic, and performance metrics to detect and resolve issues before they impact your business.",
            },
            {
              icon: FaTachometerAlt,
              title: "Dashboard Access & Ongoing Support",
              text: "You receive secure dashboard access and continuous expert support for scaling, updates, and technical assistance.",
            },
          ].map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${!isEven ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#25baff] to-blue-500 flex items-center justify-center shadow-lg shadow-[#25baff]/30 transition-all duration-500">
                    <Icon className="text-white text-3xl" />
                  </div>
                  <span className="absolute -bottom-4 -right-4 text-6xl font-extrabold text-[#25baff]/10">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="
            bg-white/80 backdrop-blur-lg 
            border border-gray-200
            rounded-3xl 
            p-10 
            max-w-2xl
            shadow-lg shadow-gray-200/60
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-2xl hover:shadow-[#25baff]/80
          "
                >
                  <h3 className="text-2xl font-bold text-[#020202] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-28">
        {/* Heading */}
        <div className="text-center mb-20 px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#020202]">
            Our Website Hosting Supports
            <span className="text-[#25baff]"> Every CMS</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Whether you're building a business website, blog, or eCommerce
            store, our hosting infrastructure is optimized for performance,
            security, and scalability across all major CMS platforms.
          </p>
          <div className="w-24 h-1 bg-[#25baff] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* CMS Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: FaWordpress,
                name: "WordPress",
                text: "Optimized for WordPress websites with advanced caching, automatic updates, and enhanced security layers to ensure fast load times and smooth performance.",
              },
              {
                icon: FaMagento,
                name: "Magento",
                text: "High-performance hosting built for Magento stores, supporting large product catalogs, secure transactions, and scalable eCommerce growth.",
              },
              {
                icon: FaShopify,
                name: "Shopify",
                text: "Seamless integration support for Shopify businesses needing advanced domain management, DNS configuration, and performance reliability.",
              },
              {
                icon: FaJoomla,
                name: "Joomla",
                text: "Reliable hosting tailored for Joomla sites with optimized server configurations for better flexibility, security, and speed.",
              },
              {
                icon: SiWoocommerce,
                name: "WooCommerce",
                iconSize: "text-5xl",
                text: "eCommerce-ready hosting for WooCommerce stores with database optimization, caching systems, and secure payment environment support.",
              },
              {
                icon: SiWix,
                name: "Wix",
                text: "Domain, DNS, and integration assistance for Wix users ensuring stable performance and smooth website accessibility.",
              },
              {
                icon: FaDrupal,
                name: "Drupal",
                text: "Enterprise-grade hosting support for Drupal platforms with secure configurations and scalable infrastructure.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
            group bg-white 
            border border-gray-200
            rounded-3xl 
            p-8 
            shadow-lg shadow-gray-200/60
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-[0_20px_60px_rgba(37,186,255,0.35)]
          "
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#25baff] to-blue-600 flex items-center justify-center mb-6 shadow-md shadow-[#25baff]/30">
                    <Icon
                      className={`${item.iconSize || "text-2xl"} text-white`}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#020202] mb-3">
                    {item.name}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
            Frequently Asked
            <span className="text-[#25baff]"> Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="gsap-item bg-white border border-gray-200 rounded-2xl
                shadow-lg shadow-[#25baff]/20
                hover:shadow-2xl hover:shadow-[#25baff]/40
                hover:border-[#25baff]
                transition-all duration-300"
              >
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                      });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prevEl = faqRefs.current[activeFaq];
                        const prevContent =
                          prevEl.querySelector(".faq-content");

                        gsap.to(prevContent, {
                          height: 0,
                          opacity: 0,
                          duration: 0.3,
                          ease: "power2.inOut",
                        });
                      }

                      gsap.to(content, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                      });

                      setActiveFaq(index);
                    }
                  }}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#020202]"
                >
                  <span
                    className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
                      } transition-colors duration-300`}
                  >
                    {faq.question}
                  </span>

                  {activeFaq === index ? (
                    <FiMinus className="text-[#25baff] text-xl" />
                  ) : (
                    <FiPlus className="text-gray-500 text-xl" />
                  )}
                </button>

                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
                  <p className="pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteHosting;
