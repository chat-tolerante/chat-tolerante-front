import {ManagedResponse} from './rest';

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
export function dateToString(date: Date) {
	return `${date.getDate().toString()
		.padStart(2,'0')} ${
		Months[date.getMonth()]}, ${
		date.getHours().toString()
			.padStart(2,'0')}:${
		date.getMinutes().toString()
			.padStart(2,'0')}`;
}

/**
 * Checks if the screen is small
 */
export function isSmScreen() {
	return window.outerWidth <= 640;
}

/**
 * Checks if a values is not undefined
 *
 * @param value - The value to check
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNotUndef(value?: any) {
	return typeof value !== 'undefined';
}

/**
 * Tries to parse an error to a meaningful string
 *
 * @param e - The error object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function errorToString(e: any) {
	if(!isNotUndef(e)) return '';
	if(typeof e === 'string') return e;
	if(typeof e === 'object') {
		if(typeof e.message === 'string') return e.message;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const fetchError = e as ManagedResponse<any>;
		if(typeof fetchError.status === 'number') {
			if(fetchError.status === 404) return 'No se encontró el recurso';
			if(fetchError.status === 401) return 'Credenciales incorrectas';
			if(fetchError.status === 402) return 'Error en la solicitud';
			if(fetchError.status === 503) return 'Servicio no disponible';
		}
		if(typeof fetchError.data !== 'undefined') {
			if(typeof fetchError.data.message === 'string') 
				return fetchError.data.message;
			return JSON.stringify(fetchError.data);
		}
	}
	return `Error: ${e}`;
}
