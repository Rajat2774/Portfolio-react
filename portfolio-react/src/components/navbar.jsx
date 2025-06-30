import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="mb-20 flex items-center justify-between py-2 backdrop-blur fixed top-0 w-full px-6 z-40">
            <div className="flex flex-shrink-0 items-center text-2xl text-white">
                <img src={logo} alt="logo" height={40} width={40} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 ml-auto">
                <a href="#home" className="text-white hover:text-purple-400 hover:border border-purple-400 p-2 rounded">Home</a>
                <a href="#about" className="text-white hover:text-purple-400 hover:border border-purple-400 p-2 rounded">About</a>
                <a href="#tech" className="text-white hover:text-purple-400 hover:border border-purple-400 p-2 rounded">Skills</a>
                <a href="#experience" className="text-white hover:text-purple-400 hover:border border-purple-400 p-2 rounded">Experience</a>
                <a href="#projects" className="text-white hover:text-purple-400 hover:border border-purple-400 p-2 rounded">Project</a>
                <a href="#contact" className="text-white hover:text-purple-400 hover:border border-purple-400 p-2 rounded ">Contact</a>
            </div>

            {/* Mobile Navigation (Sidebar) */}
            <div className="lg:hidden">
                <button
                    className="text-white"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open Menu"
                >
                <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed top-0 left-0 w-64 h-screen bg-black bg-opacity-90 z-50 transition-transform duration-300"
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="text-white"
                            aria-label="Close Menu"
                        >
                            ✖
                        </button>
                    </div>
                    <div className="space-y-6 text-center">
                        <a href="#home" className="text-white block py-3 hover:text-purple-400 hover:border border-purple-400 p-2 rounded"  onClick={() => setSidebarOpen(false)}>Home</a>
                        <a href="#about" className="text-white block py-3 hover:text-purple-400 hover:border border-purple-400 p-2 rounded"  onClick={() => setSidebarOpen(false)}>About</a>
                        <a href="#tech" className="text-white block py-3 hover:text-purple-400 hover:border border-purple-400 p-2 rounded"  onClick={() => setSidebarOpen(false)}>Skills</a>
                        <a href="#experience" className="text-white block py-3 hover:text-purple-400 hover:border border-purple-400 p-2 rounded"  onClick={() => setSidebarOpen(false)}>Experience</a>
                        <a href="#projects" className="text-white block py-3 hover:text-purple-400 hover:border border-purple-400 p-2 rounded"  onClick={() => setSidebarOpen(false)}>Project</a>
                        <a href="#contact" className="text-white block py-3 hover:text-purple-400 hover:border border-purple-400 p-2 rounded"  onClick={() => setSidebarOpen(false)}>Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
