import {InputHTMLAttributes} from 'react';
import {IDefaultProps} from 'src/types/default-props';

export type TInputProps = IDefaultProps & InputHTMLAttributes<HTMLInputElement>;
export default function Input({className, ...props}: TInputProps){
	return <input className={`rounded-md bg-gray-50 ${className}`} {...props}/>;
}
