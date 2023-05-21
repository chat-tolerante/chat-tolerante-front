import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {userSlice} from './user.slice';

const combinedReducers = combineReducers({
	[userSlice.name]: userSlice.reducer,
});

export const globalActionTypes = {
	clear: 'global/clear'
};

export const globalActions = {
	clear: ()=>({type: globalActionTypes.clear})
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rootReducer(state: any, action: Action){
	if(action.type === globalActions.clear) {
		return combinedReducers(undefined, action);
	}
	return combinedReducers(state, action);
} 

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: ()=> AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
