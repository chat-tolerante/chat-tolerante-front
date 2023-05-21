import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {type IUser} from '../types/user';
import {RootState} from '.';

export interface IUserState {
	user?: IUser;
    isLoggedIn: boolean;
    loading: boolean;
}

const initialState: IUserState = {
	isLoggedIn: false,
	loading: true
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>){
			state.loading = action.payload;
		},
		setUser(state, action: PayloadAction<IUser | undefined>){
			state.isLoggedIn = !!action.payload;
			state.user = action.payload;
		}
	}
});

export const userActions = userSlice.actions;
export const userStateSelector = (rootState: RootState)=>rootState[userSlice.name];
