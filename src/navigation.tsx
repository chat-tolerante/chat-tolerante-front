import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Chat from './pages/home/chat';

export const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/'>
		<Route path='chat' Component={Chat}/>
	</Route>,
));
