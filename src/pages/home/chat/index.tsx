import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import UserList from 'src/components/organisms/UsersList';
import OpenChat from 'src/components/organisms/OpenChat';
import {useState} from 'react';

/**
 * The main page, the chat
 */
export default function Chat() {
	const [userId, setUserId] = useState<number | string>();

	return (
		<Container className='lg:py-4'>
			<Card className='w-full h-full max-w-screen-xl'>
				<div className='h-full flex'>
					<div className='w-full lg:w-4/12 h-full'>
						<UserList selectedId={userId} onSelectUser={setUserId}/>
					</div>
					<div className='flex-1 hidden md:block'>
						<OpenChat userId={userId} className='h-full w-full'/>
					</div>
				</div>
			</Card> 
		</Container>
	);
}
