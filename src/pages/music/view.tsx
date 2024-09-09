import ScreenResponsive from '@/components/ui/responsive/screen';
import MusicDesktop from '@/layout/desktop/music';
import MusicMobile from '@/layout/mobile/music';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('View', props);
	return (
		<ScreenResponsive
			mobile={() => <MusicMobile />}
			desktop={() => <MusicDesktop />}
		/>
	);
}

export default View;
