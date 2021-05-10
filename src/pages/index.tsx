import { projectFilePaths, PROJECT_PATH } from "@/../utils/mdxUtils";
import About from "@/components/About/About";
import Cards from "@/components/Cards/Cards";
import Hero from "@/components/Hero/Hero";
import Social from "@/components/Social/Social";
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export default function Home({projects}) {
  return (
    <>
      <Hero />
      <About/>
      <Cards data={projects}/>
      <Social />
    </>
  )
}

export function getStaticProps() {
  const projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECT_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { projects } }
}
