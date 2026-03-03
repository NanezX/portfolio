// ─── Types ──────────────────────────────────────────────────────────
//
// To add a new experience entry, just push an object into the `experiences`
// array below. Each field is documented in the interface.
//
// Dates use "MMM YYYY" format (e.g. "Jan 2023"). Use "Present" for endDate
// if you're still working there.
// ────────────────────────────────────────────────────────────────────

export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';

export interface Experience {
	/** Unique identifier for the experience */
	id?: string;
	/** Company or organization name */
	company: string;
	/** Optional URL to company website */
	companyUrl?: string;
	/** Your job title */
	role: string;
	/** Employment type badge shown next to role */
	type: EmploymentType;
	/** City, country, or "Remote" */
	location: string;
	/** Format: "MMM YYYY" – e.g. "Jan 2023" */
	startDate: string;
	/** Format: "MMM YYYY" or the literal "Present" */
	endDate: string | 'Present';
	/** One-liner summarizing the role (shown as subtitle) */
	summary: string;
	/** Bullet-point achievements — each string becomes one bullet */
	achievements: string[];
	/** Technologies / tools used in this role */
	technologies: string[];
}

export interface Education {
	id?: string;
	school: string;
	schoolUrl?: string;
	degree: string;
	field: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
	achievements?: string[];
}

export interface Skill {
	id?: string;
	name: string;
	category:
		| 'Languages'
		| 'Frontend'
		| 'Backend'
		| 'Blockchain'
		| 'AI / ML'
		| 'Cloud / Infra'
		| 'Other';
}

// ─── Helpers ────────────────────────────────────────────────────────

/**
 * Compute a human-readable duration string from two date strings.
 * Accepts "MMM YYYY" or just "YYYY". "Present" maps to today.
 */
export function formatDuration(start: string, end: string): string {
	const parseDate = (d: string): Date => {
		if (d === 'Present') return new Date();
		return new Date(d);
	};

	const s = parseDate(start);
	const e = parseDate(end);
	let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
	if (months < 1) months = 1;

	const years = Math.floor(months / 12);
	const rem = months % 12;

	if (years > 0 && rem > 0) return `${years} yr ${rem} mo`;
	if (years > 0) return `${years} yr`;
	return `${rem} mo`;
}

// ─── Data ───────────────────────────────────────────────────────────
//
//   ➜  ADD NEW EXPERIENCE HERE
//      Copy one block and fill in your details. The array is rendered
//      top-to-bottom, so put the most recent role first.
//

