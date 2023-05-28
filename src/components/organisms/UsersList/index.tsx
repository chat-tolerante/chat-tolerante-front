import {useEffect, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Input from 'src/components/atoms/Input';
import UserCircle from 'src/components/atoms/UserCircle';
import UserRow from 'src/components/molecules/UserRow';
import useUser from 'src/hooks/user/useUser';
import useUsers from 'src/hooks/user/useUsers';
import {isSmScreen} from 'src/services/utils';

export interface IUserList{
	selectedId?: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onSelectUser?: (userId: number )=> any;
}

/**
 * List of users and a search input
 *
 * @param props - User List props
 */
export default function UserList(props: IUserList) {
	const navigate = useNavigate();
	const {user} = useUser();
	const {users, getList} = useUsers();
	const [search, setSearch] = useState('');
	const filteredUsers = useMemo(()=> users.filter(user=> 
		user.name
			.toUpperCase()
			.includes(search.toUpperCase())),[users, search]);

	const onUserClick = (userId: number)=> {
		setSearch('');
		if(isSmScreen()) {
			navigate(`/chat/${userId}`);
			return;
		}
		if(typeof props.onSelectUser === 'function') {
			props.onSelectUser(userId);
		}
	};

	useEffect(()=> {
		getList();
	},[]);


	return (
		<div className="bg-bg1 h-full flex flex-col">
			<div className='pt-3 px-5 flex justify-center items-center'>
				<UserCircle username={user?.name || ''} className='h-9 mr-3 w-9 text-xs'/>
				<Input value={search}
					onChange={({target})=> setSearch(target.value)}
					className='h-6 p-2 py-4 text-gray-800 flex-1'
					placeholder='Buscar . . .' />
			</div>
			<div className='mt-8 overflow-y-auto'>
				{filteredUsers.map(user=> (
					<UserRow key={user.id}
						selected={props.selectedId === user.id}
						onClick={()=> onUserClick(user.id)}
						user={user} />
				))}
			</div>
		</div>
	);
}
