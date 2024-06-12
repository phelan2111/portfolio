import AlbumCard from '@/components/card/album';
import Localize from '@/langs';
import data from '../../data/yourTopMixes.json';

function TodayBiggestHits() {
	return (
		<section className='flex flex-col gap-3'>
			<h4 className='text-xl font-bold'>
				{Localize('TODAY_BIGGEST_HITS')}
			</h4>
			<div className='flex flex-nowrap gap-2 overflow-x-auto scrollHiddenX'>
				{data.map((album) => (
					<AlbumCard
						{...album}
						key={TodayBiggestHits.name + album.albumImage}
					/>
				))}
			</div>
		</section>
	);
}

export default TodayBiggestHits;
