import {IUser} from 'src/types/user';
import {faker} from '@faker-js/faker';

/**
 * Gets the list of users
 */
export async function getUserList(): Promise<IUser[]> {
	return Promise.resolve(Array(15).fill(undefined)
		.map((_, id)=> ({
			id: id + 1,
			email: faker.internet.email(),
			username: faker.person.fullName()
		})));
}
