import ResponsiveDesktop from '@/components/ui/responsive/desktop';
import AppBarTop from '@/components/ui/appbar/top';
import { sliceToolControl } from '@/redux/slice';
import EpisodesForYou from './components/list/episodesForYou';
import Suggestion from './components/list/suggestion';
export function handleStyleViewTool() {
	const isViewTool = sliceToolControl.useGetState().open;
	const sliceData = isViewTool ? 5 : 7;
	const className = isViewTool
		? '2xl:grid-cols-5'
		: '2xl:grid-cols-7 xl:grid-cols-3';
	const classNamePodcast = isViewTool
		? '2xl:grid-cols-3'
		: '2xl:grid-cols-4 xl:grid-cols-2';
	return {
		className,
		classNamePodcast,
		sliceData,
	};
}
function PodcastDesktop() {
	return (
		<ResponsiveDesktop>
			<div className='flex flex-col gap-5'>
				<AppBarTop />
				<section className='w-full animate-translateBottom_duration_0dot8 flex flex-col gap-8 pb-4 lg:h-desktopWrapper lg:overflow-auto scrollHiddenY pr-3'>
					<EpisodesForYou />
					<Suggestion />
				</section>
			</div>
		</ResponsiveDesktop>
	);
}

export default PodcastDesktop;
