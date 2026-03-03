<script lang="ts">
	import { experiences, education, skills } from '$lib/data/resume';
</script>

<svelte:head>
	<title>About - Víctor Hernández</title>
	<meta
		name="description"
		content="Víctor Hernández — Software Engineer. Professional experience, education, and technical skills."
	/>
</svelte:head>

<div class="mx-auto w-full max-w-3xl px-6 py-12 md:px-8 md:py-20">
	<!-- Hero Section -->
	<header class="mb-16 md:mb-20">
		<h1 class="text-heading mb-6 text-4xl font-bold md:mb-8 md:text-6xl">Software Engineer</h1>
		<p class="text-muted mb-6 max-w-2xl text-xl leading-relaxed md:text-2xl">
			Software engineer with 5+ years of experience, built on a strong blockchain and smart contract
			foundation and now fully focused on AI engineering.
		</p>
		<p class="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
			Comfortable going deep: from raw EVM bytecode and Solidity compiler internals to Python
			backends, cloud deployments, and production AI pipelines. Driven by hard problems and clean
			solutions.
		</p>
	</header>

	<!-- Current Focus Section -->
	<section class="border-primary mb-16 border-l-4 py-12 pl-6 md:mb-20 md:py-20">
		<h2 class="text-faint mb-4 text-sm tracking-widest uppercase">Current Focus</h2>
		<p class="text-primary text-2xl leading-relaxed font-medium md:text-3xl">
			Designing LLM-powered systems, agentic architectures, and resilient backend infrastructure.
		</p>
	</section>

	<!-- TODO: Possible improvement - Generate the array before rendering here -->
	<!-- Technical Capabilities Grid -->
	<section class="py-12 md:py-20">
		<h2 class="text-heading mb-8 text-3xl font-bold md:mb-12 md:text-4xl">
			Technical Capabilities
		</h2>
		<div class="grid gap-8 md:grid-cols-2 md:gap-12">
			<!-- AI / ML -->
			<div>
				<h3 class="text-muted mb-4 text-sm font-semibold tracking-widest uppercase">
					AI / ML & LLMs
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each skills.filter((s) => s.category === 'AI / ML') as skill}
						<span
							class="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
						>
							{skill.name}
						</span>
					{/each}
				</div>
			</div>

			<!-- Backend & Infrastructure -->
			<div>
				<h3 class="text-muted mb-4 text-sm font-semibold tracking-widest uppercase">
					Backend & Infrastructure
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each [...skills.filter((s) => s.category === 'Backend'), ...skills.filter((s) => s.category === 'Cloud / Infra')] as skill}
						<span
							class="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
						>
							{skill.name}
						</span>
					{/each}
				</div>
			</div>

			<!-- Blockchain & Web3 -->
			<div>
				<h3 class="text-muted mb-4 text-sm font-semibold tracking-widest uppercase">
					Blockchain & Web3
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each skills.filter((s) => s.category === 'Blockchain') as skill}
						<span
							class="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
						>
							{skill.name}
						</span>
					{/each}
				</div>
			</div>

			<!-- Languages & Frameworks -->
			<div>
				<h3 class="text-muted mb-4 text-sm font-semibold tracking-widest uppercase">
					Languages & Frameworks
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each [...skills.filter((s) => s.category === 'Languages'), ...skills.filter((s) => s.category === 'Frontend')] as skill}
						<span
							class="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
						>
							{skill.name}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Experience Section -->
	<section class="py-12 md:py-20">
		<h2 class="text-heading mb-8 text-3xl font-bold md:mb-12 md:text-4xl">Experience</h2>
		<div class="space-y-12 md:space-y-16">
			{#each experiences as job}
				<div class="border-border/50 border-b py-10 last:border-0">
					<div class="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
						<div>
							<h3 class="text-heading mb-1 text-xl font-semibold md:text-2xl">
								{#if job.companyUrl}
									<a
										href={job.companyUrl}
										target="_blank"
										rel="noopener noreferrer external"
										class="hover:text-primary transition-colors"
									>
										{job.company}
									</a>
								{:else}
									{job.company}
								{/if}
							</h3>
							<p class="text-primary text-lg">{job.role}</p>
						</div>
						<span class="text-muted font-mono text-sm whitespace-nowrap">
							{job.startDate} – {job.endDate}
						</span>
					</div>
					<p class="text-muted mb-4 text-base leading-relaxed">{job.summary}</p>

					{#if job.achievements.length > 0}
						<ul class="mb-4 space-y-2">
							{#each job.achievements as point}
								<li class="text-body flex items-start gap-2 text-sm leading-relaxed">
									<span class="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"></span>
									{point}
								</li>
							{/each}
						</ul>
					{/if}

					{#if job.technologies.length > 0}
						<div class="flex flex-wrap gap-1.5">
							{#each job.technologies as tech}
								<span
									class="text-muted border-border/40 rounded-full border px-2.5 py-0.5 text-xs font-medium"
								>
									{tech}
								</span>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- Education Section -->
	<section class="py-12 md:py-20">
		<h2 class="text-heading mb-8 text-3xl font-bold md:mb-12 md:text-4xl">Education</h2>
		<div class="space-y-12 md:space-y-16">
			{#each education as edu}
				<div class="border-border/50 border-b py-10 last:border-0">
					<div class="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
						<div>
							<h3 class="text-heading mb-1 text-xl font-semibold md:text-2xl">
								{#if edu.schoolUrl}
									<a
										href={edu.schoolUrl}
										target="_blank"
										rel="noopener noreferrer external"
										class="hover:text-primary transition-colors"
									>
										{edu.school}
									</a>
								{:else}
									{edu.school}
								{/if}
							</h3>
							<p class="text-primary text-lg">{edu.degree}</p>
							{#if edu.field}
								<p class="text-muted text-sm">{edu.field}</p>
							{/if}
						</div>
						<span class="text-muted font-mono text-sm whitespace-nowrap">
							{edu.startDate} – {edu.endDate}
						</span>
					</div>
					<p class="text-muted mb-4 text-base leading-relaxed">{edu.description}</p>

					{#if edu.achievements && edu.achievements.length > 0}
						<ul class="space-y-2">
							{#each edu.achievements as point}
								<li class="text-body flex items-start gap-2 text-sm leading-relaxed">
									<span class="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"></span>
									{point}
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- Contact Section -->
	<footer class="border-border/50 border-t py-12 md:py-20">
		<h2 class="text-faint mb-6 text-sm tracking-widest uppercase">Get in Touch</h2>
		<div class="space-y-3">
			<a href="mailto:victor.nanezj@gmail.com" class="text-blue-600 hover:underline">
				victor.nanezj@gmail.com
			</a>
			<a
				href="https://linkedin.com/in/nanezx"
				target="_blank"
				rel="noopener noreferrer"
				class="block text-blue-600 hover:underline"
			>
				LinkedIn
			</a>
		</div>
	</footer>
</div>
