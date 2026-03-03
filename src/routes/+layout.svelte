<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackgroundEffect from '$lib/components/BackgroundEffect.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Personal portfolio showcasing my work and skills" />
	<title>Portfolio - SvelteKit</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<BackgroundEffect />
	<Navbar />
	<main class="flex-grow pt-16">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}
</style>
