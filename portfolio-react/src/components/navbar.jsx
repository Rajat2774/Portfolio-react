import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext';

// Change this to anything unique to your site — free, no-signup counter API.
const LIKE_KEY = "rajatsingh2774-portfolio-likes";
const COUNTAPI_BASE = "https://countapi.mileshilliard.com/api/v1";

function LikeButton({ theme }) {
    const [count, setCount] = useState(null);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(localStorage.getItem("portfolio-liked") === "true");

        fetch(`${COUNTAPI_BASE}/get/${LIKE_KEY}`)
            .then((res) => (res.status === 404 ? { value: 0 } : res.json()))
            .then((data) => setCount(Number(data.value) || 0))
            .catch(() => setCount(0));
    }, []);

    const handleClick = async () => {
        if (count === null) return;

        if (!liked) {
            setLiked(true);
            setCount((c) => c + 1);
            localStorage.setItem("portfolio-liked", "true");
            try {
                await fetch(`${COUNTAPI_BASE}/hit/${LIKE_KEY}`);
            } catch {
                // optimistic count already shown, safe to ignore
            }
        } else {
            const next = Math.max(0, count - 1);
            setLiked(false);
            setCount(next);
            localStorage.setItem("portfolio-liked", "false");
            try {
                await fetch(`${COUNTAPI_BASE}/set/${LIKE_KEY}?value=${next}`);
            } catch {
                // ignore
            }
        }
    };

    return (
        <button
            onClick={handleClick}
            aria-label={liked ? "Unlike this portfolio" : "Like this portfolio"}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm transition-colors ${
                theme === 'dark'
                    ? 'text-neutral-300 hover:bg-neutral-800'
                    : 'text-neutral-600 hover:bg-sky-100'
            }`}
        >
            <motion.span
                animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.35 }}
                className={liked ? "text-pink-500" : ""}
            >
                <FontAwesomeIcon icon={faHeart} />
            </motion.span>
            <span className="min-w-[1ch] tabular-nums">{count === null ? "…" : count}</span>
        </button>
    );
}

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { scrollYProgress } = useScroll();

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className={`relative overflow-hidden flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 ${
                theme === 'dark'
                    ? 'border-neutral-800 bg-neutral-950/70 shadow-purple-500/5'
                    : 'border-neutral-200 bg-white/80 shadow-sky-500/5'
            }`}>
                {/* scroll progress — pinned to the pill's bottom edge, same width, clipped by overflow-hidden + rounded-full above */}
                <motion.div
                    className={`absolute inset-x-0 bottom-0 h-[3px] origin-left ${
                        theme === 'dark'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            : 'bg-gradient-to-r from-sky-400 to-cyan-400'
                    }`}
                    style={{ scaleX: scrollYProgress }}
                />

                <div className="flex flex-shrink-0 items-center text-2xl">
                    <a href="#home">
                        <img src={logo} alt="logo" height={40} width={40} className="rounded-full" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-4 absolute left-1/2 -translate-x-1/2">
                    {['Home', 'About', 'Skills', 'Experience', 'Project', 'Contact'].map((label) => {
                        const href = label === 'Home' ? '#home'
                            : label === 'Skills' ? '#tech'
                            : `#${label.toLowerCase()}`;
                        return (
                            <a
                                key={label}
                                href={href}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                    theme === 'dark'
                                        ? 'text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50'
                                        : 'text-neutral-600 hover:text-sky-500 hover:border border-sky-300'
                                }`}
                            >
                                {label}
                            </a>
                        );
                    })}
                </div>

                {/* Right side: like counter + theme toggle + mobile menu */}
                <div className="flex items-center gap-2">
                    <LikeButton theme={theme} />

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`p-2 rounded-full transition-all duration-300 ${
                            theme === 'dark'
                                ? 'text-yellow-300 hover:bg-neutral-800'
                                : 'text-sky-500 hover:bg-sky-100'
                        }`}
                    >
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-lg" />
                    </button>

                    {/* Mobile hamburger */}
                    <div className="lg:hidden">
                        <button
                            className={`p-1.5 focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}
                            onClick={() => setSidebarOpen(true)}
                            aria-label="Open Menu"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                {sidebarOpen && (
                    <div
                        className={`fixed top-0 left-0 w-64 h-screen z-50 transition-transform duration-300 border-r ${
                            theme === 'dark'
                                ? 'bg-black bg-opacity-95 border-neutral-800'
                                : 'bg-white bg-opacity-95 border-neutral-200'
                        }`}
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className={`text-xl p-2 ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}
                                aria-label="Close Menu"
                            >
                                ✖
                            </button>
                        </div>
                        <div className="space-y-6 text-center px-4">
                            {['Home', 'About', 'Skills', 'Experience', 'Project', 'Contact'].map((label) => {
                                const href = label === 'Home' ? '#home'
                                    : label === 'Skills' ? '#tech'
                                    : `#${label.toLowerCase()}`;
                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        className={`block py-2 rounded-full ${
                                            theme === 'dark'
                                                ? 'text-neutral-200 hover:text-purple-400 hover:border border-purple-400/50'
                                                : 'text-neutral-700 hover:text-sky-500 hover:border border-sky-300'
                                        }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        {label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;