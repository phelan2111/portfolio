import AppBar from '@/components/ui/appbar/appBar';
import FavouritesList from './components/list/favourites';
import Suggestion from './components/list/suggestion';

function PodcastsMobile() {
	return (
		<div>
			<AppBar />
			<div className='px-4 py-2 md:hidden flex flex-col gap-4 overflow-y-auto h-podcasts snap-mandatory snap-y animate-translateBottom_duration_1dot2'>
				<FavouritesList />
				<Suggestion />
			</div>
		</div>
	);
}

export default PodcastsMobile;
