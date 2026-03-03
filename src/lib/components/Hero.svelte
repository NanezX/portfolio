<script lang="ts">
  import { onMount } from 'svelte';
  
  let visible = $state(false);
  
  onMount(() => {
    visible = true;
  });
</script>

<!-- TODO: Improve this, something more personal -->
<section class="min-h-[80vh] flex flex-col justify-center relative overflow-hidden pt-20">
  <div class="max-w-5xl mx-auto px-6 relative z-10 text-center md:text-left">
    <div class="space-y-6 transition-all duration-1000 transform {visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h2 class="text-primary font-medium tracking-wide text-lg flex items-center gap-2 justify-center md:justify-start">
        <span class="w-8 h-[1px] bg-primary"></span>
        HI THERE 👋
      </h2>
      
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-heading leading-tight">
        Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-300pct">AI-powered systems</span><br />
        & resilient backends.
      </h1>
      
      <p class="text-xl text-muted max-w-2xl leading-relaxed mx-auto md:mx-0">
        I'm Víctor Hernández — a software engineer with 5+ years of experience, from deep blockchain internals to AI engineering, agentic architectures, and production infrastructure.
      </p>

      <div class="flex items-center gap-2 justify-center md:justify-start text-sm text-muted">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Currently @ Hypercycle — building AI inference infrastructure
      </div>

      <div class="pt-8 flex flex-wrap gap-4 justify-center md:justify-start">
        <a href="#projects" class="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          See My Work ↓
        </a>
        <a href="/about" class="px-8 py-4 bg-card text-heading rounded-full font-semibold hover:bg-border transition-all border border-border hover:border-border-hover">
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
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient {
    animation: gradient 6s ease infinite;
  }
</style>
