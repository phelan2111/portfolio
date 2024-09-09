import Localize from '@/langs';
import data from '@/pages/music/data/bestOfArtists.json';
import BestOfArtistItem from '@/components/ui/item/bestOfArtist';

function BestOfArtists() {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>{Localize('BEST_OF_ARTIST')}</h4>
			<div className='flex flex-nowrap overflow-x-auto gap-4 scrollHiddenX snap-mandatory snap-x'>
				{data.map((i) => {
					return <BestOfArtistItem {...i} key={i.image} />;
				})}
			</div>
		</section>
	);
}

export default BestOfArtists;
