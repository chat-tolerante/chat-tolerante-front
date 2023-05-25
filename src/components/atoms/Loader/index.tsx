import {ReactComponent as ChatIcon} from 'src/assets/icons/chat.svg';

/**
 *
 */
export default function Loader(){
	return (
		<div className='h-full w-full justify-center items-center flex animate-pulse bg-bg1'>
			<ChatIcon width="20rem"/>
		</div>
	);
}
