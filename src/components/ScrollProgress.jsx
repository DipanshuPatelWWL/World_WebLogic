import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percent = (scrollTop / docHeight) * 100;
            setScrollPercent(percent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
            <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-200"
                style={{ width: `${scrollPercent}%` }}
            />
        </div>
    );
}