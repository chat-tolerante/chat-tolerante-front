import {PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';
import {IMessage} from 'src/types/message';
import styles from './message.module.css';
import Timestamp from './Timestamp';

export interface IIncomingMessageProp extends IDefaultProps {
	message: IMessage;
}

/**
 * Component for showing an incoming message
 *
 * @param props - The incoming message props
 */
export default function IncomingMessage(
	props: IIncomingMessageProp & PropsWithChildren
) {
	return (
		<div className={`bg-bg1 rounded-md rounded-tl-none w-7/12 relative p-2 px-3 ${props.className || ''}`}>
			<div className={styles.triangle}/>
			<div className='text-gradient2 '>
				{props.message.text}
			</div>
			<Timestamp date={new Date(props.message.createdDate)}/>
		</div>
	);
}
