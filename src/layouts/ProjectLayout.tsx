import React, { FC, ReactNode } from 'react';
import PageLayout from './MainLayout';


interface Props {
  children: ReactNode
}
const Project: FC<Props> = ({ children }):JSX.Element => {
  return (
    <PageLayout>
      <main>
        hello  Projects
      </main>
      
     
    </PageLayout>
  )
}

export default Project