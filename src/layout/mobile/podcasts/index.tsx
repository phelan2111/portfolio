import AppBar from '@/components/ui/appbar/bottom';
import FavouritesList from './components/list/favourites';
import Suggestion from './components/list/suggestion';

function PodcastsMobile() {
	return (
		<div>
			<AppBar />
			<div className='px-4 py-2 lg:hidden flex flex-col gap-4 overflow-y-auto h-podcasts pb-8 snap-mandatory snap-y animate-translateBottom_duration_0dot8'>
				<FavouritesList />
				<Suggestion />
			</div>
		</div>
	);
}

export default PodcastsMobile;
