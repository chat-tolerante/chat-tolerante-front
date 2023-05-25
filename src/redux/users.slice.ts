import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUser} from 'src/types/user';
import {type RootState} from '.';

export interface IUsersState{
	users: Array<IUser & {unread?: boolean}>
}

const initialState: IUsersState = {users: []};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<IUser[]>) {
			state.users = action.payload;
		},
		addUser(state, action: PayloadAction<IUser>) {
			state.users.push(action.payload);
		}
	}
});

export const usersActions = usersSlice.actions;
export const usersSelector = (rootState: RootState)=> 
	rootState[usersSlice.name].users;
export const userSelector = (userId?: number|string)=> 
	(rootState: RootState)=> 
		rootState[usersSlice.name].users.find(user=> user.id === userId); 
