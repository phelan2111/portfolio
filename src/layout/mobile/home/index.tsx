import NewReleaseCard from './components/card/newRelease';
import EpisodesForYou from './components/list/episodesForYou';
import FamiliarAlbum from './components/list/familiarAlbum';
import RecommendedForDay from './components/list/recommendedForDay';
import ToTry from './components/list/toTry';
import TodayBiggestHits from './components/list/todayBiggestHits';
import YourFavoriteArtists from './components/list/yourFavoriteArtists';
import YourTopMixes from './components/list/yourTopMixes';
import AppBar from '@/components/ui/appbar/bottom';

interface IHomeMobileProps {}

function HomeMobile(props: IHomeMobileProps) {
	console.log('HomeMobile', props);
	return (
		<div className='pb-[105px] select-none flex-col flex'>
			<AppBar />
			<div
				id='homeMobile'
				className='flex px-4 flex-col gap-6 overflow-y-auto h-home snap-mandatory snap-y animate-translateBottom_duration_0dot8'>
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
