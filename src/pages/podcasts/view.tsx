import ScreenResponsive from '@/components/ui/responsive/screen';
import PodcastDesktop from '@/layout/desktop/podcasts';
import PodcastsMobile from '@/layout/mobile/podcasts';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <PodcastsMobile />}
			desktop={() => <PodcastDesktop />}
		/>
	);
}

export default View;
