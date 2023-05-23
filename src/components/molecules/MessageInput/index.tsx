import Input from 'src/components/atoms/Input';
import {ReactComponent as SendIcon} from 'src/assets/icons/send.svg';

/**
 * Text input for sending messages
 */
export default function MessageInput(){
	return (
		<div className="bg-bg2 flex p-3 justify-center items-center">
			<Input className='flex-1 h-min px-3 py-1 mr-3 text-gray-700' placeholder='Escribe un mensaje'/>
			<SendIcon width='2.3rem' fill='rgb(var(--color-gradient2))'/>
		</div>
	);
}
