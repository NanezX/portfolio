<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    const projects = [
        {
            title: "SvelteKit Blog",
            description: "A high-performance blog platform built with SvelteKit and Markdown (MDSvex). Features include syntax highlighting, reading time estimates, and tag filtering.",
            tags: ["SvelteKit", "Tailwind", "MDSvex"],
            href: "/journal"
        },
        {
            title: "E-Commerce Dashboard",
            description: "Real-time analytics dashboard for e-commerce store owners. Visualizes sales data, user sessions, and inventory levels using Recharts.",
            tags: ["React", "Next.js", "D3.js"],
            href: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task manager with real-time updates via WebSockets. Supports drag-and-drop organization and team workspaces.",
            tags: ["Vue", "Firebase", "Pinia"],
            href: "#"
        }
    ];
</script>

<Hero />

<section id="projects" class="py-20 max-w-7xl mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
            <h2 class="text-3xl font-bold text-heading mb-2">Featured Work</h2>
            <p class="text-muted">A selection of my recent projects.</p>
        </div>
        <a href="https://github.com" target="_blank" class="text-primary hover:text-heading transition-colors flex items-center gap-2 group">
            View all on GitHub 
            <span class="group-hover:translate-x-1 transition-transform">→</span>
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each projects as project}
            <ProjectCard {...project} />
        {/each}
    </div>
</section>
