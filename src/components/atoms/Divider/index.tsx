import {IDefaultProps} from 'src/types/default-props';

/**
 * Simple line divider
 *
 * @param props - Divider props
 */
export default function Divider(props: IDefaultProps){
	return <div className={`blur-[0.8px] opacity-60 rounded-full bg-divider h-[1px] ${props.className || ''}`}/>;
}
