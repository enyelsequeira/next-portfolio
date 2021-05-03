import fs from 'fs'
import path from 'path'

// PROJECT_PATH is useful when you want to get the path to a specific file
export const PROJECT_PATH = path.join(process.cwd(), 'projects')

// postFilePaths is the list of all mdx files inside the PROJECT_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECT_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
