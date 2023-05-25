import Divider from 'src/components/atoms/Divider';
import UserCircle from 'src/components/atoms/UserCircle';
import {IDefaultProps} from 'src/types/default-props';
import {IMessage} from 'src/types/message';
import {IUser} from 'src/types/user';

export interface IUserRowProps extends IDefaultProps{
    selected?: boolean;
    user: IUser;
    lastMessage?: IMessage;
    unread?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: ()=> any;
}

/**
 * Component to show a User with its name and UserCircle
 *
 * @param props - Component props
 */
export default function UserRow(props: IUserRowProps){
	return (
		<button onClick={props.onClick} className={`w-full px-5 py-2 ${props.selected?'bg-primary pt-4':''} ${props.className || ''}`}>
			<div className='flex justify-center items-center mb-3'>
				<div className='mx-3'>
					<UserCircle username={props.user.username}/>
				</div>
				<div className='flex-[2] py-2 relative'>
					<div className={`text-left font-bold ${props.selected?'text-white':'text-gradient2'}`}>
						{props.user.username}
					</div>
					{props.unread && (
						<div className='absolute right-2 top-4 bg-bg_green w-3 h-3 rounded-full'>
							<div className=' bg-primary animate-ping w-3 h-3 rounded-full'/>
						</div>
					)}
					{!!props.lastMessage&&(
						<div className='font-thin text-gradient2'>
							{props.lastMessage.message}
						</div>
					)}
				</div>
			</div>
			<Divider className='opacity-10' />
		</button>
	);
}
