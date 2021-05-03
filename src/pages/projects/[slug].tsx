import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import { projectFilePaths, PROJECT_PATH } from '../../../utils/mdxUtils'
import MarkdownComponents from '../../components/MarkdownComponents/MarkdownComponents'
import Project from '../../layouts/ProjectLayout'



export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components: MarkdownComponents })
  return (
    <Project data={frontMatter}>
      {content}

    </Project>
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
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
