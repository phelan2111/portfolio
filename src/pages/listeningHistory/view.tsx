import ScreenResponsive from '@/components/ui/responsive/screen';
import ListeningHistoryMobile from '@/layout/mobile/listeningHistory';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <ListeningHistoryMobile />}
			desktop={() => <div>ListeningHistoryDesktop</div>}
		/>
	);
}

export default View;
