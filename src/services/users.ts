import {IUser} from 'src/types/user';
import {asType, get} from './rest';

/**
 * Gets the list of users
 */
export async function getUserList(): Promise<IUser[]> {
	return asType<Array<IUser>>(get('/users'));
}
