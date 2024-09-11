import ScreenResponsive from '@/components/ui/responsive/screen';
import PodcastsDetailsDesktop from '@/layout/desktop/podcasts/details';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <div>Podcasts Details Mobile</div>}
			desktop={() => <PodcastsDetailsDesktop />}
		/>
	);
}

export default View;
