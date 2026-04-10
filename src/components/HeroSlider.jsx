import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Banner1 from "../assets/banner1.jfif";
import Banner2 from "../assets/banner2.jfif";
import Banner3 from "../assets/banner3.jfif";

const heroSlides = [
    {
        title: "Web Design &\nDevelopment Services",
        description:
            "We design and develop beautiful, conversion-focused websites and applications that scale with your business.",
        image: Banner3,
        accent: "#25baff",
    },
    {
        title: "Scalable MERN Stack\nSolutions",
        description:
            "High-performance applications built using React, Node.js, and MongoDB.",
        image: Banner1,
        accent: "#a8d97c",
    },
    {
        title: "Grow Your Business\nDigitally",
        description:
            "From idea to launch, we help brands build digital products that convert.",
        image: Banner2,
        accent: "#25baff",
    },
];

/* ── floating code snippets ── */
const CODE_LINES = [
    `const app = express();`,
    `app.use(cors());`,
    `mongoose.connect(DB_URI);`,
    `<Route path="/home" element={<Home />} />`,
    `useState(false)`,
    `useEffect(() => { fetchData(); }, []);`,
    `res.status(200).json({ success: true });`,
    `npm run build`,
    `git push origin main`,
    `const [data, setData] = useState([]);`,
    `import React from 'react';`,
    `tailwind.config.js`,
    `async function fetchAPI(url) {`,
    `  const res = await fetch(url);`,
    `  return res.json();`,
    `}`,
    `db.collection('users').find({})`,
    `JWT.sign(payload, SECRET)`,
    `bcrypt.hash(password, 10)`,
    `<motion.div animate={{opacity:1}}>`,
    `schema.pre('save', async fn)`,
    `router.get('/api/data', handler)`,
    `Socket.on('connect', () => {})`,
    `npm install --save-dev`,
    `vercel --prod`,
];

function FloatingCodeBg() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const count = 18;
        const items = Array.from({ length: count }, (_, i) => ({
            id: i,
            text: CODE_LINES[i % CODE_LINES.length],
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 14 + Math.random() * 20,
            delay: Math.random() * 10,
            opacity: 0.07 + Math.random() * 0.13,
            size: 11 + Math.random() * 4,
            dir: Math.random() > 0.5 ? 1 : -1,
        }));
        setParticles(items);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: "absolute",
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        fontFamily: "'Fira Code', 'Courier New', monospace",
                        fontSize: `${p.size}px`,
                        color: p.id % 3 === 0 ? "#25baff" : p.id % 3 === 1 ? "#a8d97c" : "#ffffff",
                        opacity: p.opacity,
                        whiteSpace: "nowrap",
                        animation: `floatCode${p.dir > 0 ? "R" : "L"} ${p.duration}s ${p.delay}s linear infinite`,
                        textShadow:
                            p.id % 3 === 0
                                ? "0 0 8px #25baff88"
                                : p.id % 3 === 1
                                    ? "0 0 8px #a8d97c88"
                                    : "none",
                    }}
                >
                    {p.text}
                </div>
            ))}

            <style>{`
                @keyframes floatCodeR {
                    0%   { transform: translateX(-60px) translateY(0px);   opacity: 0; }
                    5%   { opacity: 1; }
                    95%  { opacity: 1; }
                    100% { transform: translateX(80px) translateY(-40px);  opacity: 0; }
                }
                @keyframes floatCodeL {
                    0%   { transform: translateX(60px) translateY(0px);    opacity: 0; }
                    5%   { opacity: 1; }
                    95%  { opacity: 1; }
                    100% { transform: translateX(-80px) translateY(40px);  opacity: 0; }
                }
            `}</style>
        </div>
    );
}

/* ── typewriter hook ── */
function useTypewriter(text, speed = 45, active = true) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!active) {
            setDisplayed("");
            setDone(false);
            return;
        }
        setDisplayed("");
        setDone(false);
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, active]);

    return { displayed, done };
}

