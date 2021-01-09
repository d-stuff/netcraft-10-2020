export function filterShows(shows, word = '') {
	const lowerWord = word.toLowerCase();
	return shows.filter(function ({ name, summary }) {
		return (
			(typeof name === 'string' && name.toLowerCase().includes(lowerWord)) ||
			(typeof summary === 'string' && summary.toLowerCase().includes(lowerWord))
		);
	});
}
