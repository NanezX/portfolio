<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="border-border bg-bg/50 mt-auto w-full border-t py-8 backdrop-blur-sm">
	<div
		class="text-faint mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row"
	>
		<p>&copy; {year} Víctor Hernández. Built with SvelteKit & Tailwind.</p>
		<div class="flex gap-6">
			<a
				href="https://github.com/NanezX"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-primary transition-colors">GitHub</a
			>
			<a
				href="https://linkedin.com/in/nanezx"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-primary transition-colors">LinkedIn</a
			>
			<a href="mailto:victor.nanezj@gmail.com" class="hover:text-primary transition-colors">Email</a
			>
		</div>
	</div>
</footer>
