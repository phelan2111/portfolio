import VerticalSinger from '@/components/item/singer/vertical';
import Localize from '@/langs';
import data from '../../data/yourFavoriteArtist.json';

function YourFavoriteArtists() {
	return (
		<section className='flex flex-col gap-3'>
			<h4 className='text-xl font-bold'>
				{Localize('YOUR_FAVORITE_ARTISTS')}
			</h4>
			<div className='flex flex-nowrap overflow-x-auto gap-4 scrollHiddenX'>
				{data.map((i) => (
					<VerticalSinger key={i.avatarSinger} {...i} />
				))}
			</div>
		</section>
	);
}

export default YourFavoriteArtists;
