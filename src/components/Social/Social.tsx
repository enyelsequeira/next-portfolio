import { Social, SocialMedia } from '@/utils/constant'
import React, { FC } from 'react'

const SocialLinks: FC = (): JSX.Element => {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#15223C] p-2">
      <div className="p-2 md:p-8 space-y-3">
        <p className="font-display text-5xl">Let's Connect</p>
        <p className="font-body text-4xl">My Social</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-6  my-6">
        {SocialMedia.map((social: Social) => {
          return (
            <a key={social.name} className="border-2 transition duration-1000 filter drop-shadow-md  px-8 py-4 text-xl md:text-3xl flex items-center justify-center w-full font-body capitalize bg-t-ternary dark:bg-d-accent text-t-base dark:text-dark rounded-xl backdrop-blur-xl hover:bg-light-accent  dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5 lg:max-h-14 hover:border-blue-800" href={social.link} target={social.target} rel="noopener" download={social.download}>
              <span  className="w-3/4 ">
                {social.name}
              </span>
              <span className="ml-2"> {social.icon} </span>
            </a>
          )
        })}
      </div>

    </div>
  )
}

export default SocialLinks
