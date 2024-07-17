import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './config';
import { lazy } from 'react';
import BasicWrapper from '@/components/ui/wrapper/basic';
import AuthWrapper from '@/components/ui/wrapper/auth';
const SignIn = lazy(() => import('@/pages/kyc/signIn'));
const SignUp = lazy(() => import('@/pages/kyc/signUp'));
const Home = lazy(() => import('@/pages/home'));
const Album = lazy(() => import('@/pages/album'));
const Podcasts = lazy(() => import('@/pages/podcasts'));
const Search = lazy(() => import('@/pages/search'));
const Music = lazy(() => import('@/pages/music'));
const Chart = lazy(() => import('@/pages/chart'));
const YourLibrary = lazy(() => import('@/pages/yourLibrary'));

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
				path: PATH.YOUR_LIBRARY,
				element: <YourLibrary />,
			},
			{
				path: PATH.ALBUM._,
				element: <Album />,
			},
			{
				path: PATH.PODCASTS._,
				element: <Podcasts />,
			},
			{
				path: PATH.SEARCH,
				element: <Search />,
			},
			{
				path: PATH.MUSIC._,
				element: <Music />,
			},
			{
				path: PATH.CHART._,
				element: <Chart />,
			},
		],
	},
]);

export default router;
