<script lang="ts">
  interface Props {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: {
      text: string;
      url: string;
    };
    badge?: {
      text: string;
      color?: string;
    };
  }

  let { title, description, tags, image, link, badge }: Props = $props();
</script>

{#if link}
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    class="group relative flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden cursor-pointer"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {#if image}
      <div class="w-full aspect-video rounded-lg overflow-hidden bg-black/20">
        <img src={image} alt={title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
    {/if}

    <div class="relative z-10 flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-xl font-bold text-heading group-hover:text-primary transition-colors">{title}</h3>
        {#if badge}
          <span class="text-xs px-2 py-0.5 rounded-full border border-blue-500 text-blue-500">
            {badge.text}
          </span>
        {/if}
      </div>
      <p class="text-muted leading-relaxed text-sm">
        {description}
      </p>
    </div>

    <div class="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
      {#each tags as tag}
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-card text-body border border-border group-hover:border-primary/20 group-hover:text-primary/90 transition-colors">
          {tag}
        </span>
      {/each}
    </div>

    <div class="relative z-10 pt-2 mt-auto">
      <span class="text-sm text-primary flex items-center gap-1">
        {link.text}
      </span>
    </div>
  </a>
{:else}
  <div
    class="group relative flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {#if image}
      <div class="w-full aspect-video rounded-lg overflow-hidden bg-black/20">
        <img src={image} alt={title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
    {/if}

    <div class="relative z-10 flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-xl font-bold text-heading group-hover:text-primary transition-colors">{title}</h3>
        {#if badge}
          <span class="text-xs px-2 py-0.5 rounded-full border border-blue-500 text-blue-500">
            {badge.text}
          </span>
        {/if}
      </div>
      <p class="text-muted leading-relaxed text-sm">
        {description}
      </p>
    </div>

    <div class="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
      {#each tags as tag}
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-card text-body border border-border group-hover:border-primary/20 group-hover:text-primary/90 transition-colors">
          {tag}
        </span>
      {/each}
    </div>
  </div>
{/if}
