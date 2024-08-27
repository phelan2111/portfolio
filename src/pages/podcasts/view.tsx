import ScreenResponsive from '@/components/ui/responsive/screen';
import PodcastsMobile from '@/layout/mobile/podcasts';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <PodcastsMobile />}
			desktop={() => <div>Podcasts Desktop</div>}
		/>
	);
}

export default View;
