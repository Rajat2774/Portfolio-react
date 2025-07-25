import pp from "../assets/pp.jpg"
import { HERO } from '../constants';
import { motion } from "motion/react"

const container=(delay)=>({
    hidden: {x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay: delay}
    },
})

const Hero = () => {
  return(
    <section id="home">
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
       <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:items-start">
                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">Rajat Singh</motion.h1>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible" 
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Aspiring AI/ML Engineer</motion.span>
                <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300">{HERO}</motion.p>
            </div>
        </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x:100,opacity:0}} 
                    animate={{x:0,opacity:1}} 
                    transition={{duration:1,delay:1.2}}
                    src={pp} alt="Profile Picture" 
                    className="w-72 h-72 object-cover rounded-md"/>
                </div>
            </div>
       </div>
    </div>
    </section>
    );
}

export default Hero
