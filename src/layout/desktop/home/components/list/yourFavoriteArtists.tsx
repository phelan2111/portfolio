import Localize from '@/langs';
import data from '@/pages/home/data/yourFavoriteArtist.json';
import VerticalSingerItem from '@/components/ui/item/vertical';
import { handleStyleViewTool } from '../..';

function YourFavoriteArtists() {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>
				{Localize('YOUR_FAVORITE_ARTISTS')}
			</h4>
			<div
				className={`grid xl:grid-cols-3 lg:grid-cols-3 gap-4 px-4 ${
					handleStyleViewTool().className
				}`}>
				{data.slice(0, handleStyleViewTool().sliceData).map((i) => (
					<VerticalSingerItem key={i.avatarSinger} {...i} />
				))}
			</div>
		</section>
	);
}

export default YourFavoriteArtists;
