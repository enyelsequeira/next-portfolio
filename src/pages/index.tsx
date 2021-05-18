import About from "@/components/About/About";
import Cards from "@/components/Cards/Cards";
import Hero from "@/components/Hero/Hero";
import Social from "@/components/Social/Social";
import { getAllFileFrontMatter } from "@/utils/mdxUtils";


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


export async function getStaticProps(){
  const projects = await getAllFileFrontMatter("projects")
  return{
    props:{
      projects
    }
  }
}