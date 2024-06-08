import { createBrowserRouter } from 'react-router-dom';
// import { PATH } from './config';
import { lazy } from 'react';
const SignInAndSignUp = lazy(
	() => import('@/pages/mobile/kyc/signInAndSignUp'),
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignInAndSignUp />,
	},
	{
		path: 'about',
		element: <div>About</div>,
	},
]);

export default router;
