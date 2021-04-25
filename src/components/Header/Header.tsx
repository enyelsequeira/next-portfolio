import Image from "next/image";
import Link from "next/link";
import React, { FC } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";



const Header: FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="flex flex-wrap sticky items-center justify-between px-2 py-3 bg-t-ternary dark:bg-d-third font-display">
            <div className="container px-4 mx-auto flex flex-wrap items-center sticky justify-between">
              
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:sticky  lg:justify-start">
                <Link href="/">
                  <a className="text-sm font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    <Image src="/images/icon.jpg" width="50" height="50" className="text-lg rounded-full" />
                  </a>
                </Link>

                <button className="cursor-pointer text-xl  px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none h-auto" type="button" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <AiFillCloseCircle /> : <GiHamburgerMenu />}

                </button>

              </div>

              <div className={"lg:flex flex-grow items-center" + (menuOpen ? " flex" : " hidden")}
                id="nav-bar">
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug hover:opacity-75">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog">
                      <a className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug hover:opacity-75">
                        About
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about">
                      <a className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug hover:opacity-75">
                        Projects
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug hover:opacity-75 border bg-yellow-200  rounded-2xl text-black">
                        Contact
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item my-2 md:my-0 px-2 md:px-1 self-start md:self-center">
                    <DarkModeBtn />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header