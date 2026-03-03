<script lang="ts">
import { Clock, Tag } from 'lucide-svelte';

let { data } = $props();
</script>

<svelte:head>
  <title>Journal – Portfolio</title>
  <meta
    name="description"
    content="Thoughts, tutorials, and snippets from my journey as a developer."
  />
</svelte:head>

<div class="mx-auto w-full px-6 py-20 md:px-12 lg:px-16">
  <header class="mb-12">
    <h1 class="text-heading mb-4 text-4xl font-bold md:text-5xl">Journal</h1>
    <p class="text-muted text-lg">Thoughts, tutorials, and snippets.</p>
  </header>

  {#if data.posts.length === 0}
    <p class="text-faint py-20 text-center">No posts yet. Stay tuned!</p>
  {:else}
    <div class="max-w-2xl space-y-6">
      {#each data.posts as post}
        <a href={`/journal/${post.slug}`} class="group block">
          <article
            class="bg-card border-border hover:border-primary/30 rounded-2xl border p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
          >
            <!-- Meta row -->
            <div class="text-faint mb-3 flex flex-wrap items-center gap-3 font-mono text-sm">
              <time>{post.formattedDate}</time>
              <span class="text-border">|</span>
              <span class="flex items-center gap-1">
                <Clock size={13} />
                {post.readingTime}
              </span>
            </div>

            <h2
              class="text-heading group-hover:text-primary mb-2 text-2xl font-bold transition-colors"
            >
              {post.title}
            </h2>

            <p class="text-muted mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div class="flex items-center justify-between gap-4">
              <!-- Tags -->
              {#if post.tags?.length}
                <div class="flex flex-wrap gap-1.5">
                  {#each post.tags as tag}
                    <span
                      class="bg-primary/10 text-primary/80 border-primary/10 rounded-full border px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  {/each}
                </div>
              {/if}
              <span class="text-primary flex shrink-0 items-center gap-1 text-sm font-medium">
                Read more <span class="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </article>
        </a>
      {/each}
    </div>
  {/if}
</div>
