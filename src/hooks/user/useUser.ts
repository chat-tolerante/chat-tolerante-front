import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {globalActions, useAppDispatch} from 'src/redux';
import {userActions, userStateSelector} from 'src/redux/user.slice';
import {TLoginCredentials} from 'src/schemas/login.schema';
import {TRegisterCredentials} from 'src/schemas/register.schema';
import {login as userLogin, register as userRegister, logout as userLogout, isLoggedIn} from 'src/services/user';

/**
 * Hook for managing the user state
 */
export default function useUser(){
	const userState = useSelector(userStateSelector);
	const dispatch = useAppDispatch();

	const login = useCallback(async(credentials: TLoginCredentials)=>{
		const user = await userLogin(credentials); 
		dispatch(userActions.setUser(user));
	},[dispatch]);

	const register = useCallback(async(credentials: TRegisterCredentials)=>{
		const user = await userRegister(credentials);
		dispatch(userActions.setUser(user));
	},[dispatch]);

	const logout = useCallback(async()=>{
		await userLogout();
		dispatch(globalActions.clear());
	},[dispatch]);

	const checkLogedIn = useCallback(async()=>{
		try{
			const user = await isLoggedIn();
			dispatch(userActions.setUser(user));
		}finally{
			dispatch(userActions.setLoading(false));
		}
	},[]);

	return {...userState, login, register, logout, checkLogedIn};
}
