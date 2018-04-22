
import Home from '../components/home';
import About from '../components/about';
import Login from '../components/login';


const routes = [
	{
		path: '/',
		redirect: '/list'

	},
	{
		path: '/list',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/login',
		component: Login
	}
]

export default routes