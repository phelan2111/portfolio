import ScreenResponsive from '@/components/ui/responsive/screen';
import PlaylistMobile from '@/layout/mobile/playlist';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <PlaylistMobile />}
			desktop={() => <div>Playlist Desktop</div>}
		/>
	);
}

export default View;
