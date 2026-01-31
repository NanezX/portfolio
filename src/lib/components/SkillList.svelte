<script lang="ts">
  import type { Skill } from '$lib/data/resume';

  export let skills: Skill[];
</script>

<div class="flex flex-wrap gap-2">
  {#each skills as skill}
    <span class="px-3 py-1 bg-dark rounded-full text-sm text-gray-300 border border-white/10 hover:border-primary/50 hover:text-white transition-all cursor-default">
      {skill.name}
    </span>
  {/each}
</div>
