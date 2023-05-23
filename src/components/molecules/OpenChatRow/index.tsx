import {IUser} from 'src/types/user';
//import {ReactComponent as SearchIcon} from 'src/assets/icons/search.svg';
import {ReactComponent as MoreIcon} from 'src/assets/icons/more.svg';

export interface IOpenChatRowProps{
    user: IUser
}

/**
 * Component for showing the current state of the opened chat
 *
 * @param props - Component props
 */
export default function OpenChatRow(props: IOpenChatRowProps){
	return (
		<div className='bg-bg2 flex justify-center items-center p-3'>
			<div className='text-xl flex-1 font-extrabold'>{props.user.username}</div>
			<div className='flex justify-center items-center'>
				<MoreIcon width={'1.8rem'}  fill='white'/>
			</div>
		</div>
	);
}
