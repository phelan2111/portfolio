import Localize from '@/langs';
import data from '../../data/yourFavoriteArtist.json';
import VerticalSingerItem from '@/components/ui/item/singer/vertical';

function YourFavoriteArtists() {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>
				{Localize('YOUR_FAVORITE_ARTISTS')}
			</h4>
			<div className='flex flex-nowrap overflow-x-auto gap-4 scrollHiddenX snap-mandatory snap-x'>
				{data.map((i) => (
					<VerticalSingerItem key={i.avatarSinger} {...i} />
				))}
			</div>
		</section>
	);
}

export default YourFavoriteArtists;
