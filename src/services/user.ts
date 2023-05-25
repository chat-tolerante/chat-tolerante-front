import {TLoginCredentials} from 'src/schemas/login.schema';
import {TRegisterCredentials} from 'src/schemas/register.schema';
import {IUser} from 'src/types/user';
const MOCKUP_EMAIL='kevin@test.com';

/**
 * Inicia sesion con correo y contraseña
 *
 * @param credentials - Login credentials
 */
export async function login(credentials: TLoginCredentials): Promise<IUser>{
	const {email, password} = credentials;
	if(email !== MOCKUP_EMAIL || !password)
		return Promise.reject({status: 401});
	return Promise.resolve({id: 0,email, username: 'Kevin Martinez'});
}

/**
 * Cierra la sesión abierta
 */
export async function logout(): Promise<void> {
	return Promise.resolve();
}

/**
 * Registers a user 
 *
 * @param credentials - Register credentials
 */
export function register(credentials: TRegisterCredentials): Promise<IUser>{
	const {password, email, username} = credentials;
	if(!password) return Promise.reject({status: 402});
	return Promise.resolve({id: 1, email, username});
}

/**
 * Checks if an email is already in use
 *
 * @param email - The email to check
 */
export function isEmailInUse(email: string): Promise<boolean>{
	if( email === MOCKUP_EMAIL)return Promise.resolve(true);
	return Promise.resolve(false);
}

/**
 * Check if the user is loged in
 */
export function isLoggedIn(): Promise<IUser>{
	return Promise.reject();
	return Promise.resolve({id: 0, email: MOCKUP_EMAIL, username: 'Kevin Martinez'});
}
