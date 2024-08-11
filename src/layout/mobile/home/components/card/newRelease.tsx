import SongCard from '@/components/ui/card/song';
import Localize from '@/langs';
import data from '@/pages/home/data/newRelease.json';
function NewReleaseCard() {
	return (
		<aside className='flex flex-col gap-3 snap-start'>
			<div className='flex gap-3'>
				<img
					className='w-12 h-12 object-cover rounded-full shadow-bootstrapLarge'
					src={data.avatar}
					alt={data.avatar}
				/>
				<div className='flex flex-col justify-between'>
					<p className='text-xs'>{Localize('NEW_RELEASE_FROM')}</p>
					<h3 className='text-md font-bold'>{data.singerName}</h3>
				</div>
			</div>
			<SongCard {...data.song} />
		</aside>
	);
}

export default NewReleaseCard;
