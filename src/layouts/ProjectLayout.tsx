import { Project } from '@/utils/constant';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';


interface Props {
  children: ReactNode
  data: Project
}
const ProjectLayout: FC<Props> = ({ children, data }): JSX.Element => {
  console.log(data, "from layout");
  return (
    <div className="my-6  flex flex-col items-center space-y-2">
      <p className="text-5xl text-t-ternary dark:text-d-accent font-display">{data.title}</p>
      <p className="font-body text-lg">{data.readingTime.text}</p>
      <div className="flex justify-center p-2 pb-8">
        <Image className="rounded-md shadow-lg" src={data.image} width="900" height="400" alt={data.title} />
      </div>
      <main className="m-auto prose prose-sm md:prose-lg text-body-dark dark:text-white p-2 font-body">
        {children}
      </main>
    </div>


  )
}

export default ProjectLayout