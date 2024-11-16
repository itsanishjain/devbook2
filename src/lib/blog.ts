import fs from "fs";
import path from "path";

interface Metadata {
  title?: string;
  publishedAt?: string;
  summary?: string;
  keywords?: string[];
  [key: string]: any; // This allows for additional fields
}

function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  if (!match) return { metadata: {}, content: fileContent.trim() };

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Metadata = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(":");
    const value = valueArr.join(":").trim();
    const trimmedKey = key.trim();

    if (trimmedKey === "keywords") {
      // Handle keywords as an array
      const keywordsString = value.replace(/^\[|\]$/g, "").trim();
      metadata[trimmedKey] = keywordsString.split(",").map((v) => v.trim());
    } else {
      // Handle other fields
      metadata[trimmedKey] = value.replace(/^["'](.*)["']$/, "$1");
    }
  });

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}

function getSiteMDXData(file: string) {
  let { metadata, content } = readMDXFile(file);
  let slug = path.basename(file, path.extname(file));
  return {
    metadata,
    slug,
    content,
  };
}

export function getSiteContent(fileName: string) {
  return getSiteMDXData(
    path.join(process.cwd(), `siteStaticContent/${fileName}`)
  );
}
