# How to create a new blog post

> **This file is NOT a post** — it's a guide. Delete the `.md` extension or
> keep it here as reference; it won't show up in the journal because only
> `.svx` files are loaded.

## Quick start

1. Create a new file in `src/posts/` with a `.svx` extension.
   The filename becomes the URL slug:
   `my-first-post.svx` → `/journal/my-first-post`

2. Add the required frontmatter at the top:

```yaml
---
title: Your Post Title
date: '2026-02-26'
excerpt: A one or two sentence summary shown on the journal listing page.
tags:
  - SvelteKit
  - Tutorial
---
```

3. Write your content in Markdown below the frontmatter.
   You can use all standard Markdown features plus Svelte components!

## Frontmatter fields

| Field     | Required | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `title`   | ✅       | Post title (shown in listing and page header) |
| `date`    | ✅       | ISO date string `YYYY-MM-DD`                  |
| `excerpt` | ✅       | Short summary (1-2 sentences)                 |
| `tags`    | ✅       | Array of tag strings for categorization       |

## Example post

````svx
---
title: Getting Started with SvelteKit
date: '2026-02-26'
excerpt: A beginner-friendly walkthrough of how to set up your first SvelteKit project.
tags:
  - SvelteKit
  - Tutorial
  - Beginner
---

# Getting Started with SvelteKit

Your markdown content goes here...

## Code blocks

\```typescript
const greeting = "Hello from SvelteKit!";
\```

## Using Svelte components

You can import and use Svelte components directly:

\```svelte
<script>
  import Counter from '$lib/components/Counter.svelte';
</script>

<Counter />
\```
````

## Tips

- Posts are automatically sorted by date (newest first).
- Reading time is auto-calculated from the content length.
- Tags are displayed on both the listing page and individual post pages.
- Use descriptive slugs (filenames) for good SEO.
