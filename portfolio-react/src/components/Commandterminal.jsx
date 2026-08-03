import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext';
import { SOCIAL } from '../constants';

// Change this if your resume lives somewhere else (e.g. an external link)
const RESUME_URL = "/Resume_AI_July2026.pdf";

const COMMAND_LIST = ["help", "about", "skills", "projects", "resume", "contact", "github", "clear"];

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

const CommandTerminal = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { type: "output", text: "Portfolio terminal — type 'help' to see available commands." },
    ]);
    const [commandLog, setCommandLog] = useState([]);
    const [logIndex, setLogIndex] = useState(-1);

    const inputRef = useRef(null);
    const bodyRef = useRef(null);

    // Cmd/Ctrl+K to open, Esc to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // focus input + lock scroll whenever the terminal opens
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // auto-scroll output to bottom on new lines
    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history]);

    const pushLine = (type, text) => {
        setHistory((prev) => [...prev, { type, text }]);
    };

    const runCommand = (raw) => {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;

        pushLine("input", cmd);
        setCommandLog((prev) => [...prev, cmd]);
        setLogIndex(-1);

        switch (cmd) {
            case "help":
                pushLine("output", `Available commands: ${COMMAND_LIST.join(", ")}`);
                break;
            case "about":
                pushLine("output", "Navigating to About...");
                setTimeout(() => { scrollToSection("about"); setIsOpen(false); }, 300);
                break;
            case "skills":
                pushLine("output", "Navigating to Skills...");
                setTimeout(() => { scrollToSection("tech"); setIsOpen(false); }, 300);
                break;
            case "projects":
                pushLine("output", "Navigating to Projects...");
                setTimeout(() => { scrollToSection("projects"); setIsOpen(false); }, 300);
                break;
            case "contact":
                pushLine("output", "Navigating to Contact...");
                setTimeout(() => { scrollToSection("contact"); setIsOpen(false); }, 300);
                break;
            case "resume":
                pushLine("output", "Downloading resume...");
                setTimeout(() => {
                    const link = document.createElement("a");
                    link.href = RESUME_URL;
                    link.download = "Resume_AI_July2026.pdf";
                    link.target = "_blank";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 200);
                break;
            case "github":
                pushLine("output", "Opening GitHub profile in a new tab...");
                setTimeout(() => window.open(SOCIAL.github, "_blank"), 200);
                break;
            case "clear":
                setHistory([]);
                break;
            default:
                pushLine("output", `command not found: ${cmd} — type 'help' for a list of commands`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        runCommand(input);
        setInput("");
    };

    const handleKeyUp = (e) => {
        // up/down cycles through command history, like a real shell
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandLog.length === 0) return;
            const nextIndex = logIndex < commandLog.length - 1 ? logIndex + 1 : logIndex;
            setLogIndex(nextIndex);
            setInput(commandLog[commandLog.length - 1 - nextIndex] || "");
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (logIndex <= 0) {
                setLogIndex(-1);
                setInput("");
                return;
            }
            const nextIndex = logIndex - 1;
            setLogIndex(nextIndex);
            setInput(commandLog[commandLog.length - 1 - nextIndex] || "");
        }
    };

    const panelClass = isDark
        ? "bg-neutral-950 border-neutral-800 text-neutral-300"
        : "bg-white border-neutral-200 text-neutral-700";

    const headerClass = isDark
        ? "bg-neutral-900/70 border-neutral-800 text-neutral-500"
        : "bg-neutral-100 border-neutral-200 text-neutral-500";

    return (
        <>
            {/* floating trigger */}
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open command terminal"
                className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-transform hover:scale-105 ${
                    isDark
                        ? "border-neutral-800 bg-neutral-900/80 text-purple-400"
                        : "border-neutral-200 bg-white/90 text-sky-500"
                }`}
            >
                <FontAwesomeIcon icon={faTerminal} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -16, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className={`w-full max-w-xl overflow-hidden rounded-xl border font-mono text-sm shadow-2xl ${panelClass}`}
                        >
                            {/* title bar */}
                            <div className={`flex items-center justify-between border-b px-4 py-3 ${headerClass}`}>
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-neutral-500/40" />
                                    <span className="h-3 w-3 rounded-full bg-neutral-500/40" />
                                    <span className="h-3 w-3 rounded-full bg-neutral-500/40" />
                                    <span className="ml-2 text-xs">portfolio — terminal</span>
                                </div>
                                <button onClick={() => setIsOpen(false)} aria-label="Close terminal">
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>

                            {/* output history */}
                            <div ref={bodyRef} className="max-h-72 space-y-2 overflow-y-auto px-4 py-4">
                                {history.map((line, i) => (
                                    <p key={i} className={line.type === "input" ? (isDark ? "text-white" : "text-neutral-900") : ""}>
                                        {line.type === "input" ? <span className="text-neutral-500">$ </span> : null}
                                        {line.text}
                                    </p>
                                ))}
                            </div>

                            {/* input line */}
                            <form onSubmit={handleSubmit} className={`flex items-center gap-2 border-t px-4 py-3 ${headerClass}`}>
                                <span className="text-neutral-500">$</span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyUp={handleKeyUp}
                                    placeholder="type a command..."
                                    autoComplete="off"
                                    spellCheck="false"
                                    className={`flex-1 bg-transparent outline-none ${isDark ? "text-white placeholder-neutral-600" : "text-neutral-900 placeholder-neutral-400"}`}
                                />
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CommandTerminal;