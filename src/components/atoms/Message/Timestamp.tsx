import {dateToString} from 'src/services/utils';
import {IDefaultProps} from 'src/types/default-props';

export interface ITimestampProps{
    date: Date;
}

/**
 * Component for showing a date in a legible way
 *
 * @param props - The Timestamps props
 */
export default function Timestamp(props: ITimestampProps & IDefaultProps){
	return (
		<div className={`text-gradient1 font-thin text-right text-xs ${props.className || ''}`}>
			{dateToString(props.date)}
		</div>
	);
}
