import NewReleaseCard from './components/card/newRelease';
import EpisodesForYou from './components/list/episodesForYou';
import FamiliarAlbum from './components/list/familiarAlbum';
import RecommendedForDay from './components/list/recommendedForDay';
import ToTry from './components/list/toTry';
import TodayBiggestHits from './components/list/todayBiggestHits';
import YourFavoriteArtists from './components/list/yourFavoriteArtists';
import YourTopMixes from './components/list/yourTopMixes';
import AppBar from '@/components/appbar/appBar';

function HomeMobile() {
	return (
		<div className='pb-[105px] select-none flex-col gap-3 flex'>
			<AppBar />
			<div
				id='homeMobile'
				className='flex px-4 flex-col gap-6 overflow-y-auto h-home snap-mandatory snap-y'>
				<FamiliarAlbum />
				<NewReleaseCard />
				<YourTopMixes />
				<YourFavoriteArtists />
				<TodayBiggestHits />
				<RecommendedForDay />
				<EpisodesForYou />
				<ToTry />
			</div>
		</div>
	);
}

export default HomeMobile;
