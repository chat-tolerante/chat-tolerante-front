import {Outlet} from 'react-router-dom';

/**
 * Outlet home for determining if the user should go to chat or login
 */
export default function Home(){
	return <Outlet/>;
}
