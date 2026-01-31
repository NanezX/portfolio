import { parse } from "path";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export async function getPosts() {
  const modules = import.meta.glob("/src/posts/*.{md,svx,svelte.md}");

  const posts: Post[] = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = (await resolver()) as { metadata: any };
      const slug = parse(path).name;

      return {
        slug,
        ...metadata,
      };
    }),
  );

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
