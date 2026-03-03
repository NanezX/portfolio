import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeState() {
	let theme = $state<Theme>('dark');

	if (browser) {
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === 'light' || stored === 'dark') {
			theme = stored;
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		} else {
			theme = 'light';
		}
		// Sync the class in case SSR rendered without it
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}

	return {
		get current(): Theme {
			return theme;
		},
		get isDark(): boolean {
			return theme === 'dark';
		},
		toggle() {
			theme = theme === 'dark' ? 'light' : 'dark';
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.classList.toggle('dark', theme === 'dark');
			}
		}
	};
}

export const themeState = createThemeState();
