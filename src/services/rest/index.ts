/* eslint-disable @typescript-eslint/no-explicit-any */
export const backendURL = import.meta.env.VITE_BACKEND || 'http://localhost:8080';

export interface ManagedResponse<T> {
	data: T | string;
	ok: boolean;
	status: number;
}

export interface FormBody {
	[key: string]: undefined | string | number | boolean | File;
}

export enum MethodType {
	// eslint-disable-next-line no-unused-vars
	POST = 'POST',
	// eslint-disable-next-line no-unused-vars
	GET = 'GET',
	// eslint-disable-next-line no-unused-vars
	PUT = 'PUT',
	// eslint-disable-next-line no-unused-vars
	PATCH = 'PATCH',
	// eslint-disable-next-line no-unused-vars
	DELETE = 'DELETE',
}

/**
 * Manage a fetch response
 * In case of JSON it parses it
 * For any other case returns string
 *
 * @param res - The request response
 */
export async function manageResponse<T>(
	res: Response
): Promise<ManagedResponse<T>> {
	let data;
	const contentType = res.headers.get('content-type');
	if (contentType && contentType.indexOf('application/json') !== -1) {
		data = (await res.json()) as T;
	} else {
		data = await res.text();
	}
	const obj = {
		data, ok: res.ok, status: res.status
	};
	if (!obj.ok) {
		throw obj;
	}
	return obj;
}

/**
 * Add backend server domain to url
 *
 * @param resource - url to prepend the backend url
 * @returns the formated url
 */
export function formatUrl(resource?: string) {
	return `${backendURL}${resource?.charAt(0) !== '/' ? '/' : ''}${resource}`;
}

/**
 * Returns the default options for a fetch request
 *
 * @param method - The method for the request
 */
export function genericOptions(method?: MethodType): RequestInit {
	return {method: method || MethodType.GET, credentials: 'include',};
}

/**
 * Abstracts fetch syntax
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @param method - the http method to use in the request
 * @param body - the body of the request
 * @returns the response
 */
export async function genericRequest<T>(
	resource: string, 
	method?: MethodType, 
	body?: any
) {
	const options: RequestInit = genericOptions(method);
	if (body) {
		options.body = JSON.stringify(body);
		options.headers = {
			...options.headers,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'Content-Type': 'application/json',
		};
	}
	const res = await fetch(formatUrl(resource), options);
	return manageResponse<T>(res);
}

/**
 * Abstracts fetch syntax to be used with files
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @param method - the http method to use in the request
 * @param body - the body of the request
 * @returns the response
 */
export async function formDataRequest<T>(
	resource: string, 
	method?: MethodType, 
	body: FormBody = {}
) {
	const options: RequestInit = {
		method: method || MethodType.GET,
		credentials: 'include',
	};
	const formdata = new FormData();
	Object.entries(body).forEach(([key, value])=> {
		if (typeof value === 'undefined') return;
		if (typeof value === 'number') return formdata.set(key, `${value}`);
		if (typeof value === 'boolean') return formdata.set(key, `${value ? 'true' : 'false'}`);
		formdata.set(key, value);
	});
	options.body = formdata;
	options.headers = {...options.headers,};
	const res = await fetch(formatUrl(resource), options);
	return manageResponse<T>(res);
}

/**
 * Post Request Abstraction
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @param body - the body of the request
 * @returns the response
 */
export async function post<T>(resource: string, body?: any) {
	return genericRequest<T>(resource, MethodType.POST, body);
}

/**
 * Patch Request Abstraction
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @param body - the body of the request
 * @returns the response
 */
export async function patch<T>(resource: string, body?: any) {
	return genericRequest<T>(resource, MethodType.PATCH, body);
}

/**
 * Put Request Abstraction
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @param body - the body of the request
 * @returns the response
 */
export async function put<T>(resource: string, body?: any) {
	return genericRequest<T>(resource, MethodType.PUT, body);
}

/**
 * Del Request Abstraction
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @param body - the body of the request
 * @returns the response
 */
export async function del<T>(resource: string, body?: any) {
	return genericRequest<T>(resource, MethodType.DELETE, body);
}

/**
 * Get Request Abstraction
 *
 * @param resource - the url to fetch from (without including the backend url)
 * @returns the response
 */
export async function get<T>(resource: string) {
	return genericRequest<T>(resource, MethodType.GET);
}

/**
 * Throws if the managed response returned a string 
 * instead of the requested type
 *
 * @param request - The request made with one of the request functions
 */
export async function asType<T>(
	request: ReturnType<typeof genericRequest>
): Promise<T> {
	const response = await request;
	if (typeof response.data === 'string') {
		throw response;
	}
	return response.data as T;
}
