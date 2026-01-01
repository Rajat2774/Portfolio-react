import about1 from "../assets/about1.jpg"
import { ABOUT } from '../constants';
import { motion } from "motion/react"


const About = () => {
  return (
    <section id="about">
        <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl text-white">About<span className="text-neutral-500"> Me</span></h1>
        <div className="flex flex-wrap">
        <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8"
            >
            <div className="flex items-center justify-center">
                <img
                src={about1}
                alt="about me"
                className="w-auto max-w-full max-h-[400px] object-cover rounded-2xl"
                />
            </div>
        </motion.div>


            <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:0.5}} 
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 text-neutral-300 whitespace-pre-line">{ABOUT}</p>
                </div>
            </motion.div>
        </div>
    </div>
    </section>
  )
}
export default About