/* ── live code block on right side ── */
const SLIDE_CODES = [
    [
        { text: `import React from 'react';`, color: "#a8d97c" },
        { text: `import { useState } from 'react';`, color: "#a8d97c" },
        { text: ``, color: "" },
        { text: `function WebGuider() {`, color: "#25baff" },
        { text: `  const [launched, setLaunched]`, color: "#fff" },
        { text: `    = useState(false);`, color: "#fff" },
        { text: ``, color: "" },
        { text: `  return (`, color: "#25baff" },
        { text: `    <App growth="100%" />`, color: "#ff9d4d" },
        { text: `  );`, color: "#25baff" },
        { text: `}`, color: "#25baff" },
        { text: ``, color: "" },
        { text: `export default WebGuider;`, color: "#a8d97c" },
    ],
    [
        { text: `const express = require('express');`, color: "#a8d97c" },
        { text: `const mongoose = require('mongoose');`, color: "#a8d97c" },
        { text: ``, color: "" },
        { text: `const app = express();`, color: "#25baff" },
        { text: `app.use(cors());`, color: "#fff" },
        { text: `app.use(express.json());`, color: "#fff" },
        { text: ``, color: "" },
        { text: `mongoose.connect(process.env.DB)`, color: "#ff9d4d" },
        { text: `  .then(() => console.log('✔ DB'))`, color: "#a8d97c" },
        { text: `  .catch(err => console.error(err));`, color: "#ff6b6b" },
        { text: ``, color: "" },
        { text: `app.listen(5000);`, color: "#25baff" },
    ],
    [
        { text: `// Deploy to production 🚀`, color: "#a8d97c" },
        { text: ``, color: "" },
        { text: `async function deploy(project) {`, color: "#25baff" },
        { text: `  await runTests();`, color: "#fff" },
        { text: `  await buildAssets();`, color: "#fff" },
        { text: `  await pushToVercel(project);`, color: "#fff" },
        { text: ``, color: "" },
        { text: `  return {`, color: "#25baff" },
        { text: `    status: 'live',`, color: "#ff9d4d" },
        { text: `    url: 'digitalwebguider.com',`, color: "#ff9d4d" },
        { text: `    uptime: '99.9%'`, color: "#a8d97c" },
        { text: `  };`, color: "#25baff" },
        { text: `}`, color: "#25baff" },
    ],
];

