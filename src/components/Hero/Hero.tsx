import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Hero = ():JSX.Element => {
  return (
    <div className="flex-col md:flex md:flex-row justify-between p-4">

      <div className="mb-5 md:mb-0  w-full md:w-2/4 font-display p-4 md:p-6 lg:self-center">
        <motion.h2 initial={{opacity: 0}} animate={{opacity: 1 }} transition={{ duration: 5}} className="text-5xl md:text-6xl lg:text-7xl text-t-primary font-body dark:text-d-t-base tracking-wider">Hello, I'm</motion.h2>
        <motion.p initial={{y:"-100vh"}} animate={{y:"0", }} transition={{type: "tween",  duration: 2}} className="text-5xl md:text-6xl lg:text-8xl my-6 md:my-9 tracking-widest" >Enyel Sequeira</motion.p>
        <motion.p initial={{opacity: 0, x: "-30%"}} animate={{opacity: 1, x:"0" }} transition={{ type:"spring", duration: 2, delay:2}}  className="font-body text-2xl md:text-3xl ">Full-Stack Developer</motion.p>
      </div>

      <motion.div className="w-full  md:w-2/4 p-8 md:p-6 " initial={{opacity: 0}} animate={{opacity: 1 }} transition={{ duration: 4}}>
        <Image   src="/images/workpic.png" width="700" height="600" className="rounded-2xl shadow-2xl filter drop-shadow-lg"  />
        
      </motion.div>
      
    </div>
  )
}

export default Hero
