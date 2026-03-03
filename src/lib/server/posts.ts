import { parse } from "path";

export interface Post {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

/**
 * Format ISO date string to human-readable format (e.g., "Oct 15, 2025")
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

/**
 * Estimate reading time from raw content.
 * Average adult reads ~238 wpm; round up to nearest minute.
 */
function estimateReadingTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 238));
  return `${minutes} min read`;
}

/**
 * Load all blog posts (.svx / .md / .svelte.md) from /src/posts,
 * sorted newest-first. To add a new post just drop a file there
 * with the required frontmatter (see POST_TEMPLATE.md).
 */
export async function getPosts() {
  const modules = import.meta.glob("/src/posts/*.{md,svx,svelte.md}", {
    eager: false,
  });

  const posts: Post[] = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const mod = (await resolver()) as {
        metadata: Record<string, any>;
        default: { render: () => { html: string } };
      };
      const slug = parse(path).name;

      // Try to get raw HTML for reading time
      let readingTime = "1 min read";
      try {
        const rendered = mod.default.render();
        readingTime = estimateReadingTime(rendered.html);
      } catch {
        // fallback
      }

      return {
        slug,
        title: mod.metadata.title || "",
        date: mod.metadata.date || "",
        formattedDate: formatDate(mod.metadata.date || ""),
        excerpt: mod.metadata.excerpt || "",
        tags: mod.metadata.tags || [],
        readingTime,
      };
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