function LiveCodeBlock({ slideIndex, active }) {
    const lines = SLIDE_CODES[slideIndex] || SLIDE_CODES[0];
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        if (!active) { setVisibleLines(0); return; }
        setVisibleLines(0);
        let i = 0;
        const t = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= lines.length) clearInterval(t);
        }, 110);
        return () => clearInterval(t);
    }, [slideIndex, active]);

    return (
        <div
            style={{
                background: "rgba(2,2,2,0.82)",
                border: "1px solid rgba(37,186,255,0.25)",
                borderRadius: "16px",
                padding: "24px 28px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: "13px",
                lineHeight: "1.8",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 40px rgba(37,186,255,0.12), 0 2px 8px #00000088",
                minHeight: "280px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* top bar */}
            <div style={{ display: "flex", gap: "7px", marginBottom: "16px" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                    <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ marginLeft: "auto", color: "#ffffff44", fontSize: "11px" }}>
                    App.jsx
                </span>
            </div>

            {lines.slice(0, visibleLines).map((line, i) => (
                <div
                    key={i}
                    style={{
                        color: line.color || "#aaa",
                        opacity: 0,
                        animation: `fadeLineIn 0.3s ${i * 0.03}s forwards`,
                        display: "flex",
                        gap: "12px",
                    }}
                >
                    <span style={{ color: "#ffffff18", userSelect: "none", minWidth: "18px", textAlign: "right" }}>
                        {line.text ? i + 1 : ""}
                    </span>
                    <span>{line.text}</span>
                </div>
            ))}

            {/* blinking cursor */}
            {visibleLines < lines.length && (
                <div style={{ color: "#25baff", animation: "blink 0.8s infinite" }}>▋</div>
            )}

            <style>{`
                @keyframes fadeLineIn { from { opacity:0; transform:translateX(-6px); } to { opacity:1; transform:translateX(0); } }
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
            `}</style>
        </div>
    );
}

/* ══════════════════════════════
   MAIN HERO COMPONENT
══════════════════════════════ */
export default function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(null);
    const [transitioning, setTransitioning] = useState(false);

    const goTo = (idx) => {
        if (idx === activeSlide || transitioning) return;
        setTransitioning(true);
        setPrevSlide(activeSlide);
        setActiveSlide(idx);
        setTimeout(() => { setTransitioning(false); setPrevSlide(null); }, 700);
    };

    useEffect(() => {
        const t = setInterval(() => {
            setActiveSlide((prev) => {
                const next = (prev + 1) % heroSlides.length;
                setTransitioning(true);
                setPrevSlide(prev);
                setTimeout(() => { setTransitioning(false); setPrevSlide(null); }, 700);
                return next;
            });
        }, 5500);
        return () => clearInterval(t);
    }, []);

    const slide = heroSlides[activeSlide];
    const titleLines = slide.title.split("\n");

    const { displayed: line1, done: done1 } = useTypewriter(titleLines[0], 50, true);
    const { displayed: line2 } = useTypewriter(titleLines[1] || "", 50, done1);

    return (
        <header
            style={{
                background: "linear-gradient(135deg, #020202 0%, #061420 60%, #020202 100%)",
                color: "#fff",
                overflow: "hidden",
                position: "relative",
                minHeight: "580px",
            }}
        >
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "-80px", left: "-80px",
                width: "420px", height: "420px",
                background: "radial-gradient(circle, rgba(37,186,255,0.13) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "-60px", right: "10%",
                width: "340px", height: "340px",
                background: "radial-gradient(circle, rgba(168,217,124,0.10) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Floating code BG */}
            <FloatingCodeBg />

            {/* Grid overlay */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(37,186,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(37,186,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
                pointerEvents: "none",
            }} />

            <div style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "80px 24px 80px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
                position: "relative",
                zIndex: 10,
            }}
                className="hero-grid"
            >
                {/* LEFT — text */}
                <div>
                    {/* badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        background: "rgba(37,186,255,0.1)",
                        border: "1px solid rgba(37,186,255,0.3)",
                        borderRadius: "100px",
                        padding: "6px 16px",
                        marginBottom: "28px",
                        fontSize: "12px",
                        color: "#25baff",
                        fontFamily: "'Fira Code', monospace",
                        letterSpacing: "0.05em",
                    }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a8d97c", display: "inline-block", animation: "pulse 2s infinite" }} />
                        DIGITAL WEBGUIDER™
                    </div>

                    {/* Typewriter title */}
                    <h1 style={{
                        fontSize: "clamp(32px, 4vw, 54px)",
                        fontWeight: 800,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        marginBottom: "24px",
                        fontFamily: "'Sora', 'Segoe UI', sans-serif",
                        minHeight: "130px",
                    }}>
                        <span style={{ color: "#25baff" }}>
                            {line1}
                            {!done1 && <span style={{ animation: "blink 0.7s infinite", color: "#25baff" }}>|</span>}
                        </span>
                        <br />
                        <span style={{ color: "#ffffff" }}>
                            {done1 ? line2 : ""}
                            {done1 && line2.length < (titleLines[1] || "").length && (
                                <span style={{ animation: "blink 0.7s infinite", color: "#fff" }}>|</span>
                            )}
                        </span>
                    </h1>

                    <p style={{
                        fontSize: "16px",
                        color: "#94a3b8",
                        lineHeight: 1.75,
                        maxWidth: "480px",
                        marginBottom: "36px",
                        opacity: done1 ? 1 : 0,
                        transform: done1 ? "translateY(0)" : "translateY(10px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}>
                        {slide.description}
                    </p>

                    {/* CTAs */}
                    <div style={{
                        display: "flex", gap: "16px", flexWrap: "wrap",
                        opacity: done1 ? 1 : 0, transition: "opacity 0.7s 0.2s ease"
                    }}>
                        <Link
                            to="/services"
                            style={{
                                display: "inline-block",
                                background: "linear-gradient(135deg, #25baff, #0090d4)",
                                color: "#020202",
                                padding: "13px 28px",
                                borderRadius: "12px",
                                fontWeight: 700,
                                fontSize: "15px",
                                textDecoration: "none",
                                boxShadow: "0 4px 24px rgba(37,186,255,0.35)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,186,255,0.5)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,186,255,0.35)"; }}
                        >
                            Our Services →
                        </Link>
                        <Link
                            to="/contact"
                            style={{
                                display: "inline-block",
                                background: "transparent",
                                color: "#a8d97c",
                                border: "1px solid rgba(168,217,124,0.4)",
                                padding: "13px 28px",
                                borderRadius: "12px",
                                fontWeight: 600,
                                fontSize: "15px",
                                textDecoration: "none",
                                transition: "background 0.2s, border-color 0.2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(168,217,124,0.12)"; e.currentTarget.style.borderColor = "#a8d97c"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(168,217,124,0.4)"; }}
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Dots */}
                    <div style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
                        {heroSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                style={{
                                    width: i === activeSlide ? "32px" : "10px",
                                    height: "10px",
                                    borderRadius: "100px",
                                    background: i === activeSlide ? "#25baff" : "rgba(255,255,255,0.2)",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.4s ease",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT — Live code block */}
                <div style={{ position: "relative" }}>
                    {/* decorative corner accent */}
                    <div style={{
                        position: "absolute", top: -18, right: -18,
                        width: 80, height: 80,
                        border: "2px solid rgba(37,186,255,0.2)",
                        borderRadius: "16px",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute", bottom: -18, left: -18,
                        width: 60, height: 60,
                        border: "2px solid rgba(168,217,124,0.2)",
                        borderRadius: "12px",
                        pointerEvents: "none",
                    }} />

                    <LiveCodeBlock slideIndex={activeSlide} active={true} key={activeSlide} />

                    {/* floating tech tag */}
                    <div style={{
                        position: "absolute", bottom: -20, right: 24,
                        background: "rgba(168,217,124,0.15)",
                        border: "1px solid rgba(168,217,124,0.35)",
                        borderRadius: "100px",
                        padding: "6px 16px",
                        fontSize: "12px",
                        color: "#a8d97c",
                        fontFamily: "monospace",
                        backdropFilter: "blur(8px)",
                    }}>
                        ✓ Deployed · 99.9% uptime
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
                background: "linear-gradient(to bottom, transparent, rgba(2,2,2,0.6))",
                pointerEvents: "none",
            }} />

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.5; transform: scale(0.85); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0; }
                }
                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </header>
    );
}