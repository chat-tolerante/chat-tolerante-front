import {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import Loader from 'src/components/atoms/Loader';
import useUser from 'src/hooks/user/useUser';
const allowWithNoAuth = ['/login', '/register'];

/**
 * Outlet home for determining if the user should go to chat or login
 */
export default function Home() {
	const navigate = useNavigate();
	const location = useLocation();
	const {loading, isLoggedIn, checkLogedIn} = useUser();

	useEffect(()=> {
		checkLogedIn();
	},[checkLogedIn, loading]);

	useEffect (()=> {
		if(loading) return;
		if(!isLoggedIn) {
			if(allowWithNoAuth.includes(location.pathname))return;
			navigate('/login', {replace: true});
			return;
		}
		if(!location.pathname.includes('chat'))
			navigate('/chat', {replace: true});
	},[navigate, location.pathname, isLoggedIn, loading]);

	if(loading) {
		return <Loader/>;
	}

	return <Outlet/>;
}
