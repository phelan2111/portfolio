import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './config';
import { lazy } from 'react';
import BasicWrapper from '@/components/wrapper/basic';
import AuthWrapper from '@/components/wrapper/auth';
const SignIn = lazy(() => import('@/pages/kyc/signIn'));
const SignUp = lazy(() => import('@/pages/kyc/signUp'));
const Home = lazy(() => import('@/pages/home'));
const Album = lazy(() => import('@/pages/album'));
const Podcasts = lazy(() => import('@/pages/podcasts'));

const router = createBrowserRouter([
	{
		path: PATH.KYC._,
		element: <AuthWrapper />,
		children: [
			{
				path: PATH.KYC.SIGN_IN,
				element: <SignIn />,
			},
			{
				path: PATH.KYC.SIGN_UP,
				element: <SignUp />,
			},
		],
	},
	{
		path: PATH.HOME,
		element: <BasicWrapper />,
		children: [
			{
				path: PATH.HOME,
				element: <Home />,
			},
			{
				path: PATH.SEARCH,
				element: <Home />,
			},
			{
				path: PATH.YOUR_LIBRARY,
				element: <Home />,
			},
			{
				path: PATH.ALBUM,
				element: <Album />,
			},
			{
				path: PATH.PODCASTS._,
				element: <Podcasts />,
			},
		],
	},
]);

export default router;
