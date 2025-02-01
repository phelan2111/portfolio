import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './config';
import { lazy } from 'react';
import BasicWrapper from '@/components/ui/wrapper/basic';
import ThemeColor from '@/components/root/themes/color';
const Home = lazy(() => import('@/pages/home'));
const Profile = lazy(() => import('@/pages/home'));

const router = createBrowserRouter([
	{
		path: PATH.HOME,
		element: <ThemeColor />,
		children: [
			{
				path: PATH.HOME,
				element: <BasicWrapper />,
				children: [
					{
						path: PATH.HOME,
						element: <Home />,
					},
					{
						path: PATH.PROFILE,
						element: <Profile />,
					},
				],
			},
		],
	},
]);

export default router;
