import {IDefaultProps} from 'src/types/default-props';
import {IMessage} from 'src/types/message';
import styles from './message.module.css';

export interface IOutcomingMessageProps extends IDefaultProps{
    message: IMessage;
}

export default function OutcomingMessage(props: IOutcomingMessageProps){
	return (
		<div className={`bg-bg_green rounded-md rounded-tr-none w-7/12 relative p-2 px-3 ml-auto ${props.className|| ''}`}>
			<div className={styles.triangle_inverted}/>
			<div className='text-gradient2 '>{props.message.message}</div>
			<div className='text-gradient1 font-thin text-right text-xs'>{new Date(props.message.date).toLocaleString('es-mx', {month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</div>
		</div>
	);
}
