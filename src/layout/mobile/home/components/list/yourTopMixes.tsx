import AlbumCard from '@/components/ui/card/album';
import Localize from '@/langs';
import data from '../../data/yourTopMixes.json';

function YourTopMixes() {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>{Localize('YOUR_TOP_MIX')}</h4>
			<div className='flex flex-nowrap gap-2 overflow-x-auto scrollHiddenX snap-mandatory snap-x'>
				{data.map((album) => (
					<AlbumCard
						{...album}
						key={
							album.albumName +
							album.albumImage +
							YourTopMixes.name
						}
					/>
				))}
			</div>
		</section>
	);
}

export default YourTopMixes;
