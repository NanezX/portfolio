<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    const projects = [
        {
            title: "Mosaic Desktop App",
            description: "Secure Electron-based desktop application for AI agents, fully integrated with the Hypercycle ecosystem. Part of the architecture team.",
            tags: ["Electron", "TypeScript", "AI Agents", "Svelte"],
            badge: {
                text: "In Progress"
            },
            link: {
                text: "Download →",
                url: "https://licenses.aimarkets.ai/"
            }
        },
        {
            title: "HyperY Web Chat",
            description: "Web chat UI and proxy backend that normalises requests between users and Hypercycle nodes, supporting LiteLLM and Ollama backends for decentralized AI inference.",
            tags: ["Python", "FastAPI", "Svelte", "LiteLLM", "Docker"],
            link: {
                text: "Live App →",
                url: "https://hyper-y.ai/"
            }
        },
        {
            title: "Seabrick NFT Platform",
            description: "Smart contract and minting platform for a sustainability project converting ocean waste into construction bricks. Each NFT represents a claimable physical brick.",
            tags: ["Solidity", "Hardhat", "TypeScript", "ERC721"]
        },
        {
            title: "Rain Studio & Explorer",
            description: "Frontend tools allowing users to browse, deploy, and interact with Rain-branded contracts across multiple networks, with on-chain interpreted language support.",
            tags: ["Svelte", "TypeScript", "GraphQL", "Subgraphs"]
        },
        {
            title: "ERC404 Hybrid Token",
            description: "Experimental hybrid token standard combining ERC20 and ERC721 behaviour with cross-standard compatibility and on-chain randomness via oracles.",
            tags: ["Solidity", "ERC404", "Hardhat", "TypeScript"]
        },
        {
            title: "Arbitrum Stylus Contract",
            description: "Smart contract written in Rust using Arbitrum Stylus, bridging Web3 payments with traditional bank payment rails.",
            tags: ["Rust", "Arbitrum Stylus", "Web3"]
        }
    ];
</script>

<Hero />

<section id="projects" class="py-20 w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
            <h2 class="text-3xl font-bold text-heading mb-2">Featured Work</h2>
            <p class="text-muted">A selection of my recent projects.</p>
        </div>
        <a href="https://github.com/NanezX" target="_blank" class="text-primary hover:text-heading transition-colors flex items-center gap-2 group">
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
