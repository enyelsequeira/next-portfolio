import React, { FC, ReactNode } from 'react'
import DarkModeBtn from '../../components/DarkModeBtn/DarkModeBtn'
import Header from '../../components/Header/Header'


interface Props {
  children: ReactNode
}
const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <DarkModeBtn />
        {children}
        <p  className="font-display">my cool footer</p>
      </main>
    </>
  )
}

export default PageLayout