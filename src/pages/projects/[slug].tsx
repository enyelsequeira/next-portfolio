import { AnimatePresence } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { useRouter } from "next/router"
import path from 'path'
import readingTime from "reading-time"
import MarkdownComponents from '../../components/MarkdownComponents/MarkdownComponents'
import Project from '../../layouts/ProjectLayout'
import { projectFilePaths, PROJECT_PATH } from '../../utils/mdxUtils'



export default function PostPage({ source, frontMatter }) {
  const { query: { slug } } = useRouter()
    ;
  const content = hydrate(source, { components: MarkdownComponents })
  return (
    <AnimatePresence>
      {slug && <Project data={frontMatter}>
        {content}
      </Project>}
    </AnimatePresence>


  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(PROJECT_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components: MarkdownComponents,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require('remark-slug'),
        require("remark-code-titles"),
      ],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        ...data

      }
    },
  }
}

export const getStaticPaths = async () => {
  const paths = projectFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}