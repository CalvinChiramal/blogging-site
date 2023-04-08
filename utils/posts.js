import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

const getFileNames = () => fs.readdirSync(postsDirectory);

export const getSortedPosts = () => {
  // Get file names under /posts
  const allPosts = getFileNames().map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return { id, ...matterResult.data };
  });
  // Sort posts by date
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostIds = () =>
  getFileNames().map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));

export const getPostData = async id => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const htmlContent = processedContent.toString();

  // Combine the data with the id
  return { id, body: htmlContent, ...matterResult.data };
};
