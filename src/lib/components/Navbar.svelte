<script lang="ts">
	import logoIcon from '$lib/assets/logo.png';
	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';

	let isOpen = $state(false);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Journal', href: '/journal' },
		{ name: 'About', href: '/about' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-dark/80 border-b border-white/5">
	<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 group">
			<img 
				src={logoIcon} 
				alt="Logo" 
				class="h-12 w-auto rounded-xl border border-white/10 bg-white/5 p-1.5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300" 
			/>
		</a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
      {#each navLinks as link (link.href)}
      {@const isActive = page.url.pathname === link.href}
        <a 
          href={link.href} 
          class={[
            "text-sm font-medium tracking-wide transition-colors relative group py-2",
            {
              "text-white": isActive,
              "text-gray-400 hover:text-white": !isActive
              }
            ]}
        >
          {link.name}
          {#if isActive}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_var(--color-primary)]"></span>
          {/if}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-50"></span>
        </a>
      {/each}
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden text-gray-400 hover:text-white p-2" onclick={toggleMenu} aria-label="Toggle menu">
      {#if isOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile Dropdown -->
  {#if isOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
      {#each navLinks as link (link.href)}
        {@const isActive = page.url.pathname === link.href}
        <a 
          href={link.href} 
          class={["text-lg font-medium p-2 rounded-lg",{
            "bg-white/5 text-primary": isActive,
            "text-gray-300 hover:bg-white/5": !isActive
          }]}
          onclick={() => isOpen = false}
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
