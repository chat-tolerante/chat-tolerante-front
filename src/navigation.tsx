import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Chat from './pages/home/chat';
import Login from './pages/home/login';
import Register from './pages/home/register';
import Home from './pages/home';
import MobileChat from './pages/home/chat/mobile';

export const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Home/>} >
		<Route path='chat/:id' element={<MobileChat/>}/>
		<Route path='chat' element={<Chat/>}/>
		<Route path='login' Component={Login}/>
		<Route path='register' Component={Register}/>
	</Route>
));
