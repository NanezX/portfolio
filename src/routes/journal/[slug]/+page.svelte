<script lang="ts">
    import type { PageData } from './$types';
    
    let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
    <title>{data.meta.title} - Journal</title>
</svelte:head>

<article class="w-full mx-auto px-6 md:px-12 lg:px-16 py-20">
    <header class="mb-12 text-center">
        <div class="flex items-center justify-center gap-4 text-sm text-faint mb-6 font-mono">
            <time>{data.meta.date}</time>
            <span>•</span>
            <div class="flex gap-2">
                {#each data.meta.tags as tag}
                    <span class="text-primary">{tag}</span>
                {/each}
            </div>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-heading mb-6 leading-tight">
            {data.meta.title}
        </h1>
        
        <p class="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            {data.meta.excerpt}
        </p>
    </header>

    <div class="prose prose-lg max-w-none prose-headings:text-heading prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-pre:bg-card prose-pre:border prose-pre:border-border">
        <data.content />
    </div>
</article>
