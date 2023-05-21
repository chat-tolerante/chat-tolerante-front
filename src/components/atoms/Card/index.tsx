import {PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';

export default function Card(props: PropsWithChildren & IDefaultProps){
	return <div className={`overflow-hidden rounded-md bg-white ${props.className}`}>{props.children}</div>;
}
