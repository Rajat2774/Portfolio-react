import ReactIcon from "../assets/React.png";
import CppIcon from "../assets/cpp.png";
import pythonIcon from "../assets/python.png";
import djangoIcon from "../assets/django.png";
import tailwindIcon from "../assets/Tailwind.png";
import MysqlIcon from "../assets/sql.png";
import { animate, motion } from "motion/react"


const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});

const Technologies = () => {
  return (
    <section id="tech">
        <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl text-white">Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={ReactIcon} alt="hello" width={40} height={40}/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={CppIcon} alt="hello" width={40} height={40}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={pythonIcon} alt="hello" width={40} height={40}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={djangoIcon} alt="hello" width={40} height={40}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={tailwindIcon} alt="hello" width={40} height={40}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={MysqlIcon} alt="hello" width={40} height={40}/>
            </motion.div>
        </motion.div>
      
    </div>
    </section>
    
  )
}

export default Technologies
