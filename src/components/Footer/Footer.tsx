import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiFillMessage } from 'react-icons/ai'

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <div className="p-8 flex mx-auto my-5 lg:my-12 justify-between font-display flex-col md:flex-row items-center space-y-2">
        <div className="cursor-pointer">
          <Link href="/">
            <a>
              <Image alt="icons for portfolio" src="/images/icon.jpg" width="50" height="50" className="text-lg rounded-full" />
            </a>
          </Link>

        </div>
        <p className="text-5xl text-d-t-base p-4 lg:pl-12">Let's Talk</p>
        <Link href="/contact" >
          <a className="border-2 font-body dark:bg-d-accent text-dark text-xl px-4 py-2 rounded-lg bg-t-ternary hover:bg-light-accent transition duration-700  dark:hover:bg-d-t-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5  flex items-center hover:border-blue-800 ">
            Let's Chat <AiFillMessage className="ml-2" />
          </a>
        </Link>
      </div>
      <div className="text-4xl text-center px-1 md:px-0 my-2 py-4 font-body">
        © {new Date().getFullYear()} | Enyel Sequeira

    </div>
    </>
  )
}

export default Footer
