export const Months = [
	'Ene',
	'Feb',
	'Marz',
	'Abr',
	'May',
	'Jun',
	'Jul',
	'Ago',
	'Sep',
	'Oct',
	'Nov',
	'Dic',
];

/**
 * Returns a color from the string hash
 * Applies a hash to a string a returns a color in hex format
 * The string can be anything
 *
 * @param str - The string to make the color from
 */
export function stringToColor(str: string) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	let colour = '#';
	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xFF;
		colour += (value > 120 ? value : (value+130)&255).toString(16).padStart(2,'0');
	}
	return colour;
}

/**
 * Converts a date to a visual representation in a string
 *
 * @param date - The date to convert
 */
export function dateToString(date: Date){
	return `${date.getDate().toString().padStart(2,'0')} ${
		Months[date.getMonth()]}, ${
		date.getHours().toString().padStart(2,'0')}:${
		date.getMinutes().toString().padStart(2,'0')}`;
}

/**
 * Checks if the screen is small
 */
export function isSmScreen(){
	return window.outerWidth <= 640;
}
