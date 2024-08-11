import AlbumCard from '@/components/ui/card/album';
import Localize from '@/langs';
import data from '@/pages/home/data/yourTopMixes.json';

function RecommendedForDay() {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>
				{Localize('RECOMMENDED_FOR_DAY')}
			</h4>
			<div className='flex flex-nowrap gap-2 overflow-x-auto scrollHiddenX snap-mandatory snap-x'>
				{data.map((album) => (
					<AlbumCard
						{...album}
						key={
							album.albumName +
							album.albumImage +
							RecommendedForDay.name
						}
					/>
				))}
			</div>
		</section>
	);
}

export default RecommendedForDay;
