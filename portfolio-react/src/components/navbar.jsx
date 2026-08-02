import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="relative flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950/70 backdrop-blur-md shadow-lg shadow-purple-500/5 transition-all duration-300">
                <div className="flex flex-shrink-0 items-center text-2xl text-white">
                    <a href="#home">
                        <img src={logo} alt="logo" height={40} width={40} className="rounded-full" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-4 absolute left-1/2 -translate-x-1/2">
                    <a href="#home" className="text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50 px-3 py-1.5 rounded-full text-sm font-medium transition-all">Home</a>
                    <a href="#about" className="text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50 px-3 py-1.5 rounded-full text-sm font-medium transition-all">About</a>
                    <a href="#tech" className="text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50 px-3 py-1.5 rounded-full text-sm font-medium transition-all">Skills</a>
                    <a href="#experience" className="text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50 px-3 py-1.5 rounded-full text-sm font-medium transition-all">Experience</a>
                    <a href="#projects" className="text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50 px-3 py-1.5 rounded-full text-sm font-medium transition-all">Project</a>
                    <a href="#contact" className="text-neutral-300 hover:text-purple-400 hover:border border-purple-400/50 px-3 py-1.5 rounded-full text-sm font-medium transition-all">Contact</a>
                </div>

                {/* Mobile Navigation (Sidebar) */}
                <div className="lg:hidden">
                    <button
                        className="text-white p-1.5 focus:outline-none"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open Menu"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* Sidebar */}
                {sidebarOpen && (
                    <div
                        className="fixed top-0 left-0 w-64 h-screen bg-black bg-opacity-95 z-50 transition-transform duration-300 border-r border-neutral-800"
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-white text-xl p-2"
                                aria-label="Close Menu"
                            >
                                ✖
                            </button>
                        </div>
                        <div className="space-y-6 text-center px-4">
                            <a href="#home" className="text-neutral-200 block py-2 hover:text-purple-400 hover:border border-purple-400/50 rounded-full" onClick={() => setSidebarOpen(false)}>Home</a>
                            <a href="#about" className="text-neutral-200 block py-2 hover:text-purple-400 hover:border border-purple-400/50 rounded-full" onClick={() => setSidebarOpen(false)}>About</a>
                            <a href="#tech" className="text-neutral-200 block py-2 hover:text-purple-400 hover:border border-purple-400/50 rounded-full" onClick={() => setSidebarOpen(false)}>Skills</a>
                            <a href="#experience" className="text-neutral-200 block py-2 hover:text-purple-400 hover:border border-purple-400/50 rounded-full" onClick={() => setSidebarOpen(false)}>Experience</a>
                            <a href="#projects" className="text-neutral-200 block py-2 hover:text-purple-400 hover:border border-purple-400/50 rounded-full" onClick={() => setSidebarOpen(false)}>Project</a>
                            <a href="#contact" className="text-neutral-200 block py-2 hover:text-purple-400 hover:border border-purple-400/50 rounded-full" onClick={() => setSidebarOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
