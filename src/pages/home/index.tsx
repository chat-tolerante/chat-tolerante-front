import {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import Loader from 'src/components/atoms/Loader';
import useUser from 'src/hooks/user/useUser';

/**
 * Outlet home for determining if the user should go to chat or login
 */
export default function Home(){
	const navigate = useNavigate();
	const location = useLocation();
	const {loading, isLoggedIn, checkLogedIn} = useUser();

	useEffect(()=>{
		checkLogedIn();
	},[checkLogedIn]);
	console.error(isLoggedIn);

	useEffect (()=>{
		if(!isLoggedIn){
			if(location.pathname !== '/chat')return;
			navigate('/login', {replace: true});
			return;
		}
		if(!location.pathname.includes('chat'))
			navigate('/chat', {replace: true});
	},[navigate, location.pathname, isLoggedIn]);

	if(loading){
		return <Loader/>;
	}

	return <Outlet/>;
}
