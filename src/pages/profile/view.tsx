import ScreenResponsive from '@/components/ui/responsive/screen';
import ProfileDesktop from '@/layout/desktop/profile';
import HomeMobile from '@/layout/mobile/home';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('HomeView', props);
	return <ScreenResponsive mobile={() => <HomeMobile />} desktop={() => <ProfileDesktop />} />;
}

export default View;
