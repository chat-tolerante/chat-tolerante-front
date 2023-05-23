import {InputHTMLAttributes} from 'react';
import {IDefaultProps} from 'src/types/default-props';

export type TInputProps = IDefaultProps & InputHTMLAttributes<HTMLInputElement>;

/**
 * Custom input component
 *
 * @param root0 - Input props
 * @param root0.className - Extra css clases
 */
export default function Input({className, ...props}: TInputProps){
	return <input className={`rounded-md bg-gray-50 outline-none focus:outline-primary ${className}`} {...props}/>;
}
