import Input from 'src/components/atoms/Input';
import {ReactComponent as SendIcon} from 'src/assets/icons/send.svg';
import useSend from 'src/hooks/chat/useSend';
import {useCallback, useState} from 'react';
import Button from 'src/components/atoms/Button';
export interface IMessageInput{
	userId: number;
}

/**
 * Text input for sending messages
 *
 * @param props - Mesage Input props
 */
export default function MessageInput(props: IMessageInput) {
	const [message, setMessage] = useState('');
	const {send} = useSend();

	const onSubmit = useCallback(()=> {
		if(!message.length) return;
		setMessage('');
		send(props.userId, message);
	},[props, message]);

	return (
		<div className="bg-bg2 flex p-3 justify-center items-center">
			<Input value={message}
				onSubmit={onSubmit}
				onChange={({target})=> setMessage(target.value)}
				className='flex-1 h-full px-3 py-1 mr-3 text-gray-700'
				placeholder='Escribe un mensaje'/>
			<Button onClick={onSubmit} className='p-1 px-3'>
				<SendIcon
					width='2rem'
					height='2rem'
					fill='white'/>
			</Button>
		</div>
	);
}
