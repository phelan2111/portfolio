import HomeDesktop from '@/layout/desktop/home';
import HomeMobile from '@/layout/mobile/home';
import { Fragment } from 'react';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('HomeView', props);
	return (
		<Fragment>
			<HomeMobile />
			<HomeDesktop />
		</Fragment>
	);
}

export default View;
