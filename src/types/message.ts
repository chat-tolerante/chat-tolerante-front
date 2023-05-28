import {IUser} from './user';

export interface IMessage{
	text: string;
	createdDate: string;
	sender: IUser;
	receiver: IUser;
}
