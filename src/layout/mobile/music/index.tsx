import AppBar from '@/components/appbar/appBar';
import FamiliarAlbum from './list/familiarAlbum';
import YourTopMixes from './list/yourTopMixes';
import YourFavoriteArtists from './list/yourFavoriteArtists';
import ToTry from './list/toTry';
import BestOfArtists from './list/bestOfArtists';
import Charts from './list/charts';

interface IMusicMobileProps {
	onGetInformationChart: (dataItem: unknown) => void;
}

function MusicMobile(props: IMusicMobileProps) {
	return (
		<div className='pb-[105px] select-none flex-col gap-3 flex'>
			<AppBar />
			<div
				id='homeMobile'
				className='flex px-4 flex-col gap-6 overflow-y-auto h-home snap-mandatory snap-y'>
				<FamiliarAlbum />
				<YourTopMixes />
				<YourFavoriteArtists />
				<BestOfArtists />
				<Charts onClick={props.onGetInformationChart} />
				<ToTry />
			</div>
		</div>
	);
}

export default MusicMobile;
