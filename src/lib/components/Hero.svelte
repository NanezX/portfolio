<script lang="ts">
  import { onMount } from 'svelte';
  
  let visible = $state(false);
  
  onMount(() => {
    visible = true;
  });
</script>

<section class="min-h-[80vh] flex flex-col justify-center relative overflow-hidden pt-20">
  <!-- Glowing Background Orbs -->
  <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

  <div class="max-w-5xl mx-auto px-6 relative z-10 text-center md:text-left">
    <div class="space-y-6 transition-all duration-1000 transform {visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h2 class="text-primary font-medium tracking-wide text-lg flex items-center gap-2 justify-center md:justify-start">
        <span class="w-8 h-[1px] bg-primary"></span>
        HI THERE 👋
      </h2>
      
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
        Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-300pct">digital experiences</span><br />
        that spark joy.
      </h1>
      
      <p class="text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
        I'm a full-stack developer specializing in building exceptional digital experiences. 
        Currently focused on accessible, human-centered products.
      </p>

      <div class="pt-8 flex flex-wrap gap-4 justify-center md:justify-start">
        <a href="#projects" class="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          View Projects
        </a>
        <a href="/about" class="px-8 py-4 bg-white/5 text-white rounded-full font-semibold hover:bg-white/10 transition-all border border-white/10 hover:border-white/20">
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
