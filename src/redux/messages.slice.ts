import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IMessage} from 'src/types/message';
import {RootState} from '.';

export interface IMessagesState{
	messages: {[key: number | string]: IMessage[]}
}

const initialState: IMessagesState = {messages: {},};

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages(
			state,
			action: PayloadAction<{
				messages: IMessage[], 
				userId: number | string
			}>
		) {
			const {messages, userId} = action.payload;
			state.messages[userId] = messages;
		},
		addMessage(
			state, 
			action: PayloadAction<{
				message: IMessage, 
				userId: number | string
			}>
		) {
			const {message, userId} = action.payload;
			if(state.messages[userId] ) {
				state.messages[userId].push(message);
				return;
			}
			state.messages[userId] = [message];
		}
	}
});

export const messagesActions = messagesSlice.actions;
export const chatSelector = (userId?: number | string)=> 
	(rootState: RootState)=> typeof userId !== 'undefined' ? 
		rootState[messagesSlice.name].messages[userId] || []
		:[]; 
