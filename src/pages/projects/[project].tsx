import { postFilePaths, POSTS_PATH } from '@/../utils/mdxUtils';
import MarkdownComponents from '@/components/MarkdownComponents/MarkdownComponents';
import Project from '@/layouts/ProjectLayout';
import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import path from 'path';
import readingTime from "reading-time";




export default function PostPage({ source, frontMatter }) {

  // console.log({source: frontMatter});
  const content = hydrate(source, { 
    components: MarkdownComponents
  })
  
  return (
   <Project data={frontMatter}>{content}</Project>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components: MarkdownComponents,
    // Optionally pass remark/rehype plugins
    mdxOptions:{
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
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
