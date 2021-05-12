import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const root = process.cwd();
// PROJECT_PATH is useful when you want to get the path to a specific file
export const PROJECT_PATH = path.join(process.cwd(), 'projects');

// postFilePaths is the list of all mdx files inside the PROJECT_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECT_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export async function getAllFileFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, type));

  return files.reduce((allProjects, projectSlug) => {
    const source = fs.readFileSync(
      path.join(root,  type, projectSlug),
      'utf-8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: projectSlug.replace('.mdx', ''),
      },
      ...allProjects,
    ];
  }, []);
}
