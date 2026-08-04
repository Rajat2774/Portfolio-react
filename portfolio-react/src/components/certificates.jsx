import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext';
import { CERTIFICATES } from '../constants';

function CertCard({ cert, isDark }) {
    return (
        <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex w-72 flex-none flex-col overflow-hidden rounded-2xl border transition-colors ${
                isDark
                    ? 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
            }`}
        >
            <div className={`flex h-36 items-center justify-center ${isDark ? 'bg-neutral-950' : 'bg-neutral-100'}`}>
                {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="h-full w-full object-cover" />
                ) : (
                    <FontAwesomeIcon
                        icon={faCertificate}
                        className={`text-4xl ${isDark ? 'text-purple-400/60' : 'text-sky-500/60'}`}
                    />
                )}
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className={`mb-1 line-clamp-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {cert.title}
                </h3>
                <p className={`mb-3 text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {cert.issuer} · {cert.date}
                </p>
                <span className={`mt-auto flex items-center gap-1.5 text-xs font-medium ${isDark ? 'text-purple-400' : 'text-sky-500'}`}>
                    View credential
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                </span>
            </div>
        </a>
    );
}

const Certificates = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // duplicated once so the track can loop seamlessly from -50%
    const track = [...CERTIFICATES, ...CERTIFICATES];

    return (
        <section id="certificates">
            <div className={`pb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                {/* eyebrow — adjust the number to match your section order */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-20 mb-10 flex items-center gap-4 px-4 lg:px-8"
                >
                    <span className={`font-mono text-sm ${isDark ? 'text-neutral-500' : 'text-sky-400'}`}>05.</span>
                    <span className={`h-px flex-1 ${isDark ? 'bg-neutral-800' : 'bg-sky-200'}`} />
                </motion.div>

                <h1 className="mb-16 px-4 text-5xl font-extrabold tracking-tight lg:px-8 lg:text-6xl">
                    Certificates
                </h1>

                {/* marquee viewport */}
                <div className="relative overflow-hidden">
                    {/* edge fade masks */}
                    <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r sm:w-32 ${
                        isDark ? 'from-black to-transparent' : 'from-white to-transparent'
                    }`} />
                    <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l sm:w-32 ${
                        isDark ? 'from-black to-transparent' : 'from-white to-transparent'
                    }`} />

                    <div className="marquee-track flex w-max gap-6 py-2">
                        {track.map((cert, i) => (
                            <CertCard key={i} cert={cert} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .marquee-track {
                    animation: certificates-scroll 35s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                @keyframes certificates-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-track {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Certificates;