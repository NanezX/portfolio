<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="w-full py-8 mt-auto border-t border-border bg-bg/50 backdrop-blur-sm">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-faint">
    <p>&copy; {year} Portfolio. Built with SvelteKit & Tailwind.</p>
    <div class="flex gap-6">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">GitHub</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">Twitter</a>
      <a href="mailto:hello@example.com" class="hover:text-primary transition-colors">Email</a>
    </div>
  </div>
</footer>
