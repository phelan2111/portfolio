import FavouritesList from './components/list/favourites';
import Suggestion from './components/list/suggestion';

function PodcastsMobile() {
	return (
		<div className='px-4 py-2 flex flex-col gap-4 overflow-y-auto h-podcasts snap-mandatory snap-y'>
			<FavouritesList />
			<Suggestion />
		</div>
	);
}

export default PodcastsMobile;
