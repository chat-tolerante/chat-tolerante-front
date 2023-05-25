import {faker} from '@faker-js/faker';
import {IMessage} from 'src/types/message';

/**
 * Get messages from a user
 *
 * @param withUserId - The user having the conversation with
 */
export function getMessages(withUserId: number | string): Promise<IMessage[]> {
	return Promise.resolve(Array(5).fill(undefined)
		.map(()=> ({
			message: faker.lorem.lines(1),
			date: faker.date.recent().toString(), 
			senderId: withUserId
		} as IMessage)));
}
