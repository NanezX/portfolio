<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { themeState } from '$lib/theme.svelte';
</script>

<button
	onclick={() => themeState.toggle()}
	class="border-border hover:border-border-hover text-muted hover:text-heading relative cursor-pointer rounded-lg border p-2 transition-all duration-300"
	aria-label={themeState.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if themeState.isDark}
		<Sun size={18} />
	{:else}
		<Moon size={18} />
	{/if}
</button>
