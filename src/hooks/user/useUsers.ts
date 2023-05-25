import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {usersActions, usersSelector} from 'src/redux/users.slice';
import {getUserList} from 'src/services/users';

/**
 * Hook for managing the user list
 */
export default function useUsers() {
	const users = useSelector(usersSelector);
	const dispatch = useDispatch();

	const getList = useCallback(async()=> {
		const list = await getUserList();
		dispatch(usersActions.setUsers(list));
	},[dispatch]);

	return {
		users,
		getList
	};
}
