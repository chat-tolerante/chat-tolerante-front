import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {messagesActions} from 'src/redux/messages.slice';
import useUser from '../user/useUser';
import {sendMessage} from 'src/services/messages';

/**
 *
 */
export default function useSend() {
	const dispatch = useDispatch();
	const {user} = useUser();

	const send = useCallback(async(userId: number, message: string)=> {
		if(!user) return;
		const created = await sendMessage(userId, message);
		dispatch(messagesActions.addMessage({
			userId,
			message: created
		}));
	},[dispatch]);

	return {send};
}
