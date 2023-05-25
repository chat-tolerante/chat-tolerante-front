import {useNavigate} from 'react-router-dom';
import Input from 'src/components/atoms/Input';
import UserCircle from 'src/components/atoms/UserCircle';
import UserRow from 'src/components/molecules/UserRow';
import useUser from 'src/hooks/user/useUser';
import {isSmScreen} from 'src/services/utils';
import {IDefaultProps} from 'src/types/default-props';
import {IUser} from 'src/types/user';

export interface IUserListProps extends IDefaultProps{
    users: IUser[];
}

/**
 * List of users and a search input
 *
 * @param props - The component prosp
 */
export default function UserList(props: IUserListProps){
	const navigate = useNavigate();
	const {user} = useUser();
	const onUserClick = (userId: number | string)=>{
		if(isSmScreen()){
			navigate(`/chat/${userId}`);
			return;
		}
	};

	return (
		<div className="bg-bg1 h-full flex flex-col">
			<div className='pt-3 px-5 flex justify-center items-center'>
				<UserCircle username={user?.username || ''} className='h-9 mr-3 w-9 text-xs'/>
				<Input className='h-6 p-2 py-4 text-gray-800 flex-1' placeholder='Buscar . . .' />
			</div>
			<div className='mt-8 overflow-y-auto'>
				{props.users.map(user=><UserRow selected={user.id===0} onClick={()=>onUserClick(user.id)} key={user.id} user={user} />)}
			</div>
		</div>
	);
}
