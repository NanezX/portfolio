/**
 * Format ISO date string to human-readable format (e.g., "Oct 15, 2025")
 * Parses the date as UTC to avoid timezone shifting
 */
export function formatDate(isoDate: string): string {
	const date = new Date(isoDate);
	const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();
	return `${month} ${day}, ${year}`;
}
