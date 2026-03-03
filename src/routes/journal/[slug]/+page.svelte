<script lang="ts">
import type { PageData } from './$types';

let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
  <title>{data.meta.title} - Journal</title>
</svelte:head>

<article class="mx-auto max-w-2xl px-6 py-20 md:px-12 lg:px-16">
  <a
    href="/journal"
    class="text-muted hover:text-primary mb-8 inline-flex items-center text-sm transition-colors"
  >
    ← Back to Journal
  </a>

  <header class="mb-12">
    <div class="text-faint mb-6 flex items-center gap-4 font-mono text-sm">
      <time>{data.formattedDate}</time>
      <span>•</span>
      <div class="flex gap-2">
        {#each data.meta.tags as tag}
          <span class="text-primary">{tag}</span>
        {/each}
      </div>
    </div>

    <h1 class="text-heading mb-6 text-4xl leading-tight font-bold md:text-5xl">
      {data.meta.title}
    </h1>

    <p class="text-muted text-xl leading-relaxed">
      {data.meta.excerpt}
    </p>
  </header>

  <div
    class="prose prose-lg prose-headings:text-heading prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-pre:bg-card prose-pre:border prose-pre:border-border max-w-none"
  >
    <data.content />
  </div>
</article>
