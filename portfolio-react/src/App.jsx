import './index.css';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from './components/about';
import Technologies from './components/technologies';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import DarkParticleBackground from './components/ui/DarkParticleBackground.jsx';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import CommandTerminal from './components/CommandTerminal';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`relative overflow-x-hidden antialiased min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-black text-neutral-300 selection:bg-fuchsia-300 selection:text-fuchsia-900'
        : 'bg-white text-neutral-700 selection:bg-sky-200 selection:text-sky-900'
    }`}>
      {/* Dark particle background — lightweight & butter-smooth in dark mode */}
      {theme === 'dark' && <DarkParticleBackground />}

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar/>
        <div className='container mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <Hero/>
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <CommandTerminal />
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