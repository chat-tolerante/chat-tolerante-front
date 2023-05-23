import {useMemo} from 'react';
import {stringToColor} from 'src/services/utils';
import {IDefaultProps} from 'src/types/default-props';

export interface IUserCircleProps extends IDefaultProps {
    username: string;
}

/**
 * Component for showing a circle with user initials
 *
 * @param props - The user circle initials
 */
export default function UserCircle(props: IUserCircleProps){
	const initials = useMemo(()=>{
		const username = props.username;
		if(username.length<2)return '';
		if(username.includes(' ')){
			const [first, last] = username.split(' ');
			if(last?.length) return `${first[0]}${last[0]}`.toUpperCase();
		}
		return username.substring(0,2).toUpperCase();
	},[props.username]);

	const bgColor = useMemo(()=>stringToColor(props.username),[props.username]);

	return (
		<div className={`h-12 w-12 text-xl tracking-wide font-bold rounded-full flex items-center justify-center text-border ${props.className || ''}`} style={{backgroundColor: bgColor}}>
			<span className='mt-[-3px]'>{initials}</span>
		</div>
	);
}
