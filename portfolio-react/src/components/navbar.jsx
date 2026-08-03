import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className={`relative flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 ${
                theme === 'dark'
                    ? 'border-neutral-800 bg-neutral-950/70 shadow-purple-500/5'
                    : 'border-neutral-200 bg-white/80 shadow-sky-500/5'
            }`}>
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

                {/* Right side: theme toggle + mobile menu */}
                <div className="flex items-center gap-3">
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
