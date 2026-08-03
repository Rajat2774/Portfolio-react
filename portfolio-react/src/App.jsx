import './index.css';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from './components/about';
import Technologies from './components/technologies';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import GalaxyBackground from './components/ui/galaxybg.jsx';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`relative overflow-x-hidden antialiased min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-black text-neutral-300 selection:bg-fuchsia-300 selection:text-fuchsia-900'
        : 'bg-white text-neutral-700 selection:bg-sky-200 selection:text-sky-900'
    }`}>
      {/* Galaxy background — only visible in dark mode */}
      {theme === 'dark' && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <GalaxyBackground
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.03}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.1}
            speed={1}
          />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar/>
        <div className='container mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <Hero/>
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}