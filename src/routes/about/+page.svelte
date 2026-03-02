<script lang="ts">
    import { Code, Coffee, Globe, Heart, Briefcase, GraduationCap, MapPin, Mail, Download } from 'lucide-svelte';
    import { experiences, education, skills } from '$lib/data/resume';
    import ExperienceCard from '$lib/components/ExperienceCard.svelte';
    import SkillList from '$lib/components/SkillList.svelte';
</script>

<svelte:head>
    <title>About & CV – Víctor Hernández</title>
    <meta name="description" content="Víctor Hernández — Software Engineer. Professional experience, education, and technical skills." />
</svelte:head>

<div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Page header -->
    <header class="mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-heading mb-4">About Me</h1>
        <p class="text-lg text-muted max-w-2xl leading-relaxed">
            Software engineer with 5+ years of experience, built on a strong blockchain and smart contract foundation
            and now fully focused on AI engineering — designing LLM-powered systems, agentic architectures, and
            resilient backend infrastructure.
        </p>
        <p class="text-faint mt-3 max-w-2xl leading-relaxed">
            Comfortable going deep: from raw EVM bytecode and Solidity compiler internals to Python backends,
            cloud deployments, and production AI pipelines. Driven by hard problems and clean solutions.
        </p>
    </header>

    <div class="grid lg:grid-cols-[1fr_300px] gap-12">
        <!-- Main column -->
        <div class="space-y-16">
            <!-- Experience section -->
            <section>
                <div class="flex items-center gap-3 mb-8">
                    <div class="p-2 rounded-lg bg-primary/10 text-primary">
                        <Briefcase size={22} />
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-heading">Work Experience</h2>
                        <p class="text-sm text-faint">Professional roles & accomplishments</p>
                    </div>
                </div>
                <div class="space-y-6">
                    {#each experiences as job}
                        <ExperienceCard item={job} />
                    {/each}
                </div>
            </section>

            <!-- Education section -->
            <section>
                <div class="flex items-center gap-3 mb-8">
                    <div class="p-2 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap size={22} />
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-heading">Education</h2>
                        <p class="text-sm text-faint">Academic background</p>
                    </div>
                </div>
                <div class="space-y-6">
                    {#each education as edu}
                        <ExperienceCard item={edu} />
                    {/each}
                </div>
            </section>
        </div>

        <!-- Sidebar -->
        <aside class="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <!-- Skills card -->
            <div class="p-6 rounded-2xl bg-card border border-border">
                <h3 class="text-lg font-semibold text-heading mb-4 flex items-center gap-2">
                    <Code class="text-primary" size={18} /> Tech Stack
                </h3>
                <SkillList skills={skills} />
            </div>

            <!-- Interests card -->
            <div class="p-6 rounded-2xl bg-card border border-border">
                <h3 class="text-lg font-semibold text-heading mb-4">Interests</h3>
                <ul class="space-y-3 list-none">
                    <li class="flex items-center gap-3 text-body text-sm">
                        <Coffee class="text-primary shrink-0" size={18} />
                        <span>AI & LLM Systems</span>
                    </li>
                    <li class="flex items-center gap-3 text-body text-sm">
                        <Globe class="text-primary shrink-0" size={18} />
                        <span>Blockchain & Web3</span>
                    </li>
                    <li class="flex items-center gap-3 text-body text-sm">
                        <Heart class="text-primary shrink-0" size={18} />
                        <span>Open Source</span>
                    </li>
                </ul>
            </div>

            <!-- Quick contact card -->
            <div class="p-6 rounded-2xl bg-card border border-border">
                <h3 class="text-lg font-semibold text-heading mb-4">Get in touch</h3>
                <div class="space-y-3 text-sm text-muted">
                    <a href="mailto:victor.nanezj@gmail.com" class="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail size={16} class="shrink-0" /> victor.nanezj@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/nanezx" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
                        <MapPin size={16} class="shrink-0" /> Monagas, Venezuela
                    </a>
                </div>
            </div>
        </aside>
    </div>
</div>
