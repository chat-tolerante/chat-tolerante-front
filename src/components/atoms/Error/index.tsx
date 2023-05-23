import {PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';

/**
 * Component for showing errors
 *
 * @param props - Erorr props
 */
export default function Error(props: IDefaultProps & PropsWithChildren){
	return <div className={`text-sm font-normal text-red-500 ${props.className || ''}`}>{props.children}</div>;
}
