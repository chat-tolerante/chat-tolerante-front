import {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';

/**
 * Custom Button
 *
 * @param root0 - The button props
 * @param root0.className - Extra css clases
 * @param root0.children - Children for inside the button
 */
export default function Button({className, children, ...props}: IDefaultProps & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>){
	return(
		<button className={`bg-primary text-lg font-bold rounded-md drop-shadow-lg w-40 py-3 px-5 text-center shadow-gray-500 ${className || ''}`} {...props}>{children}</button>
	);

}
