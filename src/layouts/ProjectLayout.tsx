import { Project } from '@/utils/constant';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';


interface Props {
  children: ReactNode
  data: Project
}
const ProjectLayout: FC<Props> = ({ children, data }): JSX.Element => {

  return (
    <>

      <motion.div className="my-6  flex flex-col items-center space-y-2" layoutId={data.slug} initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.7, 0.8, 1] }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 4, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}>
        <p className="text-5xl text-t-ternary dark:text-d-accent font-display">{data.title}</p>
        <p className="font-body text-lg">{data.readingTime.text}</p>
        <motion.div className="flex justify-center p-2 pb-8" initial={{ x: "-350vw" }} animate={{
          x: 1, scale: [1, 1.1, 1.2, 1.1, 1],
        }} transition={{ duration: 2, bounce: 0.5, type: "spring" }}>
          <Image className="rounded-md shadow-lg" src={data.image} width="900" height="400" alt={data.title} placeholder="blur"
            blurDataURL={data.image} />
        </motion.div>
        <main className="m-auto prose prose-sm md:prose-lg text-body-dark dark:text-white p-2 font-body">
          {children}
        </main>
      </motion.div>

    </>
  )
}

export default ProjectLayout