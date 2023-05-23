import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import UserList from 'src/components/organisms/UsersList';
import {IUser} from 'src/types/user';
import {faker} from '@faker-js/faker';
import OpenChat from 'src/components/organisms/OpenChat';

const userList: IUser[] = Array(15).fill(undefined).map((_, id)=>({id, email: faker.internet.email(), username: faker.person.fullName()}));

/**
 * The main page, the chat
 */
export default function Chat(){
	return (
		<Container className='lg:py-4'>
			<Card className='w-full h-full max-w-screen-xl'>
				<div className='h-full flex'>
					<div className='w-full lg:w-4/12 h-full'>
						<UserList users={userList}/>
					</div>
					<div className='flex-1 hidden md:block'>
						<OpenChat className='h-full w-full'/>
					</div>
				</div>
			</Card> 
		</Container>
	);
}
