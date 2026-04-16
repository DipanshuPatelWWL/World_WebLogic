import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Banner1 from "../assets/banner1.jfif";
import Banner2 from "../assets/banner2.jfif";
import Banner3 from "../assets/banner3.jfif";

/* ══════════════════════════════════════════
   SLIDE DATA
══════════════════════════════════════════ */
const heroSlides = [
    {
        title: "Web Design &\nDevelopment Services",
        subtitle: "THE", subtitleBold: "BUSINESS", subtitleEnd: "THAT WE ARE IN",
        bg: Banner3,
        accent: "#25baff", accentB: "#a78bff", accentC: "#ff80e0",
        orb1: "rgba(37,186,255,0.75)", orb2: "rgba(120,80,255,0.65)", orb3: "rgba(37,186,255,0.45)",
        glow1: "rgba(37,186,255,0.30)", badge: "WEB DESIGN", icon: "◈",
        tags: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Scalable MERN Stack\nSolutions",
        subtitle: "THE", subtitleBold: "TECHNOLOGY", subtitleEnd: "THAT POWERS YOU",
        bg: Banner1,
        accent: "#00ddb4", accentB: "#00aaff", accentC: "#80ffcc",
        orb1: "rgba(0,220,180,0.75)", orb2: "rgba(0,120,255,0.65)", orb3: "rgba(0,220,180,0.45)",
        glow1: "rgba(0,220,180,0.30)", badge: "MERN STACK", icon: "◉",
        tags: ["MongoDB", "Express", "Node.js"],
    },
    {
        title: "Grow Your Business\nDigitally",
        subtitle: "THE", subtitleBold: "BRAND VALUES", subtitleEnd: "THAT WE LIVE BY",
        bg: Banner2,
        accent: "#ff9d4d", accentB: "#ff4080", accentC: "#ffee40",
        orb1: "rgba(255,157,77,0.75)", orb2: "rgba(255,60,120,0.65)", orb3: "rgba(255,200,40,0.45)",
        glow1: "rgba(255,157,77,0.30)", badge: "DIGITAL GROWTH", icon: "◎",
        tags: ["SEO", "Branding", "Strategy"],
    },
];

/* ══════════════════════════════════════════
   CODE DATA — unique per slide
══════════════════════════════════════════ */
// const MAIN = [
//     [
//         { c: "#25baff", t: "Build modern web experiences {" },
//         { c: "#fff", t: "  Create fast and scalable apps;" },
//         { c: "#fff", t: "" },
//         { c: "#c792ea", t: "  Enhance user engagement {" },
//         { c: "#fff", t: "    Deliver smooth interactions;" },
//         { c: "#fff", t: "    Ensure high performance;" },
//         { c: "#c792ea", t: "  }" },
//         { c: "#fff", t: "" },
//         { c: "#25baff", t: "  Grow your digital presence;" },
//         { c: "#25baff", t: "}" },
//     ],
// ];
const LEFT = [
    [
        { c: "#ff9d4d", t: "project.config {" },
        { c: "#fff", t: "  framework: 'React'," },
        { c: "#fff", t: "  build: 'Optimized'," },
        { c: "#ff9d4d", t: "}" },
    ],
];
const RIGHT = [
    [
        { c: "#a8d97c", t: "Performance  100" },
        { c: "#a8d97c", t: "Accessibility 98" },
        { c: "#25baff", t: "SEO 100" },
        { c: "#ff9d4d", t: "Best Practices 95" },
    ],
];
// const MAIN_TITLES = ["Hero.jsx"];
const LEFT_LABELS = ["package.json"];
const RIGHT_LABELS = ["lighthouse"];

/* ══════════════════════════════════════════
   TITLE TYPEWRITER HOOK
══════════════════════════════════════════ */
function useTitleTypewriter(text, speed, run, resetKey) {
    const [out, setOut] = useState("");
    useEffect(() => {
        if (!run) return;
        setOut("");
        let i = 0;
        const start = setTimeout(() => {
            const iv = setInterval(() => {
                i++;
                setOut(text.slice(0, i));
                if (i >= text.length) clearInterval(iv);
            }, speed);
            return () => clearInterval(iv);
        }, 200);
        return () => clearTimeout(start);
    }, [resetKey, run, text, speed]);
    return out;
}

