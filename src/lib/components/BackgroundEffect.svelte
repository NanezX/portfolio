<script lang="ts">
import { onMount } from 'svelte';
import { Code, Binary, Terminal, Braces, Cpu, Globe } from 'lucide-svelte';

const icons = [Code, Binary, Terminal, Braces, Cpu, Globe];

// Create a fixed set of floating items to avoid hydration mismatches or performance issues
// We generate random positions for them
let floatingItems = $state<
  {
    id: number;
    component: any;
    x: number;
    y: number;
    duration: number;
    delay: number;
    scale: number;
    rotate: number;
  }[]
>([]);

onMount(() => {
  floatingItems = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    component: icons[Math.floor(Math.random() * icons.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 25 + Math.random() * 25, // 25-50s duration (Very slow)
    delay: Math.random() * -50, // Negative delay to start at random point
    scale: 0.8 + Math.random() * 0.7, // Random size
    rotate: Math.random() * 360,
  }));
});
</script>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <!-- Floating Icons -->
  {#each floatingItems as item (item.id)}
    <div
      class="text-icon floating-icon absolute"
      style="
                --x: {item.x}%; 
                --y: {item.y}%; 
                --duration: {item.duration}s;
                --delay: {item.delay}s;
                --scale: {item.scale};
                --rotate: {item.rotate}deg;
            "
    >
      <item.component size={24} />
    </div>
  {/each}
</div>

<style>
.floating-icon {
  left: var(--x);
  top: var(--y);
  /* Combine animations: float for movement/rotate, breathe for opacity/scale */
  animation:
    float var(--duration) infinite linear,
    breathe 8s infinite ease-in-out;
  animation-delay: var(--delay);
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(var(--rotate)) scale(var(--scale));
  }
  50% {
    /* Move up slightly and rotate a bit more */
    transform: translate(0, -30px) rotate(calc(var(--rotate) + 15deg)) scale(var(--scale));
  }
  100% {
    transform: translate(0, 0) rotate(var(--rotate)) scale(var(--scale));
  }
}

@keyframes breathe {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}
</style>
