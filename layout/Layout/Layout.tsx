import React, { FC, ReactNode } from 'react'
import DarkModeBtn from '../../components/DarkModeBtn/DarkModeBtn'


interface Props{
  children: ReactNode
}
const PageLayout:FC<Props> = ({children}) => {
  return (
    <main className="max-w-screen-xl m-auto">
      <DarkModeBtn/>
      {children}
     <p>my cool footer</p>
    </main>
  )
}

export default PageLayout