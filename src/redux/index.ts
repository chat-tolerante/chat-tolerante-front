import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({

});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