/* ══════════════════════════════════════════
   CODE TYPEWRITER WINDOW
══════════════════════════════════════════ */
function TypeCodeWindow({ lines, title, small = false, lineNumbers = false, delay = 0 }) {
    const [doneLines, setDoneLines] = useState([]);
    const [curLine, setCurLine] = useState(-1);
    const [curChars, setCurChars] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setCurLine(0), delay);
        return () => clearTimeout(t);
    }, [delay]);

    useEffect(() => {
        if (curLine < 0 || curLine >= lines.length) return;
        const line = lines[curLine];
        if (line.t.length === 0) {
            const t = setTimeout(() => {
                setDoneLines(d => [...d, curLine]);
                setCurLine(c => c + 1);
                setCurChars(0);
            }, 55);
            return () => clearTimeout(t);
        }
        if (curChars < line.t.length) {
            const t = setTimeout(() => setCurChars(c => c + 1), small ? 32 : 22);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => {
            setDoneLines(d => [...d, curLine]);
            setCurLine(c => c + 1);
            setCurChars(0);
        }, 75);
        return () => clearTimeout(t);
    }, [curLine, curChars, lines, small]);

    return (
        <div style={{
            background: "rgba(8,10,20,0.94)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: small ? 12 : 16,
            padding: small ? "10px 14px" : "18px 22px",
            fontFamily: "'Fira Code','Courier New',monospace",
            fontSize: small ? 11 : 13,
            lineHeight: 1.9,
            backdropFilter: "blur(18px)",
            boxShadow: "0 0 0 1px rgba(37,186,255,0.07), 0 16px 50px rgba(0,0,0,0.7)",
            minWidth: small ? 160 : 400,
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: small ? 9 : 14 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                    <div key={i} style={{ width: small ? 8 : 10, height: small ? 8 : 10, borderRadius: "50%", background: c }} />
                ))}
                <span style={{
                    marginLeft: "auto",
                    background: "rgba(37,186,255,0.10)", border: "1px solid rgba(37,186,255,0.18)",
                    borderRadius: 100, padding: "1px 9px",
                    fontSize: 10, color: "#25baff", letterSpacing: "0.06em",
                }}>{title}</span>
            </div>
            {doneLines.map(li => (
                <div key={li} style={{ display: "flex", gap: lineNumbers ? 10 : 0, alignItems: "baseline" }}>
                    {lineNumbers && (
                        <span style={{ color: "rgba(255,255,255,0.14)", minWidth: 18, textAlign: "right", userSelect: "none", fontSize: 10 }}>
                            {lines[li].t ? li + 1 : ""}
                        </span>
                    )}
                    <span style={{ color: lines[li].c || "#888" }}>{lines[li].t}</span>
                </div>
            ))}
            {curLine >= 0 && curLine < lines.length && (
                <div style={{ display: "flex", gap: lineNumbers ? 10 : 0, alignItems: "baseline" }}>
                    {lineNumbers && (
                        <span style={{ color: "rgba(255,255,255,0.14)", minWidth: 18, textAlign: "right", userSelect: "none", fontSize: 10 }}>
                            {lines[curLine].t ? curLine + 1 : ""}
                        </span>
                    )}
                    <span style={{ color: lines[curLine].c || "#888" }}>
                        {lines[curLine].t.slice(0, curChars)}
                        <span style={{ animation: "twCur 0.7s infinite", color: "#25baff" }}>█</span>
                    </span>
                </div>
            )}
        </div>
    );
}

function GhostRows({ rows, style }) {
    return (
        <div style={{
            background: "rgba(8,10,20,0.70)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10, padding: "8px 12px", backdropFilter: "blur(10px)", ...style,
        }}>
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.18)", flexShrink: 0 }} />
                    <div style={{
                        height: 6, borderRadius: 100, filter: "blur(1.5px)",
                        background: "rgba(255,255,255,0.09)",
                        width: `${50 + Math.sin(i * 2.7) * 28}%`,
                    }} />
                </div>
            ))}
        </div>
    );
}

