<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="w-full py-8 mt-auto border-t border-border bg-bg/50 backdrop-blur-sm">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-faint">
    <p>&copy; {year} Víctor Hernández. Built with SvelteKit & Tailwind.</p>
    <div class="flex gap-6">
      <a href="https://github.com/NanezX" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">GitHub</a>
      <a href="https://linkedin.com/in/nanezx" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">LinkedIn</a>
      <a href="mailto:victor.nanezj@gmail.com" class="hover:text-primary transition-colors">Email</a>
    </div>
  </div>
</footer>
