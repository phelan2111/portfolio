import AppBar from './components/appBar';
import NewReleaseCard from './components/card/newRelease';
import EpisodesForYou from './components/list/episodesForYou';
import FamiliarAlbum from './components/list/familiarAlbum';
import RecommendedForDay from './components/list/recommendedForDay';
import ToTry from './components/list/toTry';
import TodayBiggestHits from './components/list/todayBiggestHits';
import YourFavoriteArtists from './components/list/yourFavoriteArtists';
import YourTopMixes from './components/list/yourTopMixes';

function HomeMobile() {
	return (
		<main className='pb-[105px] select-none py-4 flex flex-col gap-3'>
			<AppBar />
			<div className='flex px-4 flex-col gap-6'>
				<FamiliarAlbum />
				<NewReleaseCard />
				<YourTopMixes />
				<YourFavoriteArtists />
				<TodayBiggestHits />
				<RecommendedForDay />
				<EpisodesForYou />
				<ToTry />
			</div>
		</main>
	);
}

export default HomeMobile;
