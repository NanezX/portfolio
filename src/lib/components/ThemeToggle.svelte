<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte';
  import { themeState } from '$lib/theme.svelte';
</script>

<button
  onclick={() => themeState.toggle()}
  class="relative p-2 rounded-lg border border-border hover:border-border-hover text-muted hover:text-heading transition-all duration-300 cursor-pointer"
  aria-label={themeState.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if themeState.isDark}
    <Sun size={18} />
  {:else}
    <Moon size={18} />
  {/if}
</button>
