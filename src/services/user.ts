import {TLoginCredentials} from 'src/schemas/login.schema';
import {TRegisterCredentials} from 'src/schemas/register.schema';
import {IUser} from 'src/types/user';
import {ManagedResponse, asType, get, post} from './rest';

/**
 * Inicia sesion con correo y contraseña
 *
 * @param credentials - Login credentials
 */
export async function login(credentials: TLoginCredentials): Promise<IUser> {
	return asType<IUser>(post('/login', credentials));
}

/**
 * Cierra la sesión abierta
 */
export async function logout(): Promise<ManagedResponse<string>> {
	return post('/logout');
}

/**
 * Registers a user 
 *
 * @param credentials - Register credentials
 */
export function register(credentials: TRegisterCredentials): Promise<IUser> {
	return asType<IUser>(post('/register', credentials));
}

/**
 * Checks if an email is already in use
 *
 * @param email - The email to check
 */
export function isEmailInUse(email: string): Promise<boolean> {
	return asType<boolean>(get(`/email-in-use?email=${encodeURIComponent(email)}`));
}

/**
 * Check if the user is loged in
 */
export function isLoggedIn(): Promise<IUser> {
	return asType<IUser>(get('/user'));
}
