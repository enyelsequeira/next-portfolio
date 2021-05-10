
import Footer from '@/components/Footer/Footer'
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
      </main>
      <Footer />
    </>
  )
}

export default PageLayout