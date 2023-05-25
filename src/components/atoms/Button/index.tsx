import {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {IDefaultProps} from 'src/types/default-props';
import {ReactComponent as SpinnerIcon} from 'src/assets/icons/spinner.svg';

export interface IButtonProps extends IDefaultProps{
	loading?: boolean;
}

type Props = IButtonProps 
& PropsWithChildren 
& ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Custom Button
 *
 * @param root0 - The button props
 * @param root0.className - Extra css clases
 * @param root0.children - Children for inside the button
 * @param root0.loading - If the button is in laoding state
 */
export default function Button({
	className, 
	children, 
	loading, 
	...props
}: Props) {
	return (
		<button className={`bg-primary text-lg font-bold rounded-md drop-shadow-lg text-center shadow-gray-500 justify-center flex items-center ${className || ''}`}
			{...props}
			disabled={loading || props.disabled}>
			{loading && (
				<span className='mr-2 animate-spin'>
					<SpinnerIcon height="1.2em"
						width="1.2em"
						fill='white'/>
				</span>
			)}
			{children}
		</button>
	);

}
