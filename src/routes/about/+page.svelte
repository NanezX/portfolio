<script lang="ts">
    import { Code, Coffee, Globe, Heart, Briefcase, GraduationCap } from 'lucide-svelte';
    import { experiences, education, skills } from '$lib/data/resume';
    import ExperienceCard from '$lib/components/ExperienceCard.svelte';
    import SkillList from '$lib/components/SkillList.svelte';
</script>

<div class="max-w-4xl mx-auto px-6 py-20">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h1>
    
    <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 space-y-12">
            <section class="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                    Hello! I'm a passionate developer who loves bridging the gap between design and engineering.
                    I believe that a website should not only look good but felt "alive" through smooth interactions and intuitive UX.
                </p>
                <p>
                    My journey began when I inspected element on a webpage and realized I could change the headlines. 
                    Since then, I've been hooked on the infinite possibilities of the web.
                </p>
                
                <div class="space-y-4 pt-4">
                     <h3 class="text-2xl font-semibold text-white flex items-center gap-2">
                        <Briefcase class="text-primary" /> Experience
                    </h3>
                    <div class="space-y-4">
                        {#each experiences as job}
                            <ExperienceCard item={job} />
                        {/each}
                    </div>
                </div>

                <div class="space-y-4 pt-4">
                    <h3 class="text-2xl font-semibold text-white flex items-center gap-2">
                       <GraduationCap class="text-primary" /> Education
                   </h3>
                   <div class="space-y-4">
                       {#each education as edu}
                           <ExperienceCard item={edu} />
                       {/each}
                   </div>
               </div>
            </section>
        </div>
        
        <div class="space-y-8">
             <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code class="text-primary" /> Tech Stack
                </h3>
                <SkillList skills={skills} />
            </div>

            <div class="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h3 class="text-xl font-semibold text-white mb-4">Interests</h3>
                <ul class="space-y-4 list-none">
                    <li class="flex items-center gap-3 text-gray-300">
                        <Coffee class="text-primary" size={20} />
                        <span>Coffee Enthusiast</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-300">
                        <Globe class="text-primary" size={20} />
                        <span>Travel</span>
                    </li>
                     <li class="flex items-center gap-3 text-gray-300">
                        <Heart class="text-primary" size={20} />
                        <span>Open Source</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
