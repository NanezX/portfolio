<script lang="ts">
  import type { Experience, Education } from '$lib/data/resume';
  import { formatDuration } from '$lib/data/resume';
  import { MapPin, ExternalLink } from 'lucide-svelte';

  interface Props {
    item: Experience | Education;
  }

  let { item }: Props = $props();

  let isExperience = $derived('company' in item);
  let title = $derived(isExperience ? (item as Experience).company : (item as Education).school);
  let subtitle = $derived(isExperience ? (item as Experience).role : (item as Education).degree);
  let url = $derived(isExperience
    ? (item as Experience).companyUrl
    : (item as Education).schoolUrl);
  let location = $derived(item.location);
  let duration = $derived(formatDuration(item.startDate, item.endDate));

  let achievements = $derived(isExperience
    ? (item as Experience).achievements
    : (item as Education).achievements ?? []);

  let technologies = $derived(isExperience ? (item as Experience).technologies : []);
  let employmentType = $derived(isExperience ? (item as Experience).type : null);
  let summary = $derived(isExperience ? (item as Experience).summary : (item as Education).description);
  let field = $derived(!isExperience ? (item as Education).field : null);
</script>

<div class="relative pl-6 border-l-2 border-border hover:border-primary/60 transition-colors group">
  <!-- Timeline dot -->
  <div class="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-bg border-2 border-border-hover group-hover:border-primary group-hover:bg-primary/20 transition-colors"></div>

  <div class="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]">
    <!-- Header row -->
    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
      <div class="space-y-1">
        <div class="flex items-center gap-2 flex-wrap">
          <h3 class="text-xl font-bold text-heading group-hover:text-primary transition-colors">
            {#if url}
              <a href={url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                {title}
                <ExternalLink size={14} class="opacity-40" />
              </a>
            {:else}
              {title}
            {/if}
          </h3>
          {#if employmentType}
            <span class="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {employmentType}
            </span>
          {/if}
        </div>
        <p class="text-lg font-medium text-sub">{subtitle}</p>
        {#if field}
          <p class="text-sm text-muted">{field}</p>
        {/if}
      </div>

      <div class="flex flex-col items-start sm:items-end gap-1 shrink-0">
        <div class="px-3 py-1 rounded-full bg-card text-sm text-muted whitespace-nowrap font-mono border border-border">
          {item.startDate} – {item.endDate}
        </div>
        <div class="flex items-center gap-3 text-xs text-faint">
          <span>{duration}</span>
          {#if location}
            <span class="flex items-center gap-1">
              <MapPin size={12} />
              {location}
            </span>
          {/if}
        </div>
      </div>
    </div>

    <!-- Summary -->
    {#if summary}
      <p class="text-muted leading-relaxed mt-3 text-[0.95rem]">{summary}</p>
    {/if}

    <!-- Achievements -->
    {#if achievements.length > 0}
      <ul class="mt-4 space-y-2">
        {#each achievements as point}
          <li class="flex items-start gap-2 text-body text-sm leading-relaxed">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
            {point}
          </li>
        {/each}
      </ul>
    {/if}

    <!-- Technologies -->
    {#if technologies.length > 0}
      <div class="mt-4 flex flex-wrap gap-1.5">
        {#each technologies as tech}
          <span class="px-2.5 py-0.5 text-xs font-medium rounded-full bg-card text-muted border border-border group-hover:border-primary/15 group-hover:text-body transition-colors">
            {tech}
          </span>
        {/each}
      </div>
    {/if}
  </div>
</div>
