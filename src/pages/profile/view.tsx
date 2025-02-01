import ScreenResponsive from '@/components/ui/responsive/screen';
import HomeDesktop from '@/layout/desktop/home';
import HomeMobile from '@/layout/mobile/home';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('HomeView', props);
	return (
		<ScreenResponsive
			mobile={() => <HomeMobile />}
			desktop={() => <HomeDesktop />}
		/>
	);
}

export default View;
