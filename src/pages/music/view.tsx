import ScreenResponsive from '@/components/ui/responsive/screen';
import MusicMobile from '@/layout/mobile/music';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('View', props);
	return (
		<ScreenResponsive
			mobile={() => <MusicMobile />}
			desktop={() => <div> MusicDesktop</div>}
		/>
	);
}

export default View;
