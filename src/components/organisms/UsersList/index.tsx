import Input from 'src/components/atoms/Input';
import UserCircle from 'src/components/atoms/UserCircle';
import UserRow from 'src/components/molecules/UserRow';
import {IDefaultProps} from 'src/types/default-props';
import {IUser} from 'src/types/user';

export interface IUserListProps extends IDefaultProps{
    users: IUser[];
}

export default function UserList(props: IUserListProps){
	return (
		<div className="bg-bg1 h-full px-3 overflow-auto">
			<div className='pt-3 flex justify-center items-center px-3'>
				<UserCircle username='Kevin Martinez' className='h-9 mr-3 w-9 text-sm'/>
				<Input className='h-6 p-2 py-4 text-gray-800 flex-1' placeholder='Buscar . . .' />
			</div>
			<div className='mt-8'>
				{props.users.map(user=><UserRow className='mb-3' key={user.id} user={user} />)}
			</div>
		</div>
	);
}
