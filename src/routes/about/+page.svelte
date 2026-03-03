<script lang="ts">
    import { experiences, education, skills, formatDuration } from '$lib/data/resume';
</script>

<svelte:head>
    <title>About - Víctor Hernández</title>
    <meta name="description" content="Víctor Hernández — Software Engineer. Professional experience, education, and technical skills." />
</svelte:head>

<div class="w-full max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20">
    <!-- Hero Section -->
    <header class="mb-16 md:mb-20">
        <h1 class="text-4xl md:text-6xl font-bold text-heading mb-6 md:mb-8">
            Software Engineer
        </h1>
        <p class="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mb-6">
            Software engineer with 5+ years of experience, built on a strong blockchain and smart contract foundation
            and now fully focused on AI engineering.
        </p>
        <p class="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
            Comfortable going deep: from raw EVM bytecode and Solidity compiler internals to Python backends,
            cloud deployments, and production AI pipelines. Driven by hard problems and clean solutions.
        </p>
    </header>

    <!-- Current Focus Section -->
    <section class="py-12 md:py-20 border-l-4 border-primary pl-6 mb-16 md:mb-20">
        <h2 class="text-sm uppercase tracking-widest text-faint mb-4">Current Focus</h2>
        <p class="text-2xl md:text-3xl font-medium text-primary leading-relaxed">
            Designing LLM-powered systems, agentic architectures, and resilient backend infrastructure.
        </p>
    </section>

    <!-- TODO: Possible improvement - Generate the array before rendering here -->
    <!-- Technical Capabilities Grid -->
    <section class="py-12 md:py-20">
        <h2 class="text-3xl md:text-4xl font-bold text-heading mb-8 md:mb-12">
            Technical Capabilities
        </h2>
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
            <!-- AI / ML -->
            <div>
                <h3 class="text-sm uppercase tracking-widest text-muted font-semibold mb-4">
                    AI / ML & LLMs
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each skills.filter(s => s.category === 'AI / ML') as skill}
                        <span class="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 rounded-full">
                            {skill.name}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Backend & Infrastructure -->
            <div>
                <h3 class="text-sm uppercase tracking-widest text-muted font-semibold mb-4">
                    Backend & Infrastructure
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each [...skills.filter(s => s.category === 'Backend'), ...skills.filter(s => s.category === 'Cloud / Infra')] as skill}
                        <span class="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 rounded-full">
                            {skill.name}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Blockchain & Web3 -->
            <div>
                <h3 class="text-sm uppercase tracking-widest text-muted font-semibold mb-4">
                    Blockchain & Web3
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each skills.filter(s => s.category === 'Blockchain') as skill}
                        <span class="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 rounded-full">
                            {skill.name}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Languages & Frameworks -->
            <div>
                <h3 class="text-sm uppercase tracking-widest text-muted font-semibold mb-4">
                    Languages & Frameworks
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each [...skills.filter(s => s.category === 'Languages'), ...skills.filter(s => s.category === 'Frontend')] as skill}
                        <span class="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 rounded-full">
                            {skill.name}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section class="py-12 md:py-20">
        <h2 class="text-3xl md:text-4xl font-bold text-heading mb-8 md:mb-12">
            Experience
        </h2>
        <div class="space-y-12 md:space-y-16">
            {#each experiences as job, i}
                <div class="py-10 border-b border-border/50 last:border-0">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold text-heading mb-1">
                                {#if job.companyUrl}
                                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
                                        {job.company}
                                    </a>
                                {:else}
                                    {job.company}
                                {/if}
                            </h3>
                            <p class="text-lg text-primary">{job.role}</p>
                        </div>
                        <span class="text-sm text-muted font-mono whitespace-nowrap">
                            {job.startDate} – {job.endDate}
                        </span>
                    </div>
                    <p class="text-muted mb-4 text-base leading-relaxed">{job.summary}</p>

                    {#if job.achievements.length > 0}
                        <ul class="mb-4 space-y-2">
                            {#each job.achievements as point}
                                <li class="flex items-start gap-2 text-body text-sm leading-relaxed">
                                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                    {point}
                                </li>
                            {/each}
                        </ul>
                    {/if}

                    {#if job.technologies.length > 0}
                        <div class="flex flex-wrap gap-1.5">
                            {#each job.technologies as tech}
                                <span class="px-2.5 py-0.5 text-xs font-medium text-muted border border-border/40 rounded-full">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </section>

    <!-- Education Section -->
    <section class="py-12 md:py-20">
        <h2 class="text-3xl md:text-4xl font-bold text-heading mb-8 md:mb-12">
            Education
        </h2>
        <div class="space-y-12 md:space-y-16">
            {#each education as edu}
                <div class="py-10 border-b border-border/50 last:border-0">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold text-heading mb-1">
                                {#if edu.schoolUrl}
                                    <a href={edu.schoolUrl} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
                                        {edu.school}
                                    </a>
                                {:else}
                                    {edu.school}
                                {/if}
                            </h3>
                            <p class="text-lg text-primary">{edu.degree}</p>
                            {#if edu.field}
                                <p class="text-sm text-muted">{edu.field}</p>
                            {/if}
                        </div>
                        <span class="text-sm text-muted font-mono whitespace-nowrap">
                            {edu.startDate} – {edu.endDate}
                        </span>
                    </div>
                    <p class="text-muted mb-4 text-base leading-relaxed">{edu.description}</p>

                    {#if edu.achievements && edu.achievements.length > 0}
                        <ul class="space-y-2">
                            {#each edu.achievements as point}
                                <li class="flex items-start gap-2 text-body text-sm leading-relaxed">
                                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                    {point}
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </div>
    </section>

    <!-- Contact Section -->
    <footer class="py-12 md:py-20 border-t border-border/50">
        <h2 class="text-sm uppercase tracking-widest text-faint mb-6">Get in Touch</h2>
        <div class="space-y-3">
            <a href="mailto:victor.nanezj@gmail.com" class="text-blue-600 hover:underline">
                victor.nanezj@gmail.com
            </a>
            <a href="https://linkedin.com/in/nanezx" target="_blank" rel="noopener noreferrer" class="block text-blue-600 hover:underline">
                LinkedIn
            </a>
        </div>
    </footer>
</div>
