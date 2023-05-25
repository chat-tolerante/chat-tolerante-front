import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {messagesActions} from 'src/redux/messages.slice';
import useUser from '../user/useUser';
import {IMessage} from 'src/types/message';

/**
 *
 */
export default function useSend() {
	const dispatch = useDispatch();
	const {user} = useUser();

	const send = useCallback(async(userId: number | string, message: string)=> {
		if(!user) return;
		dispatch(messagesActions.addMessage({
			userId,
			message: {
				message, date: Date().toString(), senderId: user.id
			} as IMessage
		}));
	},[dispatch]);

	return {send};
}
