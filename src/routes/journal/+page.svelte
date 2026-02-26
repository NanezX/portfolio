<script lang="ts">
    import { Clock, Tag } from 'lucide-svelte';
    
    let { data } = $props();
</script>

<svelte:head>
    <title>Journal – Portfolio</title>
    <meta name="description" content="Thoughts, tutorials, and snippets from my journey as a developer." />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-20">
    <header class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Journal</h1>
        <p class="text-gray-400 text-lg">Thoughts, tutorials, and snippets.</p>
    </header>

    {#if data.posts.length === 0}
        <p class="text-gray-500 text-center py-20">No posts yet. Stay tuned!</p>
    {:else}
        <div class="space-y-6">
            {#each data.posts as post}
                <a href={`/journal/${post.slug}`} class="block group">
                    <article class="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]">
                        <!-- Meta row -->
                        <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3 font-mono">
                            <time>{post.date}</time>
                            <span class="text-white/10">|</span>
                            <span class="flex items-center gap-1">
                                <Clock size={13} />
                                {post.readingTime}
                            </span>
                        </div>

                        <h2 class="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                            {post.title}
                        </h2>

                        <p class="text-gray-400 leading-relaxed mb-4">
                            {post.excerpt}
                        </p>

                        <div class="flex items-center justify-between gap-4">
                            <!-- Tags -->
                            {#if post.tags?.length}
                                <div class="flex flex-wrap gap-1.5">
                                    {#each post.tags as tag}
                                        <span class="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary/80 border border-primary/10">
                                            {tag}
                                        </span>
                                    {/each}
                                </div>
                            {/if}
                            <span class="text-primary font-medium text-sm flex items-center gap-1 shrink-0">
                                Read more <span class="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </div>
                    </article>
                </a>
            {/each}
        </div>
    {/if}
</div>
