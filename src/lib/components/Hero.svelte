<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<!-- TODO: Improve this, something more personal -->
<section class="relative flex min-h-[80vh] flex-col justify-center overflow-hidden pt-20">
	<div class="relative z-10 mx-auto max-w-5xl px-6 text-center md:text-left">
		<div
			class="transform space-y-6 transition-all duration-1000 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<h2
				class="text-primary flex items-center justify-center gap-2 text-lg font-medium tracking-wide md:justify-start"
			>
				<span class="bg-primary h-[1px] w-8"></span>
				HI THERE 👋
			</h2>

			<h1
				class="text-heading text-5xl leading-tight font-bold tracking-tight md:text-7xl lg:text-8xl"
			>
				Building <span
					class="from-primary via-secondary to-primary animate-gradient bg-300pct bg-gradient-to-r bg-clip-text text-transparent"
					>AI-powered systems</span
				><br />
				& resilient backends.
			</h1>

			<p class="text-muted mx-auto max-w-2xl text-xl leading-relaxed md:mx-0">
				I'm Víctor Hernández — a software engineer with 5+ years of experience, from deep blockchain
				internals to AI engineering, agentic architectures, and production infrastructure.
			</p>

			<div class="text-muted flex items-center justify-center gap-2 text-sm md:justify-start">
				<span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
				Currently @ Hypercycle — building AI inference infrastructure
			</div>

			<div class="flex flex-wrap justify-center gap-4 pt-8 md:justify-start">
				<a
					href="#projects"
					class="bg-primary hover:bg-primary/90 rounded-full px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
				>
					See My Work ↓
				</a>
				<a
					href="/about"
					class="bg-card text-heading hover:bg-border border-border hover:border-border-hover rounded-full border px-8 py-4 font-semibold transition-all"
				>
					About Me
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.bg-300pct {
		background-size: 300% auto;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient {
		animation: gradient 6s ease infinite;
	}
</style>
