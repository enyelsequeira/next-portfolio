
import React, { FC, ReactNode } from 'react'
import Header from '../components/Header/Header'


interface Props {
  children: ReactNode
}
const PageLayout: FC<Props> = ({ children }):JSX.Element => {
  return (
    <>
      <Header />
      <main>
        {children}
        <p  className="font-display">my cool footer</p>
      </main>
    </>
  )
}

export default PageLayout