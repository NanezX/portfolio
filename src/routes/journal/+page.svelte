<script lang="ts">
    import type { PageData } from './$types';
    
    let { data } = $props<{ data: PageData }>();
</script>

<div class="max-w-4xl mx-auto px-6 py-20">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Journal</h1>
    <p class="text-gray-400 mb-12 text-lg">Thoughts, tutorials, and snippets.</p>

    <div class="space-y-8">
        {#each data.posts as post}
            <article class="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h2 class="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        <a href={`/journal/${post.slug}`}>{post.title}</a>
                    </h2>
                    <time class="text-sm text-gray-500 font-mono">{post.date}</time>
                </div>
                <p class="text-gray-400 leading-relaxed mb-4">
                    {post.excerpt}
                </p>
                <div class="flex items-center gap-2 text-primary font-medium text-sm">
                    Read more <span class="group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </article>
        {/each}
    </div>
</div>
