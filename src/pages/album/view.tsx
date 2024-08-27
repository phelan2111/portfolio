import ScreenResponsive from '@/components/ui/responsive/screen';
import AlbumMobile from '@/layout/mobile/album';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('props', props);
	return (
		<ScreenResponsive
			mobile={() => <AlbumMobile />}
			desktop={() => <div>Album Desktop</div>}
		/>
	);
}

export default View;
