import {IUser} from './user';

export interface IMessage{
    message: string;
    date: string;
    senderId: number | string;
    sender?: IUser;
}