export const experiences: Experience[] = [
	{
		id: 'hypercycle',
		company: 'Hypercycle',
		companyUrl: 'https://hypercycle.ai',
		role: 'Software Engineer',
		type: 'Full-time',
		location: 'Remote',
		startDate: 'Nov 2024',
		endDate: 'Present',
		summary:
			'Joined as Python backend developer and grew into a cross-functional role covering infrastructure, AI, and product engineering.',
		achievements: [
			'Designed and implemented subgraph indexing for on-chain license and node data, replacing slow RPC-only queries — cutting response times dramatically.',
			'Built a web chat UI and proxy backend that normalises requests between UI and Hypercycle nodes, supporting LiteLLM and Ollama backends.',
			'Part of the architecture team for Mosaic, a secure Electron-based desktop app for AI agents fully integrated with the Hypercycle ecosystem.',
			'Developed the Hypercycle node owner dashboard UI and manages AWS deployments, CI/CD pipelines, and production infrastructure.'
		],
		technologies: [
			'Python',
			'FastAPI',
			'Node.js',
			'Subgraphs',
			'AWS',
			'Docker',
			'CI/CD',
			'LiteLLM',
			'Ollama',
			'OpenAI API',
			'Electron',
			'Svelte'
		]
	},
	{
		id: 'freelance-blockchain',
		company: 'Freelance Blockchain Engineer',
		role: 'Independent Contractor',
		type: 'Freelance',
		location: 'Remote',
		startDate: 'Jan 2024',
		endDate: 'Oct 2024',
		summary:
			'Worked on cutting-edge blockchain projects including experimental token standards, sustainability NFTs, and cross-chain payment systems.',
		achievements: [
			'ERC404: Worked on an experimental hybrid token standard combining ERC20 and ERC721 behaviour with on-chain randomness via oracles.',
			'Seabrick: Built a smart contract and minting platform for a sustainability project converting ocean waste into construction bricks — each NFT represents a claimable physical brick.',
			'Arbitrum Stylus: Developed a smart contract in Rust using Arbitrum Stylus, bridging Web3 payments with traditional bank payment rails.'
		],
		technologies: [
			'Solidity',
			'Rust',
			'Arbitrum Stylus',
			'ERC404',
			'ERC721',
			'Hardhat',
			'TypeScript',
			'Node.js'
		]
	},
	{
		id: 'rainlang',
		company: 'Rainlang',
		role: 'Blockchain Developer',
		type: 'Full-time',
		location: 'Remote · London',
		startDate: 'Dec 2021',
		endDate: 'Dec 2023',
		summary:
			'Worked on Rainlang, a project making smart contract logic accessible to non-programmers through a human-readable on-chain interpreted language.',
		achievements: [
			'Built and maintained subgraphs for indexing Rain protocol data directly from the blockchain, enabling real-time querying across multiple contracts and networks.',
			'Implemented a custom CBOR serialization library in AssemblyScript for subgraph use, minimising on-chain bytes and gas consumption.',
			'Developed frontend for Rain Studio and Rain Explorer, allowing users to browse, deploy, and interact with Rain contracts across supported networks.',
			'Identified and reported a bug in the Solidity compiler (solc) by reading EVM bytecode directly — traced a metadata/bytecode mismatch to a compiler-level inconsistency.',
			'Established reproducible dev environments using Nix across all repositories, and integrated Docker-based local subgraph testing with CI/CD pipelines.'
		],
		technologies: [
			'Solidity',
			'TypeScript',
			'Svelte',
			'GraphQL',
			'AssemblyScript',
			'Rust',
			'Node.js',
			'Nix',
			'Docker',
			'Supabase',
			'Hardhat'
		]
	},
	{
		id: 'polkalokr',
		company: 'Polkalokr',
		role: 'Blockchain Developer',
		type: 'Contract',
		location: 'Remote · London',
		startDate: 'Jul 2021',
		endDate: 'Nov 2021',
		summary:
			'Worked on a dynamic ERC20 token architecture where features are implemented as detachable extensions rather than baked in at deploy time.',
		achievements: [
			'Designed detachable extension system with isolated storage layouts, preventing collisions and allowing features to be attached/removed without redeploying.',
			'Went deep into EVM internals — low-level storage slots, assembly, and contract bytecode — to make the extension system robust and gas-efficient.',
			'Used Hardhat extensively for deployment scripting, testing, and tooling across the extension architecture.'
		],
		technologies: ['Solidity', 'Hardhat', 'TypeScript', 'Node.js', 'EVM Assembly']
	},
	{
		id: 'freelance-backend',
		company: 'Freelance Backend Developer',
		role: 'Independent',
		type: 'Freelance',
		location: 'Venezuela · Remote',
		startDate: 'Sep 2020',
		endDate: 'Jun 2021',
		summary:
			'First professional engineering work: built a management application for a tyre business, handling inventory, interactions, and reporting.',
		achievements: [
			'Designed and implemented backend services for inventory management and business reporting.',
			'Focused on backend development — the start of a deliberate preference for server-side and systems work.'
		],
		technologies: ['Node.js', 'JavaScript', 'SQL']
	}
];

export const education: Education[] = [
	{
		id: 'udo',
		school: 'Universidad de Oriente',
		degree: 'B.Sc. Systems Engineering',
		field: 'Systems Engineering',
		location: 'Maturín, Monagas, Venezuela',
		startDate: '2019',
		endDate: '2025',
		description:
			"Bachelor's degree in Systems Engineering with focus on software development and systems design.",
		achievements: [
			'Relevant coursework: Formal Logic & Algorithms, Operating Systems, Information Systems, Database Systems Administration, Data Structures.'
		]
	},
	{
		id: 'puc',
		school: 'Pontificia Universidad Católica de Chile',
		degree: 'Certificate',
		field: 'Camino a la Excelencia en Gestión de Proyectos',
		location: 'Online',
		startDate: '2023',
		endDate: '2023',
		description:
			'Project management certification covering Lean Methodologies, Process Improvement, Value Engineering, Organizational Change, Contract Management, and Process Mapping.'
	}
];

export const skills: Skill[] = [
	// Languages
	{ id: 'js', name: 'JavaScript', category: 'Languages' },
	{ id: 'ts', name: 'TypeScript', category: 'Languages' },
	{ id: 'py', name: 'Python', category: 'Languages' },
	{ id: 'rust', name: 'Rust', category: 'Languages' },
	{ id: 'sol', name: 'Solidity', category: 'Languages' },
	{ id: 'bash', name: 'Bash', category: 'Languages' },
	{ id: 'sql', name: 'SQL', category: 'Languages' },
	{ id: 'nix', name: 'Nix', category: 'Languages' },

	// Frontend
	{ id: 'svelte', name: 'Svelte', category: 'Frontend' },
	{ id: 'react', name: 'React', category: 'Frontend' },

	// Backend
	{ id: 'node', name: 'Node.js', category: 'Backend' },
	{ id: 'nest', name: 'NestJS', category: 'Backend' },
	{ id: 'fastapi', name: 'FastAPI', category: 'Backend' },
	{ id: 'graphql', name: 'GraphQL', category: 'Backend' },
	{ id: 'postgres', name: 'PostgreSQL', category: 'Backend' },
	{ id: 'mongo', name: 'MongoDB', category: 'Backend' },
	{ id: 'sqlite', name: 'SQLite', category: 'Backend' },
	{ id: 'firebase', name: 'Firebase', category: 'Backend' },
	{ id: 'supabase', name: 'Supabase', category: 'Backend' },

	// Blockchain
	{ id: 'hardhat', name: 'Hardhat', category: 'Blockchain' },
	{ id: 'subgraphs', name: 'Subgraphs (The Graph)', category: 'Blockchain' },
	{ id: 'evm', name: 'EVM Internals', category: 'Blockchain' },
	{ id: 'contracts', name: 'Smart Contract Architecture', category: 'Blockchain' },
	{ id: 'web3', name: 'Web3', category: 'Blockchain' },
	{ id: 'asm', name: 'AssemblyScript', category: 'Blockchain' },

	// AI / ML
	{ id: 'llm', name: 'LLM Integration', category: 'AI / ML' },
	{ id: 'agents', name: 'AI Agents', category: 'AI / ML' },
	{ id: 'pipelines', name: 'Agentic Pipelines', category: 'AI / ML' },
	{ id: 'litellm', name: 'LiteLLM', category: 'AI / ML' },
	{ id: 'openai', name: 'OpenAI API', category: 'AI / ML' },
	{ id: 'ollama', name: 'Ollama', category: 'AI / ML' },

	// Cloud / Infra
	{ id: 'aws', name: 'AWS', category: 'Cloud / Infra' },
	{ id: 'docker', name: 'Docker', category: 'Cloud / Infra' },
	{ id: 'cicd', name: 'CI / CD', category: 'Cloud / Infra' },
	{ id: 'git', name: 'Git', category: 'Cloud / Infra' },
	{ id: 'linux', name: 'Linux', category: 'Cloud / Infra' },
	{ id: 'nix-env', name: 'Nix Environments', category: 'Cloud / Infra' }
];
