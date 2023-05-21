export function stringToColor(str: string) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	let colour = '#';
	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xFF;
		colour += (value > 100 ? value : (value+100)&255).toString(16).padStart(2,'0');
	}
	return colour;
}
