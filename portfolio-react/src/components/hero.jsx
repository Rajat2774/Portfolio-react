import pp from "../assets/about1.jpg"
import { HERO } from '../constants';
import { motion } from "motion/react"
import ProfileCard from "./ui/ProfileCard"; // adjust path if needed


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
})

const Hero = () => {
    return (
        <section id="home">
            <div className="border-b border-neutral-900 pb-12 lg:mb-35 mt-24">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-7/12">
                        <div className="flex flex-col lg:items-start">
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-6 text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-extrabold tracking-tight leading-none text-white whitespace-nowrap"
                            >
                                Rajat<span className="text-neutral-500"> Singh</span>
                            </motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent lg:text-4xl mt-4">AI/ML Engineer</motion.span>
                            <motion.div
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-4 max-w-xl py-4 font-light tracking-tighter text-neutral-300 whitespace-pre-line leading-relaxed"
                            >
                                {HERO}
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 lg:p-8 mt-8 lg:mt-0">
                        <div className="flex justify-center lg:justify-end">
                            <ProfileCard
                                name="Rajat Singh"
                                title="Software Engineer"
                                handle="rajatsingh2774"
                                status="Open to Work"
                                contactText="Contact Me"
                                avatarUrl={pp}
                                showUserInfo={false}
                                enableTilt={true}
                                enableMobileTilt={false}
                                onContactClick={() => console.log('Contact clicked')}
                                behindGlowColor="rgba(125, 190, 255, 0.67)"
                                behindGlowEnabled
                                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero
