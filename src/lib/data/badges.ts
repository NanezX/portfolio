// ─── Types ──────────────────────────────────────────────────────────

export interface BadgeSkill {
	label: string;
	url: string;
}

export interface BadgeCategory {
	name: string;
	skills: BadgeSkill[];
}

// ─── Data ───────────────────────────────────────────────────────────

export const badgeCategories: BadgeCategory[] = [
	{
		name: 'AI / LLM',
		skills: [
			{
				label: 'Ollama',
				url: 'https://img.shields.io/badge/Ollama-00D899?style=flat&logo=ollama&logoColor=white'
			},
			{
				label: 'OpenAI API',
				url: 'https://img.shields.io/badge/OpenAI_API-412991?style=flat&logo=openai&logoColor=white'
			},
			{
				label: 'LiteLLM',
				url: 'https://img.shields.io/badge/LiteLLM-FF6B6B?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMyAyTDMgMTRoOWwtMSA4IDEwLTEyaC05bDEtOHoiLz48L3N2Zz4='
			},
			{
				label: 'AI Agents',
				url: 'https://img.shields.io/badge/AI_Agents-7C3AED?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMyAyaC0ydjNINWEyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTZWMnpNOSAxMmExLjUgMS41IDAgMTEwLTMgMS41IDEuNSAwIDAxMCAzem02IDBhMS41IDEuNSAwIDExMC0zIDEuNSAxLjUgMCAwMTAgM3ptLTYgMi41aDZ2Mkg5di0yeiIvPjwvc3ZnPg=='
			},
			{
				label: 'Agentic Pipelines',
				url: 'https://img.shields.io/badge/Agentic_Pipelines-8B5CF6?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxjaXJjbGUgY3g9IjQiIGN5PSIxMiIgcj0iMyIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iNSIgcj0iMyIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTkiIHI9IjMiLz48cGF0aCBkPSJNNyAxMWwxMC01TTcgMTNsMTAgNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4='
			}
		]
	},
	{
		name: 'Backend & API',
		skills: [
			{
				label: 'Node.js',
				url: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white'
			},
			{
				label: 'NestJS',
				url: 'https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white'
			},
			{
				label: 'FastAPI',
				url: 'https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white'
			},
			{
				label: 'Python',
				url: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white'
			},
			{
				label: 'GraphQL',
				url: 'https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white'
			}
		]
	},
	{
		name: 'DevOps & Tools',
		skills: [
			{
				label: 'Docker',
				url: 'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white'
			},
			{
				label: 'GitHub Actions',
				url: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white'
			},
			{
				label: 'Linux',
				url: 'https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black'
			},
			{
				label: 'Bash',
				url: 'https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white'
			},
			{
				label: 'Nix',
				url: 'https://img.shields.io/badge/Nix-7E7E7E?style=flat&logo=nixos&logoColor=white'
			},
			{
				label: 'Vercel',
				url: 'https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white'
			},
			{
				label: 'Git',
				url: 'https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white'
			}
		]
	},
	{
		name: 'Languages',
		skills: [
			{
				label: 'TypeScript',
				url: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white'
			},
			{
				label: 'JavaScript',
				url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black'
			},
			{
				label: 'Python',
				url: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white'
			},
			{
				label: 'Rust',
				url: 'https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white'
			},
			{
				label: 'Solidity',
				url: 'https://img.shields.io/badge/Solidity-363636?style=flat&logo=solidity&logoColor=white'
			},
			{
				label: 'Bash',
				url: 'https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white'
			},
			{
				label: 'SQL',
				url: 'https://img.shields.io/badge/SQL-CC2927?style=flat&logo=mysql&logoColor=white'
			},
			{
				label: 'AssemblyScript',
				url: 'https://img.shields.io/badge/AssemblyScript-007ACC?style=flat&logo=assemblyscript&logoColor=white'
			}
		]
	},
	{
		name: 'Databases',
		skills: [
			{
				label: 'PostgreSQL',
				url: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white'
			},
			{
				label: 'MongoDB',
				url: 'https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white'
			},
			{
				label: 'Supabase',
				url: 'https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white'
			},
			{
				label: 'Firebase',
				url: 'https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black'
			},
			{
				label: 'SQLite',
				url: 'https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white'
			}
		]
	},
	{
		name: 'Blockchain / Web3',
		skills: [
			{
				label: 'Solidity',
				url: 'https://img.shields.io/badge/Solidity-363636?style=flat&logo=solidity&logoColor=white'
			},
			{
				label: 'Ethereum',
				url: 'https://img.shields.io/badge/Ethereum-627EEA?style=flat&logo=ethereum&logoColor=white'
			},
			{
				label: 'Foundry',
				url: 'https://img.shields.io/badge/Foundry-FF9F1C?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyQzguMSAyIDUgNS42IDUgMTBjMCAyLjQgMSA0LjUgMi41IDZINHY0aDE2di00aC0zLjVjMS41LTEuNSAyLjUtMy42IDIuNS02IDAtNC40LTMuMS04LTctOHptMCAyYzIuOCAwIDUgMi43IDUgNnMtMi4yIDYtNSA2LTUtMi43LTUtNiAyLjItNiA1LTZ6Ii8+PC9zdmc+'
			},
			{
				label: 'Hardhat',
				url: 'https://img.shields.io/badge/Hardhat-FFF100?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siPjxwYXRoIGQ9Ik0yIDE4aDIwdjNIMnptMS0yYzAtMS43IDEuMy0zIDMtM3YtMi41QzYgNy41IDguNyA0IDEyIDRzNiAzLjUgNiA4LjVWMTNjMS43IDAgMyAxLjMgMyAzSDN6bTYtM2g2di0yLjVDMTUgOC42IDEzLjcgNiAxMiA2UzkgOC42IDkgMTAuNVYxM3oiLz48L3N2Zz4='
			},
			{
				label: 'The Graph',
				url: 'https://img.shields.io/badge/The_Graph-6775E0?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxjaXJjbGUgY3g9IjE4LjUiIGN5PSI1LjUiIHI9IjIuNSIvPjxjaXJjbGUgY3g9IjUuNSIgY3k9IjE4IiByPSIyIi8+PHBhdGggZD0iTTE4IDdMNiAxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMiAyLjVhOS41IDkuNSAwIDEwMCAxOSA5LjUgOS41IDAgMDAwLTE5em0wIDJhNy41IDcuNSAwIDExMCAxNSA3LjUgNy41IDAgMDEwLTE1eiIgZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=='
			},
			{
				label: 'EVM Internals',
				url: 'https://img.shields.io/badge/EVM_Internals-627EEA?style=flat&logo=ethereum&logoColor=white'
			}
		]
	},
	{
		name: 'Desktop Apps',
		skills: [
			{
				label: 'Electron',
				url: 'https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white'
			},
			{
				label: 'Tauri',
				url: 'https://img.shields.io/badge/Tauri-FFC131?style=flat&logo=tauri&logoColor=black'
			}
		]
	},
	{
		name: 'Frontend',
		skills: [
			{
				label: 'Svelte',
				url: 'https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=white'
			},
			{
				label: 'SvelteKit',
				url: 'https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white'
			},
			{
				label: 'React',
				url: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black'
			},
			{
				label: 'Astro',
				url: 'https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white'
			}
		]
	}
];
