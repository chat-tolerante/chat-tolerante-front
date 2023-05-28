import IncomingMessage from 'src/components/atoms/Message/IncomingMessage';
import OutcomingMessage from 'src/components/atoms/Message/OutcomingMessage';
import MessageInput from 'src/components/molecules/MessageInput';
import OpenChatRow from 'src/components/molecules/OpenChatRow';
import {IDefaultProps} from 'src/types/default-props';
import styles from './chat.module.css';
import useOpenedChat from 'src/hooks/chat/useOpenedChat';
import useUser from 'src/hooks/user/useUser';
import {useEffect} from 'react';
import {isNotUndef} from 'src/services/utils';

export interface IOpenChatProps extends IDefaultProps{
	userId?: number | string;
}

/**
 * Shows the whole opned chat
 *
 * @param props - Component props
 */
export default function OpenChat(props: IOpenChatProps) {
	const {user: self} = useUser();
	const {user, messages, polling} = useOpenedChat(props.userId);

	useEffect(()=> {
		return polling();
	},[polling]);


	return (
		<div className={`flex flex-col ${props.className || ''}`}>
			<OpenChatRow user={user}/>
			<div className={`flex-1 p-3 px-10 overflow-y-auto ${styles.gradient}`}>
				{
					messages.map(message=> message.sender.id === self?.id ?
						(<OutcomingMessage key={message.createdDate}
							className='my-3'
							message={message}/>)
						:
						(<IncomingMessage key={message.createdDate}
							className='my-3'
							message={message}/>))
				}
			</div>
			{isNotUndef(props.userId) && 
			<MessageInput userId={props.userId as string|number}/>
			}
		</div>
	);
}
