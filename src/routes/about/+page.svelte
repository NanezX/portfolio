<script lang="ts">
    import { Code, Coffee, Globe, Heart, Briefcase, GraduationCap, MapPin, Mail, Download } from 'lucide-svelte';
    import { experiences, education, skills } from '$lib/data/resume';
    import ExperienceCard from '$lib/components/ExperienceCard.svelte';
    import SkillList from '$lib/components/SkillList.svelte';
</script>

<svelte:head>
    <title>About & CV – Portfolio</title>
    <meta name="description" content="My professional experience, education, and technical skills." />
</svelte:head>

<div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Page header -->
    <header class="mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-heading mb-4">About Me</h1>
        <!-- TODO: Actually Write about me -->
        <p class="text-lg text-muted max-w-2xl leading-relaxed">
            Hello! I'm a passionate developer who loves bridging the gap between design and engineering.
            I believe that a website should not only look good but feel "alive" through smooth interactions and intuitive UX.
        </p>
        <p class="text-faint mt-3 max-w-2xl leading-relaxed">
            My journey began when I inspected element on a webpage and realized I could change the headlines.
            Since then, I've been hooked on the infinite possibilities of the web.
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
                        <span>Coffee Enthusiast</span>
                    </li>
                    <li class="flex items-center gap-3 text-body text-sm">
                        <Globe class="text-primary shrink-0" size={18} />
                        <span>Travel</span>
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
                    <a href="mailto:hello@example.com" class="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail size={16} class="shrink-0" /> hello@example.com
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
                        <MapPin size={16} class="shrink-0" /> San Francisco, CA
                    </a>
                </div>
            </div>
        </aside>
    </div>
</div>
