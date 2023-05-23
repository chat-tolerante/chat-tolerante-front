import {PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';
import {IMessage} from 'src/types/message';
import styles from './message.module.css';

export interface IIncomingMessageProp extends IDefaultProps {
    message: IMessage;
}

export default function IncomingMessage(props: IIncomingMessageProp & PropsWithChildren){
	return (
		<div className={`bg-bg1 rounded-md rounded-tl-none w-7/12 relative p-2 px-3 ${props.className || ''}`}>
			<div className={styles.triangle}/>
			<div className='text-gradient2 '>{props.message.message}</div>
			<div className='text-gradient1 font-thin text-right text-xs'>{new Date(props.message.date).toLocaleString('es-mx', {month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</div>
		</div>
	);
}
