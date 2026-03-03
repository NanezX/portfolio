<script lang="ts">
	import logoIcon from '$lib/assets/logo.png';
	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { resolve } from '$app/paths';

	let isOpen = $state(false);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Journal', href: '/journal' },
		{ name: 'About', href: '/about' }
	] as const;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="bg-bg/80 border-border fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href={resolve("/")} class="group flex items-center gap-2">
			<img
				src={logoIcon}
				alt="Logo"
				class="border-border bg-card hover:border-primary/50 h-12 w-auto rounded-xl border p-1.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
			/>
		</a>

		<!-- Desktop Menu -->
		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link (link.href)}
				{@const isActive = page.url.pathname === link.href}
				<a
					href={resolve(link.href)}
					class={[
						'group relative py-2 text-sm font-medium tracking-wide transition-colors',
						{
							'text-heading': isActive,
							'text-muted hover:text-heading': !isActive
						}
					]}
				>
					{link.name}
					{#if isActive}
						<span
							class="bg-primary absolute bottom-0 left-0 h-0.5 w-full shadow-[0_0_10px_var(--color-primary)]"
						></span>
					{/if}
					<span
						class="bg-primary absolute bottom-0 left-0 h-0.5 w-0 opacity-50 transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-3">
			<ThemeToggle />
			<!-- Mobile Menu Button -->
			<button
				class="text-muted hover:text-heading p-2 md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if isOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Dropdown -->
	{#if isOpen}
		<div
			class="bg-bg/95 border-border animate-in fade-in slide-in-from-top-4 absolute top-full left-0 flex w-full flex-col gap-4 border-b p-6 shadow-2xl backdrop-blur-xl md:hidden"
		>
			{#each navLinks as link (link.href)}
				{@const isActive = page.url.pathname === link.href}
				<a
					href={resolve(link.href)}
					class={[
						'rounded-lg p-2 text-lg font-medium',
						{
							'bg-card text-primary': isActive,
							'text-body hover:bg-card': !isActive
						}
					]}
					onclick={() => (isOpen = false)}
				>
					{link.name}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	/* Ensure nav doesn't overlap content content by adding padding to body or main via layout */
</style>