function CodeLayer() {
    return (
        <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none" }}>
            <div style={{ position: "absolute", left: "3%", bottom: "12%", opacity: 0.88 }}>
                <div style={{
                    background: "rgba(8,10,20,0.85)", border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 8, padding: "5px 12px", marginBottom: 5,
                    fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.50)",
                    backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 6,
                }}>
                    <div style={{ width: 6, height: 6, borderRadius: 2, background: "rgba(37,186,255,0.7)" }} />
                    {LEFT_LABELS[0]}
                </div>
                <TypeCodeWindow lines={LEFT[0]} title={LEFT_LABELS[0]} small delay={350} />
                <GhostRows rows={4} style={{ marginTop: 5 }} />
            </div>

            {/* <div style={{ position: "absolute", left: "50%", bottom: "5%", transform: "translateX(-50%)", opacity: 0.95 }}>
                <TypeCodeWindow lines=
                {MAIN[0]}
                 title={MAIN_TITLES[0]}
                  lineNumbers delay={0} />
                <div style={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 200, height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 100 }}>
                        <div style={{ width: 80, height: 4, background: "rgba(37,186,255,0.28)", borderRadius: 100 }} />
                    </div>
                </div>
            </div> */}

            <div style={{ position: "absolute", right: "3%", bottom: "14%", opacity: 0.85 }}>
                <div style={{
                    background: "rgba(8,10,20,0.85)", border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 8, padding: "5px 12px", marginBottom: 5,
                    fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.50)",
                    backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 6,
                }}>
                    <div style={{ width: 6, height: 6, borderRadius: 2, background: "rgba(168,217,124,0.7)" }} />
                    {RIGHT_LABELS[0]}
                </div>
                <TypeCodeWindow lines={RIGHT[0]} title={RIGHT_LABELS[0]} small lineNumbers delay={700} />
                <GhostRows rows={5} style={{ marginTop: 5 }} />
            </div>

            <GhostRows rows={3} style={{ position: "absolute", left: "2%", top: "14%", minWidth: 130, opacity: 0.38 }} />
            <GhostRows rows={5} style={{ position: "absolute", right: "2%", top: "18%", minWidth: 110, opacity: 0.32 }} />
        </div>
    );
}

