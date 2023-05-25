import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Chat from './pages/home/chat';
import Login from './pages/home/login';
import Register from './pages/home/register';
import Home from './pages/home';

export const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Home/>} >
		<Route path='chat' Component={Chat}/>
		<Route path='login' Component={Login}/>
		<Route path='register' Component={Register}/>
	</Route>,
));
