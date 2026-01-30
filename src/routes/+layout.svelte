<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Personal portfolio showcasing my work and skills" />
	<title>My Portfolio - SvelteKit</title>
</svelte:head>

{@render children()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
