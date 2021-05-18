import About from "@/components/About/About";
import Cards from "@/components/Cards/Cards";
import Hero from "@/components/Hero/Hero";
import Social from "@/components/Social/Social";
import { Project } from "@/utils/constant";
import { getAllFileFrontMatter } from "@/utils/mdxUtils";
import { InferGetStaticPropsType } from 'next';



export default function Home({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <Cards data={projects} />
      <About />
      <Social />
    </>
  )
}


export const getStaticProps = async () => {
  const projects: Project[] = await getAllFileFrontMatter("projects")
  return {
    props: {
      projects
    }
  }
}