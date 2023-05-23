import {PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';

/**
 * Main container, sets the background and justify items
 *
 * @param props - Container props
 */
export default function Container(props: IDefaultProps & PropsWithChildren){
	return (
		<div className={`w-full h-full bg-gray-100 flex items-center justify-center ${props.className}`}>
			{props.children}
		</div>
	);
}
