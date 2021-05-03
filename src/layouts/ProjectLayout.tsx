import React, { FC, ReactNode } from 'react';


interface Props {
  children: ReactNode
}
const Project: FC<Props> = ({ children }):JSX.Element => {
  return (
      <main>
        hello  Projects
        is this rendering as well
      </main>
      
  )
}

export default Project