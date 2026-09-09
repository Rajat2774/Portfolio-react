import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, 
    faXmark, 
    faSun, 
    faMoon, 
    faHeart, 
    faHouse, 
    faUser, 
    faCode, 
    faBriefcase, 
    faFolderOpen, 
    faEnvelope, 
    faChevronRight,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { 
    faGithub, 
    faLinkedin, 
    faSquareXTwitter, 
    faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { SOCIAL } from '../constants';

const LIKE_NAMESPACE = "rajatsingh2774-portfolio";
const LIKE_KEY = "likes";
const COUNTAPI_BASE = "https://abacus.jasoncameron.dev";

const NAV_ITEMS = [
    { label: 'Home', href: '#home', icon: faHouse },
    { label: 'About', href: '#about', icon: faUser },
    { label: 'Skills', href: '#tech', icon: faCode },
    { label: 'Experience', href: '#experience', icon: faBriefcase },
    { label: 'Projects', href: '#projects', icon: faFolderOpen },
    { label: 'Contact', href: '#contact', icon: faEnvelope },
];

function LikeButton({ theme }) {
    const [count, setCount] = useState(null);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(localStorage.getItem("portfolio-liked") === "true");

        fetch(`${COUNTAPI_BASE}/get/${LIKE_NAMESPACE}/${LIKE_KEY}`)
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
                await fetch(`${COUNTAPI_BASE}/hit/${LIKE_NAMESPACE}/${LIKE_KEY}`);
            } catch {
                // optimistic count already shown, safe to ignore
            }
        } else {
            const next = Math.max(0, count - 1);
            setLiked(false);
            setCount(next);
            localStorage.setItem("portfolio-liked", "false");
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

    // Lock body scroll when mobile sidebar is open
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [sidebarOpen]);

    // Close sidebar on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSidebarOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
                <nav className={`relative overflow-hidden flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 ${
                    theme === 'dark'
                        ? 'border-neutral-800 bg-neutral-950/70 shadow-purple-500/5'
                        : 'border-neutral-200 bg-white/80 shadow-sky-500/5'
                }`}>
                    {/* scroll progress bar — pinned along the bottom edge of navbar */}
                    <motion.div
                        className={`absolute inset-x-0 bottom-0 z-30 h-[3.5px] origin-left pointer-events-none rounded-b-full ${
                            theme === 'dark'
                                ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-[0_1px_10px_rgba(217,70,239,0.8)]'
                                : 'bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 shadow-[0_1px_10px_rgba(56,189,248,0.8)]'
                        }`}
                        style={{ scaleX: scrollYProgress }}
                    />

                    {/* Brand Logo */}
                    <div className="flex flex-shrink-0 items-center text-2xl">
                        <a href="#home" className="flex items-center gap-2 group">
                            <img 
                                src={logo} 
                                alt="Rajat Singh Logo" 
                                height={40} 
                                width={40} 
                                className="rounded-full transition-transform duration-300 group-hover:scale-105" 
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2 absolute left-1/2 -translate-x-1/2">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    theme === 'dark'
                                        ? 'text-neutral-300 hover:text-purple-400 hover:bg-neutral-800/60'
                                        : 'text-neutral-600 hover:text-sky-600 hover:bg-sky-50'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side: Like button + Theme Toggle + Mobile Menu Trigger */}
                    <div className="flex items-center gap-2">
                        <LikeButton theme={theme} />

                        {/* Theme Toggle */}
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

                        {/* Mobile Hamburger Button */}
                        <div className="lg:hidden">
                            <button
                                className={`p-2 rounded-full flex items-center justify-center transition-all ${
                                    theme === 'dark' 
                                        ? 'text-neutral-200 hover:bg-neutral-800' 
                                        : 'text-neutral-800 hover:bg-neutral-100'
                                }`}
                                onClick={() => setSidebarOpen(true)}
                                aria-label="Open Mobile Menu"
                            >
                                <FontAwesomeIcon icon={faBars} className="text-lg" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Drawer & Backdrop Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
                            aria-hidden="true"
                        />

                        {/* Drawer Panel */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 240 }}
                            className={`fixed top-0 right-0 z-[70] h-full w-[85vw] max-w-sm flex flex-col justify-between p-6 shadow-2xl border-l backdrop-blur-2xl transition-colors duration-300 lg:hidden ${
                                theme === 'dark'
                                    ? 'bg-neutral-950/95 border-neutral-800 text-white'
                                    : 'bg-white/95 border-neutral-200 text-neutral-900'
                            }`}
                        >
                            {/* Drawer Header */}
                            <div>
                                <div className="flex items-center justify-between border-b pb-5 mb-6 border-neutral-200 dark:border-neutral-800/80">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <img
                                                src={logo}
                                                alt="Rajat Singh"
                                                className="w-11 h-11 rounded-full object-cover border-2 border-purple-500/30"
                                            />
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-neutral-950 animate-pulse" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base tracking-tight leading-none">Rajat Singh</h3>
                                            <span className={`text-xs font-mono ${theme === 'dark' ? 'text-purple-400' : 'text-sky-600'}`}>
                                                AI / ML Engineer
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSidebarOpen(false)}
                                        className={`p-2.5 rounded-full transition-colors ${
                                            theme === 'dark'
                                                ? 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                                                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                                        }`}
                                        aria-label="Close Mobile Menu"
                                    >
                                        <FontAwesomeIcon icon={faXmark} className="text-xl" />
                                    </button>
                                </div>

                                {/* Availability Badge */}
                                <div className={`px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 mb-6 ${
                                    theme === 'dark' 
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                }`}>
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    <span>Available for full-time & contract AI roles</span>
                                </div>

                                {/* Navigation Items */}
                                <nav className="space-y-1.5">
                                    {NAV_ITEMS.map((item, index) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * index, duration: 0.2 }}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm ${
                                                theme === 'dark'
                                                    ? 'text-neutral-300 hover:text-purple-400 hover:bg-neutral-900/80 hover:border-l-2 hover:border-purple-500'
                                                    : 'text-neutral-700 hover:text-sky-600 hover:bg-sky-50 hover:border-l-2 hover:border-sky-500'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <FontAwesomeIcon 
                                                    icon={item.icon} 
                                                    className={`text-base transition-transform group-hover:scale-110 ${
                                                        theme === 'dark' ? 'text-neutral-400 group-hover:text-purple-400' : 'text-neutral-400 group-hover:text-sky-600'
                                                    }`} 
                                                />
                                                <span>{item.label}</span>
                                            </div>
                                            <FontAwesomeIcon 
                                                icon={faChevronRight} 
                                                className="text-xs opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" 
                                            />
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>

                            {/* Drawer Footer & Extra Controls */}
                            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 space-y-5">
                                {/* Theme Switcher Row inside Sidebar */}
                                <div className={`flex items-center justify-between p-3 rounded-xl ${
                                    theme === 'dark' ? 'bg-neutral-900/60' : 'bg-neutral-100'
                                }`}>
                                    <span className="text-xs font-mono text-neutral-400">Appearance</span>
                                    <button
                                        onClick={toggleTheme}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                            theme === 'dark'
                                                ? 'bg-neutral-800 text-yellow-300 hover:bg-neutral-700'
                                                : 'bg-white text-sky-600 shadow-sm hover:bg-neutral-50'
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                                        <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                                    </button>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center justify-around">
                                    <a
                                        href={SOCIAL.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-full transition-colors ${
                                            theme === 'dark' ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                                        }`}
                                        aria-label="GitHub Profile"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                    </a>
                                    <a
                                        href={SOCIAL.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-full transition-colors ${
                                            theme === 'dark' ? 'text-neutral-400 hover:text-sky-400 hover:bg-neutral-800' : 'text-neutral-600 hover:text-sky-600 hover:bg-neutral-100'
                                        }`}
                                        aria-label="LinkedIn Profile"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                                    </a>
                                    <a
                                        href={SOCIAL.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-full transition-colors ${
                                            theme === 'dark' ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                                        }`}
                                        aria-label="Twitter X Profile"
                                    >
                                        <FontAwesomeIcon icon={faSquareXTwitter} className="text-lg" />
                                    </a>
                                    <a
                                        href={SOCIAL.insta}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-full transition-colors ${
                                            theme === 'dark' ? 'text-neutral-400 hover:text-pink-400 hover:bg-neutral-800' : 'text-neutral-600 hover:text-pink-600 hover:bg-neutral-100'
                                        }`}
                                        aria-label="Instagram Profile"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                                    </a>
                                    <a
                                        href={`mailto:${SOCIAL.email}`}
                                        className={`p-2.5 rounded-full transition-colors ${
                                            theme === 'dark' ? 'text-neutral-400 hover:text-purple-400 hover:bg-neutral-800' : 'text-neutral-600 hover:text-purple-600 hover:bg-neutral-100'
                                        }`}
                                        aria-label="Send Email"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                                    </a>
                                </div>

                                {/* Direct CTA Button */}
                                <a
                                    href="#contact"
                                    onClick={() => setSidebarOpen(false)}
                                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-md ${
                                        theme === 'dark'
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-purple-900/30'
                                            : 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-sky-500/20'
                                    }`}
                                >
                                    <span>Get In Touch</span>
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                                </a>

                                <p className="text-[11px] text-center font-mono text-neutral-500">
                                    © {new Date().getFullYear()} Rajat Singh. All rights reserved.
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;