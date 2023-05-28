import {IUser} from 'src/types/user';
import {ReactComponent as MoreIcon} from 'src/assets/icons/more.svg';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as BackIcon} from 'src/assets/icons/back.svg';
import Card from 'src/components/atoms/Card';
import useUser from 'src/hooks/user/useUser';
import {useState} from 'react';

export interface IOpenChatRowProps{
	user?: IUser
}

/**
 * Component for showing the current state of the opened chat
 *
 * @param props - Component props
 */
export default function OpenChatRow(props: IOpenChatRowProps) {
	const navigate = useNavigate();
	const {logout} = useUser();
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className='bg-bg2 flex justify-center items-center p-3 relative'>
			<div className='text-xl flex-1 font-extrabold flex items-center'>
				<button className='mr-2 md:hidden' onClick={()=> navigate('..')}>
					<BackIcon 
						width="1.2em"
						fill='white'/>
				</button>
				{props.user?.name}
			</div>
			<button onClick={()=> setOpenModal(s=> !s)} className='flex justify-center items-center'>
				<MoreIcon width={'1.8rem'}  fill='white'/>
			</button>
			{openModal && (
				<Card className='bg-bg1 p-3 absolute right-0 top-full mt-[-1rem]'>
					<button onClick={logout} className='text-gray-500'>
						Cerrar sesión
					</button>
				</Card>
			)}
		</div>
	);
}
