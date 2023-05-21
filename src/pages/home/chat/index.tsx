import Card from 'src/components/atoms/Card';
import Container from 'src/components/atoms/Container';
import UserList from 'src/components/organisms/UsersList';
import {IUser} from 'src/types/user';

const user = {
	username: 'Kevin Martinez',
};

const userList: IUser[] = [
	{username: 'Juan Lopez', email: 'test@tset.com', id: 1},
	{username: 'Kevin Martinez', email: 'test1@tset.com', id: 2},
	{username: 'Fernanda Lara', email: 'test1@tset.com', id: 3},
	{username: 'Juan Lopez', email: 'test@tset.com', id: 1},
	{username: 'Juan Lopez', email: 'test@tset.com', id: 1},
	{username: 'Kevin Martinez', email: 'test1@tset.com', id: 2},
	{username: 'Fernanda Lara', email: 'test1@tset.com', id: 3},
	{username: 'Kevin Martinez', email: 'test1@tset.com', id: 2},
	{username: 'Fernanda Lara Reynoso', email: 'test1@tset.com', id: 3},
	{username: 'Fernanda Lara Reynoso', email: 'test1@tset.com', id: 3},
	{username: 'Fernanda Lara Reynoso', email: 'test1@tset.com', id: 3},
	{username: 'Fernanda Lara Reynoso', email: 'test1@tset.com', id: 3},
];

export default function Chat(){
	return (
		<Container className='lg:py-4'>
			<Card className='w-full h-full max-w-screen-xl'>
				<div className='h-full'>
					<div className='lg:w-4/12 h-full'>
						<UserList users={userList}/>
					</div>

				</div>
			</Card> 
		</Container>
	);
}
