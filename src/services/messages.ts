import {IMessage} from 'src/types/message';
import {asType, get, post} from './rest';

/**
 * Get messages from a user
 *
 * @param withUserId - The user having the conversation with
 */
export async function getMessages(
	withUserId: number | string
): Promise<IMessage[]> {
	return asType<Array<IMessage>>(get(`/messages/${withUserId}`));
}

/**
 * Sends a message to the server
 *
 * @param forUserId - The id of the user to send the message to
 * @param message - The message to send
 */
export async function sendMessage(
	forUserId: number, 
	message: string 
): Promise<IMessage> {
	return asType<IMessage>(post('/message', {message, sendTo: forUserId}));
}
