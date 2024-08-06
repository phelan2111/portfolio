import HomeMobile from '@/layout/mobile/home';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('HomeView', props);
	return <HomeMobile />;
}

export default View;
