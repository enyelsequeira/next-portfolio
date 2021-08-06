import Image from 'next/image'
import React from 'react'

const About = (): JSX.Element => {
  return (
    <div className="flex flex-col  md:flex-col lg:flex-row md:p-8 my-5 rounded-md" id="about">
      <div className="w-full  md:w-3/4 lg:w-2/4 md:mx-auto p-6 md:p-6 " >
        <Image alt="about-me picture" className="rounded-2xl shadow-2xl filter drop-shadow-lg" width="800" height="700" src="/images/about-me.svg" placeholder="blur"
          blurDataURL="/images/about-me.svg" />
      </div>

      <div className="w-full md:w-4/4  lg:w-2/4 p-2 md:p-6 ">
        <h3 className="text-5xl p-0 my-2 md:my-0 md:py-6 font-display text-t-primary dark:text-d-t-base">About Me</h3>
        <h2 className="text-3xl md:text-6xl tracking-wider p-0 md:py-5 font-body">Get to know me</h2>
        <p className="font-body text-base md:text-xl tracking-wide my-4">
          I am a web developer that comes from a teaching and <span className="font-extrabold text-light-accent dark:text-d-accent">Business background</span> . Through my past experiences, I can balance the need of users and businesses to understand their pain points and how I can contribute as a <span className="font-extrabold text-light-accent dark:text-d-accent" >Front-end developer</span>  and solve their problems.
        </p>
        <p className="font-body text-base md:text-xl tracking-wide mb-3">
          I've worked with a wide range of people from different backgrounds and demographics. This has enabled me to adapt and become <span className="font-extrabold text-light-accent dark:text-d-accent ">flexible</span> in the workplace.
        </p>
        <a rel="noreferrer" href="https://next-tailwind-blog-git-main-enyelsequeira.vercel.app/about" target="_blank" className="bg-light-accent font-body text-t-ternary hover:bg-t-ternary hover:text-t-base dark:bg-d-accent dark:text-d-third text-xl py-1 px-4 rounded-md dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex w-max mx-auto my-6 ">Find More</a>
      </div>

    </div>
  )
}

export default About
