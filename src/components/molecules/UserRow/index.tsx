import Divider from 'src/components/atoms/Divider';
import UserCircle from 'src/components/atoms/UserCircle';
import {IDefaultProps} from 'src/types/default-props';
import {IMessage} from 'src/types/message';
import {IUser} from 'src/types/user';

export interface IUserRowProps extends IDefaultProps{
    selected?: boolean;
    user: IUser;
    lastMessage?: IMessage;
}

/**
 * Component to show a User with its name and UserCircle
 *
 * @param props - Component props
 */
export default function UserRow(props: IUserRowProps){
	return (
		<div className={`w-full ${props.className || ''}`}>
			<div className='flex justify-center items-center mb-3'>
				<div className='mx-3'><UserCircle username={props.user.username}/></div>
				<div className='flex-[2] py-2'>
					<div className='font-bold text-gradient2'>{props.user.username}</div>
					{!!props.lastMessage&&(
						<div className='font-thin text-gradient2'>{props.lastMessage.message}</div>
					)}
				</div>
			</div>
			<Divider />
		</div>
	);
}
