<script lang="ts">
    import { Code, Coffee, Globe, Heart } from 'lucide-svelte';
</script>

<div class="max-w-4xl mx-auto px-6 py-20">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h1>
    
    <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
                Hello! I'm a passionate developer who loves bridging the gap between design and engineering.
                I believe that a website should not only look good but felt "alive" through smooth interactions and intuitive UX.
            </p>
            <p>
                My journey began when I inspected element on a webpage and realized I could change the headlines. 
                Since then, I've been hooked on the infinite possibilities of the web.
            </p>
            <p>
                When I'm not coding, you can find me:
            </p>
            <ul class="space-y-2 list-none">
                <li class="flex items-center gap-3">
                    <Coffee class="text-primary" size={20} />
                    <span>Brewing the perfect cup of coffee</span>
                </li>
                <li class="flex items-center gap-3">
                    <Globe class="text-primary" size={20} />
                    <span>Exploring virtual worlds or traveling real ones</span>
                </li>
                <li class="flex items-center gap-3">
                    <Heart class="text-primary" size={20} />
                    <span>Contributing to open source</span>
                </li>
            </ul>
        </div>
        
        <div class="space-y-8">
            <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code class="text-primary" /> Tech Stack
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each ['SvelteKit', 'React', 'TypeScript', 'Node.js', 'TailwindCSS', 'PostgreSQL', 'Docker'] as tech}
                        <span class="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-white/10">{tech}</span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
