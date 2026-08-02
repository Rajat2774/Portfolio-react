import './index.css';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from './components/about';
import Technologies from './components/technologies';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-fuchsia-300 selection:text-fuchsia-900 bg-black">
      <div className="fixed top-0 -z-10 h-full w-full bg-black">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,70,239,0.15),rgba(0,0,0,0))]"></div>
      </div>
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
  );
}