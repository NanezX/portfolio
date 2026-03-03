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
	let url = $derived(
		isExperience ? (item as Experience).companyUrl : (item as Education).schoolUrl
	);
	let location = $derived(item.location);
	let duration = $derived(formatDuration(item.startDate, item.endDate));

	let achievements = $derived(
		isExperience ? (item as Experience).achievements : ((item as Education).achievements ?? [])
	);

	let technologies = $derived(isExperience ? (item as Experience).technologies : []);
	let employmentType = $derived(isExperience ? (item as Experience).type : null);
	let summary = $derived(
		isExperience ? (item as Experience).summary : (item as Education).description
	);
	let field = $derived(!isExperience ? (item as Education).field : null);
</script>

<div class="border-border hover:border-primary/60 group relative border-l-3 pl-6 transition-colors">
	<!-- Timeline dot -->
	<div
		class="bg-primary border-bg absolute top-1 -left-[9px] h-4 w-4 rounded-full border-2 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all"
	></div>

	<div
		class="bg-card border-border hover:border-primary/30 rounded-2xl border p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
	>
		<!-- Header row -->
		<div class="mb-1 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
			<div class="space-y-1">
				<div class="flex flex-wrap items-center gap-2">
					<h3 class="text-heading group-hover:text-primary text-xl font-bold transition-colors">
						{#if url}
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer external"
								class="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
							>
								{title}
								<ExternalLink size={14} class="opacity-40" />
							</a>
						{:else}
							{title}
						{/if}
					</h3>
					{#if employmentType}
						<span
							class="bg-primary/10 text-primary border-primary/20 rounded-full border px-2 py-0.5 text-xs font-medium"
						>
							{employmentType}
						</span>
					{/if}
				</div>
				<p class="text-sub text-lg font-medium">{subtitle}</p>
				{#if field}
					<p class="text-muted text-sm">{field}</p>
				{/if}
			</div>

			<div class="flex shrink-0 flex-col items-start gap-1 sm:items-end">
				<div
					class="bg-card text-muted border-border rounded-full border px-3 py-1 font-mono text-sm whitespace-nowrap"
				>
					{item.startDate} – {item.endDate}
				</div>
				<div class="text-faint flex items-center gap-3 text-xs">
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
			<p class="text-muted mt-3 text-[0.95rem] leading-relaxed">{summary}</p>
		{/if}

		<!-- Achievements -->
		{#if achievements.length > 0}
			<ul class="mt-4 space-y-2">
				{#each achievements as point, index (index)}
					<li class="text-body flex items-start gap-2 text-sm leading-relaxed">
						<span class="bg-primary/60 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"></span>
						{point}
					</li>
				{/each}
			</ul>
		{/if}

		<!-- Technologies -->
		{#if technologies.length > 0}
			<div class="mt-4 flex flex-wrap gap-1.5">
				{#each technologies as tech, index (index)}
					<span
						class="bg-card text-muted border-border group-hover:border-primary/15 group-hover:text-body rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
					>
						{tech}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
