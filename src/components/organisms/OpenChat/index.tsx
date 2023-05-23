import IncomingMessage from 'src/components/atoms/Message/IncomingMessage';
import OutcomingMessage from 'src/components/atoms/Message/OutcomingMessage';
import MessageInput from 'src/components/molecules/MessageInput';
import OpenChatRow from 'src/components/molecules/OpenChatRow';
import {IDefaultProps} from 'src/types/default-props';
import styles from './chat.module.css';

export default function OpenChat(props: IDefaultProps){
	return (
		<div className={`flex flex-col ${props.className || ''}`}>
			<OpenChatRow user={{username: 'Kevin Martinez', email: 'kevin@kevin', id: 0}}/>
			<div className={`flex-1 p-3 px-10 overflow-y-auto ${styles.gradient}`}>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<IncomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
				<OutcomingMessage className='my-3' message={{message: 'Hola', date: new Date().toString(), senderId: 0}}/>
			</div>
			<MessageInput/>
		</div>
	);
}
