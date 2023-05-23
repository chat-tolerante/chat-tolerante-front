import {PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';

/**
 * Card component for main content
 *
 * @param props - Card props
 */
export default function Card(props: PropsWithChildren & IDefaultProps){
	return <main className={`overflow-hidden rounded-md ${props.className}`}>{props.children}</main>;
}
