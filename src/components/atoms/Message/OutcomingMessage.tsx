import {IDefaultProps} from 'src/types/default-props';
import {IMessage} from 'src/types/message';
import styles from './message.module.css';
import Timestamp from './Timestamp';

export interface IOutcomingMessageProps extends IDefaultProps{
    message: IMessage;
}

/**
 * Component for showing an outcoming message
 *
 * @param props - The outcoming message props
 */
export default function OutcomingMessage(props: IOutcomingMessageProps){
	return (
		<div className={`bg-bg_green rounded-md rounded-tr-none w-7/12 relative p-2 px-3 ml-auto ${props.className|| ''}`}>
			<div className={styles.triangle_inverted}/>
			<div className='text-gradient2 '>{props.message.message}</div>
			<Timestamp date={new Date(props.message.date)}/>
		</div>
	);
}
