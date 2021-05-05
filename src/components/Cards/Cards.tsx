import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { classNamesForGrid, Project, Projects, renderIcon } from "../../../utils/constant";



const Cards = ({ data }: Projects): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation()
  const arrowAnimation = useAnimation()
  useEffect(() => {
    if (inView) {
      
      animation.start({
        opacity: 1,
        transition: {
          type: "tween",  duration:3,  ease: "linear"
        },

      });
      arrowAnimation.start({
        x: [
          '.4rem',
          '.5rem',
          '-.5rem',
          '-.3rem',
          '.5rem'

        ],
        transition: {
          ease: 'linear',
          duration: 5,
        }
      })
    }

    if (!inView) {
      animation.start({ opacity: 0 })
    }
  }, [inView])

  return (
    <>
      <p className="text-6xl text-t-primary p-4  font-display tracking-wider dark:text-d-t-base">My Projects</p>
      <motion.div ref={ref} className="flex flex-col items-center  md:justify-center w-full md:flex-row md:flex-wrap lg:grid lg:grid-cols-test lg:grid-row-t lg:justify-center gap-x-4 gap-y-3 my-12">
        {data.map((project: Project) => {
          return (
            <>
              <motion.div animate={animation} key={project.data.id} className={`${classNamesForGrid(project.data.id)}`}>

                <div className="p-2  relative group  transform hover:-translate-y-1 duration-300">
                  <Link as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`} href={`/projects/[slug]`} >
                    <Image className="rounded-xl cursor-pointer  transform duration-300 group-hover:scale-110" src={project.data.image} width="700" height="400" />
                  </Link>
                  {project.data.technologies && (
                    <div className="flex  absolute -bottom-4 right-3 w-2/5 justify-around">{project.data.technologies.map((tech) => {
                      return (
                        <span key={tech.id} className="text-t-base text-2xl dark:text-d-accent">{renderIcon(tech.name)}</span>
                      )
                    })}</div>
                  )}
                </div>

                <div className="px-6 py-4">
                  <p className="font-semibold tracking-wider font-display text-xl mb-2">{project.data.title}</p>

                  <div>
                    <p className="text-t-primary text-base">
                      {project.data.summary}
                    </p>

                  </div>

                </div>
                <div className="px-6 pt-2 pb-2">
                  <p className="text-lg pb-3 font-display font-light">Stack</p>
                  {project.data.technologies.map((tag) => {
                    return (
                      <span key={tag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag.name}</span>
                    )
                  })}
                </div>
                <div className="flex items-center justify-between px-7 py-2  md:absolute bottom-1 md:w-full ">
                  <div className="flex w-4/5 justify-between">
                    <a href={project.data.visit} target='_blank'
                      rel='noopener noreferrer' className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md hover:bg-t-ternary dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">Visit</a>
                    <a href={project.data.github} target='_blank'
                      rel='noopener noreferrer' className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md hover:bg-t-ternary dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5">code</a>
                  </div>
                  <motion.div className="cursor-pointer font-extrabold hover:text-light-accent dark:hover:text-red-400 flex" animate={arrowAnimation}>
                    <Link as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`} href={`/projects/[slug]`} >
                      <a className="flex items-center ml-2 pl-2"> More  <AiOutlineArrowRight className="text-xl" /> </a>
                    </Link>
                  </motion.div>

                </div>
              </motion.div>
            </>

          )
        })}
      </motion.div>
    </>
  )
}

export default Cards