/* ══════════════════════════════════════════
   BACKGROUND ORBS (glassmorphism layer)
══════════════════════════════════════════ */
function GlassOrbs({ slide: s }) {
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }}>
            <div style={{
                position: "absolute", top: "-8%", left: "35%", width: 460, height: 460,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${s.orb1} 0%, transparent 65%)`,
                filter: "blur(72px)", opacity: 0.45,
                animation: "orbDrift1 14s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", top: "25%", right: "-4%", width: 360, height: 360,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${s.orb2} 0%, transparent 65%)`,
                filter: "blur(65px)", opacity: 0.4,
                animation: "orbDrift2 17s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", bottom: "-10%", left: "8%", width: 320, height: 320,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${s.orb3} 0%, transparent 65%)`,
                filter: "blur(80px)", opacity: 0.35,
                animation: "orbDrift3 11s ease-in-out infinite",
            }} />
        </div>
    );
}

/* ══════════════════════════════════════════
   FLOATING GLASS CHIPS (corner decorations)
══════════════════════════════════════════ */
function FloatingChips({ slide: s, animKey }) {
    return (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 6 }}>
            {/* Top-left chip */}
            <div
                key={animKey + "-chip1"}
                style={{
                    position: "absolute", top: "18%", left: "3%",
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.07)",
                    border: `1px solid ${s.accent}30`,
                    borderRadius: 100, padding: "6px 14px",
                    backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)`,
                    animation: "chipFloat1 3.5s ease-in-out infinite, chipFadeIn 0.6s 0.3s both",
                    opacity: 0,
                }}
            >
                <span style={{ fontSize: "0.65rem", color: s.accent, textShadow: `0 0 8px ${s.accent}` }}>{s.icon}</span>
                <span style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.85)", letterSpacing: "0.12em" }}>{s.badge}</span>
            </div>

            {/* Bottom-right chip */}
            <div
                key={animKey + "-chip2"}
                style={{
                    position: "absolute", bottom: "22%", right: "3%",
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.07)",
                    border: `1px solid ${s.accentB}30`,
                    borderRadius: 100, padding: "6px 14px",
                    backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)`,
                    animation: "chipFloat2 4s ease-in-out infinite, chipFadeIn 0.6s 0.6s both",
                    opacity: 0,
                }}
            >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.accentB, boxShadow: `0 0 8px ${s.accentB}` }} />
                <span style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.85)", letterSpacing: "0.12em" }}>LIVE</span>
            </div>

            {/* Tag pills — left side vertical */}
            <div
                key={animKey + "-tags"}
                style={{
                    position: "absolute", left: "2%", top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex", flexDirection: "column", gap: 8,
                    animation: "chipFadeIn 0.6s 0.8s both", opacity: 0,
                }}
            >
                {s.tags.map((tag, i) => (
                    <div
                        key={tag}
                        style={{
                            padding: "4px 12px", borderRadius: 99,
                            border: `1px solid ${s.accent}35`,
                            background: `${s.accent}0c`,
                            color: `${s.accent}cc`,
                            fontFamily: "'Fira Code',monospace", fontSize: "0.58rem",
                            letterSpacing: "0.12em",
                            backdropFilter: "blur(10px)",
                            animation: `chipFloat${(i % 2) + 1} ${3 + i * 0.5}s ease-in-out infinite`,
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════
   RIGHT GLASS PANEL — stat cards
══════════════════════════════════════════ */
function RightGlassPanel({ slide: s, animKey }) {
    const stats = [["SPEED", "98"], ["SEO", "100"], ["UX", "96"]];

    return (
        <div
            key={animKey + "-rgp"}
            style={{
                position: "absolute", right: "2%", top: "50%",
                transform: "translateY(-50%)",
                display: "flex", flexDirection: "column", gap: 8,
                zIndex: 6, pointerEvents: "none",
                animation: "slideInRight 0.7s 0.4s both",
                opacity: 0,
            }}
        >
            {/* Status card */}
            <div style={{
                background: "rgba(8,10,20,0.80)", border: `1px solid ${s.accent}25`,
                borderRadius: 12, padding: "12px 14px",
                backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                boxShadow: `0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
                minWidth: 140,
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <div style={{
                        width: 7, height: 7, borderRadius: "50%",
                        background: s.accent, boxShadow: `0 0 8px ${s.accent}`,
                        animation: "ping 2s infinite",
                    }} />
                    <span style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.48rem", color: `${s.accent}cc`, letterSpacing: "0.2em" }}>STATUS</span>
                </div>
                <div style={{ fontFamily: "'Fira Code',monospace", fontWeight: 600, fontSize: "0.7rem", color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em" }}>ONLINE</div>
            </div>

            {/* Performance bars */}
            <div style={{
                background: "rgba(8,10,20,0.80)", border: `1px solid ${s.accentB}20`,
                borderRadius: 12, padding: "12px 14px",
                backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                boxShadow: `0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
                minWidth: 140,
            }}>
                <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.46rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em", marginBottom: 8 }}>PERFORMANCE</div>
                {stats.map(([label, val]) => (
                    <div key={label} style={{ marginBottom: 7 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                            <span style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.54rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>{label}</span>
                            <span style={{ fontFamily: "'Fira Code',monospace", fontWeight: 700, fontSize: "0.46rem", color: s.accent }}>{val}%</span>
                        </div>
                        <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden" }}>
                            <div style={{
                                height: "100%", background: `linear-gradient(90deg,${s.accent},${s.accentB})`,
                                borderRadius: 99, boxShadow: `0 0 6px ${s.accent}`,
                                width: val + "%", transition: "width 1s 0.8s ease-out",
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Orbit badge */}
            <div style={{
                background: "rgba(8,10,20,0.80)", border: `1px solid ${s.accentC}20`,
                borderRadius: 12, padding: "10px 14px",
                backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                boxShadow: `0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`,
                display: "flex", alignItems: "center", gap: 10, minWidth: 140,
            }}>
                <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    border: `1.5px solid ${s.accent}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 0 10px ${s.accent}40`,
                    animation: "rotateSlow 12s linear infinite",
                }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.accent, boxShadow: `0 0 6px ${s.accent}` }} />
                </div>
                <div>
                    <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.44rem", color: "rgba(255,255,255,0.38)", letterSpacing: "0.14em", marginBottom: 2 }}>VERIFIED</div>
                    <div style={{ fontFamily: "'Fira Code',monospace", fontWeight: 600, fontSize: "0.54rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em" }}>AI CERTIFIED</div>
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════
   GLASS BORDER FRAME
══════════════════════════════════════════ */
function GlassFrame({ slide: s }) {
    return (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 5 }}>
            {/* Corner brackets */}
            {[
                { top: 12, left: 12, borderTop: true, borderLeft: true },
                { top: 12, right: 12, borderTop: true, borderRight: true },
                { bottom: 12, left: 12, borderBottom: true, borderLeft: true },
                { bottom: 12, right: 12, borderBottom: true, borderRight: true },
            ].map((c, i) => (
                <div key={i} style={{
                    position: "absolute", width: 24, height: 24,
                    top: c.top, bottom: c.bottom, left: c.left, right: c.right,
                    borderTop: c.borderTop ? `2px solid ${s.accent}50` : "none",
                    borderBottom: c.borderBottom ? `2px solid ${s.accent}50` : "none",
                    borderLeft: c.borderLeft ? `2px solid ${s.accent}50` : "none",
                    borderRight: c.borderRight ? `2px solid ${s.accent}50` : "none",
                    boxShadow: `0 0 8px ${s.accent}30`,
                }} />
            ))}

            {/* Top edge glow line */}
            <div style={{
                position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
                background: `linear-gradient(90deg, transparent, ${s.accent}60, ${s.accentB}60, transparent)`,
                boxShadow: `0 0 10px ${s.accent}40`,
            }} />

            {/* Bottom edge glow line */}
            <div style={{
                position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
                background: `linear-gradient(90deg, transparent, ${s.accentB}50, ${s.accent}50, transparent)`,
            }} />
        </div>
    );
}

/* ══════════════════════════════════════════
   MAIN HERO SLIDER
══════════════════════════════════════════ */
export default function HeroSlider2() {
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const activeRef = useRef(0);

    const go = (idx) => {
        const n = ((idx % heroSlides.length) + heroSlides.length) % heroSlides.length;
        activeRef.current = n;
        setActive(n);
        setAnimKey(k => k + 1);
    };

    useEffect(() => {
        const duration = active === 2 ? 8500 : 4500;
        const t = setTimeout(() => { go(activeRef.current + 1); }, duration);
        return () => clearTimeout(t);
    }, [active]);

    const slide = heroSlides[active];
    const titleLines = slide.title.split("\n");

    const [l1done, setL1done] = useState(false);
    useEffect(() => {
        setL1done(false);
        const t = setTimeout(() => setL1done(true), titleLines[0].length * 35 + 120);
        return () => clearTimeout(t);
    }, [animKey]);

    const tw1 = useTitleTypewriter(titleLines[0], 35, true, animKey + "-delay");
    const tw2 = useTitleTypewriter(titleLines[1] || "", 35, l1done, animKey);

    return (
        <header style={{ position: "relative", height: 560, overflow: "hidden", background: "#030508" }}>

            {/* ── Background images ── */}
            {heroSlides.map((s, i) => (
                <div key={i} style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `url(${s.bg})`,
                    backgroundSize: "cover", backgroundPosition: "center",
                    opacity: i === active ? 1 : 0,
                    transition: "opacity 1.2s ease",
                    zIndex: 0,
                }} />
            ))}

            {/* Dark overlay */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "linear-gradient(to bottom, rgba(3,5,8,0.88) 0%, rgba(3,5,8,0.68) 45%, rgba(3,5,8,0.85) 100%)",
            }} />

            {/* ── Glassmorphism Orbs (NEW) ── */}
            <GlassOrbs slide={slide} key={active + "-orbs"} />

            {/* Grid texture */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
                backgroundImage: `
          linear-gradient(rgba(37,186,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,186,255,0.03) 1px, transparent 1px)
        `,
                backgroundSize: "56px 56px",
            }} />

            {/* Glow accent */}
            <div style={{
                position: "absolute", top: -80, left: "22%", zIndex: 3, pointerEvents: "none",
                width: 480, height: 280,
                background: `radial-gradient(ellipse, ${slide.glow1} 0%, transparent 70%)`,
                transition: "background 1.2s ease",
            }} />

            {/* ── Glass corner frame (NEW) ── */}
            <GlassFrame slide={slide} />

            {/* ── Code Layer — slide 3 only ── */}
            {active === 2 && <CodeLayer key={animKey} />}

            {/* ── Floating Glass Chips (NEW) ── */}
            {active !== 2 && <FloatingChips slide={slide} animKey={animKey} />}

            {/* ── Right Glass Panel (NEW) ── */}
            {active !== 2 && <RightGlassPanel slide={slide} animKey={animKey} />}

            {/* ── HERO TEXT ── */}
            <div style={{
                position: "relative", zIndex: 10,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                minHeight: 620, textAlign: "center",
                padding: "80px 40px 130px",
            }}>


                {/* Animated tag pill */}
                <div
                    key={animKey + "-tag"}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: `${slide.accent}12`,
                        border: `1px solid ${slide.accent}35`,
                        borderRadius: 100, padding: "5px 18px",
                        fontSize: 12, color: slide.accent,
                        fontFamily: "'Fira Code',monospace",
                        letterSpacing: "0.14em", marginBottom: 26,
                        animation: "fadeUp 0.5s 0.1s both",
                        transition: "color 0.6s ease, border-color 0.6s ease, background 0.6s ease",
                        boxShadow: `0 0 12px ${slide.accent}20`,
                    }}
                >
                    <span style={{
                        width: 10, height: 10, borderRadius: "50%",
                        background: slide.accent,
                        boxShadow: `0 0 8px ${slide.accent}`,
                        flexShrink: 0,
                        animation: "ping 2s infinite",
                    }} />
                    DIGITAL WEBGUIDER™
                </div>

                {/* Title */}
                <h1
                    key={animKey + "-h1"}
                    style={{
                        fontSize: "clamp(36px,5.5vw,70px)",
                        fontWeight: 800, color: "#fff",
                        lineHeight: 1.12, marginBottom: 20,
                        fontFamily: "'Sora','Segoe UI',sans-serif",
                        letterSpacing: "-0.025em",
                        textShadow: "0 2px 40px rgba(0,0,0,0.95)",
                        minHeight: "2.5em",
                    }}
                >
                    <span style={{ color: "#ffffff" }}>
                        {tw1}
                        {!l1done && <span style={{ animation: "twBlink 0.7s infinite" }}>|</span>}
                    </span>
                    <br />
                    <span style={{ color: slide.accent, transition: "color 1s ease" }}>
                        {l1done && tw2}
                        {l1done && tw2.length < (titleLines[1] || "").length && (
                            <span style={{ animation: "twBlink 0.7s infinite", color: slide.accent }}>|</span>
                        )}
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    key={animKey + "-sub"}
                    style={{
                        fontSize: "clamp(11px,1.4vw,15px)",
                        letterSpacing: "0.22em", color: "rgba(255,255,255,0.60)",
                        marginBottom: 44,
                        animation: "fadeUp 0.5s 0.35s both",
                    }}
                >
                    {slide.subtitle}&nbsp;
                    <strong style={{ color: "#fff", fontWeight: 700, letterSpacing: "0.22em" }}>
                        {slide.subtitleBold}
                    </strong>
                    &nbsp;{slide.subtitleEnd}
                </p>

                {/* Buttons */}
                <div
                    key={animKey + "-btns"}
                    style={{
                        display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
                        animation: "fadeUp 0.5s 0.55s both",
                    }}
                >
                    <Link to="/free-consultation" className="hwbtn hwbtn-outline">GET A QUOTE</Link>
                    <Link
                        to="/contact"
                        className="hwbtn"
                        style={{
                            border: `2px solid ${slide.accent}`,
                            background: slide.accent,
                            color: "#000",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = slide.accent;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = slide.accent;
                            e.currentTarget.style.color = "#000";
                        }}
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>


            {/* Arrows */}
            <button
                className="hwarrow hwarrow-l"
                onClick={() => go(active - 1)}
                style={{
                    position: "absolute", top: "50%", left: 20,
                    transform: "translateY(-50%)",
                    width: 48, height: 48, borderRadius: "50%",
                    border: `1.5px solid ${slide.accent}60`,
                    background: `${slide.accent}12`,
                    color: slide.accent,
                    fontSize: 26, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    lineHeight: 1,
                    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                    boxShadow: `0 0 16px ${slide.accent}25, inset 0 1px 0 rgba(255,255,255,0.1)`,
                    transition: "all 0.25s ease",
                    zIndex: 20,
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = `${slide.accent}35`;
                    e.currentTarget.style.borderColor = slide.accent;
                    e.currentTarget.style.boxShadow = `0 0 24px ${slide.accent}50, inset 0 1px 0 rgba(255,255,255,0.15)`;
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = `${slide.accent}12`;
                    e.currentTarget.style.borderColor = `${slide.accent}60`;
                    e.currentTarget.style.boxShadow = `0 0 16px ${slide.accent}25, inset 0 1px 0 rgba(255,255,255,0.1)`;
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
            >
                &#8249;
            </button>

            <button
                className="hwarrow hwarrow-r"
                onClick={() => go(active + 1)}
                style={{
                    position: "absolute", top: "50%", right: 20,
                    transform: "translateY(-50%)",
                    width: 48, height: 48, borderRadius: "50%",
                    border: `1.5px solid ${slide.accent}60`,
                    background: `${slide.accent}12`,
                    color: slide.accent,
                    fontSize: 26, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    lineHeight: 1,
                    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                    boxShadow: `0 0 16px ${slide.accent}25, inset 0 1px 0 rgba(255,255,255,0.1)`,
                    transition: "all 0.25s ease",
                    zIndex: 20,
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = `${slide.accent}35`;
                    e.currentTarget.style.borderColor = slide.accent;
                    e.currentTarget.style.boxShadow = `0 0 24px ${slide.accent}50, inset 0 1px 0 rgba(255,255,255,0.15)`;
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = `${slide.accent}12`;
                    e.currentTarget.style.borderColor = `${slide.accent}60`;
                    e.currentTarget.style.boxShadow = `0 0 16px ${slide.accent}25, inset 0 1px 0 rgba(255,255,255,0.1)`;
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
            >
                &#8250;
            </button>

            {/* Dots */}
            <div style={{
                position: "absolute", bottom: 22, left: "50%",
                transform: "translateX(-50%)",
                display: "flex", gap: 8, zIndex: 20,
            }}>
                {heroSlides.map((_, i) => (
                    <button key={i} onClick={() => go(i)} style={{
                        width: i === active ? 30 : 9, height: 9,
                        borderRadius: 100, border: "none", cursor: "pointer", padding: 0,
                        background: i === active ? slide.accent : "rgba(255,255,255,0.25)",
                        transition: "all 0.35s ease",
                        boxShadow: i === active ? `0 0 8px ${slide.accent}` : "none",
                    }} />
                ))}
            </div>

            {/* Slide counter */}
            <div style={{
                position: "absolute", bottom: 26, right: 28, zIndex: 20,
                fontFamily: "'Fira Code',monospace", fontSize: 12,
                color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em",
            }}>
                {String(active + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </div>
        </header>
    );
}
