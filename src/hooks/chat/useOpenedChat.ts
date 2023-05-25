import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {chatSelector, messagesActions} from 'src/redux/messages.slice';
import {userSelector} from 'src/redux/users.slice';
import {getMessages} from 'src/services/messages';

/**
 * Hook for opened chat
 *
 * @param userId - The id of the user id 
 */
export default function useOpenedChat(userId?: number | string) {
	const user = useSelector(userSelector(userId));
	const messages = useSelector(chatSelector(userId));
	const dispatch = useDispatch();

	const fetch = useCallback(async()=> {
		if(typeof userId === 'undefined') return;
		const list = await getMessages(userId);  
		dispatch(messagesActions.setMessages({userId, messages: list}));
	},[userId]);

	return {
		user, 
		messages,
		fetch
	};
}
