<script lang="ts">
  import type { Experience, Education } from '$lib/data/resume';

  export let item: Experience | Education;
  
  // Helper to check if it's an Experience (has company) vs Education (has school)
  $: title = 'company' in item ? item.company : item.school;
  $: subtitle = 'role' in item ? item.role : item.degree;
</script>

<div class="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors group">
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
    <div>
      <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
      <p class="text-lg text-primary">{subtitle}</p>
    </div>
    <div class="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400 whitespace-nowrap self-start md:self-auto">
      {item.startDate} - {item.endDate}
    </div>
  </div>
  <p class="text-gray-300 leading-relaxed">
    {item.description}
  </p>
</div>
