import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guidesDirectory = path.join(process.cwd(), "content/guides");

export interface GuideMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  author?: string;
  ogImage?: string;
}

export interface Guide {
  metadata: GuideMetadata;
  content: string;
}

/** Retrieve all guides sorted by date descending */
export function getSortedGuides(): GuideMetadata[] {
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(guidesDirectory);
  const allGuidesData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(guidesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
        author: matterResult.data.author,
        ogImage: matterResult.data.ogImage,
      } as GuideMetadata;
    });

  // Sort guides by date
  return allGuidesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/** Get a single guide by slug */
export function getGuideBySlug(slug: string): Guide | null {
  try {
    const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      metadata: {
        slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
        author: matterResult.data.author,
        ogImage: matterResult.data.ogImage,
      },
      content: matterResult.content,
    };
  } catch (e) {
    return null;
  }
}
