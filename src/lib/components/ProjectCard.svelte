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
    class="group bg-card border-border hover:border-primary/50 relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  >
    <!-- Background Glow -->
    <div
      class="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></div>

    {#if image}
      <div class="aspect-video w-full overflow-hidden rounded-lg bg-black/20">
        <img
          src={image}
          alt={title}
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    {/if}

    <div class="relative z-10 flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-heading group-hover:text-primary text-xl font-bold transition-colors">
          {title}
        </h3>
        {#if badge}
          <span class="rounded-full border border-blue-500 px-2 py-0.5 text-xs text-blue-500">
            {badge.text}
          </span>
        {/if}
      </div>
      <p class="text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>

    <div class="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
      {#each tags as tag}
        <span
          class="bg-card text-body border-border group-hover:border-primary/20 group-hover:text-primary/90 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
        >
          {tag}
        </span>
      {/each}
    </div>

    <div class="relative z-10 mt-auto pt-2">
      <span class="text-primary flex items-center gap-1 text-sm">
        {link.text}
      </span>
    </div>
  </a>
{:else}
  <div
    class="group bg-card border-border hover:border-primary/50 relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  >
    <!-- Background Glow -->
    <div
      class="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></div>

    {#if image}
      <div class="aspect-video w-full overflow-hidden rounded-lg bg-black/20">
        <img
          src={image}
          alt={title}
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    {/if}

    <div class="relative z-10 flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-heading group-hover:text-primary text-xl font-bold transition-colors">
          {title}
        </h3>
        {#if badge}
          <span class="rounded-full border border-blue-500 px-2 py-0.5 text-xs text-blue-500">
            {badge.text}
          </span>
        {/if}
      </div>
      <p class="text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>

    <div class="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
      {#each tags as tag}
        <span
          class="bg-card text-body border-border group-hover:border-primary/20 group-hover:text-primary/90 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
        >
          {tag}
        </span>
      {/each}
    </div>
  </div>
{/if}
