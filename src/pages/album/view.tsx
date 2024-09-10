import ScreenResponsive from '@/components/ui/responsive/screen';
import AlbumDesktop from '@/layout/desktop/album';
import AlbumMobile from '@/layout/mobile/album';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('props', props);
	return (
		<ScreenResponsive
			mobile={() => <AlbumMobile />}
			desktop={() => <AlbumDesktop />}
		/>
	);
}

export default View;
