import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import OpenChat from 'src/components/organisms/OpenChat';
import useUsers from 'src/hooks/user/useUsers';

/**
 * View for chat on mobile devices
 */
export default function MobileChat() {
	const {id: userId} = useParams();
	const {getList} =useUsers();
	useEffect(()=> {
		getList();
	},[]);

	return (
		<Container >
			<Card className='w-full h-full max-w-screen-xl'>
				<div className='h-full flex'>
					<OpenChat userId={userId?+userId:undefined} className='h-full w-full'/>
				</div>
			</Card> 
		</Container>
	);
}
