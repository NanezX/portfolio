<script lang="ts">
  import type { Skill } from '$lib/data/resume';

  interface Props {
    skills: Skill[];
  }

  let { skills }: Props = $props();

  // Group skills by category for better display
  const categories = ['Frontend', 'Backend', 'Tools', 'Design', 'Other'] as const;
</script>

<div class="space-y-4">
  {#each categories as category}
    {@const catSkills = skills.filter(s => s.category === category)}
    {#if catSkills.length > 0}
      <div>
        <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">{category}</p>
        <div class="flex flex-wrap gap-1.5">
          {#each catSkills as skill}
            <span class="px-2.5 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 hover:border-primary/50 hover:text-white transition-all cursor-default">
              {skill.name}
            </span>
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</div>
