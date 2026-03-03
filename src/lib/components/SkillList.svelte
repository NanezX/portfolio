<script lang="ts">
	import type { Skill } from '$lib/data/resume';

	interface Props {
		skills: Skill[];
	}

	let { skills }: Props = $props();

	// Group skills by category for better display
	const categories = [
		'Languages',
		'Frontend',
		'Backend',
		'Blockchain',
		'AI / ML',
		'Cloud / Infra',
		'Other'
	] as const;
</script>

<div class="space-y-4">
	{#each categories as category (category)}
		{@const catSkills = skills.filter((s) => s.category === category)}
		{#if catSkills.length > 0}
			<div>
				<p class="text-faint mb-2 text-xs tracking-wider uppercase">{category}</p>
				<div class="flex flex-wrap gap-1.5">
					{#each catSkills as skill (skill.name)}
						<span
							class="bg-card text-body border-border hover:border-primary/50 hover:text-heading cursor-default rounded-full border px-2.5 py-1 text-xs transition-all"
						>
							{skill.name}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</div>
